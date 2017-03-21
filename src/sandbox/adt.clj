(ns sandbox.adt
  (:require [clojure.core.match :refer [match]]
            [clojure.string :as string]
            [clojure.set :as set]))
          

(defn adt [name tag-names]
  {:name (str name) 
   :tag-names (vec (map str tag-names))})




(defn define-tag [adt name slots]
 `(defn ~(symbol (str  "->" name)) [& vals#]
    {:slots (zipmap ~(vec (map keyword slots)) vals#) 
     :adt ~adt
     :tag ~(str name)}))   


(defn tag-name [tag]
  (if (list? tag) (first tag) tag))

(defn tag-slots [tag]
  (if (list? tag) (rest tag) []))

(defn- data-impl
  [name tags]
 `(do 
    ~@(for [tag tags]
        (define-tag 
          (adt name (map tag-name tags)) 
          (tag-name tag) 
          (tag-slots tag))))) 





(defmacro data 
 "Define a new ADT"
 [name & tags]
 (data-impl name tags))

(defn tags-to-string [clauses]
  (apply concat
    (for [[[tag & slots] then] (partition 2 clauses)]
      [(vector (str tag) (vec slots)) then])))



(defn- different-cases [tag-names clauses]
  (let [in-clauses (set (map (comp first first) (partition 2 clauses)))
        declared   (set tag-names)
        missing    (set/difference declared in-clauses)
        undefined  (set/difference in-clauses declared)]  
   (str (when (not-empty missing) 
          (str "Missing: " (string/join ", " missing)))

        (when (and (not-empty missing) (not-empty undefined))
           ", ")
        
        (when (not-empty undefined) 
          (str "Undefined: " (string/join ", " undefined))))))


(defn tags-in-clauses [clauses]
  (for [[[tag & _]] (partition 2 clauses)]
    tag))
                              

(defmacro case-of [expr & clauses]
  (let [{:keys [tag slots] {:keys [tag-names]} :adt} (eval expr)
         clauses (tags-to-string clauses)
         matchform (vector tag (vec (vals slots)))]   
    (if (not= (tags-in-clauses clauses) tag-names) 
       (throw (Error. (different-cases tag-names clauses)))
      `(match ~matchform
          ~@clauses)))) 


; Demo
(data UserId
  Anonymous
  (Registered id))




(defn test- []
  (case-of (->Registered 1)
    [Anonymous] "anon"
    [Registered id] id))







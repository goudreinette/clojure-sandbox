(ns sandbox.adt
  (:require [clojure.core.match :refer [match]]
            [clojure.string :as string]
            [clojure.set :as set]
            [sandbox.control-flow :refer [unless]]))
          

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



(defmacro when-message [& pred-form-pairs]
 `(str ~@(for [[pred form] (partition 2 pred-form-pairs)]
           (list 'when pred form))))


(defn- differences [tag-names clauses]
  (let [in-clauses (set (map (comp first first) (partition 2 clauses)))
        declared   (set tag-names)
        missing    (set/difference declared in-clauses)
        undefined  (set/difference in-clauses declared)]  
   (when-message 
      (not-empty missing) 
      (str "Missing: " (string/join ", " missing))
      
      (and (not-empty missing) (not-empty undefined)) 
      ", "
    
      (not-empty undefined) 
      (str "Undefined: " (string/join ", " undefined)))))

(defmacro throw-unless [pred message]
 `(unless ~pred
    (throw (Error. ~message))))    


(defn tags-in-clauses [clauses]
  (for [[[tag & _]] (partition 2 clauses)]
    tag))
                              

(defmacro case-of [expr & clauses]
  (let [{:keys [tag slots] {:keys [tag-names]} :adt} (eval expr)
         clauses (tags-to-string clauses)
         matchform (vector tag (vec (vals slots)))]  
    (throw-unless (= (tags-in-clauses clauses) tag-names)  
                  (differences tag-names clauses))
    `(match ~matchform
        ~@clauses))) 


; Demo
(data UserId
  Anonymous
  (Registered id))




(defn test- []
  (case-of (->Registered 1)
    [Anonymous] "anon"
    [Registered id] id))







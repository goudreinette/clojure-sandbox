(ns sandbox.adt
  (:use com.rpl.specter clojure.data)
  (:require [clojure.core.match :refer [match]]
            [clojure.string :as string :refer [join]]
            [clojure.set :as set]
            [sandbox.control-flow :refer [unless ensure when-message]]))


(defn tag-name [tag]
  (if (list? tag) (first tag) tag))

(defn tag-slots [tag]
  (if (list? tag) (rest tag) [])) 

(defn adt [name tags]
  {:name (str name) 
   :tag-names (vec (map (comp str tag-name) tags))})


(defn tag-constructor [adt name slots]
  (fn [& vals]
    {:slots (zipmap (vec (map keyword slots)) vals) 
     :adt adt
     :tag (str name)}))


(defn define-tag [adt name slots]
 `(def ~(symbol (str  "->" name)) 
       ~(tag-constructor adt name slots)))
       


(defn- data-impl
  [name tags]
 `(do 
    ~@(for [tag tags]
        (define-tag 
          (adt name tags) 
          (tag-name tag) 
          (tag-slots tag))))) 





(defmacro defdata 
 "Define a new ADT"
 [name & tags]
 (data-impl name tags))

(defn transform-clauses [clauses]
  (apply concat
    (for [[[tag & slots] then] (partition 2 clauses)]
      [[(str tag) (vec slots)] then])))


(defn tags-in-clauses [clauses]
  (for [[[tag & _]] (partition 2 clauses)]
    tag))
           


(defn- show-difference [declared in-clauses]
  (let [[missing undefined _] (diff declared in-clauses)] 
   (when-message 
      (not-empty missing) 
      (str "Missing: " (join ", " missing))

      (not-empty undefined) 
      (str "Undefined: " (join ", " undefined)))))


                   


(defmacro case-of [expr & clauses]
  (let [{:keys [tag slots] {:keys [tag-names]} :adt} (eval expr)
         clauses    (transform-clauses clauses)
         in-clauses (tags-in-clauses clauses)
         matchform  [tag (vec (vals slots))]]  
    (ensure (= in-clauses tag-names)  
            (show-difference tag-names in-clauses))
    `(match ~matchform
        ~@clauses))) 


; Demo
(defdata UserId
  Anonymous
  (Registered id))



(defn test- []
  (case-of (->Registered 1)
    [Anonymous] "anon"
    [Registered id] id))







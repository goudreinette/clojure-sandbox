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



(defn- missing-cases [expr clauses]
  (set/difference (set (:tag-names (:adt expr)))
                  (set (map (comp first first) (partition 2 clauses))))) 

(defmacro case-of [expr & clauses]
  (let [{:as expr {:keys [tag-names]} :adt :keys [tag]} (eval expr)
         clauses (tags-to-string clauses)
         matchform (vector (:tag expr) (vec (vals (:slots expr))))]   
    (if (< (/ (count clauses) 2) (count tag-names)) 
       (throw (Error. (str "Missing cases: " (string/join ", " (missing-cases expr clauses)))))
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






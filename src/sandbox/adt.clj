(ns sandbox.adt
  (:require [clojure.core.match :refer [match]]))


(defn adt [name tag-names]
  {:name (str name) 
   :tag-names (vec (map str tag-names))})




(defn define-tag [adt name slots]
 `(defn ~(symbol (str  "->" name)) [& vals#]
    {:slots (zipmap ~(vec (map str slots)) vals#) 
     :adt ~adt}))   


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

; (defn- missing-cases [adt & clauses]
;   ())

; (defmacro match-adt [adt expr & clauses]
;   (if (< clauses (count (:tags adt)))
;     (println "Missing cases" (missing-cases adt clauses))
;     ()))


(data UserId
  Anonymous
  (Registered id))



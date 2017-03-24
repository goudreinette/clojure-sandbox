(ns sandbox.adt
  (:use clojure.data)
  (:require [clojure.core.match :refer [match]]
            [clojure.string :refer [join]]
            [sandbox.control-flow :refer [unless ensure-with-descriptor when-message]]))


(defn- tag-name [tag]
  (if (list? tag) (first tag) tag))

(defn- tag-slots [tag]
  (if (list? tag) (rest tag) [])) 

(defn- make-adt [name tags]
  {:name (str name) 
   :tag-names (vec (map (comp str tag-name) tags))})


(defn- describe-slots-count [expected got]
  (str "Wrong number of args: " expected " slots, " got " args ")) 


(defn- make-tag-constructor [adt name slots]
  (fn [& vals]
    (ensure-with-descriptor = describe-slots-count (count slots) (count vals))
    {:slots (zipmap (vec (map keyword slots)) vals) 
     :adt adt
     :tag (str name)}))


(defn- define-tag-constructor [adt name slots]
 `(def ~(symbol name) 
       ~(make-tag-constructor adt name slots)))
       

(defn- transform-clauses [clauses]
  (apply concat
    (for [[tag then] (partition 2 clauses)
          :let [name  (tag-name tag)  
                slots (tag-slots tag)]] 
      [[(str name) (vec slots)] then])))


(defn- tags-in-clauses [clauses]
  (for [[[tag & _]] (partition 2 clauses)]
    tag))


(defn- describe-difference [declared in-clauses]
  (let [[missing undefined _] (diff (set declared) (set in-clauses))] 
   (when-message 
      (not-empty missing) 
      (str "Missing: " (join ", " missing))

      (not-empty undefined) 
      (str "Undefined: " (join ", " undefined)))))


(defmacro defdata 
 "Define a new ADT"
 [name & tags]
 `(do 
    ~@(for [tag tags]
        (define-tag-constructor 
          (make-adt name tags) 
          (tag-name tag) 
          (tag-slots tag))))) 

(defmacro case-of [quoted-val & clauses]
  "Pattern-match on a ADT value"
  (let [{:keys [tag slots] {:keys [tag-names]} :adt} (eval quoted-val)
         clauses    (transform-clauses clauses)
         in-clauses (tags-in-clauses clauses)
         matchform  [tag (vec (vals slots))]]  
    (ensure-with-descriptor = describe-difference tag-names in-clauses)
    `(match ~matchform
        ~@clauses)))
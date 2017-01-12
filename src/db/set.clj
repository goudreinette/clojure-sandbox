(ns db.set
  (:require [clojure.set :as set]))

(defn matches? [entity where]
  (= (select-keys entity (keys where)) where))

(defn select [entities where]
  (set/select #(matches? % where) entities))

; Set helpers 
(defn replace-entities [entities a b]
  (-> entities
    (set/difference a)
    (set/union b)))

(defn update-entities-with [f entities where]
  (let [matching (select entities where)
        updated  (map f matching)]
    (replace-entities entities matching updated)))

(defn update-entities [entities where attributes]
  (update-entities-with #(merge % attributes) entities where))

(defn insert-entity [entities new-entity]
  (set/union entities #{new-entity}))

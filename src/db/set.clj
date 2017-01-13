(ns db.set
  (:require [clojure.set :as set]))

(defn- matches? [entity where]
  (= (select-keys entity (keys where)) where))

(defn- select [entities where]
  (set/select #(matches? % where) entities))

(defn- update-matching [all where f]
  (let [matching ((select all where))
        updated (map f matching)]
    (-> all
      (set/difference matching)
      (set/union updated))))


(defn insert [all entity]
  (conj all entity))

(defn update-where [all where attrs]
  (update-matching all where #(merge % attrs)))

(defn remove-attrs-where [all where keys]
  (update-matching all where #(select-keys % keys)))

(defn remove-where [all where]
  (set/difference all (select all where)))

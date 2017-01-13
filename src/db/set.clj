(ns db.set
  (:require [clojure.set :as set]))

; Private
(defn- match? [where entity]
  (= (select-keys entity (keys where)) where))

(defn- select [where all]
  (set/select #(match? where % ) all))

(defn- update-matching [f where all]
  (map #(if (match? where %) (f %) %)
       all))

; Public
(defn insert [entity all]
  (conj all entity))

(defn update-where [where attrs all]
  (update-matching #(merge % attrs) where all))

(defn remove-attrs-where [where keys all]
  (update-matching #(select-keys % keys) where all))

(defn remove-where [where all]
  (set/select #(not (match? where %) all)))
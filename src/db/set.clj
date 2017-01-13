(ns db.set
  (:require [clojure.set :as set]))

; Private
(defn- match? [entity where]
  (= (select-keys entity (keys where)) where))

(defn- select [all where]
  (set/select #(match? % where) all))

(defn- update-matching [f where all]
  (map #(if (match? % where) (f %) %)
       all))

; Public
(defn insert [all entity]
  (conj all entity))

(defn update-where [where all attrs]
  (update-matching #(merge % attrs) where all))

(defn remove-where [where all]
  (remove #(match? % where) all))

(defn remove-attrs-where [all where keys]
  (update-matching #(select-keys % keys) where all))

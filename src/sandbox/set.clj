(ns sandbox.set
  (:require [clojure.set :as set]))

(defn matches? [tuple query]
  (= (select-keys tuple (keys query))
     query))

(defn where [set query]
  (set/select #(matches? % query) set))

(def insert conj)

(ns sandbox.set
  (:require [clojure.set :as set]
            [sandbox.control-flow :refer [le]]))

(defn matches? [tuple query]
  (empty? (set/difference (set query)
                          (set tuple))))


(defn select-matching [set query]
  (set/select #(matches? % query) set))


(defn infer-join-key [key]
  (keyword (name key) "id"))


(defn hydrate-with [f tuple yrel target-key & [join-on]]
  (let [join-key (or join-on (infer-join-key target-key))]
    (assoc tuple target-key
      (f (select-matching yrel {join-key (tuple join-key)})))))


(def hydrate (partial hydrate-with first))
(def hydrate-many (partial hydrate-with identity))

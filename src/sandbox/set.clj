(ns sandbox.set
  (:require [clojure.set :as set]
            [sandbox.control-flow :refer [le]]))

(defn matches? [tuple query]
  (= (select-keys tuple (keys query))
     query))

(defn select-matching [set query]
  (set/select #(matches? % query) set))


(defn infer-join-key [key]
  (keyword (name key) "id"))


(defn hydrate-all
  ([xrel yrel target-key]
   (hydrate-all xrel yrel target-key (infer-join-key target-key)))

  ([xrel yrel target-key join-key]
   (for [tuple xrel]
     (assoc tuple target-key
       (select-matching yrel {join-key (tuple join-key)})))))

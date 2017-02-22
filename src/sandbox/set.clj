(ns sandbox.set
  (:require [clojure.set :as set]
            [sandbox.control-flow :refer [le]]))

(defn matches? [tuple query]
  (= (select-keys tuple (keys query))
     query))

(defn where [set query]
  (set/select #(matches? % query) set))

(def animals #{#:animal{:id 1 :name "betsy" :owner "brian" :kind "cow" :personality/id 1}
               #:animal{:id 2 :name "jake"  :owner "brian" :kind "horse" :personality/id 2}
               #:animal{:id 3 :name "josie" :owner "dawn"  :kind "cow" :personality/id 1}})

(def personalities #{#:personality{:id 1 :name "stoic"}
                     #:personality{:id 2 :name "skittisch"}})

(defn infer-join-key [key]
  (keyword (str key) "id"))


(defn hydrate-with [strategy xrel yrel target-key]
  (let [join-key (infer-join-key target-key)]
    (for [tuple xrel]
      (assoc tuple target-key
        (strategy #(matches? % {:personality/id  (tuple :personality/id )}) yrel)))))

(def hydrate (partial hydrate-with (comp first set/select)))
(def hydrate-all (partial hydrate-with set/select))



(def insert conj)

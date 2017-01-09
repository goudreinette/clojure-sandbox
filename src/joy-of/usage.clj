(ns usage
  (:use macros))

(condf 12
  (>= 10)  "default"
  (>= 5)   "lower than 10"
  (>= 0)   "lower than 5"
  :else    "expired")

(unless false
  (println "yep"))

(defcontract doubler-contract [x]
  :require (> x 0)
  :ensure  (= % (* x 2)))

(def times2 (with-contract doubler-contract #(* 2 %)))

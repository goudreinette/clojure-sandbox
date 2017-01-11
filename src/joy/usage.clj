(ns joy.usage
  (:use joy.macros))

(condf 12
  (>= 10)  "default"
  (>= 5)   "lower than 10"
  (>= 0)   "lower than 5"
  :else    "expired")

(unless false
  (println "yep")


(defcontract tripler [x]
  (> x 0) => (= % (* 3 x)))

(defn-contract tripler times3 [x]
  (* x 2))

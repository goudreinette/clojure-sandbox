(ns joy.usage
  (use joy.macros)
  (require [let-else :refer [let?]]))

(condf 9
  (>= 10)  "default"
  (>= 5)   "lower than 10"
  (>= 0)   "lower than 5"
  :else    "expired")

(unless false
  (println "yep"))

(defcontract tripler [x]
  (number? x) => (= % (* 3 x)))

(defconstrained tripler times3 [x]
  (* x 3))

(defschema User
  :name String
  :age  Long)

(repeat-until true
  (println "do-while"))

(le a 10
  a)

(cond-apply [1 2]
  true +
  true -)

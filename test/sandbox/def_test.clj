(ns sandbox.def-test
  (:use midje.sweet sandbox.def))

(defmacro-for partial)
(defpartial plus3 + 3)
(defpartial twice * 2)

(facts "about defmacro-for"
  (plus3 1) => 4
  (twice 3) => 6)

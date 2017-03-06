(ns sandbox.def-test
  (:use midje.sweet sandbox.def))

(defmacro-for partial)
(defmacro-for comp)

(defpartial plus3 + 3)
(defcomp plus6 plus3 plus3)

(facts "about defmacro-for"
  (plus3 1) => 4
  (plus6 3) => 9)

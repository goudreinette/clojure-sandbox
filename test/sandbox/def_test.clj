(ns sandbox.def-test
  (:use midje.sweet sandbox.def))

(defmacro<- partial)
(defmacro<- defcompose comp)

(defpartial plus3 + 3)
(defcompose plus6 plus3 plus3)

(facts "about defmacro<-"
  (plus3 1) => 4
  (plus6 3) => 9)

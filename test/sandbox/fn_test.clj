(ns sandbox.fn-test
  (:use midje.sweet sandbox.fn))

(def times2plus1
  (pipe (partial * 2)
        (partial + 1)))

(facts "about pipe"
  (times2plus1 10) => 21)

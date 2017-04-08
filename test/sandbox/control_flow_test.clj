(ns sandbox.control-flow-test
  (:use midje.sweet)
  (:require [sandbox.control-flow :refer [for-fold]]))

(facts "for-fold works like reduce"
  (for-fold [sum 0 n (range 10)]
    (+ sum n)) => 45)
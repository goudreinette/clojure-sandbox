(ns sandbox.control-flow-test
  (:use midje.sweet)
  (:require [sandbox.control-flow :refer [for-fold]]))

(facts "for-fold works like reduce"
  (for-fold [sum 0
             n (range 5 10)
             m (range 10 20)]
    (+ sum n m)) => 95

  (for-fold [frequencies {}
             char "hello world"]
    (update frequencies char (fnil inc 0))) => {\h 1, \e 1, \l 3, \o 2, \space 1, \w 1, \r 1, \d 1})

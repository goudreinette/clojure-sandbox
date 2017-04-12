(ns sandbox.control-flow-test
  (:refer-clojure :exclude [ensure])
  (:use midje.sweet sandbox.control-flow))

(facts "for-fold works like reduce"
  (for-fold [sum 0
             n   (range 5 10)
             m   (range 10 20)]
    (+ sum n m)) => 95

  (for-fold [frequencies {}
             char        "hello world"]
    (update frequencies char (fnil inc 0))) => {\h 1, \e 1, \l 3, \o 2, \space 1, \w 1, \r 1, \d 1})

(facts "do-let is just let where the bindings come last"
  (do-let
    :ignore-me
    (+ a b)
    [a 1 b 2]) => 3)


(ns sequence)
(use '[clojure.algo.monads])

(with-monad sequence-m
  (domonad [a [1 2 3]
            b [1 2 3]]
    (* a b)))


(def sequence-monad
  (monad [m-result list
          m-bind   (fn [monadic-value monadic-continuation]
                      (mapcat monadic-continuation monadic-value))]))


(with-monad sequence-monad
  (domonad [a [1 2 3]
            b [4 8 7]]
    (+ a b)))

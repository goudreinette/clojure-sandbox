(ns continuations
  (:use clojure.algo.monads))

; Chapter 10
(some-> nil
  inc
  str)


(defn compose-fn [acc fn']
  (fn [& args]
    (fn' (apply acc args))))

(defn compose* [& fns]
  (reduce compose-fn fns))


; Exercise 1
((fn [a]
  ((fn [b]
    (odd? b)) (count a))) (concat '(a b c) '(d e f)))

; Exercise 2
((fn [a]
  ((fn [b]
    (odd? b)) (count a))) (concat '(a b c) '(d e f)))

((fn [& seqs]
  (apply concat seqs)) '(a b c) '(d e f))

; Exercise 3
(-> 3
  ((fn [n] (+ n 2)))
  ((fn [n] (inc n))))

(ns flow)

; Exercise 1
(-> [1]
  first
  inc
  list)

; Exercise 2
(-> [1]
  first
  inc
  (* 3)
  list)

; Exercise 3
(def *two
  (fn [n]
    (* n 2)))

(-> 3
  inc
  *two)

; Exercise 4
(-> (+ 1 2)
  (* 3)
  (+ 4))


; Sequences of Maps
(defn separate [predicate sequence]
  ((juxt filter remove) predicate sequence))

(let [[odds evens] (separate odd? (range 20))]
  odds)

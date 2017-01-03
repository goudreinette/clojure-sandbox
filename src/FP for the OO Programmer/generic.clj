(ns generic)

; Odd/Even
(defmulti odd-or-even odd?)

(defmethod odd-or-even true [n]
  "odd")

(defmethod odd-or-even false [n]
  "even")

; Default
(defmulti number identity)

(defmethod number 1 [n]
  "one")

(defmethod number 2 [n]
  "two")

(defmethod number :default [n]
  "something else")

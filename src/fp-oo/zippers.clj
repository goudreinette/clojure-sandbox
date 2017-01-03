(ns zippers
  (:require [clojure.zip :as zip]
            [clojure.walk :refer [postwalk prewalk prewalk-demo postwalk-demo]]))



; 11.5
; Exercise 1
(defn flatten-lists [s]
  (if (list? s)
    (mapcat flatten-lists s)
    (list s)))

(defn all-vectors [x]
  (filter vector? (flatten-lists x)))


; Exercise 2
(defn +to- [sequence]
  (postwalk #(if (= % '+) '- %) sequence))


; Exercise 5
(defn fact->expect [fact]
  (list 'expect (nth fact 2) (nth fact 0)))

(defn facts->expect [facts]
  (cons 'do
    (->> facts
      (rest)
      (partition 3)
      (map fact->expect))))

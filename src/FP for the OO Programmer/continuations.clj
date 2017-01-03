(ns continuations
  (:use clojure.algo.monads))

; Chapter 10
(some-> 1
  inc
  str)


(with-monad maybe-m
  (domonad [n 1
            n+1 (inc n)
            n-str (str n+1)]
    n-str))


; Exercise 1
((fn [a]
  ((fn [b]
    (odd? b)) (count a))) (concat '(a b c) '(d e f)))

; Exercise 2
(-> (concat '(a b c) '(d e f))
  ((fn [a]
    (-> (count a)
      ((fn [b]
        (odd? b)))))))

((fn [& seqs]
  (apply concat seqs)) '(a b c) '(d e f))

; Exercise 3
(-> 3
  ((fn [n] (+ n 2)))
  ((fn [n] (inc n))))

; Exercise 4
(defn oops! [reason & args]
  (with-meta (merge {:reason reason} (apply hash-map args))
             {:type :error}))

(defn oopsie? [value]
  (= (type value) :error))

(defn factorial [n]
  (cond (< n 0) (oops! "Factorial can never be less than zero." :number n)
        (< n 2) 1
        :else   (* n (factorial (dec n)))))

(defn decider [step-value continuation]
  (if (oopsie? step-value)
    step-value
   (continuation step-value)))

(def error-m (monad [m-result identity
                     m-bind   decider]))


(with-monad error-m
  (domonad [a (oops! "fail")
            b (inc a)]
    b))


(for [a [1 2 3]
      b (repeat a "hi!")]
  [a b])

; 10.12
; Exercise 1
(defn multiples [n]
  (range (* n 2) 101 n))

(for [n (range 1 100)
      m (multiples n)]
    m)

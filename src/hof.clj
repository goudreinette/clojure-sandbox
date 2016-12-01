(ns hof)


(defn lift [modifier]
  (fn [base-function]
    (fn [& args] (modifier (apply base-function args)))))

; Exercise 1
(map (partial + 2) [1 2 3])

; Exercise 2
(defn separate [predicate sequence]
  ((juxt filter remove) predicate sequence))

; Exercise 3
(def myfun
  (let [x 3]
    (fn [] x)))

; Exercise 4
((fn [x]
  println x) 5)

; Exercise 5
(def my-atom (atom 0))
(swap! my-atom (constantly 33))

; Exercise 6
(defn always [x]
  (fn [& args]
    x))

; Exercise 7
(def isbn's ["0131774115"
             "0977716614"
             "1934356190"])

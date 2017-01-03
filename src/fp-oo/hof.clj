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


; (defn check-sum [sequence]
;   (->> sequence
;     (map vector (range 1 (+ 1 (count sequence))))
;     (map (partial apply *))
;     (apply +)))

; Exercise 8
(defn reversed-digits [string]
   (map #(-> % str Integer.) (reverse string)))
;
; (defn isbn? [isbn]
;   (-> isbn
;     (reversed-digits)
;     (check-sum)
;     (rem 11)
;     (= 0)))

; Exercise 9
(def upc-range (cycle [1 3]))
(def upc's [])




(defn check-sum-upc [sequence]
  (->> sequence
    (map vector upc-range)
    (map #(apply * %))
    (apply +)))
;
; (defn upc? [upc]
;   (-> upc
;     (reversed-digits)
;     (check-sum-upc)
;     (rem 10)
;     (= 0)))

; Exercise 10
(defn number-checker [check-sum divisor]
  (fn [sequence]
    (-> sequence
      (reversed-digits)
      (check-sum-upc)
      (rem 10)
      (= 0))))


(defn check-sum [zip-sequence sequence]
  (->> sequence
    (map vector zip-sequence)
    (map (partial apply *))
    (apply +)))


(def upc? (number-checker check-sum-upc 10))
(def isbn? (number-checker check-sum 11))

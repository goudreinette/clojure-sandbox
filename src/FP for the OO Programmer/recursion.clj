(ns recursion)

(defn factorial [n]
  (case n
    0 1
    1 1
    (* n (factorial (- n 1)))))

(defn sum [numbers]
  (if (empty? numbers)
    0
    (+ (first numbers) (sum (rest numbers)))))


(defn factorial*
  ([n]
   (factorial* n 1))
  ([n acc]
   (case n
    0 acc
    1 acc
    (factorial* (- n 1) (* acc n)))))

(defn sum*
  ([numbers]
   (sum* numbers 0))
  ([numbers acc]
   (if (empty? numbers)
     acc
     (sum* (rest numbers) (+ acc (first numbers))))))


(defn fold [*combiner* seq acc]
  (if (empty? seq)
    acc
    (fold *combiner* (rest seq)
      (*combiner* (first seq) acc))))


; Exercise:
; (fold* #(assoc %2 %1 0) [:a :b :c] {})
; (fold* #(assoc %2 %1 (count %2)) [:a :b :c] {})

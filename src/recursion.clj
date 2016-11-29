(ns recursion)

(defn factorial [n]
  (case n
    0 1
    1 1
    (* n (factorial (- n 1)))))

(defn factorial*
  ([n]
   (factorial* n 1))
  ([n acc]
   (case n
    0 acc
    1 acc
    (factorial* (- n 1) (* acc n)))))

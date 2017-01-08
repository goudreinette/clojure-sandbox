(ns joy-of)

(defn insert-v [v [condition result]]
  (list
    (if (list? condition)
      (cons (first condition) (cons v (rest condition)))
      condition)
    result))

(defn expand-clauses [v body]
  (->> body
    (partition 2)
    (mapcat (partial insert-v v))))



(defmacro condf [v & forms]
  (let [body (expand-clauses v forms)]
    `(cond ~@body)))


(condf 12
  (>= 10)  "default"
  (>= 5)   "lower than 10"
  (>= 0)   "lower than 5"
  :else    "expired")

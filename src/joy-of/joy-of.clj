(ns joy-of)

(defn insert-v [v [condition result]]
  (list
    (cons (first condition) (cons v (rest condition)))
    result))

(defn expand-clauses [v body]
  (->> body
    (partition 2)
    (mapcat (partial insert-v v))))



(defmacro condf [v & forms]
  (let [body (expand-clauses v forms)]
    `(cond ~@body)))



(condf 5
  (<= 10) "lower than 10"
  (<= 5)  "lower than 5"
  (<= 0)  "expired")

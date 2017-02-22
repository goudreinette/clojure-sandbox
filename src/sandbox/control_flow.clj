(ns sandbox.control-flow)

(defn- insert-v [v [condition result]]
  (list
    (if (list? condition)
      (list* (first condition) v (rest condition))
      condition)
    result))

(defn- expand-clauses [v body]
  (->> body
    (partition 2)
    (mapcat (partial insert-v v))))

(defmacro condf
  "Evaluates conditions with value threaded as first argument"
  [v & forms]
  `(cond ~@(expand-clauses v forms)))



(defmacro unless
  "Opposite of 'when'"
  [test & body]
  `(when (not ~test) ~@body))



(defmacro do-while
  "A do-while loop"
  [test & body]
 `(loop []
    ~@body
    (when-not ~test
      (recur))))



(defmacro le
  "Single let"
  [name value & body]
 `(let [~name ~value]
    ~@body))



(defmacro cond-apply
  "Apply same arguments to different functions depending on condition"
  [args & clauses]
  `(apply (cond ~@clauses) ~args))


(defmacro awhen
  "Evaluates body with implicit 'it' when true"
  [expr & body]
  `(let [~'it ~expr]
      (if ~'it
        (do ~@body))))

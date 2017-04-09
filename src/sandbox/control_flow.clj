(ns sandbox.control-flow
  (:refer-clojure :exclude [ensure])
  (:require [clojure.string :refer [join]]))

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

(defmacro do-let [& args]
  (let [body     (butlast args)
        bindings (last args)]
    `(let [~@bindings]
       ~@body)))


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


(defmacro when-message
  "Produce a concatenation of messages whose predicate is true"
  [& pred-form-pairs]
  `(join ", "
     (remove nil?
       ~(vec
          (for [[pred form] (partition 2 pred-form-pairs)]
            (list 'when pred form))))))



(defn ensure
  "Assert without AssertionError"
  [pred message]
  (unless pred
    (throw (Error. message))))

(defn ensure-with-descriptor
  "Evaluates predicate and descriptor with value.
   When predicate fails, uses error message produced by descriptor."
  [pred descriptor & vals]
  (ensure (apply pred vals)
    (apply descriptor vals)))



(defmacro for-fold [bindings & body]
  (let [[[acc-sym init-expr] & coll-bindings] (partition 2 bindings)
        el-syms    (map first coll-bindings)
        coll-exprs (map second coll-bindings)]
    `(reduce
       (fn [~acc-sym [~@el-syms]] ~@body)
       ~init-expr
       (map vector ~@coll-exprs))))

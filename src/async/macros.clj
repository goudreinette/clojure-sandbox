(ns async.macros
  (:require [clojure.core.async :refer [chan go <!]]))

(defmacro forever [bindings & body]
  `(go-loop [~@bindings] ~@body (recur)))

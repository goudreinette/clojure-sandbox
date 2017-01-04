(ns macros
  (:require [clojure.core.async :refer [chan go]]))

(defmacro forever [& body]
  `(go (loop [] ~@body (recur))))

(ns sandbox.async
  (:require [clojure.core.async :refer [go-loop]]))

(defmacro forever [& body]
 `(go-loop []
    ~@body
    (recur)))
    



(ns sandbox.async
  (:require [clojure.core.async :refer [go go-loop chan <! >! >!! <!! sliding-buffer]]))


(defmacro forever [& body]
  `(go-loop []
     ~@body
     (recur)))


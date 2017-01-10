(ns async.macros
  (:require [clojure.core.async :refer [chan go-loop <! >! close! timeout]]))

(defmacro go-forever [& body]
  `(go-loop [] ~@body (recur)))

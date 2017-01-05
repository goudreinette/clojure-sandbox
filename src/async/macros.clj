(ns macros
  (:require [clojure.core.async :refer [chan go <!]]))

(defmacro forever [& body]
  `(go (loop [] ~@body (recur))))

(defmacro for-chan [var channel & body]
  `(forever
    (let [~var (<! ~channel)]
      ~@body)))

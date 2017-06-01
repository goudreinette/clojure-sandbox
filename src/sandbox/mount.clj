(ns sandbox.mount
  (:use org.httpkit.server)
  (:require [mount.core :refer [defstate start]]))

(defmacro defserver [name handler]
  `(defstate ~name
     :start (run-server ~handler {:port 3000})
     :stop (~name)))


(defmacro serve [handler]
  `(do
     (defstate server#
      :start (run-server ~handler {:port 3000})
      :stop (server#))
     (start)))

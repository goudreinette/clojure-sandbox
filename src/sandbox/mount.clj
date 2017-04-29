(ns sandbox.mount
  (:use org.httpkit.server)
  (:require [mount.core :refer [defstate]]))

(defmacro defserver [name handler]
  `(defstate ~name
     :start (run-server ~handler {:port 3000})
     :stop (~name)))


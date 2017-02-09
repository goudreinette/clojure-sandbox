(ns sandbox.example
  (:use sandbox.event)
  (:require [clojure.spec :as s]))

(defmethod event-type ::session-started [_]
  (s/keys :req [::job-id]))

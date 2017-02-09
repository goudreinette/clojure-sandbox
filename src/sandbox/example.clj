(ns sandbox.example
  (:use sandbox.event)
  (:require [clojure.spec :as s]))

(s/def ::job-id int?)

(defevent session-started
  :req [::job-id ::user-id])

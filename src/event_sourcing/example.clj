(ns event-sourcing.example
  (:use event-sourcing.event sandbox.spec)
  (:require [clojure.spec :as s]))


(defschema ::session-started
  ::job-id int?
  ::user-id int?)

(make-event ::session-started ::job-id 1 ::user-id 1)

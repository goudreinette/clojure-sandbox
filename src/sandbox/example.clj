(ns sandbox.example
  (:use sandbox.event)
  (:require [clojure.spec :as s]))

(s/def ::job-id int?)

(defevent user-registered
  :req [::username ::password])

(defevent session-started
  :req [::job-id ::user-id])

(def events [(user-registered ::username "me" ::password nil)
             (session-started ::job-id 1 ::user-id 2)])

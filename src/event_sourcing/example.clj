(ns event-sourcing.example
  (:use event-sourcing.event)
  (:require [clojure.spec :as s]))

(defevent user-registered
  :req [::username ::password])

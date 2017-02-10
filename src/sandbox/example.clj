(ns sandbox.example
  (:use sandbox.event sandbox.api)
  (:require [clojure.spec :as s]))

(defevent user-registered
  :req [::username ::password])

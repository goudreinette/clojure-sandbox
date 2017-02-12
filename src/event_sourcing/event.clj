(ns event-sourcing.event
  (:require [clojure.spec :as s]
            [sandbox.spec :refer [defschema]])
  (:import java.util.Date))


(defschema ::event
  ::type keyword?
  ::date inst?)

(defn validate-event [spec event]
  (s/conform (s/merge spec ::event)
    event))

(defn make-event [spec & {:as attributes}]
  (validate-event spec
    (assoc attributes
      ::type spec
      ::date (Date.))))

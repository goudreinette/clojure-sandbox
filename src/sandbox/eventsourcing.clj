(ns sandbox.eventsourcing
  (:require [clojure.spec :as s])
  (:import java.util.Date))


(s/def ::type symbol?)
(s/def ::attributes map?)
(s/def ::date #(isa? % Date))


(def user-spec (s/keys :req [::first-name ::last-name ::email]
                       :opt [::phone]))

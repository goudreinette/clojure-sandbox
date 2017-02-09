(ns sandbox.event
  (:require [clojure.spec :as s])
  (:import java.util.Date))


(s/def ::date inst?)
(s/def ::type keyword?)


(defmulti event-type ::type)
(defmethod event-type :default [_]
  (s/keys :req []))

(s/def ::event (s/merge (s/multi-spec event-type ::type)
                        (s/keys :req [::date ::type])))

(defn event [type & {:as attributes}]
  (s/conform ::event
    (assoc attributes
      ::type type
      ::date (Date.))))

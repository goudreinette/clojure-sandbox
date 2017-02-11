(ns event-sourcing.event
  (:require [clojure.spec :as s]
            [sandbox.spec :refer [defschema]])
  (:import java.util.Date))


(defschema event
  ::date inst?
  ::type keyword?)

(defmulti event-type ::type)
(defmethod event-type :default [_]
  (s/keys :req []))

(s/def ::event (s/merge (s/multi-spec event-type ::type)
                        event))

(defn make-event [type & {:as attributes}]
  (s/conform ::event
    (assoc attributes
      ::type type
      ::date (Date.))))


; macro's
(defmacro defevent-keys [type & {:keys [req opt]}]
  `(defmethod event-type ~type [~'_]
     (s/keys :req ~req :opt ~opt)))

(defmacro defevent [type & {:keys [req opt]}]
  `(do
     (defevent-keys ~(keyword type) :req ~req :opt ~opt)
     (def ~type ~(partial make-event (keyword type)))))

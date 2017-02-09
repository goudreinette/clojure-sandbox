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


; macro's
(defmacro defevent-keys [type & {:keys [req opt]}]
  `(defmethod event-type ~type [~'_]
     (s/keys :req ~req :opt ~opt)))

(defmacro defevent [type & {:keys [req opt]}]
  `(do
     (defevent-keys ~(keyword type) :req ~req :opt ~opt)
     (def ~type ~(partial event (keyword type)))))

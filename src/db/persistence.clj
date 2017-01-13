(ns db.persistence
  (:require [hara.time :refer [now to-long to-map from-long]]))

; Date
(defn- date-converter [f]
  (fn [history] (map #(update % :date f) history)))

(def long->date (date-converter to-map))
(def date->long (date-converter to-long))

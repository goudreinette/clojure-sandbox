(ns db.date
  (:require [hara.time :refer [now to-long to-map plus minus after before]]))

; Date
(defn- date-converter [f]
  (fn [history] (map #(update % :date f) history)))

(def long->date (date-converter to-map))
(def date->long (date-converter to-long))

(defn date-range [from to by]
  (take-while #(before % to)
               (iterate #(plus % by) from)))

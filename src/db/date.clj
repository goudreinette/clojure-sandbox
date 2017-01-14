(ns db.date
  (:require [hara.time :refer [now to-long to-map plus minus after]]))

; Date
(defn- date-converter [f]
  (fn [history] (map #(update % :date f) history)))

(def long->date (date-converter to-map))
(def date->long (date-converter to-long))


(defn date-range [from to by]
  (loop [range []
         current (minus (now) from)]
    (if (after current to)
      range
      (recur
       (conj range current)
       (plus current by)))))

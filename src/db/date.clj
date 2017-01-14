(ns db.date
  (:refer-clojure :exclude [format])
  (:require [hara.time :refer [now to-long to-map plus minus after before adjust format]]
            [clojure.set :refer [map-invert]]))


(defn- date-converter [f]
  (fn [history] (map #(update % :date f) history)))

(def long->date (date-converter to-map))
(def date->long (date-converter to-long))

(defn format-date [date]
  (format date "E dd-MM-yyy HH:ss"))

(defn date-range [from to by]
  (take-while #(before % to)
               (iterate #(plus % by) from)))

(defn absolute-date [& {:keys [rewind at]}]
  (cond
    at     (adjust (now) at)
    rewind (minus  (now) (map-invert rewind))))

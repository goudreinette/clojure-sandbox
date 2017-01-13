(ns db.api
  (:use [db core date set])
  (:require [hara.time :refer [now before minus]]
            [clojure.set :refer [map-invert]]))


(def assert!  (partial exec-event! :assert))
(def retract! (partial exec-event! :retract))


(defn revert [db inverted-date]
  (let [{history :history} @db
        date-map           (map-invert inverted-date)
        date               (-> (now) (minus date-map))
        history-until-date (take-while #(before (:date %) date) history)
        state-at-date      (replay history-until-date)]
    state-at-date))

; (find! db :revert {4 :hours} :project [:likes] :where {:name "Me"})
(defn find! [db & {r :revert w :where p :project}]
  (let [all       (if r (revert db r) (:state @db))
        where     (or w {})
        filtered  (select where all)
        projected (if p (map #(select-keys % p) filtered) filtered)]
    projected))

; Testing
(def db (init "db.edn"))

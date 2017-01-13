(ns db.api
  (:use [db core persistence set])
  (:require [hara.time :refer [now before minus]]
            [clojure.set :refer [map-invert]]))


(def assert!  (partial exec-event! :assert))
(def retract! (partial exec-event! :retract))

(defn at [db date]
  (let [{:keys [history]} @db
        history-at-date (take-while #(before (:date %) date) history)
        state-at-date (replay history-at-date)]
    state-at-date))

(defn revert [db & {:as date}]
  (at db
    (-> (now)
        (minus (map-invert date)))))


(defn find! [db & {p :project w :where a :at}]
  (cond-> @db
    (some? a) (at a)
    (nil?  a) :state))



; Testing
; (def db (init "db.edn"))

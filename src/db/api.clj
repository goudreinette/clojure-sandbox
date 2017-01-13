(ns db.api
  (:use db.core)
  (:require [db.set :refer [select]]
            [hara.time :refer [now before minus from-long to-map]]))

(defn init [file]
  (let [history (-> file slurp read-string)
        history (map #(update % :date from-long) history)
        _ (prn history)
        state (replay history)]
    (atom {:file file
           :history history
           :state state})))

(def assert!  (partial exec-event! :assert))
(def retract! (partial exec-event! :retract))

(defn at [db date]
  (let [{:keys [history]} @db
        history-at-date (take-while #(before (:date %) date) history)
        state-at-date (replay history-at-date)]
    state-at-date))

(def at-now-minus #(at %1 (-> (now) (minus %2))))

(defn find! [db & {p :project w :where a :at}]
  (cond-> @db
    (some? a) (at a)
    (nil?  a) :state))



; Testing
(def db (init "db.edn"))

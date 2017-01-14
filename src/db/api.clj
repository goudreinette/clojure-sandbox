(ns db.api
  (:use [db core date set])
  (:require [hara.time :refer [now before minus adjust]]))


; Helpers
(defn rewind [{history :history} to-date]
  (let [history-until-date (take-while #(before (:date %) to-date) history)
        state-at-date      (replay history-until-date)]
    state-at-date))


; API
; (find! db :rewind {4 :hours} :project [:likes] :where {:name "Me"})
(defn find! [db & {a :at r :rewind w :where p :project}]
  (let [date      (absolute-date r a)
        all       (if date (rewind @db date) (:state @db))
        where     (or w {})
        filtered  (select where all)
        projected (if p (map #(select-keys % p) filtered) filtered)]
    projected))


(defn slice! [db & {f :from t :to w :by b :where p :project :as options}]
  (map #(find! db :project p :re) (date-range f t b)))

(def assert!  (partial exec-event! :assert))
(def retract! (partial exec-event! :retract))


; Testing
(def db (init "db.edn"))

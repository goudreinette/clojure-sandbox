(ns db.core
  (:use [db date set])
  (:require [clojure.core.match :refer [match]]
            [hara.time :refer [now]]
            [clojure.pprint :refer [pprint]]))

(defn event [type attributes & {:keys [where] :as attrs}]
  (merge attrs {:type type
                :attributes attributes
                :date (now)}))


(defn transition [all event]
  (set
    (match [event]
      [{:type :assert  :attributes a :where w }] (update-where w a all)
      [{:type :assert  :attributes a          }] (insert a all)
      [{:type :retract :attributes a :where w }] (remove-attrs-where w a all)
      [{:type :retract :attributes a          }] (remove-attrs-where {} a all) ; or all?
      [{:type :retract               :where w }] (remove-where w all))))

(defn replay [history]
  (reduce transition #{} history))


; Persistence
(defn init [file]
  (let [history (->> file slurp read-string (sort-by :date) long->date)
        state   (replay history)]
    (atom
      {:file file
       :history history
       :state state})))

(defn save [db]
  (->> db :history
    date->long
    pprint
    with-out-str
    (spit (db :file))))


(defn exec-event! [type db attributes & args]
  (let [event   (event type attributes)
        history (conj (:history @db) event)
        state   (transition (:state @db) event)
        id      (inc (or (apply max-key :id) 0))]
    (swap! db #(assoc % :history history :state state))
    (save @db)))

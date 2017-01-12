(ns db.core
  (:require [clojure.core.match :refer [match]]
            [clojure.pprint :refer [pprint]])
  (:use [db.set]))

(defn event [type attributes & {:keys [where]}]
  {:type type
   :attributes attributes
   :where where
   :date (java.util.Date.)})

(defn transition [state event]
  (match [event]
    [{:type :assert :where nil :attributes a}] (insert-entity state a)
    [{:type :assert :where w :attributes a}] (update-entities state w a)
    [{:type :retract :attributes a :where w}] state
    [{:type :retract :attributes a}] state
    [{:type :retract :where w}] state))

(defn replay [history]
  (reduce transition #{} (sort-by :date  history)))

(defn save [db]
  (spit (db :file) (with-out-str (pprint (db :history)))))


(defn exec-event! [type db attributes]
  (let [event (event type attributes)
        history (conj (:history @db) event)
        state (transition (:state @db) event)]
    (swap! db #(assoc % :history history :state state))
    (save @db)))

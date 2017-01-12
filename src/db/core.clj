(ns db.core
  (:use [db.set])
  (:require [clojure.core.match :refer [match]]
            [clojure.pprint :refer [pprint]]))

(defn event [type attributes & {:keys [where] :as attrs}]
  (merge {:type type
          :attributes attributes
          :date (java.util.Date.)}
         attrs))

(defn transition [state event]
  (match [event]
    [{:type :assert :where w :attributes a}] (update-entities state w a)
    [{:type :assert :attributes a}] (insert-entity state a)
    [{:type :retract :attributes a :where w}] state
    [{:type :retract :attributes a}] state
    [{:type :retract :where w}] state))

(defn replay [history]
  (reduce transition #{} (sort-by :date  history)))

(defn save [db]
  (spit (db :file) (with-out-str (pprint (db :history)))))


(defn exec-event! [type db attributes & args]
  (let [event (apply event type attributes args)
        history (conj (:history @db) event)
        state (transition (:state @db) event)]
    (swap! db #(assoc % :history history :state state))
    (save @db)))

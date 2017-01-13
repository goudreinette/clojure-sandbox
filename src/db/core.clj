(ns db.core
  (:use [db.set])
  (:require [clojure.core.match :refer [match]]
            [clojure.pprint :refer [pprint]]))

(defn event [type attributes & {:keys [where] :as attrs}]
  (merge {:type type
          :attributes attributes
          :date (java.util.Date.)}
         attrs))

(defn transition [all event]
  (match [event]
    [{:type :assert :attributes a :where w }] (update-where all w a)
    [{:type :assert :attributes a}]           (insert all a)
    [{:type :retract :attributes a :where w}] (remove-attrs-where all w a)
    [{:type :retract :attributes a}]          (remove-attrs-where all {} a) ; or all?
    [{:type :retract :where w}]               (remove-where all w)))

(defn replay [history]
  (reduce transition #{} (sort-by :date  history)))

(defn save [db]
  (spit (db :file) (with-out-str (pprint (db :history)))))

(defn exec-event [type db attributes & args]
  (let [event   (apply event type attributes args)
        history (conj (:history db) event)
        state   (transition (:state db) event)]
    (assoc db :history history :state state)))

(defn exec-event! [type db attributes & args]
  (swap! db #(apply exec-event type db attributes args))
  (save @db))

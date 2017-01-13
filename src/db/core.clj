(ns db.core
  (:use [db.set])
  (:require [clojure.core.match :refer [match]]
            [clojure.pprint :refer [pprint]]
            [hara.time :refer [now to-long]]))

(defn event [type attributes & {:keys [where] :as attrs}]
  (merge {:type type
          :attributes attributes
          :date (now)}
         attrs))

(defn transition [all event]
  (set
    (match [event]
      [{:type :assert  :attributes a :where w }] (update-where w a all)
      [{:type :assert  :attributes a          }] (insert a all)
      [{:type :retract :attributes a :where w }] (remove-attrs-where w a all)
      [{:type :retract :attributes a          }] (remove-attrs-where {} a all) ; or all?
      [{:type :retract               :where w }] (remove-where w all))))

(defn replay [history]
  (reduce transition #{} (sort-by :date history)))

(defn save [db]
  (->> db
    (:history)
    (map #(update % :date to-long))
    (pprint)
    (with-out-str)
    (spit (db :file))))

(defn exec-event! [type db attributes & args]
  (let [event   (event type attributes)
        history (conj (:history @db) event)
        state   (transition (:state @db) event)]
    (swap! db #(assoc % :history history :state state))
    (save @db)))

(ns db.core
  (:use [db persistence set])
  (:require [clojure.core.match :refer [match]]
            [hara.time :refer [now]]))

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
  (reduce transition #{} history))


(defn exec-event! [type db attributes & args]
  (let [event   (event type attributes)
        history (conj (:history @db) event)
        state   (transition (:state @db) event)]
    (swap! db #(assoc % :history history :state state))
    (save @db)))

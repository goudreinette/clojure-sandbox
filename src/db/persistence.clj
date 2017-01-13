(ns db.persistence
  (:require [clojure.pprint :refer [pprint]]
            [hara.time :refer [now to-long to-map from-long]]
            [db.core :refer [replay]]))


; Date
(defn- date-converter [f]
  (fn [history] (map #(update % :date f) history)))

(def long->date (date-converter to-map))
(def date->long (date-converter to-long))

; Persistence
(defn init [file]
  (let [history (->> file slurp read-string (sort-by :date) long->date)
        state   (replay history)
        current-id (apply max-key :id state)]
    (atom
      {:file file
       :history history
       :state state
       :current-id current-id})))

(defn save [db]
  (->> db :history
    date->long
    pprint
    with-out-str
    (spit (db :file))))

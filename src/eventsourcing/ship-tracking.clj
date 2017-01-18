(ns ship-tracking)

(defn event [type & attrs]
  {:type        type
   :attributes (apply hash-map attrs)
   :date       (java.util.Date.)})


(defn update-ship [state name & attrs]
  (assoc-in state [:ships 0] (apply hash attrs)))

(defmulti  process-event #(%2 :type))
(defmethod process-event :default [state {:keys [type] :as event}]
  (case type
    :arrival   state
               state))


(defrecord Cargo [name])
(defrecord Ship  [name port])
(defrecord Port  [name country])


(def events [(event :arrival :ship "King Roy" :port "Los Angeles")])

(def state  {:ships [(->Ship  "King Roy" nil)]
             :ports [(->Port  "San Francisco" "US")
                     (->Port  "Los Angeles"   "US")
                     (->Port  "Vancouver"     "CANADA")]})


(defn replay []
  (reduce process-event state events))

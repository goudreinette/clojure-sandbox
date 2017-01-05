(ns events)


(defn event [type & attrs]
  {:type        type
   :attributes (apply hash-map attrs)
   :date       (java.util.Date.)})


(defmulti  process-event #(%2 :type))
(defmethod process-event :default [state {:keys [type] :as event}]
  (case type
    :arrival   state
               state))

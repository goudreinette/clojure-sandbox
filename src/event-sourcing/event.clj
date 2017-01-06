(ns events)



(defmacro defevent
  "Defines an event constructor of a unique type"
  [type keys]
  `(defn ~type [& values#]
     {:type  ~(keyword type)
      :date   (java.util.Date.)
      :attrs  (select-keys (apply hash-map values#) ~(map keyword keys))}))



(defmulti  process-event #(%2 :type))
(defmethod process-event :default [state {:keys [type] :as event}]
  (case type
    :arrival   state
               state))

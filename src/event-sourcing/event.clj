(ns events)


(defn validate-attributes
  "Ensures that the event has only the specified attributes"
  [keys attributes]
  (let [keys-as-symbols (map keyword keys)
        as-map          (apply hash-map attributes)
        filtered        (select-keys as-map keys-as-symbols)]
    (assert (every? filtered keys-as-symbols) "Required keus missing")
    filtered))

(defmacro defevent
  "Defines an event constructor of a unique type"
  [type keys]
  `(defn ~type [& values#]
     {:type  ~(keyword type)
      :date   (java.util.Date.)
      :attrs  (validate-attributes '~keys values#)}))



(defmulti  process-event #(%2 :type))
(defmethod process-event :default [state {:keys [type] :as event}]
  (case type
    :arrival   state
    state))

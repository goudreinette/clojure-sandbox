(ns counter)

(def counter (atom 0))

(def events [:inc :dec
             :inc :inc])

(defn transition [count event]
  (case event
    :inc (+ event 1)
    :dec (- event 1)))


(defn replay [start events]
  (reduce transition start events))

(defn main- []
  (reset! counter (replay 0 events)))

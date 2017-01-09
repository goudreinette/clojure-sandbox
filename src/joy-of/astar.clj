(ns astar
  (:use macros))

(def world [[1   1   1   1   1]
            [999 999 999 999 1]
            [1   1   1   1   1]
            [1   999 999 999 999]
            [1   1   1   1   1]])

(def grid (map (constantly (range 5)) (range 5)))


(defn flood-fill
  ([frontier graph start]
   (flood-fill frontier start (assoc-in frontier start :visited)))
  ([frontier visited]
   (flood-fill)))

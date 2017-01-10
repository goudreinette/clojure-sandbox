(ns joy.astar
  (:use joy.macros))

(def world [[1   1   1   1   1]
            [999 999 999 999 1]
            [1   1   1   1   1]
            [1   999 999 999 999]
            [1   1   1   1   1]])

(defn ->grid [x y]
  (partition y (repeat (* x y) 0)))

(def grid (->grid 5 5))

(defn neighbor? [[x y] [x' y']]
  (and (>= 1 (- (max x x') (min x x')))
       (>= 1 (- (max y y') (min y y')))
       (not= [x y] [x' y'])))

(def indices (comp range count))

(defn nodes [grid]
  (for [x (indices (first grid))
        y (indices grid)]
    [x y]))

(defn neighbors [grid node]
  (filter (partial neighbor? node) (nodes grid)))

(defn unvisited? [visited neighbor]
  (not (.contains visited neighbor)))

; go-loop
; loop (recur) with closure
;
(defn flood-fill [grid start]
  (loop [visited   #{start}
         frontier  (neighbors grid start)]
    (when-some [current (first frontier)]
      (println current)
      (let [unvisited-neighbors (filter #(unvisited? visited %) (neighbors grid current))]
        (recur
          (conj visited current)
          (concat unvisited-neighbors (rest frontier)))))))

(defn find-in-grid [grid start goal]
  nil)

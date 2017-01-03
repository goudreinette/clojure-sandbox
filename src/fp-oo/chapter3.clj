(ns oo)

(def class-of :class)

(defn Point [x y]
  {:x x, :y y, :class 'Point})

(defn Triangle [a b c]
  {:a a, :b b, :c c, :class 'Triangle})

(defn equal-triangles? [& triangles]
  (apply = triangles))

(defn valid-triangle? [triangle]
  (apply distinct? (vals triangle)))


(defn shift [this +x +y]
  (Point (+ (this :x) +x)
         (+ (this :y) +y)))

(defn add [this point]
  (Point (+ (this :x) (point :x))
         (+ (this :y) (point :y))))

(defn make [class & args]
  (apply class args))

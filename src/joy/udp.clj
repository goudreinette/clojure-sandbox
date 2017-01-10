(ns joy.udp
  (:refer-clojure :exclude [get]))

(defn beget [this proto]
  (assoc this ::prototype proto))

(defn get [m k]
  (when m
    (if-let [[_ v] (find m k)]
      (if v
        v
        (recur (::prototype m) k)))))

(def put assoc)

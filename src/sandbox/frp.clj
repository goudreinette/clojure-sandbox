(ns sandbox.frp)

(defn fn->keyword [f]
  (keyword (str f)))

(defn trigger* [xs & [event]]
  (reset! xs event))

(defn sub* [xs f]
  (add-watch xs (fn->keyword f)
    (fn [_ _ _ x]
      (f x))))

(defn map* [f xs]
  (let [ys (atom (f @xs))]
    (sub* xs #(reset! ys (f %)))
    ys))

(defn reduce* [f init xs]
  (let [acc (atom init)]
    (sub* xs #(swap! acc f %))
    acc))

(defn filter* [f xs]
  (let [ys (atom nil)]
    (sub* xs
      #(when (f %)
         (reset! ys %)))
    ys))

(defn union* [xs ys]
  (let [zs (atom nil)]
    (sub* xs #(reset! zs %))
    (sub* ys #(reset! zs %))
    ys))




(def clicks (atom nil))
(def click-count (reduce* (fn [acc x] (inc acc)) 0 clicks))
(def evens (filter* even? click-count))
(def as-string (map* str click-count))

(sub* evens
  (fn [count]
    (prn "Count is even:" count)))

(sub* as-string
  (fn [count]
    (prn "Count as string:" (str count))))
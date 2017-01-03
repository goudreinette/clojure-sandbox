(ns oo)

(def class-of :class)

(defn make [class & args]
  (apply class args))

(defn send-to [object message & args]
  (apply ((object :methods) message) object args))

(defn Point [x y]
  {:x x
   :y y

    :class-symbol 'Point
    :methods {
              :class :class-symbol

              :shift
              (fn [this +x +y]
                (make Point (+ (this :x) +x)
                            (+ (this :y) +y)))

              :add
              (fn [this point]
                (send-to this :shift (point :x) (point :y)))}})

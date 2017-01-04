(ns printer
  (:require [macros :refer [forever each-val]]
            [clojure.core.async :refer [chan go >! <!]]
            [clojure.core.strint :refer [<<]]))

(def numbers (chan 1 (filter even?)))
(def messages (chan))

(defn start-consumer []
  (each-val message messages
    (println message)))

(defn start-processor []
  (each-val number numbers
    (println     (<< "Processing: ~{number}"))
    (>! messages (<< "message: ~{number}"))))

(defn start-producer []
  (go
    (dotimes [i 10]
      (>! numbers i)
      (Thread/sleep 500))))

(defn start []
  (start-producer)
  (start-processor)
  (start-consumer))

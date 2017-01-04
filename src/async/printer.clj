(ns printer
  (:require [macros :refer [forever]]
            [clojure.core.async :refer [chan go >! <!]]
            [clojure.core.strint :refer [<<]]))

(def numbers (chan 1 (filter even?)))
(def messages (chan))

(defn start-consumer []
  (forever
    (println "Received" (<! messages))))

(defn start-processor []
  (forever
    (let [number  (<! numbers)
          message (<< "message: ~{number}")]
      (println (<< "Processing: ~{number}"))
      (>! messages message))))

(defn start-producer []
  (go
    (dotimes [i 10]
      (>! numbers i)
      (Thread/sleep 500))))

(defn start []
  (start-producer)
  (start-processor)
  (start-consumer))

(ns printer
  (:require [macros :refer :all]
            [clojure.core.async :refer [chan go >! <!]]
            [clojure.core.strint :refer [<<]]))

(def numbers (chan 1 (filter even?)))
(def messages (chan))

(defn start-consumer []
  (for-chan message messages
    (println message)))

(defn start-processor []
  (for-chan number numbers
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

(ns async.token-bucket
  (:require [clojure.core.async :refer [chan <! >! go close! go-loop timeout to-chan]]
            [async.macros :refer :all]))


(defn limit-rate [channel per-second burstiness]
  (let [bucket (chan burstiness)
        out    (chan)]
    (go-forever
      (>! bucket :token)
      (<! (timeout (int (/ 1000 per-second)))))
    (go-forever
      (let [v (<! channel)]
        (if (nil? v)
          (close! out)
          (do
            (<! bucket)
            (>! out v)))))
    out))


(def numbers (limit-rate (to-chan (range)) 1 10))

(go-forever
  (println (<! numbers)))

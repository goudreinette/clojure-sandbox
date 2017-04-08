(ns sandbox.async-handling
  (:require [clojure.core.async :refer [>! <! chan >!! <!!]]
            [sandbox [async :refer :all]
                     [defmethods :refer [defmethods]]]))

(def actions (chan))
(defonce todos (atom []))


(defmulti handle first)

(defmethods handle [[type payload]]
  :todos/add
    (swap! todos conj payload)
  :default
    (println "Unknown action type."))

(forever
  (handle (<! actions)))

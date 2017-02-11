(ns event-sourcing.server
  (:use org.httpkit.server compojure.core)
  (:require [clojure.core.match :refer [match]]))

(def state  {:events []})

(defn transition [state event]
  (-> state
    (update :events #(cons event %))))

(defroutes main
  (GET "/" []
    @state)
  (POST "/:event-type" [event-type]
    (swap! state #(transition % event-type))))

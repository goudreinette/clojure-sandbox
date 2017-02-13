(ns event-sourcing.server
  (:use org.httpkit.server compojure.core)
  (:require [clojure.core.match :refer [match]]
            [ring.middleware.json :as middleware]))


(defmulti transition-entities :event-sourcing.event/type)

(defn initial-state []
  (atom {:events []
         :entities []}))

(defn replay [events]
  (reduce transition-entities (initial-state) events))


; ---
(def state (initial-state))

(defroutes event-routes
  (GET "/" []
    (@state :entities))
  (GET "/events" []
    (@state :events))
  (POST "/" {event :params}
    (swap! state #(transition-entities % event))))


; (run-server (-> event-routes
;                 (middleware/wrap-json-body {:keywords? true})
;                 (middleware/wrap-json-response)))

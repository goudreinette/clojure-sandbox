(ns analytics.core
 (:require [clj-time [core :as clj-time]]
           [compojure.core :refer :all]
           [compojure.route :as route]
           [ring.middleware.params :as params]
           [hiccup.core :refer [html]]
           [analytics [views :refer :all] [trello :as trello]]
           [analytics.time :as time]
           [sandbox.control-flow :refer []]
           [sandbox.mount :as mount]))

(defn date-or-today [query-params]
  (if (get query-params "date")
    (time/yyyy-mm-dd->date (get query-params "date"))
    (clj-time/today-at 00 00)))

(defroutes app
  (GET "/" {:keys [query-params]}
    (let [date (date-or-today query-params)]
      (println query-params)
      (html (view date "from" "to"
                  {"Trello" (trello/get-actions date)}))))
  (route/resources "/"))

(mount/serve (params/wrap-params app))

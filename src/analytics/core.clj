(ns analytics.core
 (:require [clj-time [core :as t] [format :as f]]
           [compojure.core :refer :all]
           [compojure.route :as route]
           [ring.middleware.params :as params]
           [hiccup.core :refer [html]]
           [analytics [views :refer :all] [trello :as trello]]
           [sandbox [control-flow :refer [for-map]]
                    [mount :refer [serve]]]))


(def actions [{:date (t/today-at 12 00)
               :type "moved card from list to list"
               :entities {:card "Think" :from "Today" :to "Done"}}])


(defroutes app
  (GET "/" {:keys [query-params]}
    (let [date (f/parse (f/formatters :date) (or (get query-params "date") "2017-01-01"))]
      (println query-params)
      (html (view date "from" "to"
                  {"Trello" (trello/get-actions date)}))))
  (route/resources "/"))

(serve (params/wrap-params app))

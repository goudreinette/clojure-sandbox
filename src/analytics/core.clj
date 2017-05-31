(ns analytics.core
 (:require [clj-http.client :as client]
           [sandbox.control-flow :refer [for-map]]
           [clojure.string :as str]
           [clj-time [core :as t] [format :as f]]))

(def key "b768790914d660f51d6f057a524a2060")
(def token "378589fe1bfdb658ce8b1033365fd3b431b2efbfedf91f30d93bf0ccb955690e")
(def formatter (f/formatters :date-time))


(defn get-trello [url & [query-string]]
  (:body (client/get (str "https://api.trello.com/1/"
                          url
                          "?key=" key "&token=" token
                          query-string)
            {:as :json})))

(defn humanize-action-key [translation-key]
  (-> translation-key
    (str/replace #"action_" "")
    (str/replace #"_" " ")))


(defn transform-action [{:keys [display date]}]
  {:type (humanize-action-key (display :translationKey))
   :date (f/parse formatter date)
   :entities
   (for-map [[k v] (display :entities)
             :when (not= k :memberCreator)]
    {k (:text v)})})


(defn get-actions []
  (->>
    (get-trello "members/me/actions" "&memberCreator=false&display=true")
    (map transform-action)))

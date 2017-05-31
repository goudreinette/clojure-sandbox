(ns analytics.views
  (:use net.cgrand.enlive-html clojure.pprint))

(def actions [{:date "10:00"
               :type "moved card from list to list"
               :entities {:card "Think" :from "Today" :to "Done"}}])

(defsnippet action "source.html" [:tr] [{:keys [date type entities]}]
  [:td.time] (content date) ; format here
  [:td.type] (content type)
  [:td.entity]
  (clone-for [[k v] entities]
    (content (str (name k) ": " v))))


(defsnippet source "source.html" [:.source] [source actions]
  [:h5] (content source)
  [:td.action] (content (map action actions)))



(deftemplate layout "index.html" [selected-date from to sources]
  [:#selected-date] (content selected-date)
  [:#actions :.source]
  (clone-for [[s actions] sources]
    (content (source s actions))))

(ns analytics.views
  (:use hiccup.core)
  (:require [analytics.time :as time]))


(defn action [{:keys [date type entities]}]
  `[:tr.action
    [:td.time ~(time/hh:mm date)]
    [:td.type ~type]
    ~@(for [[k v] entities]
       [:td.entity (str (name k) ": " v)])])


(defn source [[name actions]]
  [:div.source
   [:h5 name]
   [:table
    [:tbody
     (map action actions)]]])


(defn view [selected-date from to sources]
  [:html
    [:head
     [:link {:href "/style.css", :rel "stylesheet"}]
     [:script {:src "/jquery-3.2.1.js"}]
     [:script {:src "/moment.js"}]
     [:script {:src "/knockout-3.4.2.js"}]
     [:script {:src "/datepicker.js"}]
     [:script {:src "/datepicker.en.js"}]]
    [:body
     [:div.container
      [:nav
       [:input#period {:value (time/yyyy-mm-dd selected-date)}]]
      [:h1#selected-date (time/pretty selected-date)]
      [:div#actions
       (map source sources)]]
     [:script {:src "/main.js"}]]])

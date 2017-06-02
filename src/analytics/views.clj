(ns analytics.views
  (:use hiccup.core)
  (:require [analytics.time :as time]))

           


(defn action [{:keys [date type entities]}]
  `[:li.action
    [:div.meta
      [:span.type ~type]
      [:span.time ~(time/hh:mm date)]]
    [:div.entities
      ~@(for [[k v] entities]
         [:div.entity [:span.key (name k)] ": " [:span.val v]])]])


(defn source [[name actions]]
  [:div.source
   [:h5 name]
   [:ul
     (map action actions)]])


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
       [:input#period {:value (time/yyyy-mm-dd selected-date) :data-startdate (time/yyyy-mm-dd selected-date)}]]
      [:h1#selected-date (time/pretty selected-date)]
      [:div#actions
       (map source sources)]]
     [:script {:src "/main.js"}]]])

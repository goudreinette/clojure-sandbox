(ns analytics.views
  (:use hiccup.core))

(def actions [{:date "10:00"
               :type "moved card from list to list"
               :entities {:card "Think" :from "Today" :to "Done"}}])


(defn action [{:keys [date type entities]}]
  `[:tr.action
    [:td.time ~date] ; format here
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
     [:link {:href "public/style.css", :rel "stylesheet"}]
     [:script {:src "public/jquery-3.2.1.js"}]
     [:script {:src "public/moment.js"}]
     [:script {:src "public/knockout-3.4.2.js"}]
     [:script {:src "public/daterangepicker.js"}]]
    [:body
     [:div.container
      [:nav
       [:input#period {:data-bind "daterangepicker: dateRange"}]
       [:select#metric [:option "Activities"] [:option "Notes"]]]
      [:div#chart]
      [:div#actions
       [:h3#selected-date selected-date]
       (map source sources)]]
     [:script {:src "public/main.js"}]]])

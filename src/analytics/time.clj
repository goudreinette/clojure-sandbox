(ns analytics.time
  (:require [clj-time.core :as clj-time]
            [clj-time.format :as format]))


(def date-time (format/formatters :date-time))


; Timestamp
(defn timestamp->date [stamp]
  (format/parse date-time stamp))

(defn yyyy-mm-dd [date]
  (format/unparse (format/formatters :date) date))

(defn yyyy-mm-dd->date [date]
  (format/parse (format/formatters :date) date))

(defn day-start-end [date]
  [date
   (clj-time/plus date (clj-time/days 1))])


; Presentation
(defn hh:mm [date]
  (format/unparse (format/formatters :hour-minute) date))

(defn yyyy-mm-dd [date]
  (format/unparse (format/formatters :date) date))

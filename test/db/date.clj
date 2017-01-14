(ns db.date
  (:use db.date)
  (:require [midje.sweet :refer [facts contains]])
  (:require [hara.time :refer [now minus epoch]]))


(facts "about date-range"
  (let [week-before-epoch (minus (epoch) {:weeks 1})
        range             (date-range week-before-epoch (epoch) {:days 1})]
   (first range) => (contains {:day 25})
   (last  range) => (contains {:day 31})
   (count range) => 7))

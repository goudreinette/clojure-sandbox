(ns sandbox.eve-test
  (:use sandbox.eve midje.sweet))

(def card-record [:new-card {:title "Test"}])

(facts "about commit"
  (commit (atom {}) :trello card-record) => {:trello #{card-record}})

(facts "about new-records"
  (new-records {:trello #{card-record}} #{card-record}) => #{})


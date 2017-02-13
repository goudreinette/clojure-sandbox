(ns sandbox.set-test
  (:use midje.sweet sandbox.set))

(def person {:person/name "Hans" :person/age 19  :pet/name "Lieuwe"})
(def people #{person})
(def pets #{{:pet/name "Lieuwe" :pet/kind "dog"}})

(facts "matches?"
  (matches? person {:person/age 19}) => true
  (matches? person {:person/name "Jack"}) => false)

(facts "where"
  (where people {:person/age 19}) => #{person}
  (where people {:person/age 21}) => #{})

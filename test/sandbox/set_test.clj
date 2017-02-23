(ns sandbox.set-test
  (:use midje.sweet sandbox.set))

(def person {:person/name "Hans" :person/age 19  :pet/name "Lieuwe"})
(def people #{person})
(def pet {:pet/name "Lieuwe" :pet/kind "dog"})
(def pets #{pet})


(def animals #{#:animal{:id 1 :name "betsy" :owner "brian" :kind "cow" :personality/id 1}
               #:animal{:id 2 :name "jake"  :owner "brian" :kind "horse" :personality/id 2}
               #:animal{:id 3 :name "josie" :owner "dawn"  :kind "cow" :personality/id 1}})

(def personalities #{#:personality{:id 1 :name "stoic"}
                     #:personality{:id 2 :name "skittisch"}})

(facts "matches?"
  (matches? person {:person/age 19}) => true
  (matches? person {:person/name "Jack"}) => false)

(facts "select-matching"
  (select-matching people {:person/age 19}) => #{person}
  (select-matching people {:person/age 21}) => #{})

(facts "hydrate"
  (hydrate person pets :pet :pet/name) => (contains {:pet pet}))

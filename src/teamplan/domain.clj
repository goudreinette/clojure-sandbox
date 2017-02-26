(ns teamplan.domain
  (:require [schema.core :refer [defschema validate Int]]))

(declare Goal Stage)



(defschema User
  {:team-id Int
   :name String
   :email String})

(defschema Team
  {:id Int
   :name String})

(defschema Goal
  {:description String
   :smart? Boolean})

(defschema Stage
  {:name String
   :start-date java.util.Date
   :end-date java.util.Date})

(defschema Activity
  {:id Int
   :name String
   :goals [Goal]
   :stages [Stage]})


; Example
(validate User
  {:team-id 1
   :name "Test"
   :email "demo@demo"})

(validate Activity
  {:id 1
   :name "Test Activity"
   :goals [{:description "A goal"
            :smart? true}]
   :stages [{:name "A stage"
             :start-date (java.util.Date.)
             :end-date (java.util.Date.)}]})

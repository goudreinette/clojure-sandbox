(ns api-test
  (:use midje.sweet sandbox.api))


(facts "about resource-prefix"
  (resource-prefix ::posts) => "/posts")

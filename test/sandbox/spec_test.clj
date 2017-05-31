(ns sandbox.spec-test
  (:use midje.sweet sandbox.spec)
  (:require [clojure.spec :as s]))

(defspecs
  ::name string?
  ::age int?
  ::person (s/keys :req [::name ::age]))

(defmapspec ::dog
  ::favorite-food string?
  ::dog-age int?)

(facts "about defspecs"
  (s/describe ::name) => 'string?
  (s/describe ::age) => 'int?
  (s/describe ::person) => '(keys :req [::name ::age]))


(facts "about defmapspec"
  (s/describe ::favorite-food) => 'string?
  (s/describe ::dog-age) => 'int?
  (s/describe ::dog) => '(keys :req-un [::favorite-food ::dog-age]))

(ns sandbox.generative-testing
  (:require [clojure.spec :as s]
            [clojure.spec.gen :as gen]
            [sandbox.spec :refer [defspecs]]))

(def email-regex #".+\@.+")

(def domain (gen/elements ["gmail.com" "hotmail.com" "computer.org"]))
(def email-gen
  (gen/fmap (fn [[name domain-name]]
              (str name "@" domain-name))
    (gen/tuple (gen/not-empty (gen/string-alphanumeric)) domain)))

(defspecs
  ::id (s/and int? #(> % 0))
  ::non-empty-string (s/and string? not-empty)
  ::first-name ::non-empty-string
  ::last-name ::non-empty-string
  ::birth-date (s/inst-in #inst "1970" #inst "2000")
  ::email (s/with-gen (s/and string? #(re-matches email-regex %)) (fn [] email-gen))
  ::person (s/keys :req-un [::first-name ::last-name ::birth-date ::id ::email]))
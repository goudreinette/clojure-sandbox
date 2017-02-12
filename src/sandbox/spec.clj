(ns sandbox.spec
  (:require [clojure.spec :as s]))

(defn def-map-spec [name kvs]
 `(def ~name ~(s/keys :req ~@(keys kvs))))

(defn def-keyword-specs [kw-specs]
  (for [[kw spec] kw-specs] `(s/def ~kw ~spec)))

(defmacro defspecs [& {:as kw-specs}]
 `(do ~(def-keyword-specs kw-specs)))

(defmacro defschema [name & {:as kw-specs}]
 `(do
    ~(def-map-spec name kw-specs)
    ~(def-keyword-specs kw-specs)))


; Usage
(defschema person
  ::name string?
  ::age int?)

(defspecs
  :dog/name string?
  :dog/breed string?
  :dog/dog (s/keys :req [:dog/name :dog/breed]))

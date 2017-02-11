(ns sandbox.spec
  (:require [clojure.spec :as s]))

(defn def-map-spec [name kvs]
 `(def ~name ~(s/keys :req ~@(keys kvs))))

(defn def-key-specs [kvs]
  (for [[k v] kvs] `(s/def ~k ~v)))

(defmacro defschema [name & {:as kvs}]
 (list* `do
   (def-map-spec name kvs)
   (def-key-specs kvs)))

; Target syntax
(defschema person
  ::name string?
  ::age int?)

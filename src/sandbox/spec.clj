(ns sandbox.spec
  (:require [clojure.spec :as s]))

(defmacro defspecs
  "Define multiple clojure.spec spec's"
  [& {:as specs}]
  `(do ~@(for [[kw spec] specs]
           `(s/def ~kw ~spec))))

(defmacro defmapspec
  "Define specs for a map and it's keys"
  [map-name & specs]
  `(defspecs
     ~map-name (s/keys :req-un [~@(map first (partition 2 specs))])
     ~@specs))


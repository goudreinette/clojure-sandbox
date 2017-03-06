(ns sandbox.spec
  (:require [clojure.spec :as s]))

(defmacro defspecs
  "Define multiple clojure.spec spec's"
  [& {:as specs}]
 `(do ~@(for [[kw spec] specs]
            `(s/def ~kw ~spec))))

(defspecs
  ::id int?
  ::name string?
  ::person (s/keys :req [::id ::name]))

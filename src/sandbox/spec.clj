(ns sandbox.spec
  (:require [clojure.spec :as s]))

(defmacro defspecs [& {:as specs}]
 `(do ~@(for [[kw spec] specs]
            `(s/def ~kw ~spec))))

(defspecs
  ::id int?
  ::name string?)

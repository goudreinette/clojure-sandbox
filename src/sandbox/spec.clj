(ns sandbox.spec
  (:require [clojure.spec :as s]))

(defmacro defspecs
  "Define multiple clojure.spec spec's"
  [& {:as specs}]
 `(do ~@(for [[kw spec] specs]
            `(s/def ~kw ~spec))))

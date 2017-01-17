(ns joy.logic
  (require [clojure.core.logic :as logic]))

(logic/run* [answer]
  (logic/== answer 5))

(ns sandbox.commons
  (:require [clojure.core.strint]
            [clojure.core.match]))

; Re-export some commonly used macro's for convenience.
(def #^{:macro true} match #'clojure.core.match/match)
(def #^{:macro true} <<    #'clojure.core.strint/<<)

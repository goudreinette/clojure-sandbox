; All my commonly used macro's
(ns utils.macros
  (:require [clojure.core.match]
            [clojure.core.strint]))

(intern 'utils.all 'match 'clojure.core.match/match)
(intern 'utils.all 'strint clojure.core.strint/<<)

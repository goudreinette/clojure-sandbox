(ns db.api
  (:use db.core))

(defn init [file]
  (let [history (-> file slurp read-string)
        state (replay history)]
    (atom {:file file
           :history history
           :state state})))

(def assert!  (partial exec-event! :assert))
(def retract! (partial exec-event! :retract))


; Testing
(def db (init "db.edn"))

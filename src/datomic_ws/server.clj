(ns datomic-ws.server
  (:use datomic-ws.sockets compojure.core compojure.route org.httpkit.server)
  (:require [sandbox.mount :refer [defserver]]
            [mount.core :as mount]))

(def db (atom {}))
(def clients (atom #{}))


(defn transact [tx-string]
  (println "transact! tx-data:" (read-string tx-string)))

(defn notify [transaction]
  (doseq [client @clients]
    (send! client (str transaction))))

(defserver ws-server
  (routes
    (GET "/" [] (slurp "public/index.html"))
    (files "/")
    (ws-handler "/ws"
      :on-connect #(swap! clients conj %)
      :on-receive transact
      :on-close println)))

(mount/start)
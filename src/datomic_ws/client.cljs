(ns datomic-ws.client
  (:require [alandipert.storage-atom :refer [local-storage]]
            [chord.client :refer [ws-ch]]
            [cljs.core.async :refer [<! >! <!]])
  (:require-macros [cljs.core.async.macros :refer [go-loop go]]
                   [let-else :refer [let?]]))

(declare listen!)

(enable-console-print!)


(def db (atom []))
(def local-changes (local-storage (atom []) :local-changes))



(go
  (let? [{:keys [ws-channel error]} (<! (ws-ch "ws://localhost:3000/ws"))]
    (>! ws-channel "Hello server from client!")
    (listen! ws-channel)))

(defn push! [ws-channel]
  (go-loop []
	(<! (timeout 1000))
    (>! ws-channel @local-changes)
    (reset! local-changes [])))



(defn listen! [ws-channel]
  (go-loop []
    (let [{:keys [message error]} (<! ws-channel)]
      (println message error)
      (if error
        (swap! local-changes conj message)
        (do
          (swap! db conj message)                           ; replace with transact
          (recur))))))

(add-watch local-changes
  :new
  (fn [_ _ _ v]
    (println "local changes updated: " v)))

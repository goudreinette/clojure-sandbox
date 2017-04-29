(ns datomic-ws.sockets
  (:use org.httpkit.server compojure.core))


(defn ws-handler [path & {:as handlers}]
  (GET path req
    (with-channel req channel
      ((:on-connect handlers) channel)
      (on-close channel (:on-close handlers))
      (on-receive channel (:on-receive handlers)))))


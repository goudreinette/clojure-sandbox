(ns sandbox.multi)



(defn make-method [multifn dispatch-value args & body]
  `(defmethod ~multifn ~dispatch-value [~@args]
     ~@body))

(defmacro defmethods [multi-fn args & {:as methods}]
 `(do ~@(for [[dispatch-value body] methods]
           (make-method multi-fn dispatch-value args body))))


; Demo
(defmulti handle
  "Dispatch on event type"
  first)

(defmethods handle [event]
  :todo/add
    (println "Adding a todo")
  :todo/remove
    (println "Removing a todo")
  :default
    (println "No handler for event"))

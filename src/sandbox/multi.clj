(ns sandbox.multi)



(defmacro defmethods [multifn args & {:as methods}]
 `(do ~@(for [[dispatch-value body] methods]
           `(defmethod ~multifn ~dispatch-value [~@args]
              ~@body))))

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

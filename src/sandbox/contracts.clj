(ns sandbox.contracts)

; Contract
(defmacro contract [args pre => post]
  `(fn [~'f]
    (fn [~@args] {:pre [~pre] :post [~post]}
      (~'f ~@args))))

(defmacro defcontract [name args pre => post]
  `(def ~name (contract ~args ~pre ~'=> ~post)))

(defmacro defconstrained [contract name args & body]
  `(def ~name (~contract (fn [~@args] ~@body))))



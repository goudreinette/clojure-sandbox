(ns joy.macros)

; condf
(defn insert-v [v [condition result]]
  (list
    (if (list? condition)
      (list* (first condition) v (rest condition))
      condition)
    result))

(defn expand-clauses [v body]
  (->> body
    (partition 2)
    (mapcat (partial insert-v v))))



(defmacro condf [v & forms]
  `(cond ~@(expand-clauses v forms)))


; unless
(defmacro unless [test & body]
  `(when (not ~test) ~@body))




; def-watched
(defmacro def-watched [name & value]
  `(do
    (def ~name ~@value)
    (add-watch (var ~name) :re-bind
     (fn [key# r# old# new#]
      (println old# "->" new#)))))

; Anaphora
(defmacro awhen [expr & body]
  `(let [~'it ~expr]
      (if ~'it
        (do ~@body))))

; wrap-def
(defn wrap-def [macro]
  (let [macroname (symbol (str "def" macro))]
    (defmacro macroname [name & args]
       `(def ~name (apply macro args)))))



; Contract
(defmacro contract [args pre => post]
  `(fn [~'f]
    (fn [~@args] {:pre [~pre] :post [~post]}
      (~'f ~@args))))

(defmacro defcontract [name args pre => post]
  `(def ~name (contract ~args ~pre ~'=> ~post)))

(defmacro defn-contract [contract name args & body]
  `(def ~name (~contract (fn [~@args] ~@body))))

; Schema
(defmacro defschema [name & attrs]
  `(def ~name ~(apply hash-map attrs)))

(defn entry-valid? [schema [k v]]
  (= (type v)
     (schema k)))

(defn valid? [schema data]
  (every? #(entry-valid? schema %) data))

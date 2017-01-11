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

;
; (defn build-contract [[args & {:keys [require ensure]}]]
;   (list (into '[f] args)
;         {:pre  [require]
;          :post [ensure]}
;         (list* 'f args)))

; (defn collect-bodies [forms]
;   (map build-contract (partition 5 forms)))

(defmacro defcontract [name args pre => post]
  `(defn ~name [~'f]
     (fn [~@args] {:pre [~pre] :post [~post]}
      (~'f ~@args))))

; (defmacro defcontract [name & args]
;  `(def ~name (contract ~@args)))
;
; (defn with-contract [contract fn]
;   (partial fn contract))
;
; (defmacro defn-with-contract [contract name & args]
;  `(def ~name
;     (with-contract ~contract
;       (fn ~name ~@args))))
(macroexpand-1
  '(defcontract doubler [x]
    (> x 0) => (= % (* 2 x))))

(defcontract doubler [x]
  (> x 0) => (= % (* 2 x)))

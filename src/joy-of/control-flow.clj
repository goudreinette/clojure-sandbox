(ns control-flow)

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


(condf 12
  (>= 10)  "default"
  (>= 5)   "lower than 10"
  (>= 0)   "lower than 5"
  :else    "expired")


; unless
(defmacro unless [test & body]
  `(when (not ~test) ~@body))

(unless false
  (println "yep"))


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


; Contract
(defmacro contract [pre post]
  {:pre  (fn [] (~@pre))
   :post (fn [] (~@post))})

(defmacro defcontract [name args & {:keys [pre post]}]
  `(def ~name (contract pre post)))


(defmacro with-contract [])

(macroexpand
  '(contract (> x 0) (= result (* x 2))))

(macroexpand
  '(defcontract doubler [x]
    :pre  (> x 0)
    :post (= result (* x 2))))

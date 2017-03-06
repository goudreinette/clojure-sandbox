(ns sandbox.def)


(defmacro def-watched [name & value]
  `(do
    (def ~name ~@value)
    (add-watch (var ~name) :re-bind
     (fn [key# r# old# new#]
      (println old# "->" new#)))))

(defn def-sym [f-sym]
  (symbol (str "def" (name f-sym))))

(defn intern-application-result [f name args]
  (intern *ns* name (apply f args)))

(defn make-def-macro [f-sym]
 `(defmacro ~(def-sym f-sym) [name# & args#]
    (intern-application-result ~f-sym name# (map eval args#))))

(defmacro defmacro-for [f]
  (make-def-macro f))


; Test
(defmacro-for partial)

(defpartial plus5 + 5)

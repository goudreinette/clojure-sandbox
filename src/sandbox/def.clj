(ns sandbox.def)


(defmacro def-watched [name & value]
  `(do
     (def ~name ~@value)
     (add-watch (var ~name) :re-bind
       (fn [key# r# old# new#]
         (println old# "->" new#)))))


(defn def-sym [f-sym]
  (symbol (str "def" f-sym)))

(defn apply->intern [f name args eval-after?]
  (intern *ns* name
    (if eval-after?
      (eval (apply f args))
      (apply f (map eval args)))))

(defn make-def-macro [name f-sym eval-after?]
  `(defmacro ~name [name# & args#]
     (apply->intern ~f-sym name# args# ~eval-after?)))

(defmacro defmacro<-
  ([f]
   (make-def-macro (def-sym f) f false))
  ([name f & [eval-after]]
   (make-def-macro name f eval-after)))


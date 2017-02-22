(ns sandbox.macros)


(defmacro def-watched [name & value]
  `(do
    (def ~name ~@value)
    (add-watch (var ~name) :re-bind
     (fn [key# r# old# new#]
      (println old# "->" new#)))))


(defmacro defdef [fn-sym]
  `(defmacro ~(symbol (str "def" fn-sym)) [name# & args#]
     (def plus1 (apply ~fn-sym args#))))

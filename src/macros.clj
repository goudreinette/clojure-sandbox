(ns macros)

(defmacro infix [[a op b]]
  `(~op ~a ~b))

(defmacro my-print [expression]
  (list 'let ['result expression]
    (list 'println 'result)
    'result))

(defmacro unless [test & branches]
  `(if ~test ~@(reverse branches)))

(defmacro defclass [class-name attrs & methods]
  `{ :own-symbol '~class-name
     :instance-methods
     { :init
       (fn [~'this]
         ~'this)}})

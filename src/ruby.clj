(ns ruby)

(defn ->method [[symbol arguments body]]
 {(keyword symbol)
  `(fn ~arguments
      ~body)})

(defmacro defclass [symbol init & methods]
  '(def ~symbol
    { :own-symbol symbol
      :instance-methods
      (merge { :init init } (map ->method (partition 3 methods)))}))

(ns defclass)

; (defclass Point
;   add [this point]
;     (send-to this :shift (point :x) (point :y)))

(defmacro defclass [class attributes & methods]
  `(def ~class
    { :own-symbol '~class
      :attributes ~(vec (map keyword attributes))
      :instance-methods
        {}}))

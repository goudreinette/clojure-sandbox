(ns oo)

(defn class-name [instance]
  (:class-symbol instance))

(defn class-of [instance]
  (eval (class-name instance)))

(defn apply-message-to [class instance message args]
  (if-some [method (-> class :instance-methods message)]
    (apply method instance args)
    (message instance)))

(defn make [class & args]
  (let [seeded {:class-symbol (class :own-symbol)}]
    (apply-message-to class seeded :init args)))

(defn send-to [instance message & args]
  (apply-message-to (class-of instance) instance message args))

(def Point
  { :own-symbol 'Point
    :instance-methods

    { :init
      (fn [this x y]
        (assoc this :x x :y y))

      :origin
      (fn [this]
        (make Point 0 0))

      :shift
      (fn [this +x +y]
        (make Point (+ (this :x) +x)
                    (+ (this :y) +y)))

      :add
      (fn [this point]
        (send-to this :shift (point :x) (point :y)))}})

(def Holder
  { :own-symbol 'Holder
    :instance-methods

    { :init
      (fn [this held]
        (assoc this :held held))}})



; Target syntax:
; (defclass Point
;   add [this point]
;     (send-to this :shift (point :x) (point :y)))

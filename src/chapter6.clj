(ns oo)

(defn class-name [instance]
  (:class-symbol instance))

(defn class-of [instance]
  (eval (instance :class-symbol)))

(defn apply-message-to [class instance message args]
  (if-some [method (-> class :own-symbol method-cache message)]
    (apply method instance args)
    (instance message)))

(defn make [class & args]
  (let [seeded {:class-symbol (class :own-symbol)}]
    (apply-message-to class seeded :init args)))

(defn send-to [instance message & args]
  (apply-message-to (class-of instance) instance message args))

(defn class-symbol-above [class-symbol]
  (:superclass-symbol (eval class-symbol)))

(defn lineage [class-symbol]
  (when (some? class-symbol)
    (cons class-symbol (lineage (class-symbol-above class-symbol)))))


(defn method-cache [class-symbol]
  (->> class-symbol
    (lineage)
    (reverse)
    (map eval)
    (map :instance-methods)
    (reduce merge)))


(def Anything
  { :own-symbol 'Anything
    :instance-methods

    { :init identity
      :class-name :class-symbol
      :class
      (fn [this]
        (class-of this))}})




(def Point
  { :own-symbol 'Point
    :superclass-symbol 'Anything
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


(def RedPoint
  { :own-symbol 'RedPoint
    :superclass-symbol 'Point
    :instance-methods
    {}})




; Target syntax:
; (defclass Point
;   add [this point]
;     (send-to this :shift (point :x) (point :y)))

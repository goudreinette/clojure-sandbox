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

(def MetaClass
  { :own-symbol 'MetaClass
    :instance-methods
    { :new
      (fn [class & args]
        (let [seeded {:class-symbol (class :own-symbol)}]
          (apply-message-to class seeded :init args)))}})

(def MetaPoint
  { :instance-methods
    { :origin
      (fn [this]
        assoc)}})


(def Point
  { :own-symbol 'Point
    :class-symbol 'MetaPoint
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

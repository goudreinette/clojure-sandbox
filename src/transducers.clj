(ns transducers)


(defn template-transducer [xf] ; For example: conj, +, other transducers
  (fn
    ([]             (xf))
    ([result]       (xf result))
    ([result input] (xf result input))))

(defn plain-filter-odd [xf]
  (fn
    ([] (xf))
    ([result] (xf result))
    ([result input]
     (cond
      (odd? input) (xf result input)
      :else        result))))

(defn duplicate-odd [xf]
  (fn
    ([] (xf))
    ([result] (xf result))
    ([result input]
     (if (odd? input)
        (xf (xf result input) input)
        result))))

(defn stateful-transducer [xf]
  (let [state (atom 100)] ; Declared once
    (fn
      ([]             (xf))
      ([result]       (xf result))
      ([result input]
       (swap! state inc) ; Every invocation of xform
       (cond
         (odd? input) (-> result
                       (xf input)
                       (xf (str "S:" @state)))
         :else result)))))

(defn reducer-transducer [xf]
  (let [state (atom 1)]
    (fn
      ([]             (xf))
      ([result]       (xf @state))
      ([result input]
       (swap! state #(* input %))
       result))))

(defn string-transducer [prefix xf]
  (fn
    ([]             (xf))
    ([result]       (xf result))
    ([result input] (xf result (str prefix ":" input)))))

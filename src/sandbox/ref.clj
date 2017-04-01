(ns sandbox.ref)


(defn formula [name f base-atom]
  (let [new-atom (atom (f @base-atom))]
    (add-watch base-atom :change
      (fn [_ _ old-state new-state]
        (println name ":" (f old-state) "->" (f new-state))
        (reset! new-atom (f new-state))))
    new-atom))

(defmacro defformula [name f base-atom]
  `(def ~name (formula ~(str name) ~f ~base-atom)))




; fn -> ref -> ref
; @refB = f @refA
(def n (atom 0))

(defformula n+1 inc n)


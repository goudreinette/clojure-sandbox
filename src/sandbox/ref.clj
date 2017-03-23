(ns sandbox.ref)


(defn formula [f base-atom]
  (let [new-atom (ref (f @base-atom))]
    (add-watch :change
      (fn [key atom old-state new-state]
        (println old-state "->" new-state)
        (swap! ())))
    new-atom))





; fn -> ref -> ref
; @refB = f @refA
(def count (atom 0))

(def inc-count (formula inc count))
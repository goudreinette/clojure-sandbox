(ns joy.unification
  (:require [clojure.walk :as walk]))

(defn lvar? [sym]
  (and (symbol? sym)
       (re-matches #"^\?.*" (name sym))))

(defn satisfy1 [l r knowledge]
  (let [l (get knowledge l l)
        r (get knowledge r r)]
    (cond
      (= r l)   knowledge
      (lvar? l) (assoc knowledge l r)
      (lvar? r) (assoc knowledge r l)
      :default  nil)))

(defn meld [term1 term2]
  (->> {}
    (satisfy1 term1 term2)))

(defn subst [term binds]
  (walk/prewalk
    #(if (lvar? %) (get binds % %) %)
    term))

(->> {}
  (satisfy1 '?x '?y))

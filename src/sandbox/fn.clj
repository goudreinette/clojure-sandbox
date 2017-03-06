(ns sandbox.fn)

(defn pipe [& fns]
  (reduce comp (reverse fns)))

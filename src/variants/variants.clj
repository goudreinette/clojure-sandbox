(ns variants.variants
 (:require [clojure.core.match :refer [match]]))

(def image {:image/in-memory [[0 1 0 1]]})

(defn display [image]
  (match [image]
    [{:image/in-memory data}] (println "data: "data)
    [{:image/on-disk   path}] (println "path: "path)
    [{:image/web       url}]  (println "url:  "url)))

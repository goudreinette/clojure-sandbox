(ns sandbox.api
  (:require [org.httpkit.server :refer [run-server]]
            [compojure.core :refer :all]
            [clojure.core.strint :refer :all]))


(defn resource-prefix [qualified-keyword]
  (str "/" (name qualified-keyword)))

(defn resource [qualified-keyword]
  (let [prefix   (resource-prefix qualified-keyword)
        entities (atom [])]
    (context prefix []
      (GET "/" [] entities)
      (GET "/:id" [id] (some #(= id (% :id)) entities)))))

(defn api [schema's]
  (->> schema's
   (map resource)
   (apply routes)))


(defmacro defapi [name schema's]
  `(def ~name ~(api schema's)))

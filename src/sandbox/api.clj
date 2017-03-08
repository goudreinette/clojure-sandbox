(ns sandbox.api
  (:require [clojure.spec :as s]
            [sandbox.spec :refer [defspecs]]))

(defspecs
  ::db-config map?
  ::render-with ifn?
  ::config (s/keys :req [::db-config ::render-with]))


; Target syntax
(comment
  (defapp {:db db :render-with render}
    [posts projects tasks users])

  (defresource posts)) ;=> curried, fn takes config map

(defn resource-root-path [sym]
  (str "/" sym))


(defn make-resource [sym {:keys [render-with]}]
  (let [root   (resource-root-path sym)
        render (partial render-with sym)]
    (list* 'compojure.core/context root
      '((GET  "/"         []   (render "index"))
        (GET  "/new"      [id] (render "edit"))
        (POST "/new"      [id] "create one")
        (GET  "/:id"      [id] (render "show"))
        (GET  "/:id/edit" [id] (render "edit"))
        (POST "/:id/edit" [id] "update one")))))



(defmacro defresource [sym]
 `(def ~sym ~(partial make-resource sym)))

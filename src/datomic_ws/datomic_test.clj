(ns sandbox.datomic-test
  (:require [clojure.core.async :refer (<!!)]
            [datomic.api :as d]
            [datomic-schema.schema :as s]
            [sandbox.control-flow :refer [for-fold]]))

; DB ------

(defn scratch-conn
  "Create a connection to an anonymous, in-memory database."
  []
  (let [uri (str "datomic:mem://" (d/squuid))]
    (d/delete-database uri)
    (d/create-database uri)
    (d/connect uri)))

(defonce conn (scratch-conn))

(def db (d/db conn))


; Schema --------
(def schema
  [(s/schema inv
     (s/fields
       [sku :string :unique-identity]
       [color :ref :one]
       [size :ref :one]
       [type :ref :one]
       [count :long]))

   (s/schema order
     (s/fields
       [items :ref :many :component]))

   (s/schema item
     (s/fields
       [id :ref :one]
       [count :long]))])


(defn make-idents [& xs]
  (for [x (apply concat xs)]
    #:db{:id (d/tempid :db.part/user) :ident x}))



; Data ----
(def types [:shirt :pants :dress :hat])
(def colors [:red :green :blue :yellow])
(def sizes [:small :medium :large :xlarge])

(def attributes
  (make-idents types colors sizes))

(def sample-data
  (->>
    (for [c colors s sizes t types]
      #:inv{:db/id (d/tempid :db.part/user)
            :color c
            :size  s
            :type  t})
    (map-indexed #(assoc %2 :inv/sku (str "SKU-" %1)))))

; Setup ----
(defn setup []
  (d/transact conn (s/generate-schema schema))
  (d/transact conn attributes)
  (d/transact conn sample-data))

; Querier ----
(def inventory-query '[:find ?e
                       :where [?e :inv/color ?c]])


(defn inventory []
  (for [[eid] (d/q inventory-query db)]
    (d/touch (d/entity db eid))))


; -- Schema growth: Orders
(def new-order
  #:order{:db/id (d/tempid :db.part/user)
          :items (for [[sku count] {"SKU-25" 10 "SKU-26" 20}]
                   #:item{:id    [:inv/sku sku]
                          :count count})})

(defn orders []
  (d/q '[:find (pull ?o [:order/items])
         :where [?o :order/items]] db))

(for [binding expr]
  ())

; -- Schema growth: Inventory count

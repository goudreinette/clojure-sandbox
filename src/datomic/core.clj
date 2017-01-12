(ns datomic.core
  (:refer-clojure :exclude [read-string assert load])
  (:require [clojure.edn :refer [read-string]]
            [clojure.set :as set]))

; Constructors
(defn filter-attribute
  [[attribute-name {:as properties :or {:unique? false}}]]
  [attribute-name (select-keys properties [:unique? :type])])

(defn schema [& {:as attributes}]
  (->> attributes
    (mapcat filter-attribute)
    (apply hash-map)))

(defn transaction [& {:keys [type where attributes]}]
  {:type type ; assert :assert/reject
   :date (java.util.Date.)
   :where where ; validation?
   :attributes attributes})


; Select
(defn matches? [entity where]
  (= (select-keys entity (keys where)) where))

(defn select [entities where]
  (set/select #(matches? % where) entities))

; State
; Find

(defn execute-assert [{:keys [entities]} {:keys [where attributes]}]
  (let [matching (select entities where)
        updated  (map #(merge % attributes) matching)]
    (-> entities
      (set/difference matching)
      (set/union updated))))

(defn execute-reject [state transaction]
  ())

(defn execute-transaction [state transaction]
  (case (:type transaction)
    :assert (execute-assert state transaction)
    :reject (execute-reject state transaction)))

(defn replay [history]
  (let [initial-state {:attributes #{} :entities #{}}]
    (reduce execute-transaction initial-state history)))



; Persistence
(defn load [file]
  (let [history (-> file slurp read-string)
        state   (replay history)]
    {:history history
     :state   state
     :file    file}))

(defn save [{:keys [history file]}]
  (spit file history))





; Client
(defn query [db & {:keys [where pluck] :or {:where {}}}]
  (-> db :state :entities
   (select where)))


(defn assert [params]
  ())

(defn retract [params]
  ())

(def testdb {:history #{}
             :state {:attributes #{}
                     :entities   #{{:age 4  :name "Lieuwe"}
                                   {:age 19 :name "Rein"}
                                   {:age 15 :name "Stephan"}}}
             :file    "db.edn"})

(def testassertion (transaction :type :assert :where {:name "Rein" :age 19} :attributes {:age 20}))

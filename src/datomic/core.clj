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

(defn statement [& {:keys [type where attributes]}]
  {:type type ; assert :assert/retract
   :date (java.util.Date.)
   :where where ; validation?
   :attributes attributes})


; Select
(defn matches? [entity where]
  (= (select-keys entity (keys where)) where))

(defn select [entities where]
  (set/select #(matches? % where) entities))

; Set helpers
(defn replace-entities [entities a b]
  (-> entities
    (set/difference a)
    (set/union b)))

(defn update-entities-with [f entities where]
  (let [matching (select entities where)
        updated  (map f matching)]
    (replace-entities entities matching updated)))

(defn update-entities [entities where attributes]
  (update-entities-with #(merge % attributes) entities where))

(defn insert-entity [entities new-entity]
  (set/union entities #{new-entity}))


; Statements
(defn execute-assert [{:keys [entities]} {:keys [where attributes]}]
  (if where
    (update-entities entities where attributes)
    (insert-entity entities attributes)))

(defn execute-retract [{:keys [entities]} {:keys [where attributes]}]
  (if attributes
    (update-entities-with #(apply dissoc % attributes) entities where)
    (replace-entities entities (select entities where) #{})))

(defn execute-statement [state statement]
  (assoc state :entities
    (case (:type statement)
      :assert  (execute-assert state statement)
      :retract (execute-retract state statement))))

(defn replay [history]
  (let [initial-state {:attributes #{} :entities #{}}]
    (reduce execute-statement initial-state history)))



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
  (let [entities (-> db :state :entities)
        matching (select entities where)
        keys     (or pluck (mapcat keys matching))]
    (map #(select-keys % keys) matching)))

(def assert  (partial statement :type :assert))
(def retract (partial statement :type :retract))


; Test data

(def history #{(assert :attributes {:age 4  :name "Lieuwe"})
               (assert :attributes {:age 19 :name "Rein"})
               (assert :attributes {:age 15 :name "Stephan"})})

(def state (replay history))

(def testassertion (assert :where {:age 19}))

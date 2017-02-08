(ns sandbox.eventsourcing
  (require [schema.core :refer [defschema validate Any Symbol Keyword]])
  (import java.util.Date))

(defschema Event
  {:type        Symbol
   :attributes {Keyword Any}
   :date        Date})

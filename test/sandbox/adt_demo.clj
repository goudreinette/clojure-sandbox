(ns sandbox.adt-demo
 (:use sandbox.adt))

    

; Demo
(defdata UserId
  Anonymous
  (Registered id))


(defn test- []
  (case-of (Registered 1)
    Anonymous "anon"
    (Registered id) id))




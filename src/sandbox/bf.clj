(ns sandbox.bf
  (:require [instaparse.core :refer [defparser]]
            [sandbox.defmethods :refer [defmethods]]))

(declare bf-eval)


(defparser bf-parser
  "<program>   = (operation | loop)*
   loop        = <'['> program <']'>
   <operation> = inc-pointer | dec-pointer
               | inc-byte | dec-byte
               | read | write
   inc-pointer = '>'
   dec-pointer = '<'
   inc-byte = '+'
   dec-byte = '-'
   read = ','
   write = '.'"
  :auto-whitespace :standard)

(defmulti bf-eval first)



(defn update-pointer [[memory pointer] +-]
  [memory (+- pointer)])

(defn current-byte [[memory pointer]]
  (memory pointer))

(defn update-byte [[memory pointer] +-]
  [(update memory pointer +-) pointer])

(defn read-byte [[memory pointer]]
  [(update memory pointer (constantly (read)))])

(defn write-byte [[memory pointer :as state]]
  (print (current-byte state))
  state)

(defn bf-loop [state ops]
  (if (= 0 (current-byte state))
    state
    (reduce bf-eval state ops)))

(defmethods bf-eval [[memory pointer] op]
  :inc-byte
  (update-byte state inc)
  :dec-byte
  (update-byte state dec)
  :inc-pointer
  (update-pointer state inc)
  :dec-pointer
  (update-pointer state dec)
  :read
  (read-byte state)
  :write
  (write-byte state)
  :loop
  (bf-loop state (rest op)))


(def init-state [(vec (repeat 20 0)) 0])

(defn bf [program-string]
  (reduce bf-eval init-state (bf-parser program-string)))
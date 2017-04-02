(ns sandbox.bf
  (:require [instaparse.core :refer [defparser]]))

(declare bf-eval)

(def memory (atom (vec (repeat 20 0))))
(def pointer (atom 0))


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

(defn update-pointer [f]
  (swap! pointer f))

(defn current-byte []
  (@memory @pointer))

(defn update-byte [f]
  (swap! memory update @pointer f))

(defn read-byte []
  (swap! memory update @pointer (constantly (read))))

(defn write-byte []
  (print (char (current-byte))))

(defn bf-loop [ops]
  (when-not (= 0 (current-byte))
    (doseq [op ops]
      (bf-eval op))
    (bf-loop ops)))

(defn bf-eval [form]
  (case (first form)
    :inc-byte (update-byte inc)
    :dec-byte (update-byte dec)
    :inc-pointer (update-pointer inc)
    :dec-pointer (update-pointer dec)
    :read (read-byte)
    :write (write-byte)
    :loop (bf-loop (rest form))
    (doseq [f (rest form)]
      (bf-eval f))))

(defn bf [program-string]
  (bf-eval (bf-parser program-string)))
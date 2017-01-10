(ns joy.polymorphism)

(def unix {:os         ::unix
           :c-compiler "cc"
           :home       "/home"
           :dev        "/dev"})

(def osx  {:os            ::osx
           :llvm-compiler "clang"
           :home          "/Users"
           :dev           "/dev"})

(defmulti compiler :os)
(defmethod compiler ::unix [m] (:c-compiler m))
(defmethod compiler ::osx  [m] (:llvm-compiler m))

(defmulti home :os)
(defmethod home ::unix [m] (:home m))
(defmethod home ::bsd [m] "/home")

(derive ::osx ::bsd)
(derive ::osx ::unix)
(prefer-method home ::unix ::bsd)

(defmulti compile-cmd (juxt :os compiler))
(defmethod compile-cmd [::osx "clang"] [m]
  (str "/usr/bin/" (:llvm-compiler m)))
(defmethod compile-cmd :default [m]
  (str "Unsure where to locate " (:c-compiler m)))

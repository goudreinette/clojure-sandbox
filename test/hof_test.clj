(ns hof-test
  (:use hof)
  (:use midje.sweet))


(facts "about number-checker"
  (isbn? "0131774115")  => true
  (isbn? "0977716614")  => true
  (isbn? "1934356190")  => false)

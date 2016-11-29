(defproject oo "0.0.1"
  :description ""
  :dependencies
    [[org.clojure/clojure "1.8.0"]
     [proto-repl "0.3.1"]]
  :main oo
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[midje "1.8.3"]]}})

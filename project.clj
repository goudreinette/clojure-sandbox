(defproject oo "0.0.1"
  :description ""
  :dependencies
    [[org.clojure/clojure "1.8.0"]
     [org.clojure/core.incubator "0.1.4"]
     [org.clojure/core.async "0.2.395"]
     [org.clojure/core.match "0.3.0-alpha4"]
     [im.chit/hara.time "2.4.8"]
     [proto-repl "0.3.1"]]
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[midje "1.8.3"]]}})

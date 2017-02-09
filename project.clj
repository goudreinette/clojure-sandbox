(defproject reinvdwoerd/sandbox "0.0.1"
  :description ""
  :dependencies
    [[org.clojure/clojure "1.9.0-alpha14"]
     [org.clojure/core.incubator "0.1.4"]
     [org.clojure/core.async "0.2.395"]
     [org.clojure/core.match "0.3.0-alpha4"]
     [proto-repl "0.3.1"]]
  :profiles {:uberjar {:aot :all}
             :dev {:source-paths ["src" "test"]
                   :dependencies [[midje "1.8.3"]]}})

// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27002__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27002__auto__){
return or__27002__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("goog/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27002__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__27002__auto__)){
return or__27002__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33550_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33550_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33555 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33556 = null;
var count__33557 = (0);
var i__33558 = (0);
while(true){
if((i__33558 < count__33557)){
var n = cljs.core._nth.call(null,chunk__33556,i__33558);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33559 = seq__33555;
var G__33560 = chunk__33556;
var G__33561 = count__33557;
var G__33562 = (i__33558 + (1));
seq__33555 = G__33559;
chunk__33556 = G__33560;
count__33557 = G__33561;
i__33558 = G__33562;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__33555);
if(temp__6753__auto__){
var seq__33555__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33555__$1)){
var c__27913__auto__ = cljs.core.chunk_first.call(null,seq__33555__$1);
var G__33563 = cljs.core.chunk_rest.call(null,seq__33555__$1);
var G__33564 = c__27913__auto__;
var G__33565 = cljs.core.count.call(null,c__27913__auto__);
var G__33566 = (0);
seq__33555 = G__33563;
chunk__33556 = G__33564;
count__33557 = G__33565;
i__33558 = G__33566;
continue;
} else {
var n = cljs.core.first.call(null,seq__33555__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33567 = cljs.core.next.call(null,seq__33555__$1);
var G__33568 = null;
var G__33569 = (0);
var G__33570 = (0);
seq__33555 = G__33567;
chunk__33556 = G__33568;
count__33557 = G__33569;
i__33558 = G__33570;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33621_33632 = cljs.core.seq.call(null,deps);
var chunk__33622_33633 = null;
var count__33623_33634 = (0);
var i__33624_33635 = (0);
while(true){
if((i__33624_33635 < count__33623_33634)){
var dep_33636 = cljs.core._nth.call(null,chunk__33622_33633,i__33624_33635);
topo_sort_helper_STAR_.call(null,dep_33636,(depth + (1)),state);

var G__33637 = seq__33621_33632;
var G__33638 = chunk__33622_33633;
var G__33639 = count__33623_33634;
var G__33640 = (i__33624_33635 + (1));
seq__33621_33632 = G__33637;
chunk__33622_33633 = G__33638;
count__33623_33634 = G__33639;
i__33624_33635 = G__33640;
continue;
} else {
var temp__6753__auto___33641 = cljs.core.seq.call(null,seq__33621_33632);
if(temp__6753__auto___33641){
var seq__33621_33642__$1 = temp__6753__auto___33641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33621_33642__$1)){
var c__27913__auto___33643 = cljs.core.chunk_first.call(null,seq__33621_33642__$1);
var G__33644 = cljs.core.chunk_rest.call(null,seq__33621_33642__$1);
var G__33645 = c__27913__auto___33643;
var G__33646 = cljs.core.count.call(null,c__27913__auto___33643);
var G__33647 = (0);
seq__33621_33632 = G__33644;
chunk__33622_33633 = G__33645;
count__33623_33634 = G__33646;
i__33624_33635 = G__33647;
continue;
} else {
var dep_33648 = cljs.core.first.call(null,seq__33621_33642__$1);
topo_sort_helper_STAR_.call(null,dep_33648,(depth + (1)),state);

var G__33649 = cljs.core.next.call(null,seq__33621_33642__$1);
var G__33650 = null;
var G__33651 = (0);
var G__33652 = (0);
seq__33621_33632 = G__33649;
chunk__33622_33633 = G__33650;
count__33623_33634 = G__33651;
i__33624_33635 = G__33652;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33625){
var vec__33629 = p__33625;
var seq__33630 = cljs.core.seq.call(null,vec__33629);
var first__33631 = cljs.core.first.call(null,seq__33630);
var seq__33630__$1 = cljs.core.next.call(null,seq__33630);
var x = first__33631;
var xs = seq__33630__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33629,seq__33630,first__33631,seq__33630__$1,x,xs,get_deps__$1){
return (function (p1__33571_SHARP_){
return clojure.set.difference.call(null,p1__33571_SHARP_,x);
});})(vec__33629,seq__33630,first__33631,seq__33630__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33665 = cljs.core.seq.call(null,provides);
var chunk__33666 = null;
var count__33667 = (0);
var i__33668 = (0);
while(true){
if((i__33668 < count__33667)){
var prov = cljs.core._nth.call(null,chunk__33666,i__33668);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33669_33677 = cljs.core.seq.call(null,requires);
var chunk__33670_33678 = null;
var count__33671_33679 = (0);
var i__33672_33680 = (0);
while(true){
if((i__33672_33680 < count__33671_33679)){
var req_33681 = cljs.core._nth.call(null,chunk__33670_33678,i__33672_33680);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33681,prov);

var G__33682 = seq__33669_33677;
var G__33683 = chunk__33670_33678;
var G__33684 = count__33671_33679;
var G__33685 = (i__33672_33680 + (1));
seq__33669_33677 = G__33682;
chunk__33670_33678 = G__33683;
count__33671_33679 = G__33684;
i__33672_33680 = G__33685;
continue;
} else {
var temp__6753__auto___33686 = cljs.core.seq.call(null,seq__33669_33677);
if(temp__6753__auto___33686){
var seq__33669_33687__$1 = temp__6753__auto___33686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33669_33687__$1)){
var c__27913__auto___33688 = cljs.core.chunk_first.call(null,seq__33669_33687__$1);
var G__33689 = cljs.core.chunk_rest.call(null,seq__33669_33687__$1);
var G__33690 = c__27913__auto___33688;
var G__33691 = cljs.core.count.call(null,c__27913__auto___33688);
var G__33692 = (0);
seq__33669_33677 = G__33689;
chunk__33670_33678 = G__33690;
count__33671_33679 = G__33691;
i__33672_33680 = G__33692;
continue;
} else {
var req_33693 = cljs.core.first.call(null,seq__33669_33687__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33693,prov);

var G__33694 = cljs.core.next.call(null,seq__33669_33687__$1);
var G__33695 = null;
var G__33696 = (0);
var G__33697 = (0);
seq__33669_33677 = G__33694;
chunk__33670_33678 = G__33695;
count__33671_33679 = G__33696;
i__33672_33680 = G__33697;
continue;
}
} else {
}
}
break;
}

var G__33698 = seq__33665;
var G__33699 = chunk__33666;
var G__33700 = count__33667;
var G__33701 = (i__33668 + (1));
seq__33665 = G__33698;
chunk__33666 = G__33699;
count__33667 = G__33700;
i__33668 = G__33701;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__33665);
if(temp__6753__auto__){
var seq__33665__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33665__$1)){
var c__27913__auto__ = cljs.core.chunk_first.call(null,seq__33665__$1);
var G__33702 = cljs.core.chunk_rest.call(null,seq__33665__$1);
var G__33703 = c__27913__auto__;
var G__33704 = cljs.core.count.call(null,c__27913__auto__);
var G__33705 = (0);
seq__33665 = G__33702;
chunk__33666 = G__33703;
count__33667 = G__33704;
i__33668 = G__33705;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33665__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33673_33706 = cljs.core.seq.call(null,requires);
var chunk__33674_33707 = null;
var count__33675_33708 = (0);
var i__33676_33709 = (0);
while(true){
if((i__33676_33709 < count__33675_33708)){
var req_33710 = cljs.core._nth.call(null,chunk__33674_33707,i__33676_33709);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33710,prov);

var G__33711 = seq__33673_33706;
var G__33712 = chunk__33674_33707;
var G__33713 = count__33675_33708;
var G__33714 = (i__33676_33709 + (1));
seq__33673_33706 = G__33711;
chunk__33674_33707 = G__33712;
count__33675_33708 = G__33713;
i__33676_33709 = G__33714;
continue;
} else {
var temp__6753__auto___33715__$1 = cljs.core.seq.call(null,seq__33673_33706);
if(temp__6753__auto___33715__$1){
var seq__33673_33716__$1 = temp__6753__auto___33715__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33673_33716__$1)){
var c__27913__auto___33717 = cljs.core.chunk_first.call(null,seq__33673_33716__$1);
var G__33718 = cljs.core.chunk_rest.call(null,seq__33673_33716__$1);
var G__33719 = c__27913__auto___33717;
var G__33720 = cljs.core.count.call(null,c__27913__auto___33717);
var G__33721 = (0);
seq__33673_33706 = G__33718;
chunk__33674_33707 = G__33719;
count__33675_33708 = G__33720;
i__33676_33709 = G__33721;
continue;
} else {
var req_33722 = cljs.core.first.call(null,seq__33673_33716__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33722,prov);

var G__33723 = cljs.core.next.call(null,seq__33673_33716__$1);
var G__33724 = null;
var G__33725 = (0);
var G__33726 = (0);
seq__33673_33706 = G__33723;
chunk__33674_33707 = G__33724;
count__33675_33708 = G__33725;
i__33676_33709 = G__33726;
continue;
}
} else {
}
}
break;
}

var G__33727 = cljs.core.next.call(null,seq__33665__$1);
var G__33728 = null;
var G__33729 = (0);
var G__33730 = (0);
seq__33665 = G__33727;
chunk__33666 = G__33728;
count__33667 = G__33729;
i__33668 = G__33730;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33735_33739 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33736_33740 = null;
var count__33737_33741 = (0);
var i__33738_33742 = (0);
while(true){
if((i__33738_33742 < count__33737_33741)){
var ns_33743 = cljs.core._nth.call(null,chunk__33736_33740,i__33738_33742);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33743);

var G__33744 = seq__33735_33739;
var G__33745 = chunk__33736_33740;
var G__33746 = count__33737_33741;
var G__33747 = (i__33738_33742 + (1));
seq__33735_33739 = G__33744;
chunk__33736_33740 = G__33745;
count__33737_33741 = G__33746;
i__33738_33742 = G__33747;
continue;
} else {
var temp__6753__auto___33748 = cljs.core.seq.call(null,seq__33735_33739);
if(temp__6753__auto___33748){
var seq__33735_33749__$1 = temp__6753__auto___33748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33735_33749__$1)){
var c__27913__auto___33750 = cljs.core.chunk_first.call(null,seq__33735_33749__$1);
var G__33751 = cljs.core.chunk_rest.call(null,seq__33735_33749__$1);
var G__33752 = c__27913__auto___33750;
var G__33753 = cljs.core.count.call(null,c__27913__auto___33750);
var G__33754 = (0);
seq__33735_33739 = G__33751;
chunk__33736_33740 = G__33752;
count__33737_33741 = G__33753;
i__33738_33742 = G__33754;
continue;
} else {
var ns_33755 = cljs.core.first.call(null,seq__33735_33749__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33755);

var G__33756 = cljs.core.next.call(null,seq__33735_33749__$1);
var G__33757 = null;
var G__33758 = (0);
var G__33759 = (0);
seq__33735_33739 = G__33756;
chunk__33736_33740 = G__33757;
count__33737_33741 = G__33758;
i__33738_33742 = G__33759;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27002__auto__ = goog.require__;
if(cljs.core.truth_(or__27002__auto__)){
return or__27002__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33760__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33761__i = 0, G__33761__a = new Array(arguments.length -  0);
while (G__33761__i < G__33761__a.length) {G__33761__a[G__33761__i] = arguments[G__33761__i + 0]; ++G__33761__i;}
  args = new cljs.core.IndexedSeq(G__33761__a,0);
} 
return G__33760__delegate.call(this,args);};
G__33760.cljs$lang$maxFixedArity = 0;
G__33760.cljs$lang$applyTo = (function (arglist__33762){
var args = cljs.core.seq(arglist__33762);
return G__33760__delegate(args);
});
G__33760.cljs$core$IFn$_invoke$arity$variadic = G__33760__delegate;
return G__33760;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33764 = cljs.core._EQ_;
var expr__33765 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33764.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33765))){
var path_parts = ((function (pred__33764,expr__33765){
return (function (p1__33763_SHARP_){
return clojure.string.split.call(null,p1__33763_SHARP_,/[\/\\]/);
});})(pred__33764,expr__33765))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__33764,expr__33765){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33767){if((e33767 instanceof Error)){
var e = e33767;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33767;

}
}})());
});
;})(path_parts,sep,root,pred__33764,expr__33765))
} else {
if(cljs.core.truth_(pred__33764.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33765))){
return ((function (pred__33764,expr__33765){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__33764,expr__33765){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__33764,expr__33765))
);

return deferred.addErrback(((function (deferred,pred__33764,expr__33765){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__33764,expr__33765))
);
});
;})(pred__33764,expr__33765))
} else {
return ((function (pred__33764,expr__33765){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33764,expr__33765))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33768,callback){
var map__33771 = p__33768;
var map__33771__$1 = ((((!((map__33771 == null)))?((((map__33771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33771):map__33771);
var file_msg = map__33771__$1;
var request_url = cljs.core.get.call(null,map__33771__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33771,map__33771__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33771,map__33771__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto__){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto__){
return (function (state_33795){
var state_val_33796 = (state_33795[(1)]);
if((state_val_33796 === (7))){
var inst_33791 = (state_33795[(2)]);
var state_33795__$1 = state_33795;
var statearr_33797_33817 = state_33795__$1;
(statearr_33797_33817[(2)] = inst_33791);

(statearr_33797_33817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (1))){
var state_33795__$1 = state_33795;
var statearr_33798_33818 = state_33795__$1;
(statearr_33798_33818[(2)] = null);

(statearr_33798_33818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (4))){
var inst_33775 = (state_33795[(7)]);
var inst_33775__$1 = (state_33795[(2)]);
var state_33795__$1 = (function (){var statearr_33799 = state_33795;
(statearr_33799[(7)] = inst_33775__$1);

return statearr_33799;
})();
if(cljs.core.truth_(inst_33775__$1)){
var statearr_33800_33819 = state_33795__$1;
(statearr_33800_33819[(1)] = (5));

} else {
var statearr_33801_33820 = state_33795__$1;
(statearr_33801_33820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (6))){
var state_33795__$1 = state_33795;
var statearr_33802_33821 = state_33795__$1;
(statearr_33802_33821[(2)] = null);

(statearr_33802_33821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (3))){
var inst_33793 = (state_33795[(2)]);
var state_33795__$1 = state_33795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33795__$1,inst_33793);
} else {
if((state_val_33796 === (2))){
var state_33795__$1 = state_33795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33795__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33796 === (11))){
var inst_33787 = (state_33795[(2)]);
var state_33795__$1 = (function (){var statearr_33803 = state_33795;
(statearr_33803[(8)] = inst_33787);

return statearr_33803;
})();
var statearr_33804_33822 = state_33795__$1;
(statearr_33804_33822[(2)] = null);

(statearr_33804_33822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (9))){
var inst_33779 = (state_33795[(9)]);
var inst_33781 = (state_33795[(10)]);
var inst_33783 = inst_33781.call(null,inst_33779);
var state_33795__$1 = state_33795;
var statearr_33805_33823 = state_33795__$1;
(statearr_33805_33823[(2)] = inst_33783);

(statearr_33805_33823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (5))){
var inst_33775 = (state_33795[(7)]);
var inst_33777 = figwheel.client.file_reloading.blocking_load.call(null,inst_33775);
var state_33795__$1 = state_33795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33795__$1,(8),inst_33777);
} else {
if((state_val_33796 === (10))){
var inst_33779 = (state_33795[(9)]);
var inst_33785 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33779);
var state_33795__$1 = state_33795;
var statearr_33806_33824 = state_33795__$1;
(statearr_33806_33824[(2)] = inst_33785);

(statearr_33806_33824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (8))){
var inst_33775 = (state_33795[(7)]);
var inst_33781 = (state_33795[(10)]);
var inst_33779 = (state_33795[(2)]);
var inst_33780 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33781__$1 = cljs.core.get.call(null,inst_33780,inst_33775);
var state_33795__$1 = (function (){var statearr_33807 = state_33795;
(statearr_33807[(9)] = inst_33779);

(statearr_33807[(10)] = inst_33781__$1);

return statearr_33807;
})();
if(cljs.core.truth_(inst_33781__$1)){
var statearr_33808_33825 = state_33795__$1;
(statearr_33808_33825[(1)] = (9));

} else {
var statearr_33809_33826 = state_33795__$1;
(statearr_33809_33826[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30574__auto__))
;
return ((function (switch__30460__auto__,c__30574__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30461__auto__ = null;
var figwheel$client$file_reloading$state_machine__30461__auto____0 = (function (){
var statearr_33813 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33813[(0)] = figwheel$client$file_reloading$state_machine__30461__auto__);

(statearr_33813[(1)] = (1));

return statearr_33813;
});
var figwheel$client$file_reloading$state_machine__30461__auto____1 = (function (state_33795){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_33795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e33814){if((e33814 instanceof Object)){
var ex__30464__auto__ = e33814;
var statearr_33815_33827 = state_33795;
(statearr_33815_33827[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33828 = state_33795;
state_33795 = G__33828;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30461__auto__ = function(state_33795){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30461__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30461__auto____1.call(this,state_33795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30461__auto____0;
figwheel$client$file_reloading$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30461__auto____1;
return figwheel$client$file_reloading$state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto__))
})();
var state__30576__auto__ = (function (){var statearr_33816 = f__30575__auto__.call(null);
(statearr_33816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto__);

return statearr_33816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto__))
);

return c__30574__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33829,callback){
var map__33832 = p__33829;
var map__33832__$1 = ((((!((map__33832 == null)))?((((map__33832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33832):map__33832);
var file_msg = map__33832__$1;
var namespace = cljs.core.get.call(null,map__33832__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33832,map__33832__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33832,map__33832__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33834){
var map__33837 = p__33834;
var map__33837__$1 = ((((!((map__33837 == null)))?((((map__33837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33837):map__33837);
var file_msg = map__33837__$1;
var namespace = cljs.core.get.call(null,map__33837__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26990__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__26990__auto__){
var or__27002__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27002__auto__)){
return or__27002__auto__;
} else {
var or__27002__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27002__auto____$1)){
return or__27002__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26990__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33839,callback){
var map__33842 = p__33839;
var map__33842__$1 = ((((!((map__33842 == null)))?((((map__33842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33842):map__33842);
var file_msg = map__33842__$1;
var request_url = cljs.core.get.call(null,map__33842__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33842__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30574__auto___33946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___33946,out){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___33946,out){
return (function (state_33928){
var state_val_33929 = (state_33928[(1)]);
if((state_val_33929 === (1))){
var inst_33902 = cljs.core.seq.call(null,files);
var inst_33903 = cljs.core.first.call(null,inst_33902);
var inst_33904 = cljs.core.next.call(null,inst_33902);
var inst_33905 = files;
var state_33928__$1 = (function (){var statearr_33930 = state_33928;
(statearr_33930[(7)] = inst_33904);

(statearr_33930[(8)] = inst_33905);

(statearr_33930[(9)] = inst_33903);

return statearr_33930;
})();
var statearr_33931_33947 = state_33928__$1;
(statearr_33931_33947[(2)] = null);

(statearr_33931_33947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (2))){
var inst_33905 = (state_33928[(8)]);
var inst_33911 = (state_33928[(10)]);
var inst_33910 = cljs.core.seq.call(null,inst_33905);
var inst_33911__$1 = cljs.core.first.call(null,inst_33910);
var inst_33912 = cljs.core.next.call(null,inst_33910);
var inst_33913 = (inst_33911__$1 == null);
var inst_33914 = cljs.core.not.call(null,inst_33913);
var state_33928__$1 = (function (){var statearr_33932 = state_33928;
(statearr_33932[(10)] = inst_33911__$1);

(statearr_33932[(11)] = inst_33912);

return statearr_33932;
})();
if(inst_33914){
var statearr_33933_33948 = state_33928__$1;
(statearr_33933_33948[(1)] = (4));

} else {
var statearr_33934_33949 = state_33928__$1;
(statearr_33934_33949[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (3))){
var inst_33926 = (state_33928[(2)]);
var state_33928__$1 = state_33928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33928__$1,inst_33926);
} else {
if((state_val_33929 === (4))){
var inst_33911 = (state_33928[(10)]);
var inst_33916 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33911);
var state_33928__$1 = state_33928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33928__$1,(7),inst_33916);
} else {
if((state_val_33929 === (5))){
var inst_33922 = cljs.core.async.close_BANG_.call(null,out);
var state_33928__$1 = state_33928;
var statearr_33935_33950 = state_33928__$1;
(statearr_33935_33950[(2)] = inst_33922);

(statearr_33935_33950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (6))){
var inst_33924 = (state_33928[(2)]);
var state_33928__$1 = state_33928;
var statearr_33936_33951 = state_33928__$1;
(statearr_33936_33951[(2)] = inst_33924);

(statearr_33936_33951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (7))){
var inst_33912 = (state_33928[(11)]);
var inst_33918 = (state_33928[(2)]);
var inst_33919 = cljs.core.async.put_BANG_.call(null,out,inst_33918);
var inst_33905 = inst_33912;
var state_33928__$1 = (function (){var statearr_33937 = state_33928;
(statearr_33937[(12)] = inst_33919);

(statearr_33937[(8)] = inst_33905);

return statearr_33937;
})();
var statearr_33938_33952 = state_33928__$1;
(statearr_33938_33952[(2)] = null);

(statearr_33938_33952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__30574__auto___33946,out))
;
return ((function (switch__30460__auto__,c__30574__auto___33946,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30461__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30461__auto____0 = (function (){
var statearr_33942 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33942[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30461__auto__);

(statearr_33942[(1)] = (1));

return statearr_33942;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30461__auto____1 = (function (state_33928){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_33928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e33943){if((e33943 instanceof Object)){
var ex__30464__auto__ = e33943;
var statearr_33944_33953 = state_33928;
(statearr_33944_33953[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33954 = state_33928;
state_33928 = G__33954;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30461__auto__ = function(state_33928){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30461__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30461__auto____1.call(this,state_33928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30461__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30461__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___33946,out))
})();
var state__30576__auto__ = (function (){var statearr_33945 = f__30575__auto__.call(null);
(statearr_33945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___33946);

return statearr_33945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___33946,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33955,opts){
var map__33959 = p__33955;
var map__33959__$1 = ((((!((map__33959 == null)))?((((map__33959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33959):map__33959);
var eval_body = cljs.core.get.call(null,map__33959__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33959__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26990__auto__ = eval_body;
if(cljs.core.truth_(and__26990__auto__)){
return typeof eval_body === 'string';
} else {
return and__26990__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33961){var e = e33961;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33962_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33962_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6751__auto__)){
var file_msg = temp__6751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33971){
var vec__33972 = p__33971;
var k = cljs.core.nth.call(null,vec__33972,(0),null);
var v = cljs.core.nth.call(null,vec__33972,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33975){
var vec__33976 = p__33975;
var k = cljs.core.nth.call(null,vec__33976,(0),null);
var v = cljs.core.nth.call(null,vec__33976,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33982,p__33983){
var map__34231 = p__33982;
var map__34231__$1 = ((((!((map__34231 == null)))?((((map__34231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34231):map__34231);
var opts = map__34231__$1;
var before_jsload = cljs.core.get.call(null,map__34231__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34231__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34231__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34232 = p__33983;
var map__34232__$1 = ((((!((map__34232 == null)))?((((map__34232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34232):map__34232);
var msg = map__34232__$1;
var files = cljs.core.get.call(null,map__34232__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34232__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34232__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34386){
var state_val_34387 = (state_34386[(1)]);
if((state_val_34387 === (7))){
var inst_34248 = (state_34386[(7)]);
var inst_34249 = (state_34386[(8)]);
var inst_34247 = (state_34386[(9)]);
var inst_34246 = (state_34386[(10)]);
var inst_34254 = cljs.core._nth.call(null,inst_34247,inst_34249);
var inst_34255 = figwheel.client.file_reloading.eval_body.call(null,inst_34254,opts);
var inst_34256 = (inst_34249 + (1));
var tmp34388 = inst_34248;
var tmp34389 = inst_34247;
var tmp34390 = inst_34246;
var inst_34246__$1 = tmp34390;
var inst_34247__$1 = tmp34389;
var inst_34248__$1 = tmp34388;
var inst_34249__$1 = inst_34256;
var state_34386__$1 = (function (){var statearr_34391 = state_34386;
(statearr_34391[(7)] = inst_34248__$1);

(statearr_34391[(8)] = inst_34249__$1);

(statearr_34391[(9)] = inst_34247__$1);

(statearr_34391[(10)] = inst_34246__$1);

(statearr_34391[(11)] = inst_34255);

return statearr_34391;
})();
var statearr_34392_34478 = state_34386__$1;
(statearr_34392_34478[(2)] = null);

(statearr_34392_34478[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (20))){
var inst_34289 = (state_34386[(12)]);
var inst_34297 = figwheel.client.file_reloading.sort_files.call(null,inst_34289);
var state_34386__$1 = state_34386;
var statearr_34393_34479 = state_34386__$1;
(statearr_34393_34479[(2)] = inst_34297);

(statearr_34393_34479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (27))){
var state_34386__$1 = state_34386;
var statearr_34394_34480 = state_34386__$1;
(statearr_34394_34480[(2)] = null);

(statearr_34394_34480[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (1))){
var inst_34238 = (state_34386[(13)]);
var inst_34235 = before_jsload.call(null,files);
var inst_34236 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34237 = (function (){return ((function (inst_34238,inst_34235,inst_34236,state_val_34387,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33979_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33979_SHARP_);
});
;})(inst_34238,inst_34235,inst_34236,state_val_34387,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34238__$1 = cljs.core.filter.call(null,inst_34237,files);
var inst_34239 = cljs.core.not_empty.call(null,inst_34238__$1);
var state_34386__$1 = (function (){var statearr_34395 = state_34386;
(statearr_34395[(13)] = inst_34238__$1);

(statearr_34395[(14)] = inst_34236);

(statearr_34395[(15)] = inst_34235);

return statearr_34395;
})();
if(cljs.core.truth_(inst_34239)){
var statearr_34396_34481 = state_34386__$1;
(statearr_34396_34481[(1)] = (2));

} else {
var statearr_34397_34482 = state_34386__$1;
(statearr_34397_34482[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (24))){
var state_34386__$1 = state_34386;
var statearr_34398_34483 = state_34386__$1;
(statearr_34398_34483[(2)] = null);

(statearr_34398_34483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (39))){
var inst_34339 = (state_34386[(16)]);
var state_34386__$1 = state_34386;
var statearr_34399_34484 = state_34386__$1;
(statearr_34399_34484[(2)] = inst_34339);

(statearr_34399_34484[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (46))){
var inst_34381 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34400_34485 = state_34386__$1;
(statearr_34400_34485[(2)] = inst_34381);

(statearr_34400_34485[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (4))){
var inst_34283 = (state_34386[(2)]);
var inst_34284 = cljs.core.List.EMPTY;
var inst_34285 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34284);
var inst_34286 = (function (){return ((function (inst_34283,inst_34284,inst_34285,state_val_34387,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33980_SHARP_){
var and__26990__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33980_SHARP_);
if(cljs.core.truth_(and__26990__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33980_SHARP_));
} else {
return and__26990__auto__;
}
});
;})(inst_34283,inst_34284,inst_34285,state_val_34387,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34287 = cljs.core.filter.call(null,inst_34286,files);
var inst_34288 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34289 = cljs.core.concat.call(null,inst_34287,inst_34288);
var state_34386__$1 = (function (){var statearr_34401 = state_34386;
(statearr_34401[(17)] = inst_34283);

(statearr_34401[(12)] = inst_34289);

(statearr_34401[(18)] = inst_34285);

return statearr_34401;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34402_34486 = state_34386__$1;
(statearr_34402_34486[(1)] = (16));

} else {
var statearr_34403_34487 = state_34386__$1;
(statearr_34403_34487[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (15))){
var inst_34273 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34404_34488 = state_34386__$1;
(statearr_34404_34488[(2)] = inst_34273);

(statearr_34404_34488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (21))){
var inst_34299 = (state_34386[(19)]);
var inst_34299__$1 = (state_34386[(2)]);
var inst_34300 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34299__$1);
var state_34386__$1 = (function (){var statearr_34405 = state_34386;
(statearr_34405[(19)] = inst_34299__$1);

return statearr_34405;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34386__$1,(22),inst_34300);
} else {
if((state_val_34387 === (31))){
var inst_34384 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34386__$1,inst_34384);
} else {
if((state_val_34387 === (32))){
var inst_34339 = (state_34386[(16)]);
var inst_34344 = inst_34339.cljs$lang$protocol_mask$partition0$;
var inst_34345 = (inst_34344 & (64));
var inst_34346 = inst_34339.cljs$core$ISeq$;
var inst_34347 = (cljs.core.PROTOCOL_SENTINEL === inst_34346);
var inst_34348 = (inst_34345) || (inst_34347);
var state_34386__$1 = state_34386;
if(cljs.core.truth_(inst_34348)){
var statearr_34406_34489 = state_34386__$1;
(statearr_34406_34489[(1)] = (35));

} else {
var statearr_34407_34490 = state_34386__$1;
(statearr_34407_34490[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (40))){
var inst_34361 = (state_34386[(20)]);
var inst_34360 = (state_34386[(2)]);
var inst_34361__$1 = cljs.core.get.call(null,inst_34360,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34362 = cljs.core.get.call(null,inst_34360,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34363 = cljs.core.not_empty.call(null,inst_34361__$1);
var state_34386__$1 = (function (){var statearr_34408 = state_34386;
(statearr_34408[(21)] = inst_34362);

(statearr_34408[(20)] = inst_34361__$1);

return statearr_34408;
})();
if(cljs.core.truth_(inst_34363)){
var statearr_34409_34491 = state_34386__$1;
(statearr_34409_34491[(1)] = (41));

} else {
var statearr_34410_34492 = state_34386__$1;
(statearr_34410_34492[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (33))){
var state_34386__$1 = state_34386;
var statearr_34411_34493 = state_34386__$1;
(statearr_34411_34493[(2)] = false);

(statearr_34411_34493[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (13))){
var inst_34259 = (state_34386[(22)]);
var inst_34263 = cljs.core.chunk_first.call(null,inst_34259);
var inst_34264 = cljs.core.chunk_rest.call(null,inst_34259);
var inst_34265 = cljs.core.count.call(null,inst_34263);
var inst_34246 = inst_34264;
var inst_34247 = inst_34263;
var inst_34248 = inst_34265;
var inst_34249 = (0);
var state_34386__$1 = (function (){var statearr_34412 = state_34386;
(statearr_34412[(7)] = inst_34248);

(statearr_34412[(8)] = inst_34249);

(statearr_34412[(9)] = inst_34247);

(statearr_34412[(10)] = inst_34246);

return statearr_34412;
})();
var statearr_34413_34494 = state_34386__$1;
(statearr_34413_34494[(2)] = null);

(statearr_34413_34494[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (22))){
var inst_34302 = (state_34386[(23)]);
var inst_34307 = (state_34386[(24)]);
var inst_34299 = (state_34386[(19)]);
var inst_34303 = (state_34386[(25)]);
var inst_34302__$1 = (state_34386[(2)]);
var inst_34303__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34302__$1);
var inst_34304 = (function (){var all_files = inst_34299;
var res_SINGLEQUOTE_ = inst_34302__$1;
var res = inst_34303__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34302,inst_34307,inst_34299,inst_34303,inst_34302__$1,inst_34303__$1,state_val_34387,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33981_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33981_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34302,inst_34307,inst_34299,inst_34303,inst_34302__$1,inst_34303__$1,state_val_34387,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34305 = cljs.core.filter.call(null,inst_34304,inst_34302__$1);
var inst_34306 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34307__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34306);
var inst_34308 = cljs.core.not_empty.call(null,inst_34307__$1);
var state_34386__$1 = (function (){var statearr_34414 = state_34386;
(statearr_34414[(26)] = inst_34305);

(statearr_34414[(23)] = inst_34302__$1);

(statearr_34414[(24)] = inst_34307__$1);

(statearr_34414[(25)] = inst_34303__$1);

return statearr_34414;
})();
if(cljs.core.truth_(inst_34308)){
var statearr_34415_34495 = state_34386__$1;
(statearr_34415_34495[(1)] = (23));

} else {
var statearr_34416_34496 = state_34386__$1;
(statearr_34416_34496[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (36))){
var state_34386__$1 = state_34386;
var statearr_34417_34497 = state_34386__$1;
(statearr_34417_34497[(2)] = false);

(statearr_34417_34497[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (41))){
var inst_34361 = (state_34386[(20)]);
var inst_34365 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34366 = cljs.core.map.call(null,inst_34365,inst_34361);
var inst_34367 = cljs.core.pr_str.call(null,inst_34366);
var inst_34368 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34367)].join('');
var inst_34369 = figwheel.client.utils.log.call(null,inst_34368);
var state_34386__$1 = state_34386;
var statearr_34418_34498 = state_34386__$1;
(statearr_34418_34498[(2)] = inst_34369);

(statearr_34418_34498[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (43))){
var inst_34362 = (state_34386[(21)]);
var inst_34372 = (state_34386[(2)]);
var inst_34373 = cljs.core.not_empty.call(null,inst_34362);
var state_34386__$1 = (function (){var statearr_34419 = state_34386;
(statearr_34419[(27)] = inst_34372);

return statearr_34419;
})();
if(cljs.core.truth_(inst_34373)){
var statearr_34420_34499 = state_34386__$1;
(statearr_34420_34499[(1)] = (44));

} else {
var statearr_34421_34500 = state_34386__$1;
(statearr_34421_34500[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (29))){
var inst_34305 = (state_34386[(26)]);
var inst_34302 = (state_34386[(23)]);
var inst_34339 = (state_34386[(16)]);
var inst_34307 = (state_34386[(24)]);
var inst_34299 = (state_34386[(19)]);
var inst_34303 = (state_34386[(25)]);
var inst_34335 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34338 = (function (){var all_files = inst_34299;
var res_SINGLEQUOTE_ = inst_34302;
var res = inst_34303;
var files_not_loaded = inst_34305;
var dependencies_that_loaded = inst_34307;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34305,inst_34302,inst_34339,inst_34307,inst_34299,inst_34303,inst_34335,state_val_34387,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34337){
var map__34422 = p__34337;
var map__34422__$1 = ((((!((map__34422 == null)))?((((map__34422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34422):map__34422);
var namespace = cljs.core.get.call(null,map__34422__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34305,inst_34302,inst_34339,inst_34307,inst_34299,inst_34303,inst_34335,state_val_34387,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34339__$1 = cljs.core.group_by.call(null,inst_34338,inst_34305);
var inst_34341 = (inst_34339__$1 == null);
var inst_34342 = cljs.core.not.call(null,inst_34341);
var state_34386__$1 = (function (){var statearr_34424 = state_34386;
(statearr_34424[(16)] = inst_34339__$1);

(statearr_34424[(28)] = inst_34335);

return statearr_34424;
})();
if(inst_34342){
var statearr_34425_34501 = state_34386__$1;
(statearr_34425_34501[(1)] = (32));

} else {
var statearr_34426_34502 = state_34386__$1;
(statearr_34426_34502[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (44))){
var inst_34362 = (state_34386[(21)]);
var inst_34375 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34362);
var inst_34376 = cljs.core.pr_str.call(null,inst_34375);
var inst_34377 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34376)].join('');
var inst_34378 = figwheel.client.utils.log.call(null,inst_34377);
var state_34386__$1 = state_34386;
var statearr_34427_34503 = state_34386__$1;
(statearr_34427_34503[(2)] = inst_34378);

(statearr_34427_34503[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (6))){
var inst_34280 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34428_34504 = state_34386__$1;
(statearr_34428_34504[(2)] = inst_34280);

(statearr_34428_34504[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (28))){
var inst_34305 = (state_34386[(26)]);
var inst_34332 = (state_34386[(2)]);
var inst_34333 = cljs.core.not_empty.call(null,inst_34305);
var state_34386__$1 = (function (){var statearr_34429 = state_34386;
(statearr_34429[(29)] = inst_34332);

return statearr_34429;
})();
if(cljs.core.truth_(inst_34333)){
var statearr_34430_34505 = state_34386__$1;
(statearr_34430_34505[(1)] = (29));

} else {
var statearr_34431_34506 = state_34386__$1;
(statearr_34431_34506[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (25))){
var inst_34303 = (state_34386[(25)]);
var inst_34319 = (state_34386[(2)]);
var inst_34320 = cljs.core.not_empty.call(null,inst_34303);
var state_34386__$1 = (function (){var statearr_34432 = state_34386;
(statearr_34432[(30)] = inst_34319);

return statearr_34432;
})();
if(cljs.core.truth_(inst_34320)){
var statearr_34433_34507 = state_34386__$1;
(statearr_34433_34507[(1)] = (26));

} else {
var statearr_34434_34508 = state_34386__$1;
(statearr_34434_34508[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (34))){
var inst_34355 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
if(cljs.core.truth_(inst_34355)){
var statearr_34435_34509 = state_34386__$1;
(statearr_34435_34509[(1)] = (38));

} else {
var statearr_34436_34510 = state_34386__$1;
(statearr_34436_34510[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (17))){
var state_34386__$1 = state_34386;
var statearr_34437_34511 = state_34386__$1;
(statearr_34437_34511[(2)] = recompile_dependents);

(statearr_34437_34511[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (3))){
var state_34386__$1 = state_34386;
var statearr_34438_34512 = state_34386__$1;
(statearr_34438_34512[(2)] = null);

(statearr_34438_34512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (12))){
var inst_34276 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34439_34513 = state_34386__$1;
(statearr_34439_34513[(2)] = inst_34276);

(statearr_34439_34513[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (2))){
var inst_34238 = (state_34386[(13)]);
var inst_34245 = cljs.core.seq.call(null,inst_34238);
var inst_34246 = inst_34245;
var inst_34247 = null;
var inst_34248 = (0);
var inst_34249 = (0);
var state_34386__$1 = (function (){var statearr_34440 = state_34386;
(statearr_34440[(7)] = inst_34248);

(statearr_34440[(8)] = inst_34249);

(statearr_34440[(9)] = inst_34247);

(statearr_34440[(10)] = inst_34246);

return statearr_34440;
})();
var statearr_34441_34514 = state_34386__$1;
(statearr_34441_34514[(2)] = null);

(statearr_34441_34514[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (23))){
var inst_34305 = (state_34386[(26)]);
var inst_34302 = (state_34386[(23)]);
var inst_34307 = (state_34386[(24)]);
var inst_34299 = (state_34386[(19)]);
var inst_34303 = (state_34386[(25)]);
var inst_34310 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34312 = (function (){var all_files = inst_34299;
var res_SINGLEQUOTE_ = inst_34302;
var res = inst_34303;
var files_not_loaded = inst_34305;
var dependencies_that_loaded = inst_34307;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34305,inst_34302,inst_34307,inst_34299,inst_34303,inst_34310,state_val_34387,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34311){
var map__34442 = p__34311;
var map__34442__$1 = ((((!((map__34442 == null)))?((((map__34442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34442):map__34442);
var request_url = cljs.core.get.call(null,map__34442__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34305,inst_34302,inst_34307,inst_34299,inst_34303,inst_34310,state_val_34387,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34313 = cljs.core.reverse.call(null,inst_34307);
var inst_34314 = cljs.core.map.call(null,inst_34312,inst_34313);
var inst_34315 = cljs.core.pr_str.call(null,inst_34314);
var inst_34316 = figwheel.client.utils.log.call(null,inst_34315);
var state_34386__$1 = (function (){var statearr_34444 = state_34386;
(statearr_34444[(31)] = inst_34310);

return statearr_34444;
})();
var statearr_34445_34515 = state_34386__$1;
(statearr_34445_34515[(2)] = inst_34316);

(statearr_34445_34515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (35))){
var state_34386__$1 = state_34386;
var statearr_34446_34516 = state_34386__$1;
(statearr_34446_34516[(2)] = true);

(statearr_34446_34516[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (19))){
var inst_34289 = (state_34386[(12)]);
var inst_34295 = figwheel.client.file_reloading.expand_files.call(null,inst_34289);
var state_34386__$1 = state_34386;
var statearr_34447_34517 = state_34386__$1;
(statearr_34447_34517[(2)] = inst_34295);

(statearr_34447_34517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (11))){
var state_34386__$1 = state_34386;
var statearr_34448_34518 = state_34386__$1;
(statearr_34448_34518[(2)] = null);

(statearr_34448_34518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (9))){
var inst_34278 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34449_34519 = state_34386__$1;
(statearr_34449_34519[(2)] = inst_34278);

(statearr_34449_34519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (5))){
var inst_34248 = (state_34386[(7)]);
var inst_34249 = (state_34386[(8)]);
var inst_34251 = (inst_34249 < inst_34248);
var inst_34252 = inst_34251;
var state_34386__$1 = state_34386;
if(cljs.core.truth_(inst_34252)){
var statearr_34450_34520 = state_34386__$1;
(statearr_34450_34520[(1)] = (7));

} else {
var statearr_34451_34521 = state_34386__$1;
(statearr_34451_34521[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (14))){
var inst_34259 = (state_34386[(22)]);
var inst_34268 = cljs.core.first.call(null,inst_34259);
var inst_34269 = figwheel.client.file_reloading.eval_body.call(null,inst_34268,opts);
var inst_34270 = cljs.core.next.call(null,inst_34259);
var inst_34246 = inst_34270;
var inst_34247 = null;
var inst_34248 = (0);
var inst_34249 = (0);
var state_34386__$1 = (function (){var statearr_34452 = state_34386;
(statearr_34452[(32)] = inst_34269);

(statearr_34452[(7)] = inst_34248);

(statearr_34452[(8)] = inst_34249);

(statearr_34452[(9)] = inst_34247);

(statearr_34452[(10)] = inst_34246);

return statearr_34452;
})();
var statearr_34453_34522 = state_34386__$1;
(statearr_34453_34522[(2)] = null);

(statearr_34453_34522[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (45))){
var state_34386__$1 = state_34386;
var statearr_34454_34523 = state_34386__$1;
(statearr_34454_34523[(2)] = null);

(statearr_34454_34523[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (26))){
var inst_34305 = (state_34386[(26)]);
var inst_34302 = (state_34386[(23)]);
var inst_34307 = (state_34386[(24)]);
var inst_34299 = (state_34386[(19)]);
var inst_34303 = (state_34386[(25)]);
var inst_34322 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34324 = (function (){var all_files = inst_34299;
var res_SINGLEQUOTE_ = inst_34302;
var res = inst_34303;
var files_not_loaded = inst_34305;
var dependencies_that_loaded = inst_34307;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34305,inst_34302,inst_34307,inst_34299,inst_34303,inst_34322,state_val_34387,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34323){
var map__34455 = p__34323;
var map__34455__$1 = ((((!((map__34455 == null)))?((((map__34455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34455):map__34455);
var namespace = cljs.core.get.call(null,map__34455__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34455__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34305,inst_34302,inst_34307,inst_34299,inst_34303,inst_34322,state_val_34387,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34325 = cljs.core.map.call(null,inst_34324,inst_34303);
var inst_34326 = cljs.core.pr_str.call(null,inst_34325);
var inst_34327 = figwheel.client.utils.log.call(null,inst_34326);
var inst_34328 = (function (){var all_files = inst_34299;
var res_SINGLEQUOTE_ = inst_34302;
var res = inst_34303;
var files_not_loaded = inst_34305;
var dependencies_that_loaded = inst_34307;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34305,inst_34302,inst_34307,inst_34299,inst_34303,inst_34322,inst_34324,inst_34325,inst_34326,inst_34327,state_val_34387,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34305,inst_34302,inst_34307,inst_34299,inst_34303,inst_34322,inst_34324,inst_34325,inst_34326,inst_34327,state_val_34387,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34329 = setTimeout(inst_34328,(10));
var state_34386__$1 = (function (){var statearr_34457 = state_34386;
(statearr_34457[(33)] = inst_34327);

(statearr_34457[(34)] = inst_34322);

return statearr_34457;
})();
var statearr_34458_34524 = state_34386__$1;
(statearr_34458_34524[(2)] = inst_34329);

(statearr_34458_34524[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (16))){
var state_34386__$1 = state_34386;
var statearr_34459_34525 = state_34386__$1;
(statearr_34459_34525[(2)] = reload_dependents);

(statearr_34459_34525[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (38))){
var inst_34339 = (state_34386[(16)]);
var inst_34357 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34339);
var state_34386__$1 = state_34386;
var statearr_34460_34526 = state_34386__$1;
(statearr_34460_34526[(2)] = inst_34357);

(statearr_34460_34526[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (30))){
var state_34386__$1 = state_34386;
var statearr_34461_34527 = state_34386__$1;
(statearr_34461_34527[(2)] = null);

(statearr_34461_34527[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (10))){
var inst_34259 = (state_34386[(22)]);
var inst_34261 = cljs.core.chunked_seq_QMARK_.call(null,inst_34259);
var state_34386__$1 = state_34386;
if(inst_34261){
var statearr_34462_34528 = state_34386__$1;
(statearr_34462_34528[(1)] = (13));

} else {
var statearr_34463_34529 = state_34386__$1;
(statearr_34463_34529[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (18))){
var inst_34293 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
if(cljs.core.truth_(inst_34293)){
var statearr_34464_34530 = state_34386__$1;
(statearr_34464_34530[(1)] = (19));

} else {
var statearr_34465_34531 = state_34386__$1;
(statearr_34465_34531[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (42))){
var state_34386__$1 = state_34386;
var statearr_34466_34532 = state_34386__$1;
(statearr_34466_34532[(2)] = null);

(statearr_34466_34532[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (37))){
var inst_34352 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34467_34533 = state_34386__$1;
(statearr_34467_34533[(2)] = inst_34352);

(statearr_34467_34533[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (8))){
var inst_34259 = (state_34386[(22)]);
var inst_34246 = (state_34386[(10)]);
var inst_34259__$1 = cljs.core.seq.call(null,inst_34246);
var state_34386__$1 = (function (){var statearr_34468 = state_34386;
(statearr_34468[(22)] = inst_34259__$1);

return statearr_34468;
})();
if(inst_34259__$1){
var statearr_34469_34534 = state_34386__$1;
(statearr_34469_34534[(1)] = (10));

} else {
var statearr_34470_34535 = state_34386__$1;
(statearr_34470_34535[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30460__auto__,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30461__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30461__auto____0 = (function (){
var statearr_34474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34474[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30461__auto__);

(statearr_34474[(1)] = (1));

return statearr_34474;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30461__auto____1 = (function (state_34386){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_34386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e34475){if((e34475 instanceof Object)){
var ex__30464__auto__ = e34475;
var statearr_34476_34536 = state_34386;
(statearr_34476_34536[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34537 = state_34386;
state_34386 = G__34537;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30461__auto__ = function(state_34386){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30461__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30461__auto____1.call(this,state_34386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30461__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30461__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30576__auto__ = (function (){var statearr_34477 = f__30575__auto__.call(null);
(statearr_34477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto__);

return statearr_34477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto__,map__34231,map__34231__$1,opts,before_jsload,on_jsload,reload_dependents,map__34232,map__34232__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30574__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34540,link){
var map__34543 = p__34540;
var map__34543__$1 = ((((!((map__34543 == null)))?((((map__34543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34543):map__34543);
var file = cljs.core.get.call(null,map__34543__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__34543,map__34543__$1,file){
return (function (p1__34538_SHARP_,p2__34539_SHARP_){
if(cljs.core._EQ_.call(null,p1__34538_SHARP_,p2__34539_SHARP_)){
return p1__34538_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__34543,map__34543__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34549){
var map__34550 = p__34549;
var map__34550__$1 = ((((!((map__34550 == null)))?((((map__34550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34550):map__34550);
var match_length = cljs.core.get.call(null,map__34550__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34550__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34545_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34545_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6753__auto__)){
var res = temp__6753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args34552 = [];
var len__28223__auto___34555 = arguments.length;
var i__28224__auto___34556 = (0);
while(true){
if((i__28224__auto___34556 < len__28223__auto___34555)){
args34552.push((arguments[i__28224__auto___34556]));

var G__34557 = (i__28224__auto___34556 + (1));
i__28224__auto___34556 = G__34557;
continue;
} else {
}
break;
}

var G__34554 = args34552.length;
switch (G__34554) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34552.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34559_SHARP_,p2__34560_SHARP_){
return cljs.core.assoc.call(null,p1__34559_SHARP_,cljs.core.get.call(null,p2__34560_SHARP_,key),p2__34560_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34561){
var map__34564 = p__34561;
var map__34564__$1 = ((((!((map__34564 == null)))?((((map__34564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34564):map__34564);
var f_data = map__34564__$1;
var file = cljs.core.get.call(null,map__34564__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6753__auto__)){
var link = temp__6753__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34566,p__34567){
var map__34576 = p__34566;
var map__34576__$1 = ((((!((map__34576 == null)))?((((map__34576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34576):map__34576);
var opts = map__34576__$1;
var on_cssload = cljs.core.get.call(null,map__34576__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34577 = p__34567;
var map__34577__$1 = ((((!((map__34577 == null)))?((((map__34577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34577.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34577):map__34577);
var files_msg = map__34577__$1;
var files = cljs.core.get.call(null,map__34577__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34580_34584 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__34581_34585 = null;
var count__34582_34586 = (0);
var i__34583_34587 = (0);
while(true){
if((i__34583_34587 < count__34582_34586)){
var f_34588 = cljs.core._nth.call(null,chunk__34581_34585,i__34583_34587);
figwheel.client.file_reloading.reload_css_file.call(null,f_34588);

var G__34589 = seq__34580_34584;
var G__34590 = chunk__34581_34585;
var G__34591 = count__34582_34586;
var G__34592 = (i__34583_34587 + (1));
seq__34580_34584 = G__34589;
chunk__34581_34585 = G__34590;
count__34582_34586 = G__34591;
i__34583_34587 = G__34592;
continue;
} else {
var temp__6753__auto___34593 = cljs.core.seq.call(null,seq__34580_34584);
if(temp__6753__auto___34593){
var seq__34580_34594__$1 = temp__6753__auto___34593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34580_34594__$1)){
var c__27913__auto___34595 = cljs.core.chunk_first.call(null,seq__34580_34594__$1);
var G__34596 = cljs.core.chunk_rest.call(null,seq__34580_34594__$1);
var G__34597 = c__27913__auto___34595;
var G__34598 = cljs.core.count.call(null,c__27913__auto___34595);
var G__34599 = (0);
seq__34580_34584 = G__34596;
chunk__34581_34585 = G__34597;
count__34582_34586 = G__34598;
i__34583_34587 = G__34599;
continue;
} else {
var f_34600 = cljs.core.first.call(null,seq__34580_34594__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34600);

var G__34601 = cljs.core.next.call(null,seq__34580_34594__$1);
var G__34602 = null;
var G__34603 = (0);
var G__34604 = (0);
seq__34580_34584 = G__34601;
chunk__34581_34585 = G__34602;
count__34582_34586 = G__34603;
i__34583_34587 = G__34604;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__34576,map__34576__$1,opts,on_cssload,map__34577,map__34577__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__34576,map__34576__$1,opts,on_cssload,map__34577,map__34577__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1491913252346
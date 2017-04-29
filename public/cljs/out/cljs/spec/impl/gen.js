// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__27659__auto__,writer__27660__auto__,opt__27661__auto__){
return cljs.core._write.call(null,writer__27660__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34660 = arguments.length;
var i__28224__auto___34661 = (0);
while(true){
if((i__28224__auto___34661 < len__28223__auto___34660)){
args__28230__auto__.push((arguments[i__28224__auto___34661]));

var G__34662 = (i__28224__auto___34661 + (1));
i__28224__auto___34661 = G__34662;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq34659){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34659));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34664 = arguments.length;
var i__28224__auto___34665 = (0);
while(true){
if((i__28224__auto___34665 < len__28223__auto___34664)){
args__28230__auto__.push((arguments[i__28224__auto___34665]));

var G__34666 = (i__28224__auto___34665 + (1));
i__28224__auto___34665 = G__34666;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq34663){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34663));
});

var g_QMARK__34667 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_34668 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34667){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__34667))
,null));
var mkg_34669 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34667,g_34668){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__34667,g_34668))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__34667,g_34668,mkg_34669){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__34667).call(null,x);
});})(g_QMARK__34667,g_34668,mkg_34669))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__34667,g_34668,mkg_34669){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_34669).call(null,gfn);
});})(g_QMARK__34667,g_34668,mkg_34669))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__34667,g_34668,mkg_34669){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_34668).call(null,generator);
});})(g_QMARK__34667,g_34668,mkg_34669))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__34631__auto___34689 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__34631__auto___34689){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34690 = arguments.length;
var i__28224__auto___34691 = (0);
while(true){
if((i__28224__auto___34691 < len__28223__auto___34690)){
args__28230__auto__.push((arguments[i__28224__auto___34691]));

var G__34692 = (i__28224__auto___34691 + (1));
i__28224__auto___34691 = G__34692;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34689))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34689){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34689),args);
});})(g__34631__auto___34689))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__34631__auto___34689){
return (function (seq34670){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34670));
});})(g__34631__auto___34689))
;


var g__34631__auto___34693 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__34631__auto___34693){
return (function cljs$spec$impl$gen$list(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34694 = arguments.length;
var i__28224__auto___34695 = (0);
while(true){
if((i__28224__auto___34695 < len__28223__auto___34694)){
args__28230__auto__.push((arguments[i__28224__auto___34695]));

var G__34696 = (i__28224__auto___34695 + (1));
i__28224__auto___34695 = G__34696;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34693))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34693){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34693),args);
});})(g__34631__auto___34693))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__34631__auto___34693){
return (function (seq34671){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34671));
});})(g__34631__auto___34693))
;


var g__34631__auto___34697 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__34631__auto___34697){
return (function cljs$spec$impl$gen$map(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34698 = arguments.length;
var i__28224__auto___34699 = (0);
while(true){
if((i__28224__auto___34699 < len__28223__auto___34698)){
args__28230__auto__.push((arguments[i__28224__auto___34699]));

var G__34700 = (i__28224__auto___34699 + (1));
i__28224__auto___34699 = G__34700;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34697))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34697){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34697),args);
});})(g__34631__auto___34697))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__34631__auto___34697){
return (function (seq34672){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34672));
});})(g__34631__auto___34697))
;


var g__34631__auto___34701 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__34631__auto___34701){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34702 = arguments.length;
var i__28224__auto___34703 = (0);
while(true){
if((i__28224__auto___34703 < len__28223__auto___34702)){
args__28230__auto__.push((arguments[i__28224__auto___34703]));

var G__34704 = (i__28224__auto___34703 + (1));
i__28224__auto___34703 = G__34704;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34701))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34701){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34701),args);
});})(g__34631__auto___34701))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__34631__auto___34701){
return (function (seq34673){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34673));
});})(g__34631__auto___34701))
;


var g__34631__auto___34705 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__34631__auto___34705){
return (function cljs$spec$impl$gen$set(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34706 = arguments.length;
var i__28224__auto___34707 = (0);
while(true){
if((i__28224__auto___34707 < len__28223__auto___34706)){
args__28230__auto__.push((arguments[i__28224__auto___34707]));

var G__34708 = (i__28224__auto___34707 + (1));
i__28224__auto___34707 = G__34708;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34705))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34705){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34705),args);
});})(g__34631__auto___34705))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__34631__auto___34705){
return (function (seq34674){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34674));
});})(g__34631__auto___34705))
;


var g__34631__auto___34709 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__34631__auto___34709){
return (function cljs$spec$impl$gen$vector(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34710 = arguments.length;
var i__28224__auto___34711 = (0);
while(true){
if((i__28224__auto___34711 < len__28223__auto___34710)){
args__28230__auto__.push((arguments[i__28224__auto___34711]));

var G__34712 = (i__28224__auto___34711 + (1));
i__28224__auto___34711 = G__34712;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34709))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34709){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34709),args);
});})(g__34631__auto___34709))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__34631__auto___34709){
return (function (seq34675){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34675));
});})(g__34631__auto___34709))
;


var g__34631__auto___34713 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__34631__auto___34713){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34714 = arguments.length;
var i__28224__auto___34715 = (0);
while(true){
if((i__28224__auto___34715 < len__28223__auto___34714)){
args__28230__auto__.push((arguments[i__28224__auto___34715]));

var G__34716 = (i__28224__auto___34715 + (1));
i__28224__auto___34715 = G__34716;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34713))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34713){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34713),args);
});})(g__34631__auto___34713))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__34631__auto___34713){
return (function (seq34676){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34676));
});})(g__34631__auto___34713))
;


var g__34631__auto___34717 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__34631__auto___34717){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34718 = arguments.length;
var i__28224__auto___34719 = (0);
while(true){
if((i__28224__auto___34719 < len__28223__auto___34718)){
args__28230__auto__.push((arguments[i__28224__auto___34719]));

var G__34720 = (i__28224__auto___34719 + (1));
i__28224__auto___34719 = G__34720;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34717))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34717){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34717),args);
});})(g__34631__auto___34717))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__34631__auto___34717){
return (function (seq34677){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34677));
});})(g__34631__auto___34717))
;


var g__34631__auto___34721 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__34631__auto___34721){
return (function cljs$spec$impl$gen$elements(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34722 = arguments.length;
var i__28224__auto___34723 = (0);
while(true){
if((i__28224__auto___34723 < len__28223__auto___34722)){
args__28230__auto__.push((arguments[i__28224__auto___34723]));

var G__34724 = (i__28224__auto___34723 + (1));
i__28224__auto___34723 = G__34724;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34721))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34721){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34721),args);
});})(g__34631__auto___34721))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__34631__auto___34721){
return (function (seq34678){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34678));
});})(g__34631__auto___34721))
;


var g__34631__auto___34725 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__34631__auto___34725){
return (function cljs$spec$impl$gen$bind(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34726 = arguments.length;
var i__28224__auto___34727 = (0);
while(true){
if((i__28224__auto___34727 < len__28223__auto___34726)){
args__28230__auto__.push((arguments[i__28224__auto___34727]));

var G__34728 = (i__28224__auto___34727 + (1));
i__28224__auto___34727 = G__34728;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34725))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34725){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34725),args);
});})(g__34631__auto___34725))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__34631__auto___34725){
return (function (seq34679){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34679));
});})(g__34631__auto___34725))
;


var g__34631__auto___34729 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__34631__auto___34729){
return (function cljs$spec$impl$gen$choose(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34730 = arguments.length;
var i__28224__auto___34731 = (0);
while(true){
if((i__28224__auto___34731 < len__28223__auto___34730)){
args__28230__auto__.push((arguments[i__28224__auto___34731]));

var G__34732 = (i__28224__auto___34731 + (1));
i__28224__auto___34731 = G__34732;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34729))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34729){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34729),args);
});})(g__34631__auto___34729))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__34631__auto___34729){
return (function (seq34680){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34680));
});})(g__34631__auto___34729))
;


var g__34631__auto___34733 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__34631__auto___34733){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34734 = arguments.length;
var i__28224__auto___34735 = (0);
while(true){
if((i__28224__auto___34735 < len__28223__auto___34734)){
args__28230__auto__.push((arguments[i__28224__auto___34735]));

var G__34736 = (i__28224__auto___34735 + (1));
i__28224__auto___34735 = G__34736;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34733))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34733){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34733),args);
});})(g__34631__auto___34733))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__34631__auto___34733){
return (function (seq34681){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34681));
});})(g__34631__auto___34733))
;


var g__34631__auto___34737 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__34631__auto___34737){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34738 = arguments.length;
var i__28224__auto___34739 = (0);
while(true){
if((i__28224__auto___34739 < len__28223__auto___34738)){
args__28230__auto__.push((arguments[i__28224__auto___34739]));

var G__34740 = (i__28224__auto___34739 + (1));
i__28224__auto___34739 = G__34740;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34737))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34737){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34737),args);
});})(g__34631__auto___34737))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__34631__auto___34737){
return (function (seq34682){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34682));
});})(g__34631__auto___34737))
;


var g__34631__auto___34741 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__34631__auto___34741){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34742 = arguments.length;
var i__28224__auto___34743 = (0);
while(true){
if((i__28224__auto___34743 < len__28223__auto___34742)){
args__28230__auto__.push((arguments[i__28224__auto___34743]));

var G__34744 = (i__28224__auto___34743 + (1));
i__28224__auto___34743 = G__34744;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34741))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34741){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34741),args);
});})(g__34631__auto___34741))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__34631__auto___34741){
return (function (seq34683){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34683));
});})(g__34631__auto___34741))
;


var g__34631__auto___34745 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__34631__auto___34745){
return (function cljs$spec$impl$gen$sample(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34746 = arguments.length;
var i__28224__auto___34747 = (0);
while(true){
if((i__28224__auto___34747 < len__28223__auto___34746)){
args__28230__auto__.push((arguments[i__28224__auto___34747]));

var G__34748 = (i__28224__auto___34747 + (1));
i__28224__auto___34747 = G__34748;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34745))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34745){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34745),args);
});})(g__34631__auto___34745))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__34631__auto___34745){
return (function (seq34684){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34684));
});})(g__34631__auto___34745))
;


var g__34631__auto___34749 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__34631__auto___34749){
return (function cljs$spec$impl$gen$return(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34750 = arguments.length;
var i__28224__auto___34751 = (0);
while(true){
if((i__28224__auto___34751 < len__28223__auto___34750)){
args__28230__auto__.push((arguments[i__28224__auto___34751]));

var G__34752 = (i__28224__auto___34751 + (1));
i__28224__auto___34751 = G__34752;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34749))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34749){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34749),args);
});})(g__34631__auto___34749))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__34631__auto___34749){
return (function (seq34685){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34685));
});})(g__34631__auto___34749))
;


var g__34631__auto___34753 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__34631__auto___34753){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34754 = arguments.length;
var i__28224__auto___34755 = (0);
while(true){
if((i__28224__auto___34755 < len__28223__auto___34754)){
args__28230__auto__.push((arguments[i__28224__auto___34755]));

var G__34756 = (i__28224__auto___34755 + (1));
i__28224__auto___34755 = G__34756;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34753))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34753){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34753),args);
});})(g__34631__auto___34753))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__34631__auto___34753){
return (function (seq34686){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34686));
});})(g__34631__auto___34753))
;


var g__34631__auto___34757 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__34631__auto___34757){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34758 = arguments.length;
var i__28224__auto___34759 = (0);
while(true){
if((i__28224__auto___34759 < len__28223__auto___34758)){
args__28230__auto__.push((arguments[i__28224__auto___34759]));

var G__34760 = (i__28224__auto___34759 + (1));
i__28224__auto___34759 = G__34760;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34757))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34757){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34757),args);
});})(g__34631__auto___34757))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__34631__auto___34757){
return (function (seq34687){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34687));
});})(g__34631__auto___34757))
;


var g__34631__auto___34761 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__34631__auto___34761){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34762 = arguments.length;
var i__28224__auto___34763 = (0);
while(true){
if((i__28224__auto___34763 < len__28223__auto___34762)){
args__28230__auto__.push((arguments[i__28224__auto___34763]));

var G__34764 = (i__28224__auto___34763 + (1));
i__28224__auto___34763 = G__34764;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34631__auto___34761))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34631__auto___34761){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34631__auto___34761),args);
});})(g__34631__auto___34761))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__34631__auto___34761){
return (function (seq34688){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34688));
});})(g__34631__auto___34761))
;

var g__34644__auto___34786 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__34644__auto___34786){
return (function cljs$spec$impl$gen$any(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34787 = arguments.length;
var i__28224__auto___34788 = (0);
while(true){
if((i__28224__auto___34788 < len__28223__auto___34787)){
args__28230__auto__.push((arguments[i__28224__auto___34788]));

var G__34789 = (i__28224__auto___34788 + (1));
i__28224__auto___34788 = G__34789;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34786))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34786){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34786);
});})(g__34644__auto___34786))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__34644__auto___34786){
return (function (seq34765){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34765));
});})(g__34644__auto___34786))
;


var g__34644__auto___34790 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__34644__auto___34790){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34791 = arguments.length;
var i__28224__auto___34792 = (0);
while(true){
if((i__28224__auto___34792 < len__28223__auto___34791)){
args__28230__auto__.push((arguments[i__28224__auto___34792]));

var G__34793 = (i__28224__auto___34792 + (1));
i__28224__auto___34792 = G__34793;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34790))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34790){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34790);
});})(g__34644__auto___34790))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__34644__auto___34790){
return (function (seq34766){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34766));
});})(g__34644__auto___34790))
;


var g__34644__auto___34794 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__34644__auto___34794){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34795 = arguments.length;
var i__28224__auto___34796 = (0);
while(true){
if((i__28224__auto___34796 < len__28223__auto___34795)){
args__28230__auto__.push((arguments[i__28224__auto___34796]));

var G__34797 = (i__28224__auto___34796 + (1));
i__28224__auto___34796 = G__34797;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34794))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34794){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34794);
});})(g__34644__auto___34794))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__34644__auto___34794){
return (function (seq34767){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34767));
});})(g__34644__auto___34794))
;


var g__34644__auto___34798 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__34644__auto___34798){
return (function cljs$spec$impl$gen$char(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34799 = arguments.length;
var i__28224__auto___34800 = (0);
while(true){
if((i__28224__auto___34800 < len__28223__auto___34799)){
args__28230__auto__.push((arguments[i__28224__auto___34800]));

var G__34801 = (i__28224__auto___34800 + (1));
i__28224__auto___34800 = G__34801;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34798))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34798){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34798);
});})(g__34644__auto___34798))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__34644__auto___34798){
return (function (seq34768){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34768));
});})(g__34644__auto___34798))
;


var g__34644__auto___34802 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__34644__auto___34802){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34803 = arguments.length;
var i__28224__auto___34804 = (0);
while(true){
if((i__28224__auto___34804 < len__28223__auto___34803)){
args__28230__auto__.push((arguments[i__28224__auto___34804]));

var G__34805 = (i__28224__auto___34804 + (1));
i__28224__auto___34804 = G__34805;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34802))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34802){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34802);
});})(g__34644__auto___34802))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__34644__auto___34802){
return (function (seq34769){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34769));
});})(g__34644__auto___34802))
;


var g__34644__auto___34806 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__34644__auto___34806){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34807 = arguments.length;
var i__28224__auto___34808 = (0);
while(true){
if((i__28224__auto___34808 < len__28223__auto___34807)){
args__28230__auto__.push((arguments[i__28224__auto___34808]));

var G__34809 = (i__28224__auto___34808 + (1));
i__28224__auto___34808 = G__34809;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34806))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34806){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34806);
});})(g__34644__auto___34806))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__34644__auto___34806){
return (function (seq34770){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34770));
});})(g__34644__auto___34806))
;


var g__34644__auto___34810 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__34644__auto___34810){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34811 = arguments.length;
var i__28224__auto___34812 = (0);
while(true){
if((i__28224__auto___34812 < len__28223__auto___34811)){
args__28230__auto__.push((arguments[i__28224__auto___34812]));

var G__34813 = (i__28224__auto___34812 + (1));
i__28224__auto___34812 = G__34813;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34810))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34810){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34810);
});})(g__34644__auto___34810))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__34644__auto___34810){
return (function (seq34771){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34771));
});})(g__34644__auto___34810))
;


var g__34644__auto___34814 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__34644__auto___34814){
return (function cljs$spec$impl$gen$double(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34815 = arguments.length;
var i__28224__auto___34816 = (0);
while(true){
if((i__28224__auto___34816 < len__28223__auto___34815)){
args__28230__auto__.push((arguments[i__28224__auto___34816]));

var G__34817 = (i__28224__auto___34816 + (1));
i__28224__auto___34816 = G__34817;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34814))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34814){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34814);
});})(g__34644__auto___34814))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__34644__auto___34814){
return (function (seq34772){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34772));
});})(g__34644__auto___34814))
;


var g__34644__auto___34818 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__34644__auto___34818){
return (function cljs$spec$impl$gen$int(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34819 = arguments.length;
var i__28224__auto___34820 = (0);
while(true){
if((i__28224__auto___34820 < len__28223__auto___34819)){
args__28230__auto__.push((arguments[i__28224__auto___34820]));

var G__34821 = (i__28224__auto___34820 + (1));
i__28224__auto___34820 = G__34821;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34818))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34818){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34818);
});})(g__34644__auto___34818))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__34644__auto___34818){
return (function (seq34773){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34773));
});})(g__34644__auto___34818))
;


var g__34644__auto___34822 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__34644__auto___34822){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34823 = arguments.length;
var i__28224__auto___34824 = (0);
while(true){
if((i__28224__auto___34824 < len__28223__auto___34823)){
args__28230__auto__.push((arguments[i__28224__auto___34824]));

var G__34825 = (i__28224__auto___34824 + (1));
i__28224__auto___34824 = G__34825;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34822))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34822){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34822);
});})(g__34644__auto___34822))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__34644__auto___34822){
return (function (seq34774){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34774));
});})(g__34644__auto___34822))
;


var g__34644__auto___34826 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__34644__auto___34826){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34827 = arguments.length;
var i__28224__auto___34828 = (0);
while(true){
if((i__28224__auto___34828 < len__28223__auto___34827)){
args__28230__auto__.push((arguments[i__28224__auto___34828]));

var G__34829 = (i__28224__auto___34828 + (1));
i__28224__auto___34828 = G__34829;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34826))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34826){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34826);
});})(g__34644__auto___34826))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__34644__auto___34826){
return (function (seq34775){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34775));
});})(g__34644__auto___34826))
;


var g__34644__auto___34830 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__34644__auto___34830){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34831 = arguments.length;
var i__28224__auto___34832 = (0);
while(true){
if((i__28224__auto___34832 < len__28223__auto___34831)){
args__28230__auto__.push((arguments[i__28224__auto___34832]));

var G__34833 = (i__28224__auto___34832 + (1));
i__28224__auto___34832 = G__34833;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34830))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34830){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34830);
});})(g__34644__auto___34830))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__34644__auto___34830){
return (function (seq34776){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34776));
});})(g__34644__auto___34830))
;


var g__34644__auto___34834 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__34644__auto___34834){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34835 = arguments.length;
var i__28224__auto___34836 = (0);
while(true){
if((i__28224__auto___34836 < len__28223__auto___34835)){
args__28230__auto__.push((arguments[i__28224__auto___34836]));

var G__34837 = (i__28224__auto___34836 + (1));
i__28224__auto___34836 = G__34837;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34834))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34834){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34834);
});})(g__34644__auto___34834))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__34644__auto___34834){
return (function (seq34777){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34777));
});})(g__34644__auto___34834))
;


var g__34644__auto___34838 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__34644__auto___34838){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34839 = arguments.length;
var i__28224__auto___34840 = (0);
while(true){
if((i__28224__auto___34840 < len__28223__auto___34839)){
args__28230__auto__.push((arguments[i__28224__auto___34840]));

var G__34841 = (i__28224__auto___34840 + (1));
i__28224__auto___34840 = G__34841;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34838))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34838){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34838);
});})(g__34644__auto___34838))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__34644__auto___34838){
return (function (seq34778){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34778));
});})(g__34644__auto___34838))
;


var g__34644__auto___34842 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__34644__auto___34842){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34843 = arguments.length;
var i__28224__auto___34844 = (0);
while(true){
if((i__28224__auto___34844 < len__28223__auto___34843)){
args__28230__auto__.push((arguments[i__28224__auto___34844]));

var G__34845 = (i__28224__auto___34844 + (1));
i__28224__auto___34844 = G__34845;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34842))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34842){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34842);
});})(g__34644__auto___34842))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__34644__auto___34842){
return (function (seq34779){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34779));
});})(g__34644__auto___34842))
;


var g__34644__auto___34846 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__34644__auto___34846){
return (function cljs$spec$impl$gen$string(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34847 = arguments.length;
var i__28224__auto___34848 = (0);
while(true){
if((i__28224__auto___34848 < len__28223__auto___34847)){
args__28230__auto__.push((arguments[i__28224__auto___34848]));

var G__34849 = (i__28224__auto___34848 + (1));
i__28224__auto___34848 = G__34849;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34846))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34846){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34846);
});})(g__34644__auto___34846))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__34644__auto___34846){
return (function (seq34780){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34780));
});})(g__34644__auto___34846))
;


var g__34644__auto___34850 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__34644__auto___34850){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34851 = arguments.length;
var i__28224__auto___34852 = (0);
while(true){
if((i__28224__auto___34852 < len__28223__auto___34851)){
args__28230__auto__.push((arguments[i__28224__auto___34852]));

var G__34853 = (i__28224__auto___34852 + (1));
i__28224__auto___34852 = G__34853;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34850))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34850){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34850);
});})(g__34644__auto___34850))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__34644__auto___34850){
return (function (seq34781){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34781));
});})(g__34644__auto___34850))
;


var g__34644__auto___34854 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__34644__auto___34854){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34855 = arguments.length;
var i__28224__auto___34856 = (0);
while(true){
if((i__28224__auto___34856 < len__28223__auto___34855)){
args__28230__auto__.push((arguments[i__28224__auto___34856]));

var G__34857 = (i__28224__auto___34856 + (1));
i__28224__auto___34856 = G__34857;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34854))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34854){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34854);
});})(g__34644__auto___34854))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__34644__auto___34854){
return (function (seq34782){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34782));
});})(g__34644__auto___34854))
;


var g__34644__auto___34858 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__34644__auto___34858){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34859 = arguments.length;
var i__28224__auto___34860 = (0);
while(true){
if((i__28224__auto___34860 < len__28223__auto___34859)){
args__28230__auto__.push((arguments[i__28224__auto___34860]));

var G__34861 = (i__28224__auto___34860 + (1));
i__28224__auto___34860 = G__34861;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34858))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34858){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34858);
});})(g__34644__auto___34858))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__34644__auto___34858){
return (function (seq34783){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34783));
});})(g__34644__auto___34858))
;


var g__34644__auto___34862 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__34644__auto___34862){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34863 = arguments.length;
var i__28224__auto___34864 = (0);
while(true){
if((i__28224__auto___34864 < len__28223__auto___34863)){
args__28230__auto__.push((arguments[i__28224__auto___34864]));

var G__34865 = (i__28224__auto___34864 + (1));
i__28224__auto___34864 = G__34865;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34862))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34862){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34862);
});})(g__34644__auto___34862))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__34644__auto___34862){
return (function (seq34784){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34784));
});})(g__34644__auto___34862))
;


var g__34644__auto___34866 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__34644__auto___34866){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34867 = arguments.length;
var i__28224__auto___34868 = (0);
while(true){
if((i__28224__auto___34868 < len__28223__auto___34867)){
args__28230__auto__.push((arguments[i__28224__auto___34868]));

var G__34869 = (i__28224__auto___34868 + (1));
i__28224__auto___34868 = G__34869;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});})(g__34644__auto___34866))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34644__auto___34866){
return (function (args){
return cljs.core.deref.call(null,g__34644__auto___34866);
});})(g__34644__auto___34866))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__34644__auto___34866){
return (function (seq34785){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34785));
});})(g__34644__auto___34866))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__28230__auto__ = [];
var len__28223__auto___34872 = arguments.length;
var i__28224__auto___34873 = (0);
while(true){
if((i__28224__auto___34873 < len__28223__auto___34872)){
args__28230__auto__.push((arguments[i__28224__auto___34873]));

var G__34874 = (i__28224__auto___34873 + (1));
i__28224__auto___34873 = G__34874;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__34870_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__34870_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq34871){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34871));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__34875_SHARP_){
return (new Date(p1__34875_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1491913252738
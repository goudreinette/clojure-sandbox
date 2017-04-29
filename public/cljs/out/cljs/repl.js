// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36016){
var map__36041 = p__36016;
var map__36041__$1 = ((((!((map__36041 == null)))?((((map__36041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36041):map__36041);
var m = map__36041__$1;
var n = cljs.core.get.call(null,map__36041__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36041__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36043_36065 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36044_36066 = null;
var count__36045_36067 = (0);
var i__36046_36068 = (0);
while(true){
if((i__36046_36068 < count__36045_36067)){
var f_36069 = cljs.core._nth.call(null,chunk__36044_36066,i__36046_36068);
cljs.core.println.call(null,"  ",f_36069);

var G__36070 = seq__36043_36065;
var G__36071 = chunk__36044_36066;
var G__36072 = count__36045_36067;
var G__36073 = (i__36046_36068 + (1));
seq__36043_36065 = G__36070;
chunk__36044_36066 = G__36071;
count__36045_36067 = G__36072;
i__36046_36068 = G__36073;
continue;
} else {
var temp__6753__auto___36074 = cljs.core.seq.call(null,seq__36043_36065);
if(temp__6753__auto___36074){
var seq__36043_36075__$1 = temp__6753__auto___36074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36043_36075__$1)){
var c__27913__auto___36076 = cljs.core.chunk_first.call(null,seq__36043_36075__$1);
var G__36077 = cljs.core.chunk_rest.call(null,seq__36043_36075__$1);
var G__36078 = c__27913__auto___36076;
var G__36079 = cljs.core.count.call(null,c__27913__auto___36076);
var G__36080 = (0);
seq__36043_36065 = G__36077;
chunk__36044_36066 = G__36078;
count__36045_36067 = G__36079;
i__36046_36068 = G__36080;
continue;
} else {
var f_36081 = cljs.core.first.call(null,seq__36043_36075__$1);
cljs.core.println.call(null,"  ",f_36081);

var G__36082 = cljs.core.next.call(null,seq__36043_36075__$1);
var G__36083 = null;
var G__36084 = (0);
var G__36085 = (0);
seq__36043_36065 = G__36082;
chunk__36044_36066 = G__36083;
count__36045_36067 = G__36084;
i__36046_36068 = G__36085;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36086 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27002__auto__)){
return or__27002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36086);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36086)))?cljs.core.second.call(null,arglists_36086):arglists_36086));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36047_36087 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36048_36088 = null;
var count__36049_36089 = (0);
var i__36050_36090 = (0);
while(true){
if((i__36050_36090 < count__36049_36089)){
var vec__36051_36091 = cljs.core._nth.call(null,chunk__36048_36088,i__36050_36090);
var name_36092 = cljs.core.nth.call(null,vec__36051_36091,(0),null);
var map__36054_36093 = cljs.core.nth.call(null,vec__36051_36091,(1),null);
var map__36054_36094__$1 = ((((!((map__36054_36093 == null)))?((((map__36054_36093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36054_36093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36054_36093):map__36054_36093);
var doc_36095 = cljs.core.get.call(null,map__36054_36094__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36096 = cljs.core.get.call(null,map__36054_36094__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36092);

cljs.core.println.call(null," ",arglists_36096);

if(cljs.core.truth_(doc_36095)){
cljs.core.println.call(null," ",doc_36095);
} else {
}

var G__36097 = seq__36047_36087;
var G__36098 = chunk__36048_36088;
var G__36099 = count__36049_36089;
var G__36100 = (i__36050_36090 + (1));
seq__36047_36087 = G__36097;
chunk__36048_36088 = G__36098;
count__36049_36089 = G__36099;
i__36050_36090 = G__36100;
continue;
} else {
var temp__6753__auto___36101 = cljs.core.seq.call(null,seq__36047_36087);
if(temp__6753__auto___36101){
var seq__36047_36102__$1 = temp__6753__auto___36101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36047_36102__$1)){
var c__27913__auto___36103 = cljs.core.chunk_first.call(null,seq__36047_36102__$1);
var G__36104 = cljs.core.chunk_rest.call(null,seq__36047_36102__$1);
var G__36105 = c__27913__auto___36103;
var G__36106 = cljs.core.count.call(null,c__27913__auto___36103);
var G__36107 = (0);
seq__36047_36087 = G__36104;
chunk__36048_36088 = G__36105;
count__36049_36089 = G__36106;
i__36050_36090 = G__36107;
continue;
} else {
var vec__36056_36108 = cljs.core.first.call(null,seq__36047_36102__$1);
var name_36109 = cljs.core.nth.call(null,vec__36056_36108,(0),null);
var map__36059_36110 = cljs.core.nth.call(null,vec__36056_36108,(1),null);
var map__36059_36111__$1 = ((((!((map__36059_36110 == null)))?((((map__36059_36110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36059_36110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36059_36110):map__36059_36110);
var doc_36112 = cljs.core.get.call(null,map__36059_36111__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36113 = cljs.core.get.call(null,map__36059_36111__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36109);

cljs.core.println.call(null," ",arglists_36113);

if(cljs.core.truth_(doc_36112)){
cljs.core.println.call(null," ",doc_36112);
} else {
}

var G__36114 = cljs.core.next.call(null,seq__36047_36102__$1);
var G__36115 = null;
var G__36116 = (0);
var G__36117 = (0);
seq__36047_36087 = G__36114;
chunk__36048_36088 = G__36115;
count__36049_36089 = G__36116;
i__36050_36090 = G__36117;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__36061 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36062 = null;
var count__36063 = (0);
var i__36064 = (0);
while(true){
if((i__36064 < count__36063)){
var role = cljs.core._nth.call(null,chunk__36062,i__36064);
var temp__6753__auto___36118__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___36118__$1)){
var spec_36119 = temp__6753__auto___36118__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_36119));
} else {
}

var G__36120 = seq__36061;
var G__36121 = chunk__36062;
var G__36122 = count__36063;
var G__36123 = (i__36064 + (1));
seq__36061 = G__36120;
chunk__36062 = G__36121;
count__36063 = G__36122;
i__36064 = G__36123;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__36061);
if(temp__6753__auto____$1){
var seq__36061__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36061__$1)){
var c__27913__auto__ = cljs.core.chunk_first.call(null,seq__36061__$1);
var G__36124 = cljs.core.chunk_rest.call(null,seq__36061__$1);
var G__36125 = c__27913__auto__;
var G__36126 = cljs.core.count.call(null,c__27913__auto__);
var G__36127 = (0);
seq__36061 = G__36124;
chunk__36062 = G__36125;
count__36063 = G__36126;
i__36064 = G__36127;
continue;
} else {
var role = cljs.core.first.call(null,seq__36061__$1);
var temp__6753__auto___36128__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___36128__$2)){
var spec_36129 = temp__6753__auto___36128__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_36129));
} else {
}

var G__36130 = cljs.core.next.call(null,seq__36061__$1);
var G__36131 = null;
var G__36132 = (0);
var G__36133 = (0);
seq__36061 = G__36130;
chunk__36062 = G__36131;
count__36063 = G__36132;
i__36064 = G__36133;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1491913254782
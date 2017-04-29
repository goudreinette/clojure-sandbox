// Compiled by ClojureScript 1.9.494 {}
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cognitect.transit');

/**
 * @interface
 */
chord.format.ChordFormatter = function(){};

chord.format.freeze = (function chord$format$freeze(_,obj){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$freeze$arity$2 == null)))){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
var x__27817__auto__ = (((_ == null))?null:_);
var m__27818__auto__ = (chord.format.freeze[goog.typeOf(x__27817__auto__)]);
if(!((m__27818__auto__ == null))){
return m__27818__auto__.call(null,_,obj);
} else {
var m__27818__auto____$1 = (chord.format.freeze["_"]);
if(!((m__27818__auto____$1 == null))){
return m__27818__auto____$1.call(null,_,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.freeze",_);
}
}
}
});

chord.format.thaw = (function chord$format$thaw(_,s){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$thaw$arity$2 == null)))){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
var x__27817__auto__ = (((_ == null))?null:_);
var m__27818__auto__ = (chord.format.thaw[goog.typeOf(x__27817__auto__)]);
if(!((m__27818__auto__ == null))){
return m__27818__auto__.call(null,_,s);
} else {
var m__27818__auto____$1 = (chord.format.thaw["_"]);
if(!((m__27818__auto____$1 == null))){
return m__27818__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.thaw",_);
}
}
}
});

if(typeof chord.format.formatter_STAR_ !== 'undefined'){
} else {
chord.format.formatter_STAR_ = (function (){var method_table__28130__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28131__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28132__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28133__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28134__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28134__auto__,method_table__28130__auto__,prefer_table__28131__auto__,method_cache__28132__auto__,cached_hierarchy__28133__auto__));
})();
}
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if(typeof chord.format.t_chord$format33515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format33515 = (function (_,meta33516){
this._ = _;
this.meta33516 = meta33516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format33515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33517,meta33516__$1){
var self__ = this;
var _33517__$1 = this;
return (new chord.format.t_chord$format33515(self__._,meta33516__$1));
});

chord.format.t_chord$format33515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33517){
var self__ = this;
var _33517__$1 = this;
return self__.meta33516;
});

chord.format.t_chord$format33515.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format33515.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.call(null,obj);
});

chord.format.t_chord$format33515.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.call(null,s);
});

chord.format.t_chord$format33515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta33516","meta33516",-330598716,null)], null);
});

chord.format.t_chord$format33515.cljs$lang$type = true;

chord.format.t_chord$format33515.cljs$lang$ctorStr = "chord.format/t_chord$format33515";

chord.format.t_chord$format33515.cljs$lang$ctorPrWriter = (function (this__27756__auto__,writer__27757__auto__,opt__27758__auto__){
return cljs.core._write.call(null,writer__27757__auto__,"chord.format/t_chord$format33515");
});

chord.format.__GT_t_chord$format33515 = (function chord$format$__GT_t_chord$format33515(___$1,meta33516){
return (new chord.format.t_chord$format33515(___$1,meta33516));
});

}

return (new chord.format.t_chord$format33515(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if(typeof chord.format.t_chord$format33518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format33518 = (function (_,meta33519){
this._ = _;
this.meta33519 = meta33519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format33518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33520,meta33519__$1){
var self__ = this;
var _33520__$1 = this;
return (new chord.format.t_chord$format33518(self__._,meta33519__$1));
});

chord.format.t_chord$format33518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33520){
var self__ = this;
var _33520__$1 = this;
return self__.meta33519;
});

chord.format.t_chord$format33518.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format33518.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,obj));
});

chord.format.t_chord$format33518.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.call(null,JSON.parse(s));
});

chord.format.t_chord$format33518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta33519","meta33519",544413985,null)], null);
});

chord.format.t_chord$format33518.cljs$lang$type = true;

chord.format.t_chord$format33518.cljs$lang$ctorStr = "chord.format/t_chord$format33518";

chord.format.t_chord$format33518.cljs$lang$ctorPrWriter = (function (this__27756__auto__,writer__27757__auto__,opt__27758__auto__){
return cljs.core._write.call(null,writer__27757__auto__,"chord.format/t_chord$format33518");
});

chord.format.__GT_t_chord$format33518 = (function chord$format$__GT_t_chord$format33518(___$1,meta33519){
return (new chord.format.t_chord$format33518(___$1,meta33519));
});

}

return (new chord.format.t_chord$format33518(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = chord.format.formatter_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)));
if(typeof chord.format.t_chord$format33521 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format33521 = (function (opts,json_formatter,meta33522){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta33522 = meta33522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format33521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (json_formatter){
return (function (_33523,meta33522__$1){
var self__ = this;
var _33523__$1 = this;
return (new chord.format.t_chord$format33521(self__.opts,self__.json_formatter,meta33522__$1));
});})(json_formatter))
;

chord.format.t_chord$format33521.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (json_formatter){
return (function (_33523){
var self__ = this;
var _33523__$1 = this;
return self__.meta33522;
});})(json_formatter))
;

chord.format.t_chord$format33521.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format33521.prototype.chord$format$ChordFormatter$freeze$arity$2 = ((function (json_formatter){
return (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze.call(null,self__.json_formatter,obj);
});})(json_formatter))
;

chord.format.t_chord$format33521.prototype.chord$format$ChordFormatter$thaw$arity$2 = ((function (json_formatter){
return (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys.call(null,chord.format.thaw.call(null,self__.json_formatter,s));
});})(json_formatter))
;

chord.format.t_chord$format33521.getBasis = ((function (json_formatter){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta33522","meta33522",1465786459,null)], null);
});})(json_formatter))
;

chord.format.t_chord$format33521.cljs$lang$type = true;

chord.format.t_chord$format33521.cljs$lang$ctorStr = "chord.format/t_chord$format33521";

chord.format.t_chord$format33521.cljs$lang$ctorPrWriter = ((function (json_formatter){
return (function (this__27756__auto__,writer__27757__auto__,opt__27758__auto__){
return cljs.core._write.call(null,writer__27757__auto__,"chord.format/t_chord$format33521");
});})(json_formatter))
;

chord.format.__GT_t_chord$format33521 = ((function (json_formatter){
return (function chord$format$__GT_t_chord$format33521(opts__$1,json_formatter__$1,meta33522){
return (new chord.format.t_chord$format33521(opts__$1,json_formatter__$1,meta33522));
});})(json_formatter))
;

}

return (new chord.format.t_chord$format33521(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if(typeof chord.format.t_chord$format33524 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format33524 = (function (_,meta33525){
this._ = _;
this.meta33525 = meta33525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format33524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33526,meta33525__$1){
var self__ = this;
var _33526__$1 = this;
return (new chord.format.t_chord$format33524(self__._,meta33525__$1));
});

chord.format.t_chord$format33524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33526){
var self__ = this;
var _33526__$1 = this;
return self__.meta33525;
});

chord.format.t_chord$format33524.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format33524.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),obj);
});

chord.format.t_chord$format33524.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
});

chord.format.t_chord$format33524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta33525","meta33525",2016074115,null)], null);
});

chord.format.t_chord$format33524.cljs$lang$type = true;

chord.format.t_chord$format33524.cljs$lang$ctorStr = "chord.format/t_chord$format33524";

chord.format.t_chord$format33524.cljs$lang$ctorPrWriter = (function (this__27756__auto__,writer__27757__auto__,opt__27758__auto__){
return cljs.core._write.call(null,writer__27757__auto__,"chord.format/t_chord$format33524");
});

chord.format.__GT_t_chord$format33524 = (function chord$format$__GT_t_chord$format33524(___$1,meta33525){
return (new chord.format.t_chord$format33524(___$1,meta33525));
});

}

return (new chord.format.t_chord$format33524(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if(typeof chord.format.t_chord$format33527 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format33527 = (function (_,meta33528){
this._ = _;
this.meta33528 = meta33528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format33527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33529,meta33528__$1){
var self__ = this;
var _33529__$1 = this;
return (new chord.format.t_chord$format33527(self__._,meta33528__$1));
});

chord.format.t_chord$format33527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33529){
var self__ = this;
var _33529__$1 = this;
return self__.meta33528;
});

chord.format.t_chord$format33527.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format33527.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
});

chord.format.t_chord$format33527.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
});

chord.format.t_chord$format33527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta33528","meta33528",-252017492,null)], null);
});

chord.format.t_chord$format33527.cljs$lang$type = true;

chord.format.t_chord$format33527.cljs$lang$ctorStr = "chord.format/t_chord$format33527";

chord.format.t_chord$format33527.cljs$lang$ctorPrWriter = (function (this__27756__auto__,writer__27757__auto__,opt__27758__auto__){
return cljs.core._write.call(null,writer__27757__auto__,"chord.format/t_chord$format33527");
});

chord.format.__GT_t_chord$format33527 = (function chord$format$__GT_t_chord$format33527(___$1,meta33528){
return (new chord.format.t_chord$format33527(___$1,meta33528));
});

}

return (new chord.format.t_chord$format33527(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
return chord.format.formatter_STAR_.call(null,(((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__33531,p__33532){
var map__33541 = p__33531;
var map__33541__$1 = ((((!((map__33541 == null)))?((((map__33541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33541):map__33541);
var read_ch = cljs.core.get.call(null,map__33541__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__33541__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__33542 = p__33532;
var map__33542__$1 = ((((!((map__33542 == null)))?((((map__33542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33542):map__33542);
var opts = map__33542__$1;
var format = cljs.core.get.call(null,map__33542__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter.call(null,(cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,((function (fmtr,map__33541,map__33541__$1,read_ch,write_ch,map__33542,map__33542__$1,opts,format){
return (function (p__33545){
var map__33546 = p__33545;
var map__33546__$1 = ((((!((map__33546 == null)))?((((map__33546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33546):map__33546);
var message = cljs.core.get.call(null,map__33546__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{if(cljs.core.truth_(message)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw.call(null,fmtr,message)], null);
} else {
return null;
}
}catch (e33548){if((e33548 instanceof Error)){
var e = e33548;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e33548;

}
}});})(fmtr,map__33541,map__33541__$1,read_ch,write_ch,map__33542,map__33542__$1,opts,format))
,read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,((function (fmtr,map__33541,map__33541__$1,read_ch,write_ch,map__33542,map__33542__$1,opts,format){
return (function (p1__33530_SHARP_){
if(cljs.core.truth_(p1__33530_SHARP_)){
return chord.format.freeze.call(null,fmtr,p1__33530_SHARP_);
} else {
return null;
}
});})(fmtr,map__33541,map__33541__$1,read_ch,write_ch,map__33542,map__33542__$1,opts,format))
,write_ch)], null);
});

//# sourceMappingURL=format.js.map?rel=1491914646363
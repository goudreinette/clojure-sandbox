// Compiled by ClojureScript 1.9.494 {}
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
chord.channels.read_from_ws_BANG_ = (function chord$channels$read_from_ws_BANG_(ws,ch){
return ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
});
});
chord.channels.write_to_ws_BANG_ = (function chord$channels$write_to_ws_BANG_(ws,ch){
var c__30844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30844__auto__){
return (function (){
var f__30845__auto__ = (function (){var switch__30786__auto__ = ((function (c__30844__auto__){
return (function (state_33225){
var state_val_33226 = (state_33225[(1)]);
if((state_val_33226 === (1))){
var state_33225__$1 = state_33225;
var statearr_33227_33242 = state_33225__$1;
(statearr_33227_33242[(2)] = null);

(statearr_33227_33242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (2))){
var state_33225__$1 = state_33225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33225__$1,(4),ch);
} else {
if((state_val_33226 === (3))){
var inst_33223 = (state_33225[(2)]);
var state_33225__$1 = state_33225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33225__$1,inst_33223);
} else {
if((state_val_33226 === (4))){
var inst_33215 = (state_33225[(7)]);
var inst_33215__$1 = (state_33225[(2)]);
var state_33225__$1 = (function (){var statearr_33228 = state_33225;
(statearr_33228[(7)] = inst_33215__$1);

return statearr_33228;
})();
if(cljs.core.truth_(inst_33215__$1)){
var statearr_33229_33243 = state_33225__$1;
(statearr_33229_33243[(1)] = (5));

} else {
var statearr_33230_33244 = state_33225__$1;
(statearr_33230_33244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (5))){
var inst_33215 = (state_33225[(7)]);
var inst_33217 = ws.send(inst_33215);
var state_33225__$1 = (function (){var statearr_33231 = state_33225;
(statearr_33231[(8)] = inst_33217);

return statearr_33231;
})();
var statearr_33232_33245 = state_33225__$1;
(statearr_33232_33245[(2)] = null);

(statearr_33232_33245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (6))){
var state_33225__$1 = state_33225;
var statearr_33233_33246 = state_33225__$1;
(statearr_33233_33246[(2)] = null);

(statearr_33233_33246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (7))){
var inst_33221 = (state_33225[(2)]);
var state_33225__$1 = state_33225;
var statearr_33234_33247 = state_33225__$1;
(statearr_33234_33247[(2)] = inst_33221);

(statearr_33234_33247[(1)] = (3));


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
});})(c__30844__auto__))
;
return ((function (switch__30786__auto__,c__30844__auto__){
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__30787__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__30787__auto____0 = (function (){
var statearr_33238 = [null,null,null,null,null,null,null,null,null];
(statearr_33238[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__30787__auto__);

(statearr_33238[(1)] = (1));

return statearr_33238;
});
var chord$channels$write_to_ws_BANG__$_state_machine__30787__auto____1 = (function (state_33225){
while(true){
var ret_value__30788__auto__ = (function (){try{while(true){
var result__30789__auto__ = switch__30786__auto__.call(null,state_33225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30789__auto__;
}
break;
}
}catch (e33239){if((e33239 instanceof Object)){
var ex__30790__auto__ = e33239;
var statearr_33240_33248 = state_33225;
(statearr_33240_33248[(5)] = ex__30790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33249 = state_33225;
state_33225 = G__33249;
continue;
} else {
return ret_value__30788__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__30787__auto__ = function(state_33225){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__30787__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__30787__auto____1.call(this,state_33225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__30787__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__30787__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__30787__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__30787__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__30787__auto__;
})()
;})(switch__30786__auto__,c__30844__auto__))
})();
var state__30846__auto__ = (function (){var statearr_33241 = f__30845__auto__.call(null);
(statearr_33241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30844__auto__);

return statearr_33241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30846__auto__);
});})(c__30844__auto__))
);

return c__30844__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__28327__auto__ = [];
var len__28320__auto___33262 = arguments.length;
var i__28321__auto___33263 = (0);
while(true){
if((i__28321__auto___33263 < len__28320__auto___33262)){
args__28327__auto__.push((arguments[i__28321__auto___33263]));

var G__33264 = (i__28321__auto___33263 + (1));
i__28321__auto___33263 = G__33264;
continue;
} else {
}
break;
}

var argseq__28328__auto__ = ((((2) < args__28327__auto__.length))?(new cljs.core.IndexedSeq(args__28327__auto__.slice((2)),(0),null)):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28328__auto__);
});

chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__33253){
var vec__33254 = p__33253;
var map__33257 = cljs.core.nth.call(null,vec__33254,(0),null);
var map__33257__$1 = ((((!((map__33257 == null)))?((((map__33257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33257):map__33257);
var on_close = cljs.core.get.call(null,map__33257__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if(typeof chord.channels.t_chord$channels33259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels33259 = (function (read_ch,write_ch,p__33253,vec__33254,map__33257,on_close,meta33260){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__33253 = p__33253;
this.vec__33254 = vec__33254;
this.map__33257 = map__33257;
this.on_close = on_close;
this.meta33260 = meta33260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.channels.t_chord$channels33259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__33254,map__33257,map__33257__$1,on_close){
return (function (_33261,meta33260__$1){
var self__ = this;
var _33261__$1 = this;
return (new chord.channels.t_chord$channels33259(self__.read_ch,self__.write_ch,self__.p__33253,self__.vec__33254,self__.map__33257,self__.on_close,meta33260__$1));
});})(vec__33254,map__33257,map__33257__$1,on_close))
;

chord.channels.t_chord$channels33259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__33254,map__33257,map__33257__$1,on_close){
return (function (_33261){
var self__ = this;
var _33261__$1 = this;
return self__.meta33260;
});})(vec__33254,map__33257,map__33257__$1,on_close))
;

chord.channels.t_chord$channels33259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

chord.channels.t_chord$channels33259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__33254,map__33257,map__33257__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__33254,map__33257,map__33257__$1,on_close))
;

chord.channels.t_chord$channels33259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

chord.channels.t_chord$channels33259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__33254,map__33257,map__33257__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});})(vec__33254,map__33257,map__33257__$1,on_close))
;

chord.channels.t_chord$channels33259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

chord.channels.t_chord$channels33259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__33254,map__33257,map__33257__$1,on_close){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return self__.on_close.call(null);
} else {
return null;
}
});})(vec__33254,map__33257,map__33257__$1,on_close))
;

chord.channels.t_chord$channels33259.getBasis = ((function (vec__33254,map__33257,map__33257__$1,on_close){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__33253","p__33253",-1875366027,null),new cljs.core.Symbol(null,"vec__33254","vec__33254",-1018077553,null),new cljs.core.Symbol(null,"map__33257","map__33257",668965427,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta33260","meta33260",1606032625,null)], null);
});})(vec__33254,map__33257,map__33257__$1,on_close))
;

chord.channels.t_chord$channels33259.cljs$lang$type = true;

chord.channels.t_chord$channels33259.cljs$lang$ctorStr = "chord.channels/t_chord$channels33259";

chord.channels.t_chord$channels33259.cljs$lang$ctorPrWriter = ((function (vec__33254,map__33257,map__33257__$1,on_close){
return (function (this__27756__auto__,writer__27757__auto__,opt__27758__auto__){
return cljs.core._write.call(null,writer__27757__auto__,"chord.channels/t_chord$channels33259");
});})(vec__33254,map__33257,map__33257__$1,on_close))
;

chord.channels.__GT_t_chord$channels33259 = ((function (vec__33254,map__33257,map__33257__$1,on_close){
return (function chord$channels$__GT_t_chord$channels33259(read_ch__$1,write_ch__$1,p__33253__$1,vec__33254__$1,map__33257__$2,on_close__$1,meta33260){
return (new chord.channels.t_chord$channels33259(read_ch__$1,write_ch__$1,p__33253__$1,vec__33254__$1,map__33257__$2,on_close__$1,meta33260));
});})(vec__33254,map__33257,map__33257__$1,on_close))
;

}

return (new chord.channels.t_chord$channels33259(read_ch,write_ch,p__33253,vec__33254,map__33257__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
});

chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2);

chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq33250){
var G__33251 = cljs.core.first.call(null,seq33250);
var seq33250__$1 = cljs.core.next.call(null,seq33250);
var G__33252 = cljs.core.first.call(null,seq33250__$1);
var seq33250__$2 = cljs.core.next.call(null,seq33250__$1);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(G__33251,G__33252,seq33250__$2);
});


//# sourceMappingURL=channels.js.map?rel=1491914645976
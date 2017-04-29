// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args38046 = [];
var len__28223__auto___38049 = arguments.length;
var i__28224__auto___38050 = (0);
while(true){
if((i__28224__auto___38050 < len__28223__auto___38049)){
args38046.push((arguments[i__28224__auto___38050]));

var G__38051 = (i__28224__auto___38050 + (1));
i__28224__auto___38050 = G__38051;
continue;
} else {
}
break;
}

var G__38048 = args38046.length;
switch (G__38048) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38046.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28230__auto__ = [];
var len__28223__auto___38054 = arguments.length;
var i__28224__auto___38055 = (0);
while(true){
if((i__28224__auto___38055 < len__28223__auto___38054)){
args__28230__auto__.push((arguments[i__28224__auto___38055]));

var G__38056 = (i__28224__auto___38055 + (1));
i__28224__auto___38055 = G__38056;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38053){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38053));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28230__auto__ = [];
var len__28223__auto___38058 = arguments.length;
var i__28224__auto___38059 = (0);
while(true){
if((i__28224__auto___38059 < len__28223__auto___38058)){
args__28230__auto__.push((arguments[i__28224__auto___38059]));

var G__38060 = (i__28224__auto___38059 + (1));
i__28224__auto___38059 = G__38060;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38057){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38057));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__38061 = cljs.core._EQ_;
var expr__38062 = (function (){var or__27002__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e38065){if((e38065 instanceof Error)){
var e = e38065;
return false;
} else {
throw e38065;

}
}})();
if(cljs.core.truth_(or__27002__auto__)){
return or__27002__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__38061.call(null,"true",expr__38062))){
return true;
} else {
if(cljs.core.truth_(pred__38061.call(null,"false",expr__38062))){
return false;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38062)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e38067){if((e38067 instanceof Error)){
var e = e38067;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to access localStorage")].join(''));
} else {
throw e38067;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38068){
var map__38071 = p__38068;
var map__38071__$1 = ((((!((map__38071 == null)))?((((map__38071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38071):map__38071);
var message = cljs.core.get.call(null,map__38071__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38071__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27002__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27002__auto__)){
return or__27002__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26990__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26990__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26990__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30574__auto___38233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___38233,ch){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___38233,ch){
return (function (state_38202){
var state_val_38203 = (state_38202[(1)]);
if((state_val_38203 === (7))){
var inst_38198 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
var statearr_38204_38234 = state_38202__$1;
(statearr_38204_38234[(2)] = inst_38198);

(statearr_38204_38234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (1))){
var state_38202__$1 = state_38202;
var statearr_38205_38235 = state_38202__$1;
(statearr_38205_38235[(2)] = null);

(statearr_38205_38235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (4))){
var inst_38155 = (state_38202[(7)]);
var inst_38155__$1 = (state_38202[(2)]);
var state_38202__$1 = (function (){var statearr_38206 = state_38202;
(statearr_38206[(7)] = inst_38155__$1);

return statearr_38206;
})();
if(cljs.core.truth_(inst_38155__$1)){
var statearr_38207_38236 = state_38202__$1;
(statearr_38207_38236[(1)] = (5));

} else {
var statearr_38208_38237 = state_38202__$1;
(statearr_38208_38237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (15))){
var inst_38162 = (state_38202[(8)]);
var inst_38177 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38162);
var inst_38178 = cljs.core.first.call(null,inst_38177);
var inst_38179 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38178);
var inst_38180 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38179)].join('');
var inst_38181 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38180);
var state_38202__$1 = state_38202;
var statearr_38209_38238 = state_38202__$1;
(statearr_38209_38238[(2)] = inst_38181);

(statearr_38209_38238[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (13))){
var inst_38186 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
var statearr_38210_38239 = state_38202__$1;
(statearr_38210_38239[(2)] = inst_38186);

(statearr_38210_38239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (6))){
var state_38202__$1 = state_38202;
var statearr_38211_38240 = state_38202__$1;
(statearr_38211_38240[(2)] = null);

(statearr_38211_38240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (17))){
var inst_38184 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
var statearr_38212_38241 = state_38202__$1;
(statearr_38212_38241[(2)] = inst_38184);

(statearr_38212_38241[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (3))){
var inst_38200 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38202__$1,inst_38200);
} else {
if((state_val_38203 === (12))){
var inst_38161 = (state_38202[(9)]);
var inst_38175 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38161,opts);
var state_38202__$1 = state_38202;
if(cljs.core.truth_(inst_38175)){
var statearr_38213_38242 = state_38202__$1;
(statearr_38213_38242[(1)] = (15));

} else {
var statearr_38214_38243 = state_38202__$1;
(statearr_38214_38243[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (2))){
var state_38202__$1 = state_38202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38202__$1,(4),ch);
} else {
if((state_val_38203 === (11))){
var inst_38162 = (state_38202[(8)]);
var inst_38167 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38168 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38162);
var inst_38169 = cljs.core.async.timeout.call(null,(1000));
var inst_38170 = [inst_38168,inst_38169];
var inst_38171 = (new cljs.core.PersistentVector(null,2,(5),inst_38167,inst_38170,null));
var state_38202__$1 = state_38202;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38202__$1,(14),inst_38171);
} else {
if((state_val_38203 === (9))){
var inst_38162 = (state_38202[(8)]);
var inst_38188 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38189 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38162);
var inst_38190 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38189);
var inst_38191 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38190)].join('');
var inst_38192 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38191);
var state_38202__$1 = (function (){var statearr_38215 = state_38202;
(statearr_38215[(10)] = inst_38188);

return statearr_38215;
})();
var statearr_38216_38244 = state_38202__$1;
(statearr_38216_38244[(2)] = inst_38192);

(statearr_38216_38244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (5))){
var inst_38155 = (state_38202[(7)]);
var inst_38157 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38158 = (new cljs.core.PersistentArrayMap(null,2,inst_38157,null));
var inst_38159 = (new cljs.core.PersistentHashSet(null,inst_38158,null));
var inst_38160 = figwheel.client.focus_msgs.call(null,inst_38159,inst_38155);
var inst_38161 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38160);
var inst_38162 = cljs.core.first.call(null,inst_38160);
var inst_38163 = figwheel.client.autoload_QMARK_.call(null);
var state_38202__$1 = (function (){var statearr_38217 = state_38202;
(statearr_38217[(9)] = inst_38161);

(statearr_38217[(8)] = inst_38162);

return statearr_38217;
})();
if(cljs.core.truth_(inst_38163)){
var statearr_38218_38245 = state_38202__$1;
(statearr_38218_38245[(1)] = (8));

} else {
var statearr_38219_38246 = state_38202__$1;
(statearr_38219_38246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (14))){
var inst_38173 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
var statearr_38220_38247 = state_38202__$1;
(statearr_38220_38247[(2)] = inst_38173);

(statearr_38220_38247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (16))){
var state_38202__$1 = state_38202;
var statearr_38221_38248 = state_38202__$1;
(statearr_38221_38248[(2)] = null);

(statearr_38221_38248[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (10))){
var inst_38194 = (state_38202[(2)]);
var state_38202__$1 = (function (){var statearr_38222 = state_38202;
(statearr_38222[(11)] = inst_38194);

return statearr_38222;
})();
var statearr_38223_38249 = state_38202__$1;
(statearr_38223_38249[(2)] = null);

(statearr_38223_38249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (8))){
var inst_38161 = (state_38202[(9)]);
var inst_38165 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38161,opts);
var state_38202__$1 = state_38202;
if(cljs.core.truth_(inst_38165)){
var statearr_38224_38250 = state_38202__$1;
(statearr_38224_38250[(1)] = (11));

} else {
var statearr_38225_38251 = state_38202__$1;
(statearr_38225_38251[(1)] = (12));

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
});})(c__30574__auto___38233,ch))
;
return ((function (switch__30460__auto__,c__30574__auto___38233,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30461__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30461__auto____0 = (function (){
var statearr_38229 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38229[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30461__auto__);

(statearr_38229[(1)] = (1));

return statearr_38229;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30461__auto____1 = (function (state_38202){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_38202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e38230){if((e38230 instanceof Object)){
var ex__30464__auto__ = e38230;
var statearr_38231_38252 = state_38202;
(statearr_38231_38252[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38253 = state_38202;
state_38202 = G__38253;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30461__auto__ = function(state_38202){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30461__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30461__auto____1.call(this,state_38202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30461__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30461__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___38233,ch))
})();
var state__30576__auto__ = (function (){var statearr_38232 = f__30575__auto__.call(null);
(statearr_38232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___38233);

return statearr_38232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___38233,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38254_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38254_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38257 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38257){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38256){if((e38256 instanceof Error)){
var e = e38256;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38257], null));
} else {
var e = e38256;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38257))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38258){
var map__38267 = p__38258;
var map__38267__$1 = ((((!((map__38267 == null)))?((((map__38267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38267):map__38267);
var opts = map__38267__$1;
var build_id = cljs.core.get.call(null,map__38267__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38267,map__38267__$1,opts,build_id){
return (function (p__38269){
var vec__38270 = p__38269;
var seq__38271 = cljs.core.seq.call(null,vec__38270);
var first__38272 = cljs.core.first.call(null,seq__38271);
var seq__38271__$1 = cljs.core.next.call(null,seq__38271);
var map__38273 = first__38272;
var map__38273__$1 = ((((!((map__38273 == null)))?((((map__38273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38273):map__38273);
var msg = map__38273__$1;
var msg_name = cljs.core.get.call(null,map__38273__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38271__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38270,seq__38271,first__38272,seq__38271__$1,map__38273,map__38273__$1,msg,msg_name,_,map__38267,map__38267__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38270,seq__38271,first__38272,seq__38271__$1,map__38273,map__38273__$1,msg,msg_name,_,map__38267,map__38267__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38267,map__38267__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38281){
var vec__38282 = p__38281;
var seq__38283 = cljs.core.seq.call(null,vec__38282);
var first__38284 = cljs.core.first.call(null,seq__38283);
var seq__38283__$1 = cljs.core.next.call(null,seq__38283);
var map__38285 = first__38284;
var map__38285__$1 = ((((!((map__38285 == null)))?((((map__38285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38285):map__38285);
var msg = map__38285__$1;
var msg_name = cljs.core.get.call(null,map__38285__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38283__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38287){
var map__38299 = p__38287;
var map__38299__$1 = ((((!((map__38299 == null)))?((((map__38299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38299):map__38299);
var on_compile_warning = cljs.core.get.call(null,map__38299__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38299__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38299,map__38299__$1,on_compile_warning,on_compile_fail){
return (function (p__38301){
var vec__38302 = p__38301;
var seq__38303 = cljs.core.seq.call(null,vec__38302);
var first__38304 = cljs.core.first.call(null,seq__38303);
var seq__38303__$1 = cljs.core.next.call(null,seq__38303);
var map__38305 = first__38304;
var map__38305__$1 = ((((!((map__38305 == null)))?((((map__38305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38305):map__38305);
var msg = map__38305__$1;
var msg_name = cljs.core.get.call(null,map__38305__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38303__$1;
var pred__38307 = cljs.core._EQ_;
var expr__38308 = msg_name;
if(cljs.core.truth_(pred__38307.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38308))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38307.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38308))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38299,map__38299__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto__,msg_hist,msg_names,msg){
return (function (state_38536){
var state_val_38537 = (state_38536[(1)]);
if((state_val_38537 === (7))){
var inst_38456 = (state_38536[(2)]);
var state_38536__$1 = state_38536;
if(cljs.core.truth_(inst_38456)){
var statearr_38538_38588 = state_38536__$1;
(statearr_38538_38588[(1)] = (8));

} else {
var statearr_38539_38589 = state_38536__$1;
(statearr_38539_38589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (20))){
var inst_38530 = (state_38536[(2)]);
var state_38536__$1 = state_38536;
var statearr_38540_38590 = state_38536__$1;
(statearr_38540_38590[(2)] = inst_38530);

(statearr_38540_38590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (27))){
var inst_38526 = (state_38536[(2)]);
var state_38536__$1 = state_38536;
var statearr_38541_38591 = state_38536__$1;
(statearr_38541_38591[(2)] = inst_38526);

(statearr_38541_38591[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (1))){
var inst_38449 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38536__$1 = state_38536;
if(cljs.core.truth_(inst_38449)){
var statearr_38542_38592 = state_38536__$1;
(statearr_38542_38592[(1)] = (2));

} else {
var statearr_38543_38593 = state_38536__$1;
(statearr_38543_38593[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (24))){
var inst_38528 = (state_38536[(2)]);
var state_38536__$1 = state_38536;
var statearr_38544_38594 = state_38536__$1;
(statearr_38544_38594[(2)] = inst_38528);

(statearr_38544_38594[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (4))){
var inst_38534 = (state_38536[(2)]);
var state_38536__$1 = state_38536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38536__$1,inst_38534);
} else {
if((state_val_38537 === (15))){
var inst_38532 = (state_38536[(2)]);
var state_38536__$1 = state_38536;
var statearr_38545_38595 = state_38536__$1;
(statearr_38545_38595[(2)] = inst_38532);

(statearr_38545_38595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (21))){
var inst_38485 = (state_38536[(2)]);
var inst_38486 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38487 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38486);
var state_38536__$1 = (function (){var statearr_38546 = state_38536;
(statearr_38546[(7)] = inst_38485);

return statearr_38546;
})();
var statearr_38547_38596 = state_38536__$1;
(statearr_38547_38596[(2)] = inst_38487);

(statearr_38547_38596[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (31))){
var inst_38515 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38536__$1 = state_38536;
if(cljs.core.truth_(inst_38515)){
var statearr_38548_38597 = state_38536__$1;
(statearr_38548_38597[(1)] = (34));

} else {
var statearr_38549_38598 = state_38536__$1;
(statearr_38549_38598[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (32))){
var inst_38524 = (state_38536[(2)]);
var state_38536__$1 = state_38536;
var statearr_38550_38599 = state_38536__$1;
(statearr_38550_38599[(2)] = inst_38524);

(statearr_38550_38599[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (33))){
var inst_38511 = (state_38536[(2)]);
var inst_38512 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38513 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38512);
var state_38536__$1 = (function (){var statearr_38551 = state_38536;
(statearr_38551[(8)] = inst_38511);

return statearr_38551;
})();
var statearr_38552_38600 = state_38536__$1;
(statearr_38552_38600[(2)] = inst_38513);

(statearr_38552_38600[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (13))){
var inst_38470 = figwheel.client.heads_up.clear.call(null);
var state_38536__$1 = state_38536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38536__$1,(16),inst_38470);
} else {
if((state_val_38537 === (22))){
var inst_38491 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38492 = figwheel.client.heads_up.append_warning_message.call(null,inst_38491);
var state_38536__$1 = state_38536;
var statearr_38553_38601 = state_38536__$1;
(statearr_38553_38601[(2)] = inst_38492);

(statearr_38553_38601[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (36))){
var inst_38522 = (state_38536[(2)]);
var state_38536__$1 = state_38536;
var statearr_38554_38602 = state_38536__$1;
(statearr_38554_38602[(2)] = inst_38522);

(statearr_38554_38602[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (29))){
var inst_38502 = (state_38536[(2)]);
var inst_38503 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38504 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38503);
var state_38536__$1 = (function (){var statearr_38555 = state_38536;
(statearr_38555[(9)] = inst_38502);

return statearr_38555;
})();
var statearr_38556_38603 = state_38536__$1;
(statearr_38556_38603[(2)] = inst_38504);

(statearr_38556_38603[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (6))){
var inst_38451 = (state_38536[(10)]);
var state_38536__$1 = state_38536;
var statearr_38557_38604 = state_38536__$1;
(statearr_38557_38604[(2)] = inst_38451);

(statearr_38557_38604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (28))){
var inst_38498 = (state_38536[(2)]);
var inst_38499 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38500 = figwheel.client.heads_up.display_warning.call(null,inst_38499);
var state_38536__$1 = (function (){var statearr_38558 = state_38536;
(statearr_38558[(11)] = inst_38498);

return statearr_38558;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38536__$1,(29),inst_38500);
} else {
if((state_val_38537 === (25))){
var inst_38496 = figwheel.client.heads_up.clear.call(null);
var state_38536__$1 = state_38536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38536__$1,(28),inst_38496);
} else {
if((state_val_38537 === (34))){
var inst_38517 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38536__$1 = state_38536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38536__$1,(37),inst_38517);
} else {
if((state_val_38537 === (17))){
var inst_38476 = (state_38536[(2)]);
var inst_38477 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38478 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38477);
var state_38536__$1 = (function (){var statearr_38559 = state_38536;
(statearr_38559[(12)] = inst_38476);

return statearr_38559;
})();
var statearr_38560_38605 = state_38536__$1;
(statearr_38560_38605[(2)] = inst_38478);

(statearr_38560_38605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (3))){
var inst_38468 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38536__$1 = state_38536;
if(cljs.core.truth_(inst_38468)){
var statearr_38561_38606 = state_38536__$1;
(statearr_38561_38606[(1)] = (13));

} else {
var statearr_38562_38607 = state_38536__$1;
(statearr_38562_38607[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (12))){
var inst_38464 = (state_38536[(2)]);
var state_38536__$1 = state_38536;
var statearr_38563_38608 = state_38536__$1;
(statearr_38563_38608[(2)] = inst_38464);

(statearr_38563_38608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (2))){
var inst_38451 = (state_38536[(10)]);
var inst_38451__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38536__$1 = (function (){var statearr_38564 = state_38536;
(statearr_38564[(10)] = inst_38451__$1);

return statearr_38564;
})();
if(cljs.core.truth_(inst_38451__$1)){
var statearr_38565_38609 = state_38536__$1;
(statearr_38565_38609[(1)] = (5));

} else {
var statearr_38566_38610 = state_38536__$1;
(statearr_38566_38610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (23))){
var inst_38494 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38536__$1 = state_38536;
if(cljs.core.truth_(inst_38494)){
var statearr_38567_38611 = state_38536__$1;
(statearr_38567_38611[(1)] = (25));

} else {
var statearr_38568_38612 = state_38536__$1;
(statearr_38568_38612[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (35))){
var state_38536__$1 = state_38536;
var statearr_38569_38613 = state_38536__$1;
(statearr_38569_38613[(2)] = null);

(statearr_38569_38613[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (19))){
var inst_38489 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38536__$1 = state_38536;
if(cljs.core.truth_(inst_38489)){
var statearr_38570_38614 = state_38536__$1;
(statearr_38570_38614[(1)] = (22));

} else {
var statearr_38571_38615 = state_38536__$1;
(statearr_38571_38615[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (11))){
var inst_38460 = (state_38536[(2)]);
var state_38536__$1 = state_38536;
var statearr_38572_38616 = state_38536__$1;
(statearr_38572_38616[(2)] = inst_38460);

(statearr_38572_38616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (9))){
var inst_38462 = figwheel.client.heads_up.clear.call(null);
var state_38536__$1 = state_38536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38536__$1,(12),inst_38462);
} else {
if((state_val_38537 === (5))){
var inst_38453 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38536__$1 = state_38536;
var statearr_38573_38617 = state_38536__$1;
(statearr_38573_38617[(2)] = inst_38453);

(statearr_38573_38617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (14))){
var inst_38480 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38536__$1 = state_38536;
if(cljs.core.truth_(inst_38480)){
var statearr_38574_38618 = state_38536__$1;
(statearr_38574_38618[(1)] = (18));

} else {
var statearr_38575_38619 = state_38536__$1;
(statearr_38575_38619[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (26))){
var inst_38506 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38536__$1 = state_38536;
if(cljs.core.truth_(inst_38506)){
var statearr_38576_38620 = state_38536__$1;
(statearr_38576_38620[(1)] = (30));

} else {
var statearr_38577_38621 = state_38536__$1;
(statearr_38577_38621[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (16))){
var inst_38472 = (state_38536[(2)]);
var inst_38473 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38474 = figwheel.client.heads_up.display_exception.call(null,inst_38473);
var state_38536__$1 = (function (){var statearr_38578 = state_38536;
(statearr_38578[(13)] = inst_38472);

return statearr_38578;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38536__$1,(17),inst_38474);
} else {
if((state_val_38537 === (30))){
var inst_38508 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38509 = figwheel.client.heads_up.display_warning.call(null,inst_38508);
var state_38536__$1 = state_38536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38536__$1,(33),inst_38509);
} else {
if((state_val_38537 === (10))){
var inst_38466 = (state_38536[(2)]);
var state_38536__$1 = state_38536;
var statearr_38579_38622 = state_38536__$1;
(statearr_38579_38622[(2)] = inst_38466);

(statearr_38579_38622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (18))){
var inst_38482 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38483 = figwheel.client.heads_up.display_exception.call(null,inst_38482);
var state_38536__$1 = state_38536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38536__$1,(21),inst_38483);
} else {
if((state_val_38537 === (37))){
var inst_38519 = (state_38536[(2)]);
var state_38536__$1 = state_38536;
var statearr_38580_38623 = state_38536__$1;
(statearr_38580_38623[(2)] = inst_38519);

(statearr_38580_38623[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38537 === (8))){
var inst_38458 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38536__$1 = state_38536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38536__$1,(11),inst_38458);
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
});})(c__30574__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30460__auto__,c__30574__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30461__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30461__auto____0 = (function (){
var statearr_38584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38584[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30461__auto__);

(statearr_38584[(1)] = (1));

return statearr_38584;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30461__auto____1 = (function (state_38536){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_38536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e38585){if((e38585 instanceof Object)){
var ex__30464__auto__ = e38585;
var statearr_38586_38624 = state_38536;
(statearr_38586_38624[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38625 = state_38536;
state_38536 = G__38625;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30461__auto__ = function(state_38536){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30461__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30461__auto____1.call(this,state_38536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30461__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30461__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto__,msg_hist,msg_names,msg))
})();
var state__30576__auto__ = (function (){var statearr_38587 = f__30575__auto__.call(null);
(statearr_38587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto__);

return statearr_38587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto__,msg_hist,msg_names,msg))
);

return c__30574__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30574__auto___38688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___38688,ch){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___38688,ch){
return (function (state_38671){
var state_val_38672 = (state_38671[(1)]);
if((state_val_38672 === (1))){
var state_38671__$1 = state_38671;
var statearr_38673_38689 = state_38671__$1;
(statearr_38673_38689[(2)] = null);

(statearr_38673_38689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38672 === (2))){
var state_38671__$1 = state_38671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38671__$1,(4),ch);
} else {
if((state_val_38672 === (3))){
var inst_38669 = (state_38671[(2)]);
var state_38671__$1 = state_38671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38671__$1,inst_38669);
} else {
if((state_val_38672 === (4))){
var inst_38659 = (state_38671[(7)]);
var inst_38659__$1 = (state_38671[(2)]);
var state_38671__$1 = (function (){var statearr_38674 = state_38671;
(statearr_38674[(7)] = inst_38659__$1);

return statearr_38674;
})();
if(cljs.core.truth_(inst_38659__$1)){
var statearr_38675_38690 = state_38671__$1;
(statearr_38675_38690[(1)] = (5));

} else {
var statearr_38676_38691 = state_38671__$1;
(statearr_38676_38691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38672 === (5))){
var inst_38659 = (state_38671[(7)]);
var inst_38661 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38659);
var state_38671__$1 = state_38671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38671__$1,(8),inst_38661);
} else {
if((state_val_38672 === (6))){
var state_38671__$1 = state_38671;
var statearr_38677_38692 = state_38671__$1;
(statearr_38677_38692[(2)] = null);

(statearr_38677_38692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38672 === (7))){
var inst_38667 = (state_38671[(2)]);
var state_38671__$1 = state_38671;
var statearr_38678_38693 = state_38671__$1;
(statearr_38678_38693[(2)] = inst_38667);

(statearr_38678_38693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38672 === (8))){
var inst_38663 = (state_38671[(2)]);
var state_38671__$1 = (function (){var statearr_38679 = state_38671;
(statearr_38679[(8)] = inst_38663);

return statearr_38679;
})();
var statearr_38680_38694 = state_38671__$1;
(statearr_38680_38694[(2)] = null);

(statearr_38680_38694[(1)] = (2));


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
});})(c__30574__auto___38688,ch))
;
return ((function (switch__30460__auto__,c__30574__auto___38688,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30461__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30461__auto____0 = (function (){
var statearr_38684 = [null,null,null,null,null,null,null,null,null];
(statearr_38684[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30461__auto__);

(statearr_38684[(1)] = (1));

return statearr_38684;
});
var figwheel$client$heads_up_plugin_$_state_machine__30461__auto____1 = (function (state_38671){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_38671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e38685){if((e38685 instanceof Object)){
var ex__30464__auto__ = e38685;
var statearr_38686_38695 = state_38671;
(statearr_38686_38695[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38696 = state_38671;
state_38671 = G__38696;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30461__auto__ = function(state_38671){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30461__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30461__auto____1.call(this,state_38671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30461__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30461__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___38688,ch))
})();
var state__30576__auto__ = (function (){var statearr_38687 = f__30575__auto__.call(null);
(statearr_38687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___38688);

return statearr_38687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___38688,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto__){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto__){
return (function (state_38717){
var state_val_38718 = (state_38717[(1)]);
if((state_val_38718 === (1))){
var inst_38712 = cljs.core.async.timeout.call(null,(3000));
var state_38717__$1 = state_38717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38717__$1,(2),inst_38712);
} else {
if((state_val_38718 === (2))){
var inst_38714 = (state_38717[(2)]);
var inst_38715 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38717__$1 = (function (){var statearr_38719 = state_38717;
(statearr_38719[(7)] = inst_38714);

return statearr_38719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38717__$1,inst_38715);
} else {
return null;
}
}
});})(c__30574__auto__))
;
return ((function (switch__30460__auto__,c__30574__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30461__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30461__auto____0 = (function (){
var statearr_38723 = [null,null,null,null,null,null,null,null];
(statearr_38723[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30461__auto__);

(statearr_38723[(1)] = (1));

return statearr_38723;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30461__auto____1 = (function (state_38717){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_38717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e38724){if((e38724 instanceof Object)){
var ex__30464__auto__ = e38724;
var statearr_38725_38727 = state_38717;
(statearr_38725_38727[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38728 = state_38717;
state_38717 = G__38728;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30461__auto__ = function(state_38717){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30461__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30461__auto____1.call(this,state_38717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30461__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30461__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto__))
})();
var state__30576__auto__ = (function (){var statearr_38726 = f__30575__auto__.call(null);
(statearr_38726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto__);

return statearr_38726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto__))
);

return c__30574__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6753__auto__)){
var figwheel_version = temp__6753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto__,figwheel_version,temp__6753__auto__){
return (function (state_38751){
var state_val_38752 = (state_38751[(1)]);
if((state_val_38752 === (1))){
var inst_38745 = cljs.core.async.timeout.call(null,(2000));
var state_38751__$1 = state_38751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38751__$1,(2),inst_38745);
} else {
if((state_val_38752 === (2))){
var inst_38747 = (state_38751[(2)]);
var inst_38748 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_38749 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38748);
var state_38751__$1 = (function (){var statearr_38753 = state_38751;
(statearr_38753[(7)] = inst_38747);

return statearr_38753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38751__$1,inst_38749);
} else {
return null;
}
}
});})(c__30574__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__30460__auto__,c__30574__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30461__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30461__auto____0 = (function (){
var statearr_38757 = [null,null,null,null,null,null,null,null];
(statearr_38757[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30461__auto__);

(statearr_38757[(1)] = (1));

return statearr_38757;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30461__auto____1 = (function (state_38751){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_38751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e38758){if((e38758 instanceof Object)){
var ex__30464__auto__ = e38758;
var statearr_38759_38761 = state_38751;
(statearr_38759_38761[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38762 = state_38751;
state_38751 = G__38762;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30461__auto__ = function(state_38751){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30461__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30461__auto____1.call(this,state_38751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30461__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30461__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto__,figwheel_version,temp__6753__auto__))
})();
var state__30576__auto__ = (function (){var statearr_38760 = f__30575__auto__.call(null);
(statearr_38760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto__);

return statearr_38760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto__,figwheel_version,temp__6753__auto__))
);

return c__30574__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38763){
var map__38767 = p__38763;
var map__38767__$1 = ((((!((map__38767 == null)))?((((map__38767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38767):map__38767);
var file = cljs.core.get.call(null,map__38767__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38767__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38767__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38769 = "";
var G__38769__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38769),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38769);
var G__38769__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38769__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38769__$1);
if(cljs.core.truth_((function (){var and__26990__auto__ = line;
if(cljs.core.truth_(and__26990__auto__)){
return column;
} else {
return and__26990__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38769__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38769__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38770){
var map__38777 = p__38770;
var map__38777__$1 = ((((!((map__38777 == null)))?((((map__38777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38777):map__38777);
var ed = map__38777__$1;
var formatted_exception = cljs.core.get.call(null,map__38777__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38777__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38777__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38779_38783 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38780_38784 = null;
var count__38781_38785 = (0);
var i__38782_38786 = (0);
while(true){
if((i__38782_38786 < count__38781_38785)){
var msg_38787 = cljs.core._nth.call(null,chunk__38780_38784,i__38782_38786);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38787);

var G__38788 = seq__38779_38783;
var G__38789 = chunk__38780_38784;
var G__38790 = count__38781_38785;
var G__38791 = (i__38782_38786 + (1));
seq__38779_38783 = G__38788;
chunk__38780_38784 = G__38789;
count__38781_38785 = G__38790;
i__38782_38786 = G__38791;
continue;
} else {
var temp__6753__auto___38792 = cljs.core.seq.call(null,seq__38779_38783);
if(temp__6753__auto___38792){
var seq__38779_38793__$1 = temp__6753__auto___38792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38779_38793__$1)){
var c__27913__auto___38794 = cljs.core.chunk_first.call(null,seq__38779_38793__$1);
var G__38795 = cljs.core.chunk_rest.call(null,seq__38779_38793__$1);
var G__38796 = c__27913__auto___38794;
var G__38797 = cljs.core.count.call(null,c__27913__auto___38794);
var G__38798 = (0);
seq__38779_38783 = G__38795;
chunk__38780_38784 = G__38796;
count__38781_38785 = G__38797;
i__38782_38786 = G__38798;
continue;
} else {
var msg_38799 = cljs.core.first.call(null,seq__38779_38793__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38799);

var G__38800 = cljs.core.next.call(null,seq__38779_38793__$1);
var G__38801 = null;
var G__38802 = (0);
var G__38803 = (0);
seq__38779_38783 = G__38800;
chunk__38780_38784 = G__38801;
count__38781_38785 = G__38802;
i__38782_38786 = G__38803;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38804){
var map__38807 = p__38804;
var map__38807__$1 = ((((!((map__38807 == null)))?((((map__38807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38807):map__38807);
var w = map__38807__$1;
var message = cljs.core.get.call(null,map__38807__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/cljs/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/cljs/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26990__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26990__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26990__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38819 = cljs.core.seq.call(null,plugins);
var chunk__38820 = null;
var count__38821 = (0);
var i__38822 = (0);
while(true){
if((i__38822 < count__38821)){
var vec__38823 = cljs.core._nth.call(null,chunk__38820,i__38822);
var k = cljs.core.nth.call(null,vec__38823,(0),null);
var plugin = cljs.core.nth.call(null,vec__38823,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38829 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38819,chunk__38820,count__38821,i__38822,pl_38829,vec__38823,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38829.call(null,msg_hist);
});})(seq__38819,chunk__38820,count__38821,i__38822,pl_38829,vec__38823,k,plugin))
);
} else {
}

var G__38830 = seq__38819;
var G__38831 = chunk__38820;
var G__38832 = count__38821;
var G__38833 = (i__38822 + (1));
seq__38819 = G__38830;
chunk__38820 = G__38831;
count__38821 = G__38832;
i__38822 = G__38833;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__38819);
if(temp__6753__auto__){
var seq__38819__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38819__$1)){
var c__27913__auto__ = cljs.core.chunk_first.call(null,seq__38819__$1);
var G__38834 = cljs.core.chunk_rest.call(null,seq__38819__$1);
var G__38835 = c__27913__auto__;
var G__38836 = cljs.core.count.call(null,c__27913__auto__);
var G__38837 = (0);
seq__38819 = G__38834;
chunk__38820 = G__38835;
count__38821 = G__38836;
i__38822 = G__38837;
continue;
} else {
var vec__38826 = cljs.core.first.call(null,seq__38819__$1);
var k = cljs.core.nth.call(null,vec__38826,(0),null);
var plugin = cljs.core.nth.call(null,vec__38826,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38838 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38819,chunk__38820,count__38821,i__38822,pl_38838,vec__38826,k,plugin,seq__38819__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38838.call(null,msg_hist);
});})(seq__38819,chunk__38820,count__38821,i__38822,pl_38838,vec__38826,k,plugin,seq__38819__$1,temp__6753__auto__))
);
} else {
}

var G__38839 = cljs.core.next.call(null,seq__38819__$1);
var G__38840 = null;
var G__38841 = (0);
var G__38842 = (0);
seq__38819 = G__38839;
chunk__38820 = G__38840;
count__38821 = G__38841;
i__38822 = G__38842;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args38843 = [];
var len__28223__auto___38850 = arguments.length;
var i__28224__auto___38851 = (0);
while(true){
if((i__28224__auto___38851 < len__28223__auto___38850)){
args38843.push((arguments[i__28224__auto___38851]));

var G__38852 = (i__28224__auto___38851 + (1));
i__28224__auto___38851 = G__38852;
continue;
} else {
}
break;
}

var G__38845 = args38843.length;
switch (G__38845) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38843.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38846_38854 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38847_38855 = null;
var count__38848_38856 = (0);
var i__38849_38857 = (0);
while(true){
if((i__38849_38857 < count__38848_38856)){
var msg_38858 = cljs.core._nth.call(null,chunk__38847_38855,i__38849_38857);
figwheel.client.socket.handle_incoming_message.call(null,msg_38858);

var G__38859 = seq__38846_38854;
var G__38860 = chunk__38847_38855;
var G__38861 = count__38848_38856;
var G__38862 = (i__38849_38857 + (1));
seq__38846_38854 = G__38859;
chunk__38847_38855 = G__38860;
count__38848_38856 = G__38861;
i__38849_38857 = G__38862;
continue;
} else {
var temp__6753__auto___38863 = cljs.core.seq.call(null,seq__38846_38854);
if(temp__6753__auto___38863){
var seq__38846_38864__$1 = temp__6753__auto___38863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38846_38864__$1)){
var c__27913__auto___38865 = cljs.core.chunk_first.call(null,seq__38846_38864__$1);
var G__38866 = cljs.core.chunk_rest.call(null,seq__38846_38864__$1);
var G__38867 = c__27913__auto___38865;
var G__38868 = cljs.core.count.call(null,c__27913__auto___38865);
var G__38869 = (0);
seq__38846_38854 = G__38866;
chunk__38847_38855 = G__38867;
count__38848_38856 = G__38868;
i__38849_38857 = G__38869;
continue;
} else {
var msg_38870 = cljs.core.first.call(null,seq__38846_38864__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38870);

var G__38871 = cljs.core.next.call(null,seq__38846_38864__$1);
var G__38872 = null;
var G__38873 = (0);
var G__38874 = (0);
seq__38846_38854 = G__38871;
chunk__38847_38855 = G__38872;
count__38848_38856 = G__38873;
i__38849_38857 = G__38874;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28230__auto__ = [];
var len__28223__auto___38879 = arguments.length;
var i__28224__auto___38880 = (0);
while(true){
if((i__28224__auto___38880 < len__28223__auto___38879)){
args__28230__auto__.push((arguments[i__28224__auto___38880]));

var G__38881 = (i__28224__auto___38880 + (1));
i__28224__auto___38880 = G__38881;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((0) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28231__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38876){
var map__38877 = p__38876;
var map__38877__$1 = ((((!((map__38877 == null)))?((((map__38877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38877):map__38877);
var opts = map__38877__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38875){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38875));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38883){if((e38883 instanceof Error)){
var e = e38883;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38883;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38887){
var map__38888 = p__38887;
var map__38888__$1 = ((((!((map__38888 == null)))?((((map__38888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38888):map__38888);
var msg_name = cljs.core.get.call(null,map__38888__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1491913259944
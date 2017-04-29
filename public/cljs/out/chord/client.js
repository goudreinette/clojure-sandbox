// Compiled by ClojureScript 1.9.494 {}
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chord.channels');
goog.require('chord.format');
chord.client.close_event__GT_maybe_error = (function chord$client$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
chord.client.create_ws = (function chord$client$create_ws(url,opts){
if(cljs.core.truth_((function (){var and__27087__auto__ = typeof require !== 'undefined';
if(and__27087__auto__){
try{return require("ws");
}catch (e33554){var e = e33554;
return false;
}} else {
return and__27087__auto__;
}
})())){
var ws = require("ws");
if(cljs.core.truth_(opts)){
return (new ws(url,cljs.core.clj__GT_js.call(null,opts)));
} else {
return (new ws(url));
}
} else {
return (new WebSocket(url));

}
});
/**
 * Creates websockets connection and returns a 2-sided channel when the websocket is opened.
 * Arguments:
 *  ws-url           - (required) link to websocket service
 *  opts             - (optional) map to configure reading/writing channels
 *    :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
 *    :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
 *    :format        - (optional) data format to use on the channel, (at the moment)
 *                                either :edn (default), :json, :json-kw or :str.
 *    :ws-opts       - (optional) Other options to be passed to the websocket constructor (NodeJS only)
 *                                see https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketaddress-protocols-options
 * 
 * Usage:
 *  (:require [cljs.core.async :as a])
 * 
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437"))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
 *                                        :write-ch (a/chan (a/dropping-buffer 10))}))
 */
chord.client.ws_ch = (function chord$client$ws_ch(var_args){
var args__28327__auto__ = [];
var len__28320__auto___33669 = arguments.length;
var i__28321__auto___33670 = (0);
while(true){
if((i__28321__auto___33670 < len__28320__auto___33669)){
args__28327__auto__.push((arguments[i__28321__auto___33670]));

var G__33671 = (i__28321__auto___33670 + (1));
i__28321__auto___33670 = G__33671;
continue;
} else {
}
break;
}

var argseq__28328__auto__ = ((((1) < args__28327__auto__.length))?(new cljs.core.IndexedSeq(args__28327__auto__.slice((1)),(0),null)):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28328__auto__);
});

chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__33559){
var vec__33560 = p__33559;
var map__33563 = cljs.core.nth.call(null,vec__33560,(0),null);
var map__33563__$1 = ((((!((map__33563 == null)))?((((map__33563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33563):map__33563);
var opts = map__33563__$1;
var read_ch = cljs.core.get.call(null,map__33563__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__33563__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.call(null,map__33563__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var ws_opts = cljs.core.get.call(null,map__33563__$1,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643));
var web_socket = chord.client.create_ws.call(null,ws_url,ws_opts);
var map__33565 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__27099__auto__ = read_ch;
if(cljs.core.truth_(or__27099__auto__)){
return or__27099__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__27099__auto__ = write_ch;
if(cljs.core.truth_(or__27099__auto__)){
return or__27099__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})()], null),opts);
var map__33565__$1 = ((((!((map__33565 == null)))?((((map__33565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33565):map__33565);
var read_ch__$1 = cljs.core.get.call(null,map__33565__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.call(null,map__33565__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.call(null);
var close_ch = cljs.core.async.chan.call(null);
web_socket.binaryType = "arraybuffer";

chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);

web_socket.onopen = ((function (web_socket,map__33565,map__33565__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33560,map__33563,map__33563__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (p1__33555_SHARP_){
return cljs.core.async.put_BANG_.call(null,open_ch,p1__33555_SHARP_);
});})(web_socket,map__33565,map__33565__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33560,map__33563,map__33563__$1,opts,read_ch,write_ch,format,ws_opts))
;

web_socket.onclose = ((function (web_socket,map__33565,map__33565__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33560,map__33563,map__33563__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (p1__33556_SHARP_){
return cljs.core.async.put_BANG_.call(null,close_ch,p1__33556_SHARP_);
});})(web_socket,map__33565,map__33565__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33560,map__33563,map__33563__$1,opts,read_ch,write_ch,format,ws_opts))
;

var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (web_socket,map__33565,map__33565__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33560,map__33563,map__33563__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (){
return web_socket.close();
});})(web_socket,map__33565,map__33565__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33560,map__33563,map__33563__$1,opts,read_ch,write_ch,format,ws_opts))
], null));
var initial_ch = cljs.core.async.chan.call(null);
var c__30844__auto___33672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30844__auto___33672,ws_chan,initial_ch,web_socket,map__33565,map__33565__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33560,map__33563,map__33563__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (){
var f__30845__auto__ = (function (){var switch__30786__auto__ = ((function (c__30844__auto___33672,ws_chan,initial_ch,web_socket,map__33565,map__33565__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33560,map__33563,map__33563__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (state_33632){
var state_val_33633 = (state_33632[(1)]);
if((state_val_33633 === (7))){
var inst_33628 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33634_33673 = state_33632__$1;
(statearr_33634_33673[(2)] = inst_33628);

(statearr_33634_33673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (20))){
var state_33632__$1 = state_33632;
var statearr_33635_33674 = state_33632__$1;
(statearr_33635_33674[(2)] = null);

(statearr_33635_33674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (1))){
var inst_33567 = false;
var state_33632__$1 = (function (){var statearr_33636 = state_33632;
(statearr_33636[(7)] = inst_33567);

return statearr_33636;
})();
var statearr_33637_33675 = state_33632__$1;
(statearr_33637_33675[(2)] = null);

(statearr_33637_33675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (4))){
var inst_33582 = (state_33632[(8)]);
var inst_33580 = (state_33632[(9)]);
var inst_33580__$1 = (state_33632[(2)]);
var inst_33581 = cljs.core.nth.call(null,inst_33580__$1,(0),null);
var inst_33582__$1 = cljs.core.nth.call(null,inst_33580__$1,(1),null);
var inst_33583 = cljs.core._EQ_.call(null,inst_33582__$1,open_ch);
var state_33632__$1 = (function (){var statearr_33638 = state_33632;
(statearr_33638[(8)] = inst_33582__$1);

(statearr_33638[(10)] = inst_33581);

(statearr_33638[(9)] = inst_33580__$1);

return statearr_33638;
})();
if(inst_33583){
var statearr_33639_33676 = state_33632__$1;
(statearr_33639_33676[(1)] = (5));

} else {
var statearr_33640_33677 = state_33632__$1;
(statearr_33640_33677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (15))){
var inst_33613 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33641_33678 = state_33632__$1;
(statearr_33641_33678[(2)] = inst_33613);

(statearr_33641_33678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (21))){
var inst_33624 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33642_33679 = state_33632__$1;
(statearr_33642_33679[(2)] = inst_33624);

(statearr_33642_33679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (13))){
var state_33632__$1 = state_33632;
var statearr_33643_33680 = state_33632__$1;
(statearr_33643_33680[(2)] = null);

(statearr_33643_33680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (6))){
var inst_33582 = (state_33632[(8)]);
var inst_33597 = cljs.core._EQ_.call(null,inst_33582,close_ch);
var state_33632__$1 = state_33632;
if(inst_33597){
var statearr_33644_33681 = state_33632__$1;
(statearr_33644_33681[(1)] = (9));

} else {
var statearr_33645_33682 = state_33632__$1;
(statearr_33645_33682[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (17))){
var state_33632__$1 = state_33632;
var statearr_33646_33683 = state_33632__$1;
(statearr_33646_33683[(2)] = initial_ch);

(statearr_33646_33683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (3))){
var inst_33630 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33632__$1,inst_33630);
} else {
if((state_val_33633 === (12))){
var inst_33567 = (state_33632[(7)]);
var state_33632__$1 = state_33632;
if(cljs.core.truth_(inst_33567)){
var statearr_33647_33684 = state_33632__$1;
(statearr_33647_33684[(1)] = (16));

} else {
var statearr_33648_33685 = state_33632__$1;
(statearr_33648_33685[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (2))){
var inst_33576 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33577 = [open_ch,close_ch];
var inst_33578 = (new cljs.core.PersistentVector(null,2,(5),inst_33576,inst_33577,null));
var state_33632__$1 = state_33632;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33632__$1,(4),inst_33578);
} else {
if((state_val_33633 === (19))){
var inst_33581 = (state_33632[(10)]);
var state_33632__$1 = state_33632;
var statearr_33649_33686 = state_33632__$1;
(statearr_33649_33686[(2)] = inst_33581);

(statearr_33649_33686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (11))){
var inst_33626 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33650_33687 = state_33632__$1;
(statearr_33650_33687[(2)] = inst_33626);

(statearr_33650_33687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (9))){
var inst_33603 = (state_33632[(11)]);
var inst_33580 = (state_33632[(9)]);
var inst_33602 = cljs.core.nth.call(null,inst_33580,(0),null);
var inst_33603__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_33602);
var state_33632__$1 = (function (){var statearr_33651 = state_33632;
(statearr_33651[(11)] = inst_33603__$1);

return statearr_33651;
})();
if(cljs.core.truth_(inst_33603__$1)){
var statearr_33652_33688 = state_33632__$1;
(statearr_33652_33688[(1)] = (12));

} else {
var statearr_33653_33689 = state_33632__$1;
(statearr_33653_33689[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (5))){
var inst_33580 = (state_33632[(9)]);
var inst_33588 = cljs.core.nth.call(null,inst_33580,(0),null);
var inst_33589 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_33590 = [ws_chan];
var inst_33591 = cljs.core.PersistentHashMap.fromArrays(inst_33589,inst_33590);
var state_33632__$1 = (function (){var statearr_33654 = state_33632;
(statearr_33654[(12)] = inst_33588);

return statearr_33654;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33632__$1,(8),initial_ch,inst_33591);
} else {
if((state_val_33633 === (14))){
var inst_33616 = (state_33632[(2)]);
var inst_33617 = cljs.core.async.close_BANG_.call(null,ws_chan);
var inst_33618 = cljs.core.async.close_BANG_.call(null,initial_ch);
var state_33632__$1 = (function (){var statearr_33655 = state_33632;
(statearr_33655[(13)] = inst_33617);

(statearr_33655[(14)] = inst_33616);

return statearr_33655;
})();
var statearr_33656_33690 = state_33632__$1;
(statearr_33656_33690[(2)] = inst_33618);

(statearr_33656_33690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (16))){
var state_33632__$1 = state_33632;
var statearr_33657_33691 = state_33632__$1;
(statearr_33657_33691[(2)] = read_ch__$1);

(statearr_33657_33691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (10))){
var inst_33582 = (state_33632[(8)]);
var inst_33620 = cljs.core._EQ_.call(null,inst_33582,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_33632__$1 = state_33632;
if(inst_33620){
var statearr_33658_33692 = state_33632__$1;
(statearr_33658_33692[(1)] = (19));

} else {
var statearr_33659_33693 = state_33632__$1;
(statearr_33659_33693[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (18))){
var inst_33603 = (state_33632[(11)]);
var inst_33608 = (state_33632[(2)]);
var inst_33609 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_33610 = [inst_33603];
var inst_33611 = cljs.core.PersistentHashMap.fromArrays(inst_33609,inst_33610);
var state_33632__$1 = state_33632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33632__$1,(15),inst_33608,inst_33611);
} else {
if((state_val_33633 === (8))){
var inst_33593 = (state_33632[(2)]);
var inst_33594 = cljs.core.async.close_BANG_.call(null,initial_ch);
var inst_33567 = true;
var state_33632__$1 = (function (){var statearr_33660 = state_33632;
(statearr_33660[(15)] = inst_33593);

(statearr_33660[(16)] = inst_33594);

(statearr_33660[(7)] = inst_33567);

return statearr_33660;
})();
var statearr_33661_33694 = state_33632__$1;
(statearr_33661_33694[(2)] = null);

(statearr_33661_33694[(1)] = (2));


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
});})(c__30844__auto___33672,ws_chan,initial_ch,web_socket,map__33565,map__33565__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33560,map__33563,map__33563__$1,opts,read_ch,write_ch,format,ws_opts))
;
return ((function (switch__30786__auto__,c__30844__auto___33672,ws_chan,initial_ch,web_socket,map__33565,map__33565__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33560,map__33563,map__33563__$1,opts,read_ch,write_ch,format,ws_opts){
return (function() {
var chord$client$state_machine__30787__auto__ = null;
var chord$client$state_machine__30787__auto____0 = (function (){
var statearr_33665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33665[(0)] = chord$client$state_machine__30787__auto__);

(statearr_33665[(1)] = (1));

return statearr_33665;
});
var chord$client$state_machine__30787__auto____1 = (function (state_33632){
while(true){
var ret_value__30788__auto__ = (function (){try{while(true){
var result__30789__auto__ = switch__30786__auto__.call(null,state_33632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30789__auto__;
}
break;
}
}catch (e33666){if((e33666 instanceof Object)){
var ex__30790__auto__ = e33666;
var statearr_33667_33695 = state_33632;
(statearr_33667_33695[(5)] = ex__30790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33696 = state_33632;
state_33632 = G__33696;
continue;
} else {
return ret_value__30788__auto__;
}
break;
}
});
chord$client$state_machine__30787__auto__ = function(state_33632){
switch(arguments.length){
case 0:
return chord$client$state_machine__30787__auto____0.call(this);
case 1:
return chord$client$state_machine__30787__auto____1.call(this,state_33632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__30787__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__30787__auto____0;
chord$client$state_machine__30787__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__30787__auto____1;
return chord$client$state_machine__30787__auto__;
})()
;})(switch__30786__auto__,c__30844__auto___33672,ws_chan,initial_ch,web_socket,map__33565,map__33565__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33560,map__33563,map__33563__$1,opts,read_ch,write_ch,format,ws_opts))
})();
var state__30846__auto__ = (function (){var statearr_33668 = f__30845__auto__.call(null);
(statearr_33668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30844__auto___33672);

return statearr_33668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30846__auto__);
});})(c__30844__auto___33672,ws_chan,initial_ch,web_socket,map__33565,map__33565__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__33560,map__33563,map__33563__$1,opts,read_ch,write_ch,format,ws_opts))
);


return initial_ch;
});

chord.client.ws_ch.cljs$lang$maxFixedArity = (1);

chord.client.ws_ch.cljs$lang$applyTo = (function (seq33557){
var G__33558 = cljs.core.first.call(null,seq33557);
var seq33557__$1 = cljs.core.next.call(null,seq33557);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(G__33558,seq33557__$1);
});


//# sourceMappingURL=client.js.map?rel=1491914646445
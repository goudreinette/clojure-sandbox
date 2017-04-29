// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30633 = [];
var len__28223__auto___30639 = arguments.length;
var i__28224__auto___30640 = (0);
while(true){
if((i__28224__auto___30640 < len__28223__auto___30639)){
args30633.push((arguments[i__28224__auto___30640]));

var G__30641 = (i__28224__auto___30640 + (1));
i__28224__auto___30640 = G__30641;
continue;
} else {
}
break;
}

var G__30635 = args30633.length;
switch (G__30635) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30633.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30636 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30636 = (function (f,blockable,meta30637){
this.f = f;
this.blockable = blockable;
this.meta30637 = meta30637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30638,meta30637__$1){
var self__ = this;
var _30638__$1 = this;
return (new cljs.core.async.t_cljs$core$async30636(self__.f,self__.blockable,meta30637__$1));
});

cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30638){
var self__ = this;
var _30638__$1 = this;
return self__.meta30637;
});

cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30637","meta30637",-2049858785,null)], null);
});

cljs.core.async.t_cljs$core$async30636.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30636";

cljs.core.async.t_cljs$core$async30636.cljs$lang$ctorPrWriter = (function (this__27659__auto__,writer__27660__auto__,opt__27661__auto__){
return cljs.core._write.call(null,writer__27660__auto__,"cljs.core.async/t_cljs$core$async30636");
});

cljs.core.async.__GT_t_cljs$core$async30636 = (function cljs$core$async$__GT_t_cljs$core$async30636(f__$1,blockable__$1,meta30637){
return (new cljs.core.async.t_cljs$core$async30636(f__$1,blockable__$1,meta30637));
});

}

return (new cljs.core.async.t_cljs$core$async30636(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args30645 = [];
var len__28223__auto___30648 = arguments.length;
var i__28224__auto___30649 = (0);
while(true){
if((i__28224__auto___30649 < len__28223__auto___30648)){
args30645.push((arguments[i__28224__auto___30649]));

var G__30650 = (i__28224__auto___30649 + (1));
i__28224__auto___30649 = G__30650;
continue;
} else {
}
break;
}

var G__30647 = args30645.length;
switch (G__30647) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30645.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args30652 = [];
var len__28223__auto___30655 = arguments.length;
var i__28224__auto___30656 = (0);
while(true){
if((i__28224__auto___30656 < len__28223__auto___30655)){
args30652.push((arguments[i__28224__auto___30656]));

var G__30657 = (i__28224__auto___30656 + (1));
i__28224__auto___30656 = G__30657;
continue;
} else {
}
break;
}

var G__30654 = args30652.length;
switch (G__30654) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30652.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args30659 = [];
var len__28223__auto___30662 = arguments.length;
var i__28224__auto___30663 = (0);
while(true){
if((i__28224__auto___30663 < len__28223__auto___30662)){
args30659.push((arguments[i__28224__auto___30663]));

var G__30664 = (i__28224__auto___30663 + (1));
i__28224__auto___30663 = G__30664;
continue;
} else {
}
break;
}

var G__30661 = args30659.length;
switch (G__30661) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30659.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30666 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30666);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30666,ret){
return (function (){
return fn1.call(null,val_30666);
});})(val_30666,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30667 = [];
var len__28223__auto___30670 = arguments.length;
var i__28224__auto___30671 = (0);
while(true){
if((i__28224__auto___30671 < len__28223__auto___30670)){
args30667.push((arguments[i__28224__auto___30671]));

var G__30672 = (i__28224__auto___30671 + (1));
i__28224__auto___30671 = G__30672;
continue;
} else {
}
break;
}

var G__30669 = args30667.length;
switch (G__30669) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30667.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28023__auto___30674 = n;
var x_30675 = (0);
while(true){
if((x_30675 < n__28023__auto___30674)){
(a[x_30675] = (0));

var G__30676 = (x_30675 + (1));
x_30675 = G__30676;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30677 = (i + (1));
i = G__30677;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30681 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30681 = (function (flag,meta30682){
this.flag = flag;
this.meta30682 = meta30682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30683,meta30682__$1){
var self__ = this;
var _30683__$1 = this;
return (new cljs.core.async.t_cljs$core$async30681(self__.flag,meta30682__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30683){
var self__ = this;
var _30683__$1 = this;
return self__.meta30682;
});})(flag))
;

cljs.core.async.t_cljs$core$async30681.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30681.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30681.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30682","meta30682",-752406039,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30681";

cljs.core.async.t_cljs$core$async30681.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27659__auto__,writer__27660__auto__,opt__27661__auto__){
return cljs.core._write.call(null,writer__27660__auto__,"cljs.core.async/t_cljs$core$async30681");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30681 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30681(flag__$1,meta30682){
return (new cljs.core.async.t_cljs$core$async30681(flag__$1,meta30682));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30681(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30687 = (function (flag,cb,meta30688){
this.flag = flag;
this.cb = cb;
this.meta30688 = meta30688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30689,meta30688__$1){
var self__ = this;
var _30689__$1 = this;
return (new cljs.core.async.t_cljs$core$async30687(self__.flag,self__.cb,meta30688__$1));
});

cljs.core.async.t_cljs$core$async30687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30689){
var self__ = this;
var _30689__$1 = this;
return self__.meta30688;
});

cljs.core.async.t_cljs$core$async30687.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30687.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30688","meta30688",-736001228,null)], null);
});

cljs.core.async.t_cljs$core$async30687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30687";

cljs.core.async.t_cljs$core$async30687.cljs$lang$ctorPrWriter = (function (this__27659__auto__,writer__27660__auto__,opt__27661__auto__){
return cljs.core._write.call(null,writer__27660__auto__,"cljs.core.async/t_cljs$core$async30687");
});

cljs.core.async.__GT_t_cljs$core$async30687 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30687(flag__$1,cb__$1,meta30688){
return (new cljs.core.async.t_cljs$core$async30687(flag__$1,cb__$1,meta30688));
});

}

return (new cljs.core.async.t_cljs$core$async30687(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30690_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30690_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30691_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30691_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27002__auto__ = wport;
if(cljs.core.truth_(or__27002__auto__)){
return or__27002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30692 = (i + (1));
i = G__30692;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27002__auto__ = ret;
if(cljs.core.truth_(or__27002__auto__)){
return or__27002__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__26990__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26990__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26990__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__28230__auto__ = [];
var len__28223__auto___30698 = arguments.length;
var i__28224__auto___30699 = (0);
while(true){
if((i__28224__auto___30699 < len__28223__auto___30698)){
args__28230__auto__.push((arguments[i__28224__auto___30699]));

var G__30700 = (i__28224__auto___30699 + (1));
i__28224__auto___30699 = G__30700;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((1) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28231__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30695){
var map__30696 = p__30695;
var map__30696__$1 = ((((!((map__30696 == null)))?((((map__30696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30696):map__30696);
var opts = map__30696__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30693){
var G__30694 = cljs.core.first.call(null,seq30693);
var seq30693__$1 = cljs.core.next.call(null,seq30693);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30694,seq30693__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30701 = [];
var len__28223__auto___30751 = arguments.length;
var i__28224__auto___30752 = (0);
while(true){
if((i__28224__auto___30752 < len__28223__auto___30751)){
args30701.push((arguments[i__28224__auto___30752]));

var G__30753 = (i__28224__auto___30752 + (1));
i__28224__auto___30752 = G__30753;
continue;
} else {
}
break;
}

var G__30703 = args30701.length;
switch (G__30703) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30701.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30574__auto___30755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___30755){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___30755){
return (function (state_30727){
var state_val_30728 = (state_30727[(1)]);
if((state_val_30728 === (7))){
var inst_30723 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30729_30756 = state_30727__$1;
(statearr_30729_30756[(2)] = inst_30723);

(statearr_30729_30756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (1))){
var state_30727__$1 = state_30727;
var statearr_30730_30757 = state_30727__$1;
(statearr_30730_30757[(2)] = null);

(statearr_30730_30757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (4))){
var inst_30706 = (state_30727[(7)]);
var inst_30706__$1 = (state_30727[(2)]);
var inst_30707 = (inst_30706__$1 == null);
var state_30727__$1 = (function (){var statearr_30731 = state_30727;
(statearr_30731[(7)] = inst_30706__$1);

return statearr_30731;
})();
if(cljs.core.truth_(inst_30707)){
var statearr_30732_30758 = state_30727__$1;
(statearr_30732_30758[(1)] = (5));

} else {
var statearr_30733_30759 = state_30727__$1;
(statearr_30733_30759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (13))){
var state_30727__$1 = state_30727;
var statearr_30734_30760 = state_30727__$1;
(statearr_30734_30760[(2)] = null);

(statearr_30734_30760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (6))){
var inst_30706 = (state_30727[(7)]);
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30727__$1,(11),to,inst_30706);
} else {
if((state_val_30728 === (3))){
var inst_30725 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30727__$1,inst_30725);
} else {
if((state_val_30728 === (12))){
var state_30727__$1 = state_30727;
var statearr_30735_30761 = state_30727__$1;
(statearr_30735_30761[(2)] = null);

(statearr_30735_30761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (2))){
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30727__$1,(4),from);
} else {
if((state_val_30728 === (11))){
var inst_30716 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
if(cljs.core.truth_(inst_30716)){
var statearr_30736_30762 = state_30727__$1;
(statearr_30736_30762[(1)] = (12));

} else {
var statearr_30737_30763 = state_30727__$1;
(statearr_30737_30763[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (9))){
var state_30727__$1 = state_30727;
var statearr_30738_30764 = state_30727__$1;
(statearr_30738_30764[(2)] = null);

(statearr_30738_30764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (5))){
var state_30727__$1 = state_30727;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30739_30765 = state_30727__$1;
(statearr_30739_30765[(1)] = (8));

} else {
var statearr_30740_30766 = state_30727__$1;
(statearr_30740_30766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (14))){
var inst_30721 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30741_30767 = state_30727__$1;
(statearr_30741_30767[(2)] = inst_30721);

(statearr_30741_30767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (10))){
var inst_30713 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30742_30768 = state_30727__$1;
(statearr_30742_30768[(2)] = inst_30713);

(statearr_30742_30768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (8))){
var inst_30710 = cljs.core.async.close_BANG_.call(null,to);
var state_30727__$1 = state_30727;
var statearr_30743_30769 = state_30727__$1;
(statearr_30743_30769[(2)] = inst_30710);

(statearr_30743_30769[(1)] = (10));


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
});})(c__30574__auto___30755))
;
return ((function (switch__30460__auto__,c__30574__auto___30755){
return (function() {
var cljs$core$async$state_machine__30461__auto__ = null;
var cljs$core$async$state_machine__30461__auto____0 = (function (){
var statearr_30747 = [null,null,null,null,null,null,null,null];
(statearr_30747[(0)] = cljs$core$async$state_machine__30461__auto__);

(statearr_30747[(1)] = (1));

return statearr_30747;
});
var cljs$core$async$state_machine__30461__auto____1 = (function (state_30727){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_30727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e30748){if((e30748 instanceof Object)){
var ex__30464__auto__ = e30748;
var statearr_30749_30770 = state_30727;
(statearr_30749_30770[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30771 = state_30727;
state_30727 = G__30771;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$state_machine__30461__auto__ = function(state_30727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30461__auto____1.call(this,state_30727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30461__auto____0;
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30461__auto____1;
return cljs$core$async$state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___30755))
})();
var state__30576__auto__ = (function (){var statearr_30750 = f__30575__auto__.call(null);
(statearr_30750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___30755);

return statearr_30750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___30755))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30959){
var vec__30960 = p__30959;
var v = cljs.core.nth.call(null,vec__30960,(0),null);
var p = cljs.core.nth.call(null,vec__30960,(1),null);
var job = vec__30960;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30574__auto___31146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___31146,res,vec__30960,v,p,job,jobs,results){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___31146,res,vec__30960,v,p,job,jobs,results){
return (function (state_30967){
var state_val_30968 = (state_30967[(1)]);
if((state_val_30968 === (1))){
var state_30967__$1 = state_30967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30967__$1,(2),res,v);
} else {
if((state_val_30968 === (2))){
var inst_30964 = (state_30967[(2)]);
var inst_30965 = cljs.core.async.close_BANG_.call(null,res);
var state_30967__$1 = (function (){var statearr_30969 = state_30967;
(statearr_30969[(7)] = inst_30964);

return statearr_30969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30967__$1,inst_30965);
} else {
return null;
}
}
});})(c__30574__auto___31146,res,vec__30960,v,p,job,jobs,results))
;
return ((function (switch__30460__auto__,c__30574__auto___31146,res,vec__30960,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____0 = (function (){
var statearr_30973 = [null,null,null,null,null,null,null,null];
(statearr_30973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__);

(statearr_30973[(1)] = (1));

return statearr_30973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____1 = (function (state_30967){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_30967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e30974){if((e30974 instanceof Object)){
var ex__30464__auto__ = e30974;
var statearr_30975_31147 = state_30967;
(statearr_30975_31147[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31148 = state_30967;
state_30967 = G__31148;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__ = function(state_30967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____1.call(this,state_30967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___31146,res,vec__30960,v,p,job,jobs,results))
})();
var state__30576__auto__ = (function (){var statearr_30976 = f__30575__auto__.call(null);
(statearr_30976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___31146);

return statearr_30976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___31146,res,vec__30960,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30977){
var vec__30978 = p__30977;
var v = cljs.core.nth.call(null,vec__30978,(0),null);
var p = cljs.core.nth.call(null,vec__30978,(1),null);
var job = vec__30978;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28023__auto___31149 = n;
var __31150 = (0);
while(true){
if((__31150 < n__28023__auto___31149)){
var G__30981_31151 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30981_31151) {
case "compute":
var c__30574__auto___31153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31150,c__30574__auto___31153,G__30981_31151,n__28023__auto___31149,jobs,results,process,async){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (__31150,c__30574__auto___31153,G__30981_31151,n__28023__auto___31149,jobs,results,process,async){
return (function (state_30994){
var state_val_30995 = (state_30994[(1)]);
if((state_val_30995 === (1))){
var state_30994__$1 = state_30994;
var statearr_30996_31154 = state_30994__$1;
(statearr_30996_31154[(2)] = null);

(statearr_30996_31154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (2))){
var state_30994__$1 = state_30994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30994__$1,(4),jobs);
} else {
if((state_val_30995 === (3))){
var inst_30992 = (state_30994[(2)]);
var state_30994__$1 = state_30994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30994__$1,inst_30992);
} else {
if((state_val_30995 === (4))){
var inst_30984 = (state_30994[(2)]);
var inst_30985 = process.call(null,inst_30984);
var state_30994__$1 = state_30994;
if(cljs.core.truth_(inst_30985)){
var statearr_30997_31155 = state_30994__$1;
(statearr_30997_31155[(1)] = (5));

} else {
var statearr_30998_31156 = state_30994__$1;
(statearr_30998_31156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (5))){
var state_30994__$1 = state_30994;
var statearr_30999_31157 = state_30994__$1;
(statearr_30999_31157[(2)] = null);

(statearr_30999_31157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (6))){
var state_30994__$1 = state_30994;
var statearr_31000_31158 = state_30994__$1;
(statearr_31000_31158[(2)] = null);

(statearr_31000_31158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (7))){
var inst_30990 = (state_30994[(2)]);
var state_30994__$1 = state_30994;
var statearr_31001_31159 = state_30994__$1;
(statearr_31001_31159[(2)] = inst_30990);

(statearr_31001_31159[(1)] = (3));


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
});})(__31150,c__30574__auto___31153,G__30981_31151,n__28023__auto___31149,jobs,results,process,async))
;
return ((function (__31150,switch__30460__auto__,c__30574__auto___31153,G__30981_31151,n__28023__auto___31149,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____0 = (function (){
var statearr_31005 = [null,null,null,null,null,null,null];
(statearr_31005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__);

(statearr_31005[(1)] = (1));

return statearr_31005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____1 = (function (state_30994){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_30994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e31006){if((e31006 instanceof Object)){
var ex__30464__auto__ = e31006;
var statearr_31007_31160 = state_30994;
(statearr_31007_31160[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31161 = state_30994;
state_30994 = G__31161;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__ = function(state_30994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____1.call(this,state_30994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__;
})()
;})(__31150,switch__30460__auto__,c__30574__auto___31153,G__30981_31151,n__28023__auto___31149,jobs,results,process,async))
})();
var state__30576__auto__ = (function (){var statearr_31008 = f__30575__auto__.call(null);
(statearr_31008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___31153);

return statearr_31008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(__31150,c__30574__auto___31153,G__30981_31151,n__28023__auto___31149,jobs,results,process,async))
);


break;
case "async":
var c__30574__auto___31162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31150,c__30574__auto___31162,G__30981_31151,n__28023__auto___31149,jobs,results,process,async){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (__31150,c__30574__auto___31162,G__30981_31151,n__28023__auto___31149,jobs,results,process,async){
return (function (state_31021){
var state_val_31022 = (state_31021[(1)]);
if((state_val_31022 === (1))){
var state_31021__$1 = state_31021;
var statearr_31023_31163 = state_31021__$1;
(statearr_31023_31163[(2)] = null);

(statearr_31023_31163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31022 === (2))){
var state_31021__$1 = state_31021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31021__$1,(4),jobs);
} else {
if((state_val_31022 === (3))){
var inst_31019 = (state_31021[(2)]);
var state_31021__$1 = state_31021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31021__$1,inst_31019);
} else {
if((state_val_31022 === (4))){
var inst_31011 = (state_31021[(2)]);
var inst_31012 = async.call(null,inst_31011);
var state_31021__$1 = state_31021;
if(cljs.core.truth_(inst_31012)){
var statearr_31024_31164 = state_31021__$1;
(statearr_31024_31164[(1)] = (5));

} else {
var statearr_31025_31165 = state_31021__$1;
(statearr_31025_31165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31022 === (5))){
var state_31021__$1 = state_31021;
var statearr_31026_31166 = state_31021__$1;
(statearr_31026_31166[(2)] = null);

(statearr_31026_31166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31022 === (6))){
var state_31021__$1 = state_31021;
var statearr_31027_31167 = state_31021__$1;
(statearr_31027_31167[(2)] = null);

(statearr_31027_31167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31022 === (7))){
var inst_31017 = (state_31021[(2)]);
var state_31021__$1 = state_31021;
var statearr_31028_31168 = state_31021__$1;
(statearr_31028_31168[(2)] = inst_31017);

(statearr_31028_31168[(1)] = (3));


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
});})(__31150,c__30574__auto___31162,G__30981_31151,n__28023__auto___31149,jobs,results,process,async))
;
return ((function (__31150,switch__30460__auto__,c__30574__auto___31162,G__30981_31151,n__28023__auto___31149,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____0 = (function (){
var statearr_31032 = [null,null,null,null,null,null,null];
(statearr_31032[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__);

(statearr_31032[(1)] = (1));

return statearr_31032;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____1 = (function (state_31021){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_31021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e31033){if((e31033 instanceof Object)){
var ex__30464__auto__ = e31033;
var statearr_31034_31169 = state_31021;
(statearr_31034_31169[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31170 = state_31021;
state_31021 = G__31170;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__ = function(state_31021){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____1.call(this,state_31021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__;
})()
;})(__31150,switch__30460__auto__,c__30574__auto___31162,G__30981_31151,n__28023__auto___31149,jobs,results,process,async))
})();
var state__30576__auto__ = (function (){var statearr_31035 = f__30575__auto__.call(null);
(statearr_31035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___31162);

return statearr_31035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(__31150,c__30574__auto___31162,G__30981_31151,n__28023__auto___31149,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__31171 = (__31150 + (1));
__31150 = G__31171;
continue;
} else {
}
break;
}

var c__30574__auto___31172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___31172,jobs,results,process,async){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___31172,jobs,results,process,async){
return (function (state_31057){
var state_val_31058 = (state_31057[(1)]);
if((state_val_31058 === (1))){
var state_31057__$1 = state_31057;
var statearr_31059_31173 = state_31057__$1;
(statearr_31059_31173[(2)] = null);

(statearr_31059_31173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (2))){
var state_31057__$1 = state_31057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31057__$1,(4),from);
} else {
if((state_val_31058 === (3))){
var inst_31055 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31057__$1,inst_31055);
} else {
if((state_val_31058 === (4))){
var inst_31038 = (state_31057[(7)]);
var inst_31038__$1 = (state_31057[(2)]);
var inst_31039 = (inst_31038__$1 == null);
var state_31057__$1 = (function (){var statearr_31060 = state_31057;
(statearr_31060[(7)] = inst_31038__$1);

return statearr_31060;
})();
if(cljs.core.truth_(inst_31039)){
var statearr_31061_31174 = state_31057__$1;
(statearr_31061_31174[(1)] = (5));

} else {
var statearr_31062_31175 = state_31057__$1;
(statearr_31062_31175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (5))){
var inst_31041 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31057__$1 = state_31057;
var statearr_31063_31176 = state_31057__$1;
(statearr_31063_31176[(2)] = inst_31041);

(statearr_31063_31176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (6))){
var inst_31043 = (state_31057[(8)]);
var inst_31038 = (state_31057[(7)]);
var inst_31043__$1 = cljs.core.async.chan.call(null,(1));
var inst_31044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31045 = [inst_31038,inst_31043__$1];
var inst_31046 = (new cljs.core.PersistentVector(null,2,(5),inst_31044,inst_31045,null));
var state_31057__$1 = (function (){var statearr_31064 = state_31057;
(statearr_31064[(8)] = inst_31043__$1);

return statearr_31064;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31057__$1,(8),jobs,inst_31046);
} else {
if((state_val_31058 === (7))){
var inst_31053 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
var statearr_31065_31177 = state_31057__$1;
(statearr_31065_31177[(2)] = inst_31053);

(statearr_31065_31177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (8))){
var inst_31043 = (state_31057[(8)]);
var inst_31048 = (state_31057[(2)]);
var state_31057__$1 = (function (){var statearr_31066 = state_31057;
(statearr_31066[(9)] = inst_31048);

return statearr_31066;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31057__$1,(9),results,inst_31043);
} else {
if((state_val_31058 === (9))){
var inst_31050 = (state_31057[(2)]);
var state_31057__$1 = (function (){var statearr_31067 = state_31057;
(statearr_31067[(10)] = inst_31050);

return statearr_31067;
})();
var statearr_31068_31178 = state_31057__$1;
(statearr_31068_31178[(2)] = null);

(statearr_31068_31178[(1)] = (2));


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
});})(c__30574__auto___31172,jobs,results,process,async))
;
return ((function (switch__30460__auto__,c__30574__auto___31172,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____0 = (function (){
var statearr_31072 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__);

(statearr_31072[(1)] = (1));

return statearr_31072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____1 = (function (state_31057){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_31057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e31073){if((e31073 instanceof Object)){
var ex__30464__auto__ = e31073;
var statearr_31074_31179 = state_31057;
(statearr_31074_31179[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31180 = state_31057;
state_31057 = G__31180;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__ = function(state_31057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____1.call(this,state_31057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___31172,jobs,results,process,async))
})();
var state__30576__auto__ = (function (){var statearr_31075 = f__30575__auto__.call(null);
(statearr_31075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___31172);

return statearr_31075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___31172,jobs,results,process,async))
);


var c__30574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto__,jobs,results,process,async){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto__,jobs,results,process,async){
return (function (state_31113){
var state_val_31114 = (state_31113[(1)]);
if((state_val_31114 === (7))){
var inst_31109 = (state_31113[(2)]);
var state_31113__$1 = state_31113;
var statearr_31115_31181 = state_31113__$1;
(statearr_31115_31181[(2)] = inst_31109);

(statearr_31115_31181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (20))){
var state_31113__$1 = state_31113;
var statearr_31116_31182 = state_31113__$1;
(statearr_31116_31182[(2)] = null);

(statearr_31116_31182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (1))){
var state_31113__$1 = state_31113;
var statearr_31117_31183 = state_31113__$1;
(statearr_31117_31183[(2)] = null);

(statearr_31117_31183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (4))){
var inst_31078 = (state_31113[(7)]);
var inst_31078__$1 = (state_31113[(2)]);
var inst_31079 = (inst_31078__$1 == null);
var state_31113__$1 = (function (){var statearr_31118 = state_31113;
(statearr_31118[(7)] = inst_31078__$1);

return statearr_31118;
})();
if(cljs.core.truth_(inst_31079)){
var statearr_31119_31184 = state_31113__$1;
(statearr_31119_31184[(1)] = (5));

} else {
var statearr_31120_31185 = state_31113__$1;
(statearr_31120_31185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (15))){
var inst_31091 = (state_31113[(8)]);
var state_31113__$1 = state_31113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31113__$1,(18),to,inst_31091);
} else {
if((state_val_31114 === (21))){
var inst_31104 = (state_31113[(2)]);
var state_31113__$1 = state_31113;
var statearr_31121_31186 = state_31113__$1;
(statearr_31121_31186[(2)] = inst_31104);

(statearr_31121_31186[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (13))){
var inst_31106 = (state_31113[(2)]);
var state_31113__$1 = (function (){var statearr_31122 = state_31113;
(statearr_31122[(9)] = inst_31106);

return statearr_31122;
})();
var statearr_31123_31187 = state_31113__$1;
(statearr_31123_31187[(2)] = null);

(statearr_31123_31187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (6))){
var inst_31078 = (state_31113[(7)]);
var state_31113__$1 = state_31113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31113__$1,(11),inst_31078);
} else {
if((state_val_31114 === (17))){
var inst_31099 = (state_31113[(2)]);
var state_31113__$1 = state_31113;
if(cljs.core.truth_(inst_31099)){
var statearr_31124_31188 = state_31113__$1;
(statearr_31124_31188[(1)] = (19));

} else {
var statearr_31125_31189 = state_31113__$1;
(statearr_31125_31189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (3))){
var inst_31111 = (state_31113[(2)]);
var state_31113__$1 = state_31113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31113__$1,inst_31111);
} else {
if((state_val_31114 === (12))){
var inst_31088 = (state_31113[(10)]);
var state_31113__$1 = state_31113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31113__$1,(14),inst_31088);
} else {
if((state_val_31114 === (2))){
var state_31113__$1 = state_31113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31113__$1,(4),results);
} else {
if((state_val_31114 === (19))){
var state_31113__$1 = state_31113;
var statearr_31126_31190 = state_31113__$1;
(statearr_31126_31190[(2)] = null);

(statearr_31126_31190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (11))){
var inst_31088 = (state_31113[(2)]);
var state_31113__$1 = (function (){var statearr_31127 = state_31113;
(statearr_31127[(10)] = inst_31088);

return statearr_31127;
})();
var statearr_31128_31191 = state_31113__$1;
(statearr_31128_31191[(2)] = null);

(statearr_31128_31191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (9))){
var state_31113__$1 = state_31113;
var statearr_31129_31192 = state_31113__$1;
(statearr_31129_31192[(2)] = null);

(statearr_31129_31192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (5))){
var state_31113__$1 = state_31113;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31130_31193 = state_31113__$1;
(statearr_31130_31193[(1)] = (8));

} else {
var statearr_31131_31194 = state_31113__$1;
(statearr_31131_31194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (14))){
var inst_31091 = (state_31113[(8)]);
var inst_31093 = (state_31113[(11)]);
var inst_31091__$1 = (state_31113[(2)]);
var inst_31092 = (inst_31091__$1 == null);
var inst_31093__$1 = cljs.core.not.call(null,inst_31092);
var state_31113__$1 = (function (){var statearr_31132 = state_31113;
(statearr_31132[(8)] = inst_31091__$1);

(statearr_31132[(11)] = inst_31093__$1);

return statearr_31132;
})();
if(inst_31093__$1){
var statearr_31133_31195 = state_31113__$1;
(statearr_31133_31195[(1)] = (15));

} else {
var statearr_31134_31196 = state_31113__$1;
(statearr_31134_31196[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (16))){
var inst_31093 = (state_31113[(11)]);
var state_31113__$1 = state_31113;
var statearr_31135_31197 = state_31113__$1;
(statearr_31135_31197[(2)] = inst_31093);

(statearr_31135_31197[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (10))){
var inst_31085 = (state_31113[(2)]);
var state_31113__$1 = state_31113;
var statearr_31136_31198 = state_31113__$1;
(statearr_31136_31198[(2)] = inst_31085);

(statearr_31136_31198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (18))){
var inst_31096 = (state_31113[(2)]);
var state_31113__$1 = state_31113;
var statearr_31137_31199 = state_31113__$1;
(statearr_31137_31199[(2)] = inst_31096);

(statearr_31137_31199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (8))){
var inst_31082 = cljs.core.async.close_BANG_.call(null,to);
var state_31113__$1 = state_31113;
var statearr_31138_31200 = state_31113__$1;
(statearr_31138_31200[(2)] = inst_31082);

(statearr_31138_31200[(1)] = (10));


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
});})(c__30574__auto__,jobs,results,process,async))
;
return ((function (switch__30460__auto__,c__30574__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____0 = (function (){
var statearr_31142 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__);

(statearr_31142[(1)] = (1));

return statearr_31142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____1 = (function (state_31113){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_31113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e31143){if((e31143 instanceof Object)){
var ex__30464__auto__ = e31143;
var statearr_31144_31201 = state_31113;
(statearr_31144_31201[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31202 = state_31113;
state_31113 = G__31202;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__ = function(state_31113){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____1.call(this,state_31113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto__,jobs,results,process,async))
})();
var state__30576__auto__ = (function (){var statearr_31145 = f__30575__auto__.call(null);
(statearr_31145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto__);

return statearr_31145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto__,jobs,results,process,async))
);

return c__30574__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args31203 = [];
var len__28223__auto___31206 = arguments.length;
var i__28224__auto___31207 = (0);
while(true){
if((i__28224__auto___31207 < len__28223__auto___31206)){
args31203.push((arguments[i__28224__auto___31207]));

var G__31208 = (i__28224__auto___31207 + (1));
i__28224__auto___31207 = G__31208;
continue;
} else {
}
break;
}

var G__31205 = args31203.length;
switch (G__31205) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31203.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args31210 = [];
var len__28223__auto___31213 = arguments.length;
var i__28224__auto___31214 = (0);
while(true){
if((i__28224__auto___31214 < len__28223__auto___31213)){
args31210.push((arguments[i__28224__auto___31214]));

var G__31215 = (i__28224__auto___31214 + (1));
i__28224__auto___31214 = G__31215;
continue;
} else {
}
break;
}

var G__31212 = args31210.length;
switch (G__31212) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31210.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args31217 = [];
var len__28223__auto___31270 = arguments.length;
var i__28224__auto___31271 = (0);
while(true){
if((i__28224__auto___31271 < len__28223__auto___31270)){
args31217.push((arguments[i__28224__auto___31271]));

var G__31272 = (i__28224__auto___31271 + (1));
i__28224__auto___31271 = G__31272;
continue;
} else {
}
break;
}

var G__31219 = args31217.length;
switch (G__31219) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31217.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30574__auto___31274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___31274,tc,fc){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___31274,tc,fc){
return (function (state_31245){
var state_val_31246 = (state_31245[(1)]);
if((state_val_31246 === (7))){
var inst_31241 = (state_31245[(2)]);
var state_31245__$1 = state_31245;
var statearr_31247_31275 = state_31245__$1;
(statearr_31247_31275[(2)] = inst_31241);

(statearr_31247_31275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (1))){
var state_31245__$1 = state_31245;
var statearr_31248_31276 = state_31245__$1;
(statearr_31248_31276[(2)] = null);

(statearr_31248_31276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (4))){
var inst_31222 = (state_31245[(7)]);
var inst_31222__$1 = (state_31245[(2)]);
var inst_31223 = (inst_31222__$1 == null);
var state_31245__$1 = (function (){var statearr_31249 = state_31245;
(statearr_31249[(7)] = inst_31222__$1);

return statearr_31249;
})();
if(cljs.core.truth_(inst_31223)){
var statearr_31250_31277 = state_31245__$1;
(statearr_31250_31277[(1)] = (5));

} else {
var statearr_31251_31278 = state_31245__$1;
(statearr_31251_31278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (13))){
var state_31245__$1 = state_31245;
var statearr_31252_31279 = state_31245__$1;
(statearr_31252_31279[(2)] = null);

(statearr_31252_31279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (6))){
var inst_31222 = (state_31245[(7)]);
var inst_31228 = p.call(null,inst_31222);
var state_31245__$1 = state_31245;
if(cljs.core.truth_(inst_31228)){
var statearr_31253_31280 = state_31245__$1;
(statearr_31253_31280[(1)] = (9));

} else {
var statearr_31254_31281 = state_31245__$1;
(statearr_31254_31281[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (3))){
var inst_31243 = (state_31245[(2)]);
var state_31245__$1 = state_31245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31245__$1,inst_31243);
} else {
if((state_val_31246 === (12))){
var state_31245__$1 = state_31245;
var statearr_31255_31282 = state_31245__$1;
(statearr_31255_31282[(2)] = null);

(statearr_31255_31282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (2))){
var state_31245__$1 = state_31245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31245__$1,(4),ch);
} else {
if((state_val_31246 === (11))){
var inst_31222 = (state_31245[(7)]);
var inst_31232 = (state_31245[(2)]);
var state_31245__$1 = state_31245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31245__$1,(8),inst_31232,inst_31222);
} else {
if((state_val_31246 === (9))){
var state_31245__$1 = state_31245;
var statearr_31256_31283 = state_31245__$1;
(statearr_31256_31283[(2)] = tc);

(statearr_31256_31283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (5))){
var inst_31225 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31226 = cljs.core.async.close_BANG_.call(null,fc);
var state_31245__$1 = (function (){var statearr_31257 = state_31245;
(statearr_31257[(8)] = inst_31225);

return statearr_31257;
})();
var statearr_31258_31284 = state_31245__$1;
(statearr_31258_31284[(2)] = inst_31226);

(statearr_31258_31284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (14))){
var inst_31239 = (state_31245[(2)]);
var state_31245__$1 = state_31245;
var statearr_31259_31285 = state_31245__$1;
(statearr_31259_31285[(2)] = inst_31239);

(statearr_31259_31285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (10))){
var state_31245__$1 = state_31245;
var statearr_31260_31286 = state_31245__$1;
(statearr_31260_31286[(2)] = fc);

(statearr_31260_31286[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (8))){
var inst_31234 = (state_31245[(2)]);
var state_31245__$1 = state_31245;
if(cljs.core.truth_(inst_31234)){
var statearr_31261_31287 = state_31245__$1;
(statearr_31261_31287[(1)] = (12));

} else {
var statearr_31262_31288 = state_31245__$1;
(statearr_31262_31288[(1)] = (13));

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
});})(c__30574__auto___31274,tc,fc))
;
return ((function (switch__30460__auto__,c__30574__auto___31274,tc,fc){
return (function() {
var cljs$core$async$state_machine__30461__auto__ = null;
var cljs$core$async$state_machine__30461__auto____0 = (function (){
var statearr_31266 = [null,null,null,null,null,null,null,null,null];
(statearr_31266[(0)] = cljs$core$async$state_machine__30461__auto__);

(statearr_31266[(1)] = (1));

return statearr_31266;
});
var cljs$core$async$state_machine__30461__auto____1 = (function (state_31245){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_31245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e31267){if((e31267 instanceof Object)){
var ex__30464__auto__ = e31267;
var statearr_31268_31289 = state_31245;
(statearr_31268_31289[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31290 = state_31245;
state_31245 = G__31290;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$state_machine__30461__auto__ = function(state_31245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30461__auto____1.call(this,state_31245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30461__auto____0;
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30461__auto____1;
return cljs$core$async$state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___31274,tc,fc))
})();
var state__30576__auto__ = (function (){var statearr_31269 = f__30575__auto__.call(null);
(statearr_31269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___31274);

return statearr_31269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___31274,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto__){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto__){
return (function (state_31354){
var state_val_31355 = (state_31354[(1)]);
if((state_val_31355 === (7))){
var inst_31350 = (state_31354[(2)]);
var state_31354__$1 = state_31354;
var statearr_31356_31377 = state_31354__$1;
(statearr_31356_31377[(2)] = inst_31350);

(statearr_31356_31377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31355 === (1))){
var inst_31334 = init;
var state_31354__$1 = (function (){var statearr_31357 = state_31354;
(statearr_31357[(7)] = inst_31334);

return statearr_31357;
})();
var statearr_31358_31378 = state_31354__$1;
(statearr_31358_31378[(2)] = null);

(statearr_31358_31378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31355 === (4))){
var inst_31337 = (state_31354[(8)]);
var inst_31337__$1 = (state_31354[(2)]);
var inst_31338 = (inst_31337__$1 == null);
var state_31354__$1 = (function (){var statearr_31359 = state_31354;
(statearr_31359[(8)] = inst_31337__$1);

return statearr_31359;
})();
if(cljs.core.truth_(inst_31338)){
var statearr_31360_31379 = state_31354__$1;
(statearr_31360_31379[(1)] = (5));

} else {
var statearr_31361_31380 = state_31354__$1;
(statearr_31361_31380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31355 === (6))){
var inst_31334 = (state_31354[(7)]);
var inst_31341 = (state_31354[(9)]);
var inst_31337 = (state_31354[(8)]);
var inst_31341__$1 = f.call(null,inst_31334,inst_31337);
var inst_31342 = cljs.core.reduced_QMARK_.call(null,inst_31341__$1);
var state_31354__$1 = (function (){var statearr_31362 = state_31354;
(statearr_31362[(9)] = inst_31341__$1);

return statearr_31362;
})();
if(inst_31342){
var statearr_31363_31381 = state_31354__$1;
(statearr_31363_31381[(1)] = (8));

} else {
var statearr_31364_31382 = state_31354__$1;
(statearr_31364_31382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31355 === (3))){
var inst_31352 = (state_31354[(2)]);
var state_31354__$1 = state_31354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31354__$1,inst_31352);
} else {
if((state_val_31355 === (2))){
var state_31354__$1 = state_31354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31354__$1,(4),ch);
} else {
if((state_val_31355 === (9))){
var inst_31341 = (state_31354[(9)]);
var inst_31334 = inst_31341;
var state_31354__$1 = (function (){var statearr_31365 = state_31354;
(statearr_31365[(7)] = inst_31334);

return statearr_31365;
})();
var statearr_31366_31383 = state_31354__$1;
(statearr_31366_31383[(2)] = null);

(statearr_31366_31383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31355 === (5))){
var inst_31334 = (state_31354[(7)]);
var state_31354__$1 = state_31354;
var statearr_31367_31384 = state_31354__$1;
(statearr_31367_31384[(2)] = inst_31334);

(statearr_31367_31384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31355 === (10))){
var inst_31348 = (state_31354[(2)]);
var state_31354__$1 = state_31354;
var statearr_31368_31385 = state_31354__$1;
(statearr_31368_31385[(2)] = inst_31348);

(statearr_31368_31385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31355 === (8))){
var inst_31341 = (state_31354[(9)]);
var inst_31344 = cljs.core.deref.call(null,inst_31341);
var state_31354__$1 = state_31354;
var statearr_31369_31386 = state_31354__$1;
(statearr_31369_31386[(2)] = inst_31344);

(statearr_31369_31386[(1)] = (10));


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
});})(c__30574__auto__))
;
return ((function (switch__30460__auto__,c__30574__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30461__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30461__auto____0 = (function (){
var statearr_31373 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31373[(0)] = cljs$core$async$reduce_$_state_machine__30461__auto__);

(statearr_31373[(1)] = (1));

return statearr_31373;
});
var cljs$core$async$reduce_$_state_machine__30461__auto____1 = (function (state_31354){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_31354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e31374){if((e31374 instanceof Object)){
var ex__30464__auto__ = e31374;
var statearr_31375_31387 = state_31354;
(statearr_31375_31387[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31388 = state_31354;
state_31354 = G__31388;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30461__auto__ = function(state_31354){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30461__auto____1.call(this,state_31354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30461__auto____0;
cljs$core$async$reduce_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30461__auto____1;
return cljs$core$async$reduce_$_state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto__))
})();
var state__30576__auto__ = (function (){var statearr_31376 = f__30575__auto__.call(null);
(statearr_31376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto__);

return statearr_31376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto__))
);

return c__30574__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto__,f__$1){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto__,f__$1){
return (function (state_31408){
var state_val_31409 = (state_31408[(1)]);
if((state_val_31409 === (1))){
var inst_31403 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31408__$1,(2),inst_31403);
} else {
if((state_val_31409 === (2))){
var inst_31405 = (state_31408[(2)]);
var inst_31406 = f__$1.call(null,inst_31405);
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31408__$1,inst_31406);
} else {
return null;
}
}
});})(c__30574__auto__,f__$1))
;
return ((function (switch__30460__auto__,c__30574__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30461__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30461__auto____0 = (function (){
var statearr_31413 = [null,null,null,null,null,null,null];
(statearr_31413[(0)] = cljs$core$async$transduce_$_state_machine__30461__auto__);

(statearr_31413[(1)] = (1));

return statearr_31413;
});
var cljs$core$async$transduce_$_state_machine__30461__auto____1 = (function (state_31408){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_31408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e31414){if((e31414 instanceof Object)){
var ex__30464__auto__ = e31414;
var statearr_31415_31417 = state_31408;
(statearr_31415_31417[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31418 = state_31408;
state_31408 = G__31418;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30461__auto__ = function(state_31408){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30461__auto____1.call(this,state_31408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30461__auto____0;
cljs$core$async$transduce_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30461__auto____1;
return cljs$core$async$transduce_$_state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto__,f__$1))
})();
var state__30576__auto__ = (function (){var statearr_31416 = f__30575__auto__.call(null);
(statearr_31416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto__);

return statearr_31416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto__,f__$1))
);

return c__30574__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args31419 = [];
var len__28223__auto___31471 = arguments.length;
var i__28224__auto___31472 = (0);
while(true){
if((i__28224__auto___31472 < len__28223__auto___31471)){
args31419.push((arguments[i__28224__auto___31472]));

var G__31473 = (i__28224__auto___31472 + (1));
i__28224__auto___31472 = G__31473;
continue;
} else {
}
break;
}

var G__31421 = args31419.length;
switch (G__31421) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31419.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto__){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto__){
return (function (state_31446){
var state_val_31447 = (state_31446[(1)]);
if((state_val_31447 === (7))){
var inst_31428 = (state_31446[(2)]);
var state_31446__$1 = state_31446;
var statearr_31448_31475 = state_31446__$1;
(statearr_31448_31475[(2)] = inst_31428);

(statearr_31448_31475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (1))){
var inst_31422 = cljs.core.seq.call(null,coll);
var inst_31423 = inst_31422;
var state_31446__$1 = (function (){var statearr_31449 = state_31446;
(statearr_31449[(7)] = inst_31423);

return statearr_31449;
})();
var statearr_31450_31476 = state_31446__$1;
(statearr_31450_31476[(2)] = null);

(statearr_31450_31476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (4))){
var inst_31423 = (state_31446[(7)]);
var inst_31426 = cljs.core.first.call(null,inst_31423);
var state_31446__$1 = state_31446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31446__$1,(7),ch,inst_31426);
} else {
if((state_val_31447 === (13))){
var inst_31440 = (state_31446[(2)]);
var state_31446__$1 = state_31446;
var statearr_31451_31477 = state_31446__$1;
(statearr_31451_31477[(2)] = inst_31440);

(statearr_31451_31477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (6))){
var inst_31431 = (state_31446[(2)]);
var state_31446__$1 = state_31446;
if(cljs.core.truth_(inst_31431)){
var statearr_31452_31478 = state_31446__$1;
(statearr_31452_31478[(1)] = (8));

} else {
var statearr_31453_31479 = state_31446__$1;
(statearr_31453_31479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (3))){
var inst_31444 = (state_31446[(2)]);
var state_31446__$1 = state_31446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31446__$1,inst_31444);
} else {
if((state_val_31447 === (12))){
var state_31446__$1 = state_31446;
var statearr_31454_31480 = state_31446__$1;
(statearr_31454_31480[(2)] = null);

(statearr_31454_31480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (2))){
var inst_31423 = (state_31446[(7)]);
var state_31446__$1 = state_31446;
if(cljs.core.truth_(inst_31423)){
var statearr_31455_31481 = state_31446__$1;
(statearr_31455_31481[(1)] = (4));

} else {
var statearr_31456_31482 = state_31446__$1;
(statearr_31456_31482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (11))){
var inst_31437 = cljs.core.async.close_BANG_.call(null,ch);
var state_31446__$1 = state_31446;
var statearr_31457_31483 = state_31446__$1;
(statearr_31457_31483[(2)] = inst_31437);

(statearr_31457_31483[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (9))){
var state_31446__$1 = state_31446;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31458_31484 = state_31446__$1;
(statearr_31458_31484[(1)] = (11));

} else {
var statearr_31459_31485 = state_31446__$1;
(statearr_31459_31485[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (5))){
var inst_31423 = (state_31446[(7)]);
var state_31446__$1 = state_31446;
var statearr_31460_31486 = state_31446__$1;
(statearr_31460_31486[(2)] = inst_31423);

(statearr_31460_31486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (10))){
var inst_31442 = (state_31446[(2)]);
var state_31446__$1 = state_31446;
var statearr_31461_31487 = state_31446__$1;
(statearr_31461_31487[(2)] = inst_31442);

(statearr_31461_31487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (8))){
var inst_31423 = (state_31446[(7)]);
var inst_31433 = cljs.core.next.call(null,inst_31423);
var inst_31423__$1 = inst_31433;
var state_31446__$1 = (function (){var statearr_31462 = state_31446;
(statearr_31462[(7)] = inst_31423__$1);

return statearr_31462;
})();
var statearr_31463_31488 = state_31446__$1;
(statearr_31463_31488[(2)] = null);

(statearr_31463_31488[(1)] = (2));


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
});})(c__30574__auto__))
;
return ((function (switch__30460__auto__,c__30574__auto__){
return (function() {
var cljs$core$async$state_machine__30461__auto__ = null;
var cljs$core$async$state_machine__30461__auto____0 = (function (){
var statearr_31467 = [null,null,null,null,null,null,null,null];
(statearr_31467[(0)] = cljs$core$async$state_machine__30461__auto__);

(statearr_31467[(1)] = (1));

return statearr_31467;
});
var cljs$core$async$state_machine__30461__auto____1 = (function (state_31446){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_31446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e31468){if((e31468 instanceof Object)){
var ex__30464__auto__ = e31468;
var statearr_31469_31489 = state_31446;
(statearr_31469_31489[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31490 = state_31446;
state_31446 = G__31490;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$state_machine__30461__auto__ = function(state_31446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30461__auto____1.call(this,state_31446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30461__auto____0;
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30461__auto____1;
return cljs$core$async$state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto__))
})();
var state__30576__auto__ = (function (){var statearr_31470 = f__30575__auto__.call(null);
(statearr_31470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto__);

return statearr_31470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto__))
);

return c__30574__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27720__auto__ = (((_ == null))?null:_);
var m__27721__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27720__auto__)]);
if(!((m__27721__auto__ == null))){
return m__27721__auto__.call(null,_);
} else {
var m__27721__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27721__auto____$1 == null))){
return m__27721__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27720__auto__ = (((m == null))?null:m);
var m__27721__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27720__auto__)]);
if(!((m__27721__auto__ == null))){
return m__27721__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27721__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27721__auto____$1 == null))){
return m__27721__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27720__auto__ = (((m == null))?null:m);
var m__27721__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27720__auto__)]);
if(!((m__27721__auto__ == null))){
return m__27721__auto__.call(null,m,ch);
} else {
var m__27721__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27721__auto____$1 == null))){
return m__27721__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27720__auto__ = (((m == null))?null:m);
var m__27721__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27720__auto__)]);
if(!((m__27721__auto__ == null))){
return m__27721__auto__.call(null,m);
} else {
var m__27721__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27721__auto____$1 == null))){
return m__27721__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31716 = (function (ch,cs,meta31717){
this.ch = ch;
this.cs = cs;
this.meta31717 = meta31717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31718,meta31717__$1){
var self__ = this;
var _31718__$1 = this;
return (new cljs.core.async.t_cljs$core$async31716(self__.ch,self__.cs,meta31717__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31718){
var self__ = this;
var _31718__$1 = this;
return self__.meta31717;
});})(cs))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31716.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31717","meta31717",2029434993,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31716";

cljs.core.async.t_cljs$core$async31716.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27659__auto__,writer__27660__auto__,opt__27661__auto__){
return cljs.core._write.call(null,writer__27660__auto__,"cljs.core.async/t_cljs$core$async31716");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31716 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31716(ch__$1,cs__$1,meta31717){
return (new cljs.core.async.t_cljs$core$async31716(ch__$1,cs__$1,meta31717));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31716(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30574__auto___31941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___31941,cs,m,dchan,dctr,done){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___31941,cs,m,dchan,dctr,done){
return (function (state_31853){
var state_val_31854 = (state_31853[(1)]);
if((state_val_31854 === (7))){
var inst_31849 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31855_31942 = state_31853__$1;
(statearr_31855_31942[(2)] = inst_31849);

(statearr_31855_31942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (20))){
var inst_31752 = (state_31853[(7)]);
var inst_31764 = cljs.core.first.call(null,inst_31752);
var inst_31765 = cljs.core.nth.call(null,inst_31764,(0),null);
var inst_31766 = cljs.core.nth.call(null,inst_31764,(1),null);
var state_31853__$1 = (function (){var statearr_31856 = state_31853;
(statearr_31856[(8)] = inst_31765);

return statearr_31856;
})();
if(cljs.core.truth_(inst_31766)){
var statearr_31857_31943 = state_31853__$1;
(statearr_31857_31943[(1)] = (22));

} else {
var statearr_31858_31944 = state_31853__$1;
(statearr_31858_31944[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (27))){
var inst_31794 = (state_31853[(9)]);
var inst_31801 = (state_31853[(10)]);
var inst_31721 = (state_31853[(11)]);
var inst_31796 = (state_31853[(12)]);
var inst_31801__$1 = cljs.core._nth.call(null,inst_31794,inst_31796);
var inst_31802 = cljs.core.async.put_BANG_.call(null,inst_31801__$1,inst_31721,done);
var state_31853__$1 = (function (){var statearr_31859 = state_31853;
(statearr_31859[(10)] = inst_31801__$1);

return statearr_31859;
})();
if(cljs.core.truth_(inst_31802)){
var statearr_31860_31945 = state_31853__$1;
(statearr_31860_31945[(1)] = (30));

} else {
var statearr_31861_31946 = state_31853__$1;
(statearr_31861_31946[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (1))){
var state_31853__$1 = state_31853;
var statearr_31862_31947 = state_31853__$1;
(statearr_31862_31947[(2)] = null);

(statearr_31862_31947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (24))){
var inst_31752 = (state_31853[(7)]);
var inst_31771 = (state_31853[(2)]);
var inst_31772 = cljs.core.next.call(null,inst_31752);
var inst_31730 = inst_31772;
var inst_31731 = null;
var inst_31732 = (0);
var inst_31733 = (0);
var state_31853__$1 = (function (){var statearr_31863 = state_31853;
(statearr_31863[(13)] = inst_31733);

(statearr_31863[(14)] = inst_31732);

(statearr_31863[(15)] = inst_31731);

(statearr_31863[(16)] = inst_31771);

(statearr_31863[(17)] = inst_31730);

return statearr_31863;
})();
var statearr_31864_31948 = state_31853__$1;
(statearr_31864_31948[(2)] = null);

(statearr_31864_31948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (39))){
var state_31853__$1 = state_31853;
var statearr_31868_31949 = state_31853__$1;
(statearr_31868_31949[(2)] = null);

(statearr_31868_31949[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (4))){
var inst_31721 = (state_31853[(11)]);
var inst_31721__$1 = (state_31853[(2)]);
var inst_31722 = (inst_31721__$1 == null);
var state_31853__$1 = (function (){var statearr_31869 = state_31853;
(statearr_31869[(11)] = inst_31721__$1);

return statearr_31869;
})();
if(cljs.core.truth_(inst_31722)){
var statearr_31870_31950 = state_31853__$1;
(statearr_31870_31950[(1)] = (5));

} else {
var statearr_31871_31951 = state_31853__$1;
(statearr_31871_31951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (15))){
var inst_31733 = (state_31853[(13)]);
var inst_31732 = (state_31853[(14)]);
var inst_31731 = (state_31853[(15)]);
var inst_31730 = (state_31853[(17)]);
var inst_31748 = (state_31853[(2)]);
var inst_31749 = (inst_31733 + (1));
var tmp31865 = inst_31732;
var tmp31866 = inst_31731;
var tmp31867 = inst_31730;
var inst_31730__$1 = tmp31867;
var inst_31731__$1 = tmp31866;
var inst_31732__$1 = tmp31865;
var inst_31733__$1 = inst_31749;
var state_31853__$1 = (function (){var statearr_31872 = state_31853;
(statearr_31872[(13)] = inst_31733__$1);

(statearr_31872[(14)] = inst_31732__$1);

(statearr_31872[(15)] = inst_31731__$1);

(statearr_31872[(18)] = inst_31748);

(statearr_31872[(17)] = inst_31730__$1);

return statearr_31872;
})();
var statearr_31873_31952 = state_31853__$1;
(statearr_31873_31952[(2)] = null);

(statearr_31873_31952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (21))){
var inst_31775 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31877_31953 = state_31853__$1;
(statearr_31877_31953[(2)] = inst_31775);

(statearr_31877_31953[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (31))){
var inst_31801 = (state_31853[(10)]);
var inst_31805 = done.call(null,null);
var inst_31806 = cljs.core.async.untap_STAR_.call(null,m,inst_31801);
var state_31853__$1 = (function (){var statearr_31878 = state_31853;
(statearr_31878[(19)] = inst_31805);

return statearr_31878;
})();
var statearr_31879_31954 = state_31853__$1;
(statearr_31879_31954[(2)] = inst_31806);

(statearr_31879_31954[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (32))){
var inst_31794 = (state_31853[(9)]);
var inst_31795 = (state_31853[(20)]);
var inst_31796 = (state_31853[(12)]);
var inst_31793 = (state_31853[(21)]);
var inst_31808 = (state_31853[(2)]);
var inst_31809 = (inst_31796 + (1));
var tmp31874 = inst_31794;
var tmp31875 = inst_31795;
var tmp31876 = inst_31793;
var inst_31793__$1 = tmp31876;
var inst_31794__$1 = tmp31874;
var inst_31795__$1 = tmp31875;
var inst_31796__$1 = inst_31809;
var state_31853__$1 = (function (){var statearr_31880 = state_31853;
(statearr_31880[(9)] = inst_31794__$1);

(statearr_31880[(22)] = inst_31808);

(statearr_31880[(20)] = inst_31795__$1);

(statearr_31880[(12)] = inst_31796__$1);

(statearr_31880[(21)] = inst_31793__$1);

return statearr_31880;
})();
var statearr_31881_31955 = state_31853__$1;
(statearr_31881_31955[(2)] = null);

(statearr_31881_31955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (40))){
var inst_31821 = (state_31853[(23)]);
var inst_31825 = done.call(null,null);
var inst_31826 = cljs.core.async.untap_STAR_.call(null,m,inst_31821);
var state_31853__$1 = (function (){var statearr_31882 = state_31853;
(statearr_31882[(24)] = inst_31825);

return statearr_31882;
})();
var statearr_31883_31956 = state_31853__$1;
(statearr_31883_31956[(2)] = inst_31826);

(statearr_31883_31956[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (33))){
var inst_31812 = (state_31853[(25)]);
var inst_31814 = cljs.core.chunked_seq_QMARK_.call(null,inst_31812);
var state_31853__$1 = state_31853;
if(inst_31814){
var statearr_31884_31957 = state_31853__$1;
(statearr_31884_31957[(1)] = (36));

} else {
var statearr_31885_31958 = state_31853__$1;
(statearr_31885_31958[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (13))){
var inst_31742 = (state_31853[(26)]);
var inst_31745 = cljs.core.async.close_BANG_.call(null,inst_31742);
var state_31853__$1 = state_31853;
var statearr_31886_31959 = state_31853__$1;
(statearr_31886_31959[(2)] = inst_31745);

(statearr_31886_31959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (22))){
var inst_31765 = (state_31853[(8)]);
var inst_31768 = cljs.core.async.close_BANG_.call(null,inst_31765);
var state_31853__$1 = state_31853;
var statearr_31887_31960 = state_31853__$1;
(statearr_31887_31960[(2)] = inst_31768);

(statearr_31887_31960[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (36))){
var inst_31812 = (state_31853[(25)]);
var inst_31816 = cljs.core.chunk_first.call(null,inst_31812);
var inst_31817 = cljs.core.chunk_rest.call(null,inst_31812);
var inst_31818 = cljs.core.count.call(null,inst_31816);
var inst_31793 = inst_31817;
var inst_31794 = inst_31816;
var inst_31795 = inst_31818;
var inst_31796 = (0);
var state_31853__$1 = (function (){var statearr_31888 = state_31853;
(statearr_31888[(9)] = inst_31794);

(statearr_31888[(20)] = inst_31795);

(statearr_31888[(12)] = inst_31796);

(statearr_31888[(21)] = inst_31793);

return statearr_31888;
})();
var statearr_31889_31961 = state_31853__$1;
(statearr_31889_31961[(2)] = null);

(statearr_31889_31961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (41))){
var inst_31812 = (state_31853[(25)]);
var inst_31828 = (state_31853[(2)]);
var inst_31829 = cljs.core.next.call(null,inst_31812);
var inst_31793 = inst_31829;
var inst_31794 = null;
var inst_31795 = (0);
var inst_31796 = (0);
var state_31853__$1 = (function (){var statearr_31890 = state_31853;
(statearr_31890[(27)] = inst_31828);

(statearr_31890[(9)] = inst_31794);

(statearr_31890[(20)] = inst_31795);

(statearr_31890[(12)] = inst_31796);

(statearr_31890[(21)] = inst_31793);

return statearr_31890;
})();
var statearr_31891_31962 = state_31853__$1;
(statearr_31891_31962[(2)] = null);

(statearr_31891_31962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (43))){
var state_31853__$1 = state_31853;
var statearr_31892_31963 = state_31853__$1;
(statearr_31892_31963[(2)] = null);

(statearr_31892_31963[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (29))){
var inst_31837 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31893_31964 = state_31853__$1;
(statearr_31893_31964[(2)] = inst_31837);

(statearr_31893_31964[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (44))){
var inst_31846 = (state_31853[(2)]);
var state_31853__$1 = (function (){var statearr_31894 = state_31853;
(statearr_31894[(28)] = inst_31846);

return statearr_31894;
})();
var statearr_31895_31965 = state_31853__$1;
(statearr_31895_31965[(2)] = null);

(statearr_31895_31965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (6))){
var inst_31785 = (state_31853[(29)]);
var inst_31784 = cljs.core.deref.call(null,cs);
var inst_31785__$1 = cljs.core.keys.call(null,inst_31784);
var inst_31786 = cljs.core.count.call(null,inst_31785__$1);
var inst_31787 = cljs.core.reset_BANG_.call(null,dctr,inst_31786);
var inst_31792 = cljs.core.seq.call(null,inst_31785__$1);
var inst_31793 = inst_31792;
var inst_31794 = null;
var inst_31795 = (0);
var inst_31796 = (0);
var state_31853__$1 = (function (){var statearr_31896 = state_31853;
(statearr_31896[(9)] = inst_31794);

(statearr_31896[(29)] = inst_31785__$1);

(statearr_31896[(20)] = inst_31795);

(statearr_31896[(12)] = inst_31796);

(statearr_31896[(21)] = inst_31793);

(statearr_31896[(30)] = inst_31787);

return statearr_31896;
})();
var statearr_31897_31966 = state_31853__$1;
(statearr_31897_31966[(2)] = null);

(statearr_31897_31966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (28))){
var inst_31812 = (state_31853[(25)]);
var inst_31793 = (state_31853[(21)]);
var inst_31812__$1 = cljs.core.seq.call(null,inst_31793);
var state_31853__$1 = (function (){var statearr_31898 = state_31853;
(statearr_31898[(25)] = inst_31812__$1);

return statearr_31898;
})();
if(inst_31812__$1){
var statearr_31899_31967 = state_31853__$1;
(statearr_31899_31967[(1)] = (33));

} else {
var statearr_31900_31968 = state_31853__$1;
(statearr_31900_31968[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (25))){
var inst_31795 = (state_31853[(20)]);
var inst_31796 = (state_31853[(12)]);
var inst_31798 = (inst_31796 < inst_31795);
var inst_31799 = inst_31798;
var state_31853__$1 = state_31853;
if(cljs.core.truth_(inst_31799)){
var statearr_31901_31969 = state_31853__$1;
(statearr_31901_31969[(1)] = (27));

} else {
var statearr_31902_31970 = state_31853__$1;
(statearr_31902_31970[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (34))){
var state_31853__$1 = state_31853;
var statearr_31903_31971 = state_31853__$1;
(statearr_31903_31971[(2)] = null);

(statearr_31903_31971[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (17))){
var state_31853__$1 = state_31853;
var statearr_31904_31972 = state_31853__$1;
(statearr_31904_31972[(2)] = null);

(statearr_31904_31972[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (3))){
var inst_31851 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31853__$1,inst_31851);
} else {
if((state_val_31854 === (12))){
var inst_31780 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31905_31973 = state_31853__$1;
(statearr_31905_31973[(2)] = inst_31780);

(statearr_31905_31973[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (2))){
var state_31853__$1 = state_31853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31853__$1,(4),ch);
} else {
if((state_val_31854 === (23))){
var state_31853__$1 = state_31853;
var statearr_31906_31974 = state_31853__$1;
(statearr_31906_31974[(2)] = null);

(statearr_31906_31974[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (35))){
var inst_31835 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31907_31975 = state_31853__$1;
(statearr_31907_31975[(2)] = inst_31835);

(statearr_31907_31975[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (19))){
var inst_31752 = (state_31853[(7)]);
var inst_31756 = cljs.core.chunk_first.call(null,inst_31752);
var inst_31757 = cljs.core.chunk_rest.call(null,inst_31752);
var inst_31758 = cljs.core.count.call(null,inst_31756);
var inst_31730 = inst_31757;
var inst_31731 = inst_31756;
var inst_31732 = inst_31758;
var inst_31733 = (0);
var state_31853__$1 = (function (){var statearr_31908 = state_31853;
(statearr_31908[(13)] = inst_31733);

(statearr_31908[(14)] = inst_31732);

(statearr_31908[(15)] = inst_31731);

(statearr_31908[(17)] = inst_31730);

return statearr_31908;
})();
var statearr_31909_31976 = state_31853__$1;
(statearr_31909_31976[(2)] = null);

(statearr_31909_31976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (11))){
var inst_31752 = (state_31853[(7)]);
var inst_31730 = (state_31853[(17)]);
var inst_31752__$1 = cljs.core.seq.call(null,inst_31730);
var state_31853__$1 = (function (){var statearr_31910 = state_31853;
(statearr_31910[(7)] = inst_31752__$1);

return statearr_31910;
})();
if(inst_31752__$1){
var statearr_31911_31977 = state_31853__$1;
(statearr_31911_31977[(1)] = (16));

} else {
var statearr_31912_31978 = state_31853__$1;
(statearr_31912_31978[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (9))){
var inst_31782 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31913_31979 = state_31853__$1;
(statearr_31913_31979[(2)] = inst_31782);

(statearr_31913_31979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (5))){
var inst_31728 = cljs.core.deref.call(null,cs);
var inst_31729 = cljs.core.seq.call(null,inst_31728);
var inst_31730 = inst_31729;
var inst_31731 = null;
var inst_31732 = (0);
var inst_31733 = (0);
var state_31853__$1 = (function (){var statearr_31914 = state_31853;
(statearr_31914[(13)] = inst_31733);

(statearr_31914[(14)] = inst_31732);

(statearr_31914[(15)] = inst_31731);

(statearr_31914[(17)] = inst_31730);

return statearr_31914;
})();
var statearr_31915_31980 = state_31853__$1;
(statearr_31915_31980[(2)] = null);

(statearr_31915_31980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (14))){
var state_31853__$1 = state_31853;
var statearr_31916_31981 = state_31853__$1;
(statearr_31916_31981[(2)] = null);

(statearr_31916_31981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (45))){
var inst_31843 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31917_31982 = state_31853__$1;
(statearr_31917_31982[(2)] = inst_31843);

(statearr_31917_31982[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (26))){
var inst_31785 = (state_31853[(29)]);
var inst_31839 = (state_31853[(2)]);
var inst_31840 = cljs.core.seq.call(null,inst_31785);
var state_31853__$1 = (function (){var statearr_31918 = state_31853;
(statearr_31918[(31)] = inst_31839);

return statearr_31918;
})();
if(inst_31840){
var statearr_31919_31983 = state_31853__$1;
(statearr_31919_31983[(1)] = (42));

} else {
var statearr_31920_31984 = state_31853__$1;
(statearr_31920_31984[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (16))){
var inst_31752 = (state_31853[(7)]);
var inst_31754 = cljs.core.chunked_seq_QMARK_.call(null,inst_31752);
var state_31853__$1 = state_31853;
if(inst_31754){
var statearr_31921_31985 = state_31853__$1;
(statearr_31921_31985[(1)] = (19));

} else {
var statearr_31922_31986 = state_31853__$1;
(statearr_31922_31986[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (38))){
var inst_31832 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31923_31987 = state_31853__$1;
(statearr_31923_31987[(2)] = inst_31832);

(statearr_31923_31987[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (30))){
var state_31853__$1 = state_31853;
var statearr_31924_31988 = state_31853__$1;
(statearr_31924_31988[(2)] = null);

(statearr_31924_31988[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (10))){
var inst_31733 = (state_31853[(13)]);
var inst_31731 = (state_31853[(15)]);
var inst_31741 = cljs.core._nth.call(null,inst_31731,inst_31733);
var inst_31742 = cljs.core.nth.call(null,inst_31741,(0),null);
var inst_31743 = cljs.core.nth.call(null,inst_31741,(1),null);
var state_31853__$1 = (function (){var statearr_31925 = state_31853;
(statearr_31925[(26)] = inst_31742);

return statearr_31925;
})();
if(cljs.core.truth_(inst_31743)){
var statearr_31926_31989 = state_31853__$1;
(statearr_31926_31989[(1)] = (13));

} else {
var statearr_31927_31990 = state_31853__$1;
(statearr_31927_31990[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (18))){
var inst_31778 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31928_31991 = state_31853__$1;
(statearr_31928_31991[(2)] = inst_31778);

(statearr_31928_31991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (42))){
var state_31853__$1 = state_31853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31853__$1,(45),dchan);
} else {
if((state_val_31854 === (37))){
var inst_31812 = (state_31853[(25)]);
var inst_31721 = (state_31853[(11)]);
var inst_31821 = (state_31853[(23)]);
var inst_31821__$1 = cljs.core.first.call(null,inst_31812);
var inst_31822 = cljs.core.async.put_BANG_.call(null,inst_31821__$1,inst_31721,done);
var state_31853__$1 = (function (){var statearr_31929 = state_31853;
(statearr_31929[(23)] = inst_31821__$1);

return statearr_31929;
})();
if(cljs.core.truth_(inst_31822)){
var statearr_31930_31992 = state_31853__$1;
(statearr_31930_31992[(1)] = (39));

} else {
var statearr_31931_31993 = state_31853__$1;
(statearr_31931_31993[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (8))){
var inst_31733 = (state_31853[(13)]);
var inst_31732 = (state_31853[(14)]);
var inst_31735 = (inst_31733 < inst_31732);
var inst_31736 = inst_31735;
var state_31853__$1 = state_31853;
if(cljs.core.truth_(inst_31736)){
var statearr_31932_31994 = state_31853__$1;
(statearr_31932_31994[(1)] = (10));

} else {
var statearr_31933_31995 = state_31853__$1;
(statearr_31933_31995[(1)] = (11));

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
});})(c__30574__auto___31941,cs,m,dchan,dctr,done))
;
return ((function (switch__30460__auto__,c__30574__auto___31941,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30461__auto__ = null;
var cljs$core$async$mult_$_state_machine__30461__auto____0 = (function (){
var statearr_31937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31937[(0)] = cljs$core$async$mult_$_state_machine__30461__auto__);

(statearr_31937[(1)] = (1));

return statearr_31937;
});
var cljs$core$async$mult_$_state_machine__30461__auto____1 = (function (state_31853){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_31853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e31938){if((e31938 instanceof Object)){
var ex__30464__auto__ = e31938;
var statearr_31939_31996 = state_31853;
(statearr_31939_31996[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31997 = state_31853;
state_31853 = G__31997;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30461__auto__ = function(state_31853){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30461__auto____1.call(this,state_31853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30461__auto____0;
cljs$core$async$mult_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30461__auto____1;
return cljs$core$async$mult_$_state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___31941,cs,m,dchan,dctr,done))
})();
var state__30576__auto__ = (function (){var statearr_31940 = f__30575__auto__.call(null);
(statearr_31940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___31941);

return statearr_31940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___31941,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31998 = [];
var len__28223__auto___32001 = arguments.length;
var i__28224__auto___32002 = (0);
while(true){
if((i__28224__auto___32002 < len__28223__auto___32001)){
args31998.push((arguments[i__28224__auto___32002]));

var G__32003 = (i__28224__auto___32002 + (1));
i__28224__auto___32002 = G__32003;
continue;
} else {
}
break;
}

var G__32000 = args31998.length;
switch (G__32000) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31998.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27720__auto__ = (((m == null))?null:m);
var m__27721__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27720__auto__)]);
if(!((m__27721__auto__ == null))){
return m__27721__auto__.call(null,m,ch);
} else {
var m__27721__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27721__auto____$1 == null))){
return m__27721__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27720__auto__ = (((m == null))?null:m);
var m__27721__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27720__auto__)]);
if(!((m__27721__auto__ == null))){
return m__27721__auto__.call(null,m,ch);
} else {
var m__27721__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27721__auto____$1 == null))){
return m__27721__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27720__auto__ = (((m == null))?null:m);
var m__27721__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27720__auto__)]);
if(!((m__27721__auto__ == null))){
return m__27721__auto__.call(null,m);
} else {
var m__27721__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27721__auto____$1 == null))){
return m__27721__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27720__auto__ = (((m == null))?null:m);
var m__27721__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27720__auto__)]);
if(!((m__27721__auto__ == null))){
return m__27721__auto__.call(null,m,state_map);
} else {
var m__27721__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27721__auto____$1 == null))){
return m__27721__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27720__auto__ = (((m == null))?null:m);
var m__27721__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27720__auto__)]);
if(!((m__27721__auto__ == null))){
return m__27721__auto__.call(null,m,mode);
} else {
var m__27721__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27721__auto____$1 == null))){
return m__27721__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28230__auto__ = [];
var len__28223__auto___32015 = arguments.length;
var i__28224__auto___32016 = (0);
while(true){
if((i__28224__auto___32016 < len__28223__auto___32015)){
args__28230__auto__.push((arguments[i__28224__auto___32016]));

var G__32017 = (i__28224__auto___32016 + (1));
i__28224__auto___32016 = G__32017;
continue;
} else {
}
break;
}

var argseq__28231__auto__ = ((((3) < args__28230__auto__.length))?(new cljs.core.IndexedSeq(args__28230__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28231__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32009){
var map__32010 = p__32009;
var map__32010__$1 = ((((!((map__32010 == null)))?((((map__32010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32010):map__32010);
var opts = map__32010__$1;
var statearr_32012_32018 = state;
(statearr_32012_32018[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__32010,map__32010__$1,opts){
return (function (val){
var statearr_32013_32019 = state;
(statearr_32013_32019[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32010,map__32010__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_32014_32020 = state;
(statearr_32014_32020[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32005){
var G__32006 = cljs.core.first.call(null,seq32005);
var seq32005__$1 = cljs.core.next.call(null,seq32005);
var G__32007 = cljs.core.first.call(null,seq32005__$1);
var seq32005__$2 = cljs.core.next.call(null,seq32005__$1);
var G__32008 = cljs.core.first.call(null,seq32005__$2);
var seq32005__$3 = cljs.core.next.call(null,seq32005__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32006,G__32007,G__32008,seq32005__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32188 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32189){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32189 = meta32189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32190,meta32189__$1){
var self__ = this;
var _32190__$1 = this;
return (new cljs.core.async.t_cljs$core$async32188(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32189__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32190){
var self__ = this;
var _32190__$1 = this;
return self__.meta32189;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32188.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32188.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32188.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32188.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32188.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32188.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32188.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32188.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32188.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32189","meta32189",-151566255,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32188";

cljs.core.async.t_cljs$core$async32188.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27659__auto__,writer__27660__auto__,opt__27661__auto__){
return cljs.core._write.call(null,writer__27660__auto__,"cljs.core.async/t_cljs$core$async32188");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32188 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32188(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32189){
return (new cljs.core.async.t_cljs$core$async32188(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32189));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32188(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30574__auto___32355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___32355,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___32355,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32292){
var state_val_32293 = (state_32292[(1)]);
if((state_val_32293 === (7))){
var inst_32207 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
var statearr_32294_32356 = state_32292__$1;
(statearr_32294_32356[(2)] = inst_32207);

(statearr_32294_32356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (20))){
var inst_32219 = (state_32292[(7)]);
var state_32292__$1 = state_32292;
var statearr_32295_32357 = state_32292__$1;
(statearr_32295_32357[(2)] = inst_32219);

(statearr_32295_32357[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (27))){
var state_32292__$1 = state_32292;
var statearr_32296_32358 = state_32292__$1;
(statearr_32296_32358[(2)] = null);

(statearr_32296_32358[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (1))){
var inst_32194 = (state_32292[(8)]);
var inst_32194__$1 = calc_state.call(null);
var inst_32196 = (inst_32194__$1 == null);
var inst_32197 = cljs.core.not.call(null,inst_32196);
var state_32292__$1 = (function (){var statearr_32297 = state_32292;
(statearr_32297[(8)] = inst_32194__$1);

return statearr_32297;
})();
if(inst_32197){
var statearr_32298_32359 = state_32292__$1;
(statearr_32298_32359[(1)] = (2));

} else {
var statearr_32299_32360 = state_32292__$1;
(statearr_32299_32360[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (24))){
var inst_32266 = (state_32292[(9)]);
var inst_32252 = (state_32292[(10)]);
var inst_32243 = (state_32292[(11)]);
var inst_32266__$1 = inst_32243.call(null,inst_32252);
var state_32292__$1 = (function (){var statearr_32300 = state_32292;
(statearr_32300[(9)] = inst_32266__$1);

return statearr_32300;
})();
if(cljs.core.truth_(inst_32266__$1)){
var statearr_32301_32361 = state_32292__$1;
(statearr_32301_32361[(1)] = (29));

} else {
var statearr_32302_32362 = state_32292__$1;
(statearr_32302_32362[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (4))){
var inst_32210 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
if(cljs.core.truth_(inst_32210)){
var statearr_32303_32363 = state_32292__$1;
(statearr_32303_32363[(1)] = (8));

} else {
var statearr_32304_32364 = state_32292__$1;
(statearr_32304_32364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (15))){
var inst_32237 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
if(cljs.core.truth_(inst_32237)){
var statearr_32305_32365 = state_32292__$1;
(statearr_32305_32365[(1)] = (19));

} else {
var statearr_32306_32366 = state_32292__$1;
(statearr_32306_32366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (21))){
var inst_32242 = (state_32292[(12)]);
var inst_32242__$1 = (state_32292[(2)]);
var inst_32243 = cljs.core.get.call(null,inst_32242__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32244 = cljs.core.get.call(null,inst_32242__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32245 = cljs.core.get.call(null,inst_32242__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32292__$1 = (function (){var statearr_32307 = state_32292;
(statearr_32307[(12)] = inst_32242__$1);

(statearr_32307[(13)] = inst_32244);

(statearr_32307[(11)] = inst_32243);

return statearr_32307;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32292__$1,(22),inst_32245);
} else {
if((state_val_32293 === (31))){
var inst_32274 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
if(cljs.core.truth_(inst_32274)){
var statearr_32308_32367 = state_32292__$1;
(statearr_32308_32367[(1)] = (32));

} else {
var statearr_32309_32368 = state_32292__$1;
(statearr_32309_32368[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (32))){
var inst_32251 = (state_32292[(14)]);
var state_32292__$1 = state_32292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32292__$1,(35),out,inst_32251);
} else {
if((state_val_32293 === (33))){
var inst_32242 = (state_32292[(12)]);
var inst_32219 = inst_32242;
var state_32292__$1 = (function (){var statearr_32310 = state_32292;
(statearr_32310[(7)] = inst_32219);

return statearr_32310;
})();
var statearr_32311_32369 = state_32292__$1;
(statearr_32311_32369[(2)] = null);

(statearr_32311_32369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (13))){
var inst_32219 = (state_32292[(7)]);
var inst_32226 = inst_32219.cljs$lang$protocol_mask$partition0$;
var inst_32227 = (inst_32226 & (64));
var inst_32228 = inst_32219.cljs$core$ISeq$;
var inst_32229 = (cljs.core.PROTOCOL_SENTINEL === inst_32228);
var inst_32230 = (inst_32227) || (inst_32229);
var state_32292__$1 = state_32292;
if(cljs.core.truth_(inst_32230)){
var statearr_32312_32370 = state_32292__$1;
(statearr_32312_32370[(1)] = (16));

} else {
var statearr_32313_32371 = state_32292__$1;
(statearr_32313_32371[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (22))){
var inst_32252 = (state_32292[(10)]);
var inst_32251 = (state_32292[(14)]);
var inst_32250 = (state_32292[(2)]);
var inst_32251__$1 = cljs.core.nth.call(null,inst_32250,(0),null);
var inst_32252__$1 = cljs.core.nth.call(null,inst_32250,(1),null);
var inst_32253 = (inst_32251__$1 == null);
var inst_32254 = cljs.core._EQ_.call(null,inst_32252__$1,change);
var inst_32255 = (inst_32253) || (inst_32254);
var state_32292__$1 = (function (){var statearr_32314 = state_32292;
(statearr_32314[(10)] = inst_32252__$1);

(statearr_32314[(14)] = inst_32251__$1);

return statearr_32314;
})();
if(cljs.core.truth_(inst_32255)){
var statearr_32315_32372 = state_32292__$1;
(statearr_32315_32372[(1)] = (23));

} else {
var statearr_32316_32373 = state_32292__$1;
(statearr_32316_32373[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (36))){
var inst_32242 = (state_32292[(12)]);
var inst_32219 = inst_32242;
var state_32292__$1 = (function (){var statearr_32317 = state_32292;
(statearr_32317[(7)] = inst_32219);

return statearr_32317;
})();
var statearr_32318_32374 = state_32292__$1;
(statearr_32318_32374[(2)] = null);

(statearr_32318_32374[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (29))){
var inst_32266 = (state_32292[(9)]);
var state_32292__$1 = state_32292;
var statearr_32319_32375 = state_32292__$1;
(statearr_32319_32375[(2)] = inst_32266);

(statearr_32319_32375[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (6))){
var state_32292__$1 = state_32292;
var statearr_32320_32376 = state_32292__$1;
(statearr_32320_32376[(2)] = false);

(statearr_32320_32376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (28))){
var inst_32262 = (state_32292[(2)]);
var inst_32263 = calc_state.call(null);
var inst_32219 = inst_32263;
var state_32292__$1 = (function (){var statearr_32321 = state_32292;
(statearr_32321[(15)] = inst_32262);

(statearr_32321[(7)] = inst_32219);

return statearr_32321;
})();
var statearr_32322_32377 = state_32292__$1;
(statearr_32322_32377[(2)] = null);

(statearr_32322_32377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (25))){
var inst_32288 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
var statearr_32323_32378 = state_32292__$1;
(statearr_32323_32378[(2)] = inst_32288);

(statearr_32323_32378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (34))){
var inst_32286 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
var statearr_32324_32379 = state_32292__$1;
(statearr_32324_32379[(2)] = inst_32286);

(statearr_32324_32379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (17))){
var state_32292__$1 = state_32292;
var statearr_32325_32380 = state_32292__$1;
(statearr_32325_32380[(2)] = false);

(statearr_32325_32380[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (3))){
var state_32292__$1 = state_32292;
var statearr_32326_32381 = state_32292__$1;
(statearr_32326_32381[(2)] = false);

(statearr_32326_32381[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (12))){
var inst_32290 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32292__$1,inst_32290);
} else {
if((state_val_32293 === (2))){
var inst_32194 = (state_32292[(8)]);
var inst_32199 = inst_32194.cljs$lang$protocol_mask$partition0$;
var inst_32200 = (inst_32199 & (64));
var inst_32201 = inst_32194.cljs$core$ISeq$;
var inst_32202 = (cljs.core.PROTOCOL_SENTINEL === inst_32201);
var inst_32203 = (inst_32200) || (inst_32202);
var state_32292__$1 = state_32292;
if(cljs.core.truth_(inst_32203)){
var statearr_32327_32382 = state_32292__$1;
(statearr_32327_32382[(1)] = (5));

} else {
var statearr_32328_32383 = state_32292__$1;
(statearr_32328_32383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (23))){
var inst_32251 = (state_32292[(14)]);
var inst_32257 = (inst_32251 == null);
var state_32292__$1 = state_32292;
if(cljs.core.truth_(inst_32257)){
var statearr_32329_32384 = state_32292__$1;
(statearr_32329_32384[(1)] = (26));

} else {
var statearr_32330_32385 = state_32292__$1;
(statearr_32330_32385[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (35))){
var inst_32277 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
if(cljs.core.truth_(inst_32277)){
var statearr_32331_32386 = state_32292__$1;
(statearr_32331_32386[(1)] = (36));

} else {
var statearr_32332_32387 = state_32292__$1;
(statearr_32332_32387[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (19))){
var inst_32219 = (state_32292[(7)]);
var inst_32239 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32219);
var state_32292__$1 = state_32292;
var statearr_32333_32388 = state_32292__$1;
(statearr_32333_32388[(2)] = inst_32239);

(statearr_32333_32388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (11))){
var inst_32219 = (state_32292[(7)]);
var inst_32223 = (inst_32219 == null);
var inst_32224 = cljs.core.not.call(null,inst_32223);
var state_32292__$1 = state_32292;
if(inst_32224){
var statearr_32334_32389 = state_32292__$1;
(statearr_32334_32389[(1)] = (13));

} else {
var statearr_32335_32390 = state_32292__$1;
(statearr_32335_32390[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (9))){
var inst_32194 = (state_32292[(8)]);
var state_32292__$1 = state_32292;
var statearr_32336_32391 = state_32292__$1;
(statearr_32336_32391[(2)] = inst_32194);

(statearr_32336_32391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (5))){
var state_32292__$1 = state_32292;
var statearr_32337_32392 = state_32292__$1;
(statearr_32337_32392[(2)] = true);

(statearr_32337_32392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (14))){
var state_32292__$1 = state_32292;
var statearr_32338_32393 = state_32292__$1;
(statearr_32338_32393[(2)] = false);

(statearr_32338_32393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (26))){
var inst_32252 = (state_32292[(10)]);
var inst_32259 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32252);
var state_32292__$1 = state_32292;
var statearr_32339_32394 = state_32292__$1;
(statearr_32339_32394[(2)] = inst_32259);

(statearr_32339_32394[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (16))){
var state_32292__$1 = state_32292;
var statearr_32340_32395 = state_32292__$1;
(statearr_32340_32395[(2)] = true);

(statearr_32340_32395[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (38))){
var inst_32282 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
var statearr_32341_32396 = state_32292__$1;
(statearr_32341_32396[(2)] = inst_32282);

(statearr_32341_32396[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (30))){
var inst_32244 = (state_32292[(13)]);
var inst_32252 = (state_32292[(10)]);
var inst_32243 = (state_32292[(11)]);
var inst_32269 = cljs.core.empty_QMARK_.call(null,inst_32243);
var inst_32270 = inst_32244.call(null,inst_32252);
var inst_32271 = cljs.core.not.call(null,inst_32270);
var inst_32272 = (inst_32269) && (inst_32271);
var state_32292__$1 = state_32292;
var statearr_32342_32397 = state_32292__$1;
(statearr_32342_32397[(2)] = inst_32272);

(statearr_32342_32397[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (10))){
var inst_32194 = (state_32292[(8)]);
var inst_32215 = (state_32292[(2)]);
var inst_32216 = cljs.core.get.call(null,inst_32215,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32217 = cljs.core.get.call(null,inst_32215,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32218 = cljs.core.get.call(null,inst_32215,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32219 = inst_32194;
var state_32292__$1 = (function (){var statearr_32343 = state_32292;
(statearr_32343[(16)] = inst_32216);

(statearr_32343[(17)] = inst_32217);

(statearr_32343[(18)] = inst_32218);

(statearr_32343[(7)] = inst_32219);

return statearr_32343;
})();
var statearr_32344_32398 = state_32292__$1;
(statearr_32344_32398[(2)] = null);

(statearr_32344_32398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (18))){
var inst_32234 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
var statearr_32345_32399 = state_32292__$1;
(statearr_32345_32399[(2)] = inst_32234);

(statearr_32345_32399[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (37))){
var state_32292__$1 = state_32292;
var statearr_32346_32400 = state_32292__$1;
(statearr_32346_32400[(2)] = null);

(statearr_32346_32400[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (8))){
var inst_32194 = (state_32292[(8)]);
var inst_32212 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32194);
var state_32292__$1 = state_32292;
var statearr_32347_32401 = state_32292__$1;
(statearr_32347_32401[(2)] = inst_32212);

(statearr_32347_32401[(1)] = (10));


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
});})(c__30574__auto___32355,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30460__auto__,c__30574__auto___32355,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30461__auto__ = null;
var cljs$core$async$mix_$_state_machine__30461__auto____0 = (function (){
var statearr_32351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32351[(0)] = cljs$core$async$mix_$_state_machine__30461__auto__);

(statearr_32351[(1)] = (1));

return statearr_32351;
});
var cljs$core$async$mix_$_state_machine__30461__auto____1 = (function (state_32292){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_32292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e32352){if((e32352 instanceof Object)){
var ex__30464__auto__ = e32352;
var statearr_32353_32402 = state_32292;
(statearr_32353_32402[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32403 = state_32292;
state_32292 = G__32403;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30461__auto__ = function(state_32292){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30461__auto____1.call(this,state_32292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30461__auto____0;
cljs$core$async$mix_$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30461__auto____1;
return cljs$core$async$mix_$_state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___32355,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30576__auto__ = (function (){var statearr_32354 = f__30575__auto__.call(null);
(statearr_32354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___32355);

return statearr_32354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___32355,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27720__auto__ = (((p == null))?null:p);
var m__27721__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27720__auto__)]);
if(!((m__27721__auto__ == null))){
return m__27721__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27721__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27721__auto____$1 == null))){
return m__27721__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27720__auto__ = (((p == null))?null:p);
var m__27721__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27720__auto__)]);
if(!((m__27721__auto__ == null))){
return m__27721__auto__.call(null,p,v,ch);
} else {
var m__27721__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27721__auto____$1 == null))){
return m__27721__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32404 = [];
var len__28223__auto___32407 = arguments.length;
var i__28224__auto___32408 = (0);
while(true){
if((i__28224__auto___32408 < len__28223__auto___32407)){
args32404.push((arguments[i__28224__auto___32408]));

var G__32409 = (i__28224__auto___32408 + (1));
i__28224__auto___32408 = G__32409;
continue;
} else {
}
break;
}

var G__32406 = args32404.length;
switch (G__32406) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32404.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27720__auto__ = (((p == null))?null:p);
var m__27721__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27720__auto__)]);
if(!((m__27721__auto__ == null))){
return m__27721__auto__.call(null,p);
} else {
var m__27721__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27721__auto____$1 == null))){
return m__27721__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27720__auto__ = (((p == null))?null:p);
var m__27721__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27720__auto__)]);
if(!((m__27721__auto__ == null))){
return m__27721__auto__.call(null,p,v);
} else {
var m__27721__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27721__auto____$1 == null))){
return m__27721__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args32412 = [];
var len__28223__auto___32537 = arguments.length;
var i__28224__auto___32538 = (0);
while(true){
if((i__28224__auto___32538 < len__28223__auto___32537)){
args32412.push((arguments[i__28224__auto___32538]));

var G__32539 = (i__28224__auto___32538 + (1));
i__28224__auto___32538 = G__32539;
continue;
} else {
}
break;
}

var G__32414 = args32412.length;
switch (G__32414) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32412.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27002__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27002__auto__)){
return or__27002__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27002__auto__,mults){
return (function (p1__32411_SHARP_){
if(cljs.core.truth_(p1__32411_SHARP_.call(null,topic))){
return p1__32411_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32411_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27002__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32415 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32415 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32416){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32416 = meta32416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32417,meta32416__$1){
var self__ = this;
var _32417__$1 = this;
return (new cljs.core.async.t_cljs$core$async32415(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32416__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32417){
var self__ = this;
var _32417__$1 = this;
return self__.meta32416;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32416","meta32416",-884320320,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32415";

cljs.core.async.t_cljs$core$async32415.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27659__auto__,writer__27660__auto__,opt__27661__auto__){
return cljs.core._write.call(null,writer__27660__auto__,"cljs.core.async/t_cljs$core$async32415");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32415 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32415(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32416){
return (new cljs.core.async.t_cljs$core$async32415(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32416));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32415(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30574__auto___32541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___32541,mults,ensure_mult,p){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___32541,mults,ensure_mult,p){
return (function (state_32489){
var state_val_32490 = (state_32489[(1)]);
if((state_val_32490 === (7))){
var inst_32485 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32491_32542 = state_32489__$1;
(statearr_32491_32542[(2)] = inst_32485);

(statearr_32491_32542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (20))){
var state_32489__$1 = state_32489;
var statearr_32492_32543 = state_32489__$1;
(statearr_32492_32543[(2)] = null);

(statearr_32492_32543[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (1))){
var state_32489__$1 = state_32489;
var statearr_32493_32544 = state_32489__$1;
(statearr_32493_32544[(2)] = null);

(statearr_32493_32544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (24))){
var inst_32468 = (state_32489[(7)]);
var inst_32477 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32468);
var state_32489__$1 = state_32489;
var statearr_32494_32545 = state_32489__$1;
(statearr_32494_32545[(2)] = inst_32477);

(statearr_32494_32545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (4))){
var inst_32420 = (state_32489[(8)]);
var inst_32420__$1 = (state_32489[(2)]);
var inst_32421 = (inst_32420__$1 == null);
var state_32489__$1 = (function (){var statearr_32495 = state_32489;
(statearr_32495[(8)] = inst_32420__$1);

return statearr_32495;
})();
if(cljs.core.truth_(inst_32421)){
var statearr_32496_32546 = state_32489__$1;
(statearr_32496_32546[(1)] = (5));

} else {
var statearr_32497_32547 = state_32489__$1;
(statearr_32497_32547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (15))){
var inst_32462 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32498_32548 = state_32489__$1;
(statearr_32498_32548[(2)] = inst_32462);

(statearr_32498_32548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (21))){
var inst_32482 = (state_32489[(2)]);
var state_32489__$1 = (function (){var statearr_32499 = state_32489;
(statearr_32499[(9)] = inst_32482);

return statearr_32499;
})();
var statearr_32500_32549 = state_32489__$1;
(statearr_32500_32549[(2)] = null);

(statearr_32500_32549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (13))){
var inst_32444 = (state_32489[(10)]);
var inst_32446 = cljs.core.chunked_seq_QMARK_.call(null,inst_32444);
var state_32489__$1 = state_32489;
if(inst_32446){
var statearr_32501_32550 = state_32489__$1;
(statearr_32501_32550[(1)] = (16));

} else {
var statearr_32502_32551 = state_32489__$1;
(statearr_32502_32551[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (22))){
var inst_32474 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
if(cljs.core.truth_(inst_32474)){
var statearr_32503_32552 = state_32489__$1;
(statearr_32503_32552[(1)] = (23));

} else {
var statearr_32504_32553 = state_32489__$1;
(statearr_32504_32553[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (6))){
var inst_32420 = (state_32489[(8)]);
var inst_32468 = (state_32489[(7)]);
var inst_32470 = (state_32489[(11)]);
var inst_32468__$1 = topic_fn.call(null,inst_32420);
var inst_32469 = cljs.core.deref.call(null,mults);
var inst_32470__$1 = cljs.core.get.call(null,inst_32469,inst_32468__$1);
var state_32489__$1 = (function (){var statearr_32505 = state_32489;
(statearr_32505[(7)] = inst_32468__$1);

(statearr_32505[(11)] = inst_32470__$1);

return statearr_32505;
})();
if(cljs.core.truth_(inst_32470__$1)){
var statearr_32506_32554 = state_32489__$1;
(statearr_32506_32554[(1)] = (19));

} else {
var statearr_32507_32555 = state_32489__$1;
(statearr_32507_32555[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (25))){
var inst_32479 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32508_32556 = state_32489__$1;
(statearr_32508_32556[(2)] = inst_32479);

(statearr_32508_32556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (17))){
var inst_32444 = (state_32489[(10)]);
var inst_32453 = cljs.core.first.call(null,inst_32444);
var inst_32454 = cljs.core.async.muxch_STAR_.call(null,inst_32453);
var inst_32455 = cljs.core.async.close_BANG_.call(null,inst_32454);
var inst_32456 = cljs.core.next.call(null,inst_32444);
var inst_32430 = inst_32456;
var inst_32431 = null;
var inst_32432 = (0);
var inst_32433 = (0);
var state_32489__$1 = (function (){var statearr_32509 = state_32489;
(statearr_32509[(12)] = inst_32433);

(statearr_32509[(13)] = inst_32430);

(statearr_32509[(14)] = inst_32432);

(statearr_32509[(15)] = inst_32431);

(statearr_32509[(16)] = inst_32455);

return statearr_32509;
})();
var statearr_32510_32557 = state_32489__$1;
(statearr_32510_32557[(2)] = null);

(statearr_32510_32557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (3))){
var inst_32487 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32489__$1,inst_32487);
} else {
if((state_val_32490 === (12))){
var inst_32464 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32511_32558 = state_32489__$1;
(statearr_32511_32558[(2)] = inst_32464);

(statearr_32511_32558[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (2))){
var state_32489__$1 = state_32489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32489__$1,(4),ch);
} else {
if((state_val_32490 === (23))){
var state_32489__$1 = state_32489;
var statearr_32512_32559 = state_32489__$1;
(statearr_32512_32559[(2)] = null);

(statearr_32512_32559[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (19))){
var inst_32420 = (state_32489[(8)]);
var inst_32470 = (state_32489[(11)]);
var inst_32472 = cljs.core.async.muxch_STAR_.call(null,inst_32470);
var state_32489__$1 = state_32489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32489__$1,(22),inst_32472,inst_32420);
} else {
if((state_val_32490 === (11))){
var inst_32444 = (state_32489[(10)]);
var inst_32430 = (state_32489[(13)]);
var inst_32444__$1 = cljs.core.seq.call(null,inst_32430);
var state_32489__$1 = (function (){var statearr_32513 = state_32489;
(statearr_32513[(10)] = inst_32444__$1);

return statearr_32513;
})();
if(inst_32444__$1){
var statearr_32514_32560 = state_32489__$1;
(statearr_32514_32560[(1)] = (13));

} else {
var statearr_32515_32561 = state_32489__$1;
(statearr_32515_32561[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (9))){
var inst_32466 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32516_32562 = state_32489__$1;
(statearr_32516_32562[(2)] = inst_32466);

(statearr_32516_32562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (5))){
var inst_32427 = cljs.core.deref.call(null,mults);
var inst_32428 = cljs.core.vals.call(null,inst_32427);
var inst_32429 = cljs.core.seq.call(null,inst_32428);
var inst_32430 = inst_32429;
var inst_32431 = null;
var inst_32432 = (0);
var inst_32433 = (0);
var state_32489__$1 = (function (){var statearr_32517 = state_32489;
(statearr_32517[(12)] = inst_32433);

(statearr_32517[(13)] = inst_32430);

(statearr_32517[(14)] = inst_32432);

(statearr_32517[(15)] = inst_32431);

return statearr_32517;
})();
var statearr_32518_32563 = state_32489__$1;
(statearr_32518_32563[(2)] = null);

(statearr_32518_32563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (14))){
var state_32489__$1 = state_32489;
var statearr_32522_32564 = state_32489__$1;
(statearr_32522_32564[(2)] = null);

(statearr_32522_32564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (16))){
var inst_32444 = (state_32489[(10)]);
var inst_32448 = cljs.core.chunk_first.call(null,inst_32444);
var inst_32449 = cljs.core.chunk_rest.call(null,inst_32444);
var inst_32450 = cljs.core.count.call(null,inst_32448);
var inst_32430 = inst_32449;
var inst_32431 = inst_32448;
var inst_32432 = inst_32450;
var inst_32433 = (0);
var state_32489__$1 = (function (){var statearr_32523 = state_32489;
(statearr_32523[(12)] = inst_32433);

(statearr_32523[(13)] = inst_32430);

(statearr_32523[(14)] = inst_32432);

(statearr_32523[(15)] = inst_32431);

return statearr_32523;
})();
var statearr_32524_32565 = state_32489__$1;
(statearr_32524_32565[(2)] = null);

(statearr_32524_32565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (10))){
var inst_32433 = (state_32489[(12)]);
var inst_32430 = (state_32489[(13)]);
var inst_32432 = (state_32489[(14)]);
var inst_32431 = (state_32489[(15)]);
var inst_32438 = cljs.core._nth.call(null,inst_32431,inst_32433);
var inst_32439 = cljs.core.async.muxch_STAR_.call(null,inst_32438);
var inst_32440 = cljs.core.async.close_BANG_.call(null,inst_32439);
var inst_32441 = (inst_32433 + (1));
var tmp32519 = inst_32430;
var tmp32520 = inst_32432;
var tmp32521 = inst_32431;
var inst_32430__$1 = tmp32519;
var inst_32431__$1 = tmp32521;
var inst_32432__$1 = tmp32520;
var inst_32433__$1 = inst_32441;
var state_32489__$1 = (function (){var statearr_32525 = state_32489;
(statearr_32525[(12)] = inst_32433__$1);

(statearr_32525[(13)] = inst_32430__$1);

(statearr_32525[(14)] = inst_32432__$1);

(statearr_32525[(17)] = inst_32440);

(statearr_32525[(15)] = inst_32431__$1);

return statearr_32525;
})();
var statearr_32526_32566 = state_32489__$1;
(statearr_32526_32566[(2)] = null);

(statearr_32526_32566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (18))){
var inst_32459 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32527_32567 = state_32489__$1;
(statearr_32527_32567[(2)] = inst_32459);

(statearr_32527_32567[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (8))){
var inst_32433 = (state_32489[(12)]);
var inst_32432 = (state_32489[(14)]);
var inst_32435 = (inst_32433 < inst_32432);
var inst_32436 = inst_32435;
var state_32489__$1 = state_32489;
if(cljs.core.truth_(inst_32436)){
var statearr_32528_32568 = state_32489__$1;
(statearr_32528_32568[(1)] = (10));

} else {
var statearr_32529_32569 = state_32489__$1;
(statearr_32529_32569[(1)] = (11));

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
});})(c__30574__auto___32541,mults,ensure_mult,p))
;
return ((function (switch__30460__auto__,c__30574__auto___32541,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30461__auto__ = null;
var cljs$core$async$state_machine__30461__auto____0 = (function (){
var statearr_32533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32533[(0)] = cljs$core$async$state_machine__30461__auto__);

(statearr_32533[(1)] = (1));

return statearr_32533;
});
var cljs$core$async$state_machine__30461__auto____1 = (function (state_32489){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_32489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e32534){if((e32534 instanceof Object)){
var ex__30464__auto__ = e32534;
var statearr_32535_32570 = state_32489;
(statearr_32535_32570[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32571 = state_32489;
state_32489 = G__32571;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$state_machine__30461__auto__ = function(state_32489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30461__auto____1.call(this,state_32489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30461__auto____0;
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30461__auto____1;
return cljs$core$async$state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___32541,mults,ensure_mult,p))
})();
var state__30576__auto__ = (function (){var statearr_32536 = f__30575__auto__.call(null);
(statearr_32536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___32541);

return statearr_32536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___32541,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args32572 = [];
var len__28223__auto___32575 = arguments.length;
var i__28224__auto___32576 = (0);
while(true){
if((i__28224__auto___32576 < len__28223__auto___32575)){
args32572.push((arguments[i__28224__auto___32576]));

var G__32577 = (i__28224__auto___32576 + (1));
i__28224__auto___32576 = G__32577;
continue;
} else {
}
break;
}

var G__32574 = args32572.length;
switch (G__32574) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32572.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32579 = [];
var len__28223__auto___32582 = arguments.length;
var i__28224__auto___32583 = (0);
while(true){
if((i__28224__auto___32583 < len__28223__auto___32582)){
args32579.push((arguments[i__28224__auto___32583]));

var G__32584 = (i__28224__auto___32583 + (1));
i__28224__auto___32583 = G__32584;
continue;
} else {
}
break;
}

var G__32581 = args32579.length;
switch (G__32581) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32579.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args32586 = [];
var len__28223__auto___32657 = arguments.length;
var i__28224__auto___32658 = (0);
while(true){
if((i__28224__auto___32658 < len__28223__auto___32657)){
args32586.push((arguments[i__28224__auto___32658]));

var G__32659 = (i__28224__auto___32658 + (1));
i__28224__auto___32658 = G__32659;
continue;
} else {
}
break;
}

var G__32588 = args32586.length;
switch (G__32588) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32586.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30574__auto___32661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___32661,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___32661,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32627){
var state_val_32628 = (state_32627[(1)]);
if((state_val_32628 === (7))){
var state_32627__$1 = state_32627;
var statearr_32629_32662 = state_32627__$1;
(statearr_32629_32662[(2)] = null);

(statearr_32629_32662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (1))){
var state_32627__$1 = state_32627;
var statearr_32630_32663 = state_32627__$1;
(statearr_32630_32663[(2)] = null);

(statearr_32630_32663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (4))){
var inst_32591 = (state_32627[(7)]);
var inst_32593 = (inst_32591 < cnt);
var state_32627__$1 = state_32627;
if(cljs.core.truth_(inst_32593)){
var statearr_32631_32664 = state_32627__$1;
(statearr_32631_32664[(1)] = (6));

} else {
var statearr_32632_32665 = state_32627__$1;
(statearr_32632_32665[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (15))){
var inst_32623 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
var statearr_32633_32666 = state_32627__$1;
(statearr_32633_32666[(2)] = inst_32623);

(statearr_32633_32666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (13))){
var inst_32616 = cljs.core.async.close_BANG_.call(null,out);
var state_32627__$1 = state_32627;
var statearr_32634_32667 = state_32627__$1;
(statearr_32634_32667[(2)] = inst_32616);

(statearr_32634_32667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (6))){
var state_32627__$1 = state_32627;
var statearr_32635_32668 = state_32627__$1;
(statearr_32635_32668[(2)] = null);

(statearr_32635_32668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (3))){
var inst_32625 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32627__$1,inst_32625);
} else {
if((state_val_32628 === (12))){
var inst_32613 = (state_32627[(8)]);
var inst_32613__$1 = (state_32627[(2)]);
var inst_32614 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32613__$1);
var state_32627__$1 = (function (){var statearr_32636 = state_32627;
(statearr_32636[(8)] = inst_32613__$1);

return statearr_32636;
})();
if(cljs.core.truth_(inst_32614)){
var statearr_32637_32669 = state_32627__$1;
(statearr_32637_32669[(1)] = (13));

} else {
var statearr_32638_32670 = state_32627__$1;
(statearr_32638_32670[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (2))){
var inst_32590 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32591 = (0);
var state_32627__$1 = (function (){var statearr_32639 = state_32627;
(statearr_32639[(7)] = inst_32591);

(statearr_32639[(9)] = inst_32590);

return statearr_32639;
})();
var statearr_32640_32671 = state_32627__$1;
(statearr_32640_32671[(2)] = null);

(statearr_32640_32671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (11))){
var inst_32591 = (state_32627[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32627,(10),Object,null,(9));
var inst_32600 = chs__$1.call(null,inst_32591);
var inst_32601 = done.call(null,inst_32591);
var inst_32602 = cljs.core.async.take_BANG_.call(null,inst_32600,inst_32601);
var state_32627__$1 = state_32627;
var statearr_32641_32672 = state_32627__$1;
(statearr_32641_32672[(2)] = inst_32602);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32627__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (9))){
var inst_32591 = (state_32627[(7)]);
var inst_32604 = (state_32627[(2)]);
var inst_32605 = (inst_32591 + (1));
var inst_32591__$1 = inst_32605;
var state_32627__$1 = (function (){var statearr_32642 = state_32627;
(statearr_32642[(10)] = inst_32604);

(statearr_32642[(7)] = inst_32591__$1);

return statearr_32642;
})();
var statearr_32643_32673 = state_32627__$1;
(statearr_32643_32673[(2)] = null);

(statearr_32643_32673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (5))){
var inst_32611 = (state_32627[(2)]);
var state_32627__$1 = (function (){var statearr_32644 = state_32627;
(statearr_32644[(11)] = inst_32611);

return statearr_32644;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32627__$1,(12),dchan);
} else {
if((state_val_32628 === (14))){
var inst_32613 = (state_32627[(8)]);
var inst_32618 = cljs.core.apply.call(null,f,inst_32613);
var state_32627__$1 = state_32627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32627__$1,(16),out,inst_32618);
} else {
if((state_val_32628 === (16))){
var inst_32620 = (state_32627[(2)]);
var state_32627__$1 = (function (){var statearr_32645 = state_32627;
(statearr_32645[(12)] = inst_32620);

return statearr_32645;
})();
var statearr_32646_32674 = state_32627__$1;
(statearr_32646_32674[(2)] = null);

(statearr_32646_32674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (10))){
var inst_32595 = (state_32627[(2)]);
var inst_32596 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32627__$1 = (function (){var statearr_32647 = state_32627;
(statearr_32647[(13)] = inst_32595);

return statearr_32647;
})();
var statearr_32648_32675 = state_32627__$1;
(statearr_32648_32675[(2)] = inst_32596);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32627__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (8))){
var inst_32609 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
var statearr_32649_32676 = state_32627__$1;
(statearr_32649_32676[(2)] = inst_32609);

(statearr_32649_32676[(1)] = (5));


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
});})(c__30574__auto___32661,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30460__auto__,c__30574__auto___32661,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30461__auto__ = null;
var cljs$core$async$state_machine__30461__auto____0 = (function (){
var statearr_32653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32653[(0)] = cljs$core$async$state_machine__30461__auto__);

(statearr_32653[(1)] = (1));

return statearr_32653;
});
var cljs$core$async$state_machine__30461__auto____1 = (function (state_32627){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_32627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e32654){if((e32654 instanceof Object)){
var ex__30464__auto__ = e32654;
var statearr_32655_32677 = state_32627;
(statearr_32655_32677[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32678 = state_32627;
state_32627 = G__32678;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$state_machine__30461__auto__ = function(state_32627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30461__auto____1.call(this,state_32627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30461__auto____0;
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30461__auto____1;
return cljs$core$async$state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___32661,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30576__auto__ = (function (){var statearr_32656 = f__30575__auto__.call(null);
(statearr_32656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___32661);

return statearr_32656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___32661,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args32680 = [];
var len__28223__auto___32738 = arguments.length;
var i__28224__auto___32739 = (0);
while(true){
if((i__28224__auto___32739 < len__28223__auto___32738)){
args32680.push((arguments[i__28224__auto___32739]));

var G__32740 = (i__28224__auto___32739 + (1));
i__28224__auto___32739 = G__32740;
continue;
} else {
}
break;
}

var G__32682 = args32680.length;
switch (G__32682) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32680.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30574__auto___32742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___32742,out){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___32742,out){
return (function (state_32714){
var state_val_32715 = (state_32714[(1)]);
if((state_val_32715 === (7))){
var inst_32693 = (state_32714[(7)]);
var inst_32694 = (state_32714[(8)]);
var inst_32693__$1 = (state_32714[(2)]);
var inst_32694__$1 = cljs.core.nth.call(null,inst_32693__$1,(0),null);
var inst_32695 = cljs.core.nth.call(null,inst_32693__$1,(1),null);
var inst_32696 = (inst_32694__$1 == null);
var state_32714__$1 = (function (){var statearr_32716 = state_32714;
(statearr_32716[(7)] = inst_32693__$1);

(statearr_32716[(8)] = inst_32694__$1);

(statearr_32716[(9)] = inst_32695);

return statearr_32716;
})();
if(cljs.core.truth_(inst_32696)){
var statearr_32717_32743 = state_32714__$1;
(statearr_32717_32743[(1)] = (8));

} else {
var statearr_32718_32744 = state_32714__$1;
(statearr_32718_32744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32715 === (1))){
var inst_32683 = cljs.core.vec.call(null,chs);
var inst_32684 = inst_32683;
var state_32714__$1 = (function (){var statearr_32719 = state_32714;
(statearr_32719[(10)] = inst_32684);

return statearr_32719;
})();
var statearr_32720_32745 = state_32714__$1;
(statearr_32720_32745[(2)] = null);

(statearr_32720_32745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32715 === (4))){
var inst_32684 = (state_32714[(10)]);
var state_32714__$1 = state_32714;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32714__$1,(7),inst_32684);
} else {
if((state_val_32715 === (6))){
var inst_32710 = (state_32714[(2)]);
var state_32714__$1 = state_32714;
var statearr_32721_32746 = state_32714__$1;
(statearr_32721_32746[(2)] = inst_32710);

(statearr_32721_32746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32715 === (3))){
var inst_32712 = (state_32714[(2)]);
var state_32714__$1 = state_32714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32714__$1,inst_32712);
} else {
if((state_val_32715 === (2))){
var inst_32684 = (state_32714[(10)]);
var inst_32686 = cljs.core.count.call(null,inst_32684);
var inst_32687 = (inst_32686 > (0));
var state_32714__$1 = state_32714;
if(cljs.core.truth_(inst_32687)){
var statearr_32723_32747 = state_32714__$1;
(statearr_32723_32747[(1)] = (4));

} else {
var statearr_32724_32748 = state_32714__$1;
(statearr_32724_32748[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32715 === (11))){
var inst_32684 = (state_32714[(10)]);
var inst_32703 = (state_32714[(2)]);
var tmp32722 = inst_32684;
var inst_32684__$1 = tmp32722;
var state_32714__$1 = (function (){var statearr_32725 = state_32714;
(statearr_32725[(10)] = inst_32684__$1);

(statearr_32725[(11)] = inst_32703);

return statearr_32725;
})();
var statearr_32726_32749 = state_32714__$1;
(statearr_32726_32749[(2)] = null);

(statearr_32726_32749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32715 === (9))){
var inst_32694 = (state_32714[(8)]);
var state_32714__$1 = state_32714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32714__$1,(11),out,inst_32694);
} else {
if((state_val_32715 === (5))){
var inst_32708 = cljs.core.async.close_BANG_.call(null,out);
var state_32714__$1 = state_32714;
var statearr_32727_32750 = state_32714__$1;
(statearr_32727_32750[(2)] = inst_32708);

(statearr_32727_32750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32715 === (10))){
var inst_32706 = (state_32714[(2)]);
var state_32714__$1 = state_32714;
var statearr_32728_32751 = state_32714__$1;
(statearr_32728_32751[(2)] = inst_32706);

(statearr_32728_32751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32715 === (8))){
var inst_32693 = (state_32714[(7)]);
var inst_32694 = (state_32714[(8)]);
var inst_32684 = (state_32714[(10)]);
var inst_32695 = (state_32714[(9)]);
var inst_32698 = (function (){var cs = inst_32684;
var vec__32689 = inst_32693;
var v = inst_32694;
var c = inst_32695;
return ((function (cs,vec__32689,v,c,inst_32693,inst_32694,inst_32684,inst_32695,state_val_32715,c__30574__auto___32742,out){
return (function (p1__32679_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32679_SHARP_);
});
;})(cs,vec__32689,v,c,inst_32693,inst_32694,inst_32684,inst_32695,state_val_32715,c__30574__auto___32742,out))
})();
var inst_32699 = cljs.core.filterv.call(null,inst_32698,inst_32684);
var inst_32684__$1 = inst_32699;
var state_32714__$1 = (function (){var statearr_32729 = state_32714;
(statearr_32729[(10)] = inst_32684__$1);

return statearr_32729;
})();
var statearr_32730_32752 = state_32714__$1;
(statearr_32730_32752[(2)] = null);

(statearr_32730_32752[(1)] = (2));


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
});})(c__30574__auto___32742,out))
;
return ((function (switch__30460__auto__,c__30574__auto___32742,out){
return (function() {
var cljs$core$async$state_machine__30461__auto__ = null;
var cljs$core$async$state_machine__30461__auto____0 = (function (){
var statearr_32734 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32734[(0)] = cljs$core$async$state_machine__30461__auto__);

(statearr_32734[(1)] = (1));

return statearr_32734;
});
var cljs$core$async$state_machine__30461__auto____1 = (function (state_32714){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_32714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e32735){if((e32735 instanceof Object)){
var ex__30464__auto__ = e32735;
var statearr_32736_32753 = state_32714;
(statearr_32736_32753[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32754 = state_32714;
state_32714 = G__32754;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$state_machine__30461__auto__ = function(state_32714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30461__auto____1.call(this,state_32714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30461__auto____0;
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30461__auto____1;
return cljs$core$async$state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___32742,out))
})();
var state__30576__auto__ = (function (){var statearr_32737 = f__30575__auto__.call(null);
(statearr_32737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___32742);

return statearr_32737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___32742,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32755 = [];
var len__28223__auto___32804 = arguments.length;
var i__28224__auto___32805 = (0);
while(true){
if((i__28224__auto___32805 < len__28223__auto___32804)){
args32755.push((arguments[i__28224__auto___32805]));

var G__32806 = (i__28224__auto___32805 + (1));
i__28224__auto___32805 = G__32806;
continue;
} else {
}
break;
}

var G__32757 = args32755.length;
switch (G__32757) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32755.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30574__auto___32808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___32808,out){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___32808,out){
return (function (state_32781){
var state_val_32782 = (state_32781[(1)]);
if((state_val_32782 === (7))){
var inst_32763 = (state_32781[(7)]);
var inst_32763__$1 = (state_32781[(2)]);
var inst_32764 = (inst_32763__$1 == null);
var inst_32765 = cljs.core.not.call(null,inst_32764);
var state_32781__$1 = (function (){var statearr_32783 = state_32781;
(statearr_32783[(7)] = inst_32763__$1);

return statearr_32783;
})();
if(inst_32765){
var statearr_32784_32809 = state_32781__$1;
(statearr_32784_32809[(1)] = (8));

} else {
var statearr_32785_32810 = state_32781__$1;
(statearr_32785_32810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (1))){
var inst_32758 = (0);
var state_32781__$1 = (function (){var statearr_32786 = state_32781;
(statearr_32786[(8)] = inst_32758);

return statearr_32786;
})();
var statearr_32787_32811 = state_32781__$1;
(statearr_32787_32811[(2)] = null);

(statearr_32787_32811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (4))){
var state_32781__$1 = state_32781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32781__$1,(7),ch);
} else {
if((state_val_32782 === (6))){
var inst_32776 = (state_32781[(2)]);
var state_32781__$1 = state_32781;
var statearr_32788_32812 = state_32781__$1;
(statearr_32788_32812[(2)] = inst_32776);

(statearr_32788_32812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (3))){
var inst_32778 = (state_32781[(2)]);
var inst_32779 = cljs.core.async.close_BANG_.call(null,out);
var state_32781__$1 = (function (){var statearr_32789 = state_32781;
(statearr_32789[(9)] = inst_32778);

return statearr_32789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32781__$1,inst_32779);
} else {
if((state_val_32782 === (2))){
var inst_32758 = (state_32781[(8)]);
var inst_32760 = (inst_32758 < n);
var state_32781__$1 = state_32781;
if(cljs.core.truth_(inst_32760)){
var statearr_32790_32813 = state_32781__$1;
(statearr_32790_32813[(1)] = (4));

} else {
var statearr_32791_32814 = state_32781__$1;
(statearr_32791_32814[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (11))){
var inst_32758 = (state_32781[(8)]);
var inst_32768 = (state_32781[(2)]);
var inst_32769 = (inst_32758 + (1));
var inst_32758__$1 = inst_32769;
var state_32781__$1 = (function (){var statearr_32792 = state_32781;
(statearr_32792[(8)] = inst_32758__$1);

(statearr_32792[(10)] = inst_32768);

return statearr_32792;
})();
var statearr_32793_32815 = state_32781__$1;
(statearr_32793_32815[(2)] = null);

(statearr_32793_32815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (9))){
var state_32781__$1 = state_32781;
var statearr_32794_32816 = state_32781__$1;
(statearr_32794_32816[(2)] = null);

(statearr_32794_32816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (5))){
var state_32781__$1 = state_32781;
var statearr_32795_32817 = state_32781__$1;
(statearr_32795_32817[(2)] = null);

(statearr_32795_32817[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (10))){
var inst_32773 = (state_32781[(2)]);
var state_32781__$1 = state_32781;
var statearr_32796_32818 = state_32781__$1;
(statearr_32796_32818[(2)] = inst_32773);

(statearr_32796_32818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (8))){
var inst_32763 = (state_32781[(7)]);
var state_32781__$1 = state_32781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32781__$1,(11),out,inst_32763);
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
});})(c__30574__auto___32808,out))
;
return ((function (switch__30460__auto__,c__30574__auto___32808,out){
return (function() {
var cljs$core$async$state_machine__30461__auto__ = null;
var cljs$core$async$state_machine__30461__auto____0 = (function (){
var statearr_32800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32800[(0)] = cljs$core$async$state_machine__30461__auto__);

(statearr_32800[(1)] = (1));

return statearr_32800;
});
var cljs$core$async$state_machine__30461__auto____1 = (function (state_32781){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_32781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e32801){if((e32801 instanceof Object)){
var ex__30464__auto__ = e32801;
var statearr_32802_32819 = state_32781;
(statearr_32802_32819[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32820 = state_32781;
state_32781 = G__32820;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$state_machine__30461__auto__ = function(state_32781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30461__auto____1.call(this,state_32781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30461__auto____0;
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30461__auto____1;
return cljs$core$async$state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___32808,out))
})();
var state__30576__auto__ = (function (){var statearr_32803 = f__30575__auto__.call(null);
(statearr_32803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___32808);

return statearr_32803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___32808,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32828 = (function (f,ch,meta32829){
this.f = f;
this.ch = ch;
this.meta32829 = meta32829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32830,meta32829__$1){
var self__ = this;
var _32830__$1 = this;
return (new cljs.core.async.t_cljs$core$async32828(self__.f,self__.ch,meta32829__$1));
});

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32830){
var self__ = this;
var _32830__$1 = this;
return self__.meta32829;
});

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32831 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32831 = (function (f,ch,meta32829,_,fn1,meta32832){
this.f = f;
this.ch = ch;
this.meta32829 = meta32829;
this._ = _;
this.fn1 = fn1;
this.meta32832 = meta32832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32833,meta32832__$1){
var self__ = this;
var _32833__$1 = this;
return (new cljs.core.async.t_cljs$core$async32831(self__.f,self__.ch,self__.meta32829,self__._,self__.fn1,meta32832__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32833){
var self__ = this;
var _32833__$1 = this;
return self__.meta32832;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32821_SHARP_){
return f1.call(null,(((p1__32821_SHARP_ == null))?null:self__.f.call(null,p1__32821_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32831.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32829","meta32829",-1753990631,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32828","cljs.core.async/t_cljs$core$async32828",505402571,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32832","meta32832",-709029909,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32831.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32831";

cljs.core.async.t_cljs$core$async32831.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27659__auto__,writer__27660__auto__,opt__27661__auto__){
return cljs.core._write.call(null,writer__27660__auto__,"cljs.core.async/t_cljs$core$async32831");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32831 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32831(f__$1,ch__$1,meta32829__$1,___$2,fn1__$1,meta32832){
return (new cljs.core.async.t_cljs$core$async32831(f__$1,ch__$1,meta32829__$1,___$2,fn1__$1,meta32832));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32831(self__.f,self__.ch,self__.meta32829,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26990__auto__ = ret;
if(cljs.core.truth_(and__26990__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26990__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32829","meta32829",-1753990631,null)], null);
});

cljs.core.async.t_cljs$core$async32828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32828";

cljs.core.async.t_cljs$core$async32828.cljs$lang$ctorPrWriter = (function (this__27659__auto__,writer__27660__auto__,opt__27661__auto__){
return cljs.core._write.call(null,writer__27660__auto__,"cljs.core.async/t_cljs$core$async32828");
});

cljs.core.async.__GT_t_cljs$core$async32828 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32828(f__$1,ch__$1,meta32829){
return (new cljs.core.async.t_cljs$core$async32828(f__$1,ch__$1,meta32829));
});

}

return (new cljs.core.async.t_cljs$core$async32828(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32837 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32837 = (function (f,ch,meta32838){
this.f = f;
this.ch = ch;
this.meta32838 = meta32838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32839,meta32838__$1){
var self__ = this;
var _32839__$1 = this;
return (new cljs.core.async.t_cljs$core$async32837(self__.f,self__.ch,meta32838__$1));
});

cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32839){
var self__ = this;
var _32839__$1 = this;
return self__.meta32838;
});

cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32838","meta32838",1074754630,null)], null);
});

cljs.core.async.t_cljs$core$async32837.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32837";

cljs.core.async.t_cljs$core$async32837.cljs$lang$ctorPrWriter = (function (this__27659__auto__,writer__27660__auto__,opt__27661__auto__){
return cljs.core._write.call(null,writer__27660__auto__,"cljs.core.async/t_cljs$core$async32837");
});

cljs.core.async.__GT_t_cljs$core$async32837 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32837(f__$1,ch__$1,meta32838){
return (new cljs.core.async.t_cljs$core$async32837(f__$1,ch__$1,meta32838));
});

}

return (new cljs.core.async.t_cljs$core$async32837(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32843 = (function (p,ch,meta32844){
this.p = p;
this.ch = ch;
this.meta32844 = meta32844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32845,meta32844__$1){
var self__ = this;
var _32845__$1 = this;
return (new cljs.core.async.t_cljs$core$async32843(self__.p,self__.ch,meta32844__$1));
});

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32845){
var self__ = this;
var _32845__$1 = this;
return self__.meta32844;
});

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32844","meta32844",-1511274291,null)], null);
});

cljs.core.async.t_cljs$core$async32843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32843";

cljs.core.async.t_cljs$core$async32843.cljs$lang$ctorPrWriter = (function (this__27659__auto__,writer__27660__auto__,opt__27661__auto__){
return cljs.core._write.call(null,writer__27660__auto__,"cljs.core.async/t_cljs$core$async32843");
});

cljs.core.async.__GT_t_cljs$core$async32843 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32843(p__$1,ch__$1,meta32844){
return (new cljs.core.async.t_cljs$core$async32843(p__$1,ch__$1,meta32844));
});

}

return (new cljs.core.async.t_cljs$core$async32843(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32846 = [];
var len__28223__auto___32890 = arguments.length;
var i__28224__auto___32891 = (0);
while(true){
if((i__28224__auto___32891 < len__28223__auto___32890)){
args32846.push((arguments[i__28224__auto___32891]));

var G__32892 = (i__28224__auto___32891 + (1));
i__28224__auto___32891 = G__32892;
continue;
} else {
}
break;
}

var G__32848 = args32846.length;
switch (G__32848) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32846.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30574__auto___32894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___32894,out){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___32894,out){
return (function (state_32869){
var state_val_32870 = (state_32869[(1)]);
if((state_val_32870 === (7))){
var inst_32865 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32871_32895 = state_32869__$1;
(statearr_32871_32895[(2)] = inst_32865);

(statearr_32871_32895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (1))){
var state_32869__$1 = state_32869;
var statearr_32872_32896 = state_32869__$1;
(statearr_32872_32896[(2)] = null);

(statearr_32872_32896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (4))){
var inst_32851 = (state_32869[(7)]);
var inst_32851__$1 = (state_32869[(2)]);
var inst_32852 = (inst_32851__$1 == null);
var state_32869__$1 = (function (){var statearr_32873 = state_32869;
(statearr_32873[(7)] = inst_32851__$1);

return statearr_32873;
})();
if(cljs.core.truth_(inst_32852)){
var statearr_32874_32897 = state_32869__$1;
(statearr_32874_32897[(1)] = (5));

} else {
var statearr_32875_32898 = state_32869__$1;
(statearr_32875_32898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (6))){
var inst_32851 = (state_32869[(7)]);
var inst_32856 = p.call(null,inst_32851);
var state_32869__$1 = state_32869;
if(cljs.core.truth_(inst_32856)){
var statearr_32876_32899 = state_32869__$1;
(statearr_32876_32899[(1)] = (8));

} else {
var statearr_32877_32900 = state_32869__$1;
(statearr_32877_32900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (3))){
var inst_32867 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32869__$1,inst_32867);
} else {
if((state_val_32870 === (2))){
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32869__$1,(4),ch);
} else {
if((state_val_32870 === (11))){
var inst_32859 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32878_32901 = state_32869__$1;
(statearr_32878_32901[(2)] = inst_32859);

(statearr_32878_32901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (9))){
var state_32869__$1 = state_32869;
var statearr_32879_32902 = state_32869__$1;
(statearr_32879_32902[(2)] = null);

(statearr_32879_32902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (5))){
var inst_32854 = cljs.core.async.close_BANG_.call(null,out);
var state_32869__$1 = state_32869;
var statearr_32880_32903 = state_32869__$1;
(statearr_32880_32903[(2)] = inst_32854);

(statearr_32880_32903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (10))){
var inst_32862 = (state_32869[(2)]);
var state_32869__$1 = (function (){var statearr_32881 = state_32869;
(statearr_32881[(8)] = inst_32862);

return statearr_32881;
})();
var statearr_32882_32904 = state_32869__$1;
(statearr_32882_32904[(2)] = null);

(statearr_32882_32904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (8))){
var inst_32851 = (state_32869[(7)]);
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32869__$1,(11),out,inst_32851);
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
});})(c__30574__auto___32894,out))
;
return ((function (switch__30460__auto__,c__30574__auto___32894,out){
return (function() {
var cljs$core$async$state_machine__30461__auto__ = null;
var cljs$core$async$state_machine__30461__auto____0 = (function (){
var statearr_32886 = [null,null,null,null,null,null,null,null,null];
(statearr_32886[(0)] = cljs$core$async$state_machine__30461__auto__);

(statearr_32886[(1)] = (1));

return statearr_32886;
});
var cljs$core$async$state_machine__30461__auto____1 = (function (state_32869){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_32869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e32887){if((e32887 instanceof Object)){
var ex__30464__auto__ = e32887;
var statearr_32888_32905 = state_32869;
(statearr_32888_32905[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32906 = state_32869;
state_32869 = G__32906;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$state_machine__30461__auto__ = function(state_32869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30461__auto____1.call(this,state_32869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30461__auto____0;
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30461__auto____1;
return cljs$core$async$state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___32894,out))
})();
var state__30576__auto__ = (function (){var statearr_32889 = f__30575__auto__.call(null);
(statearr_32889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___32894);

return statearr_32889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___32894,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32907 = [];
var len__28223__auto___32910 = arguments.length;
var i__28224__auto___32911 = (0);
while(true){
if((i__28224__auto___32911 < len__28223__auto___32910)){
args32907.push((arguments[i__28224__auto___32911]));

var G__32912 = (i__28224__auto___32911 + (1));
i__28224__auto___32911 = G__32912;
continue;
} else {
}
break;
}

var G__32909 = args32907.length;
switch (G__32909) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32907.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30574__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto__){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto__){
return (function (state_33079){
var state_val_33080 = (state_33079[(1)]);
if((state_val_33080 === (7))){
var inst_33075 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
var statearr_33081_33122 = state_33079__$1;
(statearr_33081_33122[(2)] = inst_33075);

(statearr_33081_33122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (20))){
var inst_33045 = (state_33079[(7)]);
var inst_33056 = (state_33079[(2)]);
var inst_33057 = cljs.core.next.call(null,inst_33045);
var inst_33031 = inst_33057;
var inst_33032 = null;
var inst_33033 = (0);
var inst_33034 = (0);
var state_33079__$1 = (function (){var statearr_33082 = state_33079;
(statearr_33082[(8)] = inst_33032);

(statearr_33082[(9)] = inst_33031);

(statearr_33082[(10)] = inst_33033);

(statearr_33082[(11)] = inst_33056);

(statearr_33082[(12)] = inst_33034);

return statearr_33082;
})();
var statearr_33083_33123 = state_33079__$1;
(statearr_33083_33123[(2)] = null);

(statearr_33083_33123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (1))){
var state_33079__$1 = state_33079;
var statearr_33084_33124 = state_33079__$1;
(statearr_33084_33124[(2)] = null);

(statearr_33084_33124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (4))){
var inst_33020 = (state_33079[(13)]);
var inst_33020__$1 = (state_33079[(2)]);
var inst_33021 = (inst_33020__$1 == null);
var state_33079__$1 = (function (){var statearr_33085 = state_33079;
(statearr_33085[(13)] = inst_33020__$1);

return statearr_33085;
})();
if(cljs.core.truth_(inst_33021)){
var statearr_33086_33125 = state_33079__$1;
(statearr_33086_33125[(1)] = (5));

} else {
var statearr_33087_33126 = state_33079__$1;
(statearr_33087_33126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (15))){
var state_33079__$1 = state_33079;
var statearr_33091_33127 = state_33079__$1;
(statearr_33091_33127[(2)] = null);

(statearr_33091_33127[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (21))){
var state_33079__$1 = state_33079;
var statearr_33092_33128 = state_33079__$1;
(statearr_33092_33128[(2)] = null);

(statearr_33092_33128[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (13))){
var inst_33032 = (state_33079[(8)]);
var inst_33031 = (state_33079[(9)]);
var inst_33033 = (state_33079[(10)]);
var inst_33034 = (state_33079[(12)]);
var inst_33041 = (state_33079[(2)]);
var inst_33042 = (inst_33034 + (1));
var tmp33088 = inst_33032;
var tmp33089 = inst_33031;
var tmp33090 = inst_33033;
var inst_33031__$1 = tmp33089;
var inst_33032__$1 = tmp33088;
var inst_33033__$1 = tmp33090;
var inst_33034__$1 = inst_33042;
var state_33079__$1 = (function (){var statearr_33093 = state_33079;
(statearr_33093[(8)] = inst_33032__$1);

(statearr_33093[(9)] = inst_33031__$1);

(statearr_33093[(10)] = inst_33033__$1);

(statearr_33093[(14)] = inst_33041);

(statearr_33093[(12)] = inst_33034__$1);

return statearr_33093;
})();
var statearr_33094_33129 = state_33079__$1;
(statearr_33094_33129[(2)] = null);

(statearr_33094_33129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (22))){
var state_33079__$1 = state_33079;
var statearr_33095_33130 = state_33079__$1;
(statearr_33095_33130[(2)] = null);

(statearr_33095_33130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (6))){
var inst_33020 = (state_33079[(13)]);
var inst_33029 = f.call(null,inst_33020);
var inst_33030 = cljs.core.seq.call(null,inst_33029);
var inst_33031 = inst_33030;
var inst_33032 = null;
var inst_33033 = (0);
var inst_33034 = (0);
var state_33079__$1 = (function (){var statearr_33096 = state_33079;
(statearr_33096[(8)] = inst_33032);

(statearr_33096[(9)] = inst_33031);

(statearr_33096[(10)] = inst_33033);

(statearr_33096[(12)] = inst_33034);

return statearr_33096;
})();
var statearr_33097_33131 = state_33079__$1;
(statearr_33097_33131[(2)] = null);

(statearr_33097_33131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (17))){
var inst_33045 = (state_33079[(7)]);
var inst_33049 = cljs.core.chunk_first.call(null,inst_33045);
var inst_33050 = cljs.core.chunk_rest.call(null,inst_33045);
var inst_33051 = cljs.core.count.call(null,inst_33049);
var inst_33031 = inst_33050;
var inst_33032 = inst_33049;
var inst_33033 = inst_33051;
var inst_33034 = (0);
var state_33079__$1 = (function (){var statearr_33098 = state_33079;
(statearr_33098[(8)] = inst_33032);

(statearr_33098[(9)] = inst_33031);

(statearr_33098[(10)] = inst_33033);

(statearr_33098[(12)] = inst_33034);

return statearr_33098;
})();
var statearr_33099_33132 = state_33079__$1;
(statearr_33099_33132[(2)] = null);

(statearr_33099_33132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (3))){
var inst_33077 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33079__$1,inst_33077);
} else {
if((state_val_33080 === (12))){
var inst_33065 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
var statearr_33100_33133 = state_33079__$1;
(statearr_33100_33133[(2)] = inst_33065);

(statearr_33100_33133[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (2))){
var state_33079__$1 = state_33079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33079__$1,(4),in$);
} else {
if((state_val_33080 === (23))){
var inst_33073 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
var statearr_33101_33134 = state_33079__$1;
(statearr_33101_33134[(2)] = inst_33073);

(statearr_33101_33134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (19))){
var inst_33060 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
var statearr_33102_33135 = state_33079__$1;
(statearr_33102_33135[(2)] = inst_33060);

(statearr_33102_33135[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (11))){
var inst_33031 = (state_33079[(9)]);
var inst_33045 = (state_33079[(7)]);
var inst_33045__$1 = cljs.core.seq.call(null,inst_33031);
var state_33079__$1 = (function (){var statearr_33103 = state_33079;
(statearr_33103[(7)] = inst_33045__$1);

return statearr_33103;
})();
if(inst_33045__$1){
var statearr_33104_33136 = state_33079__$1;
(statearr_33104_33136[(1)] = (14));

} else {
var statearr_33105_33137 = state_33079__$1;
(statearr_33105_33137[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (9))){
var inst_33067 = (state_33079[(2)]);
var inst_33068 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33079__$1 = (function (){var statearr_33106 = state_33079;
(statearr_33106[(15)] = inst_33067);

return statearr_33106;
})();
if(cljs.core.truth_(inst_33068)){
var statearr_33107_33138 = state_33079__$1;
(statearr_33107_33138[(1)] = (21));

} else {
var statearr_33108_33139 = state_33079__$1;
(statearr_33108_33139[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (5))){
var inst_33023 = cljs.core.async.close_BANG_.call(null,out);
var state_33079__$1 = state_33079;
var statearr_33109_33140 = state_33079__$1;
(statearr_33109_33140[(2)] = inst_33023);

(statearr_33109_33140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (14))){
var inst_33045 = (state_33079[(7)]);
var inst_33047 = cljs.core.chunked_seq_QMARK_.call(null,inst_33045);
var state_33079__$1 = state_33079;
if(inst_33047){
var statearr_33110_33141 = state_33079__$1;
(statearr_33110_33141[(1)] = (17));

} else {
var statearr_33111_33142 = state_33079__$1;
(statearr_33111_33142[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (16))){
var inst_33063 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
var statearr_33112_33143 = state_33079__$1;
(statearr_33112_33143[(2)] = inst_33063);

(statearr_33112_33143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (10))){
var inst_33032 = (state_33079[(8)]);
var inst_33034 = (state_33079[(12)]);
var inst_33039 = cljs.core._nth.call(null,inst_33032,inst_33034);
var state_33079__$1 = state_33079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33079__$1,(13),out,inst_33039);
} else {
if((state_val_33080 === (18))){
var inst_33045 = (state_33079[(7)]);
var inst_33054 = cljs.core.first.call(null,inst_33045);
var state_33079__$1 = state_33079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33079__$1,(20),out,inst_33054);
} else {
if((state_val_33080 === (8))){
var inst_33033 = (state_33079[(10)]);
var inst_33034 = (state_33079[(12)]);
var inst_33036 = (inst_33034 < inst_33033);
var inst_33037 = inst_33036;
var state_33079__$1 = state_33079;
if(cljs.core.truth_(inst_33037)){
var statearr_33113_33144 = state_33079__$1;
(statearr_33113_33144[(1)] = (10));

} else {
var statearr_33114_33145 = state_33079__$1;
(statearr_33114_33145[(1)] = (11));

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
});})(c__30574__auto__))
;
return ((function (switch__30460__auto__,c__30574__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30461__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30461__auto____0 = (function (){
var statearr_33118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33118[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30461__auto__);

(statearr_33118[(1)] = (1));

return statearr_33118;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30461__auto____1 = (function (state_33079){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_33079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e33119){if((e33119 instanceof Object)){
var ex__30464__auto__ = e33119;
var statearr_33120_33146 = state_33079;
(statearr_33120_33146[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33147 = state_33079;
state_33079 = G__33147;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30461__auto__ = function(state_33079){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30461__auto____1.call(this,state_33079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30461__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30461__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto__))
})();
var state__30576__auto__ = (function (){var statearr_33121 = f__30575__auto__.call(null);
(statearr_33121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto__);

return statearr_33121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto__))
);

return c__30574__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33148 = [];
var len__28223__auto___33151 = arguments.length;
var i__28224__auto___33152 = (0);
while(true){
if((i__28224__auto___33152 < len__28223__auto___33151)){
args33148.push((arguments[i__28224__auto___33152]));

var G__33153 = (i__28224__auto___33152 + (1));
i__28224__auto___33152 = G__33153;
continue;
} else {
}
break;
}

var G__33150 = args33148.length;
switch (G__33150) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33148.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args33155 = [];
var len__28223__auto___33158 = arguments.length;
var i__28224__auto___33159 = (0);
while(true){
if((i__28224__auto___33159 < len__28223__auto___33158)){
args33155.push((arguments[i__28224__auto___33159]));

var G__33160 = (i__28224__auto___33159 + (1));
i__28224__auto___33159 = G__33160;
continue;
} else {
}
break;
}

var G__33157 = args33155.length;
switch (G__33157) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33155.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args33162 = [];
var len__28223__auto___33213 = arguments.length;
var i__28224__auto___33214 = (0);
while(true){
if((i__28224__auto___33214 < len__28223__auto___33213)){
args33162.push((arguments[i__28224__auto___33214]));

var G__33215 = (i__28224__auto___33214 + (1));
i__28224__auto___33214 = G__33215;
continue;
} else {
}
break;
}

var G__33164 = args33162.length;
switch (G__33164) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33162.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30574__auto___33217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___33217,out){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___33217,out){
return (function (state_33188){
var state_val_33189 = (state_33188[(1)]);
if((state_val_33189 === (7))){
var inst_33183 = (state_33188[(2)]);
var state_33188__$1 = state_33188;
var statearr_33190_33218 = state_33188__$1;
(statearr_33190_33218[(2)] = inst_33183);

(statearr_33190_33218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (1))){
var inst_33165 = null;
var state_33188__$1 = (function (){var statearr_33191 = state_33188;
(statearr_33191[(7)] = inst_33165);

return statearr_33191;
})();
var statearr_33192_33219 = state_33188__$1;
(statearr_33192_33219[(2)] = null);

(statearr_33192_33219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (4))){
var inst_33168 = (state_33188[(8)]);
var inst_33168__$1 = (state_33188[(2)]);
var inst_33169 = (inst_33168__$1 == null);
var inst_33170 = cljs.core.not.call(null,inst_33169);
var state_33188__$1 = (function (){var statearr_33193 = state_33188;
(statearr_33193[(8)] = inst_33168__$1);

return statearr_33193;
})();
if(inst_33170){
var statearr_33194_33220 = state_33188__$1;
(statearr_33194_33220[(1)] = (5));

} else {
var statearr_33195_33221 = state_33188__$1;
(statearr_33195_33221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (6))){
var state_33188__$1 = state_33188;
var statearr_33196_33222 = state_33188__$1;
(statearr_33196_33222[(2)] = null);

(statearr_33196_33222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (3))){
var inst_33185 = (state_33188[(2)]);
var inst_33186 = cljs.core.async.close_BANG_.call(null,out);
var state_33188__$1 = (function (){var statearr_33197 = state_33188;
(statearr_33197[(9)] = inst_33185);

return statearr_33197;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33188__$1,inst_33186);
} else {
if((state_val_33189 === (2))){
var state_33188__$1 = state_33188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33188__$1,(4),ch);
} else {
if((state_val_33189 === (11))){
var inst_33168 = (state_33188[(8)]);
var inst_33177 = (state_33188[(2)]);
var inst_33165 = inst_33168;
var state_33188__$1 = (function (){var statearr_33198 = state_33188;
(statearr_33198[(7)] = inst_33165);

(statearr_33198[(10)] = inst_33177);

return statearr_33198;
})();
var statearr_33199_33223 = state_33188__$1;
(statearr_33199_33223[(2)] = null);

(statearr_33199_33223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (9))){
var inst_33168 = (state_33188[(8)]);
var state_33188__$1 = state_33188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33188__$1,(11),out,inst_33168);
} else {
if((state_val_33189 === (5))){
var inst_33165 = (state_33188[(7)]);
var inst_33168 = (state_33188[(8)]);
var inst_33172 = cljs.core._EQ_.call(null,inst_33168,inst_33165);
var state_33188__$1 = state_33188;
if(inst_33172){
var statearr_33201_33224 = state_33188__$1;
(statearr_33201_33224[(1)] = (8));

} else {
var statearr_33202_33225 = state_33188__$1;
(statearr_33202_33225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (10))){
var inst_33180 = (state_33188[(2)]);
var state_33188__$1 = state_33188;
var statearr_33203_33226 = state_33188__$1;
(statearr_33203_33226[(2)] = inst_33180);

(statearr_33203_33226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33189 === (8))){
var inst_33165 = (state_33188[(7)]);
var tmp33200 = inst_33165;
var inst_33165__$1 = tmp33200;
var state_33188__$1 = (function (){var statearr_33204 = state_33188;
(statearr_33204[(7)] = inst_33165__$1);

return statearr_33204;
})();
var statearr_33205_33227 = state_33188__$1;
(statearr_33205_33227[(2)] = null);

(statearr_33205_33227[(1)] = (2));


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
});})(c__30574__auto___33217,out))
;
return ((function (switch__30460__auto__,c__30574__auto___33217,out){
return (function() {
var cljs$core$async$state_machine__30461__auto__ = null;
var cljs$core$async$state_machine__30461__auto____0 = (function (){
var statearr_33209 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33209[(0)] = cljs$core$async$state_machine__30461__auto__);

(statearr_33209[(1)] = (1));

return statearr_33209;
});
var cljs$core$async$state_machine__30461__auto____1 = (function (state_33188){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_33188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e33210){if((e33210 instanceof Object)){
var ex__30464__auto__ = e33210;
var statearr_33211_33228 = state_33188;
(statearr_33211_33228[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33229 = state_33188;
state_33188 = G__33229;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$state_machine__30461__auto__ = function(state_33188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30461__auto____1.call(this,state_33188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30461__auto____0;
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30461__auto____1;
return cljs$core$async$state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___33217,out))
})();
var state__30576__auto__ = (function (){var statearr_33212 = f__30575__auto__.call(null);
(statearr_33212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___33217);

return statearr_33212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___33217,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33230 = [];
var len__28223__auto___33300 = arguments.length;
var i__28224__auto___33301 = (0);
while(true){
if((i__28224__auto___33301 < len__28223__auto___33300)){
args33230.push((arguments[i__28224__auto___33301]));

var G__33302 = (i__28224__auto___33301 + (1));
i__28224__auto___33301 = G__33302;
continue;
} else {
}
break;
}

var G__33232 = args33230.length;
switch (G__33232) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33230.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30574__auto___33304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___33304,out){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___33304,out){
return (function (state_33270){
var state_val_33271 = (state_33270[(1)]);
if((state_val_33271 === (7))){
var inst_33266 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
var statearr_33272_33305 = state_33270__$1;
(statearr_33272_33305[(2)] = inst_33266);

(statearr_33272_33305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (1))){
var inst_33233 = (new Array(n));
var inst_33234 = inst_33233;
var inst_33235 = (0);
var state_33270__$1 = (function (){var statearr_33273 = state_33270;
(statearr_33273[(7)] = inst_33235);

(statearr_33273[(8)] = inst_33234);

return statearr_33273;
})();
var statearr_33274_33306 = state_33270__$1;
(statearr_33274_33306[(2)] = null);

(statearr_33274_33306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (4))){
var inst_33238 = (state_33270[(9)]);
var inst_33238__$1 = (state_33270[(2)]);
var inst_33239 = (inst_33238__$1 == null);
var inst_33240 = cljs.core.not.call(null,inst_33239);
var state_33270__$1 = (function (){var statearr_33275 = state_33270;
(statearr_33275[(9)] = inst_33238__$1);

return statearr_33275;
})();
if(inst_33240){
var statearr_33276_33307 = state_33270__$1;
(statearr_33276_33307[(1)] = (5));

} else {
var statearr_33277_33308 = state_33270__$1;
(statearr_33277_33308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (15))){
var inst_33260 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
var statearr_33278_33309 = state_33270__$1;
(statearr_33278_33309[(2)] = inst_33260);

(statearr_33278_33309[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (13))){
var state_33270__$1 = state_33270;
var statearr_33279_33310 = state_33270__$1;
(statearr_33279_33310[(2)] = null);

(statearr_33279_33310[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (6))){
var inst_33235 = (state_33270[(7)]);
var inst_33256 = (inst_33235 > (0));
var state_33270__$1 = state_33270;
if(cljs.core.truth_(inst_33256)){
var statearr_33280_33311 = state_33270__$1;
(statearr_33280_33311[(1)] = (12));

} else {
var statearr_33281_33312 = state_33270__$1;
(statearr_33281_33312[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (3))){
var inst_33268 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33270__$1,inst_33268);
} else {
if((state_val_33271 === (12))){
var inst_33234 = (state_33270[(8)]);
var inst_33258 = cljs.core.vec.call(null,inst_33234);
var state_33270__$1 = state_33270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33270__$1,(15),out,inst_33258);
} else {
if((state_val_33271 === (2))){
var state_33270__$1 = state_33270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33270__$1,(4),ch);
} else {
if((state_val_33271 === (11))){
var inst_33250 = (state_33270[(2)]);
var inst_33251 = (new Array(n));
var inst_33234 = inst_33251;
var inst_33235 = (0);
var state_33270__$1 = (function (){var statearr_33282 = state_33270;
(statearr_33282[(10)] = inst_33250);

(statearr_33282[(7)] = inst_33235);

(statearr_33282[(8)] = inst_33234);

return statearr_33282;
})();
var statearr_33283_33313 = state_33270__$1;
(statearr_33283_33313[(2)] = null);

(statearr_33283_33313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (9))){
var inst_33234 = (state_33270[(8)]);
var inst_33248 = cljs.core.vec.call(null,inst_33234);
var state_33270__$1 = state_33270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33270__$1,(11),out,inst_33248);
} else {
if((state_val_33271 === (5))){
var inst_33238 = (state_33270[(9)]);
var inst_33243 = (state_33270[(11)]);
var inst_33235 = (state_33270[(7)]);
var inst_33234 = (state_33270[(8)]);
var inst_33242 = (inst_33234[inst_33235] = inst_33238);
var inst_33243__$1 = (inst_33235 + (1));
var inst_33244 = (inst_33243__$1 < n);
var state_33270__$1 = (function (){var statearr_33284 = state_33270;
(statearr_33284[(11)] = inst_33243__$1);

(statearr_33284[(12)] = inst_33242);

return statearr_33284;
})();
if(cljs.core.truth_(inst_33244)){
var statearr_33285_33314 = state_33270__$1;
(statearr_33285_33314[(1)] = (8));

} else {
var statearr_33286_33315 = state_33270__$1;
(statearr_33286_33315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (14))){
var inst_33263 = (state_33270[(2)]);
var inst_33264 = cljs.core.async.close_BANG_.call(null,out);
var state_33270__$1 = (function (){var statearr_33288 = state_33270;
(statearr_33288[(13)] = inst_33263);

return statearr_33288;
})();
var statearr_33289_33316 = state_33270__$1;
(statearr_33289_33316[(2)] = inst_33264);

(statearr_33289_33316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (10))){
var inst_33254 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
var statearr_33290_33317 = state_33270__$1;
(statearr_33290_33317[(2)] = inst_33254);

(statearr_33290_33317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (8))){
var inst_33243 = (state_33270[(11)]);
var inst_33234 = (state_33270[(8)]);
var tmp33287 = inst_33234;
var inst_33234__$1 = tmp33287;
var inst_33235 = inst_33243;
var state_33270__$1 = (function (){var statearr_33291 = state_33270;
(statearr_33291[(7)] = inst_33235);

(statearr_33291[(8)] = inst_33234__$1);

return statearr_33291;
})();
var statearr_33292_33318 = state_33270__$1;
(statearr_33292_33318[(2)] = null);

(statearr_33292_33318[(1)] = (2));


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
});})(c__30574__auto___33304,out))
;
return ((function (switch__30460__auto__,c__30574__auto___33304,out){
return (function() {
var cljs$core$async$state_machine__30461__auto__ = null;
var cljs$core$async$state_machine__30461__auto____0 = (function (){
var statearr_33296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33296[(0)] = cljs$core$async$state_machine__30461__auto__);

(statearr_33296[(1)] = (1));

return statearr_33296;
});
var cljs$core$async$state_machine__30461__auto____1 = (function (state_33270){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_33270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e33297){if((e33297 instanceof Object)){
var ex__30464__auto__ = e33297;
var statearr_33298_33319 = state_33270;
(statearr_33298_33319[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33320 = state_33270;
state_33270 = G__33320;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$state_machine__30461__auto__ = function(state_33270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30461__auto____1.call(this,state_33270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30461__auto____0;
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30461__auto____1;
return cljs$core$async$state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___33304,out))
})();
var state__30576__auto__ = (function (){var statearr_33299 = f__30575__auto__.call(null);
(statearr_33299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___33304);

return statearr_33299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___33304,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33321 = [];
var len__28223__auto___33395 = arguments.length;
var i__28224__auto___33396 = (0);
while(true){
if((i__28224__auto___33396 < len__28223__auto___33395)){
args33321.push((arguments[i__28224__auto___33396]));

var G__33397 = (i__28224__auto___33396 + (1));
i__28224__auto___33396 = G__33397;
continue;
} else {
}
break;
}

var G__33323 = args33321.length;
switch (G__33323) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33321.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30574__auto___33399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30574__auto___33399,out){
return (function (){
var f__30575__auto__ = (function (){var switch__30460__auto__ = ((function (c__30574__auto___33399,out){
return (function (state_33365){
var state_val_33366 = (state_33365[(1)]);
if((state_val_33366 === (7))){
var inst_33361 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
var statearr_33367_33400 = state_33365__$1;
(statearr_33367_33400[(2)] = inst_33361);

(statearr_33367_33400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (1))){
var inst_33324 = [];
var inst_33325 = inst_33324;
var inst_33326 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33365__$1 = (function (){var statearr_33368 = state_33365;
(statearr_33368[(7)] = inst_33325);

(statearr_33368[(8)] = inst_33326);

return statearr_33368;
})();
var statearr_33369_33401 = state_33365__$1;
(statearr_33369_33401[(2)] = null);

(statearr_33369_33401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (4))){
var inst_33329 = (state_33365[(9)]);
var inst_33329__$1 = (state_33365[(2)]);
var inst_33330 = (inst_33329__$1 == null);
var inst_33331 = cljs.core.not.call(null,inst_33330);
var state_33365__$1 = (function (){var statearr_33370 = state_33365;
(statearr_33370[(9)] = inst_33329__$1);

return statearr_33370;
})();
if(inst_33331){
var statearr_33371_33402 = state_33365__$1;
(statearr_33371_33402[(1)] = (5));

} else {
var statearr_33372_33403 = state_33365__$1;
(statearr_33372_33403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (15))){
var inst_33355 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
var statearr_33373_33404 = state_33365__$1;
(statearr_33373_33404[(2)] = inst_33355);

(statearr_33373_33404[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (13))){
var state_33365__$1 = state_33365;
var statearr_33374_33405 = state_33365__$1;
(statearr_33374_33405[(2)] = null);

(statearr_33374_33405[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (6))){
var inst_33325 = (state_33365[(7)]);
var inst_33350 = inst_33325.length;
var inst_33351 = (inst_33350 > (0));
var state_33365__$1 = state_33365;
if(cljs.core.truth_(inst_33351)){
var statearr_33375_33406 = state_33365__$1;
(statearr_33375_33406[(1)] = (12));

} else {
var statearr_33376_33407 = state_33365__$1;
(statearr_33376_33407[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (3))){
var inst_33363 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33365__$1,inst_33363);
} else {
if((state_val_33366 === (12))){
var inst_33325 = (state_33365[(7)]);
var inst_33353 = cljs.core.vec.call(null,inst_33325);
var state_33365__$1 = state_33365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33365__$1,(15),out,inst_33353);
} else {
if((state_val_33366 === (2))){
var state_33365__$1 = state_33365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33365__$1,(4),ch);
} else {
if((state_val_33366 === (11))){
var inst_33329 = (state_33365[(9)]);
var inst_33333 = (state_33365[(10)]);
var inst_33343 = (state_33365[(2)]);
var inst_33344 = [];
var inst_33345 = inst_33344.push(inst_33329);
var inst_33325 = inst_33344;
var inst_33326 = inst_33333;
var state_33365__$1 = (function (){var statearr_33377 = state_33365;
(statearr_33377[(7)] = inst_33325);

(statearr_33377[(11)] = inst_33345);

(statearr_33377[(8)] = inst_33326);

(statearr_33377[(12)] = inst_33343);

return statearr_33377;
})();
var statearr_33378_33408 = state_33365__$1;
(statearr_33378_33408[(2)] = null);

(statearr_33378_33408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (9))){
var inst_33325 = (state_33365[(7)]);
var inst_33341 = cljs.core.vec.call(null,inst_33325);
var state_33365__$1 = state_33365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33365__$1,(11),out,inst_33341);
} else {
if((state_val_33366 === (5))){
var inst_33326 = (state_33365[(8)]);
var inst_33329 = (state_33365[(9)]);
var inst_33333 = (state_33365[(10)]);
var inst_33333__$1 = f.call(null,inst_33329);
var inst_33334 = cljs.core._EQ_.call(null,inst_33333__$1,inst_33326);
var inst_33335 = cljs.core.keyword_identical_QMARK_.call(null,inst_33326,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33336 = (inst_33334) || (inst_33335);
var state_33365__$1 = (function (){var statearr_33379 = state_33365;
(statearr_33379[(10)] = inst_33333__$1);

return statearr_33379;
})();
if(cljs.core.truth_(inst_33336)){
var statearr_33380_33409 = state_33365__$1;
(statearr_33380_33409[(1)] = (8));

} else {
var statearr_33381_33410 = state_33365__$1;
(statearr_33381_33410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (14))){
var inst_33358 = (state_33365[(2)]);
var inst_33359 = cljs.core.async.close_BANG_.call(null,out);
var state_33365__$1 = (function (){var statearr_33383 = state_33365;
(statearr_33383[(13)] = inst_33358);

return statearr_33383;
})();
var statearr_33384_33411 = state_33365__$1;
(statearr_33384_33411[(2)] = inst_33359);

(statearr_33384_33411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (10))){
var inst_33348 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
var statearr_33385_33412 = state_33365__$1;
(statearr_33385_33412[(2)] = inst_33348);

(statearr_33385_33412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (8))){
var inst_33325 = (state_33365[(7)]);
var inst_33329 = (state_33365[(9)]);
var inst_33333 = (state_33365[(10)]);
var inst_33338 = inst_33325.push(inst_33329);
var tmp33382 = inst_33325;
var inst_33325__$1 = tmp33382;
var inst_33326 = inst_33333;
var state_33365__$1 = (function (){var statearr_33386 = state_33365;
(statearr_33386[(7)] = inst_33325__$1);

(statearr_33386[(14)] = inst_33338);

(statearr_33386[(8)] = inst_33326);

return statearr_33386;
})();
var statearr_33387_33413 = state_33365__$1;
(statearr_33387_33413[(2)] = null);

(statearr_33387_33413[(1)] = (2));


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
});})(c__30574__auto___33399,out))
;
return ((function (switch__30460__auto__,c__30574__auto___33399,out){
return (function() {
var cljs$core$async$state_machine__30461__auto__ = null;
var cljs$core$async$state_machine__30461__auto____0 = (function (){
var statearr_33391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33391[(0)] = cljs$core$async$state_machine__30461__auto__);

(statearr_33391[(1)] = (1));

return statearr_33391;
});
var cljs$core$async$state_machine__30461__auto____1 = (function (state_33365){
while(true){
var ret_value__30462__auto__ = (function (){try{while(true){
var result__30463__auto__ = switch__30460__auto__.call(null,state_33365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30463__auto__;
}
break;
}
}catch (e33392){if((e33392 instanceof Object)){
var ex__30464__auto__ = e33392;
var statearr_33393_33414 = state_33365;
(statearr_33393_33414[(5)] = ex__30464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33415 = state_33365;
state_33365 = G__33415;
continue;
} else {
return ret_value__30462__auto__;
}
break;
}
});
cljs$core$async$state_machine__30461__auto__ = function(state_33365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30461__auto____1.call(this,state_33365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30461__auto____0;
cljs$core$async$state_machine__30461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30461__auto____1;
return cljs$core$async$state_machine__30461__auto__;
})()
;})(switch__30460__auto__,c__30574__auto___33399,out))
})();
var state__30576__auto__ = (function (){var statearr_33394 = f__30575__auto__.call(null);
(statearr_33394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30574__auto___33399);

return statearr_33394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30576__auto__);
});})(c__30574__auto___33399,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1491913251696
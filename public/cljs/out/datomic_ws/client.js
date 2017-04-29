// Compiled by ClojureScript 1.9.494 {}
goog.provide('datomic_ws.client');
goog.require('cljs.core');
goog.require('alandipert.storage_atom');
goog.require('chord.client');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
datomic_ws.client.db = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
datomic_ws.client.local_changes = alandipert.storage_atom.local_storage.call(null,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"local-changes","local-changes",936767566));
var c__30645__auto___32904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30645__auto___32904){
return (function (){
var f__30646__auto__ = (function (){var switch__30622__auto__ = ((function (c__30645__auto___32904){
return (function (state_32880){
var state_val_32881 = (state_32880[(1)]);
if((state_val_32881 === (7))){
var state_32880__$1 = state_32880;
var statearr_32882_32905 = state_32880__$1;
(statearr_32882_32905[(2)] = false);

(statearr_32882_32905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (1))){
var inst_32850 = chord.client.ws_ch.call(null,"ws://localhost:3000/ws");
var state_32880__$1 = state_32880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32880__$1,(2),inst_32850);
} else {
if((state_val_32881 === (4))){
var state_32880__$1 = state_32880;
var statearr_32883_32906 = state_32880__$1;
(statearr_32883_32906[(2)] = false);

(statearr_32883_32906[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (6))){
var state_32880__$1 = state_32880;
var statearr_32884_32907 = state_32880__$1;
(statearr_32884_32907[(2)] = true);

(statearr_32884_32907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (3))){
var inst_32852 = (state_32880[(7)]);
var inst_32857 = inst_32852.cljs$lang$protocol_mask$partition0$;
var inst_32858 = (inst_32857 & (64));
var inst_32859 = inst_32852.cljs$core$ISeq$;
var inst_32860 = (cljs.core.PROTOCOL_SENTINEL === inst_32859);
var inst_32861 = (inst_32858) || (inst_32860);
var state_32880__$1 = state_32880;
if(cljs.core.truth_(inst_32861)){
var statearr_32885_32908 = state_32880__$1;
(statearr_32885_32908[(1)] = (6));

} else {
var statearr_32886_32909 = state_32880__$1;
(statearr_32886_32909[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (12))){
var inst_32874 = (state_32880[(8)]);
var inst_32877 = (state_32880[(2)]);
var inst_32878 = datomic_ws.client.listen_BANG_.call(null,inst_32874);
var state_32880__$1 = (function (){var statearr_32887 = state_32880;
(statearr_32887[(9)] = inst_32877);

return statearr_32887;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32880__$1,inst_32878);
} else {
if((state_val_32881 === (2))){
var inst_32852 = (state_32880[(7)]);
var inst_32852__$1 = (state_32880[(2)]);
var inst_32854 = (inst_32852__$1 == null);
var inst_32855 = cljs.core.not.call(null,inst_32854);
var state_32880__$1 = (function (){var statearr_32888 = state_32880;
(statearr_32888[(7)] = inst_32852__$1);

return statearr_32888;
})();
if(inst_32855){
var statearr_32889_32910 = state_32880__$1;
(statearr_32889_32910[(1)] = (3));

} else {
var statearr_32890_32911 = state_32880__$1;
(statearr_32890_32911[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (11))){
var inst_32874 = (state_32880[(8)]);
var inst_32873 = (state_32880[(2)]);
var inst_32874__$1 = cljs.core.get.call(null,inst_32873,new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174));
var inst_32875 = cljs.core.get.call(null,inst_32873,new cljs.core.Keyword(null,"error","error",-978969032));
var state_32880__$1 = (function (){var statearr_32891 = state_32880;
(statearr_32891[(8)] = inst_32874__$1);

(statearr_32891[(10)] = inst_32875);

return statearr_32891;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32880__$1,(12),inst_32874__$1,"Hello server from client!");
} else {
if((state_val_32881 === (9))){
var inst_32852 = (state_32880[(7)]);
var inst_32870 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32852);
var state_32880__$1 = state_32880;
var statearr_32892_32912 = state_32880__$1;
(statearr_32892_32912[(2)] = inst_32870);

(statearr_32892_32912[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (5))){
var inst_32868 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
if(cljs.core.truth_(inst_32868)){
var statearr_32893_32913 = state_32880__$1;
(statearr_32893_32913[(1)] = (9));

} else {
var statearr_32894_32914 = state_32880__$1;
(statearr_32894_32914[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (10))){
var inst_32852 = (state_32880[(7)]);
var state_32880__$1 = state_32880;
var statearr_32895_32915 = state_32880__$1;
(statearr_32895_32915[(2)] = inst_32852);

(statearr_32895_32915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32881 === (8))){
var inst_32865 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32896_32916 = state_32880__$1;
(statearr_32896_32916[(2)] = inst_32865);

(statearr_32896_32916[(1)] = (5));


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
});})(c__30645__auto___32904))
;
return ((function (switch__30622__auto__,c__30645__auto___32904){
return (function() {
var datomic_ws$client$state_machine__30623__auto__ = null;
var datomic_ws$client$state_machine__30623__auto____0 = (function (){
var statearr_32900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32900[(0)] = datomic_ws$client$state_machine__30623__auto__);

(statearr_32900[(1)] = (1));

return statearr_32900;
});
var datomic_ws$client$state_machine__30623__auto____1 = (function (state_32880){
while(true){
var ret_value__30624__auto__ = (function (){try{while(true){
var result__30625__auto__ = switch__30622__auto__.call(null,state_32880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30625__auto__;
}
break;
}
}catch (e32901){if((e32901 instanceof Object)){
var ex__30626__auto__ = e32901;
var statearr_32902_32917 = state_32880;
(statearr_32902_32917[(5)] = ex__30626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32918 = state_32880;
state_32880 = G__32918;
continue;
} else {
return ret_value__30624__auto__;
}
break;
}
});
datomic_ws$client$state_machine__30623__auto__ = function(state_32880){
switch(arguments.length){
case 0:
return datomic_ws$client$state_machine__30623__auto____0.call(this);
case 1:
return datomic_ws$client$state_machine__30623__auto____1.call(this,state_32880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datomic_ws$client$state_machine__30623__auto__.cljs$core$IFn$_invoke$arity$0 = datomic_ws$client$state_machine__30623__auto____0;
datomic_ws$client$state_machine__30623__auto__.cljs$core$IFn$_invoke$arity$1 = datomic_ws$client$state_machine__30623__auto____1;
return datomic_ws$client$state_machine__30623__auto__;
})()
;})(switch__30622__auto__,c__30645__auto___32904))
})();
var state__30647__auto__ = (function (){var statearr_32903 = f__30646__auto__.call(null);
(statearr_32903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30645__auto___32904);

return statearr_32903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30647__auto__);
});})(c__30645__auto___32904))
);

datomic_ws.client.push_BANG_ = (function datomic_ws$client$push_BANG_(ws_channel){
var c__30645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30645__auto__){
return (function (){
var f__30646__auto__ = (function (){var switch__30622__auto__ = ((function (c__30645__auto__){
return (function (state_32956){
var state_val_32957 = (state_32956[(1)]);
if((state_val_32957 === (1))){
var state_32956__$1 = state_32956;
var statearr_32958_32969 = state_32956__$1;
(statearr_32958_32969[(2)] = null);

(statearr_32958_32969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (2))){
var inst_32945 = datomic_ws.client.timeout.call(null,(1000));
var state_32956__$1 = state_32956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32956__$1,(4),inst_32945);
} else {
if((state_val_32957 === (3))){
var inst_32954 = (state_32956[(2)]);
var state_32956__$1 = state_32956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32956__$1,inst_32954);
} else {
if((state_val_32957 === (4))){
var inst_32947 = (state_32956[(2)]);
var inst_32948 = cljs.core.deref.call(null,datomic_ws.client.local_changes);
var state_32956__$1 = (function (){var statearr_32959 = state_32956;
(statearr_32959[(7)] = inst_32947);

return statearr_32959;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32956__$1,(5),ws_channel,inst_32948);
} else {
if((state_val_32957 === (5))){
var inst_32950 = (state_32956[(2)]);
var inst_32951 = cljs.core.PersistentVector.EMPTY;
var inst_32952 = cljs.core.reset_BANG_.call(null,datomic_ws.client.local_changes,inst_32951);
var state_32956__$1 = (function (){var statearr_32960 = state_32956;
(statearr_32960[(8)] = inst_32950);

return statearr_32960;
})();
var statearr_32961_32970 = state_32956__$1;
(statearr_32961_32970[(2)] = inst_32952);

(statearr_32961_32970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__30645__auto__))
;
return ((function (switch__30622__auto__,c__30645__auto__){
return (function() {
var datomic_ws$client$push_BANG__$_state_machine__30623__auto__ = null;
var datomic_ws$client$push_BANG__$_state_machine__30623__auto____0 = (function (){
var statearr_32965 = [null,null,null,null,null,null,null,null,null];
(statearr_32965[(0)] = datomic_ws$client$push_BANG__$_state_machine__30623__auto__);

(statearr_32965[(1)] = (1));

return statearr_32965;
});
var datomic_ws$client$push_BANG__$_state_machine__30623__auto____1 = (function (state_32956){
while(true){
var ret_value__30624__auto__ = (function (){try{while(true){
var result__30625__auto__ = switch__30622__auto__.call(null,state_32956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30625__auto__;
}
break;
}
}catch (e32966){if((e32966 instanceof Object)){
var ex__30626__auto__ = e32966;
var statearr_32967_32971 = state_32956;
(statearr_32967_32971[(5)] = ex__30626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32972 = state_32956;
state_32956 = G__32972;
continue;
} else {
return ret_value__30624__auto__;
}
break;
}
});
datomic_ws$client$push_BANG__$_state_machine__30623__auto__ = function(state_32956){
switch(arguments.length){
case 0:
return datomic_ws$client$push_BANG__$_state_machine__30623__auto____0.call(this);
case 1:
return datomic_ws$client$push_BANG__$_state_machine__30623__auto____1.call(this,state_32956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datomic_ws$client$push_BANG__$_state_machine__30623__auto__.cljs$core$IFn$_invoke$arity$0 = datomic_ws$client$push_BANG__$_state_machine__30623__auto____0;
datomic_ws$client$push_BANG__$_state_machine__30623__auto__.cljs$core$IFn$_invoke$arity$1 = datomic_ws$client$push_BANG__$_state_machine__30623__auto____1;
return datomic_ws$client$push_BANG__$_state_machine__30623__auto__;
})()
;})(switch__30622__auto__,c__30645__auto__))
})();
var state__30647__auto__ = (function (){var statearr_32968 = f__30646__auto__.call(null);
(statearr_32968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30645__auto__);

return statearr_32968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30647__auto__);
});})(c__30645__auto__))
);

return c__30645__auto__;
});
datomic_ws.client.listen_BANG_ = (function datomic_ws$client$listen_BANG_(ws_channel){
var c__30645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30645__auto__){
return (function (){
var f__30646__auto__ = (function (){var switch__30622__auto__ = ((function (c__30645__auto__){
return (function (state_33079){
var state_val_33080 = (state_33079[(1)]);
if((state_val_33080 === (7))){
var inst_33060 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
if(cljs.core.truth_(inst_33060)){
var statearr_33081_33109 = state_33079__$1;
(statearr_33081_33109[(1)] = (11));

} else {
var statearr_33082_33110 = state_33079__$1;
(statearr_33082_33110[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (1))){
var state_33079__$1 = state_33079;
var statearr_33083_33111 = state_33079__$1;
(statearr_33083_33111[(2)] = null);

(statearr_33083_33111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (4))){
var inst_33044 = (state_33079[(7)]);
var inst_33044__$1 = (state_33079[(2)]);
var inst_33046 = (inst_33044__$1 == null);
var inst_33047 = cljs.core.not.call(null,inst_33046);
var state_33079__$1 = (function (){var statearr_33084 = state_33079;
(statearr_33084[(7)] = inst_33044__$1);

return statearr_33084;
})();
if(inst_33047){
var statearr_33085_33112 = state_33079__$1;
(statearr_33085_33112[(1)] = (5));

} else {
var statearr_33086_33113 = state_33079__$1;
(statearr_33086_33113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (15))){
var inst_33066 = (state_33079[(8)]);
var inst_33072 = cljs.core.swap_BANG_.call(null,datomic_ws.client.db,cljs.core.conj,inst_33066);
var state_33079__$1 = (function (){var statearr_33087 = state_33079;
(statearr_33087[(9)] = inst_33072);

return statearr_33087;
})();
var statearr_33088_33114 = state_33079__$1;
(statearr_33088_33114[(2)] = null);

(statearr_33088_33114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (13))){
var inst_33066 = (state_33079[(8)]);
var inst_33065 = (state_33079[(2)]);
var inst_33066__$1 = cljs.core.get.call(null,inst_33065,new cljs.core.Keyword(null,"message","message",-406056002));
var inst_33067 = cljs.core.get.call(null,inst_33065,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_33068 = cljs.core.println.call(null,inst_33066__$1,inst_33067);
var state_33079__$1 = (function (){var statearr_33089 = state_33079;
(statearr_33089[(10)] = inst_33068);

(statearr_33089[(8)] = inst_33066__$1);

return statearr_33089;
})();
if(cljs.core.truth_(inst_33067)){
var statearr_33090_33115 = state_33079__$1;
(statearr_33090_33115[(1)] = (14));

} else {
var statearr_33091_33116 = state_33079__$1;
(statearr_33091_33116[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (6))){
var state_33079__$1 = state_33079;
var statearr_33092_33117 = state_33079__$1;
(statearr_33092_33117[(2)] = false);

(statearr_33092_33117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (3))){
var inst_33077 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33079__$1,inst_33077);
} else {
if((state_val_33080 === (12))){
var inst_33044 = (state_33079[(7)]);
var state_33079__$1 = state_33079;
var statearr_33093_33118 = state_33079__$1;
(statearr_33093_33118[(2)] = inst_33044);

(statearr_33093_33118[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (2))){
var state_33079__$1 = state_33079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33079__$1,(4),ws_channel);
} else {
if((state_val_33080 === (11))){
var inst_33044 = (state_33079[(7)]);
var inst_33062 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33044);
var state_33079__$1 = state_33079;
var statearr_33094_33119 = state_33079__$1;
(statearr_33094_33119[(2)] = inst_33062);

(statearr_33094_33119[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (9))){
var state_33079__$1 = state_33079;
var statearr_33095_33120 = state_33079__$1;
(statearr_33095_33120[(2)] = false);

(statearr_33095_33120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (5))){
var inst_33044 = (state_33079[(7)]);
var inst_33049 = inst_33044.cljs$lang$protocol_mask$partition0$;
var inst_33050 = (inst_33049 & (64));
var inst_33051 = inst_33044.cljs$core$ISeq$;
var inst_33052 = (cljs.core.PROTOCOL_SENTINEL === inst_33051);
var inst_33053 = (inst_33050) || (inst_33052);
var state_33079__$1 = state_33079;
if(cljs.core.truth_(inst_33053)){
var statearr_33096_33121 = state_33079__$1;
(statearr_33096_33121[(1)] = (8));

} else {
var statearr_33097_33122 = state_33079__$1;
(statearr_33097_33122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (14))){
var inst_33066 = (state_33079[(8)]);
var inst_33070 = cljs.core.swap_BANG_.call(null,datomic_ws.client.local_changes,cljs.core.conj,inst_33066);
var state_33079__$1 = state_33079;
var statearr_33098_33123 = state_33079__$1;
(statearr_33098_33123[(2)] = inst_33070);

(statearr_33098_33123[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (16))){
var inst_33075 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
var statearr_33099_33124 = state_33079__$1;
(statearr_33099_33124[(2)] = inst_33075);

(statearr_33099_33124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (10))){
var inst_33057 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
var statearr_33100_33125 = state_33079__$1;
(statearr_33100_33125[(2)] = inst_33057);

(statearr_33100_33125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (8))){
var state_33079__$1 = state_33079;
var statearr_33101_33126 = state_33079__$1;
(statearr_33101_33126[(2)] = true);

(statearr_33101_33126[(1)] = (10));


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
});})(c__30645__auto__))
;
return ((function (switch__30622__auto__,c__30645__auto__){
return (function() {
var datomic_ws$client$listen_BANG__$_state_machine__30623__auto__ = null;
var datomic_ws$client$listen_BANG__$_state_machine__30623__auto____0 = (function (){
var statearr_33105 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33105[(0)] = datomic_ws$client$listen_BANG__$_state_machine__30623__auto__);

(statearr_33105[(1)] = (1));

return statearr_33105;
});
var datomic_ws$client$listen_BANG__$_state_machine__30623__auto____1 = (function (state_33079){
while(true){
var ret_value__30624__auto__ = (function (){try{while(true){
var result__30625__auto__ = switch__30622__auto__.call(null,state_33079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30625__auto__;
}
break;
}
}catch (e33106){if((e33106 instanceof Object)){
var ex__30626__auto__ = e33106;
var statearr_33107_33127 = state_33079;
(statearr_33107_33127[(5)] = ex__30626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33128 = state_33079;
state_33079 = G__33128;
continue;
} else {
return ret_value__30624__auto__;
}
break;
}
});
datomic_ws$client$listen_BANG__$_state_machine__30623__auto__ = function(state_33079){
switch(arguments.length){
case 0:
return datomic_ws$client$listen_BANG__$_state_machine__30623__auto____0.call(this);
case 1:
return datomic_ws$client$listen_BANG__$_state_machine__30623__auto____1.call(this,state_33079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datomic_ws$client$listen_BANG__$_state_machine__30623__auto__.cljs$core$IFn$_invoke$arity$0 = datomic_ws$client$listen_BANG__$_state_machine__30623__auto____0;
datomic_ws$client$listen_BANG__$_state_machine__30623__auto__.cljs$core$IFn$_invoke$arity$1 = datomic_ws$client$listen_BANG__$_state_machine__30623__auto____1;
return datomic_ws$client$listen_BANG__$_state_machine__30623__auto__;
})()
;})(switch__30622__auto__,c__30645__auto__))
})();
var state__30647__auto__ = (function (){var statearr_33108 = f__30646__auto__.call(null);
(statearr_33108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30645__auto__);

return statearr_33108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30647__auto__);
});})(c__30645__auto__))
);

return c__30645__auto__;
});
cljs.core.add_watch.call(null,datomic_ws.client.local_changes,new cljs.core.Keyword(null,"new","new",-2085437848),(function (_,___$1,___$2,v){
return cljs.core.println.call(null,"local changes updated: ",v);
}));

//# sourceMappingURL=client.js.map?rel=1491917221474
(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{A3DA:function(M,E,a){"use strict";var y=a("tlpD"),P=a("KPh1"),D=a("sjv0"),d=a("xuIX"),U=a("pQvp"),h=a("xwgP"),l=a.n(h),u=a("iczh"),i=a.n(u),_={numberInfo:"numberInfo___UaaEB",suffix:"suffix____RiYG",numberInfoTitle:"numberInfoTitle___1p55z",numberInfoSubTitle:"numberInfoSubTitle___3E3Dh",numberInfoValue:"numberInfoValue___87JVx",subTotal:"subTotal___sq0f-",anticon:"anticon___1FWew",numberInfolight:"numberInfolight___YO5rJ"},e=function(t){var f=t.theme,o=t.title,r=t.subTitle,T=t.total,n=t.subTotal,s=t.status,m=t.suffix,c=t.gap,b=Object(D.a)(t,["theme","title","subTitle","total","subTotal","status","suffix","gap"]);return l.a.createElement("div",Object(y.a)({className:i()(_.numberInfo,Object(P.a)({},_["numberInfo".concat(f)],f))},b),o&&l.a.createElement("div",{className:_.numberInfoTitle,title:typeof o=="string"?o:""},o),r&&l.a.createElement("div",{className:_.numberInfoSubTitle,title:typeof r=="string"?r:""},r),l.a.createElement("div",{className:_.numberInfoValue,style:c?{marginTop:c}:{}},l.a.createElement("span",null,T,m&&l.a.createElement("em",{className:_.suffix},m)),(s||n)&&l.a.createElement("span",{className:_.subTotal},n,s&&s==="up"?l.a.createElement(d.a,null):l.a.createElement(U.a,null))))},O=E.a=e},tKSp:function(M,E,a){"use strict";a.r(E);var y=a("Jqop"),P=a("hcOk"),D=a("tsRg"),d=a("DzO5"),U=a("hhz5"),h=a("l76O"),l=a("x00w"),u=a("MAyr"),i=a("9kvl"),_=a("xwgP"),e=a.n(_),O=a("M0Ur"),R=a("A3DA"),t=a("UXoT"),f=function(n){var s=n.data,m=n.currentTabKey;return e.a.createElement(h.a,{gutter:8,style:{width:138,margin:"8px 0"},type:"flex"},e.a.createElement(u.a,{span:12},e.a.createElement(R.a,{title:s.name,subTitle:e.a.createElement(i.a,{id:"dashboardandanalysis.analysis.conversion-rate",defaultMessage:"Conversion Rate"}),gap:2,total:"".concat(s.cvr*100,"%"),theme:m!==s.name?"light":void 0})),e.a.createElement(u.a,{span:12,style:{paddingTop:36}},e.a.createElement(O.g,{animate:!1,inner:.55,tooltip:!1,margin:[0,0,0,0],percent:s.cvr*100,height:64})))},o=d.a.TabPane,r=function(n){var s=n.activeKey,m=n.loading,c=n.offlineData,b=n.offlineChartData,p=n.handleTabChange;return e.a.createElement(P.a,{loading:m,className:t.a.offlineCard,bordered:!1,style:{marginTop:32}},e.a.createElement(d.a,{activeKey:s,onChange:p},c.map(function(v){return e.a.createElement(o,{tab:e.a.createElement(f,{data:v,currentTabKey:s}),key:v.name},e.a.createElement("div",{style:{padding:"0 24px"}},e.a.createElement(O.h,{height:400,data:b,titleMap:{y1:Object(i.d)({id:"dashboardandanalysis.analysis.traffic"}),y2:Object(i.d)({id:"dashboardandanalysis.analysis.payments"})}})))})))};E.default=r}}]);

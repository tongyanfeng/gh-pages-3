(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5oCn":function(A,o,e){"use strict";var i=e("xwgP"),v=e.n(i),C=Object(i.createContext)({});o.a=C},"IT+u":function(A,o,e){"use strict";var i=e("W+Pn"),v=e("Sx2N"),C=e("xwgP"),E=e.n(C),L=e("iczh"),b=e.n(L),R=e("5oCn"),m=function(D){var p=Object(C.useContext)(R.a),M=D.children,f=D.contentWidth,t=D.className,x=D.style,S=Object(C.useContext)(v.b.ConfigContext),l=S.getPrefixCls,n=D.prefixCls||l("pro"),a=f||p.contentWidth,d="".concat(n,"-grid-content");return E.a.createElement("div",{className:b()(d,t,{wide:a==="Fixed"}),style:x},E.a.createElement("div",{className:"".concat(n,"-grid-content-children")},M))},O=o.a=m},MAyr:function(A,o,e){"use strict";var i=e("fjB6");o.a=i.a},UXoT:function(A,o,e){"use strict";o.a={iconGroup:"iconGroup___3RiPi",anticon:"anticon___3NFul",rankingList:"rankingList___2GuWM",rankingItemNumber:"rankingItemNumber___31ZrU",active:"active___3Bsi9",rankingItemTitle:"rankingItemTitle___2Yoy1",salesExtra:"salesExtra___3lIXj",currentDate:"currentDate___7lDDb",salesCard:"salesCard___1Iqf3",salesBar:"salesBar___3JP41",salesRank:"salesRank____67l0",salesCardExtra:"salesCardExtra___1yLFX",salesTypeRadio:"salesTypeRadio___2LyMm",offlineCard:"offlineCard___Oqn6V",trendText:"trendText___3J91q",rankingTitle:"rankingTitle___28H5N",salesExtraWrap:"salesExtraWrap___1k1PZ"}},Z24z:function(A,o,e){"use strict";var i=e("xwgP"),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},C=v,E=e("lrTV"),L=function(m,O){return i.createElement(E.a,Object.assign({},m,{ref:O,icon:C}))};L.displayName="EllipsisOutlined";var b=o.a=i.forwardRef(L)},hhz5:function(A,o,e){"use strict";var i=e("qSre"),v=e("9ntj")},l76O:function(A,o,e){"use strict";var i=e("vuw8");o.a=i.a},lrTV:function(A,o,e){"use strict";var i=e("4+7e"),v=e("KPh1"),C=e("sjv0"),E=e("xwgP"),L=e("iczh"),b=e.n(L),R=e("0hF1"),m=e("mM1K"),O={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function B(l){var n=l.primaryColor,a=l.secondaryColor;O.primaryColor=n,O.secondaryColor=a||Object(m.b)(n),O.calculated=!!a}function D(){return Object(R.a)({},O)}var p=function(n){var a=n.icon,d=n.className,r=n.onClick,_=n.style,N=n.primaryColor,X=n.secondaryColor,K=Object(C.a)(n,["icon","className","onClick","style","primaryColor","secondaryColor"]),W=O;if(N&&(W={primaryColor:N,secondaryColor:X||Object(m.b)(N)}),Object(m.f)(),Object(m.g)(Object(m.c)(a),"icon should be icon definiton, but got ".concat(a)),!Object(m.c)(a))return null;var P=a;return P&&typeof P.icon=="function"&&(P=Object(R.a)(Object(R.a)({},P),{},{icon:P.icon(W.primaryColor,W.secondaryColor)})),Object(m.a)(P.icon,"svg-".concat(P.name),Object(R.a)({className:d,onClick:r,style:_,"data-icon":P.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},K))};p.displayName="IconReact",p.getTwoToneColors=D,p.setTwoToneColors=B;var M=p;function f(l){var n=Object(m.d)(l),a=Object(i.a)(n,2),d=a[0],r=a[1];return M.setTwoToneColors({primaryColor:d,secondaryColor:r})}function t(){var l=M.getTwoToneColors();return l.calculated?[l.primaryColor,l.secondaryColor]:l.primaryColor}f("#1890ff");var x=E.forwardRef(function(l,n){var a=l.className,d=l.icon,r=l.spin,_=l.rotate,N=l.tabIndex,X=l.onClick,K=l.twoToneColor,W=Object(C.a)(l,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),P=b()("anticon",Object(v.a)({},"anticon-".concat(d.name),Boolean(d.name)),{"anticon-spin":!!r||d.name==="loading"},a),z=N;z===void 0&&X&&(z=-1);var F=_?{msTransform:"rotate(".concat(_,"deg)"),transform:"rotate(".concat(_,"deg)")}:void 0,V=Object(m.d)(K),Z=Object(i.a)(V,2),y=Z[0],c=Z[1];return E.createElement("span",Object.assign({role:"img","aria-label":d.name},W,{ref:n,tabIndex:z,onClick:X,className:P}),E.createElement(M,{icon:d,primaryColor:y,secondaryColor:c,style:F}))});x.displayName="AntdIcon",x.getTwoToneColor=t,x.setTwoToneColor=f;var S=o.a=x},mM1K:function(A,o,e){"use strict";e.d(o,"g",function(){return O}),e.d(o,"c",function(){return B}),e.d(o,"a",function(){return p}),e.d(o,"b",function(){return M}),e.d(o,"d",function(){return f}),e.d(o,"e",function(){return t}),e.d(o,"f",function(){return l});var i=e("0hF1"),v=e("PoO7"),C=e("KOgv"),E=e("xwgP"),L=e.n(E),b=e("1Y/f"),R=e("PwAq"),m=e.n(R);function O(n,a){Object(b.a)(n,"[@ant-design/icons] ".concat(a))}function B(n){return Object(v.a)(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(Object(v.a)(n.icon)==="object"||typeof n.icon=="function")}function D(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(a,d){var r=n[d];switch(d){case"class":a.className=r,delete a.class;break;default:a[d]=r}return a},{})}function p(n,a,d){return d?L.a.createElement(n.tag,Object(i.a)(Object(i.a)({key:a},D(n.attrs)),d),(n.children||[]).map(function(r,_){return p(r,"".concat(a,"-").concat(n.tag,"-").concat(_))})):L.a.createElement(n.tag,Object(i.a)({key:a},D(n.attrs)),(n.children||[]).map(function(r,_){return p(r,"".concat(a,"-").concat(n.tag,"-").concat(_))}))}function M(n){return Object(C.generate)(n)[0]}function f(n){return n?Array.isArray(n)?n:[n]:[]}var t={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},x=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,S=!1,l=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x;Object(E.useEffect)(function(){S||(Object(R.insertCss)(a,{prepend:!0}),S=!0)},[])}},t2zc:function(A,o,e){"use strict";e.r(o);var i=e("hhz5"),v=e("l76O"),C=e("x00w"),E=e("MAyr"),L=e("0h6m"),b=e("hnLK"),R=e("v2oc"),m=e("nLhV"),O=e("Dk3c"),B=e("lO9p"),D=e("dv+D"),p=e("OmhC"),M=e("Z24z"),f=e("xwgP"),t=e.n(f),x=e("IT+u"),S=e("9kvl"),l=e("KxcZ"),n=e("5KLH"),a=function(){return t.a.createElement("div",{style:{paddingTop:100,textAlign:"center"}},t.a.createElement(n.a,{size:"large"}))},d=e("yq+b"),r=e.n(d);function _(y){return y*1<10?"0".concat(y):y}function N(y){var c=new Date,U=1e3*60*60*24;if(y==="today")return c.setHours(0),c.setMinutes(0),c.setSeconds(0),[r()(c),r()(c.getTime()+(U-1e3))];if(y==="week"){var s=c.getDay();c.setHours(0),c.setMinutes(0),c.setSeconds(0),s===0?s=6:s-=1;var T=c.getTime()-s*U;return[r()(T),r()(T+(7*U-1e3))]}var I=c.getFullYear();if(y==="month"){var j=c.getMonth(),g=r()(c).add(1,"months"),h=g.year(),u=g.month();return[r()("".concat(I,"-").concat(_(j+1),"-01 00:00:00")),r()(r()("".concat(h,"-").concat(_(u+1),"-01 00:00:00")).valueOf()-1e3)]}return[r()("".concat(I,"-01-01 00:00:00")),r()("".concat(I,"-12-31 23:59:59"))]}var X=e("UXoT"),K=t.a.lazy(function(){return Promise.all([e.e(0),e.e(4),e.e(5),e.e(8),e.e(49)]).then(e.bind(null,"p3gl"))}),W=t.a.lazy(function(){return Promise.all([e.e(0),e.e(4),e.e(5),e.e(46),e.e(48)]).then(e.bind(null,"7W9t"))}),P=t.a.lazy(function(){return Promise.all([e.e(0),e.e(2),e.e(4),e.e(5),e.e(45)]).then(e.bind(null,"4Bm3"))}),z=t.a.lazy(function(){return Promise.all([e.e(0),e.e(4),e.e(5),e.e(50),e.e(47)]).then(e.bind(null,"4IyT"))}),F=t.a.lazy(function(){return Promise.all([e.e(0),e.e(4),e.e(5),e.e(8),e.e(51)]).then(e.bind(null,"tKSp"))}),V=function(y){Object(D.a)(U,y);var c=Object(p.a)(U);function U(){var s;Object(O.a)(this,U);for(var T=arguments.length,I=new Array(T),j=0;j<T;j++)I[j]=arguments[j];return s=c.call.apply(c,[this].concat(I)),s.state={salesType:"all",currentTabKey:"",rangePickerValue:N("year")},s.reqRef=0,s.timeoutId=0,s.handleChangeSalesType=function(g){s.setState({salesType:g.target.value})},s.handleTabChange=function(g){s.setState({currentTabKey:g})},s.handleRangePickerChange=function(g){var h=s.props.dispatch;s.setState({rangePickerValue:g}),h({type:"dashboardAndanalysis/fetchSalesData"})},s.selectDate=function(g){var h=s.props.dispatch;s.setState({rangePickerValue:N(g)}),h({type:"dashboardAndanalysis/fetchSalesData"})},s.isActive=function(g){var h=s.state.rangePickerValue;if(!h)return"";var u=N(g);return u?!h[0]||!h[1]?"":h[0].isSame(u[0],"day")&&h[1].isSame(u[1],"day")?X.a.currentDate:"":""},s}return Object(B.a)(U,[{key:"componentDidMount",value:function(){var T=this.props.dispatch;this.reqRef=requestAnimationFrame(function(){T({type:"dashboardAndanalysis/fetch"})})}},{key:"componentWillUnmount",value:function(){var T=this.props.dispatch;T({type:"dashboardAndanalysis/clear"}),cancelAnimationFrame(this.reqRef),clearTimeout(this.timeoutId)}},{key:"render",value:function(){var T=this.state,I=T.rangePickerValue,j=T.salesType,g=T.currentTabKey,h=this.props,u=h.dashboardAndanalysis,G=h.loading,$=u.visitData,Q=u.visitData2,w=u.salesData,k=u.searchData,Y=u.offlineData,q=u.offlineChartData,ee=u.salesTypeData,ne=u.salesTypeDataOnline,te=u.salesTypeDataOffline,H;j==="all"?H=ee:H=j==="online"?ne:te;var ae=t.a.createElement(m.a,null,t.a.createElement(m.a.Item,null,"\u64CD\u4F5C\u4E00"),t.a.createElement(m.a.Item,null,"\u64CD\u4F5C\u4E8C")),J=t.a.createElement("span",{className:X.a.iconGroup},t.a.createElement(b.a,{overlay:ae,placement:"bottomRight"},t.a.createElement(M.a,null))),oe=g||Y[0]&&Y[0].name;return t.a.createElement(x.a,null,t.a.createElement(t.a.Fragment,null,t.a.createElement(f.Suspense,{fallback:t.a.createElement(a,null)},t.a.createElement(K,{loading:G,visitData:$})),t.a.createElement(f.Suspense,{fallback:null},t.a.createElement(W,{rangePickerValue:I,salesData:w,isActive:this.isActive,handleRangePickerChange:this.handleRangePickerChange,loading:G,selectDate:this.selectDate})),t.a.createElement(v.a,{gutter:24,style:{marginTop:24}},t.a.createElement(E.a,{xl:12,lg:24,md:24,sm:24,xs:24},t.a.createElement(f.Suspense,{fallback:null},t.a.createElement(P,{loading:G,visitData2:Q,searchData:k,dropdownGroup:J}))),t.a.createElement(E.a,{xl:12,lg:24,md:24,sm:24,xs:24},t.a.createElement(f.Suspense,{fallback:null},t.a.createElement(z,{dropdownGroup:J,salesType:j,loading:G,salesPieData:H,handleChangeSalesType:this.handleChangeSalesType})))),t.a.createElement(f.Suspense,{fallback:null},t.a.createElement(F,{activeKey:oe,loading:G,offlineData:Y,offlineChartData:q,handleTabChange:this.handleTabChange}))))}}]),U}(f.Component),Z=o.default=Object(S.c)(function(y){var c=y.dashboardAndanalysis,U=y.loading;return{dashboardAndanalysis:c,loading:U.effects["dashboardAndanalysis/fetch"]}})(V)},x00w:function(A,o,e){"use strict";var i=e("qSre"),v=e("9ntj")}}]);
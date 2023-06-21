"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{9861:function(e,t,n){n.d(t,{Z:function(){return e$}});var a=n(1533),o=n(8947),r=n(431),i=n(6006),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},l=n(1240),d=i.forwardRef(function(e,t){return i.createElement(l.Z,(0,r.Z)({},e,{ref:t,icon:c}))}),s=n(8683),u=n.n(s),p=n(5877),f=n(8684),v=n(456),b=n(965),m=n(6149),h=n(8861),g=n(3940),$=n(8641),k=(0,i.createContext)(null),x=i.forwardRef(function(e,t){var n=e.prefixCls,a=e.className,o=e.style,r=e.id,c=e.active,l=e.tabKey,d=e.children;return i.createElement("div",{id:r&&"".concat(r,"-panel-").concat(l),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":r&&"".concat(r,"-tab-").concat(l),"aria-hidden":!c,style:o,className:u()(n,c&&"".concat(n,"-active"),a),ref:t},d)}),y=["key","forceRender","style","className"];function _(e){var t=e.id,n=e.activeKey,a=e.animated,o=e.tabPosition,c=e.destroyInactiveTabPane,l=i.useContext(k),d=l.prefixCls,s=l.tabs,v=a.tabPane,b="".concat(d,"-tabpane");return i.createElement("div",{className:u()("".concat(d,"-content-holder"))},i.createElement("div",{className:u()("".concat(d,"-content"),"".concat(d,"-content-").concat(o),(0,p.Z)({},"".concat(d,"-content-animated"),v))},s.map(function(e){var o=e.key,l=e.forceRender,d=e.style,s=e.className,p=(0,m.Z)(e,y),h=o===n;return i.createElement($.ZP,(0,r.Z)({key:o,visible:h,forceRender:l,removeOnLeave:!!c,leavedClassName:"".concat(b,"-hidden")},a.tabPaneMotion),function(e,n){var a=e.style,c=e.className;return i.createElement(x,(0,r.Z)({},p,{prefixCls:b,id:t,tabKey:o,animated:v,active:h,style:(0,f.Z)((0,f.Z)({},d),a),className:u()(s,c),ref:n}))})})))}var w=n(151),S=n(9333),E=n(3254),Z=n(6643),C=n(2510),R={width:0,height:0,left:0,top:0};function P(e,t){var n=i.useRef(e),a=i.useState({}),o=(0,v.Z)(a,2)[1];return[n.current,function(e){var a="function"==typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,o({})}]}var T=n(8358);function L(e){var t=(0,i.useState)(0),n=(0,v.Z)(t,2),a=n[0],o=n[1],r=(0,i.useRef)(0),c=(0,i.useRef)();return c.current=e,(0,T.o)(function(){var e;null===(e=c.current)||void 0===e||e.call(c)},[a]),function(){r.current===a&&(r.current+=1,o(r.current))}}var I={width:0,height:0,left:0,top:0,right:0};function N(e){var t;return e instanceof Map?(t={},e.forEach(function(e,n){t[n]=e})):t=e,JSON.stringify(t)}function M(e){return String(e).replace(/"/g,"TABS_DQ")}var B=i.forwardRef(function(e,t){var n=e.prefixCls,a=e.editable,o=e.locale,r=e.style;return a&&!1!==a.showAdd?i.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:r,"aria-label":(null==o?void 0:o.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}),O=i.forwardRef(function(e,t){var n,a=e.position,o=e.prefixCls,r=e.extra;if(!r)return null;var c={};return"object"!==(0,b.Z)(r)||i.isValidElement(r)?c.right=r:c=r,"right"===a&&(n=c.right),"left"===a&&(n=c.left),n?i.createElement("div",{className:"".concat(o,"-extra-content"),ref:t},n):null}),D=n(7045),z=n(8776),j=n(8580),G=i.memo(i.forwardRef(function(e,t){var n=e.prefixCls,a=e.id,o=e.tabs,r=e.locale,c=e.mobile,l=e.moreIcon,d=void 0===l?"More":l,s=e.moreTransitionName,f=e.style,b=e.className,m=e.editable,h=e.tabBarGutter,g=e.rtl,$=e.removeAriaLabel,k=e.onTabClick,x=e.getPopupContainer,y=e.popupClassName,_=(0,i.useState)(!1),w=(0,v.Z)(_,2),S=w[0],E=w[1],Z=(0,i.useState)(null),C=(0,v.Z)(Z,2),R=C[0],P=C[1],T="".concat(a,"-more-popup"),L="".concat(n,"-dropdown"),I=null!==R?"".concat(T,"-").concat(R):null,N=null==r?void 0:r.dropdownAriaLabel,M=i.createElement(z.ZP,{onClick:function(e){k(e.key,e.domEvent),E(!1)},prefixCls:"".concat(L,"-menu"),id:T,tabIndex:-1,role:"listbox","aria-activedescendant":I,selectedKeys:[R],"aria-label":void 0!==N?N:"expanded dropdown"},o.map(function(e){var t=m&&!1!==e.closable&&!e.disabled;return i.createElement(z.sN,{key:e.key,id:"".concat(T,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},i.createElement("span",null,e.label),t&&i.createElement("button",{type:"button","aria-label":$||"remove",tabIndex:0,className:"".concat(L,"-menu-item-remove"),onClick:function(t){var n;t.stopPropagation(),n=e.key,t.preventDefault(),t.stopPropagation(),m.onEdit("remove",{key:n,event:t})}},e.closeIcon||m.removeIcon||"\xd7"))}));function O(e){for(var t=o.filter(function(e){return!e.disabled}),n=t.findIndex(function(e){return e.key===R})||0,a=t.length,r=0;r<a;r+=1){var i=t[n=(n+e+a)%a];if(!i.disabled){P(i.key);return}}}(0,i.useEffect)(function(){var e=document.getElementById(I);e&&e.scrollIntoView&&e.scrollIntoView(!1)},[R]),(0,i.useEffect)(function(){S||P(null)},[S]);var G=(0,p.Z)({},g?"marginRight":"marginLeft",h);o.length||(G.visibility="hidden",G.order=1);var A=u()((0,p.Z)({},"".concat(L,"-rtl"),g)),W=c?null:i.createElement(D.Z,{prefixCls:L,overlay:M,trigger:["hover"],visible:!!o.length&&S,transitionName:s,onVisibleChange:E,overlayClassName:u()(A,y),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:x},i.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:G,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":T,id:"".concat(a,"-more"),"aria-expanded":S,onKeyDown:function(e){var t=e.which;if(!S){[j.Z.DOWN,j.Z.SPACE,j.Z.ENTER].includes(t)&&(E(!0),e.preventDefault());return}switch(t){case j.Z.UP:O(-1),e.preventDefault();break;case j.Z.DOWN:O(1),e.preventDefault();break;case j.Z.ESC:E(!1);break;case j.Z.SPACE:case j.Z.ENTER:null!==R&&k(R,e)}}},d));return i.createElement("div",{className:u()("".concat(n,"-nav-operations"),b),style:f,ref:t},W,i.createElement(B,{prefixCls:n,locale:r,editable:m}))}),function(e,t){return t.tabMoving}),A=function(e){var t,n=e.prefixCls,a=e.id,o=e.active,r=e.tab,c=r.key,l=r.label,d=r.disabled,s=r.closeIcon,f=e.closable,v=e.renderWrapper,b=e.removeAriaLabel,m=e.editable,h=e.onClick,g=e.onFocus,$=e.style,k="".concat(n,"-tab"),x=m&&!1!==f&&!d;function y(e){d||h(e)}var _=i.createElement("div",{key:c,"data-node-key":M(c),className:u()(k,(t={},(0,p.Z)(t,"".concat(k,"-with-remove"),x),(0,p.Z)(t,"".concat(k,"-active"),o),(0,p.Z)(t,"".concat(k,"-disabled"),d),t)),style:$,onClick:y},i.createElement("div",{role:"tab","aria-selected":o,id:a&&"".concat(a,"-tab-").concat(c),className:"".concat(k,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(c),"aria-disabled":d,tabIndex:d?null:0,onClick:function(e){e.stopPropagation(),y(e)},onKeyDown:function(e){[j.Z.SPACE,j.Z.ENTER].includes(e.which)&&(e.preventDefault(),y(e))},onFocus:g},l),x&&i.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(k,"-remove"),onClick:function(e){e.stopPropagation(),e.preventDefault(),e.stopPropagation(),m.onEdit("remove",{key:c,event:e})}},s||m.removeIcon||"\xd7"));return v?v(_):_},W=function(e){var t=e.current||{},n=t.offsetWidth,a=t.offsetHeight;return[void 0===n?0:n,void 0===a?0:a]},X=function(e,t){return e[t?0:1]},H=i.forwardRef(function(e,t){var n,a,o,c,l,d,s,b,m,h,g,$,x,y,_,T,D,z,j,H,K,F,q,V,Y,Q,J,U,ee,et,en,ea,eo,er,ei,ec,el,ed,es,eu,ep=i.useContext(k),ef=ep.prefixCls,ev=ep.tabs,eb=e.className,em=e.style,eh=e.id,eg=e.animated,e$=e.activeKey,ek=e.rtl,ex=e.extra,ey=e.editable,e_=e.locale,ew=e.tabPosition,eS=e.tabBarGutter,eE=e.children,eZ=e.onTabClick,eC=e.onTabScroll,eR=(0,i.useRef)(),eP=(0,i.useRef)(),eT=(0,i.useRef)(),eL=(0,i.useRef)(),eI=(0,i.useRef)(),eN=(0,i.useRef)(),eM=(0,i.useRef)(),eB="top"===ew||"bottom"===ew,eO=P(0,function(e,t){eB&&eC&&eC({direction:e>t?"left":"right"})}),eD=(0,v.Z)(eO,2),ez=eD[0],ej=eD[1],eG=P(0,function(e,t){!eB&&eC&&eC({direction:e>t?"top":"bottom"})}),eA=(0,v.Z)(eG,2),eW=eA[0],eX=eA[1],eH=(0,i.useState)([0,0]),eK=(0,v.Z)(eH,2),eF=eK[0],eq=eK[1],eV=(0,i.useState)([0,0]),eY=(0,v.Z)(eV,2),eQ=eY[0],eJ=eY[1],eU=(0,i.useState)([0,0]),e0=(0,v.Z)(eU,2),e1=e0[0],e8=e0[1],e2=(0,i.useState)([0,0]),e6=(0,v.Z)(e2,2),e4=e6[0],e9=e6[1],e5=(n=new Map,a=(0,i.useRef)([]),o=(0,i.useState)({}),c=(0,v.Z)(o,2)[1],l=(0,i.useRef)("function"==typeof n?n():n),d=L(function(){var e=l.current;a.current.forEach(function(t){e=t(e)}),a.current=[],l.current=e,c({})}),[l.current,function(e){a.current.push(e),d()}]),e7=(0,v.Z)(e5,2),e3=e7[0],te=e7[1],tt=(s=eQ[0],(0,i.useMemo)(function(){for(var e=new Map,t=e3.get(null===(o=ev[0])||void 0===o?void 0:o.key)||R,n=t.left+t.width,a=0;a<ev.length;a+=1){var o,r,i=ev[a].key,c=e3.get(i);c||(c=e3.get(null===(r=ev[a-1])||void 0===r?void 0:r.key)||R);var l=e.get(i)||(0,f.Z)({},c);l.right=n-l.left-l.width,e.set(i,l)}return e},[ev.map(function(e){return e.key}).join("_"),e3,s])),tn=X(eF,eB),ta=X(eQ,eB),to=X(e1,eB),tr=X(e4,eB),ti=tn<ta+to,tc=ti?tn-tr:tn-to,tl="".concat(ef,"-nav-operations-hidden"),td=0,ts=0;function tu(e){return e<td?td:e>ts?ts:e}eB&&ek?(td=0,ts=Math.max(0,ta-tc)):(td=Math.min(0,tc-ta),ts=0);var tp=(0,i.useRef)(),tf=(0,i.useState)(),tv=(0,v.Z)(tf,2),tb=tv[0],tm=tv[1];function th(){tm(Date.now())}function tg(){window.clearTimeout(tp.current)}b=function(e,t){function n(e,t){e(function(e){return tu(e+t)})}return!!ti&&(eB?n(ej,e):n(eX,t),tg(),th(),!0)},m=(0,i.useState)(),g=(h=(0,v.Z)(m,2))[0],$=h[1],x=(0,i.useState)(0),_=(y=(0,v.Z)(x,2))[0],T=y[1],D=(0,i.useState)(0),j=(z=(0,v.Z)(D,2))[0],H=z[1],K=(0,i.useState)(),q=(F=(0,v.Z)(K,2))[0],V=F[1],Y=(0,i.useRef)(),Q=(0,i.useRef)(),(J=(0,i.useRef)(null)).current={onTouchStart:function(e){var t=e.touches[0];$({x:t.screenX,y:t.screenY}),window.clearInterval(Y.current)},onTouchMove:function(e){if(g){e.preventDefault();var t=e.touches[0],n=t.screenX,a=t.screenY;$({x:n,y:a});var o=n-g.x,r=a-g.y;b(o,r);var i=Date.now();T(i),H(i-_),V({x:o,y:r})}},onTouchEnd:function(){if(g&&($(null),V(null),q)){var e=q.x/j,t=q.y/j;if(!(.1>Math.max(Math.abs(e),Math.abs(t)))){var n=e,a=t;Y.current=window.setInterval(function(){if(.01>Math.abs(n)&&.01>Math.abs(a)){window.clearInterval(Y.current);return}b(20*(n*=.9046104802746175),20*(a*=.9046104802746175))},20)}}},onWheel:function(e){var t=e.deltaX,n=e.deltaY,a=0,o=Math.abs(t),r=Math.abs(n);o===r?a="x"===Q.current?t:n:o>r?(a=t,Q.current="x"):(a=n,Q.current="y"),b(-a,-a)&&e.preventDefault()}},i.useEffect(function(){function e(e){J.current.onTouchMove(e)}function t(e){J.current.onTouchEnd(e)}return document.addEventListener("touchmove",e,{passive:!1}),document.addEventListener("touchend",t,{passive:!1}),eL.current.addEventListener("touchstart",function(e){J.current.onTouchStart(e)},{passive:!1}),eL.current.addEventListener("wheel",function(e){J.current.onWheel(e)}),function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",t)}},[]),(0,i.useEffect)(function(){return tg(),tb&&(tp.current=window.setTimeout(function(){tm(0)},100)),tg},[tb]);var t$=(U=eB?ez:eW,eo=(ee=(0,f.Z)((0,f.Z)({},e),{},{tabs:ev})).tabs,er=ee.tabPosition,ei=ee.rtl,["top","bottom"].includes(er)?(et="width",en=ei?"right":"left",ea=Math.abs(U)):(et="height",en="top",ea=-U),(0,i.useMemo)(function(){if(!eo.length)return[0,0];for(var e=eo.length,t=e,n=0;n<e;n+=1){var a=tt.get(eo[n].key)||I;if(a[en]+a[et]>ea+tc){t=n-1;break}}for(var o=0,r=e-1;r>=0;r-=1)if((tt.get(eo[r].key)||I)[en]<ea){o=r+1;break}return o>=t?[0,0]:[o,t]},[tt,tc,ta,to,tr,ea,er,eo.map(function(e){return e.key}).join("_"),ei])),tk=(0,v.Z)(t$,2),tx=tk[0],ty=tk[1],t_=(0,E.Z)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e$,t=tt.get(e)||{width:0,height:0,left:0,right:0,top:0};if(eB){var n=ez;ek?t.right<ez?n=t.right:t.right+t.width>ez+tc&&(n=t.right+t.width-tc):t.left<-ez?n=-t.left:t.left+t.width>-ez+tc&&(n=-(t.left+t.width-tc)),eX(0),ej(tu(n))}else{var a=eW;t.top<-eW?a=-t.top:t.top+t.height>-eW+tc&&(a=-(t.top+t.height-tc)),ej(0),eX(tu(a))}}),tw={};"top"===ew||"bottom"===ew?tw[ek?"marginRight":"marginLeft"]=eS:tw.marginTop=eS;var tS=ev.map(function(e,t){var n=e.key;return i.createElement(A,{id:eh,prefixCls:ef,key:n,tab:e,style:0===t?void 0:tw,closable:e.closable,editable:ey,active:n===e$,renderWrapper:eE,removeAriaLabel:null==e_?void 0:e_.removeAriaLabel,onClick:function(e){eZ(n,e)},onFocus:function(){t_(n),th(),eL.current&&(ek||(eL.current.scrollLeft=0),eL.current.scrollTop=0)}})}),tE=function(){return te(function(){var e=new Map;return ev.forEach(function(t){var n,a=t.key,o=null===(n=eI.current)||void 0===n?void 0:n.querySelector('[data-node-key="'.concat(M(a),'"]'));o&&e.set(a,{width:o.offsetWidth,height:o.offsetHeight,left:o.offsetLeft,top:o.offsetTop})}),e})};(0,i.useEffect)(function(){tE()},[ev.map(function(e){return e.key}).join("_")]);var tZ=L(function(){var e=W(eR),t=W(eP),n=W(eT);eq([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=W(eM);e8(a),e9(W(eN));var o=W(eI);eJ([o[0]-a[0],o[1]-a[1]]),tE()}),tC=ev.slice(0,tx),tR=ev.slice(ty+1),tP=[].concat((0,w.Z)(tC),(0,w.Z)(tR)),tT=(0,i.useState)(),tL=(0,v.Z)(tT,2),tI=tL[0],tN=tL[1],tM=tt.get(e$),tB=(0,i.useRef)();function tO(){Z.Z.cancel(tB.current)}(0,i.useEffect)(function(){var e={};return tM&&(eB?(ek?e.right=tM.right:e.left=tM.left,e.width=tM.width):(e.top=tM.top,e.height=tM.height)),tO(),tB.current=(0,Z.Z)(function(){tN(e)}),tO},[tM,eB,ek]),(0,i.useEffect)(function(){t_()},[e$,td,ts,N(tM),N(tt),eB]),(0,i.useEffect)(function(){tZ()},[ek]);var tD=!!tP.length,tz="".concat(ef,"-nav-wrap");return eB?ek?(ed=ez>0,el=ez!==ts):(el=ez<0,ed=ez!==td):(es=eW<0,eu=eW!==td),i.createElement(S.Z,{onResize:tZ},i.createElement("div",{ref:(0,C.x1)(t,eR),role:"tablist",className:u()("".concat(ef,"-nav"),eb),style:em,onKeyDown:function(){th()}},i.createElement(O,{ref:eP,position:"left",extra:ex,prefixCls:ef}),i.createElement("div",{className:u()(tz,(ec={},(0,p.Z)(ec,"".concat(tz,"-ping-left"),el),(0,p.Z)(ec,"".concat(tz,"-ping-right"),ed),(0,p.Z)(ec,"".concat(tz,"-ping-top"),es),(0,p.Z)(ec,"".concat(tz,"-ping-bottom"),eu),ec)),ref:eL},i.createElement(S.Z,{onResize:tZ},i.createElement("div",{ref:eI,className:"".concat(ef,"-nav-list"),style:{transform:"translate(".concat(ez,"px, ").concat(eW,"px)"),transition:tb?"none":void 0}},tS,i.createElement(B,{ref:eM,prefixCls:ef,locale:e_,editable:ey,style:(0,f.Z)((0,f.Z)({},0===tS.length?void 0:tw),{},{visibility:tD?"hidden":null})}),i.createElement("div",{className:u()("".concat(ef,"-ink-bar"),(0,p.Z)({},"".concat(ef,"-ink-bar-animated"),eg.inkBar)),style:tI})))),i.createElement(G,(0,r.Z)({},e,{removeAriaLabel:null==e_?void 0:e_.removeAriaLabel,ref:eN,prefixCls:ef,tabs:tP,className:!tD&&tl,tabMoving:!!tb})),i.createElement(O,{ref:eT,position:"right",extra:ex,prefixCls:ef})))}),K=["renderTabBar"],F=["label","key"];function q(e){var t=e.renderTabBar,n=(0,m.Z)(e,K),a=i.useContext(k).tabs;return t?t((0,f.Z)((0,f.Z)({},n),{},{panes:a.map(function(e){var t=e.label,n=e.key,a=(0,m.Z)(e,F);return i.createElement(x,(0,r.Z)({tab:t,key:n,tabKey:n},a))})}),H):i.createElement(H,n)}n(5004);var V=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],Y=0,Q=i.forwardRef(function(e,t){var n,a,o=e.id,c=e.prefixCls,l=void 0===c?"rc-tabs":c,d=e.className,s=e.items,$=e.direction,x=e.activeKey,y=e.defaultActiveKey,w=e.editable,S=e.animated,E=e.tabPosition,Z=void 0===E?"top":E,C=e.tabBarGutter,R=e.tabBarStyle,P=e.tabBarExtraContent,T=e.locale,L=e.moreIcon,I=e.moreTransitionName,N=e.destroyInactiveTabPane,M=e.renderTabBar,B=e.onChange,O=e.onTabClick,D=e.onTabScroll,z=e.getPopupContainer,j=e.popupClassName,G=(0,m.Z)(e,V),A=i.useMemo(function(){return(s||[]).filter(function(e){return e&&"object"===(0,b.Z)(e)&&"key"in e})},[s]),W="rtl"===$,X=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,f.Z)({inkBar:!0},"object"===(0,b.Z)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(S),H=(0,i.useState)(!1),K=(0,v.Z)(H,2),F=K[0],Q=K[1];(0,i.useEffect)(function(){Q((0,h.Z)())},[]);var J=(0,g.Z)(function(){var e;return null===(e=A[0])||void 0===e?void 0:e.key},{value:x,defaultValue:y}),U=(0,v.Z)(J,2),ee=U[0],et=U[1],en=(0,i.useState)(function(){return A.findIndex(function(e){return e.key===ee})}),ea=(0,v.Z)(en,2),eo=ea[0],er=ea[1];(0,i.useEffect)(function(){var e,t=A.findIndex(function(e){return e.key===ee});-1===t&&(t=Math.max(0,Math.min(eo,A.length-1)),et(null===(e=A[t])||void 0===e?void 0:e.key)),er(t)},[A.map(function(e){return e.key}).join("_"),ee,eo]);var ei=(0,g.Z)(null,{value:o}),ec=(0,v.Z)(ei,2),el=ec[0],ed=ec[1];(0,i.useEffect)(function(){o||(ed("rc-tabs-".concat(Y)),Y+=1)},[]);var es={id:el,activeKey:ee,animated:X,tabPosition:Z,rtl:W,mobile:F},eu=(0,f.Z)((0,f.Z)({},es),{},{editable:w,locale:T,moreIcon:L,moreTransitionName:I,tabBarGutter:C,onTabClick:function(e,t){null==O||O(e,t);var n=e!==ee;et(e),n&&(null==B||B(e))},onTabScroll:D,extra:P,style:R,panes:null,getPopupContainer:z,popupClassName:j});return i.createElement(k.Provider,{value:{tabs:A,prefixCls:l}},i.createElement("div",(0,r.Z)({ref:t,id:o,className:u()(l,"".concat(l,"-").concat(Z),(n={},(0,p.Z)(n,"".concat(l,"-mobile"),F),(0,p.Z)(n,"".concat(l,"-editable"),w),(0,p.Z)(n,"".concat(l,"-rtl"),W),n),d)},G),a,i.createElement(q,(0,r.Z)({},eu,{renderTabBar:M})),i.createElement(_,(0,r.Z)({destroyInactiveTabPane:N},es,{animated:X}))))}),J=n(9746),U=n(69),ee=n(716);let et={motionAppear:!1,motionEnter:!0,motionLeave:!0};var en=n(5912),ea=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)0>t.indexOf(a[o])&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]]);return n},eo=n(8663),er=n(650),ei=n(721),ec=n(3279),el=e=>{let{componentCls:t,motionDurationSlow:n}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${n}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${n}`}}}}},[(0,ec.oN)(e,"slide-up"),(0,ec.oN)(e,"slide-down")]]};let ed=e=>{let{componentCls:t,tabsCardPadding:n,cardBg:a,cardGutter:o,colorBorderSecondary:r,itemSelectedColor:i}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:n,background:a,border:`${e.lineWidth}px ${e.lineType} ${r}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:i,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${o}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${o}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},es=e=>{let{componentCls:t,itemHoverColor:n,dropdownEdgeChildVerticalPadding:a}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},(0,eo.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${a}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},eo.vS),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},eu=e=>{let{componentCls:t,margin:n,colorBorderSecondary:a,horizontalMargin:o,verticalItemPadding:r,verticalItemMargin:i}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:o,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${a}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${n}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:1.25*e.controlHeight,[`${t}-tab`]:{padding:r,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:i},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},ep=e=>{let{componentCls:t,cardPaddingSM:n,cardPaddingLG:a,horizontalItemPaddingSM:o,horizontalItemPaddingLG:r}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:o,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:n}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:a}}}}}},ef=e=>{let{componentCls:t,itemActiveColor:n,itemHoverColor:a,iconCls:o,tabsHorizontalItemMargin:r,horizontalItemPadding:i,itemSelectedColor:c}=e,l=`${t}-tab`;return{[l]:{position:"relative",display:"inline-flex",alignItems:"center",padding:i,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer","&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:n}},(0,eo.Qy)(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:a},[`&${l}-active ${l}-btn`]:{color:c,textShadow:e.tabsActiveTextShadow},[`&${l}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${l}-disabled ${l}-btn, &${l}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${l}-remove ${o}`]:{margin:0},[o]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${l} + ${l}`]:{margin:{_skip_check_:!0,value:r}}}},ev=e=>{let{componentCls:t,tabsHorizontalItemMarginRTL:n,iconCls:a,cardGutter:o}=e,r=`${t}-rtl`;return{[r]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:n},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[a]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[a]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:o},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},eb=e=>{let{componentCls:t,tabsCardPadding:n,cardHeight:a,cardGutter:o,itemHoverColor:r,itemActiveColor:i,colorBorderSecondary:c}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,eo.Wf)(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:n,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:a,marginLeft:{_skip_check_:!0,value:o},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${c}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:r},"&:active, &:focus:not(:focus-visible)":{color:i}},(0,eo.Qy)(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),ef(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}};var em=(0,er.Z)("Tabs",e=>{let t=(0,ei.TS)(e,{tabsCardPadding:e.cardPadding||`${(e.cardHeight-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${e.horizontalItemGutter}px`,tabsHorizontalItemMarginRTL:`0 0 0 ${e.horizontalItemGutter}px`});return[ep(t),ev(t),eu(t),es(t),ed(t),eb(t),el(t)]},e=>{let t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:"",cardPaddingSM:`${1.5*e.paddingXXS}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${1.5*e.paddingXXS}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}}),eh=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)0>t.indexOf(a[o])&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]]);return n};function eg(e){let t;var{type:n,className:r,rootClassName:c,size:l,onEdit:s,hideAdd:p,centered:f,addIcon:v,popupClassName:b,children:m,items:h,animated:g}=e,$=eh(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","popupClassName","children","items","animated"]);let{prefixCls:k,moreIcon:x=i.createElement(o.Z,null)}=$,{direction:y,getPrefixCls:_,getPopupContainer:w}=i.useContext(J.E_),S=_("tabs",k),[E,Z]=em(S);"editable-card"===n&&(t={onEdit:(e,t)=>{let{key:n,event:a}=t;null==s||s("add"===e?a:n,e)},removeIcon:i.createElement(a.Z,null),addIcon:v||i.createElement(d,null),showAdd:!0!==p});let C=_(),R=function(e,t){if(e)return e;let n=(0,en.Z)(t).map(e=>{if(i.isValidElement(e)){let{key:t,props:n}=e,a=n||{},{tab:o}=a,r=ea(a,["tab"]),i=Object.assign(Object.assign({key:String(t)},r),{label:o});return i}return null});return n.filter(e=>e)}(h,m),P=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:Object.assign({inkBar:!0},"object"==typeof n?n:{})).tabPane&&(t.tabPaneMotion=Object.assign(Object.assign({},et),{motionName:(0,ee.mL)(e,"switch")})),t}(S,g),T=(0,U.Z)(l);return E(i.createElement(Q,Object.assign({direction:y,getPopupContainer:w,moreTransitionName:`${C}-slide-up`},$,{items:R,className:u()({[`${S}-${T}`]:T,[`${S}-card`]:["card","editable-card"].includes(n),[`${S}-editable-card`]:"editable-card"===n,[`${S}-centered`]:f},r,c,Z),popupClassName:u()(b,Z),editable:t,moreIcon:x,prefixCls:S,animated:P})))}eg.TabPane=()=>null;var e$=eg}}]);
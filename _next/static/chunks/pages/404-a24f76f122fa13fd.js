(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92197],{20394:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(66367)}])},66367:function(e,t,n){"use strict";n.r(t),n.d(t,{Div_64093a13086094dda35345330da0660b:function(){return w},Fragment_ecc7fc8159e7de57fc1e48e5f03b41bb:function(){return b},Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d:function(){return x},default:function(){return v}});var o=n(82729),r=n(35944),i=n(67294),c=n(48039),s=n(59654),a=n(12658),u=n(70917),d=n(64712),l=n(73954),f=n(12918),h=n.n(f),m=n(11163);let p=()=>{let[e,t]=(0,i.useState)(!1),n=(0,i.useRef)(!1),o=(0,m.useRouter)();return(0,i.useEffect)(()=>{o.isReady&&!n.current&&(n.current=!0,o.replace({pathname:window.location.pathname,query:window.location.search.slice(1)}).then(()=>{"/404"===o.pathname&&t(!0)}).catch(e=>{t(!0)}))},[o.isReady]),e};var g=n(9008),_=n.n(g);function Z(){let e=(0,o._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return Z=function(){return e},e}function x(){let{resolvedColorMode:e}=(0,i.useContext)(c.ColorModeContext);s.refs.__toast=d.Am;let[t,n]=(0,i.useContext)(c.EventLoopContext),o={description:"Check if server is reachable at "+(0,s.getBackendURL)(l.Ks).href,closeButton:!0,duration:12e4,id:"websocket-error"},[a,u]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{n.length>=2?a||d.Am.error("Cannot connect to server: ".concat(n.length>0?n[n.length-1].message:"","."),{...o,onDismiss:()=>u(!0)}):(d.Am.dismiss("websocket-error"),u(!1))},[n]),(0,r.tZ)(d.x7,{closeButton:!1,expand:!0,position:"bottom-right",richColors:!0,theme:e})}let C=(0,u.keyframes)(Z());function w(){let[e,t]=(0,i.useContext)(c.EventLoopContext);return(0,r.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},title:"Connection Error: "+(t.length>0?t[t.length-1].message:""),children:(0,r.tZ)(b,{})})}function b(){let[e,t]=(0,i.useContext)(c.EventLoopContext);return(0,r.tZ)(i.Fragment,{children:(0,s.isTrue)(t.length>0)?(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(a.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"33px",right:"33px",animation:C+" 1s infinite"},size:32})}):(0,r.tZ)(i.Fragment,{})})}function v(){let e=p();return(0,r.BX)(i.Fragment,{children:[(0,r.BX)(i.Fragment,{children:[(0,r.tZ)(w,{}),(0,r.tZ)(x,{})]}),(0,r.tZ)(i.Fragment,{children:(0,s.isTrue)(e)?(0,r.tZ)(i.Fragment,{children:(0,r.tZ)(h(),{statusCode:404})}):(0,r.tZ)(i.Fragment,{})}),(0,r.BX)(_(),{children:[(0,r.tZ)("title",{children:"404 - Not Found"}),(0,r.tZ)("meta",{content:"The page was not found",name:"description"}),(0,r.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},12918:function(e,t,n){e.exports=n(2111)}},function(e){e.O(0,[78049,92888,49774,40179],function(){return e(e.s=20394)}),_N_E=e.O()}]);
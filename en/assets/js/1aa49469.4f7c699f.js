"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[81618],{568358:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u6027\u80fd\u6d4b\u8bd5","title":"\u6027\u80fd\u6d4b\u8bd5","description":"GoFrame\u6846\u67b6\u4e2dHTTP Server\u7ec4\u4ef6\u7684\u6027\u80fd\u6d4b\u8bd5\u3002GoFrame\u6846\u67b6\u4ee5\u5176\u6a21\u5757\u5316\u548c\u4f4e\u8026\u5408\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u57fa\u7840\u5f00\u53d1\u73af\u5883\u3002\u672c\u6587\u901a\u8fc7\u4e2d\u7acb\u7684\u7b2c\u4e09\u65b9\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a\uff0c\u5c55\u793a\u4e86HTTP Server\u7684\u5b9e\u9645\u6027\u80fd\u8868\u73b0\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u7406\u89e3\u548c\u8bc4\u4f30GoFrame\u6846\u67b6\u7684\u80fd\u529b\u53ca\u4f18\u8d8a\u6027\u3002","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6027\u80fd\u6d4b\u8bd5.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1","slug":"/docs/web/performance","permalink":"/en/docs/web/performance","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6027\u80fd\u6d4b\u8bd5.md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"slug":"/docs/web/performance","title":"\u6027\u80fd\u6d4b\u8bd5","sidebar_position":12,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u6027\u80fd\u6d4b\u8bd5","HTTP Server","\u6a21\u5757\u5316\u6846\u67b6","\u4f4e\u8026\u5408","\u57fa\u7840\u5f00\u53d1\u6846\u67b6","\u6027\u80fd\u62a5\u544a","\u7b2c\u4e09\u65b9\u6d4b\u8bd5","Go\u6846\u67b6"],"description":"GoFrame\u6846\u67b6\u4e2dHTTP Server\u7ec4\u4ef6\u7684\u6027\u80fd\u6d4b\u8bd5\u3002GoFrame\u6846\u67b6\u4ee5\u5176\u6a21\u5757\u5316\u548c\u4f4e\u8026\u5408\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u57fa\u7840\u5f00\u53d1\u73af\u5883\u3002\u672c\u6587\u901a\u8fc7\u4e2d\u7acb\u7684\u7b2c\u4e09\u65b9\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a\uff0c\u5c55\u793a\u4e86HTTP Server\u7684\u5b9e\u9645\u6027\u80fd\u8868\u73b0\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u7406\u89e3\u548c\u8bc4\u4f30GoFrame\u6846\u67b6\u7684\u80fd\u529b\u53ca\u4f18\u8d8a\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"HTTPServer-\u76d1\u63a7\u6307\u6807","permalink":"/en/docs/web/senior-server-metrics"},"next":{"title":"\u5e38\u89c1\u95ee\u9898","permalink":"/en/docs/web/faq"}}');var s=t(474848),n=t(28453);const i={slug:"/docs/web/performance",title:"\u6027\u80fd\u6d4b\u8bd5",sidebar_position:12,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u6027\u80fd\u6d4b\u8bd5","HTTP Server","\u6a21\u5757\u5316\u6846\u67b6","\u4f4e\u8026\u5408","\u57fa\u7840\u5f00\u53d1\u6846\u67b6","\u6027\u80fd\u62a5\u544a","\u7b2c\u4e09\u65b9\u6d4b\u8bd5","Go\u6846\u67b6"],description:"GoFrame\u6846\u67b6\u4e2dHTTP Server\u7ec4\u4ef6\u7684\u6027\u80fd\u6d4b\u8bd5\u3002GoFrame\u6846\u67b6\u4ee5\u5176\u6a21\u5757\u5316\u548c\u4f4e\u8026\u5408\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u57fa\u7840\u5f00\u53d1\u73af\u5883\u3002\u672c\u6587\u901a\u8fc7\u4e2d\u7acb\u7684\u7b2c\u4e09\u65b9\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a\uff0c\u5c55\u793a\u4e86HTTP Server\u7684\u5b9e\u9645\u6027\u80fd\u8868\u73b0\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u7406\u89e3\u548c\u8bc4\u4f30GoFrame\u6846\u67b6\u7684\u80fd\u529b\u53ca\u4f18\u8d8a\u6027\u3002"},c=void 0,a={},d=[{value:"\u5173\u4e8e\u6027\u80fd\u6d4b\u8bd5",id:"\u5173\u4e8e\u6027\u80fd\u6d4b\u8bd5",level:2},{value:"\u5168\u6846\u67b6/\u7ec4\u4ef6\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",id:"\u5168\u6846\u67b6\u7ec4\u4ef6\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",level:2},{value:"Go\u6846\u67b6/\u7ec4\u4ef6\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",id:"go\u6846\u67b6\u7ec4\u4ef6\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",level:2}];function m(e){const r={a:"a",h2:"h2",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"\u5173\u4e8e\u6027\u80fd\u6d4b\u8bd5",children:"\u5173\u4e8e\u6027\u80fd\u6d4b\u8bd5"}),"\n",(0,s.jsx)(r.p,{children:"\u9700\u8981\u6ce8\u610f\uff0cGoFrame\u6846\u67b6\u662f\u4e00\u4e2a\u6a21\u5757\u5316\u3001\u4f4e\u8026\u5408\u7684\u57fa\u7840\u5f00\u53d1\u6846\u67b6\uff0cHTTP Server\u53ea\u662f\u5176\u4e2d\u4e00\u4e2a\u6838\u5fc3\u7ec4\u4ef6\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u8fd9\u91cc\u53ea\u662f\u5c55\u793aHTTP Server\u7684\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a\uff0c\u4ee5\u4e2d\u7acb\u7684\u7b2c\u4e09\u65b9\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a\u4e3a\u51c6\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"\u5168\u6846\u67b6\u7ec4\u4ef6\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",children:"\u5168\u6846\u67b6/\u7ec4\u4ef6\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://www.techempower.com/benchmarks/#section=data-r21&test=composite",children:"https://www.techempower.com/benchmarks/#section=data-r21&test=composite"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:t(663424).A+"",width:"1170",height:"1686"})}),"\n",(0,s.jsx)(r.h2,{id:"go\u6846\u67b6\u7ec4\u4ef6\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",children:"Go\u6846\u67b6/\u7ec4\u4ef6\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:t(175923).A+"",width:"2336",height:"758"})})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},175923:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/e8d28499739545684c4637aedcebcae0-9feb70b5015b9b588e281bc86e3bd1ff.png"},663424:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/fbf3b624474544cc94df0add4320026e-4531339d05252dd50be1fec7b721a3e5.png"},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var o=t(296540);const s={},n=o.createContext(s);function i(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);
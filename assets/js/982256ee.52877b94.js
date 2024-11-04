"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[75031],{63567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406","title":"ORM\u4e8b\u52a1\u5904\u7406","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406","slug":"/docs/core/gdb-transaction","permalink":"/docs/core/gdb-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/core/gdb-transaction","title":"ORM\u4e8b\u52a1\u5904\u7406","sidebar_position":3,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"ORM\u65b9\u6cd5\u64cd\u4f5c(\u539f\u751f)","permalink":"/docs/core/gdb-funcs"},"next":{"title":"ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c","permalink":"/docs/core/gdb-transaction-basic"}}');var s=n(74848),i=n(28453);const c={slug:"/docs/core/gdb-transaction",title:"ORM\u4e8b\u52a1\u5904\u7406",sidebar_position:3,hide_title:!0},d=void 0,r={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(t.code,{children:"GoFrame ORM"})," \u7ec4\u4ef6\u8fdb\u884c\u4e8b\u52a1\u64cd\u4f5c\u975e\u5e38\u7b80\u4fbf\u3001\u5b89\u5168\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u64cd\u4f5c\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\u5e38\u89c4\u64cd\u4f5c\uff1a\u901a\u8fc7 ",(0,s.jsx)(t.code,{children:"Begin"})," \u5f00\u542f\u4e8b\u52a1\u4e4b\u540e\u4f1a\u8fd4\u56de\u4e00\u4e2a\u4e8b\u52a1\u64cd\u4f5c\u63a5\u53e3 ",(0,s.jsx)(t.code,{children:"gdb.TX"}),"\uff0c\u968f\u540e\u53ef\u4ee5\u4f7f\u7528\u8be5\u63a5\u53e3\u8fdb\u884c\u5982\u4e4b\u524d\u7ae0\u8282\u4ecb\u7ecd\u7684\u65b9\u6cd5\u64cd\u4f5c\u548c\u94fe\u5f0f\u64cd\u4f5c\u3002\u5e38\u89c4\u64cd\u4f5c\u5bb9\u6613\u6f0f\u6389\u5173\u95ed\u4e8b\u52a1\uff0c\u6709\u4e00\u5b9a\u7684\u4e8b\u52a1\u64cd\u4f5c\u5b89\u5168\u98ce\u9669\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["\u95ed\u5305\u64cd\u4f5c\uff1a\u901a\u8fc7 ",(0,s.jsx)(t.code,{children:"Transaction"})," \u95ed\u5305\u65b9\u6cd5\u7684\u5f62\u5f0f\u6765\u64cd\u4f5c\u4e8b\u52a1\uff0c\u6240\u6709\u7684\u4e8b\u52a1\u903b\u8f91\u5728\u95ed\u5305\u4e2d\u5b9e\u73b0\uff0c\u95ed\u5305\u7ed3\u675f\u540e\u81ea\u52a8\u5173\u95ed\u4e8b\u52a1\u4fdd\u969c\u4e8b\u52a1\u64cd\u4f5c\u5b89\u5168\u3002\u5e76\u4e14\u95ed\u5305\u64cd\u4f5c\u652f\u6301\u975e\u5e38\u4fbf\u6377\u7684 ",(0,s.jsx)(t.strong,{children:"\u5d4c\u5957\u4e8b\u52a1"}),"\uff0c\u5d4c\u5957\u4e8b\u52a1\u5728\u4e1a\u52a1\u64cd\u4f5c\u4e2d\u900f\u660e\u65e0\u611f\u77e5\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["\u6211\u4eec\u63a8\u8350\u4e8b\u52a1\u64cd\u4f5c\u5747\u7edf\u4e00\u91c7\u7528 ",(0,s.jsx)(t.code,{children:"Transaction"})," \u95ed\u5305\u65b9\u5f0f\u5b9e\u73b0\u3002"]})}),"\n",(0,s.jsxs)(t.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#TX",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#TX"})]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var o=n(96540);const s={},i=o.createContext(s);function c(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[51081],{387453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(474848),s=n(28453);const o={title:"\u6570\u636e\u6821\u9a8c-\u6821\u9a8c\u65b9\u6cd5",sidebar_position:1},i=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u6821\u9a8c\u65b9\u6cd5",title:"\u6570\u636e\u6821\u9a8c-\u6821\u9a8c\u65b9\u6cd5",description:"\u63a5\u53e3\u6587\u6863\uff1a https://godoc.org/github.com/gogf/gf/util/gvalid",source:"@site/versioned_docs/version-1.14.x/1-\u6838\u5fc3\u7ec4\u4ef6/7-\u6570\u636e\u6821\u9a8c/1-\u6570\u636e\u6821\u9a8c-\u6821\u9a8c\u65b9\u6cd5.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6/7-\u6570\u636e\u6821\u9a8c",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u6821\u9a8c\u65b9\u6cd5",permalink:"/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u6821\u9a8c\u65b9\u6cd5",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.14.x/1-\u6838\u5fc3\u7ec4\u4ef6/7-\u6570\u636e\u6821\u9a8c/1-\u6570\u636e\u6821\u9a8c-\u6821\u9a8c\u65b9\u6cd5.md",tags:[],version:"1.14.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:1,frontMatter:{title:"\u6570\u636e\u6821\u9a8c-\u6821\u9a8c\u65b9\u6cd5",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u6821\u9a8c-\u6821\u9a8c\u89c4\u5219",permalink:"/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u6821\u9a8c\u89c4\u5219"},next:{title:"\u6570\u636e\u6821\u9a8c-\u6821\u9a8c\u7ed3\u679c",permalink:"/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u6821\u9a8c\u7ed3\u679c"}},d={},l=[];function a(e){const t={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a ",(0,r.jsx)(t.a,{href:"https://godoc.org/github.com/gogf/gf/util/gvalid",children:"https://godoc.org/github.com/gogf/gf/util/gvalid"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"func Check(value interface{}, rules string, msgs interface{}, params ...map[string]interface{}) *Error\nfunc CheckMap(params map[string]interface{}, rules interface{}, msgs ...CustomMsg) *Error\nfunc CheckStruct(object interface{}, rules interface{}, msgs ...CustomMsg) *Error\n\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Check"})," \u65b9\u6cd5\u7528\u4e8e\u5355\u6761\u6570\u636e\u6821\u9a8c\uff0c\u6bd4\u8f83\u7b80\u5355\uff0c\u65b9\u6cd5\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u770b\u540e\u7eed\u7ae0\u8282\uff1b"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"CheckMap"})," \u65b9\u6cd5\u7528\u4e8e\u591a\u6761\u6570\u636e\u6821\u9a8c\uff0c\u6821\u9a8c\u7684\u4e3b\u4f53\u53d8\u91cf\u4e3a ",(0,r.jsx)(t.code,{children:"map"})," \u7c7b\u578b\uff0c\u65b9\u6cd5\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u770b\u540e\u7eed\u7ae0\u8282\uff1b"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"CheckStruct"})," \u65b9\u6cd5\u7528\u4e8e\u591a\u6761\u6570\u636e\u6821\u9a8c\uff0c\u6821\u9a8c\u7684\u4e3b\u4f53\u53d8\u91cf\u4e3a\u7ed3\u6784\u4f53\u5bf9\u8c61\u7c7b\u578b\uff0c\u65b9\u6cd5\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u770b\u540e\u7eed\u7ae0\u8282\uff1b"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Check*"})," \u65b9\u6cd5\u53ea\u6709\u5728\u8fd4\u56de ",(0,r.jsx)(t.code,{children:"nil"})," \u7684\u60c5\u51b5\u4e0b\uff0c\u8868\u793a\u6570\u636e\u6821\u9a8c\u6210\u529f\uff0c\u5426\u5219\u8fd4\u56de\u6821\u9a8c\u51fa\u9519\u7684\u9519\u8bef\u4fe1\u606f\u5bf9\u8c61\u6307\u9488 ",(0,r.jsx)(t.code,{children:"*Error"}),"\uff1b"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(296540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
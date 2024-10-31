"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[72765],{58761:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=c(74848),t=c(28453);const o={slug:"/core/gcmd/scan",title:"\u547d\u4ee4\u7ba1\u7406-\u7ec8\u7aef\u4ea4\u4e92",sidebar_position:5,hide_title:!0},i=void 0,r={id:"\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406/\u547d\u4ee4\u7ba1\u7406-\u7ec8\u7aef\u4ea4\u4e92",title:"\u547d\u4ee4\u7ba1\u7406-\u7ec8\u7aef\u4ea4\u4e92",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/2-\u547d\u4ee4\u7ba1\u7406/5-\u547d\u4ee4\u7ba1\u7406-\u7ec8\u7aef\u4ea4\u4e92.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/2-\u547d\u4ee4\u7ba1\u7406",slug:"/core/gcmd/scan",permalink:"/gf-site/docs/core/gcmd/scan",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/4-\u6838\u5fc3\u7ec4\u4ef6/2-\u547d\u4ee4\u7ba1\u7406/5-\u547d\u4ee4\u7ba1\u7406-\u7ec8\u7aef\u4ea4\u4e92.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730354542e3,sidebarPosition:5,frontMatter:{slug:"/core/gcmd/scan",title:"\u547d\u4ee4\u7ba1\u7406-\u7ec8\u7aef\u4ea4\u4e92",sidebar_position:5,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u547d\u4ee4\u7ba1\u7406-\u7ed3\u6784\u5316\u53c2\u6570",permalink:"/gf-site/docs/core/gcmd/struct"},next:{title:"\u547d\u4ee4\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a",permalink:"/gf-site/docs/core/gcmd/tracing"}},a={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"<code>Scan</code> \u4f7f\u7528",id:"scan-\u4f7f\u7528",level:2},{value:"<code>Scanf</code> \u4f7f\u7528",id:"scanf-\u4f7f\u7528",level:2}];function l(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gcmd"})," \u7ec4\u4ef6\u652f\u6301\u4ece\u7ec8\u7aef\u8bfb\u53d6\u7528\u6237\u8f93\u5165\u6570\u636e\uff0c\u5e38\u7528\u4e8e\u7ec8\u7aef\u4ea4\u4e92\u573a\u666f\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u76f8\u5173\u65b9\u6cd5\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"func Scan(info ...interface{}) string\nfunc Scanf(format string, info ...interface{}) string\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u90fd\u662f\u5411\u7ec8\u7aef\u5c55\u793a\u7ed9\u5b9a\u7684\u4fe1\u606f\uff0c\u81ea\u52a8\u8bfb\u53d6\u7ec8\u7aef\u7528\u6237\u8f93\u5165\u7684\u4fe1\u606f\u8fd4\u56de\uff0c\u901a\u8fc7\u56de\u8f66\u7b26\u53f7\u8fd4\u56de\u3002"}),"\n",(0,s.jsxs)(e.h2,{id:"scan-\u4f7f\u7528",children:[(0,s.jsx)(e.code,{children:"Scan"})," \u4f7f\u7528"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/os/gcmd"\n)\n\nfunc main() {\n    name := gcmd.Scan("What\'s your name?\\n")\n    fmt.Println("Your name is:", name)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u4ea4\u4e92\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"> What's your name?\njohn\n> Your name is: john\n"})}),"\n",(0,s.jsxs)(e.h2,{id:"scanf-\u4f7f\u7528",children:[(0,s.jsx)(e.code,{children:"Scanf"})," \u4f7f\u7528"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/os/gcmd"\n)\n\nfunc main() {\n    name := gcmd.Scan("> What\'s your name?\\n")\n    age := gcmd.Scanf("> Hello %s, how old are you?\\n", name)\n    fmt.Printf("> %s\'s age is: %s", name, age)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u4ea4\u4e92\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"> What's your name?\njohn\n> Hello john, how old are you?\n18\n> john's age is: 18\n"})})]})}function m(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,c)=>{c.d(e,{R:()=>i,x:()=>r});var s=c(96540);const t={},o=s.createContext(t);function i(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);
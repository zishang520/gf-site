"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[75987],{770890:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>t});var o=s(474848),i=s(28453);const c={title:"\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790",sidebar_position:1},r=void 0,d={id:"WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790",title:"\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790",description:"\u63a5\u53e3\u6587\u6863\uff1a https://godoc.org/github.com/gogf/gf/net/ghttp#Response",source:"@site/versioned_docs/version-1.15.x/3-WEB\u670d\u52a1\u5f00\u53d1/3-\u6570\u636e\u8fd4\u56de/1-\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790.md",sourceDirName:"3-WEB\u670d\u52a1\u5f00\u53d1/3-\u6570\u636e\u8fd4\u56de",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790",permalink:"/docs/1.15.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.15.x/3-WEB\u670d\u52a1\u5f00\u53d1/3-\u6570\u636e\u8fd4\u56de/1-\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790.md",tags:[],version:"1.15.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:1,frontMatter:{title:"\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236",permalink:"/docs/1.15.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236"},next:{title:"\u6570\u636e\u8fd4\u56de-JSON/XML",permalink:"/docs/1.15.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-JSONXML"}},l={},t=[{value:"\u5185\u7f6e\u53d8\u91cf",id:"\u5185\u7f6e\u53d8\u91cf",level:2},{value:"<code>Config</code>",id:"config",level:3},{value:"<code>Cookie</code>",id:"cookie",level:3},{value:"<code>Session</code>",id:"session",level:3},{value:"<code>Query</code>",id:"query",level:3},{value:"<code>Form</code>",id:"form",level:3},{value:"<code>Request</code>",id:"request",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,o.jsx)(n.a,{href:"https://godoc.org/github.com/gogf/gf/net/ghttp#Response",children:"https://godoc.org/github.com/gogf/gf/net/ghttp#Response"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Response"})," \u652f\u6301\u6a21\u677f\u6587\u4ef6/\u5185\u5bb9\u89e3\u6790\u8f93\u51fa\uff0c\u6216\u8005\u6a21\u677f\u6587\u4ef6/\u5185\u5bb9\u89e3\u6790\u8fd4\u56de\u3002\u4e0e\u76f4\u63a5\u4f7f\u7528\u6a21\u677f\u5bf9\u8c61\u89e3\u6790\u6a21\u677f\u529f\u80fd\u4e0d\u540c\u7684\u662f\uff0c ",(0,o.jsx)(n.code,{children:"Response"})," \u7684\u89e3\u6790\u652f\u6301\u4e00\u4e9b\u8bf7\u6c42\u76f8\u5173\u7684\u5185\u7f6e\u53d8\u91cf\u3002\u6a21\u677f\u89e3\u6790\u5305\u542b\u4ee5\u4e0b\u65b9\u6cd5\uff1a"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"WriteTpl*"})," \u65b9\u6cd5\u7528\u4e8e\u6a21\u677f\u8f93\u51fa\uff0c\u89e3\u6790\u5e76\u8f93\u51fa\u6a21\u677f\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u89e3\u6790\u5e76\u8f93\u51fa\u7ed9\u5b9a\u7684\u6a21\u677f\u5185\u5bb9\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ParseTpl*"})," \u65b9\u6cd5\u7528\u4e8e\u6a21\u677f\u89e3\u6790\uff0c\u89e3\u6790\u6a21\u677f\u6587\u4ef6\u6216\u8005\u6a21\u677f\u5185\u5bb9\uff0c\u8fd4\u56de\u89e3\u6790\u540e\u7684\u5185\u5bb9\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u5185\u7f6e\u53d8\u91cf",children:"\u5185\u7f6e\u53d8\u91cf"}),"\n",(0,o.jsx)(n.h3,{id:"config",children:(0,o.jsx)(n.code,{children:"Config"})}),"\n",(0,o.jsxs)(n.p,{children:["\u8bbf\u95ee\u9ed8\u8ba4\u7684\u914d\u7f6e\u7ba1\u7406\uff08 ",(0,o.jsx)(n.code,{children:"config.toml"}),"\uff09\u5bf9\u8c61\u914d\u7f6e\u9879\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"{{.Config.\u914d\u7f6e\u9879}}\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"cookie",children:(0,o.jsx)(n.code,{children:"Cookie"})}),"\n",(0,o.jsxs)(n.p,{children:["\u8bbf\u95ee\u5f53\u524d\u8bf7\u6c42\u7684 ",(0,o.jsx)(n.code,{children:"Cookie"})," \u5bf9\u8c61\u53c2\u6570\u503c\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"{{.Cookie.\u952e\u540d}}\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"session",children:(0,o.jsx)(n.code,{children:"Session"})}),"\n",(0,o.jsxs)(n.p,{children:["\u8bbf\u95ee\u5f53\u524d\u8bf7\u6c42\u7684 ",(0,o.jsx)(n.code,{children:"Session"})," \u5bf9\u8c61\u53c2\u6570\u503c\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"{{.Session.\u952e\u540d}}\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"query",children:(0,o.jsx)(n.code,{children:"Query"})}),"\n",(0,o.jsxs)(n.p,{children:["\u8bbf\u95ee\u5f53\u524d ",(0,o.jsx)(n.code,{children:"Query String"})," \u4e2d\u7684\u8bf7\u6c42\u53c2\u6570\u503c\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"{{.Query.\u952e\u540d}}\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"form",children:(0,o.jsx)(n.code,{children:"Form"})}),"\n",(0,o.jsx)(n.p,{children:"\u8bbf\u95ee\u5f53\u524d\u8868\u5355\u8bf7\u6c42\u53c2\u6570\u503c\u3002"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"{{.Form.\u952e\u540d}}\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"request",children:(0,o.jsx)(n.code,{children:"Request"})}),"\n",(0,o.jsx)(n.p,{children:"\u8bbf\u95ee\u5f53\u524d\u8bf7\u6c42\u53c2\u6570\u503c\uff08\u4e0d\u533a\u5206\u53c2\u6570\u63d0\u4ea4\u65b9\u5f0f\uff09\u3002"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"{{.Request.\u952e\u540d}}\n\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/frame/g"\n    "github.com/gogf/gf/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request){\n        r.Cookie.Set("theme", "default")\n        r.Session.Set("name", "john")\n        content :=`Config:{{.Config.redis.cache}}, Cookie:{{.Cookie.theme}}, Session:{{.Session.name}}, Query:{{.Query.name}}`\n        r.Response.WriteTplContent(content, nil)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c ",(0,o.jsx)(n.code,{children:"config.toml"})," \u5185\u5bb9\u4e3a\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'# Redis\u6570\u636e\u5e93\u914d\u7f6e\n[redis]\n    disk  = "127.0.0.1:6379,0"\n    cache = "127.0.0.1:6379,1"\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u6267\u884c\u540e\uff0c\u8bbf\u95ee ",(0,o.jsx)(n.a,{href:"http://127.0.0.1:8199/?name=john",children:"http://127.0.0.1:8199/?name=john"})," \uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"Config:127.0.0.1:6379,1, Cookie:default, Session:john, Query:john\n\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var o=s(296540);const i={},c=o.createContext(i);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);
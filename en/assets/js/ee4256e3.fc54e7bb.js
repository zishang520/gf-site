"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[97562],{48177:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=n(74848),o=n(28453);const i={title:"Session-Memory",sidebar_position:1,hide_title:!0},r=void 0,c={id:"WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Memory",title:"Session-Memory",description:"\u5185\u5b58\u5b58\u50a8",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/7-Session/1-Session-Memory.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/7-Session",slug:"/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Memory",permalink:"/gf-site/en/docs/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Memory",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/7-WEB\u670d\u52a1\u5f00\u53d1/7-Session/1-Session-Memory.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730215846e3,sidebarPosition:1,frontMatter:{title:"Session-Memory",sidebar_position:1,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"Session-File",permalink:"/gf-site/en/docs/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-File"},next:{title:"Session-Redis-KeyValue",permalink:"/gf-site/en/docs/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Redis-KeyValue"}},d={},l=[{value:"\u5185\u5b58\u5b58\u50a8",id:"\u5185\u5b58\u5b58\u50a8",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function a(e){const s={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"\u5185\u5b58\u5b58\u50a8",children:"\u5185\u5b58\u5b58\u50a8"}),"\n",(0,t.jsxs)(s.p,{children:["\u5185\u5b58\u5b58\u50a8\u6bd4\u8f83\u7b80\u5355\uff0c\u6027\u80fd\u4e5f\u5f88\u9ad8\u6548\uff0c\u4f46\u6ca1\u6709\u6301\u4e45\u5316\u5b58\u50a8 ",(0,t.jsx)(s.code,{children:"Session"})," \u6570\u636e\uff0c\u56e0\u6b64\u5e94\u7528\u7a0b\u5e8f\u91cd\u542f\u4e4b\u540e\u4fbf\u4f1a\u4e22\u5931 ",(0,t.jsx)(s.code,{children:"Session"})," \u6570\u636e\uff0c\u53ef\u7528\u4e8e\u7279\u5b9a\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\u3002 ",(0,t.jsx)(s.code,{children:"gsession"})," \u7684 ",(0,t.jsx)(s.code,{children:"\u5185\u5b58"})," \u5b58\u50a8\u4f7f\u7528 ",(0,t.jsx)(s.code,{children:"StorageMemory"})," \u5bf9\u8c61\u5b9e\u73b0\uff0c"]}),"\n",(0,t.jsx)(s.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gsession"\n    "github.com/gogf/gf/v2/os/gtime"\n    "time"\n)\n\nfunc main() {\n    s := g.Server()\n    s.SetSessionMaxAge(time.Minute)\n    s.SetSessionStorage(gsession.NewStorageMemory())\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/set", func(r *ghttp.Request) {\n            r.Session.MustSet("time", gtime.Timestamp())\n            r.Response.Write("ok")\n        })\n        group.ALL("/get", func(r *ghttp.Request) {\n            r.Response.Write(r.Session.Data())\n        })\n        group.ALL("/del", func(r *ghttp.Request) {\n            _ = r.Session.RemoveAll()\n            r.Response.Write("ok")\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["\u5728\u8be5\u5b9e\u4f8b\u4e2d\uff0c\u4e3a\u4e86\u65b9\u4fbf\u89c2\u5bdf\u8fc7\u671f\u5931\u6548\uff0c\u6211\u4eec\u5c06 ",(0,t.jsx)(s.code,{children:"Session"})," \u7684\u8fc7\u671f\u65f6\u95f4\u8bbe\u7f6e\u4e3a ",(0,t.jsx)(s.code,{children:"1\u5206\u949f"}),"\u3002\u6267\u884c\u540e\uff0c"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\u9996\u5148\uff0c\u8bbf\u95ee ",(0,t.jsx)(s.a,{href:"http://127.0.0.1:8199/set",children:"http://127.0.0.1:8199/set"})," \u8bbe\u7f6e\u4e00\u4e2a ",(0,t.jsx)(s.code,{children:"Session"})," \u53d8\u91cf\uff1b"]}),"\n",(0,t.jsxs)(s.li,{children:["\u968f\u540e\uff0c\u8bbf\u95ee ",(0,t.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53ef\u4ee5\u770b\u5230\u8be5 ",(0,t.jsx)(s.code,{children:"Session"})," \u53d8\u91cf\u5df2\u7ecf\u8bbe\u7f6e\u5e76\u6210\u529f\u83b7\u53d6\uff1b"]}),"\n",(0,t.jsxs)(s.li,{children:["\u63a5\u7740\uff0c\u6211\u4eec\u505c\u6b62\u7a0b\u5e8f\uff0c\u5e76\u91cd\u65b0\u542f\u52a8\uff0c\u518d\u6b21\u8bbf\u95ee ",(0,t.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"}),"\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,t.jsx)(s.code,{children:"Session"})," \u53d8\u91cf\u5df2\u7ecf\u6ca1\u6709\u4e86\uff1b"]}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var t=n(96540);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);
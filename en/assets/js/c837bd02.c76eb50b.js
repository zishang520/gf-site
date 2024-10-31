"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[24320],{37493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(74848),s=n(28453);const a={slug:"/web/request/custom-parameters",title:"\u8bf7\u6c42\u8f93\u5165-\u81ea\u5b9a\u4e49\u53c2\u6570",sidebar_position:5,hide_title:!0},i=void 0,o={id:"WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-\u81ea\u5b9a\u4e49\u53c2\u6570",title:"\u8bf7\u6c42\u8f93\u5165-\u81ea\u5b9a\u4e49\u53c2\u6570",description:"\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u8bf7\u6c42\u4e2d\u81ea\u5b9a\u4e49\u4e00\u4e9b\u53d8\u91cf\u8bbe\u7f6e\uff0c\u81ea\u5b9a\u4e49\u53d8\u91cf\u7684\u83b7\u53d6\u4f18\u5148\u7ea7\u662f\u6700\u9ad8\u7684\uff0c\u53ef\u4ee5\u8986\u76d6\u539f\u6709\u7684\u5ba2\u6237\u7aef\u63d0\u4ea4\u53c2\u6570\u3002",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/3-\u8bf7\u6c42\u8f93\u5165/5-\u8bf7\u6c42\u8f93\u5165-\u81ea\u5b9a\u4e49\u53c2\u6570.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/3-\u8bf7\u6c42\u8f93\u5165",slug:"/web/request/custom-parameters",permalink:"/gf-site/en/docs/web/request/custom-parameters",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/7-WEB\u670d\u52a1\u5f00\u53d1/3-\u8bf7\u6c42\u8f93\u5165/5-\u8bf7\u6c42\u8f93\u5165-\u81ea\u5b9a\u4e49\u53c2\u6570.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730354542e3,sidebarPosition:5,frontMatter:{slug:"/web/request/custom-parameters",title:"\u8bf7\u6c42\u8f93\u5165-\u81ea\u5b9a\u4e49\u53c2\u6570",sidebar_position:5,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u8bf7\u6c42\u8f93\u5165-\u9ed8\u8ba4\u503c\u7ed1\u5b9a",permalink:"/gf-site/en/docs/web/request/default-value"},next:{title:"\u8bf7\u6c42\u8f93\u5165-Context",permalink:"/gf-site/en/docs/web/request/context"}},c={},d=[];function u(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u8bf7\u6c42\u4e2d\u81ea\u5b9a\u4e49\u4e00\u4e9b\u53d8\u91cf\u8bbe\u7f6e\uff0c\u81ea\u5b9a\u4e49\u53d8\u91cf\u7684\u83b7\u53d6\u4f18\u5148\u7ea7\u662f\u6700\u9ad8\u7684\uff0c\u53ef\u4ee5\u8986\u76d6\u539f\u6709\u7684\u5ba2\u6237\u7aef\u63d0\u4ea4\u53c2\u6570\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u81ea\u5b9a\u4e49\u53d8\u91cf\u5f80\u5f80\u4e5f\u53ef\u4ee5\u505a\u8bf7\u6c42\u6d41\u7a0b\u7684\u53d8\u91cf\u5171\u4eab\uff0c\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f\u8be5\u53d8\u91cf\u4f1a\u6210\u4e3a\u8bf7\u6c42\u53c2\u6570\u7684\u4e00\u90e8\u5206\uff0c\u662f\u5bf9\u4e1a\u52a1\u6267\u884c\u6d41\u7a0b\u516c\u5f00\u7684\u53d8\u91cf\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u65b9\u6cd5\u5217\u8868\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"func (r *Request) SetParam(key string, value interface{})\nfunc (r *Request) GetParam(key string, def ...interface{}) interface{}\nfunc (r *Request) GetParamVar(key string, def ...interface{}) *gvar.Var\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u81ea\u5b9a\u4e49\u53d8\u91cf\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"SetParam"})," \u65b9\u6cd5\u8fdb\u884c\u8bbe\u7f6e\u3002\u81ea\u5b9a\u4e49\u53d8\u91cf\u7684\u83b7\u53d6\u53ef\u4ee5\u901a\u8fc7\u8bf7\u6c42\u53c2\u6570\u7684\u83b7\u53d6\u65b9\u6cd5\u83b7\u5f97\u5230\uff0c\u4f8b\u5982\uff1a ",(0,r.jsx)(t.code,{children:"Get/GetVar/GetMap"})," \u7b49\u7b49\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7279\u5b9a\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\u65b9\u6cd5\u83b7\u53d6\u5230 ",(0,r.jsx)(t.code,{children:"GetParam/GetParamVar"}),"\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\n// \u524d\u7f6e\u4e2d\u95f4\u4ef61\nfunc MiddlewareBefore1(r *ghttp.Request) {\n    r.SetParam("name", "GoFrame")\n    r.Response.Writeln("set name")\n    r.Middleware.Next()\n}\n\n// \u524d\u7f6e\u4e2d\u95f4\u4ef62\nfunc MiddlewareBefore2(r *ghttp.Request) {\n    r.SetParam("site", "https://goframe.org")\n    r.Response.Writeln("set site")\n    r.Middleware.Next()\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.Middleware(MiddlewareBefore1, MiddlewareBefore2)\n        group.ALL("/", func(r *ghttp.Request) {\n            r.Response.Writefln(\n                "%s: %s",\n                r.GetParam("name").String(),\n                r.GetParam("site").String(),\n            )\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"SetParam"})," \u548c ",(0,r.jsx)(t.code,{children:"GetParam"})," \u6765\u8bbe\u7f6e\u548c\u83b7\u53d6\u81ea\u5b9a\u4e49\u7684\u53d8\u91cf\uff0c\u8be5\u53d8\u91cf\u751f\u547d\u5468\u671f\u4ec5\u9650\u4e8e\u5f53\u524d\u8bf7\u6c42\u6d41\u7a0b\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u6267\u884c\u540e\uff0c\u8bbf\u95ee ",(0,r.jsx)(t.a,{href:"http://127.0.0.1:8199/",children:"http://127.0.0.1:8199/"})," \uff0c\u9875\u9762\u8f93\u51fa\u5185\u5bb9\u4e3a\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"set name\nset site\nGoFrame: https://goframe.org\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
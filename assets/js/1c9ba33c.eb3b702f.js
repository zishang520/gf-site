"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[16844],{619883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=n(474848),c=n(28453);const s={title:"\u8bf7\u6c42\u8f93\u5165-Context",sidebar_position:6,hide_title:!0},o=void 0,d={id:"WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-Context",title:"\u8bf7\u6c42\u8f93\u5165-Context",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.4.x/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-Context.md",sourceDirName:"WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-Context",permalink:"/gf-site/docs/2.4.x/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-Context",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-Context.md",tags:[],version:"2.4.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:6,frontMatter:{title:"\u8bf7\u6c42\u8f93\u5165-Context",sidebar_position:6,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u8bf7\u6c42\u8f93\u5165-\u81ea\u5b9a\u4e49\u53d8\u91cf",permalink:"/gf-site/docs/2.4.x/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-\u81ea\u5b9a\u4e49\u53d8\u91cf"},next:{title:"\u8bf7\u6c42\u8f93\u5165-\u6587\u4ef6\u4e0a\u4f20",permalink:"/gf-site/docs/2.4.x/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-\u6587\u4ef6\u4e0a\u4f20"}},i={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u793a\u4f8b1\uff0c <code>SetCtxVar/GetCtxVar</code>",id:"\u793a\u4f8b1-setctxvargetctxvar",level:3},{value:"\u793a\u4f8b2\uff0c <code>SetCtx</code>",id:"\u793a\u4f8b2-setctx",level:3}];function x(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(t.p,{children:["\u8bf7\u6c42\u6d41\u7a0b\u5f80\u5f80\u4f1a\u5728\u4e0a\u4e0b\u6587\u4e2d\u5171\u4eab\u4e00\u4e9b\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u7684\u53d8\u91cf\uff0c\u4f8b\u5982\u5728\u8bf7\u6c42\u5f00\u59cb\u4e4b\u524d\u901a\u8fc7\u4e2d\u95f4\u4ef6\u8bbe\u7f6e\u4e00\u4e9b\u53d8\u91cf\uff0c\u968f\u540e\u5728\u8def\u7531\u670d\u52a1\u65b9\u6cd5\u4e2d\u53ef\u4ee5\u83b7\u53d6\u8be5\u53d8\u91cf\u5e76\u76f8\u5e94\u5bf9\u4e00\u4e9b\u5904\u7406\u3002\u8fd9\u79cd\u9700\u6c42\u975e\u5e38\u5e38\u89c1\u3002\u5728 ",(0,r.jsx)(t.code,{children:"GoFrame"})," \u6846\u67b6\u4e2d\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"Context"})," \u4e0a\u4e0b\u6587\u5bf9\u8c61\u6765\u5904\u7406\u6d41\u7a0b\u5171\u4eab\u7684\u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u751a\u81f3\u5c06\u8be5\u5bf9\u8c61\u8fdb\u4e00\u6b65\u4f20\u9012\u5230\u4f9d\u8d56\u7684\u5404\u4e2a\u6a21\u5757\u65b9\u6cd5\u4e2d\u3002\u8be5 ",(0,r.jsx)(t.code,{children:"Context"})," \u5bf9\u8c61\u7c7b\u578b\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93\u7684 ",(0,r.jsx)(t.code,{children:"context.Context"})," \u63a5\u53e3\uff0c\u8be5\u63a5\u53e3\u5f80\u5f80\u4f1a\u4f5c\u4e3a\u6a21\u5757\u95f4\u8c03\u7528\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u8be5\u63a5\u53e3\u53c2\u6570\u4e5f\u662f ",(0,r.jsx)(t.code,{children:"Golang"})," \u5b98\u65b9\u63a8\u8350\u7684\u5728\u6a21\u5757\u95f4\u4f20\u9012\u4e0a\u4e0b\u6587\u53d8\u91cf\u7684\u63a8\u8350\u65b9\u5f0f\u3002"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u65b9\u6cd5\u5217\u8868\uff1a"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"func (r *Request) GetCtx() context.Context\nfunc (r *Request) SetCtx(ctx context.Context)\nfunc (r *Request) GetCtxVar(key interface{}, def ...interface{}) *gvar.Var\nfunc (r *Request) SetCtxVar(key interface{}, value interface{})\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"GetCtx"})," \u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u7684 ",(0,r.jsx)(t.code,{children:"context.Context"})," \u5bf9\u8c61\uff0c\u4f5c\u7528\u540c ",(0,r.jsx)(t.code,{children:"Context"})," \u65b9\u6cd5\u3002"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"SetCtx"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u7684 ",(0,r.jsx)(t.code,{children:"context.Context"})," \u4e0a\u4e0b\u6587\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"GetCtxVar"})," \u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u5e76\u53ef\u7ed9\u5b9a\u5f53\u8be5\u53d8\u91cf\u4e0d\u5b58\u5728\u65f6\u7684\u9ed8\u8ba4\u503c\u3002"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"SetCtxVar"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u4e0a\u4e0b\u6587\u53d8\u91cf\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsxs)(t.h3,{id:"\u793a\u4f8b1-setctxvargetctxvar",children:["\u793a\u4f8b1\uff0c ",(0,r.jsx)(t.code,{children:"SetCtxVar/GetCtxVar"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nconst (\n    TraceIdName = "trace-id"\n)\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.Middleware(func(r *ghttp.Request) {\n            r.SetCtxVar(TraceIdName, "HBm876TFCde435Tgf")\n            r.Middleware.Next()\n        })\n        group.ALL("/", func(r *ghttp.Request) {\n            r.Response.Write(r.GetCtxVar(TraceIdName))\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"SetCtxVar"})," \u548c ",(0,r.jsx)(t.code,{children:"GetCtxVar"})," \u6765\u8bbe\u7f6e\u548c\u83b7\u53d6\u81ea\u5b9a\u4e49\u7684\u53d8\u91cf\uff0c\u8be5\u53d8\u91cf\u751f\u547d\u5468\u671f\u4ec5\u9650\u4e8e\u5f53\u524d\u8bf7\u6c42\u6d41\u7a0b\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u6267\u884c\u540e\uff0c\u8bbf\u95ee ",(0,r.jsx)(t.a,{href:"http://127.0.0.1:8199/",children:"http://127.0.0.1:8199/"})," \uff0c\u9875\u9762\u8f93\u51fa\u5185\u5bb9\u4e3a\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-HBm876TFCde435Tgf"})}),"\n",(0,r.jsxs)(t.h3,{id:"\u793a\u4f8b2-setctx",children:["\u793a\u4f8b2\uff0c ",(0,r.jsx)(t.code,{children:"SetCtx"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"SetCtx"})," \u65b9\u6cd5\u5e38\u7528\u4e8e\u4e2d\u95f4\u4ef6\u4e2d\u6574\u5408\u4e00\u4e9b\u7b2c\u4e09\u65b9\u7684\u7ec4\u4ef6\uff0c\u4f8b\u5982\u7b2c\u4e09\u65b9\u7684\u94fe\u8def\u8ddf\u8e2a\u7ec4\u4ef6\u7b49\u7b49\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u4e3a\u7b80\u5316\u793a\u4f8b\uff0c\u8fd9\u91cc\u6211\u4eec\u5c06\u4e0a\u9762\u7684\u4f8b\u5b50\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"SetCtx"})," \u65b9\u6cd5\u6765\u6539\u9020\u4e00\u4e0b\u6765\u505a\u6f14\u793a\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nconst (\n    TraceIdName = "trace-id"\n)\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.Middleware(func(r *ghttp.Request) {\n            ctx := context.WithValue(r.Context(), TraceIdName, "HBm876TFCde435Tgf")\n            r.SetCtx(ctx)\n            r.Middleware.Next()\n        })\n        group.ALL("/", func(r *ghttp.Request) {\n            r.Response.Write(r.Context().Value(TraceIdName))\n            // \u4e5f\u53ef\u4ee5\u4f7f\u7528\n            // r.Response.Write(r.GetCtxVar(TraceIdName))\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u6267\u884c\u540e\uff0c\u8bbf\u95ee ",(0,r.jsx)(t.a,{href:"http://127.0.0.1:8199/",children:"http://127.0.0.1:8199/"})," \uff0c\u9875\u9762\u8f93\u51fa\u5185\u5bb9\u4e3a\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-HBm876TFCde435Tgf"})})]})}function l(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var r=n(296540);const c={},s=r.createContext(c);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
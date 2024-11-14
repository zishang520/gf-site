"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[68314],{895906:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>x});const o=JSON.parse('{"id":"docs/\u6846\u67b6\u8bbe\u8ba1/Context\u76f8\u5173\u8bbe\u8ba1/Context \u4e1a\u52a1\u6d41\u7a0b\u5171\u4eab\u53d8\u91cf","title":"Context: \u4e1a\u52a1\u6d41\u7a0b\u5171\u4eab\u53d8\u91cf","description":"\u901a\u8fc7\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684Context\u4f20\u9012\u548c\u7ba1\u7406\u4e0a\u4e0b\u6587\u6d41\u7a0b\u4e2d\u7684\u5171\u4eab\u53d8\u91cf\u3002\u5728Go\u7f51\u7edc\u5e94\u7528\u4e2d\uff0c\u5c24\u5176\u662fHTTP/RPC\u670d\u52a1\u4e2d\uff0cContext\u662f\u4f20\u9012\u5f02\u6b65IO\u63a7\u5236\u548c\u4e0a\u4e0b\u6587\u53d8\u91cf\u7684\u5173\u952e\u5de5\u5177\u3002\u901a\u8fc7\u7ed3\u6784\u5316\u5bf9\u8c61\u7684\u5171\u4eab\uff0c\u672c\u6587\u5c55\u793a\u4e86\u5982\u4f55\u5728\u8bf7\u6c42\u8fc7\u7a0b\u4e2d\u5b9e\u73b0\u53d8\u91cf\u4f20\u9012\uff0c\u786e\u4fdd\u8bf7\u6c42\u94fe\u8def\u4e2d\u53d8\u91cf\u7684\u4e00\u81f4\u6027\u548c\u7075\u6d3b\u6027\u3002","source":"@site/docs/docs/\u6846\u67b6\u8bbe\u8ba1/Context\u76f8\u5173\u8bbe\u8ba1/Context \u4e1a\u52a1\u6d41\u7a0b\u5171\u4eab\u53d8\u91cf.md","sourceDirName":"docs/\u6846\u67b6\u8bbe\u8ba1/Context\u76f8\u5173\u8bbe\u8ba1","slug":"/docs/design/context-variable","permalink":"/en/docs/design/context-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67b6\u8bbe\u8ba1/Context\u76f8\u5173\u8bbe\u8ba1/Context \u4e1a\u52a1\u6d41\u7a0b\u5171\u4eab\u53d8\u91cf.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"slug":"/docs/design/context-variable","title":"Context: \u4e1a\u52a1\u6d41\u7a0b\u5171\u4eab\u53d8\u91cf","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","Context","\u4e0a\u4e0b\u6587\u53d8\u91cf","\u5171\u4eab\u53d8\u91cf","\u5f02\u6b65IO","HTTP\u8bf7\u6c42","Session\u7ba1\u7406","\u7528\u6237\u4fe1\u606f","\u4e2d\u95f4\u4ef6"],"description":"\u901a\u8fc7\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684Context\u4f20\u9012\u548c\u7ba1\u7406\u4e0a\u4e0b\u6587\u6d41\u7a0b\u4e2d\u7684\u5171\u4eab\u53d8\u91cf\u3002\u5728Go\u7f51\u7edc\u5e94\u7528\u4e2d\uff0c\u5c24\u5176\u662fHTTP/RPC\u670d\u52a1\u4e2d\uff0cContext\u662f\u4f20\u9012\u5f02\u6b65IO\u63a7\u5236\u548c\u4e0a\u4e0b\u6587\u53d8\u91cf\u7684\u5173\u952e\u5de5\u5177\u3002\u901a\u8fc7\u7ed3\u6784\u5316\u5bf9\u8c61\u7684\u5171\u4eab\uff0c\u672c\u6587\u5c55\u793a\u4e86\u5982\u4f55\u5728\u8bf7\u6c42\u8fc7\u7a0b\u4e2d\u5b9e\u73b0\u53d8\u91cf\u4f20\u9012\uff0c\u786e\u4fdd\u8bf7\u6c42\u94fe\u8def\u4e2d\u53d8\u91cf\u7684\u4e00\u81f4\u6027\u548c\u7075\u6d3b\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"Golang\u679a\u4e3e\u503c\u7ba1\u7406","permalink":"/en/docs/design/enums"},"next":{"title":"\u5fae\u670d\u52a1\u4e0e\u6846\u67b6\u804c\u8d23\u8fb9\u754c","permalink":"/en/docs/design/micro-service-border"}}');var c=t(474848),s=t(28453);const r={slug:"/docs/design/context-variable",title:"Context: \u4e1a\u52a1\u6d41\u7a0b\u5171\u4eab\u53d8\u91cf",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","Context","\u4e0a\u4e0b\u6587\u53d8\u91cf","\u5171\u4eab\u53d8\u91cf","\u5f02\u6b65IO","HTTP\u8bf7\u6c42","Session\u7ba1\u7406","\u7528\u6237\u4fe1\u606f","\u4e2d\u95f4\u4ef6"],description:"\u901a\u8fc7\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684Context\u4f20\u9012\u548c\u7ba1\u7406\u4e0a\u4e0b\u6587\u6d41\u7a0b\u4e2d\u7684\u5171\u4eab\u53d8\u91cf\u3002\u5728Go\u7f51\u7edc\u5e94\u7528\u4e2d\uff0c\u5c24\u5176\u662fHTTP/RPC\u670d\u52a1\u4e2d\uff0cContext\u662f\u4f20\u9012\u5f02\u6b65IO\u63a7\u5236\u548c\u4e0a\u4e0b\u6587\u53d8\u91cf\u7684\u5173\u952e\u5de5\u5177\u3002\u901a\u8fc7\u7ed3\u6784\u5316\u5bf9\u8c61\u7684\u5171\u4eab\uff0c\u672c\u6587\u5c55\u793a\u4e86\u5982\u4f55\u5728\u8bf7\u6c42\u8fc7\u7a0b\u4e2d\u5b9e\u73b0\u53d8\u91cf\u4f20\u9012\uff0c\u786e\u4fdd\u8bf7\u6c42\u94fe\u8def\u4e2d\u53d8\u91cf\u7684\u4e00\u81f4\u6027\u548c\u7075\u6d3b\u6027\u3002"},i=void 0,d={},x=[{value:"\u4e00\u3001\u7ed3\u6784\u5b9a\u4e49",id:"\u4e00\u7ed3\u6784\u5b9a\u4e49",level:2},{value:"\u4e8c\u3001\u903b\u8f91\u5c01\u88c5",id:"\u4e8c\u903b\u8f91\u5c01\u88c5",level:2},{value:"\u4e09\u3001\u4e0a\u4e0b\u6587\u53d8\u91cf\u6ce8\u5165",id:"\u4e09\u4e0a\u4e0b\u6587\u53d8\u91cf\u6ce8\u5165",level:2},{value:"\u56db\u3001\u4e0a\u4e0b\u6587\u53d8\u91cf\u4f7f\u7528",id:"\u56db\u4e0a\u4e0b\u6587\u53d8\u91cf\u4f7f\u7528",level:2},{value:"\u65b9\u6cd5\u5b9a\u4e49",id:"\u65b9\u6cd5\u5b9a\u4e49",level:3},{value:"<code>Context</code> \u5bf9\u8c61\u83b7\u53d6",id:"context-\u5bf9\u8c61\u83b7\u53d6",level:3},{value:"\u81ea\u5b9a\u4e49 <code>Key-Value</code>",id:"\u81ea\u5b9a\u4e49-key-value",level:3},{value:"\u4e94\u3001\u6ce8\u610f\u4e8b\u9879",id:"\u4e94\u6ce8\u610f\u4e8b\u9879",level:2}];function l(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Context"})," \u6307\u7684\u662f\u6807\u51c6\u5e93\u7684 ",(0,c.jsx)(n.code,{children:"context.Context"}),"\uff0c\u662f\u4e00\u4e2a\u63a5\u53e3\u5bf9\u8c61\uff0c\u5e38\u7528\u4e8e ",(0,c.jsxs)(n.strong,{children:["\u5f02\u6b65 ",(0,c.jsx)(n.code,{children:"IO"})," \u63a7\u5236"]})," \u4ee5\u53ca ",(0,c.jsx)(n.strong,{children:"\u4e0a\u4e0b\u6587\u6d41\u7a0b\u53d8\u91cf\u7684\u4f20\u9012"}),"\u3002\u672c\u6587\u5c06\u8981\u4ecb\u7ecd\u7684\uff0c\u662f\u5982\u4f55\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"Context"})," \u4f20\u9012\u6d41\u7a0b\u95f4\u5171\u4eab\u53d8\u91cf\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"Go"})," \u7684\u6267\u884c\u6d41\u7a0b\u4e2d\uff0c\u7279\u522b\u662f ",(0,c.jsx)(n.code,{children:"HTTP/RPC"})," \u6267\u884c\u6d41\u7a0b\u4e2d\uff0c\u4e0d\u5b58\u5728\u201d\u5168\u5c40\u53d8\u91cf\u201d\u83b7\u53d6\u8bf7\u6c42\u53c2\u6570\u7684\u65b9\u5f0f\uff0c\u53ea\u6709\u5c06\u4e0a\u4e0b\u6587 ",(0,c.jsx)(n.code,{children:"Context"})," \u53d8\u91cf\u4f20\u9012\u5230\u540e\u7eed\u6d41\u7a0b\u7684\u65b9\u6cd5\u4e2d\uff0c\u800c ",(0,c.jsx)(n.code,{children:"Context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u5373\u5305\u542b\u4e86\u6240\u6709\u9700\u8981\u4f20\u9012\u7684\u5171\u4eab\u53d8\u91cf\u3002\u5e76\u4e14\u8be5 ",(0,c.jsx)(n.code,{children:"Context"})," \u4e2d\u7684\u5171\u4eab\u53d8\u91cf\u5e94\u5f53\u662f\u4e8b\u5148\u7ea6\u5b9a\u7684\uff0c\u5e76\u4e14\u5f80\u5f80\u5b58\u50a8\u4e3a\u5bf9\u8c61\u6307\u9488\u5f62\u5f0f\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"Context"})," \u4e0a\u4e0b\u6587\u5171\u4eab\u53d8\u91cf\u975e\u5e38\u7b80\u5355\uff0c\u4ee5\u4e0b\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u9879\u76ee\u4e2d\u7684\u793a\u4f8b\u6765\u5c55\u793a\u5982\u4f55\u5728\u5b9e\u6218\u5316\u9879\u76ee\u4e2d\u4f20\u9012\u548c\u4f7f\u7528\u901a\u7528\u7684\u5171\u4eab\u53d8\u91cf\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4e00\u7ed3\u6784\u5b9a\u4e49",children:"\u4e00\u3001\u7ed3\u6784\u5b9a\u4e49"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u4e0b\u6587\u5bf9\u8c61\u4e2d\u5f80\u5f80\u5b58\u50a8\u4e00\u4e9b\u9700\u8981\u5171\u4eab\u7684\u53d8\u91cf\uff0c\u8fd9\u4e9b\u53d8\u91cf\u901a\u5e38\u4f7f\u7528\u7ed3\u6784\u5316\u7684\u5bf9\u8c61\u6765\u5b58\u50a8\uff0c\u4ee5\u65b9\u4fbf\u7ef4\u62a4\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u5728 ",(0,c.jsx)(n.code,{children:"model"})," \u5b9a\u4e49\u4e00\u4e2a\u4e0a\u4e0b\u6587\u4e2d\u7684\u5171\u4eab\u53d8\u91cf\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'const (\n    // \u4e0a\u4e0b\u6587\u53d8\u91cf\u5b58\u50a8\u952e\u540d\uff0c\u524d\u540e\u7aef\u7cfb\u7edf\u5171\u4eab\n    ContextKey = "ContextKey"\n)\n\n// \u8bf7\u6c42\u4e0a\u4e0b\u6587\u7ed3\u6784\ntype Context struct {\n    Session *ghttp.Session // \u5f53\u524dSession\u7ba1\u7406\u5bf9\u8c61\n    User    *ContextUser   // \u4e0a\u4e0b\u6587\u7528\u6237\u4fe1\u606f\n    Data    g.Map          // \u81ea\u5b9aKV\u53d8\u91cf\uff0c\u4e1a\u52a1\u6a21\u5757\u6839\u636e\u9700\u8981\u8bbe\u7f6e\uff0c\u4e0d\u56fa\u5b9a\n}\n\n// \u8bf7\u6c42\u4e0a\u4e0b\u6587\u4e2d\u7684\u7528\u6237\u4fe1\u606f\ntype ContextUser struct {\n    Id       uint   // \u7528\u6237ID\n    Passport string // \u7528\u6237\u8d26\u53f7\n    Nickname string // \u7528\u6237\u540d\u79f0\n    Avatar   string // \u7528\u6237\u5934\u50cf\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"model.ContextKey"})," \u5e38\u91cf\u8868\u793a\u5b58\u50a8\u5728 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u4e2d\u7684\u952e\u540d\uff0c\u8be5\u952e\u540d\u7528\u4e8e\u4ece\u4f20\u9012\u7684 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u53d8\u91cf\u4e2d\u5b58\u50a8/\u83b7\u53d6\u4e1a\u52a1\u81ea\u5b9a\u4e49\u7684\u5171\u4eab\u53d8\u91cf\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"model.Context"})," \u7ed3\u6784\u4f53\u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"Session"})," \u8868\u793a\u5f53\u524d\u8bf7\u6c42\u7684 ",(0,c.jsx)(n.code,{children:"Session"})," \u5bf9\u8c61\uff0c\u5728 ",(0,c.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u4e2d\u6bcf\u4e2a ",(0,c.jsx)(n.code,{children:"HTTP"})," \u8bf7\u6c42\u5bf9\u8c61\u4e2d\u90fd\u4f1a\u6709\u4e00\u4e2a\u7a7a\u7684 ",(0,c.jsx)(n.code,{children:"Session"})," \u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u91c7\u7528\u4e86\u61d2\u521d\u59cb\u5316\u8bbe\u8ba1\uff0c\u53ea\u6709\u5728\u771f\u6b63\u6267\u884c\u8bfb\u5199\u64cd\u4f5c\u65f6\u624d\u4f1a\u521d\u59cb\u5316\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"model.Context"})," \u7ed3\u6784\u4f53\u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"User"})," \u8868\u793a\u5f53\u524d\u767b\u5f55\u7684\u7528\u6237\u57fa\u672c\u4fe1\u606f\uff0c\u53ea\u6709\u5728\u7528\u6237\u767b\u5f55\u540e\u624d\u6709\u6570\u636e\uff0c\u5426\u5219\u662f ",(0,c.jsx)(n.code,{children:"nil"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"model.Context"})," \u7ed3\u6784\u4f53\u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"Data"})," \u5c5e\u6027\u7528\u4e8e\u5b58\u50a8\u81ea\u5b9a\u4e49\u7684 ",(0,c.jsx)(n.code,{children:"KV"})," \u53d8\u91cf\uff0c\u56e0\u6b64\u4e00\u822c\u6765\u8bf4\u5f00\u53d1\u8005\u65e0\u9700\u518d\u5f80 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u4e2d\u589e\u52a0\u81ea\u5b9a\u4e49\u7684\u952e\u503c\u5bf9\uff0c\u800c\u662f\u76f4\u63a5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"model."})," ",(0,c.jsx)(n.code,{children:"Context"})," \u5bf9\u8c61\u7684\u8fd9\u4e2a ",(0,c.jsx)(n.code,{children:"Data"})," \u5c5e\u6027\u5373\u53ef\u3002\u8be6\u89c1\u540e\u7eed\u4ecb\u7ecd\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4e8c\u903b\u8f91\u5c01\u88c5",children:"\u4e8c\u3001\u903b\u8f91\u5c01\u88c5"}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4e8e\u8be5\u4e0a\u4e0b\u6587\u5bf9\u8c61\u4e5f\u662f\u548c\u4e1a\u52a1\u903b\u8f91\u76f8\u5173\u7684\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"service"})," \u5bf9\u8c61\u5c06\u4e0a\u4e0b\u6587\u53d8\u91cf\u5c01\u88c5\u8d77\u6765\u4ee5\u65b9\u4fbf\u5176\u4ed6\u6a21\u5757\u4f7f\u7528\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"// \u4e0a\u4e0b\u6587\u7ba1\u7406\u670d\u52a1\nvar Context = new(contextService)\n\ntype contextService struct{}\n\n// \u521d\u59cb\u5316\u4e0a\u4e0b\u6587\u5bf9\u8c61\u6307\u9488\u5230\u4e0a\u4e0b\u6587\u5bf9\u8c61\u4e2d\uff0c\u4ee5\u4fbf\u540e\u7eed\u7684\u8bf7\u6c42\u6d41\u7a0b\u4e2d\u53ef\u4ee5\u4fee\u6539\u3002\nfunc (s *contextService) Init(r *ghttp.Request, customCtx *model.Context) {\n    r.SetCtxVar(model.ContextKey, customCtx)\n}\n\n// \u83b7\u5f97\u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\uff0c\u90a3\u4e48\u8fd4\u56denil\nfunc (s *contextService) Get(ctx context.Context) *model.Context {\n    value := ctx.Value(model.ContextKey)\n    if value == nil {\n        return nil\n    }\n    if localCtx, ok := value.(*model.Context); ok {\n        return localCtx\n    }\n    return nil\n}\n\n// \u5c06\u4e0a\u4e0b\u6587\u4fe1\u606f\u8bbe\u7f6e\u5230\u4e0a\u4e0b\u6587\u8bf7\u6c42\u4e2d\uff0c\u6ce8\u610f\u662f\u5b8c\u6574\u8986\u76d6\nfunc (s *contextService) SetUser(ctx context.Context, ctxUser *model.ContextUser) {\n    s.Get(ctx).User = ctxUser\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u4e09\u4e0a\u4e0b\u6587\u53d8\u91cf\u6ce8\u5165",children:"\u4e09\u3001\u4e0a\u4e0b\u6587\u53d8\u91cf\u6ce8\u5165"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5fc5\u987b\u5728\u8bf7\u6c42\u4e00\u5f00\u59cb\u4fbf\u6ce8\u5165\u5230\u8bf7\u6c42\u6d41\u7a0b\u4e2d\uff0c\u4ee5\u4fbf\u4e8e\u5176\u4ed6\u65b9\u6cd5\u8c03\u7528\u3002\u5728 ",(0,c.jsx)(n.code,{children:"HTTP"})," \u8bf7\u6c42\u4e2d\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"GoFrame"})," \u7684\u4e2d\u95f4\u4ef6\u6765\u5b9e\u73b0\u3002\u5728 ",(0,c.jsx)(n.code,{children:"GRPC"})," \u8bf7\u6c42\u4e2d\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u62e6\u622a\u5668\u6765\u5b9e\u73b0\u3002\u5728 ",(0,c.jsx)(n.code,{children:"service"})," \u5c42\u7684 ",(0,c.jsx)(n.code,{children:"middleware"})," \u7ba1\u7406\u5bf9\u8c61\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u6765\u5b9a\u4e49\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'// \u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u5bf9\u8c61\nfunc (s *middlewareService) Ctx(r *ghttp.Request) {\n    // \u521d\u59cb\u5316\uff0c\u52a1\u5fc5\u6700\u5f00\u59cb\u6267\u884c\n    customCtx := &model.Context{\n        Session: r.Session,\n        Data:    make(g.Map),\n    }\n    service.Context.Init(r, customCtx)\n    if userEntity := Session.GetUser(r.Context()); userEntity != nil {\n        customCtx.User = &model.ContextUser{\n            Id:       userEntity.Id,\n            Passport: userEntity.Passport,\n            Nickname: userEntity.Nickname,\n            Avatar:   userEntity.Avatar,\n        }\n    }\n    // \u5c06\u81ea\u5b9a\u4e49\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\u4f20\u9012\u5230\u6a21\u677f\u53d8\u91cf\u4e2d\u4f7f\u7528\n    r.Assigns(g.Map{\n        "Context": customCtx,\n    })\n    // \u6267\u884c\u4e0b\u4e00\u6b65\u8bf7\u6c42\u903b\u8f91\n    r.Middleware.Next()\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u4e2d\u95f4\u4ef6\u521d\u59cb\u5316\u4e86\u7528\u6237\u6267\u884c\u6d41\u7a0b\u5171\u4eab\u7684\u5bf9\u8c61\uff0c\u5e76\u4e14\u5b58\u50a8\u5230 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u53d8\u91cf\u4e2d\u7684\u5bf9\u8c61\u662f\u6307\u9488\u7c7b\u578b ",(0,c.jsx)(n.code,{children:"*model.Context"}),"\u3002\u8fd9\u6837\u4efb\u4f55\u4e00\u4e2a\u5730\u65b9\u83b7\u53d6\u5230\u8fd9\u4e2a\u6307\u9488\uff0c\u65e2\u53ef\u4ee5\u83b7\u53d6\u5230\u91cc\u9762\u7684\u6570\u636e\uff0c\u4e5f\u80fd\u591f\u76f4\u63a5\u4fee\u6539\u91cc\u9762\u7684\u6570\u636e\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c\u5982\u679c ",(0,c.jsx)(n.code,{children:"Session"})," \u4e2d\u5b58\u5728\u7528\u6237\u767b\u5f55\u540e\u7684\u5b58\u50a8\u4fe1\u606f\uff0c\u90a3\u4e48\u4e5f\u4f1a\u5c06\u9700\u8981\u5171\u4eab\u7684\u7528\u6237\u57fa\u672c\u4fe1\u606f\u5199\u5165\u5230 ",(0,c.jsx)(n.code,{children:"*model.Context"})," \u4e2d\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u56db\u4e0a\u4e0b\u6587\u53d8\u91cf\u4f7f\u7528",children:"\u56db\u3001\u4e0a\u4e0b\u6587\u53d8\u91cf\u4f7f\u7528"}),"\n",(0,c.jsx)(n.h3,{id:"\u65b9\u6cd5\u5b9a\u4e49",children:"\u65b9\u6cd5\u5b9a\u4e49"}),"\n",(0,c.jsxs)(n.p,{children:["\u7ea6\u5b9a\u4fd7\u6210\u7684\uff0c\u65b9\u6cd5\u5b9a\u4e49\u7684\u7b2c\u4e00\u4e2a\u8f93\u5165\u53c2\u6570\u5f80\u5f80\u9884\u7559\u7ed9 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u7c7b\u578b\u53c2\u6570\u4f7f\u7528\uff0c\u4ee5\u4fbf\u63a5\u53d7\u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u7279\u522b\u662f ",(0,c.jsx)(n.code,{children:"service"})," \u5c42\u7684\u65b9\u6cd5\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"// \u6267\u884c\u7528\u6237\u767b\u5f55\nfunc (s *userService) Login(ctx context.Context, loginReq *define.UserServiceLoginReq) error {\n    ...\n}\n\n// \u67e5\u8be2\u5185\u5bb9\u5217\u8868\nfunc (s *contentService) GetList(ctx context.Context, r *define.ContentServiceGetListReq) (*define.ContentServiceGetListRes, error) {\n    ...\n}\n\n// \u521b\u5efa\u56de\u590d\u5185\u5bb9\nfunc (s *replyService) Create(ctx context.Context, r *define.ReplyServiceCreateReq) error {\n    ...\n}\n\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u7ea6\u5b9a\u4fd7\u6210\u7684\uff0c\u65b9\u6cd5\u7684\u6700\u540e\u4e00\u4e2a\u8fd4\u56de\u53c2\u6570\u5f80\u5f80\u662f ",(0,c.jsx)(n.code,{children:"error"})," \u7c7b\u578b\u3002\u5982\u679c\u60a8\u786e\u5b9a\u6b64\u65b9\u6cd5\u5185\u90e8\u6c38\u4e0d\u4f1a\u4ea7\u751f ",(0,c.jsx)(n.code,{children:"error"}),"\uff0c\u90a3\u4e48\u53ef\u4ee5\u5ffd\u7565\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"context-\u5bf9\u8c61\u83b7\u53d6",children:[(0,c.jsx)(n.code,{children:"Context"})," \u5bf9\u8c61\u83b7\u53d6"]}),"\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"service"})," \u4e2d\u5c01\u88c5\u7684\u4ee5\u4e0b\u65b9\u6cd5\uff0c\u5c06 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u4f20\u9012\u8fdb\u53bb\u5373\u53ef\u3002 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u5728 ",(0,c.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u7684 ",(0,c.jsx)(n.code,{children:"HTTP"})," \u8bf7\u6c42\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"r.Context()"})," \u65b9\u6cd5\u83b7\u53d6\uff0c\u5728 ",(0,c.jsx)(n.code,{children:"GRPC"})," \u8bf7\u6c42\u4e2d\uff0c\u7f16\u8bd1\u751f\u6210\u7684 ",(0,c.jsx)(n.code,{children:"pb"})," \u6587\u4ef6\u4e2d\u6267\u884c\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u5373\u56fa\u5b9a\u662f ",(0,c.jsx)(n.code,{children:"context.Context"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"service.Context.Get(ctx)\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"\u81ea\u5b9a\u4e49-key-value",children:["\u81ea\u5b9a\u4e49 ",(0,c.jsx)(n.code,{children:"Key-Value"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8bbe\u7f6e/\u83b7\u53d6\u81ea\u5b9a\u4e49\u7684 ",(0,c.jsx)(n.code,{children:"key-value"})," \u952e\u503c\u5bf9\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"// \u8bbe\u7f6e\u81ea\u5b9a\u4e49\u952e\u503c\u5bf9\nservice.Context.Get(ctx).Data[key] = value\n\n...\n\n// \u83b7\u53d6\u81ea\u5b9a\u4e49\u952e\u503c\u5bf9\nservice.Context.Get(ctx).Data[key]\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u4e94\u6ce8\u610f\u4e8b\u9879",children:"\u4e94\u3001\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u4e0a\u4e0b\u6587\u53d8\u91cf\u53ea\u4f20\u9012\u5fc5\u987b\u7684\u94fe\u8def\u53c2\u6570\u6570\u636e\uff0c\u4e0d\u8981\u4ec0\u4e48\u53c2\u6570\u90fd\u5f80\u91cc\u9762\u585e\u3002\u7279\u522b\u662f\u4e00\u4e9b\u65b9\u6cd5\u53c2\u6570\u4f20\u53c2\u7684\u6570\u636e\uff0c\u522b\u5f80\u91cc\u9762\u585e\uff0c\u800c\u5e94\u5f53\u663e\u793a\u4f20\u9012\u65b9\u6cd5\u53c2\u6570\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u4e0a\u4e0b\u6587\u53d8\u91cf\u4ec5\u7528\u4f5c\u8fd0\u884c\u65f6\u4e34\u65f6\u4f7f\u7528\uff0c\u4e0d\u53ef\u6301\u4e45\u5316\u5b58\u50a8\u957f\u671f\u4f7f\u7528\u3002\u4f8b\u5982\u5c06 ",(0,c.jsx)(n.code,{children:"ctx"})," \u5e8f\u5217\u5316\u540e\u5b58\u50a8\u5230\u6570\u636e\u5e93\uff0c\u5e76\u518d\u4e0b\u4e00\u6b21\u8bf7\u6c42\u4e2d\u8bfb\u53d6\u51fa\u6765\u53cd\u5e8f\u5217\u5316\u4f7f\u7528\u662f\u9519\u8bef\u505a\u6cd5\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(296540);const c={},s=o.createContext(c);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
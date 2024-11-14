"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[44895],{695521:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/CSRF\u9632\u5fa1\u8bbe\u7f6e","title":"CSRF\u9632\u5fa1\u8bbe\u7f6e","description":"\u8bb2\u89e3\u5982\u4f55\u5728GoFrame\u6846\u67b6\u4e2d\u901a\u8fc7CSRF\u9632\u5fa1\u8bbe\u7f6e\u4fdd\u62a4Web\u5e94\u7528\u7a0b\u5e8f\u5b89\u5168\u3002\u6211\u4eec\u5c06\u4ecb\u7ecd\u4f7f\u7528token\u6821\u9a8c\u673a\u5236\u5e76\u901a\u8fc7\u4e2d\u95f4\u4ef6\u5b9e\u73b0\u63d2\u4ef6\u5316\u9632\u62a4\u7684\u65b9\u6cd5\u3002\u5305\u62ec\u63d2\u4ef6\u7684\u5b89\u88c5\u548c\u914d\u7f6e\u4ee5\u53ca\u524d\u7aef\u5bf9\u63a5\u7684\u5173\u952e\u6b65\u9aa4\u548c\u4ee3\u7801\u793a\u4f8b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u6709\u6548\u62b5\u5fa1CSRF\u653b\u51fb\u3002","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/CSRF\u9632\u5fa1\u8bbe\u7f6e.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027","slug":"/docs/web/senior-csrf","permalink":"/en/docs/web/senior-csrf","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/CSRF\u9632\u5fa1\u8bbe\u7f6e.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"slug":"/docs/web/senior-csrf","title":"CSRF\u9632\u5fa1\u8bbe\u7f6e","sidebar_position":5,"hide_title":true,"keywords":["CSRF\u9632\u5fa1","GoFrame\u6846\u67b6","\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020","CSRF\u653b\u51fb","XSRF","token\u6821\u9a8c","\u4e2d\u95f4\u4ef6","\u63d2\u4ef6\u6279\u5904\u7406","\u7f51\u7edc\u5b89\u5168","Web\u5e94\u7528\u7a0b\u5e8f\u5b89\u5168"],"description":"\u8bb2\u89e3\u5982\u4f55\u5728GoFrame\u6846\u67b6\u4e2d\u901a\u8fc7CSRF\u9632\u5fa1\u8bbe\u7f6e\u4fdd\u62a4Web\u5e94\u7528\u7a0b\u5e8f\u5b89\u5168\u3002\u6211\u4eec\u5c06\u4ecb\u7ecd\u4f7f\u7528token\u6821\u9a8c\u673a\u5236\u5e76\u901a\u8fc7\u4e2d\u95f4\u4ef6\u5b9e\u73b0\u63d2\u4ef6\u5316\u9632\u62a4\u7684\u65b9\u6cd5\u3002\u5305\u62ec\u63d2\u4ef6\u7684\u5b89\u88c5\u548c\u914d\u7f6e\u4ee5\u53ca\u524d\u7aef\u5bf9\u63a5\u7684\u5173\u952e\u6b65\u9aa4\u548c\u4ee3\u7801\u793a\u4f8b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u6709\u6548\u62b5\u5fa1CSRF\u653b\u51fb\u3002"},"sidebar":"mainSidebar","previous":{"title":"CORS\u8de8\u57df\u5904\u7406","permalink":"/en/docs/web/senior-cors"},"next":{"title":"HOOK\u4e8b\u4ef6\u56de\u8c03","permalink":"/en/docs/web/senior-hook"}}');var s=o(474848),t=o(28453);const i={slug:"/docs/web/senior-csrf",title:"CSRF\u9632\u5fa1\u8bbe\u7f6e",sidebar_position:5,hide_title:!0,keywords:["CSRF\u9632\u5fa1","GoFrame\u6846\u67b6","\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020","CSRF\u653b\u51fb","XSRF","token\u6821\u9a8c","\u4e2d\u95f4\u4ef6","\u63d2\u4ef6\u6279\u5904\u7406","\u7f51\u7edc\u5b89\u5168","Web\u5e94\u7528\u7a0b\u5e8f\u5b89\u5168"],description:"\u8bb2\u89e3\u5982\u4f55\u5728GoFrame\u6846\u67b6\u4e2d\u901a\u8fc7CSRF\u9632\u5fa1\u8bbe\u7f6e\u4fdd\u62a4Web\u5e94\u7528\u7a0b\u5e8f\u5b89\u5168\u3002\u6211\u4eec\u5c06\u4ecb\u7ecd\u4f7f\u7528token\u6821\u9a8c\u673a\u5236\u5e76\u901a\u8fc7\u4e2d\u95f4\u4ef6\u5b9e\u73b0\u63d2\u4ef6\u5316\u9632\u62a4\u7684\u65b9\u6cd5\u3002\u5305\u62ec\u63d2\u4ef6\u7684\u5b89\u88c5\u548c\u914d\u7f6e\u4ee5\u53ca\u524d\u7aef\u5bf9\u63a5\u7684\u5173\u952e\u6b65\u9aa4\u548c\u4ee3\u7801\u793a\u4f8b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u6709\u6548\u62b5\u5fa1CSRF\u653b\u51fb\u3002"},c=void 0,d={},l=[{value:"\u5982\u4f55\u9632\u5fa1",id:"\u5982\u4f55\u9632\u5fa1",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u5f15\u5165\u63d2\u4ef6\u5305",id:"\u5f15\u5165\u63d2\u4ef6\u5305",level:3},{value:"\u914d\u7f6e\u63a5\u53e3\u4e2d\u95f4\u4ef6",id:"\u914d\u7f6e\u63a5\u53e3\u4e2d\u95f4\u4ef6",level:3},{value:"\u524d\u7aef\u5bf9\u63a5",id:"\u524d\u7aef\u5bf9\u63a5",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2},{value:"\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e",id:"\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e",level:3},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e",level:3},{value:"\u901a\u8fc7\u8bf7\u6c42\u4f53\u9a8c\u6548\u679c",id:"\u901a\u8fc7\u8bf7\u6c42\u4f53\u9a8c\u6548\u679c",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020"}),"\uff08\u82f1\u8bed\uff1a ",(0,s.jsx)(n.code,{children:"Cross-Site Request Forgery"}),"\uff09\uff0c\u4e5f\u88ab\u79f0\u4e3a",(0,s.jsx)(n.strong,{children:"one-click attack"}),"\u6216\u8005",(0,s.jsx)(n.strong,{children:"session riding"}),"\uff0c\u901a\u5e38\u7f29\u5199\u4e3a",(0,s.jsx)(n.strong,{children:"CSRF"})," \u6216\u8005",(0,s.jsx)(n.strong,{children:"XSRF"}),"\uff0c \u662f\u4e00\u79cd\u631f\u5236\u7528\u6237\u5728\u5f53\u524d\u5df2\u767b\u5f55\u7684Web\u5e94\u7528\u7a0b\u5e8f\u4e0a\u6267\u884c\u975e\u672c\u610f\u7684\u64cd\u4f5c\u7684\u653b\u51fb\u65b9\u6cd5\u3002\u8ddf\u8de8\u7f51\u7ad9\u811a\u672c\uff08 ",(0,s.jsx)(n.code,{children:"XSS"}),"\uff09\u76f8\u6bd4\uff0c ",(0,s.jsx)(n.strong,{children:"XSS"})," \u5229\u7528\u7684\u662f\u7528\u6237\u5bf9\u6307\u5b9a\u7f51\u7ad9\u7684\u4fe1\u4efb\uff0c ",(0,s.jsx)(n.code,{children:"CSRF"})," \u5229\u7528\u7684\u662f\u7f51\u7ad9\u5bf9\u7528\u6237\u7f51\u9875\u6d4f\u89c8\u5668\u7684\u4fe1\u4efb\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5982\u4f55\u9632\u5fa1",children:"\u5982\u4f55\u9632\u5fa1"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u6211\u4eec\u9009\u62e9\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"token"})," \u7684\u65b9\u5f0f\u5bf9\u8bf7\u6c42\u8fdb\u884c\u6821\u9a8c\uff0c\u901a\u8fc7\u4e2d\u95f4\u4ef6\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c ",(0,s.jsx)(n.code,{children:"CSRF"})," \u8de8\u7ad9\u70b9\u9632\u5fa1\u63d2\u4ef6\u7531\u793e\u533a\u5305\u63d0\u4f9b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u5bf9\u63a5\u53e3\u6dfb\u52a0\u4e2d\u95f4\u4ef6\u7684\u65b9\u5f0f\uff0c\u589e\u52a0 ",(0,s.jsx)(n.code,{children:"token"})," \u6821\u9a8c\u529f\u80fd\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u611f\u5174\u8da3\u7684\u670b\u53cb\u53ef\u4ee5\u9605\u8bfb\u63d2\u4ef6\u6e90\u7801 ",(0,s.jsx)(n.a,{href:"https://github.com/gogf/csrf",children:"https://github.com/gogf/csrf"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,s.jsx)(n.h3,{id:"\u5f15\u5165\u63d2\u4ef6\u5305",children:"\u5f15\u5165\u63d2\u4ef6\u5305"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/csrf"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u914d\u7f6e\u63a5\u53e3\u4e2d\u95f4\u4ef6",children:"\u914d\u7f6e\u63a5\u53e3\u4e2d\u95f4\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"csrf"})," \u63d2\u4ef6\u652f\u6301\u81ea\u5b9a\u4e49 ",(0,s.jsx)(n.code,{children:"csrf.Config"})," \u914d\u7f6e\uff0c ",(0,s.jsx)(n.code,{children:"Config"})," \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"Cookie.Name"})," \u662f\u4e2d\u95f4\u4ef6\u8bbe\u7f6e\u5230\u8bf7\u6c42\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"Cookie"})," ",(0,s.jsx)(n.strong,{children:"\u4e2d"})," ",(0,s.jsx)(n.code,{children:"token"})," \u7684\u540d\u79f0\uff0c ",(0,s.jsx)(n.code,{children:"ExpireTime"})," \u662f ",(0,s.jsx)(n.code,{children:"token"})," \u8d85\u65f6\u65f6\u95f4\uff0c ",(0,s.jsx)(n.code,{children:"TokenLength"})," \u662f ",(0,s.jsx)(n.code,{children:"token"})," \u957f\u5ea6\uff0c ",(0,s.jsx)(n.code,{children:"TokenRequestKey"})," \u662f\u540e\u7eed\u8bf7\u6c42\u9700\u6c42\u5e26\u4e0a\u7684\u53c2\u6570\u540d\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'s := g.Server()\ns.Group("/api.v2", func(group *ghttp.RouterGroup) {\n    group.Middleware(csrf.NewWithCfg(csrf.Config{\n        Cookie: &http.Cookie{\n            Name: "_csrf",// token name in cookie\n        },\n        ExpireTime:      time.Hour * 24,\n        TokenLength:     32,\n        TokenRequestKey: "X-Token",// use this key to read token in request param\n    }))\n    group.ALL("/csrf", func(r *ghttp.Request) {\n        r.Response.Writeln(r.Method + ": " + r.RequestURI)\n    })\n})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u524d\u7aef\u5bf9\u63a5",children:"\u524d\u7aef\u5bf9\u63a5"}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7\u914d\u7f6e\u540e\uff0c\u524d\u7aef\u5728POST\u8bf7\u6c42\u524d\u4ece ",(0,s.jsx)(n.code,{children:"Cookie"})," \u4e2d\u8bfb\u53d6 ",(0,s.jsx)(n.code,{children:"_csrf"})," \u7684\u503c\uff08\u5373 ",(0,s.jsx)(n.code,{children:"token"}),"\uff09\uff0c\u7136\u540e\u8bf7\u6c42\u53d1\u51fa\u65f6\u5c06 ",(0,s.jsx)(n.code,{children:"token"})," \u4ee5 ",(0,s.jsx)(n.code,{children:"X-Token"}),"\uff08 ",(0,s.jsx)(n.code,{children:"TokenRequestKey"})," \u6240\u8bbe\u7f6e\uff09\u53c2\u6570\u540d\u7f6e\u5165\u8bf7\u6c42\u4e2d\uff08\u53ef\u4ee5\u662f ",(0,s.jsx)(n.code,{children:"Header"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"Form"}),"\uff09\u5373\u53ef\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"token"})," \u6821\u9a8c\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4ee3\u7801\u793a\u4f8b",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e",children:"\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "net/http"\n    "time"\n\n    "github.com/gogf/csrf"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\n// default cfg\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v2", func(group *ghttp.RouterGroup) {\n        group.Middleware(csrf.New())\n        group.ALL("/csrf", func(r *ghttp.Request) {\n            r.Response.Writeln(r.Method + ": " + r.RequestURI)\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e",children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "net/http"\n    "time"\n\n    "github.com/gogf/csrf"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\n// set cfg\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v2", func(group *ghttp.RouterGroup) {\n        group.Middleware(csrf.NewWithCfg(csrf.Config{\n            Cookie: &http.Cookie{\n                Name: "_csrf",// token name in cookie\n                Secure:   true,\n                SameSite: http.SameSiteNoneMode,// \u81ea\u5b9a\u4e49samesite\n            },\n            ExpireTime:      time.Hour * 24,\n            TokenLength:     32,\n            TokenRequestKey: "X-Token",// use this key to read token in request param\n        }))\n        group.ALL("/csrf", func(r *ghttp.Request) {\n            r.Response.Writeln(r.Method + ": " + r.RequestURI)\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u901a\u8fc7\u8bf7\u6c42\u4f53\u9a8c\u6548\u679c",children:"\u901a\u8fc7\u8bf7\u6c42\u4f53\u9a8c\u6548\u679c"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"http://localhost:8199/api.v2/csrf",children:"http://localhost:8199/api.v2/csrf"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var r=o(296540);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
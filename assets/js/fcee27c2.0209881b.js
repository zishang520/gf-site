"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[73150],{441895:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406/\u547d\u4ee4\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a","title":"\u547d\u4ee4\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u7684\u547d\u4ee4\u7ba1\u7406\u7ec4\u4ef6\u8fdb\u884c\u94fe\u8def\u8ddf\u8e2a\u3002\u901a\u8fc7OpenTelemetry\u89c4\u8303\uff0c\u4f7f\u7528GoFrame\u53ef\u4ee5\u5b9e\u73b0\u8de8\u8fdb\u7a0b\u7684\u94fe\u8def\u8ddf\u8e2a\uff0c\u7279\u522b\u9002\u7528\u4e8e\u4e34\u65f6\u8fd0\u884c\u7684\u8fdb\u7a0b\u3002\u793a\u4f8b\u4e2d\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7\u4e3b\u8fdb\u7a0b\u8c03\u7528\u5b50\u8fdb\u7a0b\uff0c\u5e76\u81ea\u52a8\u4f20\u9012\u94fe\u8def\u4fe1\u606f\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406/\u547d\u4ee4\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406","slug":"/docs/core/gcmd-tracing","permalink":"/2.7.x/docs/core/gcmd-tracing","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406/\u547d\u4ee4\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a.md","tags":[],"version":"2.7.x","sidebarPosition":6,"frontMatter":{"slug":"/docs/core/gcmd-tracing","title":"\u547d\u4ee4\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u547d\u4ee4\u7ba1\u7406","\u94fe\u8def\u8ddf\u8e2a","OpenTelemetry","\u4e3b\u8fdb\u7a0b","\u5b50\u8fdb\u7a0b","gcmd","gproc","gctx"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u7684\u547d\u4ee4\u7ba1\u7406\u7ec4\u4ef6\u8fdb\u884c\u94fe\u8def\u8ddf\u8e2a\u3002\u901a\u8fc7OpenTelemetry\u89c4\u8303\uff0c\u4f7f\u7528GoFrame\u53ef\u4ee5\u5b9e\u73b0\u8de8\u8fdb\u7a0b\u7684\u94fe\u8def\u8ddf\u8e2a\uff0c\u7279\u522b\u9002\u7528\u4e8e\u4e34\u65f6\u8fd0\u884c\u7684\u8fdb\u7a0b\u3002\u793a\u4f8b\u4e2d\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7\u4e3b\u8fdb\u7a0b\u8c03\u7528\u5b50\u8fdb\u7a0b\uff0c\u5e76\u81ea\u52a8\u4f20\u9012\u94fe\u8def\u4fe1\u606f\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u547d\u4ee4\u7ba1\u7406-\u7ec8\u7aef\u4ea4\u4e92","permalink":"/2.7.x/docs/core/gcmd-scan"},"next":{"title":"\u914d\u7f6e\u7ba1\u7406","permalink":"/2.7.x/docs/core/gcfg"}}');var c=r(474848),t=r(28453);const s={slug:"/docs/core/gcmd-tracing",title:"\u547d\u4ee4\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a",sidebar_position:6,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u547d\u4ee4\u7ba1\u7406","\u94fe\u8def\u8ddf\u8e2a","OpenTelemetry","\u4e3b\u8fdb\u7a0b","\u5b50\u8fdb\u7a0b","gcmd","gproc","gctx"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u7684\u547d\u4ee4\u7ba1\u7406\u7ec4\u4ef6\u8fdb\u884c\u94fe\u8def\u8ddf\u8e2a\u3002\u901a\u8fc7OpenTelemetry\u89c4\u8303\uff0c\u4f7f\u7528GoFrame\u53ef\u4ee5\u5b9e\u73b0\u8de8\u8fdb\u7a0b\u7684\u94fe\u8def\u8ddf\u8e2a\uff0c\u7279\u522b\u9002\u7528\u4e8e\u4e34\u65f6\u8fd0\u884c\u7684\u8fdb\u7a0b\u3002\u793a\u4f8b\u4e2d\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7\u4e3b\u8fdb\u7a0b\u8c03\u7528\u5b50\u8fdb\u7a0b\uff0c\u5e76\u81ea\u52a8\u4f20\u9012\u94fe\u8def\u4fe1\u606f\u3002"},i=void 0,a={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u4e3b\u8fdb\u7a0b",id:"\u4e3b\u8fdb\u7a0b",level:3},{value:"\u5b50\u8fdb\u7a0b",id:"\u5b50\u8fdb\u7a0b",level:3},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:3}];function g(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"GoFrame"})," \u547d\u4ee4\u7ba1\u7406\u7ec4\u4ef6\u4e5f\u652f\u6301\u8de8\u8fdb\u7a0b\u7684\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\uff0c\u7279\u522b\u662f\u5bf9\u4e8e\u4e00\u4e9b\u4e34\u65f6\u8fd0\u884c\u7684\u8fdb\u7a0b\u7279\u522b\u6709\u7528\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6846\u67b6\u6574\u4f53\u7684\u94fe\u8def\u8ddf\u8e2a\u90fd\u662f\u91c7\u7528\u7684 ",(0,c.jsx)(n.code,{children:"OpenTelemetry"})," \u89c4\u8303\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,c.jsx)(n.h3,{id:"\u4e3b\u8fdb\u7a0b",children:"\u4e3b\u8fdb\u7a0b"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"main.go"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gcmd"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gproc"\n)\n\nvar (\n    Main = &gcmd.Command{\n        Name:  "main",\n        Brief: "main process",\n        Func: func(ctx context.Context, parser *gcmd.Parser) (err error) {\n            g.Log().Debug(ctx, `this is main process`)\n            return gproc.ShellRun(ctx, `go run sub.go`)\n        },\n    }\n)\n\nfunc main() {\n    Main.Run(gctx.GetInitCtx())\n}\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u5b50\u8fdb\u7a0b",children:"\u5b50\u8fdb\u7a0b"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"sub.go"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gcmd"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nvar (\n    Sub = &gcmd.Command{\n        Name:  "sub",\n        Brief: "sub process",\n        Func: func(ctx context.Context, parser *gcmd.Parser) (err error) {\n            g.Log().Debug(ctx, `this is sub process`)\n            return nil\n        },\n    }\n)\n\nfunc main() {\n    Sub.Run(gctx.GetInitCtx())\n}\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u6267\u884c\u7ed3\u679c",children:"\u6267\u884c\u7ed3\u679c"}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ go run main.go\n2022-06-21 20:35:06.196 [DEBU] {00698a61e2a2fa1661da5d7993d72e8c} this is main process\n2022-06-21 20:35:07.482 [DEBU] {00698a61e2a2fa1661da5d7993d72e8c} this is sub process\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u94fe\u8def\u4fe1\u606f\u5df2\u7ecf\u81ea\u52a8\u4f20\u9012\u7ed9\u4e86\u5b50\u8fdb\u7a0b\u3002"})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(g,{...e})}):g(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var o=r(296540);const c={},t=o.createContext(c);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);
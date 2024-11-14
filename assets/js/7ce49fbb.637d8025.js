"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[14731],{321310:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406/\u547d\u4ee4\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a","title":"\u547d\u4ee4\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406/\u547d\u4ee4\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406","slug":"/\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406/\u547d\u4ee4\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a","permalink":"/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406/\u547d\u4ee4\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406/\u547d\u4ee4\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a.md","tags":[],"version":"2.6.x","sidebarPosition":6,"frontMatter":{"title":"\u547d\u4ee4\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a","sidebar_position":6,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u547d\u4ee4\u7ba1\u7406-\u7ec8\u7aef\u4ea4\u4e92","permalink":"/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406/\u547d\u4ee4\u7ba1\u7406-\u7ec8\u7aef\u4ea4\u4e92"},"next":{"title":"\u914d\u7f6e\u7ba1\u7406","permalink":"/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u914d\u7f6e\u7ba1\u7406/"}}');var s=t(474848),r=t(28453);const o={title:"\u547d\u4ee4\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a",sidebar_position:6,hide_title:!0},c=void 0,a={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u4e3b\u8fdb\u7a0b",id:"\u4e3b\u8fdb\u7a0b",level:3},{value:"\u5b50\u8fdb\u7a0b",id:"\u5b50\u8fdb\u7a0b",level:3},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:3}];function l(n){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"GoFrame"})," \u547d\u4ee4\u7ba1\u7406\u7ec4\u4ef6\u4e5f\u652f\u6301\u8de8\u8fdb\u7a0b\u7684\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\uff0c\u7279\u522b\u662f\u5bf9\u4e8e\u4e00\u4e9b\u4e34\u65f6\u8fd0\u884c\u7684\u8fdb\u7a0b\u7279\u522b\u6709\u7528\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6846\u67b6\u6574\u4f53\u7684\u94fe\u8def\u8ddf\u8e2a\u90fd\u662f\u91c7\u7528\u7684 ",(0,s.jsx)(e.code,{children:"OpenTelemetry"})," \u89c4\u8303\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,s.jsx)(e.h3,{id:"\u4e3b\u8fdb\u7a0b",children:"\u4e3b\u8fdb\u7a0b"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"main.go"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gcmd"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gproc"\n)\n\nvar (\n    Main = &gcmd.Command{\n        Name:  "main",\n        Brief: "main process",\n        Func: func(ctx context.Context, parser *gcmd.Parser) (err error) {\n            g.Log().Debug(ctx, `this is main process`)\n            return gproc.ShellRun(ctx, `go run sub.go`)\n        },\n    }\n)\n\nfunc main() {\n    Main.Run(gctx.GetInitCtx())\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u5b50\u8fdb\u7a0b",children:"\u5b50\u8fdb\u7a0b"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"sub.go"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gcmd"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nvar (\n    Sub = &gcmd.Command{\n        Name:  "sub",\n        Brief: "sub process",\n        Func: func(ctx context.Context, parser *gcmd.Parser) (err error) {\n            g.Log().Debug(ctx, `this is sub process`)\n            return nil\n        },\n    }\n)\n\nfunc main() {\n    Sub.Run(gctx.GetInitCtx())\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u6267\u884c\u7ed3\u679c",children:"\u6267\u884c\u7ed3\u679c"}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ go run main.go\n2022-06-21 20:35:06.196 [DEBU] {00698a61e2a2fa1661da5d7993d72e8c} this is main process\n2022-06-21 20:35:07.482 [DEBU] {00698a61e2a2fa1661da5d7993d72e8c} this is sub process\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u94fe\u8def\u4fe1\u606f\u5df2\u7ecf\u81ea\u52a8\u4f20\u9012\u7ed9\u4e86\u5b50\u8fdb\u7a0b\u3002"})]})}function g(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var i=t(296540);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);
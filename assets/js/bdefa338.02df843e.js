"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[54765],{191332:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=t(474848),s=t(28453);const i={slug:"/components/os/gproc-tracing",title:"\u8fdb\u7a0b\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a",sidebar_position:3,hide_title:!0},c=void 0,r={id:"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a",title:"\u8fdb\u7a0b\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a.md",sourceDirName:"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc",slug:"/components/os/gproc-tracing",permalink:"/gf-site/docs/components/os/gproc-tracing",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730376618e3,sidebarPosition:3,frontMatter:{slug:"/components/os/gproc-tracing",title:"\u8fdb\u7a0b\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a",sidebar_position:3,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u8fdb\u7a0b\u7ba1\u7406-\u4fe1\u53f7\u76d1\u542c",permalink:"/gf-site/docs/components/os/gproc-signal"},next:{title:"\u6a21\u677f\u5f15\u64ce-gview",permalink:"/gf-site/docs/components/os/gview"}},a={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u4e3b\u8fdb\u7a0b",id:"\u4e3b\u8fdb\u7a0b",level:3},{value:"\u5b50\u8fdb\u7a0b",id:"\u5b50\u8fdb\u7a0b",level:3},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:3}];function g(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(n.p,{children:["\u8fdb\u7a0b\u7ba1\u7406\u7ec4\u4ef6\u652f\u6301\u8de8\u8fdb\u7a0b\u7684\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\uff0c\u7279\u522b\u662f\u5bf9\u4e8e\u4e00\u4e9b\u4e34\u65f6\u8fd0\u884c\u7684\u8fdb\u7a0b\u7279\u522b\u6709\u7528\u3002\u6846\u67b6\u6574\u4f53\u7684\u94fe\u8def\u8ddf\u8e2a\u90fd\u662f\u91c7\u7528\u7684 ",(0,o.jsx)(n.code,{children:"OpenTelemetry"})," \u89c4\u8303\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,o.jsx)(n.h3,{id:"\u4e3b\u8fdb\u7a0b",children:"\u4e3b\u8fdb\u7a0b"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"main.go"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gproc"\n)\n\nfunc main() {\n    ctx := gctx.GetInitCtx()\n    g.Log().Debug(ctx, `this is main process`)\n    if err := gproc.ShellRun(ctx, `go run sub.go`); err != nil {\n        panic(err)\n    }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\u5b50\u8fdb\u7a0b",children:"\u5b50\u8fdb\u7a0b"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"sub.go"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    ctx := gctx.GetInitCtx()\n    g.Log().Debug(ctx, `this is sub process`)\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\u6267\u884c\u7ed3\u679c",children:"\u6267\u884c\u7ed3\u679c"}),"\n",(0,o.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ go run main.go\n2022-06-21 20:35:06.196 [DEBU] {00698a61e2a2fa1661da5d7993d72e8c} this is main process\n2022-06-21 20:35:07.482 [DEBU] {00698a61e2a2fa1661da5d7993d72e8c} this is sub process\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u94fe\u8def\u4fe1\u606f\u5df2\u7ecf\u81ea\u52a8\u4f20\u9012\u7ed9\u4e86\u5b50\u8fdb\u7a0b\u3002"})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(296540);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
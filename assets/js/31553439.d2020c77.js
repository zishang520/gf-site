"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[70996],{240225:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>g});const o=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Flags\u7279\u6027","title":"\u65e5\u5fd7\u7ec4\u4ef6-Flags\u7279\u6027","description":"GoFrame\u6846\u67b6\u4e2d\u65e5\u5fd7\u7ec4\u4ef6\u7684Flags\u7279\u6027\uff0c\u8bf4\u660e\u5982\u4f55\u901a\u8fc7\u4e0d\u540c\u7684\u5e38\u91cf\u7ec4\u5408\u6765\u63a7\u5236\u65e5\u5fd7\u8f93\u51fa\u7684\u989d\u5916\u7279\u6027\uff0c\u5305\u62ec\u5f02\u6b65\u8f93\u51fa\u3001\u8c03\u7528\u884c\u53f7\u4fe1\u606f\u6253\u5370\u4ee5\u53ca\u591a\u79cd\u65f6\u95f4\u683c\u5f0f\u7684\u9009\u62e9\u3002\u8fd9\u4e9b\u7279\u6027\u80fd\u591f\u5e2e\u52a9\u5f00\u53d1\u8005\u5b9e\u73b0\u66f4\u7075\u6d3b\u7684\u65e5\u5fd7\u8bb0\u5f55\u548c\u8c03\u8bd5\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Flags\u7279\u6027.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6","slug":"/docs/core/glog-flags","permalink":"/docs/core/glog-flags","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Flags\u7279\u6027.md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"slug":"/docs/core/glog-flags","title":"\u65e5\u5fd7\u7ec4\u4ef6-Flags\u7279\u6027","sidebar_position":12,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","glog","\u65e5\u5fd7\u7ec4\u4ef6","Flags\u7279\u6027","\u65e5\u5fd7\u5f02\u6b65\u8f93\u51fa","\u8c03\u7528\u884c\u53f7\u4fe1\u606f","\u65f6\u95f4\u683c\u5f0f","\u65e5\u671f\u65f6\u95f4","\u6beb\u79d2"],"description":"GoFrame\u6846\u67b6\u4e2d\u65e5\u5fd7\u7ec4\u4ef6\u7684Flags\u7279\u6027\uff0c\u8bf4\u660e\u5982\u4f55\u901a\u8fc7\u4e0d\u540c\u7684\u5e38\u91cf\u7ec4\u5408\u6765\u63a7\u5236\u65e5\u5fd7\u8f93\u51fa\u7684\u989d\u5916\u7279\u6027\uff0c\u5305\u62ec\u5f02\u6b65\u8f93\u51fa\u3001\u8c03\u7528\u884c\u53f7\u4fe1\u606f\u6253\u5370\u4ee5\u53ca\u591a\u79cd\u65f6\u95f4\u683c\u5f0f\u7684\u9009\u62e9\u3002\u8fd9\u4e9b\u7279\u6027\u80fd\u591f\u5e2e\u52a9\u5f00\u53d1\u8005\u5b9e\u73b0\u66f4\u7075\u6d3b\u7684\u65e5\u5fd7\u8bb0\u5f55\u548c\u8c03\u8bd5\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3","permalink":"/docs/core/glog-writer"},"next":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-Rotate\u7279\u6027","permalink":"/docs/core/glog-rotate"}}');var s=t(474848),l=t(28453);const r={slug:"/docs/core/glog-flags",title:"\u65e5\u5fd7\u7ec4\u4ef6-Flags\u7279\u6027",sidebar_position:12,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","glog","\u65e5\u5fd7\u7ec4\u4ef6","Flags\u7279\u6027","\u65e5\u5fd7\u5f02\u6b65\u8f93\u51fa","\u8c03\u7528\u884c\u53f7\u4fe1\u606f","\u65f6\u95f4\u683c\u5f0f","\u65e5\u671f\u65f6\u95f4","\u6beb\u79d2"],description:"GoFrame\u6846\u67b6\u4e2d\u65e5\u5fd7\u7ec4\u4ef6\u7684Flags\u7279\u6027\uff0c\u8bf4\u660e\u5982\u4f55\u901a\u8fc7\u4e0d\u540c\u7684\u5e38\u91cf\u7ec4\u5408\u6765\u63a7\u5236\u65e5\u5fd7\u8f93\u51fa\u7684\u989d\u5916\u7279\u6027\uff0c\u5305\u62ec\u5f02\u6b65\u8f93\u51fa\u3001\u8c03\u7528\u884c\u53f7\u4fe1\u606f\u6253\u5370\u4ee5\u53ca\u591a\u79cd\u65f6\u95f4\u683c\u5f0f\u7684\u9009\u62e9\u3002\u8fd9\u4e9b\u7279\u6027\u80fd\u591f\u5e2e\u52a9\u5f00\u53d1\u8005\u5b9e\u73b0\u66f4\u7075\u6d3b\u7684\u65e5\u5fd7\u8bb0\u5f55\u548c\u8c03\u8bd5\u3002"},a=void 0,i={},g=[];function c(e){const n={code:"code",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"flags"})," \u7528\u4e8e\u63a7\u5236\u65e5\u5fd7\u7ec4\u4ef6\u7684\u989d\u5916\u7279\u6027\u5f00\u5173\uff0c\u8fd9\u4e9b\u5c5e\u6027\u4f7f\u7528\u5e38\u91cf\u8fdb\u884c\u7ec4\u5408\u63a7\u5236\uff0c\u5305\u62ec\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"F_ASYNC      = 1 << iota // \u5f00\u542f\u65e5\u5fd7\u5f02\u6b65\u8f93\u51fa\nF_FILE_LONG              // \u6253\u5370\u8c03\u7528\u884c\u53f7\u4fe1\u606f\uff0c\u5b8c\u6574\u7edd\u5bf9\u8def\u5f84\uff0c\u4f8b\u5982\uff1a/a/b/c/d.go:23\nF_FILE_SHORT             // \u6253\u5370\u8c03\u7528\u884c\u53f7\u4fe1\u606f\uff0c\u4ec5\u6253\u5370\u6587\u4ef6\u540d\uff0c\u4f8b\u5982\uff1ad.go:23\uff0c\u8986\u76d6 F_FILE_LONG.\nF_TIME_DATE              // \u6253\u5370\u5f53\u524d\u65e5\u671f\uff0c\u5982\uff1a2009-01-23\nF_TIME_TIME              // \u6253\u5370\u5f53\u524d\u65f6\u95f4\uff0c\u5982\uff1a01:23:23\nF_TIME_MILLI             // \u6253\u5370\u5f53\u524d\u65f6\u95f4+\u6beb\u79d2\uff0c\u5982\uff1a01:23:23.675\nF_TIME_STD = F_TIME_DATE | F_TIME_MILLI // (\u9ed8\u8ba4)\u6253\u5370\u5f53\u524d\u65e5\u671f+\u65f6\u95f4+\u6beb\u79d2\uff0c\u5982\uff1a2009-01-23 01:23:23.675\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    l := glog.New()\n    l.SetFlags(glog.F_TIME_TIME | glog.F_FILE_SHORT)\n    l.Print(ctx, "time and short line number")\n    l.SetFlags(glog.F_TIME_MILLI | glog.F_FILE_LONG)\n    l.Print(ctx, "time with millisecond and long line number")\n    l.SetFlags(glog.F_TIME_STD | glog.F_FILE_LONG)\n    l.Print(ctx, "standard time format and long line number")\n}\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"PS C:\\hailaz\\test> go run .\\main.go\n16:05:35 main.go:13: time and short line number\n16:05:35.108 C:/hailaz/test/main.go:15: time with millisecond and long line number\n2022-01-05 16:05:35.109 C:/hailaz/test/main.go:17: standard time format and long line number\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(296540);const s={},l=o.createContext(s);function r(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);
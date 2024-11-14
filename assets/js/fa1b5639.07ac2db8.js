"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[39660],{670548:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"\u5f00\u53d1\u5de5\u5177/\u81ea\u52a8\u7f16\u8bd1-run","title":"\u81ea\u52a8\u7f16\u8bd1-run","description":"\u6ce8\u610f\u4e8b\u9879","source":"@site/versioned_docs/version-2.0.x/\u5f00\u53d1\u5de5\u5177/\u81ea\u52a8\u7f16\u8bd1-run.md","sourceDirName":"\u5f00\u53d1\u5de5\u5177","slug":"/\u5f00\u53d1\u5de5\u5177/\u81ea\u52a8\u7f16\u8bd1-run","permalink":"/2.0.x/\u5f00\u53d1\u5de5\u5177/\u81ea\u52a8\u7f16\u8bd1-run","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/\u5f00\u53d1\u5de5\u5177/\u81ea\u52a8\u7f16\u8bd1-run.md","tags":[],"version":"2.0.x","sidebarPosition":5,"frontMatter":{"title":"\u81ea\u52a8\u7f16\u8bd1-run","sidebar_position":5,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u63a5\u53e3\u7ef4\u62a4-gen service","permalink":"/2.0.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u63a5\u53e3\u7ef4\u62a4-gen service"},"next":{"title":"\u8d44\u6e90\u6253\u5305-pack","permalink":"/2.0.x/\u5f00\u53d1\u5de5\u5177/\u8d44\u6e90\u6253\u5305-pack"}}');var s=o(474848),r=o(28453);const t={title:"\u81ea\u52a8\u7f16\u8bd1-run",sidebar_position:5,hide_title:!0},a=void 0,c={},d=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4f7f\u7528\u5e2e\u52a9",id:"\u4f7f\u7528\u5e2e\u52a9",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}];function l(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(e.p,{children:["\u7531\u4e8e ",(0,s.jsx)(e.code,{children:"Go"})," \u662f\u4e0d\u652f\u6301\u70ed\u7f16\u8bd1\u7279\u6027\u7684\uff0c\u6bcf\u4e00\u6b21\u4ee3\u7801\u53d8\u66f4\u540e\u90fd\u8981\u91cd\u65b0\u624b\u52a8\u505c\u6b62\u3001\u7f16\u8bd1\u3001\u8fd0\u884c\u4ee3\u7801\u6587\u4ef6\u3002 ",(0,s.jsx)(e.code,{children:"run"})," \u547d\u4ee4\u4e5f\u4e0d\u662f\u5b9e\u73b0\u70ed\u7f16\u8bd1\u529f\u80fd\uff0c\u800c\u662f\u63d0\u4f9b\u4e86\u81ea\u52a8\u7f16\u8bd1\u529f\u80fd\uff0c\u5f53\u5f00\u53d1\u8005\u4fee\u6539\u4e86\u9879\u76ee\u4e2d\u7684 ",(0,s.jsx)(e.code,{children:"go"})," \u6587\u4ef6\u65f6\uff0c\u8be5\u547d\u4ee4\u5c06\u4f1a\u81ea\u52a8\u7f16\u8bd1\u5f53\u524d\u7a0b\u5e8f\uff0c\u5e76\u505c\u6b62\u539f\u6709\u7a0b\u5e8f\uff0c\u8fd0\u884c\u65b0\u7248\u7684\u7a0b\u5e8f\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"run"})," \u547d\u4ee4\u4f1a\u9012\u5f52\u76d1\u63a7 ",(0,s.jsx)(e.strong,{children:"\u5f53\u524d\u8fd0\u884c\u76ee\u5f55"})," \u7684\u6240\u6709 ",(0,s.jsx)(e.code,{children:"go"})," \u6587\u4ef6\u53d8\u5316\u6765\u5b9e\u73b0\u81ea\u52a8\u7f16\u8bd1\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u5e2e\u52a9",children:"\u4f7f\u7528\u5e2e\u52a9"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'$ gf run -h\nUSAGE\n    gf run FILE [OPTION]\n\nARGUMENT\n    FILE    building file path.\n\nOPTION\n    -p, --path     output directory path for built binary file. it\'s "manifest/output" in default\n    -e, --extra    the same options as "go run"/"go build" except some options as follows defined\n    -h, --help     more information about this command\n\nEXAMPLE\n    gf run main.go\n    gf run main.go --args "server -p 8080"\n    gf run main.go -mod=vendor\n\nDESCRIPTION\n    The "run" command is used for running go codes with hot-compiled-like feature,\n    which compiles and runs the go codes asynchronously when codes change.\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,s.jsxs)(e.p,{children:["\u4e00\u822c ",(0,s.jsx)(e.code,{children:"gf run main.go"})," \u5373\u53ef"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'$ gf run main.go --swagger\n2020-12-31 00:40:16.948 build: main.go\n2020-12-31 00:40:16.994 producing swagger files...\n2020-12-31 00:40:17.145 done!\n2020-12-31 00:40:17.216 gf pack swagger packed/swagger.go -n packed -y\n2020-12-31 00:40:17.279 done!\n2020-12-31 00:40:17.282 go build -o bin/main  main.go\n2020-12-31 00:40:18.696 go file changes: "/Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf-demos/packed/swagger.go": WRITE\n2020-12-31 00:40:18.696 build: main.go\n2020-12-31 00:40:18.775 producing swagger files...\n2020-12-31 00:40:18.911 done!\n2020-12-31 00:40:19.045 gf pack swagger packed/swagger.go -n packed -y\n2020-12-31 00:40:19.136 done!\n2020-12-31 00:40:19.144 go build -o bin/main  main.go\n2020-12-31 00:40:21.367 bin/main\n2020-12-31 00:40:21.372 build running pid: 40954\n2020-12-31 00:40:21.437 [DEBU] [ghttp] SetServerRoot path: /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf-demos/public\n2020-12-31 00:40:21.440 40954: http server started listening on [:8199]\n...\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/fsnotify/fsnotify/issues/129",children:"too many open files on macOS"})})]})}function g(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>t,x:()=>a});var i=o(296540);const s={},r=i.createContext(s);function t(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);
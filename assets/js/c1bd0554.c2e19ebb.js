"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[42475],{444314:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(474848),s=t(28453);const i={title:"\u6570\u636e\u8fd4\u56de-Stream\u8fd4\u56de",sidebar_position:6,hide_title:!0},o=void 0,c={id:"WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Stream\u8fd4\u56de",title:"\u6570\u636e\u8fd4\u56de-Stream\u8fd4\u56de",description:"\u6211\u4eec\u53ef\u4ee5\u5f88\u7b80\u5355\u5b9e\u73b0HTTP\u6d41\u5f0f\u6570\u636e\u8fd4\u56de\u3002",source:"@site/versioned_docs/version-2.4.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Stream\u8fd4\u56de.md",sourceDirName:"WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Stream\u8fd4\u56de",permalink:"/gf-site/docs/2.4.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Stream\u8fd4\u56de",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Stream\u8fd4\u56de.md",tags:[],version:"2.4.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:6,frontMatter:{title:"\u6570\u636e\u8fd4\u56de-Stream\u8fd4\u56de",sidebar_position:6,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790",permalink:"/gf-site/docs/2.4.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790"},next:{title:"\u670d\u52a1\u914d\u7f6e",permalink:"/gf-site/docs/2.4.x/WEB\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u914d\u7f6e/"}},d={},l=[{value:"\u6846\u67b6\u7248\u672c &lt; <code>v2.4</code>",id:"\u6846\u67b6\u7248\u672c--v24",level:2},{value:"\u6846\u67b6\u7248\u672c &gt;= <code>v2.4</code>",id:"\u6846\u67b6\u7248\u672c--v24-1",level:2},{value:"\u793a\u4f8b\u7ed3\u679c",id:"\u793a\u4f8b\u7ed3\u679c",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u8d44\u6599",id:"\u8d44\u6599",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5f88\u7b80\u5355\u5b9e\u73b0HTTP\u6d41\u5f0f\u6570\u636e\u8fd4\u56de\u3002"}),"\n",(0,r.jsxs)(n.h2,{id:"\u6846\u67b6\u7248\u672c--v24",children:["\u6846\u67b6\u7248\u672c < ",(0,r.jsx)(n.code,{children:"v2.4"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5f53\u524d\u4f7f\u7528\u7684\u6846\u67b6\u7248\u672c\u5c0f\u4e8e ",(0,r.jsx)(n.code,{children:"v2.4"})," \u6b63\u5f0f\u7248\uff08\u4e0d\u662f ",(0,r.jsx)(n.code,{children:"beta"})," \u7248\u672c\uff09\uff0c\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u8fd4\u56de\uff08\u6807\u51c6\u5e93\u539f\u751f\u5199\u6cd5\uff09\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "net/http"\n    "time"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        rw := r.Response.RawWriter()\n        flusher, ok := rw.(http.Flusher)\n        if !ok {\n            http.Error(rw, "Streaming unsupported!", http.StatusInternalServerError)\n            return\n        }\n        r.Response.Header().Set("Content-Type", "text/event-stream")\n        r.Response.Header().Set("Cache-Control", "no-cache")\n        r.Response.Header().Set("Connection", "keep-alive")\n\n        for i := 0; i < 100; i++ {\n            _, err := fmt.Fprintf(rw, "data: %d\\n", i)\n            if err != nil {\n                panic(err)\n            }\n            flusher.Flush()\n            time.Sleep(time.Millisecond * 200)\n        }\n    })\n    s.SetPort(8999)\n    s.Run()\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"\u6846\u67b6\u7248\u672c--v24-1",children:["\u6846\u67b6\u7248\u672c >= ",(0,r.jsx)(n.code,{children:"v2.4"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e\u4ee5\u4e0a\u64cd\u4f5c\u6709\u70b9\u7e41\u7410\uff0c\u56e0\u6b64\u5728\u8be5\u7248\u672c\u4ee5\u540e\u505a\u4e86\u4e00\u4e9b\u64cd\u4f5c\u4e0a\u7684\u6539\u8fdb\uff0c\u5982\u679c\u5f53\u524d\u4f7f\u7528\u7684\u6846\u67b6\u7248\u672c\u5728 ",(0,r.jsx)(n.code,{children:"v2.4"})," \u6b63\u5f0f\u7248\uff08\u4e0d\u662f ",(0,r.jsx)(n.code,{children:"beta"})," \u7248\u672c\uff09\u4ee5\u4e0a\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u5feb\u901f\u5b9e\u73b0\u6d41\u5f0f\u6570\u636e\u8fd4\u56de\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "time"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.Header().Set("Content-Type", "text/event-stream")\n        r.Response.Header().Set("Cache-Control", "no-cache")\n        r.Response.Header().Set("Connection", "keep-alive")\n\n        for i := 0; i < 100; i++ {\n            r.Response.Writefln("data: %d", i)\n            r.Response.Flush()\n            time.Sleep(time.Millisecond * 200)\n        }\n    })\n    s.SetPort(8999)\n    s.Run()\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b\u7ed3\u679c",children:"\u793a\u4f8b\u7ed3\u679c"}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884c\u540e\u8bbf\u95ee ",(0,r.jsx)(n.a,{href:"http://127.0.0.1:8999/",children:"http://127.0.0.1:8999/"})," \u53ef\u4ee5\u770b\u5230\u6570\u636e\u901a\u8fc7\u6d41\u5f0f\u65b9\u5f0f\u4e0d\u65ad\u5730\u5c06\u6570\u636e\u8fd4\u56de\u7ed9\u8c03\u7528\u7aef\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(504542).A+"",width:"1084",height:"720"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u662f\u5728\u63a7\u5236\u5668\u4e2d\u4f7f\u7528\uff0c ",(0,r.jsx)(n.code,{children:"Request"})," \u5bf9\u8c61\u7684\u83b7\u53d6\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"g.RequestFromCtx(ctx)"})," \u65b9\u6cd5\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u6709\u524d\u7f6e\u7edf\u4e00\u8f93\u5165\u8f93\u51fa\u5904\u7406\u7684\u4e2d\u95f4\u4ef6\uff0c\u8bf7\u5c06\u8be5\u65b9\u6cd5\u653e\u7f6e\u4e8e\u4e2d\u95f4\u4ef6\u4f5c\u7528\u57df\u4e4b\u5916\uff0c\u6216\u8005\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"r.ExitAll()"})," \u65b9\u6cd5\u8df3\u51fa\u4e2d\u95f4\u4ef6\u63a7\u5236\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8d44\u6599",children:"\u8d44\u6599"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html",children:"Server-Sent Events \uff08SSE\uff09"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},504542:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/7f5316858f66e24acd74fca4cc1d6632-6bcae2482acc3ad8fd6d6d0a71d1816b.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(296540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
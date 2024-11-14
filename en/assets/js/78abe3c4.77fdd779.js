"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[67062],{645932:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"WEB\u670d\u52a1\u5f00\u53d1/\u5f02\u5e38\u5904\u7406","title":"\u5f02\u5e38\u5904\u7406","description":"\u7531\u4e8e\u8fd9\u4e2a\u95ee\u9898\u95ee\u5f97\u6bd4\u8f83\u591a\uff0c\u56e0\u6b64\u4e13\u95e8\u4e3a\u5927\u5bb6\u64b0\u5199\u4e86\u8fd9\u4e00\u7ae0\u8282\u3002","source":"@site/versioned_docs/version-2.3.x/WEB\u670d\u52a1\u5f00\u53d1/\u5f02\u5e38\u5904\u7406.md","sourceDirName":"WEB\u670d\u52a1\u5f00\u53d1","slug":"/WEB\u670d\u52a1\u5f00\u53d1/\u5f02\u5e38\u5904\u7406","permalink":"/en/2.3.x/WEB\u670d\u52a1\u5f00\u53d1/\u5f02\u5e38\u5904\u7406","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/WEB\u670d\u52a1\u5f00\u53d1/\u5f02\u5e38\u5904\u7406.md","tags":[],"version":"2.3.x","sidebarPosition":8,"frontMatter":{"title":"\u5f02\u5e38\u5904\u7406","sidebar_position":8,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"Session-Storage\u63a5\u53e3\u5f00\u53d1","permalink":"/en/2.3.x/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Storage\u63a5\u53e3\u5f00\u53d1"},"next":{"title":"HTTPClient","permalink":"/en/2.3.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/"}}');var g=n(474848),o=n(28453);const s={title:"\u5f02\u5e38\u5904\u7406",sidebar_position:8,hide_title:!0},c=void 0,i={},h=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u83b7\u53d6\u5f02\u5e38\u9519\u8bef",id:"\u83b7\u53d6\u5f02\u5e38\u9519\u8bef",level:2},{value:"\u76f8\u5173\u65b9\u6cd5",id:"\u76f8\u5173\u65b9\u6cd5",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:3},{value:"\u83b7\u53d6\u5f02\u5e38\u5806\u6808",id:"\u83b7\u53d6\u5f02\u5e38\u5806\u6808",level:2},{value:"\u5f02\u5e38\u5806\u6808\u4fe1\u606f",id:"\u5f02\u5e38\u5806\u6808\u4fe1\u606f",level:3},{value:"\u9519\u8bef\u5806\u6808\u4fe1\u606f",id:"\u9519\u8bef\u5806\u6808\u4fe1\u606f",level:3}];function l(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.p,{children:"\u7531\u4e8e\u8fd9\u4e2a\u95ee\u9898\u95ee\u5f97\u6bd4\u8f83\u591a\uff0c\u56e0\u6b64\u4e13\u95e8\u4e3a\u5927\u5bb6\u64b0\u5199\u4e86\u8fd9\u4e00\u7ae0\u8282\u3002"}),"\n",(0,g.jsx)(r.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,g.jsxs)(r.p,{children:["\u76ee\u524d\u5927\u591a\u6570 ",(0,g.jsx)(r.code,{children:"Golang"})," \u7684\u7b2c\u4e09\u65b9 ",(0,g.jsx)(r.code,{children:"WebServer"})," \u5e93\u5747\u6ca1\u6709\u9ed8\u8ba4\u5bf9 ",(0,g.jsx)(r.code,{children:"HTTP"})," \u8bf7\u6c42\u5904\u7406\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u5f02\u5e38\u8fdb\u884c\u6355\u83b7\uff0c\u8f7b\u8005\u9519\u8bef\u4ea7\u751f\u540e\u65e0\u6cd5\u8bb0\u5f55\u5230\u65e5\u5fd7\u9020\u6210\u6392\u67e5\u9519\u56f0\u96be\uff0c\u91cd\u5219\u5f02\u5e38\u9020\u6210\u8fdb\u7a0b\u76f4\u63a5\u5d29\u6e83\uff0c\u670d\u52a1\u4e0d\u53ef\u7528\u3002"]}),"\n",(0,g.jsxs)(r.p,{children:["\u5f53\u4f60\u9009\u62e9 ",(0,g.jsx)(r.code,{children:"goframe"}),"\uff0c\u4f60\u5f88\u5e78\u8fd0\u3002\u4f5c\u4e3a\u4e00\u6b3e\u4f01\u4e1a\u7ea7\u7684\u57fa\u7840\u5f00\u53d1\u6846\u67b6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6267\u884c\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684 ",(0,g.jsx)(r.code,{children:"panic"})," \u662f\u6709\u88ab ",(0,g.jsx)(r.code,{children:"Server"})," \u81ea\u52a8\u6355\u83b7\u7684\uff0c\u4ea7\u751f ",(0,g.jsx)(r.code,{children:"panic"})," \u65f6\u5f53\u524d\u6267\u884c\u6d41\u7a0b\u4f1a\u7acb\u5373\u4e2d\u6b62\uff0c\u4f46\u662f\u7edd\u5bf9\u4e0d\u4f1a\u5f71\u54cd\u8fdb\u7a0b\u76f4\u63a5\u5d29\u6e83\u3002"]}),"\n",(0,g.jsx)(r.h2,{id:"\u83b7\u53d6\u5f02\u5e38\u9519\u8bef",children:"\u83b7\u53d6\u5f02\u5e38\u9519\u8bef"}),"\n",(0,g.jsxs)(r.p,{children:[(0,g.jsx)(r.code,{children:"HTTP"})," \u6267\u884c\u6d41\u7a0b\u4e2d\u4ea7\u751f ",(0,g.jsx)(r.code,{children:"panic"})," \u5f02\u5e38\u65f6\uff0c\u9ed8\u8ba4\u5904\u7406\u662f\u8bb0\u5f55\u5230 ",(0,g.jsx)(r.code,{children:"Server"})," \u7684\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002\u5f53\u7136\uff0c\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6ce8\u518c\u4e2d\u95f4\u4ef6\u65b9\u5f0f\u624b\u52a8\u6355\u83b7\uff0c\u7136\u540e\u81ea\u5b9a\u4e49\u76f8\u5173\u7684\u9519\u8bef\u5904\u7406\u3002\u8fd9\u4e00\u64cd\u4f5c\u5176\u5b9e\u5728\u4e2d\u95f4\u4ef6\u7ae0\u8282\u7684\u793a\u4f8b\u4e2d\u4e5f\u6709\u4ecb\u7ecd\uff0c\u6211\u4eec\u8fd9\u91cc\u6765\u518d\u4ed4\u7ec6\u8bf4\u660e\u4e0b\u3002"]}),"\n",(0,g.jsx)(r.h3,{id:"\u76f8\u5173\u65b9\u6cd5",children:"\u76f8\u5173\u65b9\u6cd5"}),"\n",(0,g.jsxs)(r.p,{children:["\u5f02\u5e38\u7684\u6355\u83b7\u6211\u4eec\u901a\u8fc7 ",(0,g.jsx)(r.code,{children:"Request"})," \u5bf9\u8c61\u4e2d\u7684 ",(0,g.jsx)(r.code,{children:"GetError"})," \u65b9\u6cd5\u83b7\u53d6\u3002"]}),"\n",(0,g.jsxs)(r.p,{children:["\u5f00\u53d1\u8005\u4e0d\u80fd\u901a\u8fc7 ",(0,g.jsx)(r.code,{children:"recover"})," \u65b9\u6cd5\u6765\u6355\u83b7\u5f02\u5e38\uff0c\u56e0\u4e3a ",(0,g.jsx)(r.code,{children:"goframe"})," \u6846\u67b6\u7684 ",(0,g.jsx)(r.code,{children:"Server"})," \u5df2\u7ecf\u505a\u4e86\u6355\u83b7\uff0c\u5e76\u4e14\u4e3a\u4fdd\u8bc1\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5f02\u5e38\u4e0d\u4f1a\u5f15\u8d77\u8fdb\u7a0b\u5d29\u6e83\uff0c\u56e0\u6b64\u4e0d\u4f1a\u518d\u6b21\u5f80\u4e0a\u629b\u5f02\u5e38\u3002"]}),"\n",(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:"language-go",children:"// GetError returns the error occurs in the procedure of the request.\n// It returns nil if there's no error.\nfunc (r *Request) GetError() error\n"})}),"\n",(0,g.jsxs)(r.p,{children:["\u8be5\u65b9\u6cd5\u5f80\u5f80\u4f7f\u7528\u5728\u6d41\u7a0b\u63a7\u5236\u7ec4\u4ef6\u4e2d\uff0c\u5982\u540e\u7f6e\u4e2d\u95f4\u4ef6\u6216\u8005 ",(0,g.jsx)(r.code,{children:"HOOK"})," \u94a9\u5b50\u65b9\u6cd5\u4e2d\u3002"]}),"\n",(0,g.jsx)(r.h3,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,g.jsx)(r.p,{children:"\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528\u4e00\u4e2a\u5168\u5c40\u7684\u540e\u7f6e\u4e2d\u95f4\u4ef6\u6765\u6355\u83b7\u5f02\u5e38\uff0c\u5f53\u5f02\u5e38\u4ea7\u751f\u540e\uff0c\u6355\u83b7\u5e76\u5199\u5165\u5230\u6307\u5b9a\u7684\u65e5\u5fd7\u6587\u4ef6\u4e2d\uff0c\u8fd4\u56de\u56fa\u5b9a\u53cb\u597d\u7684\u63d0\u793a\u4fe1\u606f\uff0c\u907f\u514d\u654f\u611f\u7684\u62a5\u9519\u4fe1\u606f\u66b4\u9732\u7ed9\u8c03\u7528\u7aef\u3002"}),"\n",(0,g.jsx)(r.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a"}),"\n",(0,g.jsxs)(r.ul,{children:["\n",(0,g.jsxs)(r.li,{children:["\u5373\u4f7f\u5f00\u53d1\u8005\u6709\u81ea\u5df1\u6355\u83b7\u8bb0\u5f55\u5f02\u5e38\u9519\u8bef\u7684\u65e5\u5fd7\uff0c\u4f46\u662f ",(0,g.jsx)(r.code,{children:"Server"})," \u4f9d\u65e7\u4f1a\u6253\u5370\u5230 ",(0,g.jsx)(r.code,{children:"Server"})," \u81ea\u5df1\u7684\u9519\u8bef\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002\u7531\u5f00\u53d1\u8005\u8c03\u7528\u65e5\u5fd7\u63a5\u53e3\u65b9\u6cd5\u8f93\u51fa\u7684\u65e5\u5fd7\u5c5e\u4e8e\u4e1a\u52a1\u65e5\u5fd7\uff08\u4e0e\u4e1a\u52a1\u76f8\u5173\uff09\uff0c\u800c ",(0,g.jsx)(r.code,{children:"Server"})," \u81ea\u884c\u7ba1\u7406\u7684\u65e5\u5fd7\u5c5e\u4e8e\u670d\u52a1\u65e5\u5fd7\uff08\u7c7b\u4f3c\u4e8e ",(0,g.jsx)(r.code,{children:"nginx"})," \u7684 ",(0,g.jsx)(r.code,{children:"error.log"}),"\uff09\u3002"]}),"\n",(0,g.jsxs)(r.li,{children:["\u7531\u4e8e ",(0,g.jsx)(r.code,{children:"goframe"})," \u6846\u67b6\u5927\u90e8\u5206\u7684\u5e95\u5c42\u9519\u8bef\u90fd\u5305\u542b\u6709\u9519\u8bef\u65f6\u7684\u5806\u6808\u4fe1\u606f\uff0c\u5982\u679c\u5bf9\u4e8e ",(0,g.jsx)(r.code,{children:"error"})," \u7684\u5177\u4f53\u5806\u6808\u4fe1\u606f\u611f\u5174\u8da3\uff08\u5177\u4f53\u8c03\u7528\u94fe\u3001\u62a5\u9519\u6587\u4ef6\u8def\u5f84\u3001\u6e90\u7801\u884c\u53f7\u7b49\uff09\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,g.jsx)(r.code,{children:"gerror"})," \u6765\u83b7\u53d6\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,g.jsx)(r.a,{href:"/en/2.3.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86-%E5%A0%86%E6%A0%88%E7%89%B9%E6%80%A7",children:"\u9519\u8bef\u5904\u7406-\u5806\u6808\u7279\u6027"})," \u7ae0\u8282\u3002\u5982\u679c\u5f02\u5e38\u5305\u542b\u5806\u6808\u4fe1\u606f\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u6253\u5370\u5230 ",(0,g.jsx)(r.code,{children:"Server"})," \u7684 ",(0,g.jsx)(r.code,{children:"error"})," \u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002"]}),"\n"]}),"\n",(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc MiddlewareErrorHandler(r *ghttp.Request) {\n    r.Middleware.Next()\n    if err := r.GetError(); err != nil {\n        // \u8bb0\u5f55\u5230\u81ea\u5b9a\u4e49\u9519\u8bef\u65e5\u5fd7\u6587\u4ef6\n        g.Log("exception").Error(err)\n        //\u8fd4\u56de\u56fa\u5b9a\u7684\u53cb\u597d\u4fe1\u606f\n        r.Response.ClearBuffer()\n        r.Response.Writeln("\u670d\u52a1\u5668\u5c45\u7136\u5f00\u5c0f\u5dee\u4e86\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u5427\uff01")\n    }\n}\n\nfunc main() {\n    s := g.Server()\n    s.Use(MiddlewareErrorHandler)\n    s.Group("/api.v2", func(group *ghttp.RouterGroup) {\n        group.ALL("/user/list", func(r *ghttp.Request) {\n            panic("db error: sql is xxxxxxx")\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,g.jsxs)(r.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,g.jsx)(r.code,{children:"curl"})," \u5de5\u5177\u6765\u8bd5\u8bd5\u5427\uff1a"]}),"\n",(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:"language-bash",children:'$ curl -v "http://127.0.0.1:8199/api.v2/user/list"\n> GET /api.v2/user/list HTTP/1.1\n> Host: 127.0.0.1:8199\n> User-Agent: curl/7.61.1\n> Accept: */*\n>\n< HTTP/1.1 500 Internal Server Error\n< Server: GF HTTP Server\n< Date: Sun, 19 Jul 2020 07:44:30 GMT\n< Content-Length: 52\n< Content-Type: text/plain; charset=utf-8\n<\n\u670d\u52a1\u5668\u5c45\u7136\u5f00\u5c0f\u5dee\u4e86\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u5427\uff01\n'})}),"\n",(0,g.jsx)(r.h2,{id:"\u83b7\u53d6\u5f02\u5e38\u5806\u6808",children:"\u83b7\u53d6\u5f02\u5e38\u5806\u6808"}),"\n",(0,g.jsx)(r.h3,{id:"\u5f02\u5e38\u5806\u6808\u4fe1\u606f",children:"\u5f02\u5e38\u5806\u6808\u4fe1\u606f"}),"\n",(0,g.jsxs)(r.p,{children:[(0,g.jsx)(r.code,{children:"WebServer"})," \u672c\u8eab\u5728\u6355\u83b7\u5f02\u5e38\u65f6\uff0c\u5982\u679c\u629b\u51fa\u7684\u5f02\u5e38\u4fe1\u606f\u5e76\u4e0d\u5305\u542b\u5806\u6808\u5185\u5bb9\uff0c\u90a3\u4e48 ",(0,g.jsx)(r.code,{children:"WebServer"})," \u4f1a\u81ea\u52a8\u83b7\u53d6\u629b\u51fa\u5f02\u5e38\u4f4d\u70b9\uff08\u5373 ",(0,g.jsx)(r.code,{children:"panic"})," \u7684\u4f4d\u7f6e\uff09\u7684\u5806\u6808\u5e76\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5305\u542b\u8be5\u5806\u6808\u4fe1\u606f\u7684\u9519\u8bef\u5bf9\u8c61\u3002\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u793a\u4f8b\u3002"]}),"\n",(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc MiddlewareErrorHandler(r *ghttp.Request) {\n    r.Middleware.Next()\n    if err := r.GetError(); err != nil {\n        r.Response.ClearBuffer()\n        r.Response.Writef("%+v", err)\n    }\n}\n\nfunc main() {\n    s := g.Server()\n    s.Use(MiddlewareErrorHandler)\n    s.Group("/api.v2", func(group *ghttp.RouterGroup) {\n        group.ALL("/user/list", func(r *ghttp.Request) {\n            panic("db error: sql is xxxxxxx")\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,g.jsxs)(r.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,g.jsx)(r.code,{children:"%+v"})," \u7684\u683c\u5f0f\u5316\u6253\u5370\u6765\u83b7\u53d6\u5f02\u5e38\u9519\u8bef\u4e2d\u7684\u5806\u6808\u4fe1\u606f\uff0c\u5177\u4f53\u539f\u7406\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,g.jsx)(r.a,{href:"/en/2.3.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86-%E5%A0%86%E6%A0%88%E7%89%B9%E6%80%A7",children:"\u9519\u8bef\u5904\u7406-\u5806\u6808\u7279\u6027"}),"\u3002\u6267\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,g.jsx)(r.code,{children:"curl"})," \u5de5\u5177\u6765\u6d4b\u8bd5\u4e0b\uff1a"]}),"\n",(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:"language-bash",children:'$ curl "http://127.0.0.1:8199/api.v2/user/list"\ndb error: sql is xxxxxxx\n1. db error: sql is xxxxxxx\n   1).  main.main.func1.1\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:25\n   2).  github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1.8\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:111\n   3).  github.com/gogf/gf/v2/net/ghttp.niceCallFunc\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_func.go:46\n   4).  github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:110\n   5).  github.com/gogf/gf/v2/util/gutil.TryCatch\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/util/gutil/gutil.go:46\n   6).  github.com/gogf/gf/v2/net/ghttp.(*middleware).Next\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:47\n   7).  main.MiddlewareErrorHandler\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:10\n   8).  github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1.9\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:117\n   9).  github.com/gogf/gf/v2/net/ghttp.niceCallFunc\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_func.go:46\n   10). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:116\n   11). github.com/gogf/gf/v2/util/gutil.TryCatch\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/util/gutil/gutil.go:46\n   12). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:47\n   13). github.com/gogf/gf/v2/net/ghttp.(*Server).ServeHTTP\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_server_handler.go:122\n'})}),"\n",(0,g.jsx)(r.h3,{id:"\u9519\u8bef\u5806\u6808\u4fe1\u606f",children:"\u9519\u8bef\u5806\u6808\u4fe1\u606f"}),"\n",(0,g.jsxs)(r.p,{children:["\u5982\u679c\u629b\u51fa\u7684\u5f02\u5e38\u662f\u4e00\u4e2a\u901a\u8fc7 ",(0,g.jsx)(r.code,{children:"gerror"})," \u7ec4\u4ef6\u7684\u9519\u8bef\u5bf9\u8c61\uff0c\u6216\u8005\u5b9e\u73b0\u5806\u6808\u6253\u5370\u63a5\u53e3\u7684\u9519\u8bef\u5bf9\u8c61\uff0c\u7531\u4e8e\u8be5\u5f02\u5e38\u7684\u9519\u8bef\u5bf9\u8c61\u5df2\u7ecf\u5305\u542b\u4e86\u8be6\u7ec6\u7684\u5806\u6808\u4fe1\u606f\uff0c\u90a3\u4e48 ",(0,g.jsx)(r.code,{children:"WebServer"})," \u5c06\u4f1a\u76f4\u63a5\u8fd4\u56de\u8be5\u9519\u8bef\u5bf9\u8c61\uff0c\u4e0d\u4f1a\u81ea\u52a8\u521b\u5efa\u9519\u8bef\u5bf9\u8c61\u3002\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u793a\u4f8b\u3002"]}),"\n",(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/errors/gerror"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc MiddlewareErrorHandler(r *ghttp.Request) {\n    r.Middleware.Next()\n    if err := r.GetError(); err != nil {\n        r.Response.ClearBuffer()\n        r.Response.Writef("%+v", err)\n    }\n}\n\nfunc DbOperation() error {\n    // ...\n    return gerror.New("DbOperation error: sql is xxxxxxx")\n}\n\nfunc UpdateData() {\n    err := DbOperation()\n    if err != nil {\n        panic(gerror.Wrap(err, "UpdateData error"))\n    }\n}\n\nfunc main() {\n    s := g.Server()\n    s.Use(MiddlewareErrorHandler)\n    s.Group("/api.v2", func(group *ghttp.RouterGroup) {\n        group.ALL("/user/list", func(r *ghttp.Request) {\n            UpdateData()\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,g.jsxs)(r.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,g.jsx)(r.code,{children:"curl"})," \u5de5\u5177\u6765\u6d4b\u8bd5\u4e0b\uff1a"]}),"\n",(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:"language-bash",children:'$ curl "http://127.0.0.1:8199/api.v2/user/list"\nUpdateData error: DbOperation error: sql is xxxxxxx\n1. UpdateData error\n   1).  main.UpdateData\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:25\n   2).  main.main.func1.1\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:34\n   3).  github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1.8\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:111\n   4).  github.com/gogf/gf/v2/net/ghttp.niceCallFunc\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_func.go:46\n   5).  github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:110\n   6).  github.com/gogf/gf/v2/util/gutil.TryCatch\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/util/gutil/gutil.go:46\n   7).  github.com/gogf/gf/v2/net/ghttp.(*middleware).Next\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:47\n   8).  main.MiddlewareErrorHandler\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:10\n   9).  github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1.9\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:117\n   10). github.com/gogf/gf/v2/net/ghttp.niceCallFunc\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_func.go:46\n   11). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:116\n   12). github.com/gogf/gf/v2/util/gutil.TryCatch\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/util/gutil/gutil.go:46\n   13). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:47\n   14). github.com/gogf/gf/v2/net/ghttp.(*Server).ServeHTTP\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_server_handler.go:122\n2. DbOperation error: sql is xxxxxxx\n   1).  main.DbOperation\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:19\n   2).  main.UpdateData\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:23\n   3).  main.main.func1.1\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:34\n   4).  github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1.8\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:111\n   5).  github.com/gogf/gf/v2/net/ghttp.niceCallFunc\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_func.go:46\n   6).  github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:110\n   7).  github.com/gogf/gf/v2/util/gutil.TryCatch\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/util/gutil/gutil.go:46\n   8).  github.com/gogf/gf/v2/net/ghttp.(*middleware).Next\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:47\n   9).  main.MiddlewareErrorHandler\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:10\n   10). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1.9\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:117\n   11). github.com/gogf/gf/v2/net/ghttp.niceCallFunc\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_func.go:46\n   12). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next.func1\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:116\n   13). github.com/gogf/gf/v2/util/gutil.TryCatch\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/util/gutil/gutil.go:46\n   14). github.com/gogf/gf/v2/net/ghttp.(*middleware).Next\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_request_middleware.go:47\n   15). github.com/gogf/gf/v2/net/ghttp.(*Server).ServeHTTP\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/net/ghttp/ghttp_server_handler.go:122\n'})})]})}function a(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,g.jsx)(r,{...e,children:(0,g.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var t=n(296540);const g={},o=t.createContext(g);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(g):e.components||g:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);
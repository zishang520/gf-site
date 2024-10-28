"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[68110],{725574:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=r(474848),s=r(28453);const c={title:"\u5f02\u5e38\u5904\u7406",sidebar_position:7},o=void 0,i={id:"WEB\u670d\u52a1\u5f00\u53d1/\u5f02\u5e38\u5904\u7406",title:"\u5f02\u5e38\u5904\u7406",description:"\u7531\u4e8e\u8fd9\u4e2a\u95ee\u9898\u95ee\u5f97\u6bd4\u8f83\u591a\uff0c\u56e0\u6b64\u4e13\u95e8\u4e3a\u5927\u5bb6\u64b0\u5199\u4e86\u8fd9\u4e00\u7ae0\u8282\u3002",source:"@site/versioned_docs/version-1.14.x/3-WEB\u670d\u52a1\u5f00\u53d1/7-\u5f02\u5e38\u5904\u7406.md",sourceDirName:"3-WEB\u670d\u52a1\u5f00\u53d1",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u5f02\u5e38\u5904\u7406",permalink:"/docs/1.14.x/WEB\u670d\u52a1\u5f00\u53d1/\u5f02\u5e38\u5904\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.14.x/3-WEB\u670d\u52a1\u5f00\u53d1/7-\u5f02\u5e38\u5904\u7406.md",tags:[],version:"1.14.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:7,frontMatter:{title:"\u5f02\u5e38\u5904\u7406",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u670d\u52a1\u914d\u7f6e",permalink:"/docs/1.14.x/WEB\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u914d\u7f6e"},next:{title:"HTTPClient",permalink:"/docs/1.14.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/"}},d={},l=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:3},{value:"\u81ea\u5b9a\u4e49\u5f02\u5e38\u5904\u7406",id:"\u81ea\u5b9a\u4e49\u5f02\u5e38\u5904\u7406",level:3},{value:"\u76f8\u5173\u65b9\u6cd5",id:"\u76f8\u5173\u65b9\u6cd5",level:4},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:4}];function a(e){const n={blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u7531\u4e8e\u8fd9\u4e2a\u95ee\u9898\u95ee\u5f97\u6bd4\u8f83\u591a\uff0c\u56e0\u6b64\u4e13\u95e8\u4e3a\u5927\u5bb6\u64b0\u5199\u4e86\u8fd9\u4e00\u7ae0\u8282\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(n.p,{children:["\u76ee\u524d\u5927\u591a\u6570 ",(0,t.jsx)(n.code,{children:"Golang"})," \u7684\u7b2c\u4e09\u65b9 ",(0,t.jsx)(n.code,{children:"WebServer"})," \u5e93\u5747\u6ca1\u6709\u9ed8\u8ba4\u5bf9 ",(0,t.jsx)(n.code,{children:"HTTP"})," \u8bf7\u6c42\u5904\u7406\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u5f02\u5e38\u8fdb\u884c\u6355\u83b7\uff0c\u8f7b\u8005\u9519\u8bef\u4ea7\u751f\u540e\u65e0\u6cd5\u8bb0\u5f55\u5230\u65e5\u5fd7\u9020\u6210\u6392\u67e5\u9519\u56f0\u96be\uff0c\u91cd\u5219\u5f02\u5e38\u9020\u6210\u8fdb\u7a0b\u76f4\u63a5\u5d29\u6e83\uff0c\u670d\u52a1\u4e0d\u53ef\u7528\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5410\u69fd\uff1a\u7531\u4e8e\u4f5c\u8005\u516c\u53f8\u4ea7\u54c1\u4e5f\u6709\u5728\u7528 ",(0,t.jsx)(n.code,{children:"gin"}),"\uff0c\u67d0\u51e0\u6b21\u751f\u4ea7\u4e8b\u6545\u4fbf\u56e0\u4e3a\u5f00\u53d1\u8005\u4e0d\u4e25\u8c28\u7684\u4ee3\u7801 ",(0,t.jsx)(n.code,{children:"panic"})," \u9020\u6210\u8fdb\u7a0b\u5d29\u6e83\u9000\u51fa\u3002\u89e3\u51b3\u65b9\u6848\u662f\u6240\u6709\u76f8\u5173\u9879\u76ee\u5fc5\u987b\u624b\u52a8\u521b\u5efa ",(0,t.jsx)(n.code,{children:"recover"})," \u4e2d\u95f4\u4ef6\u8fdb\u884c\u6355\u83b7\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u4f60\u9009\u62e9 ",(0,t.jsx)(n.code,{children:"gf"}),"\uff0c\u4f60\u5f88\u5e78\u8fd0\u3002\u4e3a\u4fdd\u8bc1\u4e25\u8c28\u6027\uff0c\u6267\u884c\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684 ",(0,t.jsx)(n.code,{children:"panic"})," \u662f\u6709\u88ab ",(0,t.jsx)(n.code,{children:"Server"})," \u81ea\u52a8\u6355\u83b7\u7684\uff0c\u4ea7\u751f ",(0,t.jsx)(n.code,{children:"panic"})," \u65f6\u5f53\u524d\u6267\u884c\u6d41\u7a0b\u4f1a\u7acb\u5373\u4e2d\u6b62\uff0c\u4f46\u662f\u7edd\u5bf9\u4e0d\u4f1a\u5f71\u54cd\u8fdb\u7a0b\u76f4\u63a5\u5d29\u6e83\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49\u5f02\u5e38\u5904\u7406",children:"\u81ea\u5b9a\u4e49\u5f02\u5e38\u5904\u7406"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"HTTP"})," \u6267\u884c\u6d41\u7a0b\u4e2d\u4ea7\u751f ",(0,t.jsx)(n.code,{children:"panic"})," \u5f02\u5e38\u65f6\uff0c\u9ed8\u8ba4\u5904\u7406\u662f\u8bb0\u5f55\u5230 ",(0,t.jsx)(n.code,{children:"Server"})," \u7684\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002\u5f53\u7136\uff0c\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6ce8\u518c\u4e2d\u95f4\u4ef6\u65b9\u5f0f\u624b\u52a8\u6355\u83b7\uff0c\u7136\u540e\u81ea\u5b9a\u4e49\u76f8\u5173\u7684\u9519\u8bef\u5904\u7406\u3002\u8fd9\u4e00\u64cd\u4f5c\u5176\u5b9e\u5728\u4e2d\u95f4\u4ef6\u7ae0\u8282\u7684\u793a\u4f8b\u4e2d\u4e5f\u6709\u4ecb\u7ecd\uff0c\u6211\u4eec\u8fd9\u91cc\u6765\u518d\u4ed4\u7ec6\u8bf4\u660e\u4e0b\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u76f8\u5173\u65b9\u6cd5",children:"\u76f8\u5173\u65b9\u6cd5"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f02\u5e38\u7684\u6355\u83b7\u6211\u4eec\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"Request"})," \u5bf9\u8c61\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"GetError"})," \u65b9\u6cd5\u83b7\u53d6\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// GetError returns the error occurs in the procedure of the request.\n// It returns nil if there's no error.\nfunc (r *Request) GetError() error\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8be5\u65b9\u6cd5\u5f80\u5f80\u4f7f\u7528\u5728\u6d41\u7a0b\u63a7\u5236\u7ec4\u4ef6\u4e2d\uff0c\u5982\u540e\u7f6e\u4e2d\u95f4\u4ef6\u6216\u8005 ",(0,t.jsx)(n.code,{children:"HOOK"})," \u94a9\u5b50\u65b9\u6cd5\u4e2d\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528\u4e00\u4e2a\u5168\u5c40\u7684\u540e\u7f6e\u4e2d\u95f4\u4ef6\u6765\u6355\u83b7\u5f02\u5e38\uff0c\u5f53\u5f02\u5e38\u4ea7\u751f\u540e\uff0c\u6355\u83b7\u5e76\u5199\u5165\u5230\u6307\u5b9a\u7684\u65e5\u5fd7\u6587\u4ef6\u4e2d\uff0c\u8fd4\u56de\u56fa\u5b9a\u53cb\u597d\u7684\u63d0\u793a\u4fe1\u606f\uff0c\u907f\u514d\u654f\u611f\u7684\u62a5\u9519\u4fe1\u606f\u66b4\u9732\u7ed9\u8c03\u7528\u7aef\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5373\u4f7f\u5f00\u53d1\u8005\u6709\u81ea\u5df1\u6355\u83b7\u8bb0\u5f55\u5f02\u5e38\u9519\u8bef\u7684\u65e5\u5fd7\uff0c\u4f46\u662f ",(0,t.jsx)(n.code,{children:"Server"})," \u4f9d\u65e7\u4f1a\u6253\u5370\u5230 ",(0,t.jsx)(n.code,{children:"Server"})," \u81ea\u5df1\u7684\u9519\u8bef\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002\u7531\u5f00\u53d1\u8005\u8c03\u7528\u65e5\u5fd7\u63a5\u53e3\u65b9\u6cd5\u8f93\u51fa\u7684\u65e5\u5fd7\u5c5e\u4e8e\u4e1a\u52a1\u65e5\u5fd7\uff08\u4e0e\u4e1a\u52a1\u76f8\u5173\uff09\uff0c\u800c ",(0,t.jsx)(n.code,{children:"Server "})," \u7ba1\u7406\u7684\u65e5\u5fd7\u5c5e\u4e8e\u670d\u52a1\u65e5\u5fd7\uff08\u7c7b\u4f3c\u4e8e ",(0,t.jsx)(n.code,{children:"nginx"})," \u7684 ",(0,t.jsx)(n.code,{children:"error.log"}),"\uff09\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/gogf/gf/frame/g"\n\t"github.com/gogf/gf/net/ghttp"\n)\n\nfunc MiddlewareErrorHandler(r *ghttp.Request) {\n\tr.Middleware.Next()\n\tif err := r.GetError(); err != nil {\n\t\t// \u8bb0\u5f55\u5230\u81ea\u5b9a\u4e49\u9519\u8bef\u65e5\u5fd7\u6587\u4ef6\n\t\tg.Log("exception").Error(err)\n\t\t//\u8fd4\u56de\u56fa\u5b9a\u7684\u53cb\u597d\u4fe1\u606f\n\t\tr.Response.ClearBuffer()\n\t\tr.Response.Writeln("\u670d\u52a1\u5668\u5c45\u7136\u5f00\u5c0f\u5dee\u4e86\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u5427\uff01")\n\t}\n}\n\nfunc main() {\n\ts := g.Server()\n\ts.Use(MiddlewareErrorHandler)\n\ts.Group("/api.v2", func(group *ghttp.RouterGroup) {\n\t\tgroup.ALL("/user/list", func(r *ghttp.Request) {\n\t\t\tpanic("db error: sql is xxxxxxx")\n\t\t})\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"curl"})," \u5de5\u5177\u6765\u8bd5\u8bd5\u5427\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'$ curl -v "http://127.0.0.1:8199/api.v2/user/list"\n> GET /api.v2/user/list HTTP/1.1\n> Host: 127.0.0.1:8199\n> User-Agent: curl/7.61.1\n> Accept: */*\n>\n< HTTP/1.1 500 Internal Server Error\n< Server: GF HTTP Server\n< Date: Sun, 19 Jul 2020 07:44:30 GMT\n< Content-Length: 52\n< Content-Type: text/plain; charset=utf-8\n<\n\u670d\u52a1\u5668\u5c45\u7136\u5f00\u5c0f\u5dee\u4e86\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u5427\uff01\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(296540);const s={},c=t.createContext(s);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);
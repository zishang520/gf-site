"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[31572],{116114:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u547d\u4ee4\u4ea4\u4e92","title":"Redis-\u547d\u4ee4\u4ea4\u4e92","description":"Do \u65b9\u6cd5","source":"@site/versioned_docs/version-2.5.x/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u547d\u4ee4\u4ea4\u4e92.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis","slug":"/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u547d\u4ee4\u4ea4\u4e92","permalink":"/en/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u547d\u4ee4\u4ea4\u4e92","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u547d\u4ee4\u4ea4\u4e92.md","tags":[],"version":"2.5.x","sidebarPosition":2,"frontMatter":{"title":"Redis-\u547d\u4ee4\u4ea4\u4e92","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"Redis-\u4f7f\u7528\u793a\u4f8b","permalink":"/en/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b"},"next":{"title":"Redis-Conn\u5bf9\u8c61","permalink":"/en/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-Conn\u5bf9\u8c61"}}');var s=r(474848),t=r(28453);const o={title:"Redis-\u547d\u4ee4\u4ea4\u4e92",sidebar_position:2,hide_title:!0},c=void 0,d={},a=[{value:"<code>Do</code> \u65b9\u6cd5",id:"do-\u65b9\u6cd5",level:2},{value:"\u81ea\u52a8\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316",id:"\u81ea\u52a8\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316",level:2},{value:"<code>map</code> \u5b58\u53d6",id:"map-\u5b58\u53d6",level:3},{value:"<code>struct</code> \u5b58\u53d6",id:"struct-\u5b58\u53d6",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h2,{id:"do-\u65b9\u6cd5",children:[(0,s.jsx)(n.code,{children:"Do"})," \u65b9\u6cd5"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Do"})," \u662f\u901a\u7528\u7684\u547d\u4ee4\u4ea4\u4e92\u65b9\u6cd5\uff0c\u6267\u884c\u540c\u6b65\u6307\u4ee4\uff0c\u901a\u8fc7\u5411 ",(0,s.jsx)(n.code,{children:"Redis Server"})," \u53d1\u9001\u5bf9\u5e94\u7684 ",(0,s.jsx)(n.code,{children:"Redis API"})," \u547d\u4ee4\uff0c\u6765\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Redis Server"})," \u7684\u670d\u52a1\u3002 ",(0,s.jsx)(n.code,{children:"Do"})," \u65b9\u6cd5\u6700\u5927\u7684\u7279\u70b9\u662f\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Redis"})," \u547d\u4ee4\u4e0e\u670d\u52a1\u7aef\u4ea4\u4e92\uff0c\u56e0\u6b64\u6269\u5c55\u5f88\u5f3a\uff0c\u6ca1\u6709\u63d0\u4f9b ",(0,s.jsx)(n.code,{children:"Redis"})," \u64cd\u4f5c\u65b9\u6cd5\u7684\u5176\u4ed6\u547d\u4ee4\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"Do"})," \u65b9\u6cd5\u6765\u5b9e\u73b0\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n    )\n    v, _ := g.Redis().Do(ctx, "SET", "k", "v")\n    fmt.Println(v.String())\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u81ea\u52a8\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316",children:"\u81ea\u52a8\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316"}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u7ed9\u5b9a\u7684\u53c2\u6570\u4e3a ",(0,s.jsx)(n.code,{children:"map"}),", ",(0,s.jsx)(n.code,{children:"slice"}),", ",(0,s.jsx)(n.code,{children:"struct"})," \u65f6\uff0c ",(0,s.jsx)(n.code,{children:"gredis"})," \u5185\u90e8\u652f\u6301\u81ea\u52a8\u5bf9\u5176\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"json"})," \u5e8f\u5217\u5316\uff0c\u5e76\u4e14\u8bfb\u53d6\u6570\u636e\u65f6\u53ef\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"gvar.Var"})," \u7684\u8f6c\u6362\u529f\u80fd\u5b9e\u73b0\u53cd\u5e8f\u5217\u5316\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"map-\u5b58\u53d6",children:[(0,s.jsx)(n.code,{children:"map"})," \u5b58\u53d6"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gvar"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        err    error\n        result *gvar.Var\n        key    = "user"\n        data   = g.Map{\n            "id":   10000,\n            "name": "john",\n        }\n    )\n    _, err = g.Redis().Do(ctx, "SET", key, data)\n    if err != nil {\n        panic(err)\n    }\n    result, err = g.Redis().Do(ctx,"GET", key)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(result.Map())\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"struct-\u5b58\u53d6",children:[(0,s.jsx)(n.code,{children:"struct"})," \u5b58\u53d6"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gvar"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    type User struct {\n        Id   int\n        Name string\n    }\n\n    var (\n        ctx = gctx.New()\n        err    error\n        result *gvar.Var\n        key    = "user"\n        user   = g.Map{\n            "id":   10000,\n            "name": "john",\n        }\n    )\n\n    _, err = g.Redis().Do(ctx, "SET", key, user)\n    if err != nil {\n        panic(err)\n    }\n    result, err = g.Redis().Do(ctx, "GET", key)\n    if err != nil {\n        panic(err)\n    }\n\n    var user2 *User\n    if err = result.Struct(&user2); err != nil {\n        panic(err)\n    }\n    fmt.Println(user2.Id, user2.Name)\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var i=r(296540);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);
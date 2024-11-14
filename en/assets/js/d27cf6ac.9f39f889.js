"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[25959],{19181:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>t,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u547d\u4ee4\u4ea4\u4e92","title":"Redis-\u547d\u4ee4\u4ea4\u4e92","description":"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u6784\u5efa\u7684\u5e94\u7528\u4e2d\uff0c\u901a\u8fc7Redis\u547d\u4ee4\u4ea4\u4e92\u4ee5\u53ca\u81ea\u52a8\u5316\u7684\u65b9\u5f0f\u6765\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u6570\u636e\u3002\u9996\u5148\uff0c\u6211\u4eec\u8bb2\u89e3\u4e86Do\u65b9\u6cd5\u7684\u5f3a\u5927\u6269\u5c55\u6027\uff0c\u5b83\u5141\u8bb8\u4efb\u4f55Redis\u547d\u4ee4\u7684\u6267\u884c\u3002\u968f\u540e\u6211\u4eec\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528map\u548cstruct\u6765\u5b58\u53d6\u6570\u636e\uff0c\u5e76\u5229\u7528json\u5e8f\u5217\u5316\u7b80\u5316\u7f16\u7a0b\u3002\u901a\u8fc7GoFrame\u6846\u67b6\u4e0eRedis\u7684\u7ed3\u5408\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u52a0\u9ad8\u6548\u5730\u8fdb\u884c\u6570\u636e\u7ba1\u7406\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u547d\u4ee4\u4ea4\u4e92.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis","slug":"/docs/components/contrib-nosql-redis-do-and-serialization","permalink":"/en/2.7.x/docs/components/contrib-nosql-redis-do-and-serialization","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u547d\u4ee4\u4ea4\u4e92.md","tags":[],"version":"2.7.x","sidebarPosition":2,"frontMatter":{"slug":"/docs/components/contrib-nosql-redis-do-and-serialization","title":"Redis-\u547d\u4ee4\u4ea4\u4e92","sidebar_position":2,"hide_title":true,"keywords":["Redis\u547d\u4ee4\u4ea4\u4e92","Do\u65b9\u6cd5","\u81ea\u52a8\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316","GoFrame\u6846\u67b6","\u7ed3\u6784\u4f53\u5b58\u53d6","map\u5b58\u53d6","gredis\u5e93","json\u5e8f\u5217\u5316","Redis API","Go\u8bed\u8a00"],"description":"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u6784\u5efa\u7684\u5e94\u7528\u4e2d\uff0c\u901a\u8fc7Redis\u547d\u4ee4\u4ea4\u4e92\u4ee5\u53ca\u81ea\u52a8\u5316\u7684\u65b9\u5f0f\u6765\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u6570\u636e\u3002\u9996\u5148\uff0c\u6211\u4eec\u8bb2\u89e3\u4e86Do\u65b9\u6cd5\u7684\u5f3a\u5927\u6269\u5c55\u6027\uff0c\u5b83\u5141\u8bb8\u4efb\u4f55Redis\u547d\u4ee4\u7684\u6267\u884c\u3002\u968f\u540e\u6211\u4eec\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528map\u548cstruct\u6765\u5b58\u53d6\u6570\u636e\uff0c\u5e76\u5229\u7528json\u5e8f\u5217\u5316\u7b80\u5316\u7f16\u7a0b\u3002\u901a\u8fc7GoFrame\u6846\u67b6\u4e0eRedis\u7684\u7ed3\u5408\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u52a0\u9ad8\u6548\u5730\u8fdb\u884c\u6570\u636e\u7ba1\u7406\u3002"},"sidebar":"mainSidebar","previous":{"title":"Redis-\u4f7f\u7528\u793a\u4f8b","permalink":"/en/2.7.x/docs/components/contrib-nosql-redis-example"},"next":{"title":"Redis-Conn\u5bf9\u8c61","permalink":"/en/2.7.x/docs/components/contrib-nosql-redis-conn"}}');var i=r(474848),o=r(28453);const t={slug:"/docs/components/contrib-nosql-redis-do-and-serialization",title:"Redis-\u547d\u4ee4\u4ea4\u4e92",sidebar_position:2,hide_title:!0,keywords:["Redis\u547d\u4ee4\u4ea4\u4e92","Do\u65b9\u6cd5","\u81ea\u52a8\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316","GoFrame\u6846\u67b6","\u7ed3\u6784\u4f53\u5b58\u53d6","map\u5b58\u53d6","gredis\u5e93","json\u5e8f\u5217\u5316","Redis API","Go\u8bed\u8a00"],description:"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u6784\u5efa\u7684\u5e94\u7528\u4e2d\uff0c\u901a\u8fc7Redis\u547d\u4ee4\u4ea4\u4e92\u4ee5\u53ca\u81ea\u52a8\u5316\u7684\u65b9\u5f0f\u6765\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u6570\u636e\u3002\u9996\u5148\uff0c\u6211\u4eec\u8bb2\u89e3\u4e86Do\u65b9\u6cd5\u7684\u5f3a\u5927\u6269\u5c55\u6027\uff0c\u5b83\u5141\u8bb8\u4efb\u4f55Redis\u547d\u4ee4\u7684\u6267\u884c\u3002\u968f\u540e\u6211\u4eec\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528map\u548cstruct\u6765\u5b58\u53d6\u6570\u636e\uff0c\u5e76\u5229\u7528json\u5e8f\u5217\u5316\u7b80\u5316\u7f16\u7a0b\u3002\u901a\u8fc7GoFrame\u6846\u67b6\u4e0eRedis\u7684\u7ed3\u5408\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u52a0\u9ad8\u6548\u5730\u8fdb\u884c\u6570\u636e\u7ba1\u7406\u3002"},d=void 0,c={},a=[{value:"<code>Do</code> \u65b9\u6cd5",id:"do-\u65b9\u6cd5",level:2},{value:"\u81ea\u52a8\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316",id:"\u81ea\u52a8\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316",level:2},{value:"<code>map</code> \u5b58\u53d6",id:"map-\u5b58\u53d6",level:3},{value:"<code>struct</code> \u5b58\u53d6",id:"struct-\u5b58\u53d6",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h2,{id:"do-\u65b9\u6cd5",children:[(0,i.jsx)(n.code,{children:"Do"})," \u65b9\u6cd5"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Do"})," \u662f\u901a\u7528\u7684\u547d\u4ee4\u4ea4\u4e92\u65b9\u6cd5\uff0c\u6267\u884c\u540c\u6b65\u6307\u4ee4\uff0c\u901a\u8fc7\u5411 ",(0,i.jsx)(n.code,{children:"Redis Server"})," \u53d1\u9001\u5bf9\u5e94\u7684 ",(0,i.jsx)(n.code,{children:"Redis API"})," \u547d\u4ee4\uff0c\u6765\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"Redis Server"})," \u7684\u670d\u52a1\u3002 ",(0,i.jsx)(n.code,{children:"Do"})," \u65b9\u6cd5\u6700\u5927\u7684\u7279\u70b9\u662f\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"Redis"})," \u547d\u4ee4\u4e0e\u670d\u52a1\u7aef\u4ea4\u4e92\uff0c\u56e0\u6b64\u6269\u5c55\u5f88\u5f3a\uff0c\u6ca1\u6709\u63d0\u4f9b ",(0,i.jsx)(n.code,{children:"Redis"})," \u64cd\u4f5c\u65b9\u6cd5\u7684\u5176\u4ed6\u547d\u4ee4\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"Do"})," \u65b9\u6cd5\u6765\u5b9e\u73b0\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n    )\n    v, _ := g.Redis().Do(ctx, "SET", "k", "v")\n    fmt.Println(v.String())\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u81ea\u52a8\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316",children:"\u81ea\u52a8\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f53\u7ed9\u5b9a\u7684\u53c2\u6570\u4e3a ",(0,i.jsx)(n.code,{children:"map"}),", ",(0,i.jsx)(n.code,{children:"slice"}),", ",(0,i.jsx)(n.code,{children:"struct"})," \u65f6\uff0c ",(0,i.jsx)(n.code,{children:"gredis"})," \u5185\u90e8\u652f\u6301\u81ea\u52a8\u5bf9\u5176\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"json"})," \u5e8f\u5217\u5316\uff0c\u5e76\u4e14\u8bfb\u53d6\u6570\u636e\u65f6\u53ef\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"gvar.Var"})," \u7684\u8f6c\u6362\u529f\u80fd\u5b9e\u73b0\u53cd\u5e8f\u5217\u5316\u3002"]}),"\n",(0,i.jsxs)(n.h3,{id:"map-\u5b58\u53d6",children:[(0,i.jsx)(n.code,{children:"map"})," \u5b58\u53d6"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gvar"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        err    error\n        result *gvar.Var\n        key    = "user"\n        data   = g.Map{\n            "id":   10000,\n            "name": "john",\n        }\n    )\n    _, err = g.Redis().Do(ctx, "SET", key, data)\n    if err != nil {\n        panic(err)\n    }\n    result, err = g.Redis().Do(ctx,"GET", key)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(result.Map())\n}\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"struct-\u5b58\u53d6",children:[(0,i.jsx)(n.code,{children:"struct"})," \u5b58\u53d6"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gvar"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    type User struct {\n        Id   int\n        Name string\n    }\n\n    var (\n        ctx = gctx.New()\n        err    error\n        result *gvar.Var\n        key    = "user"\n        user   = g.Map{\n            "id":   10000,\n            "name": "john",\n        }\n    )\n\n    _, err = g.Redis().Do(ctx, "SET", key, user)\n    if err != nil {\n        panic(err)\n    }\n    result, err = g.Redis().Do(ctx, "GET", key)\n    if err != nil {\n        panic(err)\n    }\n\n    var user2 *User\n    if err = result.Struct(&user2); err != nil {\n        panic(err)\n    }\n    fmt.Println(user2.Id, user2.Name)\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>d});var s=r(296540);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
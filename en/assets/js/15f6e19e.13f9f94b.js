"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[30189],{352172:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var i=r(474848),t=r(28453);const c={title:"Redis-\u57fa\u672c\u4f7f\u7528",sidebar_position:1,hide_title:!0},s=void 0,o={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u57fa\u672c\u4f7f\u7528",title:"Redis-\u57fa\u672c\u4f7f\u7528",description:"Do \u65b9\u6cd5",source:"@site/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u57fa\u672c\u4f7f\u7528.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/en/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u57fa\u672c\u4f7f\u7528",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u57fa\u672c\u4f7f\u7528.md",tags:[],version:"2.1.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:1,frontMatter:{title:"Redis-\u57fa\u672c\u4f7f\u7528",sidebar_position:1,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Redis-\u914d\u7f6e\u7ba1\u7406",permalink:"/gf-site/en/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406"},next:{title:"Redis-Conn\u5bf9\u8c61",permalink:"/gf-site/en/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Conn\u5bf9\u8c61"}},d={},a=[{value:"<code>Do</code> \u65b9\u6cd5",id:"do-\u65b9\u6cd5",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:3},{value:"<code>HSET/HGETALL</code> \u64cd\u4f5c",id:"hsethgetall-\u64cd\u4f5c",level:3},{value:"<code>HMSET/HMGET</code> \u64cd\u4f5c",id:"hmsethmget-\u64cd\u4f5c",level:3},{value:"\u81ea\u52a8\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316",id:"\u81ea\u52a8\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316",level:2},{value:"<code>map</code> \u5b58\u53d6",id:"map-\u5b58\u53d6",level:3},{value:"<code>struct</code> \u5b58\u53d6",id:"struct-\u5b58\u53d6",level:3}];function g(n){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h2,{id:"do-\u65b9\u6cd5",children:[(0,i.jsx)(e.code,{children:"Do"})," \u65b9\u6cd5"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4eec\u6700\u5e38\u7528\u7684\u662f ",(0,i.jsx)(e.code,{children:"Do"})," \u65b9\u6cd5\uff0c\u6267\u884c\u540c\u6b65\u6307\u4ee4\uff0c\u901a\u8fc7\u5411 ",(0,i.jsx)(e.code,{children:"Redis Server"})," \u53d1\u9001\u5bf9\u5e94\u7684 ",(0,i.jsx)(e.code,{children:"Redis API"})," \u547d\u4ee4\uff0c\u6765\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"Redis Server"})," \u7684\u670d\u52a1\u3002 ",(0,i.jsx)(e.code,{children:"Do"})," \u65b9\u6cd5\u6700\u5927\u7684\u7279\u70b9\u662f\u5185\u90e8\u81ea\u884c\u4ece\u8fde\u63a5\u6c60\u4e2d\u83b7\u53d6\u8fde\u63a5\u5bf9\u8c61\uff0c\u4f7f\u7528\u5b8c\u6bd5\u540e\u81ea\u52a8\u4e22\u56de\u8fde\u63a5\u6c60\u4e2d\uff0c\u5f00\u53d1\u8005\u65e0\u9700\u624b\u52a8\u8c03\u7528 ",(0,i.jsx)(e.code,{children:"Close"})," \u65b9\u6cd5\uff0c\u65b9\u4fbf\u4f7f\u7528\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n    )\n    v, _ := g.Redis().Do(ctx, "SET", "k", "v")\n    fmt.Println(v.String())\n}\n'})}),"\n",(0,i.jsxs)(e.h3,{id:"hsethgetall-\u64cd\u4f5c",children:[(0,i.jsx)(e.code,{children:"HSET/HGETALL"})," \u64cd\u4f5c"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gvar"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        err    error\n        result *gvar.Var\n        key    = "user"\n        ctx = gctx.New()\n    )\n    _, err = g.Redis().Do(ctx, "HSET", key, "id", 10000)\n    if err != nil {\n        panic(err)\n    }\n    _, err = g.Redis().Do(ctx,"HSET", key, "name", "john")\n    if err != nil {\n        panic(err)\n    }\n    result, err = g.Redis().Do(ctx,"HGETALL", key)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(result.Map())\n\n    // May Output:\n    // map[id:10000 name:john]\n}\n'})}),"\n",(0,i.jsxs)(e.h3,{id:"hmsethmget-\u64cd\u4f5c",children:[(0,i.jsx)(e.code,{children:"HMSET/HMGET"})," \u64cd\u4f5c"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"map"})," \u53c2\u6570\u6267\u884c ",(0,i.jsx)(e.code,{children:"HMSET"})," \u64cd\u4f5c\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/util/gutil"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        key  = "user_100"\n        data = g.Map{\n            "name":  "gf",\n            "sex":   0,\n            "score": 100,\n        }\n    )\n    _, err := g.Redis().Do(ctx, "HMSET", append(g.Slice{key}, gutil.MapToSlice(data)...)...)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    v, err := g.Redis().Do(ctx, "HMGET", key, "name")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(v.Slice())\n\n    // May Output:\n    // [gf]\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 `"}),"\n",(0,i.jsx)(e.p,{children:"struct"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"\u53c2\u6570\u6267\u884c"}),"HMSET` \u64cd\u4f5c\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/util/gutil"\n)\n\nfunc main() {\n    type User struct {\n        Name  string `json:"name"`\n        Sex   int    `json:"sex"`\n        Score int    `json:"score"`\n    }\n    var (\n        ctx = gctx.New()\n        key  = "user_100"\n        data = &User{\n            Name:  "gf",\n            Sex:   0,\n            Score: 100,\n        }\n    )\n    _, err := g.Redis().Do(ctx,"HMSET", append(g.Slice{key}, gutil.StructToSlice(data)...)...)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    v, err := g.Redis().Do(ctx,"HMGET", key, "name")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(v.Slice())\n\n    // May Output:\n    // [gf]\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u81ea\u52a8\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316",children:"\u81ea\u52a8\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316"}),"\n",(0,i.jsxs)(e.p,{children:["\u5f53\u7ed9\u5b9a\u7684\u53c2\u6570\u4e3a ",(0,i.jsx)(e.code,{children:"map"}),", ",(0,i.jsx)(e.code,{children:"slice"}),", ",(0,i.jsx)(e.code,{children:"struct"})," \u65f6\uff0c ",(0,i.jsx)(e.code,{children:"gredis"})," \u5185\u90e8\u652f\u6301\u81ea\u52a8\u5bf9\u5176\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"json"})," \u5e8f\u5217\u5316\uff0c\u5e76\u4e14\u8bfb\u53d6\u6570\u636e\u65f6\u53ef\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"gvar.Var"})," \u7684\u8f6c\u6362\u529f\u80fd\u5b9e\u73b0\u53cd\u5e8f\u5217\u5316\u3002"]}),"\n",(0,i.jsxs)(e.h3,{id:"map-\u5b58\u53d6",children:[(0,i.jsx)(e.code,{children:"map"})," \u5b58\u53d6"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gvar"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        err    error\n        result *gvar.Var\n        key    = "user"\n        data   = g.Map{\n            "id":   10000,\n            "name": "john",\n        }\n    )\n    _, err = g.Redis().Do(ctx, "SET", key, data)\n    if err != nil {\n        panic(err)\n    }\n    result, err = g.Redis().Do(ctx,"GET", key)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(result.Map())\n}\n'})}),"\n",(0,i.jsxs)(e.h3,{id:"struct-\u5b58\u53d6",children:[(0,i.jsx)(e.code,{children:"struct"})," \u5b58\u53d6"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gvar"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    type User struct {\n        Id   int\n        Name string\n    }\n\n    var (\n        ctx = gctx.New()\n        err    error\n        result *gvar.Var\n        key    = "user"\n        user   = g.Map{\n            "id":   10000,\n            "name": "john",\n        }\n    )\n\n    _, err = g.Redis().Do(ctx, "SET", key, user)\n    if err != nil {\n        panic(err)\n    }\n    result, err = g.Redis().Do(ctx, "GET", key)\n    if err != nil {\n        panic(err)\n    }\n\n    var user2 *User\n    if err = result.Struct(&user2); err != nil {\n        panic(err)\n    }\n    fmt.Println(user2.Id, user2.Name)\n}\n'})})]})}function l(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(g,{...n})}):g(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>o});var i=r(296540);const t={},c=i.createContext(t);function s(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);
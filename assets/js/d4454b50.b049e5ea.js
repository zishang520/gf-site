"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[5159],{129696:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(474848),r=t(28453);const s={title:"Redis-\u4f7f\u7528\u793a\u4f8b",sidebar_position:1,hide_title:!0},c=void 0,o={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b",title:"Redis-\u4f7f\u7528\u793a\u4f8b",description:"Set/Get \u64cd\u4f5c",source:"@site/versioned_docs/version-2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b",permalink:"/gf-site/docs/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b.md",tags:[],version:"2.4.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:1,frontMatter:{title:"Redis-\u4f7f\u7528\u793a\u4f8b",sidebar_position:1,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Redis-\u914d\u7f6e\u7ba1\u7406",permalink:"/gf-site/docs/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406"},next:{title:"Redis-\u547d\u4ee4\u4ea4\u4e92",permalink:"/gf-site/docs/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u547d\u4ee4\u4ea4\u4e92"}},a={},l=[{value:"<code>Set/Get</code> \u64cd\u4f5c",id:"setget-\u64cd\u4f5c",level:2},{value:"<code>SetEx</code> \u64cd\u4f5c",id:"setex-\u64cd\u4f5c",level:2},{value:"<code>HSet/HGetAll</code> \u64cd\u4f5c",id:"hsethgetall-\u64cd\u4f5c",level:2},{value:"<code>HMSet/HMGet</code> \u64cd\u4f5c",id:"hmsethmget-\u64cd\u4f5c",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h2,{id:"setget-\u64cd\u4f5c",children:[(0,i.jsx)(n.code,{children:"Set/Get"})," \u64cd\u4f5c"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    _, err := g.Redis().Set(ctx, "key", "value")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.String())\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-value"})}),"\n",(0,i.jsxs)(n.h2,{id:"setex-\u64cd\u4f5c",children:[(0,i.jsx)(n.code,{children:"SetEx"})," \u64cd\u4f5c"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    err := g.Redis().SetEX(ctx, "key", "value", 1)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.IsNil())\n    fmt.Println(value.String())\n\n    time.Sleep(time.Second)\n\n    value, err = g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.IsNil())\n    fmt.Println(value.Val())\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-false",children:"value\ntrue\n<nil>\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"hsethgetall-\u64cd\u4f5c",children:[(0,i.jsx)(n.code,{children:"HSet/HGetAll"})," \u64cd\u4f5c"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        key = "key"\n    )\n    _, err := g.Redis().HSet(ctx, key, g.Map{\n        "id":    1,\n        "name":  "john",\n        "score": 100,\n    })\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // retrieve hash map\n    value, err := g.Redis().HGetAll(ctx, key)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.Map())\n\n    // scan to struct\n    type User struct {\n        Id    uint64\n        Name  string\n        Score float64\n    }\n    var user *User\n    if err = value.Scan(&user); err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    g.Dump(user)\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'map[id:1 name:john score:100]\n{\n    Id:    1,\n    Name:  "john",\n    Score: 100,\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"hmsethmget-\u64cd\u4f5c",children:[(0,i.jsx)(n.code,{children:"HMSet/HMGet"})," \u64cd\u4f5c"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        key = "key"\n    )\n    err := g.Redis().HMSet(ctx, key, g.Map{\n        "id":    1,\n        "name":  "john",\n        "score": 100,\n    })\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // retrieve hash map\n    values, err := g.Redis().HMGet(ctx, key, "id", "name")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    g.Dump(values.Strings())\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[\n    "1",\n    "john",\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:"As per Redis 4.0.0, HMSET is considered deprecated. Please use HSET innew code."}),"\n",(0,i.jsx)(n.p,{children:"\u6839\u636eRedis 4.0.0\uff0cHMSET\u88ab\u89c6\u4e3a\u5df2\u5f03\u7528\u3002\u8bf7\u5728\u65b0\u4ee3\u7801\u4e2d\u4f7f\u7528HSET\u3002"})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(296540);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
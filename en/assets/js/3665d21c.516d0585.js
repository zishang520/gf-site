"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[55609],{24851:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var r=t(74848),i=t(28453);const s={slug:"/components/contrib/nosql-redis-example",title:"Redis-\u4f7f\u7528\u793a\u4f8b",sidebar_position:1,hide_title:!0},c=void 0,o={id:"\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b",title:"Redis-\u4f7f\u7528\u793a\u4f8b",description:"Set/Get \u64cd\u4f5c",source:"@site/docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b.md",sourceDirName:"\u7ec4\u4ef6\u5217\u8868/NoSQL Redis",slug:"/components/contrib/nosql-redis-example",permalink:"/gf-site/en/docs/components/contrib/nosql-redis-example",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730376618e3,sidebarPosition:1,frontMatter:{slug:"/components/contrib/nosql-redis-example",title:"Redis-\u4f7f\u7528\u793a\u4f8b",sidebar_position:1,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"Redis-\u914d\u7f6e\u7ba1\u7406",permalink:"/gf-site/en/docs/components/contrib/nosql-redis-config"},next:{title:"Redis-\u547d\u4ee4\u4ea4\u4e92",permalink:"/gf-site/en/docs/components/contrib/nosql/redis/do-and-serialization"}},l={},a=[{value:"<code>Set/Get</code> \u64cd\u4f5c",id:"setget-\u64cd\u4f5c",level:2},{value:"<code>SetEx</code> \u64cd\u4f5c",id:"setex-\u64cd\u4f5c",level:2},{value:"<code>HSet/HGetAll</code> \u64cd\u4f5c",id:"hsethgetall-\u64cd\u4f5c",level:2},{value:"<code>HMSet/HMGet</code> \u64cd\u4f5c",id:"hmsethmget-\u64cd\u4f5c",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"setget-\u64cd\u4f5c",children:[(0,r.jsx)(n.code,{children:"Set/Get"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    _, err := g.Redis().Set(ctx, "key", "value")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.String())\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-value"})}),"\n",(0,r.jsxs)(n.h2,{id:"setex-\u64cd\u4f5c",children:[(0,r.jsx)(n.code,{children:"SetEx"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    err := g.Redis().SetEX(ctx, "key", "value", 1)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.IsNil())\n    fmt.Println(value.String())\n\n    time.Sleep(time.Second)\n\n    value, err = g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.IsNil())\n    fmt.Println(value.Val())\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-false",children:"value\ntrue\n<nil>\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"hsethgetall-\u64cd\u4f5c",children:[(0,r.jsx)(n.code,{children:"HSet/HGetAll"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        key = "key"\n    )\n    _, err := g.Redis().HSet(ctx, key, g.Map{\n        "id":    1,\n        "name":  "john",\n        "score": 100,\n    })\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // retrieve hash map\n    value, err := g.Redis().HGetAll(ctx, key)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.Map())\n\n    // scan to struct\n    type User struct {\n        Id    uint64\n        Name  string\n        Score float64\n    }\n    var user *User\n    if err = value.Scan(&user); err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    g.Dump(user)\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'map[id:1 name:john score:100]\n{\n    Id:    1,\n    Name:  "john",\n    Score: 100,\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"hmsethmget-\u64cd\u4f5c",children:[(0,r.jsx)(n.code,{children:"HMSet/HMGet"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        key = "key"\n    )\n    err := g.Redis().HMSet(ctx, key, g.Map{\n        "id":    1,\n        "name":  "john",\n        "score": 100,\n    })\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // retrieve hash map\n    values, err := g.Redis().HMGet(ctx, key, "id", "name")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    g.Dump(values.Strings())\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[\n    "1",\n    "john",\n]\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"As per Redis 4.0.0, HMSET is considered deprecated. Please use HSET in new code. "})}),"\n",(0,r.jsxs)(n.p,{children:["\u6839\u636e ",(0,r.jsx)(n.code,{children:"Redis 4.0.0"}),"\uff0c ",(0,r.jsx)(n.code,{children:"HMSET"})," \u88ab\u89c6\u4e3a\u5df2\u5f03\u7528\u3002\u8bf7\u5728\u65b0\u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"HSET"}),"\u3002"]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
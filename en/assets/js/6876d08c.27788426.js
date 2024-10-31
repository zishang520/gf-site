"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[16125],{66252:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var r=s(74848),t=s(28453);const d={slug:"/obs/tracing/http-example-with-database",title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c",sidebar_position:1,hide_title:!0},c=void 0,i={id:"\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c",title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c",description:"HTTP+DB+Redis+Logging",source:"@site/docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c.md",sourceDirName:"\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b",slug:"/obs/tracing/http-example-with-database",permalink:"/gf-site/en/docs/obs/tracing/http-example-with-database",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730382718e3,sidebarPosition:1,frontMatter:{slug:"/obs/tracing/http-example-with-database",title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c",sidebar_position:1,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-Baggage",permalink:"/gf-site/en/docs/obs/tracing/http-example-baggage"},next:{title:"\u94fe\u8def\u8ddf\u8e2a-GRPC\u793a\u4f8b",permalink:"/gf-site/en/docs/obs/tracing/grpc-example"}},l={},h=[{value:"<code>HTTP+DB+Redis+Logging</code>",id:"httpdbredislogging",level:2},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:2},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:2},{value:"\u6548\u679c\u67e5\u770b",id:"\u6548\u679c\u67e5\u770b",level:2},{value:"ORM\u94fe\u8def\u4fe1\u606f",id:"orm\u94fe\u8def\u4fe1\u606f",level:3},{value:"Attributes/Tags",id:"attributestags",level:4},{value:"Events/Process",id:"eventsprocess",level:4},{value:"Redis\u94fe\u8def\u4fe1\u606f",id:"redis\u94fe\u8def\u4fe1\u606f",level:3},{value:"Attributes/Tags",id:"attributestags-1",level:4},{value:"Events/Process",id:"eventsprocess-1",level:4}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"httpdbredislogging",children:(0,r.jsx)(n.code,{children:"HTTP+DB+Redis+Logging"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e2a\u76f8\u5bf9\u5b8c\u6574\u4e00\u70b9\u7684\u4f8b\u5b50\uff0c\u5305\u542b\u51e0\u4e2a\u5e38\u7528\u6838\u5fc3\u7ec4\u4ef6\u7684\u94fe\u8def\u8ddf\u8e2a\u793a\u4f8b\uff0c\u793a\u4f8b\u4ee3\u7801\u5730\u5740\uff1a ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/example/trace/http_with_db",children:"https://github.com/gogf/gf/tree/master/example/trace/http_with_db"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u5ba2\u6237\u7aef",children:"\u5ba2\u6237\u7aef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/trace/otlphttp/v2"\n    "github.com/gogf/gf/v2/database/gdb"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/net/gtrace"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nconst (\n    serviceName = "otlp-http-client"\n    endpoint    = "tracing-analysis-dc-hz.aliyuncs.com"\n    path        = "adapt_******_******/api/otlp/traces" )\n\nfunc main() {\n    var ctx = gctx.New()\n    shutdown, err := otlphttp.Init(serviceName, endpoint, path)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    defer shutdown()\n\n    StartRequests()\n}\n\nfunc StartRequests() {\n    ctx, span := gtrace.NewSpan(gctx.New(), "StartRequests")\n    defer span.End()\n\n    var (\n        err    error\n        client = g.Client()\n    )\n    // Add user info.\n    var insertRes = struct {\n        ghttp.DefaultHandlerResponse\n        Data struct{ Id int64 } `json:"data"`\n    }{}\n    err = client.PostVar(ctx, "http://127.0.0.1:8199/user/insert", g.Map{\n        "name": "john",\n    }).Scan(&insertRes)\n    if err != nil {\n        panic(err)\n    }\n    g.Log().Info(ctx, "insert result:", insertRes)\n    if insertRes.Data.Id == 0 {\n        g.Log().Error(ctx, "retrieve empty id string")\n        return\n    }\n\n    // Query user info.\n    var queryRes = struct {\n        ghttp.DefaultHandlerResponse\n        Data struct{ User gdb.Record } `json:"data"`\n    }{}\n    err = client.GetVar(ctx, "http://127.0.0.1:8199/user/query", g.Map{\n        "id": insertRes.Data.Id,\n    }).Scan(&queryRes)\n    if err != nil {\n        panic(err)\n    }\n    g.Log().Info(ctx, "query result:", queryRes)\n\n    // Delete user info.\n    var deleteRes = struct {\n        ghttp.DefaultHandlerResponse\n    }{}\n    err = client.PostVar(ctx, "http://127.0.0.1:8199/user/delete", g.Map{\n        "id": insertRes.Data.Id,\n    }).Scan(&deleteRes)\n    if err != nil {\n        panic(err)\n    }\n    g.Log().Info(ctx, "delete result:", deleteRes)\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u4ee3\u7801\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u9996\u5148\uff0c\u5ba2\u6237\u7aef\u4e5f\u662f\u9700\u8981\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"jaeger.Init"})," \u65b9\u6cd5\u521d\u59cb\u5316 ",(0,r.jsx)(n.code,{children:"Jaeger"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7HTTP\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u53d1\u8d77\u4e86 ",(0,r.jsx)(n.code,{children:"3"})," \u6b21\u8bf7\u6c42\uff1a"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/user/insert"})," \u7528\u4e8e\u65b0\u589e\u4e00\u4e2a\u7528\u6237\u4fe1\u606f\uff0c\u6210\u529f\u540e\u8fd4\u56de\u7528\u6237\u7684ID\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/user/query"})," \u7528\u4e8e\u67e5\u8be2\u7528\u6237\uff0c\u4f7f\u7528\u524d\u4e00\u4e2a\u63a5\u53e3\u8fd4\u56de\u7684\u7528\u6237ID\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/user/delete"})," \u7528\u4e8e\u5220\u9664\u7528\u6237\uff0c\u4f7f\u7528\u4e4b\u524d\u63a5\u53e3\u8fd4\u56de\u7684\u7528\u6237ID\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u670d\u52a1\u7aef",children:"\u670d\u52a1\u7aef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "time"\n\n    "github.com/gogf/gf/contrib/trace/otlphttp/v2"\n    "github.com/gogf/gf/v2/database/gdb"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gcache"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\ntype cTrace struct{}\n\nconst (\n    serviceName = "otlp-http-client"\n    endpoint    = "tracing-analysis-dc-hz.aliyuncs.com"\n    path        = "adapt_******_******/api/otlp/traces" )\n\nfunc main() {\n    var ctx = gctx.New()\n    shutdown, err := otlphttp.Init(serviceName, endpoint, path)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    defer shutdown()\n\n    // Set ORM cache adapter with redis.\n    g.DB().GetCache().SetAdapter(gcache.NewAdapterRedis(g.Redis()))\n\n    // Start HTTP server.\n    s := g.Server()\n    s.Use(ghttp.MiddlewareHandlerResponse)\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/user", new(cTrace))\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n\ntype InsertReq struct {\n    Name string `v:"required#Please input user name."`\n}\ntype InsertRes struct {\n    Id int64\n}\n\n// Insert is a route handler for inserting user info into database.\nfunc (c *cTrace) Insert(ctx context.Context, req *InsertReq) (res *InsertRes, err error) {\n    result, err := g.Model("user").Ctx(ctx).Insert(req)\n    if err != nil {\n        return nil, err\n    }\n    id, _ := result.LastInsertId()\n    res = &InsertRes{\n        Id: id,\n    }\n    return\n}\n\ntype QueryReq struct {\n    Id int `v:"min:1#User id is required for querying"`\n}\ntype QueryRes struct {\n    User gdb.Record\n}\n\n// Query is a route handler for querying user info. It firstly retrieves the info from redis,\n// if there\'s nothing in the redis, it then does db select.\nfunc (c *cTrace) Query(ctx context.Context, req *QueryReq) (res *QueryRes, err error) {\n    one, err := g.Model("user").Ctx(ctx).Cache(gdb.CacheOption{\n        Duration: 5 * time.Second,\n        Name:     c.userCacheKey(req.Id),\n        Force:    false,\n    }).WherePri(req.Id).One()\n    if err != nil {\n        return nil, err\n    }\n    res = &QueryRes{\n        User: one,\n    }\n    return\n}\n\ntype DeleteReq struct {\n    Id int `v:"min:1#User id is required for deleting."`\n}\ntype DeleteRes struct{}\n\n// Delete is a route handler for deleting specified user info.\nfunc (c *cTrace) Delete(ctx context.Context, req *DeleteReq) (res *DeleteRes, err error) {\n    _, err = g.Model("user").Ctx(ctx).Cache(gdb.CacheOption{\n        Duration: -1,\n        Name:     c.userCacheKey(req.Id),\n        Force:    false,\n    }).WherePri(req.Id).Delete()\n    if err != nil {\n        return nil, err\n    }\n    return\n}\n\nfunc (c *cTrace) userCacheKey(id int) string {\n    return fmt.Sprintf(`userInfo:%d`, id)\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u670d\u52a1\u7aef\u4ee3\u7801\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u9996\u5148\uff0c\u5ba2\u6237\u7aef\u4e5f\u662f\u9700\u8981\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"jaeger.Init"})," \u65b9\u6cd5\u521d\u59cb\u5316 ",(0,r.jsx)(n.code,{children:"Jaeger"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u5230\u4e86\u6570\u636e\u5e93\u548c\u6570\u636e\u5e93\u7f13\u5b58\u529f\u80fd\uff0c\u4ee5\u4fbf\u4e8e\u540c\u65f6\u6f14\u793a ",(0,r.jsx)(n.code,{children:"ORM"})," \u548c ",(0,r.jsx)(n.code,{children:"Redis"})," \u7684\u94fe\u8def\u8ddf\u8e2a\u8bb0\u5f55\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6211\u4eec\u5728\u7a0b\u5e8f\u542f\u52a8\u65f6\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u8bbe\u7f6e\u5f53\u524d\u6570\u636e\u5e93\u7f13\u5b58\u7ba1\u7406\u7684\u9002\u914d\u5668\u4e3a ",(0,r.jsx)(n.code,{children:"redis"}),"\u3002\u5173\u4e8e\u7f13\u5b58\u9002\u914d\u5668\u7684\u4ecb\u7ecd\u611f\u5174\u8da3\u53ef\u4ee5\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/gf-site/en/docs/core/gcache/interface",children:"\u7f13\u5b58\u7ba1\u7406-\u63a5\u53e3\u8bbe\u8ba1"})," \u7ae0\u8282\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"g.DB().GetCache().SetAdapter(gcache.NewAdapterRedis(g.Redis()))\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"ORM"})," \u7684\u64cd\u4f5c\u4e2d\uff0c\u9700\u8981\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Ctx"})," \u65b9\u6cd5\u5c06\u4e0a\u4e0b\u6587\u53d8\u91cf\u4f20\u9012\u5230\u7ec4\u4ef6\u4e2d\uff0c ",(0,r.jsx)(n.code,{children:"orm"})," \u7ec4\u4ef6\u4f1a\u81ea\u52a8\u8bc6\u522b\u5f53\u524d\u4e0a\u4e0b\u6587\u4e2d\u662f\u5426\u5305\u542bTracing\u94fe\u8def\u4fe1\u606f\uff0c\u5982\u679c\u5305\u542b\u5219\u81ea\u52a8\u542f\u7528\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"ORM"})," \u7684\u64cd\u4f5c\u4e2d\uff0c\u8fd9\u91cc\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Cache"})," \u65b9\u6cd5\u7f13\u5b58\u67e5\u8be2\u7ed3\u679c\u5230 ",(0,r.jsx)(n.code,{children:"redis"})," \u4e2d\uff0c\u5e76\u5728\u5220\u9664\u64cd\u4f5c\u4e2d\u4e5f\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Cache"})," \u65b9\u6cd5\u6e05\u9664 ",(0,r.jsx)(n.code,{children:"redis"})," \u4e2d\u7684\u7f13\u5b58\u7ed3\u679c\u3002\u5173\u4e8e ",(0,r.jsx)(n.code,{children:"ORM"})," \u7684\u7f13\u5b58\u7ba1\u7406\u4ecb\u7ecd\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/gf-site/en/docs/core/gdb/chaining-query-cache",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u67e5\u8be2\u7f13\u5b58"})," \u7ae0\u8282\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6548\u679c\u67e5\u770b",children:"\u6548\u679c\u67e5\u770b"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u542f\u52a8\u670d\u52a1\u7aef\uff1a"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(3505).A+"",width:"2462",height:"808"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u542f\u52a8\u5ba2\u6237\u7aef\uff1a"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(82019).A+"",width:"1800",height:"254"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"Jaeger"})," \u4e0a\u67e5\u770b\u94fe\u8def\u4fe1\u606f\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(40454).A+"",width:"1918",height:"861"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u8fd9\u6b21\u8bf7\u6c42\u603b\u5171\u4ea7\u751f\u4e86 ",(0,r.jsx)(n.code,{children:"14"})," \u4e2a ",(0,r.jsx)(n.code,{children:"span"}),"\uff0c\u5176\u4e2d\u5ba2\u6237\u7aef\u6709 ",(0,r.jsx)(n.code,{children:"4"})," \u4e2a ",(0,r.jsx)(n.code,{children:"span"}),"\uff0c\u670d\u52a1\u7aef\u6709 ",(0,r.jsx)(n.code,{children:"10"})," \u4e2a ",(0,r.jsx)(n.code,{children:"span"}),"\uff0c\u6bcf\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"span"})," \u4ee3\u8868\u4e00\u4e2a\u94fe\u8def\u8282\u70b9\u3002\u4e0d\u8fc7\uff0c\u6211\u4eec\u6ce8\u610f\u5230\uff0c\u8fd9\u91cc\u4ea7\u751f\u4e86 ",(0,r.jsx)(n.code,{children:"3"})," \u4e2a ",(0,r.jsx)(n.code,{children:"errors"}),"\u3002\u6211\u4eec\u70b9\u51fb\u8be6\u60c5\u67e5\u770b\u4ec0\u4e48\u539f\u56e0\u5462\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(25207).A+"",width:"1915",height:"661"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u770b\u5230\u597d\u50cf\u6240\u6709\u7684 ",(0,r.jsx)(n.code,{children:"redis"})," \u64cd\u4f5c\u90fd\u62a5\u9519\u4e86\uff0c\u968f\u4fbf\u70b9\u51fb\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"redis"})," \u7684\u76f8\u5173 ",(0,r.jsx)(n.code,{children:"span"}),"\uff0c\u67e5\u770b\u4e00\u4e0b\u8be6\u60c5\u5462\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(94840).A+"",width:"1282",height:"939"})}),"\n",(0,r.jsxs)(n.p,{children:["\u539f\u6765\u662f ",(0,r.jsx)(n.code,{children:"redis"})," \u8fde\u63a5\u4e0d\u4e0a\u62a5\u9519\u4e86\uff0c\u8fd9\u6837\u7684\u8bdd\u6240\u6709\u7684 ",(0,r.jsx)(n.code,{children:"orm"})," \u7f13\u5b58\u529f\u80fd\u90fd\u5931\u6548\u4e86\uff0c\u4f46\u662f\u53ef\u4ee5\u770b\u5230\u5e76\u6ca1\u6709\u5f71\u54cd\u63a5\u53e3\u903b\u8f91\uff0c\u53ea\u662f\u6240\u6709\u7684\u67e5\u8be2\u90fd\u8d70\u4e86\u6570\u636e\u5e93\u3002\u8fd9\u4e2a\u62a5\u9519\u662f\u56e0\u4e3a\u6211\u672c\u5730\u5fd8\u4e86\u6253\u5f00 ",(0,r.jsx)(n.code,{children:"redis server"}),"\uff0c\u6211\u8d76\u7d27\u542f\u52a8\u4e00\u4e0b\u672c\u5730\u7684 ",(0,r.jsx)(n.code,{children:"redis server"}),"\uff0c\u518d\u770b\u770b\u6548\u679c\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(68717).A+"",width:"1496",height:"1166"})}),"\n",(0,r.jsxs)(n.p,{children:["\u518d\u628a\u4e0a\u9762\u7684\u5ba2\u6237\u7aef\u8fd0\u884c\u4e00\u4e0b\uff0c\u67e5\u770b ",(0,r.jsx)(n.code,{children:"jaeger"}),"\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(75632).A+"",width:"1786",height:"254"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(81014).A+"",width:"1907",height:"732"})}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\u5c31\u6ca1\u6709\u62a5\u9519\u4e86\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HTTP Client&Server"}),"\u3001 ",(0,r.jsx)(n.code,{children:"Logging"})," \u7ec4\u4ef6\u5728\u4e4b\u524d\u5df2\u7ecf\u4ecb\u7ecd\u8fc7\uff0c\u56e0\u6b64\u8fd9\u91cc\u6211\u4eec\u4e3b\u8981\u5173\u6ce8 ",(0,r.jsx)(n.code,{children:"orm"})," \u548c ",(0,r.jsx)(n.code,{children:"redis"})," \u7ec4\u4ef6\u7684\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"orm\u94fe\u8def\u4fe1\u606f",children:"ORM\u94fe\u8def\u4fe1\u606f"}),"\n",(0,r.jsx)(n.h4,{id:"attributestags",children:"Attributes/Tags"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u968f\u4fbf\u70b9\u5f00\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"ORM"})," \u94fe\u8def ",(0,r.jsx)(n.code,{children:"Span"}),"\uff0c\u770b\u770b ",(0,r.jsx)(n.code,{children:"Attributes/Tags"})," \u4fe1\u606f\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(96239).A+"",width:"1053",height:"774"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u8fd9\u91cc\u7684 ",(0,r.jsx)(n.code,{children:"span.kind"})," \u662f ",(0,r.jsx)(n.code,{children:"internal"}),"\uff0c\u4e5f\u5c31\u662f\u4e4b\u524d\u4ecb\u7ecd\u8fc7\u7684\u65b9\u6cd5\u5185\u90e8 ",(0,r.jsx)(n.code,{children:"span"})," \u7c7b\u578b\u3002\u8fd9\u91cc\u5f88\u591a ",(0,r.jsx)(n.code,{children:"Tags"})," \u5728\u4e4b\u524d\u5df2\u7ecf\u4ecb\u7ecd\u8fc7\uff0c\u56e0\u6b64\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd\u5173\u4e8e\u6570\u636e\u5e93\u76f8\u5173\u7684 ",(0,r.jsx)(n.code,{children:"Tags"}),"\uff1a"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute/Tag"}),(0,r.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<br />                db.type<br />              "})}),(0,r.jsxs)(n.td,{children:["\u6570\u636e\u5e93\u8fde\u63a5\u7c7b\u578b\u3002\u5982 ",(0,r.jsx)(n.code,{children:"mysql"}),", ",(0,r.jsx)(n.code,{children:"mssql"}),", ",(0,r.jsx)(n.code,{children:"pgsql"})," \u7b49\u7b49\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"db.link"})}),(0,r.jsx)(n.td,{children:"\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\u3002\u5176\u4e2d\u5bc6\u7801\u5b57\u6bb5\u88ab\u81ea\u52a8\u9690\u85cf\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"db.group"})}),(0,r.jsx)(n.td,{children:"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u5e93\u5206\u7ec4\u540d\u79f0\u3002"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"eventsprocess",children:"Events/Process"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(73688).A+"",width:"1082",height:"786"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Event/Log"}),(0,r.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"db.execution.sql"})}),(0,r.jsxs)(n.td,{children:["\u6267\u884c\u7684\u5177\u4f53 ",(0,r.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u3002\u7531\u4e8eORM\u5e95\u5c42\u662f\u9884\u5904\u7406\uff0c\u8be5\u8bed\u53e5\u4e3a\u65b9\u4fbf\u67e5\u770b\u81ea\u52a8\u62fc\u63a5\u800c\u6210\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"db.execution.type"})}),(0,r.jsxs)(n.td,{children:["\u6267\u884c\u7684 ",(0,r.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u7c7b\u578b\u3002\u5e38\u89c1\u4e3a ",(0,r.jsx)(n.code,{children:"DB.ExecContext"})," \u548c ",(0,r.jsx)(n.code,{children:"DB.QueryContext"}),"\uff0c\u5206\u522b\u4ee3\u8868\u5199\u64cd\u4f5c\u548c\u8bfb\u64cd\u4f5c\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"db.execution.cost"})}),(0,r.jsxs)(n.td,{children:["\u5f53\u524d ",(0,r.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u6267\u884c\u8017\u65f6\uff0c\u5355\u4f4d\u4e3a ",(0,r.jsx)(n.code,{children:"ms"})," \u6beb\u79d2\u3002"]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"redis\u94fe\u8def\u4fe1\u606f",children:"Redis\u94fe\u8def\u4fe1\u606f"}),"\n",(0,r.jsx)(n.h4,{id:"attributestags-1",children:"Attributes/Tags"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(75543).A+"",width:"1012",height:"776"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute/Tag"}),(0,r.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<br />                redis.host<br />              "})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"Redis"})," \u8fde\u63a5\u5730\u5740\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"redis.port"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"Redis"})," \u8fde\u63a5\u7aef\u53e3\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"redis.db"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"Redis"})," \u64cd\u4f5c ",(0,r.jsx)(n.code,{children:"db"}),"\u3002"]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"eventsprocess-1",children:"Events/Process"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(27692).A+"",width:"883",height:"614"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Event/Log"}),(0,r.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"redis.execution.command"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"Redis"})," \u6267\u884c\u6307\u4ee4\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"redis.execution.arguments"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"Redis"})," \u6267\u884c\u6307\u4ee4\u53c2\u6570\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"redis.execution.cost"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"Redis"})," \u6267\u884c\u6307\u4ee4\u6267\u884c\u8017\u65f6\uff0c\u5355\u4f4d\u4e3a ",(0,r.jsx)(n.code,{children:"ms"})," \u6beb\u79d2\u3002"]})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25207:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/14a27e50c9d458f751a4aca17cb6ecb4-68b789863a81ffb0aea6941526cb6d0f.png"},82019:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/1cdc85405e6cdb92d653df295edf4672-d6e27bc0926b4be4bd043ec69aa6d3fd.png"},94840:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/2c59e1b7feaa7094ae74bdcc987bd6a6-cbb17412f85e973201d3480dd84643bd.png"},27692:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/34139be20f62d27fb0a16fd2edf59031-952a601723b0e677d3405cb15b1f7083.png"},81014:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/405329a1897f8cc0c9cc28aba01505d9-54279cf30c57b38d8e79dc076bfe9751.png"},75632:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/4a9fdf41e5e608907176a5d3e4bfd1ff-d2b682257174dafac01a4e92b9c63d03.png"},73688:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/598498f523ea992f53d3cb58fd51eb64-062d03f749914a6a68aafad22aff094f.png"},40454:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/85c062f73b9254973232ec56fa76e1db-fcfd085a10c35af3c0f6d8c4c576d305.png"},75543:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/b6acd314e55ef431966734940ea867fe-73e7d54cfe0ac002d89ba1149435d3fc.png"},3505:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/da456bb3ba924d8310f8f2a730f6c883-741bd335405b570f2374c26c3b2f06ae.png"},96239:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/dd036ffacb33f3750edce3484387fe30-bea691c589934d33a7cee0a59a53a7cd.png"},68717:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/f43bf06efa5da79a21146d9f6d93ceab-8a5fce2a16b3ce53ddfea8b3a53f5897.png"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(96540);const t={},d=r.createContext(t);function c(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);
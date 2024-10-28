"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[53003],{836812:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=r(474848),s=r(28453);const c={title:"\u94fe\u8def\u8ddf\u8e2a-GRPC\u793a\u4f8b",sidebar_position:4},d=void 0,i={id:"\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-GRPC\u793a\u4f8b",title:"\u94fe\u8def\u8ddf\u8e2a-GRPC\u793a\u4f8b",description:"\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4e4b\u524d\u4ecb\u7ecd HTTP Client&Server \u7684\u793a\u4f8b\u4fee\u6539\u4e3a GRPC \u5fae\u670d\u52a1\uff0c\u5e76\u6f14\u793a\u5982\u4f55\u4f7f\u7528 GoFrame \u6846\u67b6\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684 GRPC \u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\uff0c\u5e76\u4e14\u4e3a GRPC \u5fae\u670d\u52a1\u589e\u52a0\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\u3002",source:"@site/versioned_docs/version-2.3.x/3-\u5fae\u670d\u52a1\u5f00\u53d1/8-\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/4-\u94fe\u8def\u8ddf\u8e2a-GRPC\u793a\u4f8b.md",sourceDirName:"3-\u5fae\u670d\u52a1\u5f00\u53d1/8-\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a",slug:"/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-GRPC\u793a\u4f8b",permalink:"/docs/2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-GRPC\u793a\u4f8b",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/3-\u5fae\u670d\u52a1\u5f00\u53d1/8-\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/4-\u94fe\u8def\u8ddf\u8e2a-GRPC\u793a\u4f8b.md",tags:[],version:"2.3.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:4,frontMatter:{title:"\u94fe\u8def\u8ddf\u8e2a-GRPC\u793a\u4f8b",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c",permalink:"/docs/2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c"},next:{title:"\u94fe\u8def\u8ddf\u8e2a-\u6700\u4f73\u5b9e\u8df5",permalink:"/docs/2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-\u6700\u4f73\u5b9e\u8df5/"}},o={},l=[{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"Protobuf",id:"protobuf",level:2},{value:"GRPC Server",id:"grpc-server",level:2},{value:"GRPC Client",id:"grpc-client",level:2},{value:"\u6548\u679c\u67e5\u770b",id:"\u6548\u679c\u67e5\u770b",level:2},{value:"GRPC Client",id:"grpc-client-1",level:3},{value:"Attributes",id:"attributes",level:4},{value:"Events/Logs",id:"eventslogs",level:4},{value:"GRPC Server",id:"grpc-server-1",level:3},{value:"Attributes",id:"attributes-1",level:4},{value:"Events",id:"events",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4e4b\u524d\u4ecb\u7ecd ",(0,t.jsx)(n.code,{children:"HTTP Client&Server"})," \u7684\u793a\u4f8b\u4fee\u6539\u4e3a ",(0,t.jsx)(n.code,{children:"GRPC"})," \u5fae\u670d\u52a1\uff0c\u5e76\u6f14\u793a\u5982\u4f55\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,t.jsx)(n.code,{children:"GRPC"})," \u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\uff0c\u5e76\u4e14\u4e3a ",(0,t.jsx)(n.code,{children:"GRPC"})," \u5fae\u670d\u52a1\u589e\u52a0\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u672c\u7ae0\u8282\u7684\u793a\u4f8b\u4ee3\u7801\u4f4d\u4e8e\uff1a ",(0,t.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/example/trace/grpc_with_db",children:"https://github.com/gogf/gf/tree/master/example/trace/grpc_with_db"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u76ee\u5f55\u7ed3\u6784",children:"\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(785706).A+"",width:"786",height:"1178"})}),"\n",(0,t.jsx)(n.h2,{id:"protobuf",children:"Protobuf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'syntax = "proto3";\n\npackage user;\n\noption go_package = "protobuf/user";\n\n// User service for tracing demo.\nservice User {\n  rpc Insert(InsertReq) returns (InsertRes) {}\n  rpc Query(QueryReq) returns (QueryRes) {}\n  rpc Delete(DeleteReq) returns (DeleteRes) {}\n}\n\nmessage InsertReq {\n  string Name = 1; // v: required#Please input user name.\n}\nmessage InsertRes {\n  int32 Id = 1;\n}\n\nmessage QueryReq {\n  int32 Id = 1; // v: min:1#User id is required for querying.\n}\nmessage QueryRes {\n  int32  Id = 1;\n  string Name = 2;\n}\n\nmessage DeleteReq {\n  int32 Id = 1; // v:min:1#User id is required for deleting.\n}\nmessage DeleteRes {}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"gf gen pb"})," \u547d\u4ee4\u7f16\u8bd1\u8be5 ",(0,t.jsx)(n.code,{children:"proto"})," \u6587\u4ef6\uff0c\u5c06\u4f1a\u751f\u6210\u5bf9\u5e94\u7684 ",(0,t.jsx)(n.code,{children:"grpc"})," \u63a5\u53e3\u6587\u4ef6\u548c\u6570\u636e\u7ed3\u6784\u6587\u4ef6\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"grpc-server",children:"GRPC Server"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'package main\n\nimport (\n\t_ "github.com/gogf/gf/contrib/drivers/mysql/v2"\n\t_ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\t"github.com/gogf/gf/contrib/registry/etcd/v2"\n\t"github.com/gogf/gf/example/trace/grpc_with_db/protobuf/user"\n\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/gogf/gf/contrib/rpc/grpcx/v2"\n\t"github.com/gogf/gf/contrib/trace/jaeger/v2"\n\t"github.com/gogf/gf/v2/database/gdb"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gcache"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\ntype Controller struct {\n\tuser.UnimplementedUserServer\n}\n\nconst (\n\tServiceName       = "grpc-server-with-db"\n\tJaegerUdpEndpoint = "localhost:6831"\n)\n\nfunc main() {\n\tgrpcx.Resolver.Register(etcd.New("127.0.0.1:2379"))\n\n\tvar ctx = gctx.New()\n\ttp, err := jaeger.Init(ServiceName, JaegerUdpEndpoint)\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tdefer tp.Shutdown(ctx)\n\n\t// Set ORM cache adapter with redis.\n\tg.DB().GetCache().SetAdapter(gcache.NewAdapterRedis(g.Redis()))\n\n\ts := grpcx.Server.New()\n\tuser.RegisterUserServer(s.Server, &Controller{})\n\ts.Run()\n}\n\n// Insert is a route handler for inserting user info into database.\nfunc (s *Controller) Insert(ctx context.Context, req *user.InsertReq) (res *user.InsertRes, err error) {\n\tresult, err := g.Model("user").Ctx(ctx).Insert(g.Map{\n\t\t"name": req.Name,\n\t})\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\tid, _ := result.LastInsertId()\n\tres = &user.InsertRes{\n\t\tId: int32(id),\n\t}\n\treturn\n}\n\n// Query is a route handler for querying user info. It firstly retrieves the info from redis,\n// if there\'s nothing in the redis, it then does db select.\nfunc (s *Controller) Query(ctx context.Context, req *user.QueryReq) (res *user.QueryRes, err error) {\n\terr = g.Model("user").Ctx(ctx).Cache(gdb.CacheOption{\n\t\tDuration: 5 * time.Second,\n\t\tName:     s.userCacheKey(req.Id),\n\t\tForce:    false,\n\t}).WherePri(req.Id).Scan(&res)\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\treturn\n}\n\n// Delete is a route handler for deleting specified user info.\nfunc (s *Controller) Delete(ctx context.Context, req *user.DeleteReq) (res *user.DeleteRes, err error) {\n\terr = g.Model("user").Ctx(ctx).Cache(gdb.CacheOption{\n\t\tDuration: -1,\n\t\tName:     s.userCacheKey(req.Id),\n\t\tForce:    false,\n\t}).WherePri(req.Id).Scan(&res)\n\treturn\n}\n\nfunc (s *Controller) userCacheKey(id int32) string {\n\treturn fmt.Sprintf(`userInfo:%d`, id)\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u670d\u52a1\u7aef\u4ee3\u7801\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.p,{children:["1\u3001\u9996\u5148\uff0c\u670d\u52a1\u7aef\u9700\u8981\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"jaeger.Init"})," \u65b9\u6cd5\u521d\u59cb\u5316 ",(0,t.jsx)(n.code,{children:"Jaeger"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"2\u3001\u53ef\u4ee5\u770b\u5230\uff0c\u4e1a\u52a1\u903b\u8f91\u548c\u4e4b\u524dHTTP\u793a\u4f8b\u9879\u76ee\u5b8c\u5168\u4e00\u81f4\uff0c\u53ea\u662f\u63a5\u5165\u5c42\u4fee\u6539\u4e3a\u4e86GRPC\u534f\u8bae\u3002"}),"\n",(0,t.jsx)(n.p,{children:"3\u3001\u6211\u4eec\u4ecd\u7136\u901a\u8fc7\u7f13\u5b58\u9002\u914d\u5668\u7684\u65b9\u5f0f\u6ce8\u5165Redis\u7f13\u5b58\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"g.DB().GetCache().SetAdapter(gcache.NewAdapterRedis(g.Redis()))\n"})}),"\n",(0,t.jsxs)(n.p,{children:["5\u3001\u8fd9\u91cc\u4e5f\u662f\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"Cache"})," \u65b9\u6cd5\u542f\u7528 ",(0,t.jsx)(n.code,{children:"ORM"})," \u7684\u7f13\u5b58\u7279\u6027\uff0c\u4e4b\u524d\u5df2\u7ecf\u505a\u8fc7\u4ecb\u7ecd\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"grpc-client",children:"GRPC Client"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/contrib/registry/etcd/v2"\n\t"github.com/gogf/gf/contrib/rpc/grpcx/v2"\n\t"github.com/gogf/gf/contrib/trace/jaeger/v2"\n\t"github.com/gogf/gf/example/trace/grpc_with_db/protobuf/user"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/gtrace"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nconst (\n\tServiceName       = "grpc-client-with-db"\n\tJaegerUdpEndpoint = "localhost:6831"\n)\n\nfunc main() {\n\tgrpcx.Resolver.Register(etcd.New("127.0.0.1:2379"))\n\n\tvar ctx = gctx.New()\n\ttp, err := jaeger.Init(ServiceName, JaegerUdpEndpoint)\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tdefer tp.Shutdown(ctx)\n\n\tStartRequests()\n}\n\nfunc StartRequests() {\n\tctx, span := gtrace.NewSpan(gctx.New(), "StartRequests")\n\tdefer span.End()\n\n\tclient := user.NewUserClient(grpcx.Client.MustNewGrpcClientConn("demo"))\n\n\t// Baggage.\n\tctx = gtrace.SetBaggageValue(ctx, "uid", 100)\n\n\t// Insert.\n\tinsertRes, err := client.Insert(ctx, &user.InsertReq{\n\t\tName: "john",\n\t})\n\tif err != nil {\n\t\tg.Log().Fatalf(ctx, `%+v`, err)\n\t}\n\tg.Log().Info(ctx, "insert id:", insertRes.Id)\n\n\t// Query.\n\tqueryRes, err := client.Query(ctx, &user.QueryReq{\n\t\tId: insertRes.Id,\n\t})\n\tif err != nil {\n\t\tg.Log().Errorf(ctx, `%+v`, err)\n\t\treturn\n\t}\n\tg.Log().Info(ctx, "query result:", queryRes)\n\n\t// Delete.\n\t_, err = client.Delete(ctx, &user.DeleteReq{\n\t\tId: insertRes.Id,\n\t})\n\tif err != nil {\n\t\tg.Log().Errorf(ctx, `%+v`, err)\n\t\treturn\n\t}\n\tg.Log().Info(ctx, "delete id:", insertRes.Id)\n\n\t// Delete with error.\n\t_, err = client.Delete(ctx, &user.DeleteReq{\n\t\tId: -1,\n\t})\n\tif err != nil {\n\t\tg.Log().Errorf(ctx, `%+v`, err)\n\t\treturn\n\t}\n\tg.Log().Info(ctx, "delete id:", -1)\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u4ee3\u7801\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.p,{children:["1\u3001\u9996\u5148\uff0c\u5ba2\u6237\u7aef\u4e5f\u662f\u9700\u8981\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"jaeger.Init"})," \u65b9\u6cd5\u521d\u59cb\u5316 ",(0,t.jsx)(n.code,{children:"Jaeger"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["2\u3001\u5ba2\u6237\u7aef\u975e\u5e38\u7b80\u5355\uff0c\u5185\u90e8\u521d\u59cb\u5316\u4ee5\u53ca\u9ed8\u8ba4\u62e6\u622a\u5668\u7684\u8bbe\u7f6e\u5df2\u7ecf\u7531 ",(0,t.jsx)(n.code,{children:"Katyusha"})," \u6846\u67b6\u5c01\u88c5\u597d\u4e86\uff0c\u5f00\u53d1\u8005\u53ea\u9700\u8981\u5173\u5fc3\u4e1a\u52a1\u903b\u8f91\u5b9e\u73b0\u5373\u53ef\uff0c"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6548\u679c\u67e5\u770b",children:"\u6548\u679c\u67e5\u770b"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u542f\u52a8\u670d\u52a1\u7aef\uff1a"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(83532).A+"",width:"2460",height:"332"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u542f\u52a8\u5ba2\u6237\u7aef\uff1a"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(173098).A+"",width:"2606",height:"958"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u5ba2\u6237\u7aef\u7684\u6267\u884c\u6700\u540e\u62a5\u4e86\u4e00\u4e2a\u9519\u8bef\uff0c\u90a3\u662f\u6211\u4eec ",(0,t.jsx)(n.strong,{children:"\u6545\u610f\u4e3a\u4e4b"}),"\uff0c\u76ee\u7684\u662f\u6f14\u793a ",(0,t.jsx)(n.code,{children:"GRPC"})," \u62a5\u9519\u65f6\u7684\u94fe\u8def\u4fe1\u606f\u5c55\u793a\u3002\u6211\u4eec\u6253\u5f00 ",(0,t.jsx)(n.code,{children:"jaeger"})," \u67e5\u770b\u4e00\u4e0b\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(605372).A+"",width:"1914",height:"855"})}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u672c\u6b21\u8bf7\u6c42\u6d89\u53ca\u5230\u4e24\u4e2a\u670d\u52a1\uff1a ",(0,t.jsx)(n.code,{children:"tracing-grpc-client"})," \u548c ",(0,t.jsx)(n.code,{children:"tracing-grpc-server"}),"\uff0c\u5373\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u3002\u6574\u4e2a\u8bf7\u6c42\u94fe\u8def\u6d89\u53ca\u5230 ",(0,t.jsx)(n.code,{children:"17"})," \u4e2a ",(0,t.jsx)(n.code,{children:"span"}),"\uff0c\u5ba2\u6237\u7aef ",(0,t.jsx)(n.code,{children:"5"})," \u4e2a ",(0,t.jsx)(n.code,{children:"span"}),"\uff0c\u670d\u52a1\u7aef ",(0,t.jsx)(n.code,{children:"12"})," \u4e2a ",(0,t.jsx)(n.code,{children:"span"}),"\uff0c\u5e76\u4e14\u4ea7\u751f\u4e86 ",(0,t.jsx)(n.code,{children:"2"})," \u4e2a\u9519\u8bef\u3002\u6211\u4eec\u70b9\u51fb\u67e5\u770b\u8be6\u60c5\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(200908).A+"",width:"1914",height:"744"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u70b9\u51fb\u67e5\u770b\u4e00\u4e0b\u6700\u540e\u63a5\u53e3\u8c03\u7528\u9519\u8bef\u7684 ",(0,t.jsx)(n.code,{children:"span"})," \u60c5\u51b5\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(484559).A+"",width:"1075",height:"784"})}),"\n",(0,t.jsxs)(n.p,{children:["\u770b\u8d77\u6765\u50cf\u4e2a\u53c2\u6570\u6821\u9a8c\u9519\u8bef\uff0c\u70b9\u51fb\u67e5\u770b ",(0,t.jsx)(n.code,{children:"Events/Logs"})," \u4e2d\u7684\u8bf7\u6c42\u53c2\u6570\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(303785).A+"",width:"1295",height:"767"})}),"\n",(0,t.jsxs)(n.p,{children:["\u67e5\u770b ",(0,t.jsx)(n.code,{children:"Process"})," \u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"Log"})," \u4fe1\u606f\u53ef\u4ee5\u770b\u5230\uff0c\u662f\u7531\u4e8e\u4f20\u9012\u7684\u53c2\u6570\u4e3a ",(0,t.jsx)(n.code,{children:"-1"}),"\uff0c\u4e0d\u6ee1\u8db3\u6821\u9a8c\u89c4\u5219\uff0c\u56e0\u6b64\u5728\u6570\u636e\u6821\u9a8c\u7684\u65f6\u5019\u62a5\u9519\u8fd4\u56de\u4e86\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"grpc-client-1",children:"GRPC Client"}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,t.jsx)(n.code,{children:"orm"}),"\u3001 ",(0,t.jsx)(n.code,{children:"redis"}),"\u3001 ",(0,t.jsx)(n.code,{children:"logging"})," \u7ec4\u4ef6\u5728\u4e4b\u524d\u7684\u7ae0\u8282\u4e2d\u5df2\u7ecf\u4ecb\u7ecd\u8fc7\u94fe\u8def\u4fe1\u606f\uff0c\u56e0\u6b64\u6211\u4eec\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd ",(0,t.jsx)(n.code,{children:"GRPC Client&Server"})," \u7684\u94fe\u8def\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"attributes",children:"Attributes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(264293).A+"",width:"1125",height:"785"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute/Tag"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"net.peer.ip"})}),(0,t.jsx)(n.td,{children:"\u8bf7\u6c42\u7684\u76ee\u6807IP\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"net.peer.port"})}),(0,t.jsx)(n.td,{children:"\u8bf7\u6c42\u7684\u76ee\u6807\u7aef\u53e3\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rpc.grpc.status_code"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"GRPC"})," \u7684\u5185\u90e8\u72b6\u6001\u7801\uff0c ",(0,t.jsx)(n.code,{children:"0"})," \u8868\u793a\u6210\u529f\uff0c ",(0,t.jsx)(n.code,{children:"\u975e0"})," \u8868\u793a\u5931\u8d25\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rpc.service"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"RPC"})," \u7684\u670d\u52a1\u540d\u79f0\uff0c\u6ce8\u610f\u8fd9\u91cc\u662f ",(0,t.jsx)(n.code,{children:"RPC"})," \u800c\u4e0d\u662f ",(0,t.jsx)(n.code,{children:"GRPC"}),"\uff0c\u56e0\u4e3a\u8fd9\u91cc\u662f\u901a\u7528\u5b9a\u4e49\uff0c\u5ba2\u6237\u7aef\u652f\u6301\u591a\u79cd ",(0,t.jsx)(n.code,{children:"RPC"})," \u901a\u4fe1\u534f\u8bae\uff0c ",(0,t.jsx)(n.code,{children:"GRPC"})," \u53ea\u662f\u5176\u4e2d\u4e00\u79cd\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rpc.method"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"RPC"})," \u7684\u65b9\u6cd5\u540d\u79f0\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rpc.system"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"RPC"})," \u534f\u8bae\u7c7b\u578b\uff0c\u5982\uff1a ",(0,t.jsx)(n.code,{children:"grpc"}),", ",(0,t.jsx)(n.code,{children:"thrift"})," \u7b49\u3002"]})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"eventslogs",children:"Events/Logs"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(445898).A+"",width:"1279",height:"782"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Event/Log"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"grpc.metadata.outgoing"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"GRPC"})," \u5ba2\u6237\u7aef\u8bf7\u6c42\u63d0\u4ea4\u7684 ",(0,t.jsx)(n.code,{children:"Metadata"})," \u4fe1\u606f\uff0c\u53ef\u80fd\u4f1a\u6bd4\u8f83\u5927\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"grpc.request.baggage"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"GRPC"})," \u5ba2\u6237\u7aef\u8bf7\u6c42\u63d0\u4ea4\u7684 ",(0,t.jsx)(n.code,{children:"Baggage"})," \u4fe1\u606f\uff0c\u7528\u4e8e\u670d\u52a1\u95f4\u94fe\u8def\u4fe1\u606f\u4f20\u9012\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"grpc.request.message"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"GRPC"})," \u5ba2\u6237\u7aef\u8bf7\u6c42\u63d0\u4ea4\u7684 ",(0,t.jsx)(n.code,{children:"Message"})," \u6570\u636e\uff0c\u53ef\u80fd\u4f1a\u6bd4\u8f83\u5927\uff0c\u6700\u5927\u53ea\u8bb0\u5f55 ",(0,t.jsx)(n.code,{children:"512KB"}),"\uff0c\u5982\u679c\u8d85\u8fc7\u8be5\u5927\u5c0f\u5219\u5ffd\u7565\u3002\u4ec5\u5bf9 ",(0,t.jsx)(n.code,{children:"Unary"})," \u8bf7\u6c42\u7c7b\u578b\u6709\u6548\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"grpc.response.message"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"GRPC"})," \u5ba2\u6237\u7aef\u8bf7\u6c42\u63a5\u6536\u8fd4\u56de\u7684\u7684 ",(0,t.jsx)(n.code,{children:"Message"})," \u4fe1\u606f\uff0c\u53ef\u80fd\u4f1a\u6bd4\u8f83\u5927\u3002\u4ec5\u5bf9 ",(0,t.jsx)(n.code,{children:"Unary"})," \u8bf7\u6c42\u7c7b\u578b\u6709\u6548\u3002"]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"grpc-server-1",children:"GRPC Server"}),"\n",(0,t.jsx)(n.h4,{id:"attributes-1",children:"Attributes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(528772).A+"",width:"1080",height:"778"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GRPC Server"})," \u7aef\u7684 ",(0,t.jsx)(n.code,{children:"Attributes"})," \u542b\u4e49\u540c ",(0,t.jsx)(n.code,{children:"GRPC Client"}),"\uff0c\u5728\u540c\u4e00\u8bf7\u6c42\u4e2d\uff0c\u6253\u5370\u7684\u6570\u636e\u57fa\u672c\u4e00\u81f4\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"events",children:"Events"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(236150).A+"",width:"1277",height:"773"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GRPC Server"})," \u7aef\u7684 ",(0,t.jsx)(n.code,{children:"Events"})," \u4e0e ",(0,t.jsx)(n.code,{children:"GRPC Client"})," \u4e0d\u540c\u7684\u662f\uff0c\u5728\u540c\u4e00\u8bf7\u6c42\u4e2d\uff0c\u670d\u52a1\u7aef\u63a5\u6536\u5230\u7684 ",(0,t.jsx)(n.code,{children:"metadata"})," \u4e3a ",(0,t.jsx)(n.code,{children:"grpc.metadata.incoming"}),"\uff0c\u5176\u4ed6\u540c ",(0,t.jsx)(n.code,{children:"GRPC Client"}),"\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},173098:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/146b64bc1baa584c01fcd62a309c9562-97bdb6eacc37e73fd29679c606c39d33.png"},484559:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/17a21139ccb4b2fd850b544c1a410a6f-94fc8e15f0d06a9f6052f224b3ad1460.png"},528772:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/17f8f80c0914ed0fa00f4ad5a92fde89-05ed17d69d6196e4e57a1c553a0ed93a.png"},785706:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/3e5e4fe7010f9a06a94899821d54bbb2-2ea6e8efc1c974ac5ce68f26b697c95a.png"},200908:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/6fd332c98ea4730b9ea1e5cf91e20986-7bbb6da2f414799be534866f9905c2ec.png"},605372:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/7f3f7d82d00cf965e1687732c8fd3088-0669d745ca35550a4d569052dad20229.png"},83532:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/af81594f36b13507f00798a2bb27a218-33622e5880bb89478194538ef8da3a98.png"},445898:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/bccf8012f9ddd11bfe652952cfb67a8d-b98e306c04a82995c39d0bdddb329ff1.png"},264293:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/d0f801e75ab1bb14a1cbf0b44c23525b-4c3f28e0dfaeaf50358dae8777b037e3.png"},303785:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/e72cb2ed5f33e8b1c3b8634777fdfeb8-ca14b58ed821a3be254208126eeb64bb.png"},236150:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/f04e79b4cedeaf7c1a53abe74b52602b-22f82e3f5b019f8552a7006311b0dc90.png"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var t=r(296540);const s={},c=t.createContext(s);function d(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);
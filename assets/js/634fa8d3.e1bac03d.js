"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[10199],{322176:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>i});const o=JSON.parse('{"id":"docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u8d1f\u8f7d\u5747\u8861","title":"\u670d\u52a1\u8d1f\u8f7d\u5747\u8861","description":"GoFrame\u6846\u67b6\u4e2d\u7684\u8d1f\u8f7d\u5747\u8861\u7ec4\u4ef6\uff0cgsel\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u591a\u79cd\u5185\u7f6e\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u5305\u62ecLeastConnection\u3001Random\u3001RoundRobin\u548cWeight\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684\u7b56\u7565\u6216\u81ea\u5b9a\u4e49\u5b9e\u73b0\uff0c\u5e76\u901a\u8fc7HTTP\u548cGRPC\u793a\u4f8b\u5c55\u793a\u4e86\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u7684\u5b9e\u9645\u5e94\u7528\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u8d1f\u8f7d\u5747\u8861.md","sourceDirName":"docs/\u5fae\u670d\u52a1\u5f00\u53d1","slug":"/docs/micro-service/load-balance","permalink":"/2.7.x/docs/micro-service/load-balance","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u8d1f\u8f7d\u5747\u8861.md","tags":[],"version":"2.7.x","sidebarPosition":6,"frontMatter":{"slug":"/docs/micro-service/load-balance","title":"\u670d\u52a1\u8d1f\u8f7d\u5747\u8861","sidebar_position":6,"hide_title":true,"keywords":["\u8d1f\u8f7d\u5747\u8861","GoFrame","gsel\u7ec4\u4ef6","LeastConnection","Random","RoundRobin","Weight","HTTP\u670d\u52a1","GRPC\u670d\u52a1","\u81ea\u5b9a\u4e49\u7b56\u7565"],"description":"GoFrame\u6846\u67b6\u4e2d\u7684\u8d1f\u8f7d\u5747\u8861\u7ec4\u4ef6\uff0cgsel\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u591a\u79cd\u5185\u7f6e\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u5305\u62ecLeastConnection\u3001Random\u3001RoundRobin\u548cWeight\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684\u7b56\u7565\u6216\u81ea\u5b9a\u4e49\u5b9e\u73b0\uff0c\u5e76\u901a\u8fc7HTTP\u548cGRPC\u793a\u4f8b\u5c55\u793a\u4e86\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u7684\u5b9e\u9645\u5e94\u7528\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u670d\u52a1\u6ce8\u518c\u53d1\u73b0","permalink":"/2.7.x/docs/micro-service/registry-discovery"},"next":{"title":"\u670d\u52a1\u914d\u7f6e\u7ba1\u7406","permalink":"/2.7.x/docs/micro-service/config-service"}}');var d=r(474848),c=r(28453);const s={slug:"/docs/micro-service/load-balance",title:"\u670d\u52a1\u8d1f\u8f7d\u5747\u8861",sidebar_position:6,hide_title:!0,keywords:["\u8d1f\u8f7d\u5747\u8861","GoFrame","gsel\u7ec4\u4ef6","LeastConnection","Random","RoundRobin","Weight","HTTP\u670d\u52a1","GRPC\u670d\u52a1","\u81ea\u5b9a\u4e49\u7b56\u7565"],description:"GoFrame\u6846\u67b6\u4e2d\u7684\u8d1f\u8f7d\u5747\u8861\u7ec4\u4ef6\uff0cgsel\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u591a\u79cd\u5185\u7f6e\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u5305\u62ecLeastConnection\u3001Random\u3001RoundRobin\u548cWeight\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684\u7b56\u7565\u6216\u81ea\u5b9a\u4e49\u5b9e\u73b0\uff0c\u5e76\u901a\u8fc7HTTP\u548cGRPC\u793a\u4f8b\u5c55\u793a\u4e86\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u7684\u5b9e\u9645\u5e94\u7528\u3002"},l=void 0,t={},i=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u7b56\u7565\u5217\u8868",id:"\u7b56\u7565\u5217\u8868",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"<code>HTTP</code>",id:"http",level:3},{value:"<code>GRPC</code>",id:"grpc",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,d.jsxs)(n.p,{children:["\u8d1f\u8f7d\u5747\u8861\u7ec4\u4ef6\u4f7f\u7528\u5728\u5ba2\u6237\u7aef\u4e2d\u3002 ",(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u89e3\u8026\u5316\u8bbe\u8ba1\u7684\u3001\u7075\u6d3b\u6027\u9ad8\u3001\u6269\u5c55\u6027\u5f3a\u7684\u8d1f\u8f7d\u5747\u8861\u7ec4\u4ef6\uff0c\u7531 ",(0,d.jsx)(n.code,{children:"gsel"})," \u7ec4\u4ef6\u7ba1\u7406\uff0c\u8be5\u7ec4\u4ef6\u5b9a\u4e49\u4e86\u8d1f\u8f7d\u5747\u8861\u7684\u63a5\u53e3\uff0c\u5e76\u63d0\u4f9b\u4e86\u591a\u79cd\u5185\u7f6e\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u5b9e\u73b0\u3002\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u6839\u636e\u63a5\u53e3\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u7b56\u7565\u5217\u8868",children:"\u7b56\u7565\u5217\u8868"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"gsel"})," \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u591a\u79cd\u5e38\u7528\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u4f9b\u5f00\u53d1\u8005\u9009\u62e9\u4f7f\u7528\uff1a"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7b56\u7565\u540d\u79f0"}),(0,d.jsx)(n.th,{children:"\u7b56\u7565\u63cf\u8ff0"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"LeastConnection"})}),(0,d.jsx)(n.td,{children:"\u6700\u5c0f\u8fde\u63a5\u6570\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Random"})}),(0,d.jsx)(n.td,{children:"\u968f\u673a\u8bbf\u95ee\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"RoundRobin"})}),(0,d.jsx)(n.td,{children:"\u8f6e\u8bad\u8bbf\u95ee\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Weight"})}),(0,d.jsxs)(n.td,{children:["\u6743\u91cd\u8bbf\u95ee\u3002\u670d\u52a1\u6ce8\u518c\u65f6\u9700\u8981\u8bbe\u7f6e ",(0,d.jsx)(n.code,{children:"Weight"})," \u53c2\u6570\u3002"]})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,d.jsx)(n.h3,{id:"http",children:(0,d.jsx)(n.code,{children:"HTTP"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"server.go"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/registry/etcd/v2"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/net/gsvc"\n)\n\nfunc main() {\n    gsvc.SetRegistry(etcd.New(`127.0.0.1:2379`))\n\n    s := g.Server(`hello.svc`)\n    s.BindHandler("/", func(r *ghttp.Request) {\n        g.Log().Info(r.Context(), `request received`)\n        r.Response.Write(`Hello world`)\n    })\n    s.Run()\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"client.go"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u91cc\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"gsel.SetBuilder(gsel.NewBuilderRoundRobin())"})," \u8bbe\u7f6e\u5168\u5c40\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u4e3a\u8f6e\u8bad\u8bbf\u95ee\u7b56\u7565\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/registry/etcd/v2"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/gsel"\n    "github.com/gogf/gf/v2/net/gsvc"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    gsvc.SetRegistry(etcd.New(`127.0.0.1:2379`))\n    gsel.SetBuilder(gsel.NewBuilderRoundRobin())\n\n    for i := 0; i < 10; i++ {\n        ctx := gctx.New()\n        res := g.Client().GetContent(ctx, `http://hello.svc/`)\n        g.Log().Info(ctx, res)\n    }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u5206\u522b\u542f\u52a8\u4e24\u4e2a\u670d\u52a1\u7aef\uff0c\u5e76\u6267\u884c\u5ba2\u6237\u7aef\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"server1"})," \u7ec8\u7aef\u8f93\u51fa\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'$ go run server.go\n2023-03-15 21:24:08.413 [INFO] pid[10219]: http server started listening on [:63956]\n2023-03-15 21:24:08.413 [INFO] openapi specification is disabled\n2023-03-15 21:24:08.413 [DEBU] service register: &{Head: Deployment: Namespace: Name:hello.svc Version: Endpoints:10.35.12.81:63956 Metadata:map[insecure:true protocol:http]}\n2023-03-15 21:24:08.455 [DEBU] etcd put success with key "/service/default/default/hello.svc/latest/10.35.12.81:63956", value "{"insecure":true,"protocol":"http"}", lease "7587869265945813020"\n\n   SERVER   | DOMAIN  | ADDRESS | METHOD | ROUTE |                             HANDLER                             |    MIDDLEWARE\n------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n  hello.svc | default | :63956  | ALL    | /     | main.main.func1                                                 |\n------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n  hello.svc | default | :63956  | ALL    | /*    | github.com/gogf/gf/v2/net/ghttp.internalMiddlewareServerTracing | GLOBAL MIDDLEWARE\n------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n\n2023-03-15 21:24:18.357 [INFO] {e05b6049859a4c17d1de5d62eafa5a5f} request received\n2023-03-15 21:24:18.358 [INFO] {785e9349859a4c17d3de5d62049e5b51} request received\n2023-03-15 21:24:18.360 [INFO] {7076ab49859a4c17d5de5d62aaa64c85} request received\n2023-03-15 21:24:18.360 [INFO] {205fb849859a4c17d7de5d62cb2590f4} request received\n2023-03-15 21:24:18.361 [INFO] {885fc349859a4c17d9de5d6235937e31} request received\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"server2"})," \u7ec8\u7aef\u8f93\u51fa\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'$ go run server.go\n2023-03-15 21:24:10.769 [INFO] pid[10242]: http server started listening on [:63964]\n2023-03-15 21:24:10.770 [INFO] openapi specification is disabled\n2023-03-15 21:24:10.770 [DEBU] service register: &{Head: Deployment: Namespace: Name:hello.svc Version: Endpoints:10.35.12.81:63964 Metadata:map[insecure:true protocol:http]}\n2023-03-15 21:24:10.812 [DEBU] etcd put success with key "/service/default/default/hello.svc/latest/10.35.12.81:63964", value "{"insecure":true,"protocol":"http"}", lease "7587869265945813023"\n\n   SERVER   | DOMAIN  | ADDRESS | METHOD | ROUTE |                             HANDLER                             |    MIDDLEWARE\n------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n  hello.svc | default | :63964  | ALL    | /     | main.main.func1                                                 |\n------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n  hello.svc | default | :63964  | ALL    | /*    | github.com/gogf/gf/v2/net/ghttp.internalMiddlewareServerTracing | GLOBAL MIDDLEWARE\n------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n\n2023-03-15 21:24:18.357 [INFO] {602d8749859a4c17d2de5d62d515e464} request received\n2023-03-15 21:24:18.359 [INFO] {e0ed9b49859a4c17d4de5d628284ae62} request received\n2023-03-15 21:24:18.360 [INFO] {e0e0b249859a4c17d6de5d62beda3001} request received\n2023-03-15 21:24:18.361 [INFO] {7087bd49859a4c17d8de5d62f892e8aa} request received\n2023-03-15 21:24:18.361 [INFO] {e8aec849859a4c17dade5d6247101836} request received\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ go run client.go\n2023-03-15 21:24:18.357 [INFO] {e05b6049859a4c17d1de5d62eafa5a5f} Hello world\n2023-03-15 21:24:18.358 [INFO] {602d8749859a4c17d2de5d62d515e464} Hello world\n2023-03-15 21:24:18.358 [INFO] {785e9349859a4c17d3de5d62049e5b51} Hello world\n2023-03-15 21:24:18.359 [INFO] {e0ed9b49859a4c17d4de5d628284ae62} Hello world\n2023-03-15 21:24:18.360 [INFO] {7076ab49859a4c17d5de5d62aaa64c85} Hello world\n2023-03-15 21:24:18.360 [INFO] {e0e0b249859a4c17d6de5d62beda3001} Hello world\n2023-03-15 21:24:18.360 [INFO] {205fb849859a4c17d7de5d62cb2590f4} Hello world\n2023-03-15 21:24:18.361 [INFO] {7087bd49859a4c17d8de5d62f892e8aa} Hello world\n2023-03-15 21:24:18.361 [INFO] {885fc349859a4c17d9de5d6235937e31} Hello world\n2023-03-15 21:24:18.361 [INFO] {e8aec849859a4c17dade5d6247101836} Hello world\n"})}),"\n",(0,d.jsx)(n.h3,{id:"grpc",children:(0,d.jsx)(n.code,{children:"GRPC"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"server.go"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/rpc/grpcx/v2"\n    "github.com/gogf/gf/example/rpc/grpcx/balancer/controller"\n)\n\nfunc main() {\n    s := grpcx.Server.New()\n    controller.Register(s)\n    s.Run()\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"client.go"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/contrib/rpc/grpcx/v2"\n    "github.com/gogf/gf/example/rpc/grpcx/balancer/protobuf"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx    context.Context\n        conn   = grpcx.Client.MustNewGrpcClientConn("demo", grpcx.Balancer.WithRandom())\n        client = protobuf.NewGreeterClient(conn)\n    )\n    for i := 0; i < 10; i++ {\n        ctx = gctx.New()\n        res, err := client.SayHello(ctx, &protobuf.HelloRequest{Name: "World"})\n        if err != nil {\n            g.Log().Error(ctx, err)\n            return\n        }\n        g.Log().Debug(ctx, "Response:", res.Message)\n    }\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5176\u4e2d\u7684 ",(0,d.jsx)(n.code,{children:"grpcx.Balancer.WithRandom()"})," \u8868\u793a\u4f7f\u7528\u968f\u673a\u7684\u8bf7\u6c42\u7b56\u7565\u3002\u542f\u52a8\u4e24\u4e2a ",(0,d.jsx)(n.code,{children:"server.go"})," \u670d\u52a1\u7aef\uff0c\u968f\u540e\u8fd0\u884c ",(0,d.jsx)(n.code,{children:"client.go"})," \u5ba2\u6237\u7aef\uff0c\u67e5\u770b\u670d\u52a1\u7aef\u7684\u8bf7\u6c42\u65e5\u5fd7\uff1a"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"server1"})," \u7ec8\u7aef\u8f93\u51fa\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'$ go run server.go\n2023-03-15 19:50:44.801 [DEBU] set default registry using file registry as no custom registry set\n2023-03-15 19:50:44.802 [DEBU] service register: &{Head: Deployment: Namespace: Name:demo Version: Endpoints:10.35.12.81:53962 Metadata:map[protocol:grpc]}\n2023-03-15 19:50:44.802 [INFO] pid[89290]: grpc server started listening on [:53962]\n2023-03-15 19:50:57.282 {7025612f6d954c17c5f335051bf10899} /protobuf.Greeter/SayHello, 0.003ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.283 {60567c2f6d954c17c7f335052ce05185} /protobuf.Greeter/SayHello, 0.002ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.285 {f8d09b2f6d954c17ccf33505dff1a4ea} /protobuf.Greeter/SayHello, 0.002ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.287 {f0fab02f6d954c17cdf33505438b2c80} /protobuf.Greeter/SayHello, 0.001ms, name:"World", message:"Hello World"\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"server2"})," \u7ec8\u7aef\u8f93\u51fa\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'$ go run server.go\n2023-03-15 19:50:51.720 [DEBU] set default registry using file registry as no custom registry set\n2023-03-15 19:50:51.721 [DEBU] service register: &{Head: Deployment: Namespace: Name:demo Version: Endpoints:10.35.12.81:53973 Metadata:map[protocol:grpc]}\n2023-03-15 19:50:51.722 [INFO] pid[89351]: grpc server started listening on [:53973]\n2023-03-15 19:50:57.280 {b89a0d2f6d954c17c4f33505a046817c} /protobuf.Greeter/SayHello, 0.002ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.282 {28bf732f6d954c17c6f33505adedff5f} /protobuf.Greeter/SayHello, 0.002ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.283 {9876832f6d954c17c8f3350580ed535b} /protobuf.Greeter/SayHello, 0.002ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.284 {684e8b2f6d954c17c9f33505d56e4b05} /protobuf.Greeter/SayHello, 0.001ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.284 {c045912f6d954c17caf3350599006197} /protobuf.Greeter/SayHello, 0.001ms, name:"World", message:"Hello World"\n2023-03-15 19:50:57.284 {500a972f6d954c17cbf33505252b0e01} /protobuf.Greeter/SayHello, 0.001ms, name:"World", message:"Hello World"\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'$ go run client.go\n2023-03-15 19:50:57.278 [DEBU] client conn updated with addresses [{"Addr":"10.35.12.81:53962","ServerName":"demo","Attributes":{},"BalancerAttributes":null,"Type":0,"Metadata":null},{"Addr":"10.35.12.81:53973","ServerName":"demo","Attributes":{},"BalancerAttributes":null,"Type":0,"Metadata":null}]\n2023-03-15 19:50:57.281 [DEBU] {b89a0d2f6d954c17c4f33505a046817c} Response: Hello World\n2023-03-15 19:50:57.282 [DEBU] {7025612f6d954c17c5f335051bf10899} Response: Hello World\n2023-03-15 19:50:57.282 [DEBU] {28bf732f6d954c17c6f33505adedff5f} Response: Hello World\n2023-03-15 19:50:57.283 [DEBU] {60567c2f6d954c17c7f335052ce05185} Response: Hello World\n2023-03-15 19:50:57.283 [DEBU] {9876832f6d954c17c8f3350580ed535b} Response: Hello World\n2023-03-15 19:50:57.284 [DEBU] {684e8b2f6d954c17c9f33505d56e4b05} Response: Hello World\n2023-03-15 19:50:57.284 [DEBU] {c045912f6d954c17caf3350599006197} Response: Hello World\n2023-03-15 19:50:57.285 [DEBU] {500a972f6d954c17cbf33505252b0e01} Response: Hello World\n2023-03-15 19:50:57.286 [DEBU] {f8d09b2f6d954c17ccf33505dff1a4ea} Response: Hello World\n2023-03-15 19:50:57.287 [DEBU] {f0fab02f6d954c17cdf33505438b2c80} Response: Hello World\n'})})]})}function g(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var o=r(296540);const d={},c=o.createContext(d);function s(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);
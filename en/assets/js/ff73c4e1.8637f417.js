"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[71142],{54798:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>t});const c=JSON.parse('{"id":"docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u5fae\u670d\u52a1\u5f00\u53d1","title":"\u5fae\u670d\u52a1\u5f00\u53d1","description":"\u5fae\u670d\u52a1\u5b8c\u6574\u7279\u6027\u53ca\u76f8\u5173\u7ec4\u4ef6\u4ece v2.4 \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002","source":"@site/docs/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u5fae\u670d\u52a1\u5f00\u53d1.md","sourceDirName":"docs/\u5fae\u670d\u52a1\u5f00\u53d1","slug":"/docs/micro-service","permalink":"/en/docs/micro-service","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u5fae\u670d\u52a1\u5f00\u53d1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730724532000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/micro-service","title":"\u5fae\u670d\u52a1\u5f00\u53d1","sidebar_position":6,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1","permalink":"/en/docs/components/contrib-nosql-redis-interface"},"next":{"title":"\u73af\u5883\u51c6\u5907","permalink":"/en/docs/micro-service/prepare-environment"}}');var o=r(74848),l=r(28453);const s={slug:"/docs/micro-service",title:"\u5fae\u670d\u52a1\u5f00\u53d1",sidebar_position:6,hide_title:!0},i=void 0,d={},t=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u7b80\u5355\u793a\u4f8b",id:"\u7b80\u5355\u793a\u4f8b",level:2},{value:"<code>HTTP</code> \u5fae\u670d\u52a1\u793a\u4f8b",id:"http-\u5fae\u670d\u52a1\u793a\u4f8b",level:3},{value:"<code>server.go</code>",id:"servergo",level:4},{value:"<code>client.go</code>",id:"clientgo",level:4},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:4},{value:"<code>GRPC</code> \u5fae\u670d\u52a1\u793a\u4f8b",id:"grpc-\u5fae\u670d\u52a1\u793a\u4f8b",level:3},{value:"<code>helloworld.proto</code>",id:"helloworldproto",level:4},{value:"<code>controller.go</code>",id:"controllergo",level:4},{value:"<code>config.yaml</code>",id:"configyaml",level:4},{value:"<code>server.go</code>",id:"servergo-1",level:4},{value:"<code>client.go</code>",id:"clientgo-1",level:4},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c-1",level:4}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["\u5fae\u670d\u52a1\u5b8c\u6574\u7279\u6027\u53ca\u76f8\u5173\u7ec4\u4ef6\u4ece ",(0,o.jsx)(n.code,{children:"v2.4"})," \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002"]})}),"\n",(0,o.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u652f\u6301\u5fae\u670d\u52a1\u6a21\u5f0f\u5f00\u53d1\uff0c\u63d0\u4f9b\u4e86\u5e38\u7528\u7684\u5fae\u670d\u52a1\u7ec4\u4ef6\u3001\u5f00\u53d1\u5de5\u5177\u3001\u5f00\u53d1\u6559\u7a0b\u5e2e\u52a9\u56e2\u961f\u5feb\u901f\u5fae\u670d\u52a1\u8f6c\u578b\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u7b80\u5355\u793a\u4f8b",children:"\u7b80\u5355\u793a\u4f8b"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"GoFrame"})," \u5fae\u670d\u52a1\u7ec4\u4ef6\u7684\u4f4e\u85d5\u53ca\u901a\u7528\u5316\u8bbe\u8ba1\u7684\uff0c\u7ec4\u4ef6\u5316\u4f7f\u7528\u652f\u6301\u5927\u90e8\u5206\u7684\u5fae\u670d\u52a1\u901a\u4fe1\u534f\u8bae\u3002\u5728\u5b98\u65b9\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u4ee5 ",(0,o.jsx)(n.code,{children:"HTTP"})," \u53ca ",(0,o.jsx)(n.code,{children:"GRPC"})," \u534f\u8bae\u4e3a\u793a\u4f8b\uff0c\u4ecb\u7ecd\u5fae\u670d\u52a1\u7684\u5f00\u53d1\u4ee5\u53ca\u7ec4\u4ef6\u5de5\u5177\u7684\u4f7f\u7528\u3002\u7531\u4e8e ",(0,o.jsx)(n.code,{children:"HTTP Web"})," \u5f00\u53d1\u5df2\u7ecf\u6709\u6bd4\u8f83\u4e30\u5bcc\u5b8c\u5584\u7684\u72ec\u7acb\u7ae0\u8282\u4ecb\u7ecd\uff0c\u56e0\u6b64\u5fae\u670d\u52a1\u7ae0\u8282\u5927\u90e8\u5206\u4ecb\u7ecd\u4ee5 ",(0,o.jsx)(n.code,{children:"GRPC"})," \u4e3a\u4e3b\u3002"]}),"\n",(0,o.jsxs)(n.h3,{id:"http-\u5fae\u670d\u52a1\u793a\u4f8b",children:[(0,o.jsx)(n.code,{children:"HTTP"})," \u5fae\u670d\u52a1\u793a\u4f8b"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/example/registry/file",children:"https://github.com/gogf/gf/tree/master/example/registry/file"})}),"\n",(0,o.jsx)(n.h4,{id:"servergo",children:(0,o.jsx)(n.code,{children:"server.go"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/registry/file/v2"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/net/gsvc"\n    "github.com/gogf/gf/v2/os/gfile"\n)\n\nfunc main() {\n    gsvc.SetRegistry(file.New(gfile.Temp("gsvc")))\n\n    s := g.Server(`hello.svc`)\n    s.BindHandler("/", func(r *ghttp.Request) {\n        g.Log().Info(r.Context(), `request received`)\n        r.Response.Write(`Hello world`)\n    })\n    s.Run()\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u4e00\u4e2a ",(0,o.jsx)(n.code,{children:"HTTP"})," \u7684\u5fae\u670d\u52a1\u7aef\u548c\u4e00\u4e2a\u666e\u901a\u7684 ",(0,o.jsx)(n.code,{children:"Web Server"})," \u7aef\u6ca1\u4ec0\u4e48\u5dee\u5f02\uff0c\u4f46\u662f\u9876\u90e8\u591a\u4e86\u4e00\u884c\u4ee3\u7801\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'gsvc.SetRegistry(file.New(gfile.Temp("gsvc")))\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u884c\u4ee3\u7801\u7528\u4e8e\u542f\u7528\u5e76\u6ce8\u518c\u5f53\u524d\u670d\u52a1\u4f7f\u7528\u7684\u6ce8\u518c\u53d1\u73b0\u7ec4\u4ef6\uff0c\u5728\u8be5\u793a\u4f8b\u4e2d\u4f7f\u7528\u7684 ",(0,o.jsx)(n.code,{children:'file.New(gfile.Temp("gsvc"))'})," \u662f\u57fa\u4e8e\u672c\u5730\u7cfb\u7edf\u6587\u4ef6\u7684\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u7ec4\u4ef6\uff0c\u5176\u4e2d\u7684 ",(0,o.jsx)(n.code,{children:'gfile.Temp("gsvc")'})," \u6307\u5b9a\u7684\u662f\u5b58\u653e\u670d\u52a1\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u4f8b\u5982\u5728 ",(0,o.jsx)(n.code,{children:"Linux/MacOS"})," \u7cfb\u7edf\u4e0b\uff0c\u6307\u5411\u7684\u662f ",(0,o.jsx)(n.code,{children:"/tmp/gsvc"})," \u76ee\u5f55\u3002\u57fa\u4e8e\u6587\u4ef6\u7cfb\u7edf\u7684\u6ce8\u518c\u53d1\u73b0\u4ec5\u7528\u4e8e\u672c\u5730\u5fae\u670d\u52a1\u793a\u4f8b\uff0c\u4e0d\u80fd\u7528\u4e8e\u8de8\u8282\u70b9\u901a\u4fe1\u3002\u5728\u751f\u4ea7\u73af\u5883\u65f6\uff0c\u6211\u4eec\u5f80\u5f80\u4f1a\u4f7f\u7528\u5176\u4ed6\u7684\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u7ec4\u4ef6\uff0c\u4f8b\u5982 ",(0,o.jsx)(n.code,{children:"etcd, polaris, zookeeper"})," \u7b49\uff0c\u6846\u67b6\u7684\u793e\u533a\u7ec4\u4ef6\u4e2d\u5df2\u7ecf\u63d0\u4f9b\u4e86\u5e38\u7528\u7684\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u7ec4\u4ef6\u7684\u5b9e\u73b0\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5176\u6b21\uff0c\u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u7ed9 ",(0,o.jsx)(n.code,{children:"Server"})," \u8bbe\u7f6e\u4e86\u4e00\u4e2a\u540d\u5b57 ",(0,o.jsx)(n.code,{children:"hello.svc"}),"\uff0c\u8be5\u540d\u5b57\u8868\u793a\u8be5 ",(0,o.jsx)(n.code,{children:"Server"})," \u7ed1\u5b9a\u7684\u5fae\u670d\u52a1\u7684\u540d\u79f0\uff0c\u670d\u52a1\u540d\u79f0\u4f5c\u4e3a\u5fae\u670d\u52a1\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u7528\u4e8e\u670d\u52a1\u95f4\u7684\u8bc6\u522b\u901a\u4fe1\u3002\u5f53\u670d\u52a1\u6ce8\u518c\u7ec4\u4ef6\u6ce8\u518c\u542f\u7528\u65f6\uff0c ",(0,o.jsx)(n.code,{children:"HTTP Server"})," \u5728\u8fd0\u884c\u65f6\u5c06\u4f1a\u628a\u81ea\u5df1\u7684\u8bbf\u95ee\u5730\u5740\u6ce8\u518c\u5230\u670d\u52a1\u6ce8\u518c\u7ec4\u4ef6\u4e2d\uff0c\u65b9\u4fbf\u5176\u4ed6\u670d\u52a1\u901a\u8fc7\u76f8\u540c\u7ec4\u4ef6\u6309\u7167\u670d\u52a1\u540d\u79f0\u8fdb\u884c\u8bbf\u95ee\u3002"]}),"\n",(0,o.jsx)(n.h4,{id:"clientgo",children:(0,o.jsx)(n.code,{children:"client.go"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "time"\n\n    "github.com/gogf/gf/contrib/registry/file/v2"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/gsvc"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gfile"\n)\n\nfunc main() {\n    gsvc.SetRegistry(file.New(gfile.Temp("gsvc")))\n\n    client := g.Client()\n    for i := 0; i < 10; i++ {\n        ctx := gctx.New()\n        res, err := client.Get(ctx, `http://hello.svc/`)\n        if err != nil {\n            panic(err)\n        }\n        g.Log().Debug(ctx, res.ReadAllString())\n        res.Close()\n        time.Sleep(time.Second)\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5ba2\u6237\u7aef\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"g.Client()"})," \u521b\u5efa\u4e00\u4e2a ",(0,o.jsx)(n.code,{children:"HTTP Client"}),"\uff0c\u5e76\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"http://hello.svc/"})," \u5730\u5740\u8bbf\u95ee\u670d\u52a1\u7aef\uff0c\u5176\u4e2d\u7684 ",(0,o.jsx)(n.code,{children:"hello.svc"})," \u5373\u5148\u524d\u7684 ",(0,o.jsx)(n.code,{children:"Server"})," \u7aef\u7ed1\u5b9a\u7684\u5fae\u670d\u52a1\u540d\u79f0\u3002\u5f53\u5ba2\u6237\u7aef\u901a\u8fc7\u5fae\u670d\u52a1\u540d\u79f0\u8bbf\u95ee\u7684\u65f6\u5019\uff0c\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u7ec4\u4ef6\u5c06\u4f1a\u5728\u5e95\u5c42\u8fdb\u884c\u68c0\u7d22\uff0c\u5e76\u627e\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u7aef\u5730\u5740\u8fdb\u884c\u901a\u4fe1\u3002"]}),"\n",(0,o.jsx)(n.h4,{id:"\u6267\u884c\u7ed3\u679c",children:"\u6267\u884c\u7ed3\u679c"}),"\n",(0,o.jsxs)(n.p,{children:["\u5148\u6267\u884c ",(0,o.jsx)(n.code,{children:"server.go"})," \u670d\u52a1\u7aef\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u7684\u670d\u52a1\uff0c\u968f\u540e\u518d\u6267\u884c ",(0,o.jsx)(n.code,{children:"client.go"})," \u901a\u8fc7\u670d\u52a1\u540d\u79f0\u8bf7\u6c42\u670d\u52a1\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u5ba2\u6237\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ go run client.go\n2023-03-14 20:22:10.006 [DEBU] {8054f3a48c484c1760fb416bb3df20a4} Hello world\n2023-03-14 20:22:11.007 [DEBU] {6831cae08c484c1761fb416b9d4df851} Hello world\n2023-03-14 20:22:12.008 [DEBU] {9035761c8d484c1762fb416b1e648b81} Hello world\n2023-03-14 20:22:13.011 [DEBU] {a05a32588d484c1763fb416bc19ff667} Hello world\n2023-03-14 20:22:14.012 [DEBU] {40fdea938d484c1764fb416b8459fc43} Hello world\n2023-03-14 20:22:15.014 [DEBU] {686c9acf8d484c1765fb416b3697d369} Hello world\n2023-03-14 20:22:16.015 [DEBU] {906a470b8e484c1766fb416b85b9867e} Hello world\n2023-03-14 20:22:17.017 [DEBU] {28c7fd468e484c1767fb416b86e5557f} Hello world\n2023-03-14 20:22:18.018 [DEBU] {90d2ad828e484c1768fb416bfcde738f} Hello world\n2023-03-14 20:22:19.019 [DEBU] {d05559be8e484c1769fb416baad06f23} Hello world\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u670d\u52a1\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ go run server.go\n2023-03-14 20:20:06.364 [INFO] pid[96421]: http server started listening on [:61589]\n2023-03-14 20:20:06.364 [INFO] openapi specification is disabled\n2023-03-14 20:20:06.364 [DEBU] service register: &{Head: Deployment: Namespace: Name:hello.svc Version: Endpoints:10.35.12.81:61589 Metadata:map[insecure:true protocol:http]}\n\n   SERVER   | DOMAIN  | ADDRESS | METHOD | ROUTE |                             HANDLER                             |    MIDDLEWARE\n------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n  hello.svc | default | :61589  | ALL    | /     | main.main.func1                                                 |\n------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n  hello.svc | default | :61589  | ALL    | /*    | github.com/gogf/gf/v2/net/ghttp.internalMiddlewareServerTracing | GLOBAL MIDDLEWARE\n------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n\n2023-03-14 20:22:10.006 [INFO] {8054f3a48c484c1760fb416bb3df20a4} request received\n2023-03-14 20:22:11.007 [INFO] {6831cae08c484c1761fb416b9d4df851} request received\n2023-03-14 20:22:12.008 [INFO] {9035761c8d484c1762fb416b1e648b81} request received\n2023-03-14 20:22:13.010 [INFO] {a05a32588d484c1763fb416bc19ff667} request received\n2023-03-14 20:22:14.012 [INFO] {40fdea938d484c1764fb416b8459fc43} request received\n2023-03-14 20:22:15.013 [INFO] {686c9acf8d484c1765fb416b3697d369} request received\n2023-03-14 20:22:16.015 [INFO] {906a470b8e484c1766fb416b85b9867e} request received\n2023-03-14 20:22:17.016 [INFO] {28c7fd468e484c1767fb416b86e5557f} request received\n2023-03-14 20:22:18.017 [INFO] {90d2ad828e484c1768fb416bfcde738f} request received\n2023-03-14 20:22:19.019 [INFO] {d05559be8e484c1769fb416baad06f23} request received\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"grpc-\u5fae\u670d\u52a1\u793a\u4f8b",children:[(0,o.jsx)(n.code,{children:"GRPC"})," \u5fae\u670d\u52a1\u793a\u4f8b"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/example/rpc/grpcx/basic",children:"https://github.com/gogf/gf/tree/master/example/rpc/grpcx/basic"})}),"\n",(0,o.jsx)(n.h4,{id:"helloworldproto",children:(0,o.jsx)(n.code,{children:"helloworld.proto"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"grpc"})," \u548c ",(0,o.jsx)(n.code,{children:"http"})," \u534f\u8bae\u6bd4\u8f83\u5927\u7684\u5dee\u5f02\u5728\u4e8e ",(0,o.jsx)(n.code,{children:"grpc"})," \u9700\u8981\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"protobuf"})," \u6765\u5b9e\u73b0 ",(0,o.jsx)(n.code,{children:"API"})," \u63a5\u53e3\u4ee5\u53ca\u6570\u636e\u7ed3\u6784\u7684\u5b9a\u4e49\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'syntax = "proto3";\n\npackage protobuf;\n\noption go_package = "github.com/gogf/gf/grpc/example/helloworld/protobuf";\n\n// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n}\n\n// The request message containing the user\'s name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u4ee5\u4e0a ",(0,o.jsx)(n.code,{children:"protobuf"})," \u6587\u4ef6\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6267\u884c\u7f16\u8bd1\uff08\u8bf7\u63d0\u524d\u5b89\u88c5 ",(0,o.jsx)(n.code,{children:"protoc"})," \u5de5\u5177\uff09\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"gf gen pb\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5c06\u4f1a\u751f\u6210\u5bf9\u5e94\u7684 ",(0,o.jsx)(n.code,{children:"proto go"})," \u6570\u636e\u7ed3\u6784\u6587\u4ef6\u4ee5\u53ca ",(0,o.jsx)(n.code,{children:"grpc"})," \u63a5\u53e3\u6587\u4ef6\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"helloworld.pb.go\nhelloworld_grpc.pb.go\n"})}),"\n",(0,o.jsx)(n.h4,{id:"controllergo",children:(0,o.jsx)(n.code,{children:"controller.go"})}),"\n",(0,o.jsxs)(n.p,{children:["\u63a7\u5236\u5668\u7528\u4e8e\u5b9e\u73b0 ",(0,o.jsx)(n.code,{children:"proto"})," \u4e2d\u5b9a\u4e49\u7684\u63a5\u53e3\u65b9\u6cd5\uff08\u5982\u679c\u4f7f\u7528\u6846\u67b6\u6807\u51c6\u5316\u5de5\u7a0b\u76ee\u5f55\u7ed3\u6784\uff0c\u8be5\u63a7\u5236\u5668\u4ee3\u7801\u6587\u4ef6\u4e5f\u662f\u7531\u6846\u67b6\u7684 ",(0,o.jsx)(n.code,{children:"gf gen pb"})," \u5de5\u5177\u81ea\u52a8\u751f\u6210\uff0c\u5f00\u53d1\u8005\u8fdb\u9700\u8981\u586b\u5145\u5bf9\u5e94\u65b9\u6cd5\u7684\u5177\u4f53\u5b9e\u73b0\u5373\u53ef\uff09\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'type Controller struct {\n    protobuf.UnimplementedGreeterServer\n}\n\nfunc Register(s *grpcx.GrpcServer) {\n    protobuf.RegisterGreeterServer(s.Server, &Controller{})\n}\n\n// SayHello implements helloworld.GreeterServer\nfunc (s *Controller) SayHello(ctx context.Context, in *protobuf.HelloRequest) (*protobuf.HelloReply, error) {\n    return &protobuf.HelloReply{Message: "Hello " + in.GetName()}, nil\n}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"configyaml",children:(0,o.jsx)(n.code,{children:"config.yaml"})}),"\n",(0,o.jsxs)(n.p,{children:["\u670d\u52a1\u7aef\u914d\u7f6e\u6587\u4ef6\uff0c\u5728\u8be5\u914d\u7f6e\u6587\u4ef6\u4e2d\u6307\u5b9a\u4e86\u8be5\u670d\u52a1\u7684\u540d\u79f0\u4e3a ",(0,o.jsx)(n.code,{children:"demo"}),"\u3002\u5fae\u670d\u52a1\u7684\u540d\u79f0\u7528\u4e8e\u670d\u52a1\u95f4\u901a\u4fe1\u7684\u552f\u4e00\u8bc6\u522b\u6807\u8bc6\u3002\u5728\u4e0d\u663e\u5f0f\u914d\u7f6e\u670d\u52a1\u7aef\u7684\u76d1\u542c\u7aef\u53e3\u65f6\uff0c\u670d\u52a1\u7aef\u5c06\u4f1a\u968f\u673a\u76d1\u542c\u53ef\u7528\u7684\u672c\u5730\u7aef\u53e3\u3002\u5728\u5fae\u670d\u52a1\u6a21\u5f0f\u4e0b\uff0c\u7531\u4e8e\u4f7f\u7528\u670d\u52a1\u540d\u79f0\u8fdb\u884c\u901a\u4fe1\uff0c\u670d\u52a1\u7aef\u53e3\u5f80\u5f80\u4e0d\u9700\u8981\u663e\u5f0f\u6307\u5b9a\uff0c\u968f\u673a\u76d1\u542c\u5373\u53ef\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'grpc:\n  name:            "demo"\n  logPath:          "./log"\n  logStdout:        true\n  errorLogEnabled:  true\n  accessLogEnabled: true\n  errorStack:       true\n'})}),"\n",(0,o.jsx)(n.h4,{id:"servergo-1",children:(0,o.jsx)(n.code,{children:"server.go"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"grpc"})," \u670d\u52a1\u7aef\uff0c\u5728\u4e0d\u663e\u5f0f\u6307\u5b9a\u670d\u52a1\u7aef\u4f7f\u7528\u7684\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u7ec4\u4ef6\u65f6\uff0c\u670d\u52a1\u7aef\u9ed8\u8ba4\u4f7f\u7528\u7cfb\u7edf\u6587\u4ef6\u6ce8\u518c\u53d1\u73b0\u7ec4\u4ef6\uff0c\u8be5\u7ec4\u4ef6\u4ec5\u7528\u4e8e\u5355\u673a\u6d4b\u8bd5\u3002\u5176\u4e2d\u7684 ",(0,o.jsx)(n.code,{children:"controller.Register"})," \u5373\u8c03\u7528\u6211\u4eec\u901a\u8fc7\u5de5\u5177\u751f\u6210\u7684\u63a7\u5236\u5668\u6ce8\u518c\u65b9\u6cd5\u5c06\u5177\u4f53\u7684\u63a5\u53e3\u5b9e\u73b0\u6ce8\u518c\u5230\u670d\u52a1\u7aef\u4e2d\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/rpc/grpcx/v2"\n    "github.com/gogf/gf/example/rpc/grpcx/basic/controller"\n)\n\nfunc main() {\n    s := grpcx.Server.New()\n    controller.Register(s)\n    s.Run()\n}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"clientgo-1",children:(0,o.jsx)(n.code,{children:"client.go"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"grpc"})," \u5ba2\u6237\u7aef\uff0c\u5728\u521b\u5efa\u8fde\u63a5\u65f6\u9700\u8981\u7ed9\u5b9a\u670d\u52a1\u7aef\u670d\u52a1\u7684\u5177\u4f53\u540d\u79f0\u3002\u8fd9\u91cc\u7684\u670d\u52a1\u7aef\u670d\u52a1\u540d\u79f0\u4e3a ",(0,o.jsx)(n.code,{children:"demo"}),"\uff0c\u6307\u5b9a\u7684\u662f\u4e0a\u9762\u63d0\u5230\u7684\u5fae\u670d\u52a1\u540d\u79f0\u3002\u5728\u4e0d\u663e\u5f0f\u6307\u5b9a\u5ba2\u6237\u7aef\u4f7f\u7528\u7684\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u7ec4\u4ef6\u65f6\uff0c\u5ba2\u6237\u7aef\u9ed8\u8ba4\u4f7f\u7528\u7cfb\u7edf\u6587\u4ef6\u6ce8\u518c\u53d1\u73b0\u7ec4\u4ef6\uff0c\u8be5\u7ec4\u4ef6\u4ec5\u7528\u4e8e\u5355\u673a\u6d4b\u8bd5\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/rpc/grpcx/v2"\n    "github.com/gogf/gf/example/rpc/grpcx/basic/protobuf"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx    = gctx.New()\n        conn   = grpcx.Client.MustNewGrpcClientConn("demo")\n        client = protobuf.NewGreeterClient(conn)\n    )\n    res, err := client.SayHello(ctx, &protobuf.HelloRequest{Name: "World"})\n    if err != nil {\n        g.Log().Error(ctx, err)\n        return\n    }\n    g.Log().Debug(ctx, "Response:", res.Message)\n}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"\u6267\u884c\u7ed3\u679c-1",children:"\u6267\u884c\u7ed3\u679c"}),"\n",(0,o.jsxs)(n.p,{children:["\u670d\u52a1\u7aef\u8f93\u51fa\uff1a\u53ef\u4ee5\u770b\u5230\uff0c\u670d\u52a1\u7aef\u8f93\u51fa\u4e86\u4e00\u4e0b ",(0,o.jsx)(n.code,{children:"DEBU"})," \u8c03\u8bd5\u4fe1\u606f\uff0c\u7528\u4e8e\u663e\u793a\u4e00\u4e9b\u670d\u52a1\u6ce8\u518c\u7684\u7ec6\u8282\u3002\u540c\u65f6\uff0c\u7531\u4e8e\u6ca1\u6709\u663e\u5f0f\u6307\u5b9a\u670d\u52a1\u7aef\u7684\u76d1\u542c\u7aef\u53e3\uff0c\u8fd9\u91cc\u968f\u673a\u76d1\u542c\u4e86\u672c\u5730\u7aef\u53e3 ",(0,o.jsx)(n.code,{children:"64517"}),"\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ go run server.go\n2023-03-14 20:50:58.465 [DEBU] set default registry using file registry as no custom registry set\n2023-03-14 20:50:58.466 [DEBU] service register: &{Head: Deployment: Namespace: Name:demo Version: Endpoints:10.35.12.81:64517 Metadata:map[protocol:grpc]}\n2023-03-14 20:50:58.466 [INFO] pid[98982]: grpc server started listening on [:64517]\n2023-03-14 20:52:37.059 {9898c809364a4c17da79e47f3e6c3b8f} /protobuf.Greeter/SayHello, 0.003ms, name:"World", message:"Hello World"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5ba2\u6237\u7aef\u8f93\u51fa\uff1a\u5ba2\u6237\u7aef\u901a\u8fc7\u5fae\u670d\u52a1\u540d\u79f0\u8bbf\u95ee\uff0c\u5e76\u63a5\u6536\u5230\u4e86\u670d\u52a1\u7aef\u7684\u8fd4\u56de\u3002\u6ce8\u610f\u5ba2\u6237\u7aef\u7684\u65e5\u5fd7\u548c\u670d\u52a1\u7aef\u7684\u65e5\u5fd7\u4e2d\uff0c\u94fe\u8def\u8ddf\u8e2a\u7684 ",(0,o.jsx)(n.code,{children:"TraceID"})," \u662f\u76f8\u540c\u7684\uff08 ",(0,o.jsx)(n.code,{children:"9898c809364a4c17da79e47f3e6c3b8f"}),"\uff09\uff0c\u8868\u793a\u540c\u4e00\u4e2a\u8bf7\u6c42\u4ea7\u751f\u7684\u65e5\u5fd7\u3002 ",(0,o.jsx)(n.code,{children:"GoFrame"})," \u7684\u5fae\u670d\u52a1\u7279\u6027\u9ed8\u8ba4\u5f00\u542f\u4e86\u94fe\u8def\u8ddf\u8e2a\u80fd\u529b\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ go run client.go\n2023-03-14 20:52:37.060 [DEBU] {9898c809364a4c17da79e47f3e6c3b8f} Response: Hello World\n"})})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var c=r(96540);const o={},l=c.createContext(o);function s(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);
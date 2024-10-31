"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[81849],{144603:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>o});var c=r(474848),i=r(28453);const d={title:"\u94fe\u8def\u8ddf\u8e2a-\u80cc\u666f\u77e5\u8bc6",sidebar_position:0,hide_title:!0},s=void 0,t={id:"\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-\u80cc\u666f\u77e5\u8bc6",title:"\u94fe\u8def\u8ddf\u8e2a-\u80cc\u666f\u77e5\u8bc6",description:"\u4e00\u3001OpenTelemetry",source:"@site/versioned_docs/version-2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-\u80cc\u666f\u77e5\u8bc6.md",sourceDirName:"\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a",slug:"/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-\u80cc\u666f\u77e5\u8bc6",permalink:"/gf-site/en/docs/2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-\u80cc\u666f\u77e5\u8bc6",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-\u80cc\u666f\u77e5\u8bc6.md",tags:[],version:"2.3.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:0,frontMatter:{title:"\u94fe\u8def\u8ddf\u8e2a-\u80cc\u666f\u77e5\u8bc6",sidebar_position:0,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a",permalink:"/gf-site/en/docs/2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/"},next:{title:"\u94fe\u8def\u8ddf\u8e2a-\u51c6\u5907\u5de5\u4f5c",permalink:"/gf-site/en/docs/2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-\u51c6\u5907\u5de5\u4f5c"}},l={},o=[{value:"\u4e00\u3001OpenTelemetry",id:"\u4e00opentelemetry",level:2},{value:"\u4e8c\u3001\u91cd\u8981\u6982\u5ff5",id:"\u4e8c\u91cd\u8981\u6982\u5ff5",level:2},{value:"TracerProvider",id:"tracerprovider",level:3},{value:"Tracer",id:"tracer",level:3},{value:"Span",id:"span",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Events",id:"events",level:3},{value:"SpanContext",id:"spancontext",level:3},{value:"Propagator",id:"propagator",level:3},{value:"\u4e09\u3001\u652f\u6301\u7ec4\u4ef6",id:"\u4e09\u652f\u6301\u7ec4\u4ef6",level:2},{value:"\u56db\u3001\u53c2\u8003\u8d44\u6599",id:"\u56db\u53c2\u8003\u8d44\u6599",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u4e00opentelemetry",children:"\u4e00\u3001OpenTelemetry"}),"\n",(0,c.jsxs)(n.p,{children:["\u5206\u5e03\u5f0f\u94fe\u8def\u8ddf\u8e2a\uff08 ",(0,c.jsx)(n.code,{children:"          Distributed Tracing        "}),"\uff09\u7684\u6982\u5ff5\u6700\u65e9\u662f\u7531 ",(0,c.jsx)(n.code,{children:"Google"})," \u63d0\u51fa\u6765\u7684\uff0c\u53d1\u5c55\u81f3\u4eca\u6280\u672f\u5df2\u7ecf\u6bd4\u8f83\u6210\u719f\uff0c\u4e5f\u662f\u6709\u4e00\u4e9b\u534f\u8bae\u6807\u51c6\u53ef\u4ee5\u53c2\u8003\u3002\u76ee\u524d\u5728 ",(0,c.jsx)(n.code,{children:"Tracing"})," \u6280\u672f\u8fd9\u5757\u6bd4\u8f83\u6709\u5f71\u54cd\u529b\u7684\u662f\u4e24\u5927\u5f00\u6e90\u6280\u672f\u6846\u67b6\uff1a ",(0,c.jsx)(n.code,{children:"Netflix"})," \u516c\u53f8\u5f00\u6e90\u7684 ",(0,c.jsx)(n.code,{children:"OpenTracing"})," \u548c ",(0,c.jsx)(n.code,{children:"Google"})," \u5f00\u6e90\u7684 ",(0,c.jsx)(n.code,{children:"OpenCensus"}),"\u3002\u4e24\u5927\u6846\u67b6\u90fd\u62e5\u6709\u6bd4\u8f83\u9ad8\u7684\u5f00\u53d1\u8005\u7fa4\u4f53\u3002\u4e3a\u5f62\u6210\u7edf\u4e00\u7684\u6280\u672f\u6807\u51c6\uff0c\u4e24\u5927\u6846\u67b6\u6700\u7ec8\u78e8\u5408\u6210\u7acb\u4e86 ",(0,c.jsx)(n.code,{children:"OpenTelemetry"})," \u9879\u76ee\uff0c\u7b80\u79f0 ",(0,c.jsx)(n.code,{children:"otel"}),"\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\uff1a"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://goframe.org/pages/viewpage.action?pageId=3673400",children:"OpenTracing\u4ecb\u7ecd"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://goframe.org/pages/viewpage.action?pageId=3673499",children:"OpenTelemetry\u4ecb\u7ecd"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u6211\u4eec\u7684 ",(0,c.jsx)(n.code,{children:"Tracing"})," \u6280\u672f\u65b9\u6848\u4ee5 ",(0,c.jsx)(n.code,{children:"OpenTelemetry"})," \u4e3a\u5b9e\u65bd\u6807\u51c6\uff0c\u534f\u8bae\u6807\u51c6\u7684\u4e00\u4e9b ",(0,c.jsx)(n.code,{children:"Golang"})," \u5b9e\u73b0\u5f00\u6e90\u9879\u76ee\uff1a"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-go",children:"https://github.com/open-telemetry/opentelemetry-go"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-go-contrib",children:"https://github.com/open-telemetry/opentelemetry-go-contrib"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5176\u4ed6\u7b2c\u4e09\u65b9\u7684\u6846\u67b6\u548c\u7cfb\u7edf\uff08\u5982 ",(0,c.jsx)(n.code,{children:"Jaeger/Prometheus/Grafana"})," \u7b49\uff09\u4e5f\u4f1a\u6309\u7167\u6807\u51c6\u5316\u7684\u89c4\u8303\u6765\u5bf9\u63a5 ",(0,c.jsx)(n.code,{children:"OpenTelemetry"}),"\uff0c\u4f7f\u5f97\u7cfb\u7edf\u7684\u5f00\u53d1\u548c\u7ef4\u62a4\u6210\u672c\u5927\u5927\u964d\u4f4e\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:r(305196).A+"",width:"800",height:"534"})}),"\n",(0,c.jsx)(n.h2,{id:"\u4e8c\u91cd\u8981\u6982\u5ff5",children:"\u4e8c\u3001\u91cd\u8981\u6982\u5ff5"}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u5148\u770b\u770b ",(0,c.jsx)(n.code,{children:"OpenTelemetry"})," \u7684\u67b6\u6784\u56fe\uff0c\u6211\u4eec\u8fd9\u91cc\u4e0d\u4f1a\u5b8c\u6574\u4ecb\u7ecd\uff0c\u53ea\u4f1a\u4ecb\u7ecd\u5176\u4e2d\u5927\u5bb6\u5e38\u7528\u7684\u51e0\u4e2a\u6982\u5ff5\u3002\u5173\u4e8e ",(0,c.jsx)(n.code,{children:"OpenTelemetry"})," \u7684\u5185\u90e8\u6280\u672f\u67b6\u6784\u8bbe\u8ba1\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,c.jsx)(n.a,{href:"https://goframe.org/pages/viewpage.action?pageId=3673512",children:"OpenTelemetry\u67b6\u6784"})," \uff0c\u5173\u4e8e\u8bed\u4e49\u7ea6\u5b9a\u8bf7\u53c2\u8003\uff1a ",(0,c.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/trace/api.md",children:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/trace/api.md"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://goframe.org/download/attachments/3673512/8fbc65f937aaac8c9b6947faa89a6964.png?version=1&modificationDate=1611217362937&api=v2",alt:""})}),"\n",(0,c.jsx)(n.h3,{id:"tracerprovider",children:"TracerProvider"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3b\u8981\u8d1f\u8d23\u521b\u5efa ",(0,c.jsx)(n.code,{children:"Tracer"}),"\uff0c\u4e00\u822c\u662f\u9700\u8981\u7b2c\u4e09\u65b9\u7684\u5206\u5e03\u5f0f\u94fe\u8def\u8ddf\u8e2a\u7ba1\u7406\u5e73\u53f0\u63d0\u4f9b\u5177\u4f53\u7684\u5b9e\u73b0\u3002\u9ed8\u8ba4\u60c5\u51b5\u662f\u4e00\u4e2a\u7a7a\u7684 ",(0,c.jsx)(n.code,{children:"TracerProvider (NoopTracerProvider)"}),"\uff0c\u867d\u7136\u4e5f\u80fd\u521b\u5efa ",(0,c.jsx)(n.code,{children:"Tracer"})," \u4f46\u662f\u5185\u90e8\u5176\u5b9e\u4e0d\u4f1a\u6267\u884c\u5177\u4f53\u7684\u6570\u636e\u6d41\u4f20\u8f93\u903b\u8f91\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"tracer",children:"Tracer"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Tracer"})," \u8868\u793a\u4e00\u6b21\u5b8c\u6574\u7684\u8ffd\u8e2a\u94fe\u8def\uff0c ",(0,c.jsx)(n.code,{children:"tracer"})," \u7531\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,c.jsx)(n.code,{children:"span"})," \u7ec4\u6210\u3002\u4e0b\u56fe\u793a\u4f8b\u8868\u793a\u4e86\u4e00\u4e2a\u7531 ",(0,c.jsx)(n.code,{children:"8"})," \u4e2a ",(0,c.jsx)(n.code,{children:"span"})," \u7ec4\u6210\u7684 ",(0,c.jsx)(n.code,{children:"tracer"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"        [Span A]  \u2190\u2190\u2190(the root span)\n            |\n     +------+------+\n     |             |\n [Span B]      [Span C] \u2190\u2190\u2190(Span C is a `ChildOf` Span A)\n     |             |\n [Span D]      +---+-------+\n               |           |\n           [Span E]    [Span F] >>> [Span G] >>> [Span H]\n                                       \u2191\n                                       \u2191\n                                       \u2191\n                         (Span G `FollowsFrom` Span F)\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u65f6\u95f4\u8f74\u7684\u5c55\u73b0\u65b9\u5f0f\u4f1a\u66f4\u5bb9\u6613\u7406\u89e3\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"\u2013\u2013|\u2013\u2013\u2013\u2013\u2013\u2013\u2013|\u2013\u2013\u2013\u2013\u2013\u2013\u2013|\u2013\u2013\u2013\u2013\u2013\u2013\u2013|\u2013\u2013\u2013\u2013\u2013\u2013\u2013|\u2013\u2013\u2013\u2013\u2013\u2013\u2013|\u2013\u2013\u2013\u2013\u2013\u2013\u2013|\u2013\u2013\u2013\u2013\u2013\u2013\u2013|\u2013> time\n\n [Span A\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7]\n   [Span B\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7]\n      [Span D\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7]\n    [Span C\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7]\n         [Span E\xb7\xb7\xb7\xb7\xb7\xb7\xb7]        [Span F\xb7\xb7] [Span G\xb7\xb7] [Span H\xb7\xb7]\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u901a\u5e38\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u521b\u5efa\u4e00\u4e2a ",(0,c.jsx)(n.code,{children:"Tracer"}),"\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"gtrace.NewTracer(tracerName)\n"})}),"\n",(0,c.jsx)(n.h3,{id:"span",children:"Span"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Span"})," \u662f\u4e00\u6761\u8ffd\u8e2a\u94fe\u8def\u4e2d\u7684\u57fa\u672c\u7ec4\u6210\u8981\u7d20\uff0c\u4e00\u4e2a ",(0,c.jsx)(n.code,{children:"span"})," \u8868\u793a\u4e00\u4e2a\u72ec\u7acb\u7684\u5de5\u4f5c\u5355\u5143\uff0c\u6bd4\u5982\u53ef\u4ee5\u8868\u793a\u4e00\u6b21\u51fd\u6570\u8c03\u7528\uff0c\u4e00\u6b21 ",(0,c.jsx)(n.code,{children:"http"})," \u8bf7\u6c42\u7b49\u7b49\u3002 ",(0,c.jsx)(n.code,{children:"span"})," \u4f1a\u8bb0\u5f55\u5982\u4e0b\u57fa\u672c\u8981\u7d20:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u670d\u52a1\u540d\u79f0\uff08 ",(0,c.jsx)(n.code,{children:"operation name"}),"\uff09"]}),"\n",(0,c.jsx)(n.li,{children:"\u670d\u52a1\u7684\u5f00\u59cb\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4"}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"K/V"})," \u5f62\u5f0f\u7684 ",(0,c.jsx)(n.code,{children:"Tags"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"K/V"})," \u5f62\u5f0f\u7684 ",(0,c.jsx)(n.code,{children:"Logs"})]}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"SpanContext"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Span"})," \u662f\u8fd9\u4e48\u591a\u5bf9\u8c61\u4e2d\u4f7f\u7528\u9891\u7387\u6700\u9ad8\u7684\uff0c\u56e0\u6b64\u521b\u5efa ",(0,c.jsx)(n.code,{children:"Span"})," \u4e5f\u975e\u5e38\u7b80\u4fbf\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"gtrace.NewSpan(ctx, spanName, opts...)\n"})}),"\n",(0,c.jsx)(n.h3,{id:"attributes",children:"Attributes"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Attributes"})," \u4ee5 ",(0,c.jsx)(n.code,{children:"K/V"})," \u952e\u503c\u5bf9\u7684\u5f62\u5f0f\u4fdd\u5b58\u7528\u6237\u81ea\u5b9a\u4e49\u6807\u7b7e\uff0c\u4e3b\u8981\u7528\u4e8e\u94fe\u8def\u8ffd\u8e2a\u7ed3\u679c\u7684\u67e5\u8be2\u8fc7\u6ee4\u3002\u4f8b\u5982\uff1a ",(0,c.jsx)(n.code,{children:'http.method="GET",http.status_code=200'}),"\u3002\u5176\u4e2d ",(0,c.jsx)(n.code,{children:"key"})," \u503c\u5fc5\u987b\u4e3a\u5b57\u7b26\u4e32\uff0c ",(0,c.jsx)(n.code,{children:"value"})," \u5fc5\u987b\u662f\u5b57\u7b26\u4e32\uff0c\u5e03\u5c14\u578b\u6216\u8005\u6570\u503c\u578b\u3002 ",(0,c.jsx)(n.code,{children:"span"})," \u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"Attributes"})," \u4ec5\u81ea\u5df1\u53ef\u89c1\uff0c\u4e0d\u4f1a\u968f\u7740 ",(0,c.jsx)(n.code,{children:"SpanContext"})," \u4f20\u9012\u7ed9\u540e\u7eed ",(0,c.jsx)(n.code,{children:"span"}),"\u3002 \u8bbe\u7f6e ",(0,c.jsx)(n.code,{children:"Attributes"})," \u65b9\u5f0f\u4f8b\u5982\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'span.SetAttributes(\n    label.String("http.remote", conn.RemoteAddr().String()),\n    label.String("http.local", conn.LocalAddr().String()),\n)\n'})}),"\n",(0,c.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Events"})," \u4e0e ",(0,c.jsx)(n.code,{children:"Attributes"})," \u7c7b\u4f3c\uff0c\u4e5f\u662f ",(0,c.jsx)(n.code,{children:"K/V"})," \u952e\u503c\u5bf9\u5f62\u5f0f\u3002\u4e0e ",(0,c.jsx)(n.code,{children:"Attributes"})," \u4e0d\u540c\u7684\u662f\uff0c ",(0,c.jsx)(n.code,{children:"Events"})," \u8fd8\u4f1a\u8bb0\u5f55\u5199\u5165 ",(0,c.jsx)(n.code,{children:"Events"})," \u7684\u65f6\u95f4\uff0c\u56e0\u6b64 ",(0,c.jsx)(n.code,{children:"Events"})," \u4e3b\u8981\u7528\u4e8e\u8bb0\u5f55\u67d0\u4e9b\u4e8b\u4ef6\u53d1\u751f\u7684\u65f6\u95f4\u3002 ",(0,c.jsx)(n.code,{children:"Events"})," \u7684 ",(0,c.jsx)(n.code,{children:"key"})," \u503c\u540c\u6837\u5fc5\u987b\u4e3a\u5b57\u7b26\u4e32\uff0c\u4f46\u5bf9 ",(0,c.jsx)(n.code,{children:"value"})," \u7c7b\u578b\u5219\u6ca1\u6709\u9650\u5236\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'span.AddEvent("http.request", trace.WithAttributes(\n    label.Any("http.request.header", headers),\n    label.Any("http.request.baggage", gtrace.GetBaggageMap(ctx)),\n    label.String("http.request.body", bodyContent),\n))\n'})}),"\n",(0,c.jsx)(n.h3,{id:"spancontext",children:"SpanContext"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"SpanContext"})," \u643a\u5e26\u7740\u4e00\u4e9b\u7528\u4e8e ",(0,c.jsx)(n.strong,{children:"\u8de8\u670d\u52a1\u901a\u4fe1\u7684\uff08\u8de8\u8fdb\u7a0b\uff09"})," \u6570\u636e\uff0c\u4e3b\u8981\u5305\u542b\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u8db3\u591f\u5728\u7cfb\u7edf\u4e2d\u6807\u8bc6\u8be5 ",(0,c.jsx)(n.code,{children:"span"})," \u7684\u4fe1\u606f\uff0c\u6bd4\u5982\uff1a ",(0,c.jsx)(n.code,{children:"span_id, trace_id"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Baggage"})," -\xa0\u4e3a\u6574\u6761\u8ffd\u8e2a\u8fde\u4fdd\u5b58\u8de8\u670d\u52a1\uff08\u8de8\u8fdb\u7a0b\uff09\u7684 ",(0,c.jsx)(n.code,{children:"K/V"})," \u683c\u5f0f\u7684\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e\u3002 ",(0,c.jsx)(n.code,{children:"Baggage"})," \u4e0e ",(0,c.jsx)(n.code,{children:"Attributes"})," \u7c7b\u4f3c\uff0c\u4e5f\u662f ",(0,c.jsx)(n.code,{children:"K/V"})," \u952e\u503c\u5bf9\u3002\u4e0e ",(0,c.jsx)(n.code,{children:"Attributes"})," \u4e0d\u540c\u7684\u662f\uff1a"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5176 ",(0,c.jsx)(n.code,{children:"key"})," \u8ddf ",(0,c.jsx)(n.code,{children:"value"})," \u90fd\u53ea\u80fd\u662f\u5b57\u7b26\u4e32\u683c\u5f0f"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Baggage"})," \u4e0d\u4ec5\u5f53\u524d ",(0,c.jsx)(n.code,{children:"span"})," \u53ef\u89c1\uff0c\u5176\u4f1a\u968f\u7740 ",(0,c.jsx)(n.code,{children:"SpanContext"})," \u4f20\u9012\u7ed9\u540e\u7eed\u6240\u6709\u7684\u5b50 ",(0,c.jsx)(n.code,{children:"span"}),"\u3002\u8981\u5c0f\u5fc3\u8c28\u614e\u7684\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"Baggage"}),"\xa0- \u56e0\u4e3a\u5728\u6240\u6709\u7684 ",(0,c.jsx)(n.code,{children:"span"})," \u4e2d\u4f20\u9012\u8fd9\u4e9b ",(0,c.jsx)(n.code,{children:"K,V"})," \u4f1a\u5e26\u6765\u4e0d\u5c0f\u7684\u7f51\u7edc\u548c ",(0,c.jsx)(n.code,{children:"CPU"})," \u5f00\u9500\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"propagator",children:"Propagator"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Propagator"})," \u4f20\u64ad\u5668\u7528\u4e8e\u7aef\u5bf9\u7aef\u7684\u6570\u636e\u7f16\u7801/\u89e3\u7801\uff0c\u4f8b\u5982\uff1a ",(0,c.jsx)(n.code,{children:"Client"})," \u5230 ",(0,c.jsx)(n.code,{children:"Server"})," \u7aef\u7684\u6570\u636e\u4f20\u8f93\uff0c ",(0,c.jsx)(n.code,{children:"TraceId"}),"\u3001 ",(0,c.jsx)(n.code,{children:"SpanId"})," \u548c ",(0,c.jsx)(n.code,{children:"Baggage"})," \u4e5f\u662f\u9700\u8981\u901a\u8fc7\u4f20\u64ad\u5668\u6765\u7ba1\u7406\u6570\u636e\u4f20\u8f93\u3002\u4e1a\u52a1\u7aef\u5f00\u53d1\u8005\u5f80\u5f80\u5bf9 ",(0,c.jsx)(n.code,{children:"Propagator"})," \u65e0\u611f\u77e5\uff0c\u53ea\u6709\u4e2d\u95f4\u4ef6/\u62e6\u622a\u5668\u7684\u5f00\u53d1\u8005\u9700\u8981\u77e5\u9053\u5b83\u7684\u4f5c\u7528\u3002 ",(0,c.jsx)(n.code,{children:"OpenTelemetry"})," \u7684\u6807\u51c6\u534f\u8bae\u5b9e\u73b0\u5e93\u63d0\u4f9b\u4e86\u5e38\u7528\u7684 ",(0,c.jsx)(n.code,{children:"TextMapPropagator"}),"\uff0c\u7528\u4e8e\u5e38\u89c1\u7684\u6587\u672c\u6570\u636e\u7aef\u5230\u7aef\u4f20\u8f93\u3002\u6b64\u5916\uff0c\u4e3a\u4fdd\u8bc1 ",(0,c.jsx)(n.code,{children:"TextMapPropagator"})," \u4e2d\u7684\u4f20\u8f93\u6570\u636e\u517c\u5bb9\u6027\uff0c\u4e0d\u5e94\u5f53\u5e26\u6709\u7279\u6b8a\u5b57\u7b26\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\uff1a ",(0,c.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/context/api-propagators.md",children:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/context/api-propagators.md"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"gtrace"})," \u6a21\u5757\u4f7f\u7528\u4e86\u4ee5\u4e0b\u4f20\u64ad\u5668\u5bf9\u8c61\uff0c\u5e76\u5168\u5c40\u8bbe\u7f6e\u5230\u4e86 ",(0,c.jsx)(n.code,{children:"OpenTelemetry"})," \u4e2d\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"// defaultTextMapPropagator is the default propagator for context propagation between peers.\ndefaultTextMapPropagator = propagation.NewCompositeTextMapPropagator(\n    propagation.TraceContext{},\n    propagation.Baggage{},\n)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u4e09\u652f\u6301\u7ec4\u4ef6",children:"\u4e09\u3001\u652f\u6301\u7ec4\u4ef6"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"GoFrame"})," \u7684\u6838\u5fc3\u7ec4\u4ef6\u90fd\u5df2\u7ecf\u5168\u9762\u652f\u6301 ",(0,c.jsx)(n.code,{children:"OpenTelemetry"})," \u6807\u51c6\uff0c\u5e76\u4e14\u81ea\u52a8\u5f00\u542f\u4e86\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\uff0c\u5f00\u53d1\u8005\u65e0\u9700\u663e\u793a\u8c03\u7528\u3001\u4f7f\u7528\u65e0\u611f\u77e5\u3002\u5728\u6ca1\u6709\u6ce8\u5165\u5916\u90e8 ",(0,c.jsx)(n.code,{children:"TracerProvider"})," \u7684\u60c5\u51b5\u4e0b\uff0c\u6846\u67b6\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684 ",(0,c.jsx)(n.code,{children:"TracerProvider"}),"\uff0c\u8be5 ",(0,c.jsx)(n.code,{children:"TracerProvider"})," \u53ea\u4f1a\u81ea\u52a8\u521b\u5efa ",(0,c.jsx)(n.code,{children:"TraceID"})," \u53ca ",(0,c.jsx)(n.code,{children:"SpanID"}),"\uff0c\u5e76\u4e0d\u4f1a\u6267\u884c\u590d\u6742\u903b\u8f91\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4ee5\u4e0b\u6838\u5fc3\u7ec4\u4ef6\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"Http Client"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"HTTP"})," \u5ba2\u6237\u7aef\u81ea\u52a8\u542f\u7528\u4e86\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\uff0c\u5177\u4f53\u4f7f\u7528\u793a\u4f8b\u8bf7\u53c2\u8003\u540e\u7eed\u793a\u4f8b\u7ae0\u8282\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"Http Server"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"HTTP"})," \u670d\u52a1\u7aef\u81ea\u52a8\u542f\u7528\u4e86\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\uff0c\u5177\u4f53\u4f7f\u7528\u793a\u4f8b\u8bf7\u53c2\u8003\u540e\u7eed\u793a\u4f8b\u7ae0\u8282\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"gRPC Client"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"gRPC"})," \u5ba2\u6237\u7aef\u81ea\u52a8\u542f\u7528\u4e86\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\uff0c\u5177\u4f53\u4f7f\u7528\u793a\u4f8b\u8bf7\u53c2\u8003\u540e\u7eed\u793a\u4f8b\u7ae0\u8282\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"gRPC Server"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"gRPC"})," \u670d\u52a1\u7aef\u81ea\u52a8\u542f\u7528\u4e86\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\uff0c\u5177\u4f53\u4f7f\u7528\u793a\u4f8b\u8bf7\u53c2\u8003\u540e\u7eed\u793a\u4f8b\u7ae0\u8282\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"Logging"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u65e5\u5fd7\u5185\u5bb9\u4e2d\u9700\u8981\u6ce8\u5165\u5f53\u524d\u8bf7\u6c42\u7684 ",(0,c.jsx)(n.code,{children:"TraceId"}),"\uff0c\u4ee5\u65b9\u4fbf\u901a\u8fc7\u65e5\u5fd7\u5feb\u901f\u67e5\u627e\u5b9a\u4f4d\u95ee\u9898\u70b9\u3002\u8be5\u7279\u6027\u662f\u7531 ",(0,c.jsx)(n.code,{children:"glog"})," \u7ec4\u4ef6\u5b9e\u73b0\uff0c\u8fd9\u9700\u8981\u5f00\u53d1\u8005\u5728\u8f93\u51fa\u65e5\u5fd7\u7684\u65f6\u5019\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"Ctx"})," \u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\u5c06 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u4f20\u9012\u5230\u5f53\u524d\u8f93\u51fa\u65e5\u5fd7\u64cd\u4f5c\u94fe\u8def\u4e2d\uff0c\u6ca1\u6709\u4f20\u9012 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u5c31\u4f1a\u4e22\u5931\u65e5\u5fd7\u5185\u5bb9\u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"TraceId"}),"\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"ORM"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6570\u636e\u5e93\u7684\u6267\u884c\u662f\u5f88\u91cd\u8981\u7684\u94fe\u8def\u73af\u8282\uff0c ",(0,c.jsx)(n.code,{children:"Orm"})," \u7ec4\u4ef6\u9700\u8981\u5c06\u81ea\u8eab\u7684\u6267\u884c\u60c5\u51b5\u6295\u9012\u5230\u94fe\u8def\u4e2d\uff0c\u4f5c\u4e3a\u6267\u884c\u94fe\u8def\u7684\u4e00\u90e8\u5206\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"Redis"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Redis"})," \u7684\u6267\u884c\u4e5f\u662f\u5f88\u91cd\u8981\u7684\u94fe\u8def\u73af\u8282\uff0c ",(0,c.jsx)(n.code,{children:"Redis"})," \u9700\u8981\u5c06\u81ea\u8eab\u7684\u6267\u884c\u60c5\u51b5\u6295\u9012\u5230\u94fe\u8def\u4e2d\uff0c\u4f5c\u4e3a\u6267\u884c\u94fe\u8def\u7684\u4e00\u90e8\u5206\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"Utils"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5bf9\u4e8e ",(0,c.jsx)(n.code,{children:"Tracing"})," \u7279\u6027\u7684\u7ba1\u7406\u9700\u8981\u505a\u4e00\u5b9a\u7684\u5c01\u88c5\uff0c\u4e3b\u8981\u8003\u8651\u7684\u662f\u53ef\u6269\u5c55\u6027\u548c\u6613\u7528\u6027\u4e24\u65b9\u9762\u3002\u8be5\u5c01\u88c5\u7531 ",(0,c.jsx)(n.code,{children:"gtrace"})," \u6a21\u5757\u5b9e\u73b0\uff0c\u6587\u6863\u5730\u5740\uff1a ",(0,c.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtrace",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtrace"})]}),"\n",(0,c.jsx)(n.h2,{id:"\u56db\u53c2\u8003\u8d44\u6599",children:"\u56db\u3001\u53c2\u8003\u8d44\u6599"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://opentracing.io/",children:"https://opentracing.io"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://opencensus.io/",children:"https://opencensus.io"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://opentelemetry.io/",children:"https://opentelemetry.io"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-specification/tree/main/specification",children:"https://github.com/open-telemetry/opentelemetry-specification/tree/main/specification"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},305196:(e,n,r)=>{r.d(n,{A:()=>c});const c=r.p+"assets/images/109ba514abf553e05d4844c667d2ab6a-4afbf40d9585c9cfe4372c5812ebbc21.jpg"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>t});var c=r(296540);const i={},d=c.createContext(i);function s(e){const n=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);
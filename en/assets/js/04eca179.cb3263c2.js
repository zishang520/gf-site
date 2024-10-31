"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[12153],{46694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=t(74848),o=t(28453);const i={slug:"/obs/metrics/sync",title:"\u76d1\u63a7\u544a\u8b66-\u540c\u6b65\u6307\u6807",sidebar_position:2,hide_title:!0},s=void 0,c={id:"\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u540c\u6b65\u6307\u6807",title:"\u76d1\u63a7\u544a\u8b66-\u540c\u6b65\u6307\u6807",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/docs/9-\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/1-\u670d\u52a1\u76d1\u63a7\u544a\u8b66/2-\u76d1\u63a7\u544a\u8b66-\u540c\u6b65\u6307\u6807.md",sourceDirName:"9-\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/1-\u670d\u52a1\u76d1\u63a7\u544a\u8b66",slug:"/obs/metrics/sync",permalink:"/gf-site/en/docs/obs/metrics/sync",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/9-\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/1-\u670d\u52a1\u76d1\u63a7\u544a\u8b66/2-\u76d1\u63a7\u544a\u8b66-\u540c\u6b65\u6307\u6807.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730354542e3,sidebarPosition:2,frontMatter:{slug:"/obs/metrics/sync",title:"\u76d1\u63a7\u544a\u8b66-\u540c\u6b65\u6307\u6807",sidebar_position:2,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u76d1\u63a7\u544a\u8b66-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/en/docs/obs/metrics/example"},next:{title:"\u76d1\u63a7\u544a\u8b66-\u5f02\u6b65\u6307\u6807",permalink:"/gf-site/en/docs/obs/metrics/async"}},d={},m=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"Counter&amp;UpDownCounter",id:"counterupdowncounter",level:2},{value:"Histogram",id:"histogram",level:2},{value:"Primetheus Exporter",id:"primetheus-exporter",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u540c\u6b65\u7c7b\u578b"})," \u7528\u4e8e\u5feb\u901f\u66b4\u9732\u76d1\u63a7\u6307\u6807\uff0c\u65e0\u8bba ",(0,r.jsx)(n.code,{children:"metrics reader"})," \u662f\u5426\u4f7f\u7528\u8be5\u76d1\u63a7\u6307\u6807\uff0c\u6307\u6807\u7684\u8ba1\u7b97\u7ed3\u679c\u5df2\u5b8c\u6210\uff0c\u5f85\u8bfb\u53d6\u4f7f\u7528\u3002\u4f8b\u5982\uff0cHTTP\u7684\u8bf7\u6c42\u603b\u6570\u3001\u8bf7\u6c42\u5927\u5c0f\uff0c\u8fd9\u4e9b\u6570\u503c\u5fc5\u987b\u5728\u8bf7\u6c42\u6267\u884c\u6d41\u7a0b\u4e2d\u8bb0\u5f55\u5230\u5bf9\u5e94\u7684\u76d1\u63a7\u6307\u6807\u6570\u503c\u4e2d\uff0c\u9002\u5408\u4f5c\u4e3a\u540c\u6b65\u6307\u6807\u6765\u7ba1\u7406\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gmetric"})," \u63d0\u4f9b\u7684\u540c\u6b65\u7c7b\u578b\u6307\u6807\u5305\u542b\uff1a ",(0,r.jsx)(n.code,{children:"Counter, UpDownCounter, Histogram"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u6765\u6f14\u793a\u540c\u6b65\u6307\u6807\u7684\u57fa\u672c\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "go.opentelemetry.io/otel/exporters/prometheus"\n\n    "github.com/gogf/gf/contrib/metric/otelmetric/v2"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gmetric"\n)\n\nvar (\n    meter = gmetric.GetGlobalProvider().Meter(gmetric.MeterOption{\n        Instrument:        "github.com/gogf/gf/example/metric/basic",\n        InstrumentVersion: "v1.0",\n    })\n    counter = meter.MustCounter(\n        "goframe.metric.demo.counter",\n        gmetric.MetricOption{\n            Help: "This is a simple demo for Counter usage",\n            Unit: "bytes",\n        },\n    )\n    upDownCounter = meter.MustUpDownCounter(\n        "goframe.metric.demo.updown_counter",\n        gmetric.MetricOption{\n            Help: "This is a simple demo for UpDownCounter usage",\n            Unit: "%",\n        },\n    )\n    histogram = meter.MustHistogram(\n        "goframe.metric.demo.histogram",\n        gmetric.MetricOption{\n            Help:    "This is a simple demo for histogram usage",\n            Unit:    "ms",\n            Buckets: []float64{0, 10, 20, 50, 100, 500, 1000, 2000, 5000, 10000},\n        },\n    )\n)\n\nfunc main() {\n    var ctx = gctx.New()\n\n    // Prometheus exporter to export metrics as Prometheus format.\n    exporter, err := prometheus.New(\n        prometheus.WithoutCounterSuffixes(),\n        prometheus.WithoutUnits(),\n    )\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // OpenTelemetry provider.\n    provider := otelmetric.MustProvider(otelmetric.WithReader(exporter))\n    provider.SetAsGlobal()\n    defer provider.Shutdown(ctx)\n\n    // Counter.\n    counter.Inc(ctx)\n    counter.Add(ctx, 10)\n\n    // UpDownCounter.\n    upDownCounter.Inc(ctx)\n    upDownCounter.Add(ctx, 10)\n    upDownCounter.Dec(ctx)\n\n    // Record values for histogram.\n    histogram.Record(1)\n    histogram.Record(20)\n    histogram.Record(30)\n    histogram.Record(101)\n    histogram.Record(2000)\n    histogram.Record(9000)\n    histogram.Record(20000)\n\n    // HTTP Server for metrics exporting.\n    otelmetric.StartPrometheusMetricsServer(8000, "/metrics")\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"counterupdowncounter",children:"Counter&UpDownCounter"}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"Counter"})," \u548c ",(0,r.jsx)(n.code,{children:"UpDownCounter"})," \u6bd4\u8f83\u7b80\u5355\uff0c\u8fd9\u91cc\u5c31\u4e0d\u8be6\u7ec6\u4ecb\u7ecd\u4e86\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f ",(0,r.jsx)(n.code,{children:"Counter"})," \u548c ",(0,r.jsx)(n.code,{children:"UpDownCounter"})," \u867d\u7136\u770b\u8d77\u6765\u5dee\u4e0d\u591a\uff0c\u5b9e\u9645\u4e0a\u4e5f\u662f\u5982\u6b64\uff0c\u53ea\u662f\u4e3a\u4e86\u66f4\u4e25\u8c28\u548c\u7cbe\u7ec6\u5316\u533a\u5206\u4f7f\u7528\u573a\u666f\u3002\u5982\u679c\u5c06\u8fd9\u4e24\u79cd\u6570\u636e\u7c7b\u578b\u6620\u5c04\u5230\u7ecf\u5178\u7684 ",(0,r.jsx)(n.code,{children:"Prometheus"})," \u6307\u6807\u7c7b\u578b\u4e2d\uff0c ",(0,r.jsx)(n.code,{children:"Counter"})," \u5bf9\u5e94\u7684\u5c31\u662f ",(0,r.jsx)(n.code,{children:"Prometheus"})," \u7684 ",(0,r.jsx)(n.code,{children:"Counter"})," \u6307\u6807\u7c7b\u578b\uff0c\u800c ",(0,r.jsx)(n.code,{children:"UpDownCounter"})," \u5bf9\u5e94\u7684\u662f ",(0,r.jsx)(n.code,{children:"Prometheus"})," \u7684 ",(0,r.jsx)(n.code,{children:"Gauge"})," \u6307\u6807\u7c7b\u578b\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"histogram",children:"Histogram"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Histogram"})," \u662f\u4e00\u79cd\u7edf\u8ba1\u7c7b\u578b\uff0c\u901a\u8fc7\u8be5\u6307\u6807\u53ef\u4ee5\u5feb\u901f\u7edf\u8ba1\u51fa\u6307\u6807\u7684 ",(0,r.jsx)(n.code,{children:"p95, p99"})," \u7b49\u767e\u5206\u4f4d\u7edf\u8ba1\u7ed3\u679c\u76f4\u65b9\u56fe\uff0c\u4f8b\u5982\u65f6\u95f4\u5f00\u9500\u3001\u6210\u529f/\u5931\u8d25\u7387\u7b49\u6307\u6807\u3002\u4f46\u9700\u8981\u6ce8\u610f\u8be5\u6307\u6807\u6bd4\u8f83\u5360\u5185\u5b58\u548c\u7a7a\u95f4\uff0c\u4e0d\u80fd\u4e3a\u5176\u6dfb\u52a0\u8fc7\u591a\u7684 ",(0,r.jsx)(n.strong,{children:"\u52a8\u6001\u5c5e\u6027"}),"\uff0c\u56e0\u4e3a\u4e0d\u540c\u7684\u5c5e\u6027\u4f1a\u884d\u751f\u51fa\u540c\u4e00\u79cd ",(0,r.jsx)(n.code,{children:"Histogram"})," \u6307\u6807\u4e0d\u540c\u7684\u5b58\u50a8\u6570\u503c\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"primetheus-exporter",children:"Primetheus Exporter"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u6bd4\u8f83\u5e38\u7528\u7684 ",(0,r.jsx)(n.code,{children:"Prometheus"})," \u534f\u8bae\u8f93\u51fa\u6307\u6807\u5185\u5bb9\uff0c\u901a\u5e38\u7528\u4e8e\u5bf9\u5916\u66b4\u9732\u6307\u6807\u4f9b\u5916\u90e8\u7ec4\u4ef6\u6293\u53d6\u3002\u901a\u8fc7\u4ee5\u4e0b\u8def\u7531\u5c06\u6307\u6807\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Prometheus"})," \u534f\u8bae\u66b4\u9732\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'otelmetric.StartPrometheusMetricsServer(8000, "/metrics")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884c\u540e\uff0c\u8bbf\u95ee ",(0,r.jsx)(n.a,{href:"http://127.0.0.1:8000/metrics",children:"http://127.0.0.1:8000/metrics"})," \u67e5\u770b\u66b4\u9732\u7684\u6307\u6807\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(26017).A+"",width:"2160",height:"2014"})}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u8fd9\u91cc\u53ea\u5173\u6ce8\u672c\u6b21\u793a\u4f8b\u4e2d\u7684\u6307\u6807\uff0c\u5176\u4ed6\u81ea\u52a8\u66b4\u9732\u7684\u6307\u6807\u5728\u540e\u7eed\u7ae0\u8282\u4ecb\u7ecd\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},26017:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/50c5c45e521aa19633873aa9f9186ac3-97921be064a668013024a15faaeae91d.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
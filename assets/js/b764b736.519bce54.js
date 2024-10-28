"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[85018],{185840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var n=r(474848),s=r(28453);const d={title:"\u76d1\u63a7\u544a\u8b66-\u5185\u7f6e\u6307\u6807",sidebar_position:5},c=void 0,i={id:"\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u5185\u7f6e\u6307\u6807",title:"\u76d1\u63a7\u544a\u8b66-\u5185\u7f6e\u6307\u6807",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.7.x/9-\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/1-\u670d\u52a1\u76d1\u63a7\u544a\u8b66/5-\u76d1\u63a7\u544a\u8b66-\u5185\u7f6e\u6307\u6807.md",sourceDirName:"9-\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/1-\u670d\u52a1\u76d1\u63a7\u544a\u8b66",slug:"/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u5185\u7f6e\u6307\u6807",permalink:"/docs/2.7.x/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u5185\u7f6e\u6307\u6807",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/9-\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/1-\u670d\u52a1\u76d1\u63a7\u544a\u8b66/5-\u76d1\u63a7\u544a\u8b66-\u5185\u7f6e\u6307\u6807.md",tags:[],version:"2.7.x",lastUpdatedBy:"John",lastUpdatedAt:172999724e4,sidebarPosition:5,frontMatter:{title:"\u76d1\u63a7\u544a\u8b66-\u5185\u7f6e\u6307\u6807",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u76d1\u63a7\u544a\u8b66-\u6307\u6807\u5c5e\u6027",permalink:"/docs/2.7.x/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u6307\u6807\u5c5e\u6027"},next:{title:"\u76d1\u63a7\u544a\u8b66-\u7ec4\u4ef6\u6307\u6807",permalink:"/docs/2.7.x/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u7ec4\u4ef6\u6307\u6807"}},o={},l=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u5185\u7f6e\u6307\u6807\u8bf4\u660e",id:"\u5185\u7f6e\u6307\u6807\u8bf4\u660e",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,n.jsxs)(t.p,{children:["\u6846\u67b6\u5185\u7f6e\u4e86 ",(0,n.jsx)(t.code,{children:"Go"})," \u57fa\u7840\u6307\u6807\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u5173\u95ed\u7684\uff0c\u9700\u8981\u624b\u52a8\u5f00\u542f\uff0c\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa ",(0,n.jsx)(t.code,{children:"Provider"})," \u65f6\u901a\u8fc7 ",(0,n.jsx)(t.code,{children:"otelmetric.WithBuiltInMetrics()"})," \u53c2\u6570\u5f00\u542f\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'package main\n\nimport (\n\t"go.opentelemetry.io/otel/exporters/prometheus"\n\n\t"github.com/gogf/gf/contrib/metric/otelmetric/v2"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/gmetric"\n)\n\nconst (\n\tinstrument        = "github.com/gogf/gf/example/metric/basic"\n\tinstrumentVersion = "v1.0"\n)\n\nvar (\n\tmeter = gmetric.GetGlobalProvider().Meter(gmetric.MeterOption{\n\t\tInstrument:        instrument,\n\t\tInstrumentVersion: instrumentVersion,\n\t})\n\tcounter = meter.MustCounter(\n\t\t"goframe.metric.demo.counter",\n\t\tgmetric.MetricOption{\n\t\t\tHelp: "This is a simple demo for Counter usage",\n\t\t\tUnit: "bytes",\n\t\t},\n\t)\n)\n\nfunc main() {\n\tvar ctx = gctx.New()\n\n\t// Prometheus exporter to export metrics as Prometheus format.\n\texporter, err := prometheus.New(\n\t\tprometheus.WithoutCounterSuffixes(),\n\t\tprometheus.WithoutUnits(),\n\t)\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\n\t// OpenTelemetry provider.\n\tprovider := otelmetric.MustProvider(\n\t\totelmetric.WithReader(exporter),\n\t\totelmetric.WithBuiltInMetrics(),\n\t)\n\tprovider.SetAsGlobal()\n\tdefer provider.Shutdown(ctx)\n\n\t// Counter.\n\tcounter.Inc(ctx)\n\tcounter.Add(ctx, 10)\n\n\t// HTTP Server for metrics exporting.\n\totelmetric.StartPrometheusMetricsServer(8000, "/metrics")\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["\u6267\u884c\u540e\uff0c\u8bbf\u95ee ",(0,n.jsx)(t.a,{href:"http://127.0.0.1:8000/metrics",children:"http://127.0.0.1:8000/metrics"})," \u67e5\u770b\u7ed3\u679c\u3002"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(453341).A+"",width:"2966",height:"2014"})}),"\n",(0,n.jsx)(t.h2,{id:"\u5185\u7f6e\u6307\u6807\u8bf4\u660e",children:"\u5185\u7f6e\u6307\u6807\u8bf4\u660e"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"\u6307\u6807\u540d\u79f0"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"\u6307\u6807\u7c7b\u578b"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"\u6307\u6807\u5355\u4f4d"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"\u6307\u6807\u63cf\u8ff0"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"process.runtime.go.cgo.calls"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Counter"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["\u5f53\u524d\u8fdb\u7a0b\u8c03\u7528\u7684 ",(0,n.jsx)(t.code,{children:"cgo"})," \u6b21\u6570\u3002"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"process.runtime.go.gc.count"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Counter"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["\u5df2\u5b8c\u6210\u7684 ",(0,n.jsx)(t.code,{children:"gc"})," \u5468\u671f\u7684\u6b21\u6570\u3002"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"process.runtime.go.gc.pause_ns"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Histogram"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ns"})}),(0,n.jsxs)(t.td,{children:["\u5728 ",(0,n.jsx)(t.code,{children:"GC stop-the-world "})," \u4e2d\u6682\u505c\u7684\u7eb3\u79d2\u6570\u91cf\u3002"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"process.runtime.go.gc.pause_total_ns"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Counter"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ns"})}),(0,n.jsxs)(t.td,{children:["\u81ea\u7a0b\u5e8f\u542f\u52a8\u4ee5\u6765\uff0c ",(0,n.jsx)(t.code,{children:"GC stop-the-world "})," \u7684\u7d2f\u8ba1\u5fae\u79d2\u8ba1\u6570\u3002"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"process.runtime.go.goroutines"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Gauge"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u5f53\u524d\u8fd0\u884c\u7684\u534f\u7a0b\u6570\u91cf\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"process.runtime.go.lookups"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Counter"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u8fd0\u884c\u65f6\u6267\u884c\u7684\u6307\u9488\u67e5\u8be2\u7684\u6570\u91cf\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"process.runtime.go.mem.heap_alloc"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Gauge"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"bytes"})}),(0,n.jsx)(t.td,{children:"\u5206\u914d\u7684\u5806\u5bf9\u8c61\u7684\u5b57\u8282\u6570\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"process.runtime.go.mem.heap_idle"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Gauge"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"bytes"})}),(0,n.jsx)(t.td,{children:"\u7a7a\u95f2\uff08\u672a\u4f7f\u7528\uff09\u7684\u5806\u5185\u5b58\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"process.runtime.go.mem.heap_inuse"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Gauge"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"bytes"})}),(0,n.jsx)(t.td,{children:"\u5df2\u4f7f\u7528\u7684\u5806\u5185\u5b58\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"process.runtime.go.mem.heap_objects"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Gauge"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u5df2\u5206\u914d\u7684\u5806\u5bf9\u8c61\u6570\u91cf\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"process.runtime.go.mem.live_objects"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Gauge"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["\u5b58\u6d3b\u5bf9\u8c61\u6570\u91cf( ",(0,n.jsx)(t.code,{children:"Mallocs - Frees"}),")"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"process.runtime.go.mem.heap_released"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Gauge"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"bytes"})}),(0,n.jsx)(t.td,{children:"\u5df2\u4ea4\u8fd8\u7ed9\u64cd\u4f5c\u7cfb\u7edf\u7684\u5806\u5185\u5b58\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"process.runtime.go.mem.heap_sys"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Gauge"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"bytes"})}),(0,n.jsx)(t.td,{children:"\u4ece\u64cd\u4f5c\u7cfb\u7edf\u83b7\u5f97\u7684\u5806\u5185\u5b58\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"process.runtime.uptime"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Counter"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ms"})}),(0,n.jsx)(t.td,{children:"\u81ea\u5e94\u7528\u7a0b\u5e8f\u88ab\u521d\u59cb\u5316\u4ee5\u6765\u7684\u6beb\u79d2\u6570\u3002"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},453341:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/daf1d8449208ba307efd483c505b7b5a-643570199582f99bdada658b4dbbe7ee.png"},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(296540);const s={},d=n.createContext(s);function c(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);
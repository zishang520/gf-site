"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[2236],{40296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var o=t(74848),c=t(28453);const s={slug:"/components/container/gqueue-benchmark",title:"\u961f\u5217\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",sidebar_position:1,hide_title:!0},r=void 0,i={id:"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",title:"\u961f\u5217\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",description:"https://github.com/gogf/gf/v2/blob/master/container/gqueue/gqueue\\z\\bench\\test.go",source:"@site/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5.md",sourceDirName:"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue",slug:"/components/container/gqueue-benchmark",permalink:"/gf-site/docs/components/container/gqueue-benchmark",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730376618e3,sidebarPosition:1,frontMatter:{slug:"/components/container/gqueue-benchmark",title:"\u961f\u5217\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",sidebar_position:1,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/docs/components/container/gqueue-example"},next:{title:"\u6811\u5f62\u7c7b\u578b-gtree",permalink:"/gf-site/docs/components/container/gtree"}},u={},a=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/gogf/gf/v2/blob/master/container/gqueue/gqueue_z_bench_test.go",children:"https://github.com/gogf/gf/v2/blob/master/container/gqueue/gqueue_z_bench_test.go"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"gqueue"})," \u4e0e\u6807\u51c6\u5e93 ",(0,o.jsx)(n.code,{children:"channel"})," \u7684\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\uff0c\u5176\u4e2d\u6bcf\u4e00\u6b21\u57fa\u51c6\u6d4b\u8bd5\u7684 ",(0,o.jsx)(n.code,{children:"b.N"})," \u503c\u5747\u4e3a ",(0,o.jsx)(n.code,{children:"20000000"}),"\uff0c\u4ee5\u4fdd\u8bc1\u52a8\u6001\u961f\u5217\u5b58\u53d6\u4e00\u81f4\u9632\u6b62 ",(0,o.jsx)(n.code,{children:"deadlock"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"goos: linux\ngoarch: amd64\npkg: github.com/gogf/gf/v2/container/gqueue\nBenchmark_Gqueue_StaticPushAndPop-4       20000000            84.2 ns/op\nBenchmark_Gqueue_DynamicPush-4            20000000             164 ns/op\nBenchmark_Gqueue_DynamicPop-4             20000000             121 ns/op\nBenchmark_Channel_PushAndPop-4            20000000            70.0 ns/op\nPASS\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u6807\u51c6\u5e93\u7684 ",(0,o.jsx)(n.code,{children:"channel"})," \u7684\u8bfb\u5199\u6027\u80fd\u662f\u975e\u5e38\u9ad8\u7684\uff0c\u4f46\u662f\u521b\u5efa\u7684\u65f6\u5019\u7531\u4e8e\u9700\u8981\u521d\u59cb\u5316\u5185\u5b58\uff0c\u56e0\u6b64\u521b\u5efa ",(0,o.jsx)(n.code,{children:"channel"})," \u7684\u65f6\u5019\u6548\u7387\u975e\u5e38\u975e\u5e38\u4f4e\uff08\u521d\u59cb\u5316\u5373\u5206\u914d\u5185\u5b58\uff09\uff0c\u5e76\u4e14\u53d7\u5230\u961f\u5217\u5927\u5c0f\u7684\u9650\u5236\uff0c\u5199\u5165\u7684\u6570\u636e\u4e0d\u80fd\u8d85\u8fc7\u6307\u5b9a\u7684\u961f\u5217\u5927\u5c0f\u3002 ",(0,o.jsx)(n.code,{children:"gqueue"})," \u4f7f\u7528\u8d77\u6765\u6bd4 ",(0,o.jsx)(n.code,{children:"channel"})," \u66f4\u52a0\u7075\u6d3b\uff0c\u4e0d\u4ec5\u521b\u5efa\u6548\u7387\u9ad8\uff08\u52a8\u6001\u5206\u914d\u5185\u5b58\uff09\uff0c\u4e0d\u53d7\u961f\u5217\u5927\u5c0f\u9650\u5236(\u4e5f\u53ef\u9650\u5b9a\u5927\u5c0f)\u3002"]})]})}function g(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(96540);const c={},s=o.createContext(c);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
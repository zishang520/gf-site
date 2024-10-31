"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[52507],{90976:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var s=d(74848),t=d(28453);const c={slug:"/web/senior/server-metrics",title:"HTTPServer-\u76d1\u63a7\u6307\u6807",sidebar_position:11,hide_title:!0},n=void 0,i={id:"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/HTTPServer-\u76d1\u63a7\u6307\u6807",title:"HTTPServer-\u76d1\u63a7\u6307\u6807",description:"HTTP Server \u652f\u6301\u76d1\u63a7\u6307\u6807\u80fd\u529b\uff0c\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\u4e0d\u5f71\u54cd\u6027\u80fd\uff0c\u53ea\u6709\u5728 metric \u7279\u6027\u5168\u5c40\u5f00\u542f\u65f6\u8be5\u7ec4\u4ef6\u624d\u4f1a\u9ed8\u8ba4\u5f00\u542f\u76d1\u63a7\u6307\u6807\u8ba1\u7b97\u548c\u751f\u6210\u529f\u80fd\u3002",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/11-\u9ad8\u7ea7\u7279\u6027/11-HTTPServer-\u76d1\u63a7\u6307\u6807.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/11-\u9ad8\u7ea7\u7279\u6027",slug:"/web/senior/server-metrics",permalink:"/gf-site/en/docs/web/senior/server-metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/7-WEB\u670d\u52a1\u5f00\u53d1/11-\u9ad8\u7ea7\u7279\u6027/11-HTTPServer-\u76d1\u63a7\u6307\u6807.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730354542e3,sidebarPosition:11,frontMatter:{slug:"/web/senior/server-metrics",title:"HTTPServer-\u76d1\u63a7\u6307\u6807",sidebar_position:11,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"SameSite\u8bbe\u7f6e",permalink:"/gf-site/en/docs/web/senior/same-site"},next:{title:"\u6027\u80fd\u6d4b\u8bd5",permalink:"/gf-site/en/docs/web/performance"}},l={},h=[{value:"\u6307\u6807\u5217\u8868",id:"\u6307\u6807\u5217\u8868",level:2},{value:"\u5c5e\u6027\u5217\u8868",id:"\u5c5e\u6027\u5217\u8868",level:2}];function o(e){const r={code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"HTTP Server"})," \u652f\u6301\u76d1\u63a7\u6307\u6807\u80fd\u529b\uff0c\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\u4e0d\u5f71\u54cd\u6027\u80fd\uff0c\u53ea\u6709\u5728 ",(0,s.jsx)(r.code,{children:"metric"})," \u7279\u6027\u5168\u5c40\u5f00\u542f\u65f6\u8be5\u7ec4\u4ef6\u624d\u4f1a\u9ed8\u8ba4\u5f00\u542f\u76d1\u63a7\u6307\u6807\u8ba1\u7b97\u548c\u751f\u6210\u529f\u80fd\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"\u6307\u6807\u5217\u8868",children:"\u6307\u6807\u5217\u8868"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"\u6307\u6807\u540d\u79f0"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"\u6307\u6807\u7c7b\u578b"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"\u6307\u6807\u5355\u4f4d"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"\u6307\u6807\u63cf\u8ff0"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"http.server.request.duration"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Histogram"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"ms"})}),(0,s.jsxs)(r.td,{children:["\u5bf9 ",(0,s.jsx)(r.code,{children:"Server"})," \u7aef\u8bf7\u6c42\u6267\u884c\u7684\u65f6\u95f4\u5f00\u9500\u5206\u7ec4\u3002"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"http.server.request.duration_total"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Counter"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"ms"})}),(0,s.jsx)(r.td,{children:"\u6bcf\u4e2a\u8bf7\u6c42\u7684\u6267\u884c\u65f6\u95f4\u603b\u5f00\u9500\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"http.server.request.total"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Counter"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"\u5df2\u7ecf\u6267\u884c\u5b8c\u6bd5\u7684\u8bf7\u6c42\u603b\u6570\uff0c\u4e0d\u5305\u542b\u6b63\u5728\u6267\u884c\u7684\u8bf7\u6c42\u6570\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"http.server.request.active"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Gauge"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"\u5f53\u524d\u6b63\u5728\u5904\u7406\u7684\u8bf7\u6c42\u6570\u91cf\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"http.server.request.body_size"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Counter"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"bytes"})}),(0,s.jsx)(r.td,{children:"\u8bf7\u6c42\u7684\u5b57\u8282\u603b\u5927\u5c0f\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"http.server.response.body_size"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Counter"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"bytes"})}),(0,s.jsx)(r.td,{children:"\u8fd4\u56de\u7684\u5b57\u8282\u603b\u5927\u5c0f\u3002"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"\u5c5e\u6027\u5217\u8868",children:"\u5c5e\u6027\u5217\u8868"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Label\u540d\u79f0"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Label\u63cf\u8ff0"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Label\u793a\u4f8b"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"server.address"})}),(0,s.jsxs)(r.td,{children:["\u63a5\u53d7\u8bf7\u6c42\u7684\u8bf7\u6c42\u5730\u5740\u3002\u6765\u6e90\u4e8e ",(0,s.jsx)(r.code,{children:"Request.Host"}),"\uff0c\u53ef\u80fd\u662f\u57df\u540d\u4e5f\u53ef\u80fd\u662fIP\u5730\u5740\u3002"]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"goframe.org"}),(0,s.jsx)("br",{}),(0,s.jsx)(r.code,{children:"10.0.1.132"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"server.port"})}),(0,s.jsx)(r.td,{children:"\u63a5\u53d7\u8bf7\u6c42\u7684\u670d\u52a1\u7aef\u53e3\u3002\u540c\u4e00\u670d\u52a1\u53ef\u80fd\u6709\u591a\u4e2a\u7aef\u53e3\u5730\u5740\uff0c\u5f53\u524d\u8bf7\u6c42\u8fde\u63a5\u7684\u662f\u54ea\u4e2a\u7aef\u53e3\u5c31\u8bb0\u5f55\u54ea\u4e2a\u7aef\u53e3\u3002"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"8000"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"http.route"})}),(0,s.jsx)(r.td,{children:"\u8bf7\u6c42\u7684\u8def\u7531\u89c4\u5219\u3002"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/api/v1/user/:id"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"url.schema"})}),(0,s.jsx)(r.td,{children:"\u8bf7\u6c42\u534f\u8bae\u540d\u79f0\u3002"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"http"}),"; ",(0,s.jsx)(r.code,{children:"https"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"network.protocol.version"})}),(0,s.jsx)(r.td,{children:"\u8bf7\u6c42\u7684\u534f\u8bae\u7248\u672c\u3002"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"1.0"}),";\xa0",(0,s.jsx)(r.code,{children:"1.1"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"http.request.method"})}),(0,s.jsx)(r.td,{children:"\u8bf7\u6c42\u7684\u65b9\u6cd5\u540d\u79f0\u3002"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"GET"}),";\xa0",(0,s.jsx)(r.code,{children:"POST"}),";\xa0",(0,s.jsx)(r.code,{children:"DELETE"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"error.code"})}),(0,s.jsx)(r.td,{children:"\u8bf7\u6c42\u8fd4\u56de\u7684\u4e1a\u52a1\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\u4ee5\u63d0\u9ad8\u517c\u5bb9\u6027\u3002"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"-1"}),"; ",(0,s.jsx)(r.code,{children:"0"}),"; ",(0,s.jsx)(r.code,{children:"51"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"http.response.status_code"})}),(0,s.jsxs)(r.td,{children:["\u5904\u7406\u8fd4\u56de\u7684 ",(0,s.jsx)(r.code,{children:"HTTP"})," \u72b6\u6001\u7801\u3002"]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"200"})})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,r,d)=>{d.d(r,{R:()=>n,x:()=>i});var s=d(96540);const t={},c=s.createContext(t);function n(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);
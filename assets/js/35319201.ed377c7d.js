"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[56939],{394572:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u547d\u4ee4\u7ba1\u7406-gcmd","title":"\u547d\u4ee4\u7ba1\u7406-gcmd","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684\u547d\u4ee4\u7ba1\u7406\u7ec4\u4ef6gcmd\u8fdb\u884c\u547d\u4ee4\u884c\u64cd\u4f5c\uff0c\u5305\u62ec\u5982\u4f55\u521b\u5efa\u548c\u7ba1\u7406\u547d\u4ee4\u3001\u6267\u884c\u547d\u4ee4\u4ee5\u53ca\u547d\u4ee4\u7684\u53c2\u6570\u914d\u7f6e\u3002\u662fGoFrame\u6838\u5fc3\u7ec4\u4ef6\u4e4b\u4e00\uff0c\u9002\u7528\u4e8e\u5404\u79cd\u5f00\u53d1\u573a\u666f\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u547d\u4ee4\u7ba1\u7406-gcmd.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173","slug":"/docs/components/os-gcmd","permalink":"/docs/components/os-gcmd","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u547d\u4ee4\u7ba1\u7406-gcmd.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"slug":"/docs/components/os-gcmd","title":"\u547d\u4ee4\u7ba1\u7406-gcmd","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u547d\u4ee4\u7ba1\u7406","gcmd","\u6838\u5fc3\u7ec4\u4ef6","\u547d\u4ee4\u884c\u5de5\u5177","\u5f00\u53d1\u6846\u67b6","\u547d\u4ee4\u6267\u884c","\u4ee3\u7801\u7ba1\u7406","\u8f6f\u4ef6\u5f00\u53d1"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684\u547d\u4ee4\u7ba1\u7406\u7ec4\u4ef6gcmd\u8fdb\u884c\u547d\u4ee4\u884c\u64cd\u4f5c\uff0c\u5305\u62ec\u5982\u4f55\u521b\u5efa\u548c\u7ba1\u7406\u547d\u4ee4\u3001\u6267\u884c\u547d\u4ee4\u4ee5\u53ca\u547d\u4ee4\u7684\u53c2\u6570\u914d\u7f6e\u3002\u662fGoFrame\u6838\u5fc3\u7ec4\u4ef6\u4e4b\u4e00\uff0c\u9002\u7528\u4e8e\u5404\u79cd\u5f00\u53d1\u573a\u666f\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u4e0a\u4e0b\u6587-gctx","permalink":"/docs/components/os-gctx"},"next":{"title":"\u65e5\u5fd7\u7ba1\u7406-glog","permalink":"/docs/components/os-glog"}}');var n=t(474848),c=t(28453);const r={slug:"/docs/components/os-gcmd",title:"\u547d\u4ee4\u7ba1\u7406-gcmd",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u547d\u4ee4\u7ba1\u7406","gcmd","\u6838\u5fc3\u7ec4\u4ef6","\u547d\u4ee4\u884c\u5de5\u5177","\u5f00\u53d1\u6846\u67b6","\u547d\u4ee4\u6267\u884c","\u4ee3\u7801\u7ba1\u7406","\u8f6f\u4ef6\u5f00\u53d1"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684\u547d\u4ee4\u7ba1\u7406\u7ec4\u4ef6gcmd\u8fdb\u884c\u547d\u4ee4\u884c\u64cd\u4f5c\uff0c\u5305\u62ec\u5982\u4f55\u521b\u5efa\u548c\u7ba1\u7406\u547d\u4ee4\u3001\u6267\u884c\u547d\u4ee4\u4ee5\u53ca\u547d\u4ee4\u7684\u53c2\u6570\u914d\u7f6e\u3002\u662fGoFrame\u6838\u5fc3\u7ec4\u4ef6\u4e4b\u4e00\uff0c\u9002\u7528\u4e8e\u5404\u79cd\u5f00\u53d1\u573a\u666f\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002"},d=void 0,i={},m=[];function a(e){const o={a:"a",p:"p",...(0,c.R)(),...e.components};return(0,n.jsxs)(o.p,{children:["\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,n.jsx)(o.a,{href:"/docs/core/gcmd",children:"\u547d\u4ee4\u7ba1\u7406"})]})}function p(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>d});var s=t(296540);const n={},c=s.createContext(n);function r(e){const o=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(c.Provider,{value:o},e.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[7112],{499025:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u6a21\u677f\u5f15\u64ce-gview","title":"\u6a21\u677f\u5f15\u64ce-gview","description":"GoFrame\u6846\u67b6\u4e2d\u7684\u6a21\u677f\u5f15\u64ce\u7ec4\u4ef6gview\uff0c\u8be6\u7ec6\u8bf4\u660e\u4e86gview\u6a21\u5757\u7684\u529f\u80fd\u548c\u4f7f\u7528\u65b9\u6cd5\u3002\u901a\u8fc7\u5bf9\u6838\u5fc3\u7ec4\u4ef6\u6a21\u677f\u5f15\u64ce\u7684\u8bb2\u89e3\uff0c\u5e2e\u52a9\u7528\u6237\u7406\u89e3\u548c\u5e94\u7528gview\u6a21\u5757\u5b9e\u73b0\u590d\u6742\u7684\u6a21\u677f\u5f15\u64ce\u529f\u80fd\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u6a21\u677f\u5f15\u64ce-gview.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173","slug":"/docs/components/os-gview","permalink":"/en/2.7.x/docs/components/os-gview","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u6a21\u677f\u5f15\u64ce-gview.md","tags":[],"version":"2.7.x","sidebarPosition":15,"frontMatter":{"slug":"/docs/components/os-gview","title":"\u6a21\u677f\u5f15\u64ce-gview","sidebar_position":15,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u6a21\u677f\u5f15\u64ce","gview","gview\u6a21\u5757","\u6838\u5fc3\u7ec4\u4ef6","\u6a21\u677f\u5f15\u64ce\u5b9e\u73b0","\u6a21\u5757\u5b9e\u73b0","gview\u4f7f\u7528","gview\u529f\u80fd"],"description":"GoFrame\u6846\u67b6\u4e2d\u7684\u6a21\u677f\u5f15\u64ce\u7ec4\u4ef6gview\uff0c\u8be6\u7ec6\u8bf4\u660e\u4e86gview\u6a21\u5757\u7684\u529f\u80fd\u548c\u4f7f\u7528\u65b9\u6cd5\u3002\u901a\u8fc7\u5bf9\u6838\u5fc3\u7ec4\u4ef6\u6a21\u677f\u5f15\u64ce\u7684\u8bb2\u89e3\uff0c\u5e2e\u52a9\u7528\u6237\u7406\u89e3\u548c\u5e94\u7528gview\u6a21\u5757\u5b9e\u73b0\u590d\u6742\u7684\u6a21\u677f\u5f15\u64ce\u529f\u80fd\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u8fdb\u7a0b\u7ba1\u7406-\u94fe\u8def\u8ddf\u8e2a","permalink":"/en/2.7.x/docs/components/os-gproc-tracing"},"next":{"title":"\u534f\u7a0b\u7ba1\u7406-grpool","permalink":"/en/2.7.x/docs/components/os-grpool"}}');var n=i(474848),s=i(28453);const r={slug:"/docs/components/os-gview",title:"\u6a21\u677f\u5f15\u64ce-gview",sidebar_position:15,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u6a21\u677f\u5f15\u64ce","gview","gview\u6a21\u5757","\u6838\u5fc3\u7ec4\u4ef6","\u6a21\u677f\u5f15\u64ce\u5b9e\u73b0","\u6a21\u5757\u5b9e\u73b0","gview\u4f7f\u7528","gview\u529f\u80fd"],description:"GoFrame\u6846\u67b6\u4e2d\u7684\u6a21\u677f\u5f15\u64ce\u7ec4\u4ef6gview\uff0c\u8be6\u7ec6\u8bf4\u660e\u4e86gview\u6a21\u5757\u7684\u529f\u80fd\u548c\u4f7f\u7528\u65b9\u6cd5\u3002\u901a\u8fc7\u5bf9\u6838\u5fc3\u7ec4\u4ef6\u6a21\u677f\u5f15\u64ce\u7684\u8bb2\u89e3\uff0c\u5e2e\u52a9\u7528\u6237\u7406\u89e3\u548c\u5e94\u7528gview\u6a21\u5757\u5b9e\u73b0\u590d\u6742\u7684\u6a21\u677f\u5f15\u64ce\u529f\u80fd\u3002"},c=void 0,d={},a=[];function g(e){const o={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(o.p,{children:["\u6a21\u677f\u5f15\u64ce\u7531 ",(0,n.jsx)(o.code,{children:"gview"})," \u6a21\u5757\u5b9e\u73b0\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,n.jsx)(o.a,{href:"/en/2.7.x/docs/core/gview",children:"\u6a21\u677f\u5f15\u64ce"})," \u7ae0\u8282\u3002"]})}function v(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},28453:(e,o,i)=>{i.d(o,{R:()=>r,x:()=>c});var t=i(296540);const n={},s=t.createContext(n);function r(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);
"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[92880],{260315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=n(474848),s=n(28453);const r={slug:"/core/gdb/senior/custom-type-converting",title:"ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362",sidebar_position:10,hide_title:!0},i=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362",title:"ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362",description:"\u5f53\u6211\u4eec\u9700\u8981\u5c06\u67e5\u8be2\u7684\u7ed3\u679c\u8f6c\u6362\u5230\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\u4e2d\uff0c\u65e0\u8bba\u662f\u4f5c\u4e3a\u76f4\u63a5\u8f6c\u6362\u7684\u7c7b\u578b\u8fd8\u662f\u4f5c\u4e3a struct \u7684\u5c5e\u6027\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0\u7279\u5b9a\u7684\u63a5\u53e3\u6765\u5b9e\u73b0\u3002\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003 \u7c7b\u578b\u8f6c\u6362-UnmarshalValue \u7ae0\u8282\u3002",source:"@site/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027",slug:"/core/gdb/senior/custom-type-converting",permalink:"/gf-site/docs/core/gdb/senior/custom-type-converting",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:10,frontMatter:{slug:"/core/gdb/senior/custom-type-converting",title:"ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362",sidebar_position:10,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301",permalink:"/gf-site/docs/core/gdb/senior/nested-struct-support"},next:{title:"I18N\u56fd\u9645\u5316",permalink:"/gf-site/docs/core/gi18n"}},d={},a=[];function u(e){const t={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(t.p,{children:["\u5f53\u6211\u4eec\u9700\u8981\u5c06\u67e5\u8be2\u7684\u7ed3\u679c\u8f6c\u6362\u5230\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\u4e2d\uff0c\u65e0\u8bba\u662f\u4f5c\u4e3a\u76f4\u63a5\u8f6c\u6362\u7684\u7c7b\u578b\u8fd8\u662f\u4f5c\u4e3a ",(0,o.jsx)(t.code,{children:"struct"})," \u7684\u5c5e\u6027\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0\u7279\u5b9a\u7684\u63a5\u53e3\u6765\u5b9e\u73b0\u3002\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003 ",(0,o.jsx)(t.a,{href:"/gf-site/docs/core/gconv/unmarshal-value",children:"\u7c7b\u578b\u8f6c\u6362-UnmarshalValue"})," \u7ae0\u8282\u3002"]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(296540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);
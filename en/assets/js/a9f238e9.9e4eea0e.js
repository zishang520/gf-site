"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[78246],{528135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7ec4\u4ef6\u5217\u8868","title":"\u7ec4\u4ef6\u5217\u8868","description":"\u6b64\u6587\u6863\u4ecb\u7ecd\u4e86GoFrame\u6846\u67b6\u4e2d\u7684\u6a21\u5757\u5217\u8868\uff0c\u5305\u62ec\u6838\u5fc3\u6a21\u5757\u548c\u793e\u533a\u6a21\u5757\u3002\u6838\u5fc3\u6a21\u5757\u7531gf\u4e3b\u4ed3\u5e93\u7ef4\u62a4\uff0c\u7b80\u5355\u6613\u7528\uff0c\u793e\u533a\u6a21\u5757\u7531\u793e\u533a\u8d21\u732e\uff0c\u5b58\u653e\u4e8egogf\u7a7a\u95f4\u4e0b\u3002\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u9605\u6e90\u4ee3\u7801README\u6587\u4ef6\u548c\u76f8\u5173\u7684\u6838\u5fc3\u6a21\u5757\u6587\u6863\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u7ec4\u4ef6\u5217\u8868.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868","slug":"/docs/components","permalink":"/en/2.7.x/docs/components","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u7ec4\u4ef6\u5217\u8868.md","tags":[],"version":"2.7.x","sidebarPosition":5,"frontMatter":{"slug":"/docs/components","title":"\u7ec4\u4ef6\u5217\u8868","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u6838\u5fc3\u6a21\u5757","\u793e\u533a\u6a21\u5757","gf\u4e3b\u4ed3\u5e93","\u6a21\u5757\u5217\u8868","\u8f7b\u91cf\u7ea7\u6846\u67b6","\u6a21\u5757\u7ef4\u62a4","gogf\u7a7a\u95f4","\u6a21\u5757\u6587\u6863"],"description":"\u6b64\u6587\u6863\u4ecb\u7ecd\u4e86GoFrame\u6846\u67b6\u4e2d\u7684\u6a21\u5757\u5217\u8868\uff0c\u5305\u62ec\u6838\u5fc3\u6a21\u5757\u548c\u793e\u533a\u6a21\u5757\u3002\u6838\u5fc3\u6a21\u5757\u7531gf\u4e3b\u4ed3\u5e93\u7ef4\u62a4\uff0c\u7b80\u5355\u6613\u7528\uff0c\u793e\u533a\u6a21\u5757\u7531\u793e\u533a\u8d21\u732e\uff0c\u5b58\u653e\u4e8egogf\u7a7a\u95f4\u4e0b\u3002\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u9605\u6e90\u4ee3\u7801README\u6587\u4ef6\u548c\u76f8\u5173\u7684\u6838\u5fc3\u6a21\u5757\u6587\u6863\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u8d44\u6e90\u7ba1\u7406-\u6700\u4f73\u5b9e\u8df5","permalink":"/en/2.7.x/docs/core/gres-practice"},"next":{"title":"\u6570\u636e\u7ed3\u6784","permalink":"/en/2.7.x/docs/components/container"}}');var o=n(474848),s=n(28453),c=n(103514);const i={slug:"/docs/components",title:"\u7ec4\u4ef6\u5217\u8868",sidebar_position:5,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u6838\u5fc3\u6a21\u5757","\u793e\u533a\u6a21\u5757","gf\u4e3b\u4ed3\u5e93","\u6a21\u5757\u5217\u8868","\u8f7b\u91cf\u7ea7\u6846\u67b6","\u6a21\u5757\u7ef4\u62a4","gogf\u7a7a\u95f4","\u6a21\u5757\u6587\u6863"],description:"\u6b64\u6587\u6863\u4ecb\u7ecd\u4e86GoFrame\u6846\u67b6\u4e2d\u7684\u6a21\u5757\u5217\u8868\uff0c\u5305\u62ec\u6838\u5fc3\u6a21\u5757\u548c\u793e\u533a\u6a21\u5757\u3002\u6838\u5fc3\u6a21\u5757\u7531gf\u4e3b\u4ed3\u5e93\u7ef4\u62a4\uff0c\u7b80\u5355\u6613\u7528\uff0c\u793e\u533a\u6a21\u5757\u7531\u793e\u533a\u8d21\u732e\uff0c\u5b58\u653e\u4e8egogf\u7a7a\u95f4\u4e0b\u3002\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u9605\u6e90\u4ee3\u7801README\u6587\u4ef6\u548c\u76f8\u5173\u7684\u6838\u5fc3\u6a21\u5757\u6587\u6863\u3002"},l=void 0,a={},d=[{value:"\u6838\u5fc3\u6a21\u5757",id:"\u6838\u5fc3\u6a21\u5757",level:2},{value:"\u793e\u533a\u6a21\u5757",id:"\u793e\u533a\u6a21\u5757",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const t={code:"code",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"\u6a21\u5757\u5217\u8868\u5305\u542b\u7edd\u5927\u90e8\u5206\u6846\u67b6\u7684\u6838\u5fc3\u6a21\u5757\u4ee5\u53ca\u793e\u533a\u6a21\u5757\u4ecb\u7ecd\u6587\u6863\u3002"}),"\n",(0,o.jsx)(t.h2,{id:"\u6838\u5fc3\u6a21\u5757",children:"\u6838\u5fc3\u6a21\u5757"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"GoFrame"})," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u57fa\u7840\u7684\u3001\u5e38\u7528\u7684\u6a21\u5757\uff0c\u7b80\u5355\u3001\u6613\u7528\u548c\u8f7b\u91cf\u7ea7\uff0c\u5e76\u4fdd\u6301\u6781\u5c11\u7684\u5916\u90e8\u4f9d\u8d56\uff0c\u8fd9\u4e9b\u6a21\u5757\u7531 ",(0,o.jsx)(t.code,{children:"gf"})," \u4e3b\u4ed3\u5e93\u7ec6\u81f4\u7ef4\u62a4\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u793e\u533a\u6a21\u5757",children:"\u793e\u533a\u6a21\u5757"}),"\n",(0,o.jsxs)(t.p,{children:["\u793e\u533a\u6a21\u5757\u4e3b\u8981\u7531\u793e\u533a\u8d21\u732e\u5e76\u7ef4\u62a4\uff0c\u5927\u90e8\u5206\u4e5f\u662f\u7531 ",(0,o.jsx)(t.code,{children:"gf"})," \u4e3b\u4ed3\u5e93\u7684\u8d21\u732e\u8005\u63d0\u4f9b\u53ca\u7ef4\u62a4\uff0c\u5b58\u653e\u4e8e ",(0,o.jsx)(t.code,{children:"gogf"})," \u7a7a\u95f4\u4e0b\uff0c\u4e0e ",(0,o.jsx)(t.code,{children:"gf"})," \u4e3b\u4ed3\u5e93\u5904\u4e8e\u540c\u4e00\u7ea7\u522b\u3002\u6709\u7684\u793e\u533a\u6a21\u5757\u662f\u4ece ",(0,o.jsx)(t.code,{children:"gf"})," \u4e3b\u4ed3\u5e93\u4e2d\u5265\u79bb\u51fa\u6765\u5355\u72ec\u7ef4\u62a4\u7684\u6a21\u5757\uff0c\u8fd9\u4e9b\u6a21\u5757\u5e76\u4e0d\u662f\u7279\u522b\u5e38\u7528\uff0c\u6216\u8005\u5bf9\u5916\u90e8\u4f9d\u8d56\u8f83\u91cd\u3002"]}),"\n",(0,o.jsxs)(t.p,{children:["\u76ee\u524d\u793e\u533a\u6a21\u5757\u7684\u6587\u6863\u672a\u6536\u5f55\uff0c\u793e\u533a\u6a21\u5757\u4f7f\u7528\u65b9\u6cd5\u8bf7\u5177\u4f53\u67e5\u770b\u6e90\u7801 ",(0,o.jsx)(t.code,{children:"README.MD"})," \u6587\u4ef6\uff0c\u7531\u4e8e\u793e\u533a\u6a21\u5757\u5927\u90fd\u662f\u6838\u5fc3\u6a21\u5757\u7684\u5177\u4f53\u63a5\u53e3\u5177\u4f53\uff0c\u56e0\u6b64\u4e5f\u53ef\u4ee5\u67e5\u770b\u76f8\u5173\u8054\u7684\u6838\u5fc3\u6a21\u5757\u6587\u6863\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,o.jsx)(c.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},103514:(e,t,n)=>{n.d(t,{A:()=>j});n(296540);var r=n(634164),o=n(944718),s=n(328774),c=n(853465),i=n(316654),l=n(721312),a=n(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(474848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:o,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function p(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(p,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,u.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(296540),o=n(144586);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
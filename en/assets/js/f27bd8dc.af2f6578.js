"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[74915],{208022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u7cfb\u7edf\u76f8\u5173","title":"\u7cfb\u7edf\u76f8\u5173","description":"GoFrame\u6846\u67b6\u4e2d\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u76f8\u5173\u7684\u6a21\u5757\uff0c\u5305\u62ec\u5982\u4f55\u5728\u4e0d\u540c\u5e73\u53f0\u4e0a\u7ba1\u7406\u548c\u4f7f\u7528\u64cd\u4f5c\u7cfb\u7edf\u529f\u80fd\uff0c\u63d0\u4f9b\u7cfb\u7edf\u7ea7\u522b\u7684\u5de5\u5177\u548c\u7ec4\u4ef6\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u6709\u6548\u5730\u8fdb\u884c\u8f6f\u4ef6\u5f00\u53d1\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u7cfb\u7edf\u76f8\u5173.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173","slug":"/docs/components/os","permalink":"/en/2.7.x/docs/components/os","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u7cfb\u7edf\u76f8\u5173.md","tags":[],"version":"2.7.x","sidebarPosition":1,"frontMatter":{"slug":"/docs/components/os","title":"\u7cfb\u7edf\u76f8\u5173","sidebar_position":1,"hide_title":true,"keywords":["\u7cfb\u7edf\u7ba1\u7406","\u64cd\u4f5c\u7cfb\u7edf","GoFrame","GoFrame\u6846\u67b6","\u7cfb\u7edf\u7ec4\u4ef6","\u5e73\u53f0\u652f\u6301","\u7cfb\u7edf\u5de5\u5177","\u8f6f\u4ef6\u5f00\u53d1","\u6280\u672f\u6587\u6863","\u6846\u67b6\u4f7f\u7528"],"description":"GoFrame\u6846\u67b6\u4e2d\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u76f8\u5173\u7684\u6a21\u5757\uff0c\u5305\u62ec\u5982\u4f55\u5728\u4e0d\u540c\u5e73\u53f0\u4e0a\u7ba1\u7406\u548c\u4f7f\u7528\u64cd\u4f5c\u7cfb\u7edf\u529f\u80fd\uff0c\u63d0\u4f9b\u7cfb\u7edf\u7ea7\u522b\u7684\u5de5\u5177\u548c\u7ec4\u4ef6\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u6709\u6548\u5730\u8fdb\u884c\u8f6f\u4ef6\u5f00\u53d1\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5e76\u53d1\u5b89\u5168\u73af-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/en/2.7.x/docs/components/container-gring-funcs"},"next":{"title":"\u5b9a\u65f6\u5668-gtimer","permalink":"/en/2.7.x/docs/components/os-gtimer"}}');var o=n(474848),s=n(28453),i=n(103514);const c={slug:"/docs/components/os",title:"\u7cfb\u7edf\u76f8\u5173",sidebar_position:1,hide_title:!0,keywords:["\u7cfb\u7edf\u7ba1\u7406","\u64cd\u4f5c\u7cfb\u7edf","GoFrame","GoFrame\u6846\u67b6","\u7cfb\u7edf\u7ec4\u4ef6","\u5e73\u53f0\u652f\u6301","\u7cfb\u7edf\u5de5\u5177","\u8f6f\u4ef6\u5f00\u53d1","\u6280\u672f\u6587\u6863","\u6846\u67b6\u4f7f\u7528"],description:"GoFrame\u6846\u67b6\u4e2d\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u76f8\u5173\u7684\u6a21\u5757\uff0c\u5305\u62ec\u5982\u4f55\u5728\u4e0d\u540c\u5e73\u53f0\u4e0a\u7ba1\u7406\u548c\u4f7f\u7528\u64cd\u4f5c\u7cfb\u7edf\u529f\u80fd\uff0c\u63d0\u4f9b\u7cfb\u7edf\u7ea7\u522b\u7684\u5de5\u5177\u548c\u7ec4\u4ef6\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u6709\u6548\u5730\u8fdb\u884c\u8f6f\u4ef6\u5f00\u53d1\u3002"},l=void 0,a={},u=[];function d(e){return(0,o.jsx)(i.A,{})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d()}},103514:(e,t,n)=>{n.d(t,{A:()=>b});n(296540);var r=n(634164),o=n(944718),s=n(328774),i=n(853465),c=n(316654),l=n(721312),a=n(751107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(474848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,d.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(296540),o=n(144586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(296540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
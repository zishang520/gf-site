"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[12937],{636709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u9519\u8bef\u7ba1\u7406/\u9519\u8bef\u7ba1\u7406","title":"\u9519\u8bef\u7ba1\u7406","description":"\u5728GoFrame\u6846\u67b6\u4e2d\u8fdb\u884c\u9519\u8bef\u7ba1\u7406\u548c\u5904\u7406\u3002\u901a\u8fc7\u9002\u5f53\u7684\u65b9\u6cd5\u6355\u83b7\u548c\u5904\u7406\u9519\u8bef\uff0c\u53ef\u4ee5\u63d0\u9ad8Web\u5e94\u7528\u7684\u7a33\u5b9a\u6027\u548c\u7528\u6237\u4f53\u9a8c\u3002\u8be6\u7ec6\u8bb2\u89e3\u4e86\u9519\u8bef\u65e5\u5fd7\u8bb0\u5f55\u548c\u5f02\u5e38\u6355\u83b7\u7684\u65b9\u6cd5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u5e94\u5bf9\u8fd0\u884c\u65f6\u9519\u8bef\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u9519\u8bef\u7ba1\u7406/\u9519\u8bef\u7ba1\u7406.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u9519\u8bef\u7ba1\u7406","slug":"/docs/components/error","permalink":"/en/2.7.x/docs/components/error","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u9519\u8bef\u7ba1\u7406/\u9519\u8bef\u7ba1\u7406.md","tags":[],"version":"2.7.x","sidebarPosition":8,"frontMatter":{"slug":"/docs/components/error","title":"\u9519\u8bef\u7ba1\u7406","sidebar_position":8,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u9519\u8bef\u7ba1\u7406","\u9519\u8bef\u5904\u7406","\u5f02\u5e38\u6355\u83b7","Web\u5f00\u53d1","\u5e94\u7528\u7a0b\u5e8f\u9519\u8bef","\u7f16\u7a0b\u9519\u8bef","\u9519\u8bef\u65e5\u5fd7","\u9519\u8bef\u8c03\u8bd5"],"description":"\u5728GoFrame\u6846\u67b6\u4e2d\u8fdb\u884c\u9519\u8bef\u7ba1\u7406\u548c\u5904\u7406\u3002\u901a\u8fc7\u9002\u5f53\u7684\u65b9\u6cd5\u6355\u83b7\u548c\u5904\u7406\u9519\u8bef\uff0c\u53ef\u4ee5\u63d0\u9ad8Web\u5e94\u7528\u7684\u7a33\u5b9a\u6027\u548c\u7528\u6237\u4f53\u9a8c\u3002\u8be6\u7ec6\u8bb2\u89e3\u4e86\u9519\u8bef\u65e5\u5fd7\u8bb0\u5f55\u548c\u5f02\u5e38\u6355\u83b7\u7684\u65b9\u6cd5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u5e94\u5bf9\u8fd0\u884c\u65f6\u9519\u8bef\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5355\u5143\u6d4b\u8bd5-gtest","permalink":"/en/2.7.x/docs/components/test-gtest"},"next":{"title":"\u9519\u8bef\u5904\u7406-gerror","permalink":"/en/2.7.x/docs/components/error-gerror"}}');var o=r(474848),s=r(28453),i=r(103514);const c={slug:"/docs/components/error",title:"\u9519\u8bef\u7ba1\u7406",sidebar_position:8,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u9519\u8bef\u7ba1\u7406","\u9519\u8bef\u5904\u7406","\u5f02\u5e38\u6355\u83b7","Web\u5f00\u53d1","\u5e94\u7528\u7a0b\u5e8f\u9519\u8bef","\u7f16\u7a0b\u9519\u8bef","\u9519\u8bef\u65e5\u5fd7","\u9519\u8bef\u8c03\u8bd5"],description:"\u5728GoFrame\u6846\u67b6\u4e2d\u8fdb\u884c\u9519\u8bef\u7ba1\u7406\u548c\u5904\u7406\u3002\u901a\u8fc7\u9002\u5f53\u7684\u65b9\u6cd5\u6355\u83b7\u548c\u5904\u7406\u9519\u8bef\uff0c\u53ef\u4ee5\u63d0\u9ad8Web\u5e94\u7528\u7684\u7a33\u5b9a\u6027\u548c\u7528\u6237\u4f53\u9a8c\u3002\u8be6\u7ec6\u8bb2\u89e3\u4e86\u9519\u8bef\u65e5\u5fd7\u8bb0\u5f55\u548c\u5f02\u5e38\u6355\u83b7\u7684\u65b9\u6cd5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u5e94\u5bf9\u8fd0\u884c\u65f6\u9519\u8bef\u3002"},l=void 0,a={},u=[];function d(e){return(0,o.jsx)(i.A,{})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d()}},103514:(e,t,r)=>{r.d(t,{A:()=>b});r(296540);var n=r(634164),o=r(944718),s=r(328774),i=r(853465),c=r(316654),l=r(721312),a=r(751107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(474848);function m(e){let{href:t,children:r}=e;return(0,d.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:o,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:o,children:[r," ",o]}),s&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const r=(0,o.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,o.$S)();return(0,d.jsx)(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},853465:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(296540),o=r(144586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(296540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[5445],{329045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u7f16\u7801\u89e3\u7801","title":"\u7f16\u7801\u89e3\u7801","description":"\u7f16\u7801\u548c\u89e3\u7801\u7684\u57fa\u672c\u6982\u5ff5\u53ca\u5e94\u7528\uff0c\u63a2\u8ba8\u5982\u4f55\u5229\u7528GoFrame\u6846\u67b6\u5b9e\u73b0\u9ad8\u6548\u7684\u6570\u636e\u8f6c\u6362\u4e0e\u4fe1\u606f\u5904\u7406\u3002\u6db5\u76d6\u4e86\u5404\u79cd\u7f16\u7801\u6807\u51c6\u53ca\u5176\u5728\u7f16\u7a0b\u6280\u672f\u4e2d\u7684\u5b9e\u9645\u5e94\u7528\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u638c\u63e1\u5b57\u7b26\u7f16\u7801\u548c\u6570\u636e\u538b\u7f29\u7684\u6280\u5de7\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u7f16\u7801\u89e3\u7801.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801","slug":"/docs/components/encoding","permalink":"/en/docs/components/encoding","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u7f16\u7801\u89e3\u7801.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"slug":"/docs/components/encoding","title":"\u7f16\u7801\u89e3\u7801","sidebar_position":3,"hide_title":true,"keywords":["\u7f16\u7801","\u89e3\u7801","\u6570\u636e\u8f6c\u6362","\u4fe1\u606f\u5904\u7406","\u7f16\u7a0b\u6280\u672f","\u5b57\u7b26\u7f16\u7801","GoFrame","GoFrame\u6846\u67b6","\u7f16\u7801\u6807\u51c6","\u6570\u636e\u538b\u7f29"],"description":"\u7f16\u7801\u548c\u89e3\u7801\u7684\u57fa\u672c\u6982\u5ff5\u53ca\u5e94\u7528\uff0c\u63a2\u8ba8\u5982\u4f55\u5229\u7528GoFrame\u6846\u67b6\u5b9e\u73b0\u9ad8\u6548\u7684\u6570\u636e\u8f6c\u6362\u4e0e\u4fe1\u606f\u5904\u7406\u3002\u6db5\u76d6\u4e86\u5404\u79cd\u7f16\u7801\u6807\u51c6\u53ca\u5176\u5728\u7f16\u7a0b\u6280\u672f\u4e2d\u7684\u5b9e\u9645\u5e94\u7528\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u638c\u63e1\u5b57\u7b26\u7f16\u7801\u548c\u6570\u636e\u538b\u7f29\u7684\u6280\u5de7\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6b63\u5219\u8868\u8fbe\u5f0f-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/en/docs/components/text-gregex-funcs"},"next":{"title":"\u901a\u7528\u7f16\u89e3\u7801-gjson","permalink":"/en/docs/components/encoding-gjson"}}');var o=n(474848),s=n(28453),c=n(103514);const i={slug:"/docs/components/encoding",title:"\u7f16\u7801\u89e3\u7801",sidebar_position:3,hide_title:!0,keywords:["\u7f16\u7801","\u89e3\u7801","\u6570\u636e\u8f6c\u6362","\u4fe1\u606f\u5904\u7406","\u7f16\u7a0b\u6280\u672f","\u5b57\u7b26\u7f16\u7801","GoFrame","GoFrame\u6846\u67b6","\u7f16\u7801\u6807\u51c6","\u6570\u636e\u538b\u7f29"],description:"\u7f16\u7801\u548c\u89e3\u7801\u7684\u57fa\u672c\u6982\u5ff5\u53ca\u5e94\u7528\uff0c\u63a2\u8ba8\u5982\u4f55\u5229\u7528GoFrame\u6846\u67b6\u5b9e\u73b0\u9ad8\u6548\u7684\u6570\u636e\u8f6c\u6362\u4e0e\u4fe1\u606f\u5904\u7406\u3002\u6db5\u76d6\u4e86\u5404\u79cd\u7f16\u7801\u6807\u51c6\u53ca\u5176\u5728\u7f16\u7a0b\u6280\u672f\u4e2d\u7684\u5b9e\u9645\u5e94\u7528\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u638c\u63e1\u5b57\u7b26\u7f16\u7801\u548c\u6570\u636e\u538b\u7f29\u7684\u6280\u5de7\u3002"},l=void 0,a={},u=[];function d(e){return(0,o.jsx)(c.A,{})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d()}},103514:(e,t,n)=>{n.d(t,{A:()=>j});n(296540);var r=n(634164),o=n(944718),s=n(328774),c=n(853465),i=n(316654),l=n(721312),a=n(751107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(474848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(296540),o=n(144586);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
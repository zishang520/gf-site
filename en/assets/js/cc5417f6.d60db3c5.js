"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[70306],{315979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6838\u5fc3\u7ec4\u4ef6","title":"\u6838\u5fc3\u7ec4\u4ef6(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)","description":"\u6838\u5fc3\u7ec4\u4ef6\u662fGoFrame\u6846\u67b6\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u63d0\u4f9b\u4e86\u57fa\u7840\u7684\u5f00\u53d1\u5de5\u5177\u548c\u7cfb\u7edf\u67b6\u6784\u652f\u6301\uff0c\u4e3a\u5e94\u7528\u5f00\u53d1\u63d0\u4f9b\u4e86\u575a\u5b9e\u53ef\u9760\u7684\u57fa\u7840\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u6838\u5fc3\u7ec4\u4ef6\u53ca\u5176\u5728GoFrame\u6846\u67b6\u4e2d\u7684\u5e94\u7528\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u7406\u89e3\u548c\u4f7f\u7528\u8fd9\u4e9b\u7ec4\u4ef6\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6838\u5fc3\u7ec4\u4ef6.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6","slug":"/docs/core","permalink":"/en/docs/core","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6838\u5fc3\u7ec4\u4ef6.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"slug":"/docs/core","title":"\u6838\u5fc3\u7ec4\u4ef6(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","\u6838\u5fc3\u7ec4\u4ef6","GoFrame\u6846\u67b6","\u6846\u67b6\u7ec4\u6210","\u8f6f\u4ef6\u5f00\u53d1","\u6280\u672f\u6846\u67b6","\u5f00\u53d1\u5de5\u5177","\u7f16\u7a0b\u57fa\u7840","\u5e94\u7528\u5f00\u53d1","\u7cfb\u7edf\u67b6\u6784"],"description":"\u6838\u5fc3\u7ec4\u4ef6\u662fGoFrame\u6846\u67b6\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u63d0\u4f9b\u4e86\u57fa\u7840\u7684\u5f00\u53d1\u5de5\u5177\u548c\u7cfb\u7edf\u67b6\u6784\u652f\u6301\uff0c\u4e3a\u5e94\u7528\u5f00\u53d1\u63d0\u4f9b\u4e86\u575a\u5b9e\u53ef\u9760\u7684\u57fa\u7840\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u6838\u5fc3\u7ec4\u4ef6\u53ca\u5176\u5728GoFrame\u6846\u67b6\u4e2d\u7684\u5e94\u7528\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u7406\u89e3\u548c\u4f7f\u7528\u8fd9\u4e9b\u7ec4\u4ef6\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5de5\u5177\u5e2e\u52a9-help","permalink":"/en/docs/cli/help"},"next":{"title":"\u5bf9\u8c61\u7ba1\u7406","permalink":"/en/docs/core/g"}}');var o=n(474848),s=n(28453),c=n(103514);const i={slug:"/docs/core",title:"\u6838\u5fc3\u7ec4\u4ef6(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)",sidebar_position:4,hide_title:!0,keywords:["GoFrame","\u6838\u5fc3\u7ec4\u4ef6","GoFrame\u6846\u67b6","\u6846\u67b6\u7ec4\u6210","\u8f6f\u4ef6\u5f00\u53d1","\u6280\u672f\u6846\u67b6","\u5f00\u53d1\u5de5\u5177","\u7f16\u7a0b\u57fa\u7840","\u5e94\u7528\u5f00\u53d1","\u7cfb\u7edf\u67b6\u6784"],description:"\u6838\u5fc3\u7ec4\u4ef6\u662fGoFrame\u6846\u67b6\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u63d0\u4f9b\u4e86\u57fa\u7840\u7684\u5f00\u53d1\u5de5\u5177\u548c\u7cfb\u7edf\u67b6\u6784\u652f\u6301\uff0c\u4e3a\u5e94\u7528\u5f00\u53d1\u63d0\u4f9b\u4e86\u575a\u5b9e\u53ef\u9760\u7684\u57fa\u7840\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u6838\u5fc3\u7ec4\u4ef6\u53ca\u5176\u5728GoFrame\u6846\u67b6\u4e2d\u7684\u5e94\u7528\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u7406\u89e3\u548c\u4f7f\u7528\u8fd9\u4e9b\u7ec4\u4ef6\u3002"},l=void 0,a={},u=[];function d(e){const t={code:"code",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u6838\u5fc3\u7ec4\u4ef6\u662f ",(0,o.jsx)(t.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u6838\u5fc3\u7ec4\u6210\u90e8\u5206\u3002"]}),"\n","\n",(0,o.jsx)(c.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},103514:(e,t,n)=>{n.d(t,{A:()=>F});n(296540);var r=n(634164),o=n(944718),s=n(328774),c=n(853465),i=n(316654),l=n(721312),a=n(751107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(474848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,d.jsx)(F,{items:n.items,className:t})}function F(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(296540),o=n(144586);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
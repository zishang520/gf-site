"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[97329],{232489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/I18N\u56fd\u9645\u5316/I18N\u56fd\u9645\u5316","title":"I18N\u56fd\u9645\u5316","description":"GoFrame\u6846\u67b6\u4e2d\u7684I18N\u56fd\u9645\u5316\u7ec4\u4ef6\uff0c\u5b83\u7531gi18n\u6a21\u5757\u5b9e\u73b0\u3002\u901a\u8fc7\u5bfc\u5165\u76f8\u5173\u6a21\u5757\uff0c\u5f00\u53d1\u8005\u80fd\u591f\u5728\u8f6f\u4ef6\u9879\u76ee\u4e2d\u8f7b\u677e\u5b9e\u73b0\u591a\u8bed\u8a00\u652f\u6301\uff0c\u4ece\u800c\u63d0\u9ad8\u5e94\u7528\u7684\u56fd\u9645\u5316\u80fd\u529b\u3002\u8be6\u7ec6\u63a5\u53e3\u6587\u6863\u53ef\u901a\u8fc7\u63d0\u4f9b\u7684\u7f51\u5740\u67e5\u770b\uff0c\u4ee5\u83b7\u5f97\u66f4\u591a\u6280\u672f\u7ec6\u8282\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/I18N\u56fd\u9645\u5316/I18N\u56fd\u9645\u5316.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/I18N\u56fd\u9645\u5316","slug":"/docs/core/gi18n","permalink":"/en/2.7.x/docs/core/gi18n","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/I18N\u56fd\u9645\u5316/I18N\u56fd\u9645\u5316.md","tags":[],"version":"2.7.x","sidebarPosition":11,"frontMatter":{"slug":"/docs/core/gi18n","title":"I18N\u56fd\u9645\u5316","sidebar_position":11,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","I18N","\u56fd\u9645\u5316","gi18n\u6a21\u5757","Go\u8bed\u8a00","\u7f16\u7a0b\u6846\u67b6","\u5f00\u6e90\u9879\u76ee","\u8f6f\u4ef6\u5f00\u53d1","\u591a\u8bed\u8a00\u652f\u6301"],"description":"GoFrame\u6846\u67b6\u4e2d\u7684I18N\u56fd\u9645\u5316\u7ec4\u4ef6\uff0c\u5b83\u7531gi18n\u6a21\u5757\u5b9e\u73b0\u3002\u901a\u8fc7\u5bfc\u5165\u76f8\u5173\u6a21\u5757\uff0c\u5f00\u53d1\u8005\u80fd\u591f\u5728\u8f6f\u4ef6\u9879\u76ee\u4e2d\u8f7b\u677e\u5b9e\u73b0\u591a\u8bed\u8a00\u652f\u6301\uff0c\u4ece\u800c\u63d0\u9ad8\u5e94\u7528\u7684\u56fd\u9645\u5316\u80fd\u529b\u3002\u8be6\u7ec6\u63a5\u53e3\u6587\u6863\u53ef\u901a\u8fc7\u63d0\u4f9b\u7684\u7f51\u5740\u67e5\u770b\uff0c\u4ee5\u83b7\u5f97\u66f4\u591a\u6280\u672f\u7ec6\u8282\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u5e38\u89c1\u95ee\u9898","permalink":"/en/2.7.x/docs/core/gdb-faq"},"next":{"title":"I18N\u56fd\u9645\u5316-\u914d\u7f6e\u7ba1\u7406","permalink":"/en/2.7.x/docs/core/gi18n-config"}}');var o=n(474848),s=n(28453),i=n(103514);const c={slug:"/docs/core/gi18n",title:"I18N\u56fd\u9645\u5316",sidebar_position:11,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","I18N","\u56fd\u9645\u5316","gi18n\u6a21\u5757","Go\u8bed\u8a00","\u7f16\u7a0b\u6846\u67b6","\u5f00\u6e90\u9879\u76ee","\u8f6f\u4ef6\u5f00\u53d1","\u591a\u8bed\u8a00\u652f\u6301"],description:"GoFrame\u6846\u67b6\u4e2d\u7684I18N\u56fd\u9645\u5316\u7ec4\u4ef6\uff0c\u5b83\u7531gi18n\u6a21\u5757\u5b9e\u73b0\u3002\u901a\u8fc7\u5bfc\u5165\u76f8\u5173\u6a21\u5757\uff0c\u5f00\u53d1\u8005\u80fd\u591f\u5728\u8f6f\u4ef6\u9879\u76ee\u4e2d\u8f7b\u677e\u5b9e\u73b0\u591a\u8bed\u8a00\u652f\u6301\uff0c\u4ece\u800c\u63d0\u9ad8\u5e94\u7528\u7684\u56fd\u9645\u5316\u80fd\u529b\u3002\u8be6\u7ec6\u63a5\u53e3\u6587\u6863\u53ef\u901a\u8fc7\u63d0\u4f9b\u7684\u7f51\u5740\u67e5\u770b\uff0c\u4ee5\u83b7\u5f97\u66f4\u591a\u6280\u672f\u7ec6\u8282\u3002"},l=void 0,a={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"GoFrame"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u5e38\u7528\u7684 ",(0,o.jsx)(t.code,{children:"I18N"})," \u56fd\u9645\u5316\u7ec4\u4ef6\uff0c\u7531 ",(0,o.jsx)(t.code,{children:"gi18n"})," \u6a21\u5757\u5b9e\u73b0\u3002"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"\u4f7f\u7528\u65b9\u5f0f\uff1a"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/i18n/gi18n"\n'})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/i18n/gi18n",children:"https://pkg.go.dev/github.com/gogf/gf/v2/i18n/gi18n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,o.jsx)(i.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},103514:(e,t,n)=>{n.d(t,{A:()=>j});n(296540);var r=n(634164),o=n(944718),s=n(328774),i=n(853465),c=n(316654),l=n(721312),a=n(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(474848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function g(e){let{href:t,icon:n,title:o,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(g,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function p(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(g,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(p,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,u.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(296540),o=n(144586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(296540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
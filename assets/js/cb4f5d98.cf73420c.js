"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["17280"],{416865:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>a,default:()=>f,assets:()=>c,toc:()=>u,frontMatter:()=>l});var n=JSON.parse('{"id":"course/starbook/\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C/\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C","title":"\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C","description":"\u672C\u8282\u8BE6\u7EC6\u63CF\u8FF0\u4E86\u5982\u4F55\u5728GoFrame\u6846\u67B6\u4E2D\u5B9E\u73B0\u7528\u6237\u6CE8\u518C\u529F\u80FD\uFF0C\u5305\u62EC\u8D26\u53F7\u521B\u5EFA\u3001\u7528\u6237\u4FE1\u606F\u9A8C\u8BC1\u4EE5\u53CA\u5B89\u5168\u4FDD\u969C\u3002\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u8BE5\u6D41\u7A0B\u8F7B\u677E\u6CE8\u518C\u5E76\u7BA1\u7406\u4E2A\u4EBA\u8D26\u53F7\uFF0C\u4EAB\u53D7\u4F18\u8D28\u7684\u7528\u6237\u4F53\u9A8C\u3002","source":"@site/docs/course/starbook/\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C/\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C.md","sourceDirName":"course/starbook/\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C","slug":"/course/starbook/register","permalink":"/course/starbook/register","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/course/starbook/\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C/\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731815164000,"sidebarPosition":2,"frontMatter":{"hide_title":true,"sidebar_position":2,"slug":"/course/starbook/register","keywords":["GoFrame","GoFrame\u6846\u67B6","\u7528\u6237\u6CE8\u518C","\u6CE8\u518C\u529F\u80FD","\u8D26\u53F7\u7BA1\u7406","\u7528\u6237\u8D26\u53F7","\u7528\u6237\u4F53\u9A8C","\u5B89\u5168\u6CE8\u518C","\u6CE8\u518C\u6D41\u7A0B","\u8EAB\u4EFD\u9A8C\u8BC1"],"description":"\u672C\u8282\u8BE6\u7EC6\u63CF\u8FF0\u4E86\u5982\u4F55\u5728GoFrame\u6846\u67B6\u4E2D\u5B9E\u73B0\u7528\u6237\u6CE8\u518C\u529F\u80FD\uFF0C\u5305\u62EC\u8D26\u53F7\u521B\u5EFA\u3001\u7528\u6237\u4FE1\u606F\u9A8C\u8BC1\u4EE5\u53CA\u5B89\u5168\u4FDD\u969C\u3002\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u8BE5\u6D41\u7A0B\u8F7B\u677E\u6CE8\u518C\u5E76\u7BA1\u7406\u4E2A\u4EBA\u8D26\u53F7\uFF0C\u4EAB\u53D7\u4F18\u8D28\u7684\u7528\u6237\u4F53\u9A8C\u3002"},"sidebar":"courseStarBookSidebar","previous":{"title":"1.5.\u672C\u4E66\u6E90\u7801","permalink":"/course/starbook/about-source"},"next":{"title":"2.1.\u524D\u7F6E\u8BF4\u660E","permalink":"/course/starbook/register-overview"}}'),o=r("785893"),s=r("250065"),i=r("894301");let l={hide_title:!0,sidebar_position:2,slug:"/course/starbook/register",keywords:["GoFrame","GoFrame\u6846\u67B6","\u7528\u6237\u6CE8\u518C","\u6CE8\u518C\u529F\u80FD","\u8D26\u53F7\u7BA1\u7406","\u7528\u6237\u8D26\u53F7","\u7528\u6237\u4F53\u9A8C","\u5B89\u5168\u6CE8\u518C","\u6CE8\u518C\u6D41\u7A0B","\u8EAB\u4EFD\u9A8C\u8BC1"],description:"\u672C\u8282\u8BE6\u7EC6\u63CF\u8FF0\u4E86\u5982\u4F55\u5728GoFrame\u6846\u67B6\u4E2D\u5B9E\u73B0\u7528\u6237\u6CE8\u518C\u529F\u80FD\uFF0C\u5305\u62EC\u8D26\u53F7\u521B\u5EFA\u3001\u7528\u6237\u4FE1\u606F\u9A8C\u8BC1\u4EE5\u53CA\u5B89\u5168\u4FDD\u969C\u3002\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u8BE5\u6D41\u7A0B\u8F7B\u677E\u6CE8\u518C\u5E76\u7BA1\u7406\u4E2A\u4EBA\u8D26\u53F7\uFF0C\u4EAB\u53D7\u4F18\u8D28\u7684\u7528\u6237\u4F53\u9A8C\u3002"},a=void 0,c={},u=[];function d(e){return(0,o.jsx)(i.Z,{})}function f(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},894301:function(e,t,r){r.d(t,{Z:()=>x});var n=r("785893");r("667294");var o=r("467026"),s=r("123413"),i=r("83012"),l=r("743115"),a=r("863150"),c=r("96025"),u=r("134403");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function f(e){let{href:t,children:r}=e;return(0,n.jsx)(i.Z,{href:t,className:(0,o.Z)("card padding--lg",d.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:s,description:i}=e;return(0,n.jsxs)(f,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),i&&(0,n.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e,r=(0,s.LM)(t),o=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(m,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,a.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,s.xz)(t.docId??void 0);return(0,n.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e,r=(0,s.jA)();return(0,n.jsx)(x,{items:r.items,className:t})}function x(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(b,{...e});let i=(0,s.MN)(t);return(0,n.jsx)("section",{className:(0,o.Z)("row",r),children:i.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(g,{item:e})},t))})}},743115:function(e,t,r){r.d(t,{c:function(){return a}});var n=r(667294),o=r(402933);let s=["zero","one","two","few","many","other"];function i(e){return s.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let o=r.select(t);return n[Math.min(r.pluralForms.indexOf(o),n.length-1)]})(r,t,e)}}},250065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return i}});var n=r(667294);let o={},s=n.createContext(o);function i(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
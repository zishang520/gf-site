"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[32686],{54700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u914d\u7f6e\u7ba1\u7406/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1","title":"\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1","description":"GoFrame\u6846\u67b6\u4e2dgcfg\u7ec4\u4ef6\u7684\u63a5\u53e3\u5316\u8bbe\u8ba1\u53ca\u5176\u9ad8\u6269\u5c55\u6027\u3002\u901a\u8fc7\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u914d\u7f6e\u83b7\u53d6\u65b9\u5f0f\uff0c\u5305\u62ec\u4f7f\u7528etcd\u3001zookeeper\u3001consul\u3001kubernetes configmap\u548capollo\u7b49\uff0c\u6ee1\u8db3\u591a\u6837\u5316\u7684\u914d\u7f6e\u7ba1\u7406\u9700\u6c42\u3002\u8be6\u7ec6\u7684\u63a5\u53e3\u5b9a\u4e49\u548c\u5b9e\u73b0\u8bbe\u7f6e\u6307\u5bfc\u4e3a\u60a8\u63d0\u4f9b\u914d\u7f6e\u529f\u80fd\u7684\u7075\u6d3b\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u914d\u7f6e\u7ba1\u7406/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u914d\u7f6e\u7ba1\u7406/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1","slug":"/docs/core/gcfg-interface","permalink":"/2.7.x/docs/core/gcfg-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u914d\u7f6e\u7ba1\u7406/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1.md","tags":[],"version":"2.7.x","sidebarPosition":3,"frontMatter":{"slug":"/docs/core/gcfg-interface","title":"\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u914d\u7f6e\u7ba1\u7406","\u63a5\u53e3\u5316\u8bbe\u8ba1","\u9ad8\u6269\u5c55\u6027","\u914d\u7f6e\u83b7\u53d6\u65b9\u5f0f","etcd","zookeeper","consul","kubernetes","apollo"],"description":"GoFrame\u6846\u67b6\u4e2dgcfg\u7ec4\u4ef6\u7684\u63a5\u53e3\u5316\u8bbe\u8ba1\u53ca\u5176\u9ad8\u6269\u5c55\u6027\u3002\u901a\u8fc7\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u914d\u7f6e\u83b7\u53d6\u65b9\u5f0f\uff0c\u5305\u62ec\u4f7f\u7528etcd\u3001zookeeper\u3001consul\u3001kubernetes configmap\u548capollo\u7b49\uff0c\u6ee1\u8db3\u591a\u6837\u5316\u7684\u914d\u7f6e\u7ba1\u7406\u9700\u6c42\u3002\u8be6\u7ec6\u7684\u63a5\u53e3\u5b9a\u4e49\u548c\u5b9e\u73b0\u8bbe\u7f6e\u6307\u5bfc\u4e3a\u60a8\u63d0\u4f9b\u914d\u7f6e\u529f\u80fd\u7684\u7075\u6d3b\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u914d\u7f6e\u7ba1\u7406-\u5e38\u7528\u65b9\u6cd5","permalink":"/2.7.x/docs/core/gcfg-funcs"},"next":{"title":"\u914d\u7f6e\u7ba1\u7406-AdapterFile","permalink":"/2.7.x/docs/core/gcfg-interface-adapter-file"}}');var o=n(474848),c=n(28453),s=n(103514);const i={slug:"/docs/core/gcfg-interface",title:"\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u914d\u7f6e\u7ba1\u7406","\u63a5\u53e3\u5316\u8bbe\u8ba1","\u9ad8\u6269\u5c55\u6027","\u914d\u7f6e\u83b7\u53d6\u65b9\u5f0f","etcd","zookeeper","consul","kubernetes","apollo"],description:"GoFrame\u6846\u67b6\u4e2dgcfg\u7ec4\u4ef6\u7684\u63a5\u53e3\u5316\u8bbe\u8ba1\u53ca\u5176\u9ad8\u6269\u5c55\u6027\u3002\u901a\u8fc7\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u914d\u7f6e\u83b7\u53d6\u65b9\u5f0f\uff0c\u5305\u62ec\u4f7f\u7528etcd\u3001zookeeper\u3001consul\u3001kubernetes configmap\u548capollo\u7b49\uff0c\u6ee1\u8db3\u591a\u6837\u5316\u7684\u914d\u7f6e\u7ba1\u7406\u9700\u6c42\u3002\u8be6\u7ec6\u7684\u63a5\u53e3\u5b9a\u4e49\u548c\u5b9e\u73b0\u8bbe\u7f6e\u6307\u5bfc\u4e3a\u60a8\u63d0\u4f9b\u914d\u7f6e\u529f\u80fd\u7684\u7075\u6d3b\u6027\u3002"},a=void 0,l={},d=[{value:"\u63a5\u53e3\u5b9a\u4e49",id:"\u63a5\u53e3\u5b9a\u4e49",level:2},{value:"\u8bbe\u7f6e\u63a5\u53e3\u5b9e\u73b0",id:"\u8bbe\u7f6e\u63a5\u53e3\u5b9e\u73b0",level:2},{value:"\u83b7\u53d6\u63a5\u53e3\u5b9e\u73b0",id:"\u83b7\u53d6\u63a5\u53e3\u5b9e\u73b0",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"gcfg"})," \u7ec4\u4ef6\u91c7\u7528\u4e86\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u4ee5\u5b9e\u73b0\u9ad8\u6269\u5c55\u6027\u3002\u901a\u8fc7\u63a5\u53e3\u5316\u8bbe\u8ba1\u7684\u65b9\u5f0f\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5bf9\u63a5\u7684\u914d\u7f6e\u83b7\u53d6\u65b9\u5f0f\uff0c\u4f8b\u5982 ",(0,o.jsx)(t.code,{children:"etcd, zookeeper, consul, kubernetes configmap, apollo"})," \u7b49\u7b49\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u63a5\u53e3\u5b9a\u4e49",children:"\u63a5\u53e3\u5b9a\u4e49"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/gogf/gf/blob/master/os/gcfg/gcfg_adaper.go",children:"https://github.com/gogf/gf/blob/master/os/gcfg/gcfg_adaper.go"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"// Adapter is the interface for configuration retrieving.\ntype Adapter interface {\n    // Available checks and returns the configuration service is available.\n    // The optional parameter `resource` specifies certain configuration resource.\n    //\n    // It returns true if configuration file is present in default AdapterFile, or else false.\n    // Note that this function does not return error as it just does simply check for backend configuration service.\n    Available(ctx context.Context, resource ...string) (ok bool)\n\n    // Get retrieves and returns value by specified `pattern`.\n    Get(ctx context.Context, pattern string) (value interface{}, err error)\n\n    // Data retrieves and returns all configuration data as map type.\n    // Note that this function may lead lots of memory usage if configuration data is too large,\n    // you can implement this function if necessary.\n    Data(ctx context.Context) (data map[string]interface{}, err error)\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u8bbe\u7f6e\u63a5\u53e3\u5b9e\u73b0",children:"\u8bbe\u7f6e\u63a5\u53e3\u5b9e\u73b0"}),"\n",(0,o.jsxs)(t.p,{children:["\u914d\u7f6e\u5bf9\u8c61\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"SetAdapter"})," \u65b9\u6cd5\u8bbe\u7f6e\u5f53\u524d\u4f7f\u7528\u7684\u63a5\u53e3\u5b9e\u73b0\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"// SetAdapter sets the adapter of current Config object.\nfunc (c *Config) SetAdapter(adapter Adapter)\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u83b7\u53d6\u63a5\u53e3\u5b9e\u73b0",children:"\u83b7\u53d6\u63a5\u53e3\u5b9e\u73b0"}),"\n",(0,o.jsxs)(t.p,{children:["\u914d\u7f6e\u5bf9\u8c61\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"GetAdapter"})," \u65b9\u6cd5\u83b7\u53d6\u5f53\u524d\u4f7f\u7528\u7684\u63a5\u53e3\u5b9e\u73b0\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"// GetAdapter returns the adapter of current Config object.\nfunc (c *Config) GetAdapter() Adapter\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,o.jsx)(s.A,{})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},103514:(e,t,n)=>{n.d(t,{A:()=>j});n(296540);var r=n(634164),o=n(944718),c=n(328774),s=n(853465),i=n(316654),a=n(721312),l=n(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(474848);function f(e){let{href:t,children:n}=e;return(0,u.jsx)(c.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:c}=e;return(0,u.jsxs)(f,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),c&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:c,children:c})]})}function g(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function m(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(m,{item:t});case"category":return(0,u.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,u.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const c=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:c.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(h,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(296540),o=n(144586);const c=["zero","one","two","few","many","other"];function s(e){return c.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),c=n.pluralForms.indexOf(o);return r[Math.min(c,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(296540);const o={},c=r.createContext(o);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);
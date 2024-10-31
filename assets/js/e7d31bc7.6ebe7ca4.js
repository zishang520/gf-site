"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[33004],{515992:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>a});var i=s(474848),d=s(28453);const n={title:"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",sidebar_position:4,hide_title:!0},r=void 0,o={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",title:"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",description:"gredis \u91c7\u7528\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u5177\u6709\u5f3a\u5927\u7684\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027\u3002",source:"@site/versioned_docs/version-2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",permalink:"/gf-site/docs/2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1.md",tags:[],version:"2.3.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:4,frontMatter:{title:"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",sidebar_position:4,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Redis-Conn\u5bf9\u8c61",permalink:"/gf-site/docs/2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Conn\u5bf9\u8c61"},next:{title:"I18N\u56fd\u9645\u5316",permalink:"/gf-site/docs/2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/I18N\u56fd\u9645\u5316/"}},c={},a=[{value:"\u63a5\u53e3\u5b9a\u4e49",id:"\u63a5\u53e3\u5b9a\u4e49",level:2},{value:"\u76f8\u5173\u65b9\u6cd5",id:"\u76f8\u5173\u65b9\u6cd5",level:2},{value:"\u66f4\u8fdb\u4e00\u6b65",id:"\u66f4\u8fdb\u4e00\u6b65",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"gredis"})," \u91c7\u7528\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u5177\u6709\u5f3a\u5927\u7684\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u63a5\u53e3\u5b9a\u4e49",children:"\u63a5\u53e3\u5b9a\u4e49"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis#Adapter",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis#Adapter"})}),"\n",(0,i.jsx)(t.h2,{id:"\u76f8\u5173\u65b9\u6cd5",children:"\u76f8\u5173\u65b9\u6cd5"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"// SetAdapter sets custom adapter for current redis client.\nfunc (r *Redis) SetAdapter(adapter Adapter)\n\n// GetAdapter returns the adapter that is set in current redis client.\nfunc (r *Redis) GetAdapter() Adapter\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u66f4\u8fdb\u4e00\u6b65",children:"\u66f4\u8fdb\u4e00\u6b65"}),"\n",(0,i.jsxs)(t.p,{children:["\u7531\u4e8e ",(0,i.jsx)(t.code,{children:"gredis"})," \u7ec4\u4ef6\u7684\u63a5\u53e3\u5b9e\u73b0\u662f\u9ad8\u9636\u529f\u80fd\uff0c\u4e00\u822c\u6765\u8bf4\u5f00\u53d1\u8005\u4e5f\u65e0\u9700\u66ff\u6362 ",(0,i.jsx)(t.code,{children:"Redis"})," \u63a5\u53e3\u5b9e\u73b0\u3002\u611f\u5174\u8da3\u7684\u670b\u53cb\u53ef\u4ee5\u81ea\u884c\u7814\u7a76\u3002"]})]})}function p(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var i=s(296540);const d={},n=i.createContext(d);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);
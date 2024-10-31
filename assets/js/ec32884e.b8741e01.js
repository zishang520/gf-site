"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[58349],{108269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>x});var s=n(474848),o=n(28453);const i={title:"Redis-Context",sidebar_position:3,hide_title:!0},d=void 0,r={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Context",title:"Redis-Context",description:"gredis \u7ec4\u4ef6\u652f\u6301 Context \u4e0a\u4e0b\u6587\u53d8\u91cf\u7684\u4f20\u9012\uff0c\u4e3b\u8981\u7528\u4e8e\u8bf7\u6c42\u63a7\u5236\u3001\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\u7b49\u573a\u666f\u3002\u4e0a\u4e0b\u6587\u53d8\u91cf\u4f20\u9012\u53ef\u4ee5\u901a\u8fc7 Ctx \u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\u5b9e\u73b0\uff0c\u65b9\u6cd5\u5b9a\u4e49\u5982\u4e0b\uff1a",source:"@site/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Context.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Context",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Context",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Context.md",tags:[],version:"1.16.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:3,frontMatter:{title:"Redis-Context",sidebar_position:3,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Redis-\u7ed3\u679c\u5904\u7406",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u7ed3\u679c\u5904\u7406"},next:{title:"I18N\u56fd\u9645\u5316",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/I18N\u56fd\u9645\u5316/"}},c={},x=[];function a(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"gredis"})," \u7ec4\u4ef6\u652f\u6301 ",(0,s.jsx)(t.code,{children:"Context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u7684\u4f20\u9012\uff0c\u4e3b\u8981\u7528\u4e8e\u8bf7\u6c42\u63a7\u5236\u3001\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\u7b49\u573a\u666f\u3002\u4e0a\u4e0b\u6587\u53d8\u91cf\u4f20\u9012\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(t.code,{children:"Ctx"})," \u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\u5b9e\u73b0\uff0c\u65b9\u6cd5\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"// Ctx is a channing function which sets the context for next operation.\nfunc (r *Redis) Ctx(ctx context.Context) *Redis\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7531\u4e8e ",(0,s.jsx)(t.code,{children:"gredis"})," \u7684\u4e0a\u4e0b\u6587\u53d8\u91cf\u662f\u901a\u8fc7\u94fe\u5f0f\u64cd\u4f5c\u6765\u5b9e\u73b0\u7684\uff0c\u56e0\u6b64\u6ca1\u6709\u5f3a\u5236\u6027\u7684 ",(0,s.jsx)(t.code,{children:"Context"})," \u8f93\u5165\uff0c\u5927\u5bb6\u4f7f\u7528\u5728\u94fe\u8def\u8ddf\u8e2a\u7684\u65f6\u5019\u53ef\u80fd\u9700\u8981\u6ce8\u610f\u4e00\u4e0b\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5173\u4e8e\u94fe\u8def\u8ddf\u8e2a\u4ee5\u53ca\u4f7f\u7528\u793a\u4f8b\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,s.jsx)(t.a,{href:"/gf-site/docs/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E9%93%BE%E8%B7%AF%E8%B7%9F%E8%B8%AA/",children:"\u94fe\u8def\u8ddf\u8e2a"})]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>r});var s=n(296540);const o={},i=s.createContext(o);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
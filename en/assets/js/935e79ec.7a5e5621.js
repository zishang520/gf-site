"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[6057],{910855:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var d=n(474848),i=n(28453);const r={title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6",sidebar_position:7,hide_title:!0},l=void 0,t={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6",title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6",description:"FieldsStr/FieldsExStr \u5b57\u6bb5\u83b7\u53d6",source:"@site/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6",permalink:"/gf-site/en/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:7,frontMatter:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6",sidebar_position:7,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u8fc7\u6ee4",permalink:"/gf-site/en/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u8fc7\u6ee4"},next:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e8b\u52a1\u5904\u7406",permalink:"/gf-site/en/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e8b\u52a1\u5904\u7406"}},c={},o=[{value:"<code>FieldsStr/FieldsExStr</code> \u5b57\u6bb5\u83b7\u53d6",id:"fieldsstrfieldsexstr-\u5b57\u6bb5\u83b7\u53d6",level:2},{value:"<code>FieldsStr</code> \u793a\u4f8b",id:"fieldsstr-\u793a\u4f8b",level:3},{value:"<code>FieldsExStr</code> \u793a\u4f8b",id:"fieldsexstr-\u793a\u4f8b",level:3}];function a(e){const s={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",pre:"pre",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h2,{id:"fieldsstrfieldsexstr-\u5b57\u6bb5\u83b7\u53d6",children:[(0,d.jsx)(s.code,{children:"FieldsStr/FieldsExStr"})," \u5b57\u6bb5\u83b7\u53d6"]}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"FieldsStr"}),' \u7528\u4e8e\u83b7\u53d6\u6307\u5b9a\u8868\u7684\u5b57\u6bb5\uff0c\u5e76\u53ef\u7ed9\u5b9a\u5b57\u6bb5\u524d\u7f00\uff0c\u5b57\u6bb5\u4e4b\u95f4\u4f7f\u7528" ',(0,d.jsx)(s.code,{children:","}),'"\u7b26\u53f7\u8fde\u63a5\u6210\u5b57\u7b26\u4e32\u8fd4\u56de\uff1b']}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"FieldsExStr"}),' \u7528\u4e8e\u83b7\u53d6\u6307\u5b9a\u8868\u4e2d\u4f8b\u5916\u7684\u5b57\u6bb5\uff0c\u5e76\u53ef\u7ed9\u5b9a\u5b57\u6bb5\u524d\u7f00\uff0c\u5b57\u6bb5\u4e4b\u95f4\u4f7f\u7528" ',(0,d.jsx)(s.code,{children:","}),'"\u7b26\u53f7\u8fde\u63a5\u6210\u5b57\u7b26\u4e32\u8fd4\u56de\uff1b']}),"\n"]}),"\n",(0,d.jsxs)(s.h3,{id:"fieldsstr-\u793a\u4f8b",children:[(0,d.jsx)(s.code,{children:"FieldsStr"})," \u793a\u4f8b"]}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:["\u5047\u5982 ",(0,d.jsx)(s.code,{children:"user"})," \u8868\u67094\u4e2a\u5b57\u6bb5 ",(0,d.jsx)(s.code,{children:"uid"}),", ",(0,d.jsx)(s.code,{children:"nickname"}),", ",(0,d.jsx)(s.code,{children:"passport"}),", ",(0,d.jsx)(s.code,{children:"password"}),"\u3002"]}),"\n",(0,d.jsx)(s.li,{children:"\u67e5\u8be2\u5b57\u6bb5"}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-go",children:'// uid,nickname,passport,password\ng.Model("user").FieldsStr()\n'})}),"\n",(0,d.jsxs)(s.ol,{start:"3",children:["\n",(0,d.jsx)(s.li,{children:"\u67e5\u8be2\u5b57\u6bb5\u7ed9\u6307\u5b9a\u524d\u7f00"}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-go",children:'// gf_uid,gf_nickname,gf_passport,gf_password\ng.Model("user").FieldsStr("gf_")\n'})}),"\n",(0,d.jsxs)(s.h3,{id:"fieldsexstr-\u793a\u4f8b",children:[(0,d.jsx)(s.code,{children:"FieldsExStr"})," \u793a\u4f8b"]}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:["\u5047\u5982 ",(0,d.jsx)(s.code,{children:"user"})," \u8868\u67094\u4e2a\u5b57\u6bb5 ",(0,d.jsx)(s.code,{children:"uid"}),", ",(0,d.jsx)(s.code,{children:"nickname"}),", ",(0,d.jsx)(s.code,{children:"passport"}),", ",(0,d.jsx)(s.code,{children:"password"}),"\u3002"]}),"\n",(0,d.jsx)(s.li,{children:"\u67e5\u8be2\u5b57\u6bb5\u6392\u9664"}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-go",children:'// uid,nickname\ng.Model("user").FieldsExStr("passport, password")\n'})}),"\n",(0,d.jsxs)(s.ol,{start:"3",children:["\n",(0,d.jsx)(s.li,{children:"\u67e5\u8be2\u5b57\u6bb5\u6392\u9664\u5e76\u7ed9\u5b9a\u524d\u7f00"}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-go",children:'// gf_uid,gf_nickname\ng.Model("user").FieldsExStr("passport, password", "gf_")\n'})})]})}function x(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>t});var d=n(296540);const i={},r=d.createContext(i);function l(e){const s=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),d.createElement(r.Provider,{value:s},e.children)}}}]);
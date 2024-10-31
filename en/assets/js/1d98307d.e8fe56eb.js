"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[9603],{47852:(d,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var n=t(74848),s=t(28453);const c={slug:"/core/gdb/chaining",title:"ORM\u94fe\u5f0f\u64cd\u4f5c(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)",sidebar_position:1,hide_title:!0},i=void 0,r={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c",title:"ORM\u94fe\u5f0f\u64cd\u4f5c(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/1-ORM\u94fe\u5f0f\u64cd\u4f5c.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c",slug:"/core/gdb/chaining",permalink:"/gf-site/en/docs/core/gdb/chaining",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/1-ORM\u94fe\u5f0f\u64cd\u4f5c.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730354542e3,sidebarPosition:1,frontMatter:{slug:"/core/gdb/chaining",title:"ORM\u94fe\u5f0f\u64cd\u4f5c(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)",sidebar_position:1,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"ORM\u4f7f\u7528\u914d\u7f6e",permalink:"/gf-site/en/docs/core/gdb/config"},next:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa",permalink:"/gf-site/en/docs/core/gdb/chaining/model"}},l={},h=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u90e8\u5206\u4e0d\u652f\u6301\u7684\u64cd\u4f5c",id:"\u90e8\u5206\u4e0d\u652f\u6301\u7684\u64cd\u4f5c",level:2}];function x(d){const e={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...d.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"gdb"})," \u94fe\u5f0f\u64cd\u4f5c\u4f7f\u7528\u65b9\u5f0f\u7b80\u5355\u7075\u6d3b\uff0c\u662f ",(0,n.jsx)(e.code,{children:"GoFrame"})," \u6846\u67b6\u5b98\u65b9\u63a8\u8350\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u65b9\u5f0f\u3002\u94fe\u5f0f\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7\u6570\u636e\u5e93\u5bf9\u8c61\u7684 ",(0,n.jsx)(e.code,{children:"db.Model"})," \u65b9\u6cd5\u6216\u8005\u4e8b\u52a1\u5bf9\u8c61\u7684 ",(0,n.jsx)(e.code,{children:"tx.Model"})," \u65b9\u6cd5\uff0c\u57fa\u4e8e\u6307\u5b9a\u7684\u6570\u636e\u8868\u8fd4\u56de\u4e00\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u5bf9\u8c61 ",(0,n.jsx)(e.code,{children:"*Model"}),"\uff0c\u8be5\u5bf9\u8c61\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u65b9\u6cd5\u3002\u5f53\u524d\u65b9\u6cd5\u5217\u8868\u53ef\u80fd\u6ede\u540e\u4e8e\u6e90\u4ee3\u7801\uff0c\u8be6\u7ec6\u7684\u65b9\u6cd5\u5217\u8868\u8bf7\u53c2\u8003\u63a5\u53e3\u6587\u6863\uff1a ",(0,n.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Model",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Model"})]}),"\n",(0,n.jsx)(e.h2,{id:"\u90e8\u5206\u4e0d\u652f\u6301\u7684\u64cd\u4f5c",children:"\u90e8\u5206\u4e0d\u652f\u6301\u7684\u64cd\u4f5c"}),"\n",(0,n.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u6700\u65b0\u7248\u672c\u7684\u652f\u6301\u60c5\u51b5"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(e.th,{children:"Replace"}),(0,n.jsx)(e.th,{children:"Save"}),(0,n.jsx)(e.th,{children:"InsertIgnore"}),(0,n.jsx)(e.th,{children:"InsertGetId"}),(0,n.jsx)(e.th,{children:"LastInsertId"}),(0,n.jsx)(e.th,{children:"Transaction"}),(0,n.jsx)(e.th,{children:"RowsAffected"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"mysql"})}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"mariadb"})}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"tidb"})}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"pgsql"})}),(0,n.jsx)(e.td,{children:"\u4e0d\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u4e0d\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"mssql"})}),(0,n.jsx)(e.td,{children:"\u4e0d\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u4e0d\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"sqlite"})}),(0,n.jsx)(e.td,{children:"\u4e0d\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"oracle"})}),(0,n.jsx)(e.td,{children:"\u4e0d\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u4e0d\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"dm"})}),(0,n.jsx)(e.td,{children:"\u4e0d\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"clickhouse"})}),(0,n.jsx)(e.td,{children:"\u4e0d\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u4e0d\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u4e0d\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u4e0d\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u4e0d\u652f\u6301"}),(0,n.jsx)(e.td,{children:"\u4e0d\u652f\u6301"})]})]})]})]})}function j(d={}){const{wrapper:e}={...(0,s.R)(),...d.components};return e?(0,n.jsx)(e,{...d,children:(0,n.jsx)(x,{...d})}):x(d)}},28453:(d,e,t)=>{t.d(e,{R:()=>i,x:()=>r});var n=t(96540);const s={},c=n.createContext(s);function i(d){const e=n.useContext(c);return n.useMemo((function(){return"function"==typeof d?d(e):{...e,...d}}),[e,d])}function r(d){let e;return e=d.disableParentContext?"function"==typeof d.components?d.components(s):d.components||s:i(d.components),n.createElement(c.Provider,{value:e},d.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[97236],{180205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301","title":"ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301","description":"GoFrame ORM \u7ec4\u4ef6\u9488\u5bf9\u4e8e struct \u5185\u5d4c\u7ed3\u6784\u63d0\u4f9b\u4e86\u826f\u597d\u7684\u652f\u6301\uff0c\u5305\u62ec\u53c2\u6570\u4f20\u9012\u3001\u7ed3\u679c\u5904\u7406\u3002\u4f8b\u5982\uff1a","source":"@site/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027","slug":"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301","permalink":"/en/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301.md","tags":[],"version":"2.6.x","sidebarPosition":8,"frontMatter":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301","sidebar_position":8,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8f6c\u6362","permalink":"/en/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8f6c\u6362"},"next":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362","permalink":"/en/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362"}}');var s=n(474848),i=n(28453);const o={title:"ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301",sidebar_position:8,hide_title:!0},c=void 0,a={},d=[];function l(e){const t={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"GoFrame ORM"})," \u7ec4\u4ef6\u9488\u5bf9\u4e8e ",(0,s.jsx)(t.code,{children:"struct"})," \u5185\u5d4c\u7ed3\u6784\u63d0\u4f9b\u4e86\u826f\u597d\u7684\u652f\u6301\uff0c\u5305\u62ec\u53c2\u6570\u4f20\u9012\u3001\u7ed3\u679c\u5904\u7406\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'type Base struct {\n    Uid        int         `orm:"uid"`\n    CreateAt   *gtime.Time `orm:"create_at"`\n    UpdateAt   *gtime.Time `orm:"update_at"`\n    DeleteAt   *gtime.Time `orm:"delete_at"`\n}\ntype User struct {\n    Base\n    Passport   string `orm:"passport"`\n    Password   string `orm:"password"`\n    Nickname   string `orm:"nickname"`\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["\u5e76\u4e14\uff0c\u65e0\u8bba\u591a\u5c11\u5c42\u7ea7\u7684 ",(0,s.jsx)(t.code,{children:"struct"})," \u5d4c\u5957\uff0c ",(0,s.jsx)(t.code,{children:"ORM"})," \u7684\u53c2\u6570\u4f20\u9012\u548c\u7ed3\u679c\u5904\u7406\u90fd\u652f\u6301\u3002"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(296540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
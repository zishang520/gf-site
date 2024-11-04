"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[1279],{32377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex/\u6b63\u5219\u8868\u8fbe\u5f0f-\u57fa\u672c\u4f7f\u7528","title":"\u6b63\u5219\u8868\u8fbe\u5f0f-\u57fa\u672c\u4f7f\u7528","description":"\u4e00\u4e2a\u7b80\u5355\u793a\u4f8b\uff1a","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex/\u6b63\u5219\u8868\u8fbe\u5f0f-\u57fa\u672c\u4f7f\u7528.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex","slug":"/docs/components/text-gregex-example","permalink":"/docs/components/text-gregex-example","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex/\u6b63\u5219\u8868\u8fbe\u5f0f-\u57fa\u672c\u4f7f\u7528.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/components/text-gregex-example","title":"\u6b63\u5219\u8868\u8fbe\u5f0f-\u57fa\u672c\u4f7f\u7528","sidebar_position":0,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u6b63\u5219\u8868\u8fbe\u5f0f-gregex","permalink":"/docs/components/text-gregex"},"next":{"title":"\u6b63\u5219\u8868\u8fbe\u5f0f-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/docs/components/text-gregex-funcs"}}');var s=n(74848),r=n(28453);const c={slug:"/docs/components/text-gregex-example",title:"\u6b63\u5219\u8868\u8fbe\u5f0f-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},i=void 0,a={},d=[];function g(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"\u4e00\u4e2a\u7b80\u5355\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/text/gregex"\n)\n\nfunc main() {\n    match, _ := gregex.MatchString(`(\\w+).+\\-\\-\\s*(.+)`, `GoFrame is best! -- John`)\n    fmt.Printf(`%s says "%s" is the one he loves!`, match[2], match[1])\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'John says "GoFrame" is the one he loves!\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var o=n(96540);const s={},r=o.createContext(s);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);
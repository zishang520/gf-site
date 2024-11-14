"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[20010],{59846:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>g,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"\u5f00\u53d1\u5de5\u5177/swagger API\u6587\u6863\u751f\u6210","title":"swagger API\u6587\u6863\u751f\u6210","description":"\u4f7f\u7528\u65b9\u5f0f\uff1a","source":"@site/versioned_docs/version-1.16.x/\u5f00\u53d1\u5de5\u5177/swagger API\u6587\u6863\u751f\u6210.md","sourceDirName":"\u5f00\u53d1\u5de5\u5177","slug":"/\u5f00\u53d1\u5de5\u5177/swagger API\u6587\u6863\u751f\u6210","permalink":"/1.16.x/\u5f00\u53d1\u5de5\u5177/swagger API\u6587\u6863\u751f\u6210","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u5f00\u53d1\u5de5\u5177/swagger API\u6587\u6863\u751f\u6210.md","tags":[],"version":"1.16.x","sidebarPosition":6,"frontMatter":{"title":"swagger API\u6587\u6863\u751f\u6210","sidebar_position":6,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"run \u70ed\u7f16\u8bd1(\u81ea\u52a8\u7f16\u8bd1)","permalink":"/1.16.x/\u5f00\u53d1\u5de5\u5177/run \u70ed\u7f16\u8bd1-\u81ea\u52a8\u7f16\u8bd1"},"next":{"title":"pack \u8d44\u6e90\u6253\u5305","permalink":"/1.16.x/\u5f00\u53d1\u5de5\u5177/pack \u8d44\u6e90\u6253\u5305"}}');var r=n(474848),a=n(28453);const g={title:"swagger API\u6587\u6863\u751f\u6210",sidebar_position:6,hide_title:!0},o=void 0,i={},c=[];function d(e){const s={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"\u4f7f\u7528\u65b9\u5f0f\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'$ gf swagger -h\nUSAGE\n    gf swagger [OPTION]\n\nOPTION\n    -s, --server  start a swagger server at specified address after swagger files\n                  produced\n    -o, --output  the output directory for storage parsed swagger files,\n                  the default output directory is "./swagger"\n    -/--pack      auto parses and packs swagger into packed/swagger.go.\n\nEXAMPLES\n    gf swagger\n    gf swagger --pack\n    gf swagger -s 8080\n    gf swagger -s 127.0.0.1:8080\n    gf swagger -o ./document/swagger\n\nDESCRIPTION\n    The "swagger" command parses the current project and produces swagger API description\n    files, which can be used in swagger API server. If used with "-s/--server" option, it\n    watches the changes of go files of current project and reproduces the swagger files,\n    which is quite convenient for local API development.\n    If it fails in command "swag", please firstly check your system PATH whether containing\n    go binary path, or you can install the "swag" tool manually referring to:\n    https://github.com/swaggo/swag\n'})}),"\n",(0,r.jsxs)(s.p,{children:["\u8be5\u547d\u4ee4\u5185\u90e8\u4f7f\u7528\u7684\u662f ",(0,r.jsx)(s.code,{children:"swag"})," \u5de5\u5177\uff0c\u76f8\u5173\u8bed\u6cd5\u8bf7\u53c2\u8003\uff1a ",(0,r.jsx)(s.a,{href:"https://github.com/swaggo/swag",children:"https://github.com/swaggo/swag"})]}),"\n",(0,r.jsxs)(s.p,{children:["\u6b64\u5916\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"gf"})," \u6846\u67b6\u7684 ",(0,r.jsx)(s.code,{children:"swagger"})," \u63d2\u4ef6\uff0c\u4ed3\u5e93\u5730\u5740\uff1a ",(0,r.jsx)(s.a,{href:"https://github.com/gogf/swagger",children:"https://github.com/gogf/swagger"})]}),"\n",(0,r.jsx)(s.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"$ gf swagger --pack\n2020-12-31 00:42:10.345 producing swagger files...\n2020-12-31 00:42:10.452 done!\n2020-12-31 00:42:10.452 gf pack swagger packed/swagger.go -n packed\npath 'packed/swagger.go' is not empty, files might be overwrote, continue? [y/n]: y\n2020-12-31 00:42:13.954 done!\n"})})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>g,x:()=>o});var t=n(296540);const r={},a=t.createContext(r);function g(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:g(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);
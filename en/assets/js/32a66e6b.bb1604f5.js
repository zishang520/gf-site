"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[99878],{28887:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var s=o(74848),t=o(28453);const c={slug:"/components/encoding/gjson",title:"\u901a\u7528\u7f16\u89e3\u7801-gjson",sidebar_position:0,hide_title:!0},i=void 0,d={id:"\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-gjson",title:"\u901a\u7528\u7f16\u89e3\u7801-gjson",description:"gjson \u6a21\u5757\u5b9e\u73b0\u4e86\u5f3a\u5927\u7684\u6570\u636e\u7f16\u7801/\u89e3\u6790\u529f\u80fd\uff0c\u652f\u6301\u6570\u636e\u5c42\u7ea7\u68c0\u7d22\u3001\u52a8\u6001\u521b\u5efa\u4fee\u6539 Json \u5bf9\u8c61\uff0c\u5e76\u652f\u6301\u5e38\u89c1\u6570\u636e\u683c\u5f0f\u7684\u89e3\u6790\u548c\u8f6c\u6362\u7b49\u7279\u70b9\u3002",source:"@site/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-gjson.md",sourceDirName:"\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson",slug:"/components/encoding/gjson",permalink:"/gf-site/en/docs/components/encoding/gjson",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-gjson.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:0,frontMatter:{slug:"/components/encoding/gjson",title:"\u901a\u7528\u7f16\u89e3\u7801-gjson",sidebar_position:0,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u5bf9\u8c61\u4fe1\u606f-gstructs",permalink:"/gf-site/en/docs/components/os/gstructs"},next:{title:"\u901a\u7528\u7f16\u89e3\u7801-\u5bf9\u8c61\u521b\u5efa",permalink:"/gf-site/en/docs/components/encoding/gjson-creation"}},r={},g=[{value:"<strong>\u4f7f\u7528\u65b9\u5f0f</strong>\uff1a",id:"\u4f7f\u7528\u65b9\u5f0f",level:2}];function l(n){const e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gjson"})," \u6a21\u5757\u5b9e\u73b0\u4e86\u5f3a\u5927\u7684\u6570\u636e\u7f16\u7801/\u89e3\u6790\u529f\u80fd\uff0c\u652f\u6301\u6570\u636e\u5c42\u7ea7\u68c0\u7d22\u3001\u52a8\u6001\u521b\u5efa\u4fee\u6539 ",(0,s.jsx)(e.code,{children:"Json"})," \u5bf9\u8c61\uff0c\u5e76\u652f\u6301\u5e38\u89c1\u6570\u636e\u683c\u5f0f\u7684\u89e3\u6790\u548c\u8f6c\u6362\u7b49\u7279\u70b9\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u7279\u70b9\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u6570\u636e\u5c42\u7ea7\u68c0\u7d22\uff1b"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u8fd0\u884c\u65f6\u6570\u636e\u4fee\u6539\uff1b"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u52a8\u6001\u521b\u5efa\u5c42\u7ea7\u6570\u636e\u7ed3\u6784\uff0c\u5e76\u8f6c\u6362\u4e3a\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f\uff1b"}),"\n",(0,s.jsxs)(e.li,{children:["\u652f\u6301 ",(0,s.jsx)(e.code,{children:"JSON"}),"\u3001 ",(0,s.jsx)(e.code,{children:"XML"}),"\u3001 ",(0,s.jsx)(e.code,{children:"INI"}),"\u3001 ",(0,s.jsx)(e.code,{children:"YAML/YML"}),"\u3001 ",(0,s.jsx)(e.code,{children:"TOML"}),"\u3001 ",(0,s.jsx)(e.code,{children:"PROPERTIES"}),"\u3001 ",(0,s.jsx)(e.code,{children:"Struct"})," \u6570\u636e\u683c\u5f0f\u76f8\u4e92\u8f6c\u6362\uff1b"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u9700\u8981\u6ce8\u610f ",(0,s.jsx)(e.code,{children:"gjson"})," \u5305\u652f\u6301\u591a\u79cd\u6570\u636e\u683c\u5f0f\u7684\u8bfb\u53d6\u3001\u5199\u5165\u548c\u8f6c\u6362\uff0c\u4e0d\u4ec5\u4ec5\u9488\u5bf9 ",(0,s.jsx)(e.code,{children:"json"})," \u683c\u5f0f\u3002"]}),"\n",(0,s.jsxs)(e.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:[(0,s.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/encoding/gjson"\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gjson",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gjson"})})]})}function j(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>i,x:()=>d});var s=o(96540);const t={},c=s.createContext(t);function i(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);
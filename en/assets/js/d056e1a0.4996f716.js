"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[49347],{19683:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var t=o(74848),s=o(28453);const c={slug:"/core/glog/json",title:"\u65e5\u5fd7\u7ec4\u4ef6-JSON\u683c\u5f0f",sidebar_position:7,hide_title:!0},i=void 0,r={id:"\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-JSON\u683c\u5f0f",title:"\u65e5\u5fd7\u7ec4\u4ef6-JSON\u683c\u5f0f",description:"glog \u5bf9\u65e5\u5fd7\u5206\u6790\u5de5\u5177\u975e\u5e38\u53cb\u597d\uff0c\u652f\u6301\u8f93\u51fa JSON \u683c\u5f0f\u7684\u65e5\u5fd7\u5185\u5bb9\uff0c\u4ee5\u4fbf\u4e8e\u540e\u671f\u5bf9\u65e5\u5fd7\u5185\u5bb9\u8fdb\u884c\u89e3\u6790\u5206\u6790\u3002",source:"@site/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-JSON\u683c\u5f0f.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6",slug:"/core/glog/json",permalink:"/gf-site/en/docs/core/glog/json",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-JSON\u683c\u5f0f.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:7,frontMatter:{slug:"/core/glog/json",title:"\u65e5\u5fd7\u7ec4\u4ef6-JSON\u683c\u5f0f",sidebar_position:7,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u65e5\u5fd7\u7ec4\u4ef6-Handler",permalink:"/gf-site/en/docs/core/glog/handler"},next:{title:"\u65e5\u5fd7\u7ec4\u4ef6-\u5f02\u6b65\u8f93\u51fa",permalink:"/gf-site/en/docs/core/glog/async"}},d={},l=[{value:"\u4f7f\u7528 <code>map/struct</code> \u53c2\u6570",id:"\u4f7f\u7528-mapstruct-\u53c2\u6570",level:2},{value:"\u7ed3\u5408 <code>gjson.MustEncode</code>",id:"\u7ed3\u5408-gjsonmustencode",level:2}];function a(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"glog"})," \u5bf9\u65e5\u5fd7\u5206\u6790\u5de5\u5177\u975e\u5e38\u53cb\u597d\uff0c\u652f\u6301\u8f93\u51fa ",(0,t.jsx)(e.code,{children:"JSON"})," \u683c\u5f0f\u7684\u65e5\u5fd7\u5185\u5bb9\uff0c\u4ee5\u4fbf\u4e8e\u540e\u671f\u5bf9\u65e5\u5fd7\u5185\u5bb9\u8fdb\u884c\u89e3\u6790\u5206\u6790\u3002"]}),"\n",(0,t.jsxs)(e.h2,{id:"\u4f7f\u7528-mapstruct-\u53c2\u6570",children:["\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"map/struct"})," \u53c2\u6570"]}),"\n",(0,t.jsxs)(e.p,{children:["\u60f3\u8981\u652f\u6301 ",(0,t.jsx)(e.code,{children:"JSON"})," \u6570\u636e\u683c\u5f0f\u7684\u65e5\u5fd7\u8f93\u51fa\u975e\u5e38\u7b80\u5355\uff0c\u7ed9\u6253\u5370\u65b9\u6cd5\u63d0\u4f9b ",(0,t.jsx)(e.code,{children:"map"}),"/ ",(0,t.jsx)(e.code,{children:"struct"})," \u7c7b\u578b\u53c2\u6570\u5373\u53ef\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    g.Log().Debug(ctx, g.Map{"uid": 100, "name": "john"})\n    type User struct {\n        Uid  int    `json:"uid"`\n        Name string `json:"name"`\n    }\n    g.Log().Debug(ctx, User{100, "john"})\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:'2019-06-02 15:28:52.653 [DEBU] {"name":"john","uid":100}\n2019-06-02 15:28:52.653 [DEBU] {"uid":100,"name":"john"}\n'})}),"\n",(0,t.jsxs)(e.h2,{id:"\u7ed3\u5408-gjsonmustencode",children:["\u7ed3\u5408 ",(0,t.jsx)(e.code,{children:"gjson.MustEncode"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u6b64\u5916\uff0c\u4e5f\u53ef\u4ee5\u7ed3\u5408 ",(0,t.jsx)(e.code,{children:"gjson.MustEncode\u6765"})," \u5b9e\u73b0 ",(0,t.jsx)(e.code,{children:"Json"})," \u5185\u5bb9\u8f93\u51fa\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/encoding/gjson"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    type User struct {\n        Uid  int    `json:"uid"`\n        Name string `json:"name"`\n    }\n    g.Log().Debugf(ctx, `user json: %s`, gjson.MustEncode(User{100, "john"}))\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:'2022-04-25 18:09:45.029 [DEBU] user json: {"uid":100,"name":"john"}\n'})})]})}function g(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>i,x:()=>r});var t=o(96540);const s={},c=t.createContext(s);function i(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);
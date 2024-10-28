"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[14303],{556892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(474848),s=t(28453);const i={title:"\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u53d8\u91cf",sidebar_position:3},o=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u53d8\u91cf",title:"\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u53d8\u91cf",description:"\u5185\u7f6e\u53d8\u91cf",source:"@site/versioned_docs/version-1.15.x/1-\u6838\u5fc3\u7ec4\u4ef6/9-\u6a21\u677f\u5f15\u64ce/3-\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u53d8\u91cf.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6/9-\u6a21\u677f\u5f15\u64ce",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u53d8\u91cf",permalink:"/docs/1.15.x/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u53d8\u91cf",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.15.x/1-\u6838\u5fc3\u7ec4\u4ef6/9-\u6a21\u677f\u5f15\u64ce/3-\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u53d8\u91cf.md",tags:[],version:"1.15.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:3,frontMatter:{title:"\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u53d8\u91cf",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570",permalink:"/docs/1.15.x/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u51fd\u6570/\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570"},next:{title:"\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u5e03\u5c40",permalink:"/docs/1.15.x/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u5e03\u5c40"}},a={},d=[{value:"\u5185\u7f6e\u53d8\u91cf",id:"\u5185\u7f6e\u53d8\u91cf",level:2},{value:"\u53d8\u91cf\u5bf9\u8c61",id:"\u53d8\u91cf\u5bf9\u8c61",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u5185\u7f6e\u53d8\u91cf",children:"\u5185\u7f6e\u53d8\u91cf"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"WebServer"})," \u5185\u7f6e\u53d8\u91cf\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"output/goframe-v1.15-md/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E-%E6%A8%A1%E6%9D%BF%E8%A7%A3%E6%9E%90",children:"\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790"})," \u7ae0\u8282\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53d8\u91cf\u5bf9\u8c61",children:"\u53d8\u91cf\u5bf9\u8c61"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5728\u6a21\u677f\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u5bf9\u8c61\uff0c\u5e76\u53ef\u5728\u6a21\u677f\u4e2d\u8bbf\u95ee\u5bf9\u8c61\u7684\u5c5e\u6027\u53ca\u8c03\u7528\u5176\u65b9\u6cd5\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/frame/g"\n)\n\ntype T struct {\n    Name string\n}\n\nfunc (t *T) Hello(name string) string {\n    return "Hello " + name\n}\n\nfunc (t *T) Test() string {\n    return "This is test"\n}\n\nfunc main() {\n    t := &T{"John"}\n    v := g.View()\n    content := `{{.t.Hello "there"}}, my name\'s {{.t.Name}}. {{.t.Test}}.`\n    if r, err := v.ParseContent(content, g.Map{"t" : t}); err != nil {\n        g.Dump(err)\n    } else {\n        g.Dump(r)\n    }\n}\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c\u8d4b\u503c\u7ed9\u6a21\u677f\u7684\u53d8\u91cf\u65e2\u53ef\u4ee5\u662f ",(0,r.jsx)(n.code,{children:"\u5bf9\u8c61\u6307\u9488"})," \u4e5f\u53ef\u4ee5\u662f ",(0,r.jsx)(n.code,{children:"\u5bf9\u8c61\u53d8\u91cf"}),"\u3002\u4f46\u662f\u6ce8\u610f\u5b9a\u4e49\u7684\u5bf9\u8c61\u65b9\u6cd5\uff0c\u5982\u679c\u4e3a\u5bf9\u8c61\u6307\u9488\u90a3\u4e48\u53ea\u80fd\u8c03\u7528\u65b9\u6cd5\u63a5\u6536\u5668\u4e3a\u5bf9\u8c61\u6307\u9488\u7684\u65b9\u6cd5\uff1b\u5982\u679c\u4e3a\u5bf9\u8c61\u53d8\u91cf\uff0c\u90a3\u4e48\u53ea\u80fd\u8c03\u7528\u65b9\u6cd5\u63a5\u6536\u5668\u4e3a\u5bf9\u8c61\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"Hello there, my name's John. This is test.\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(296540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[8298],{49852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=t(74848),i=t(28453);const o={title:"\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570",sidebar_position:2,hide_title:!0},s=void 0,l={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u51fd\u6570/\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570",title:"\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u51fd\u6570/\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u51fd\u6570",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u51fd\u6570/\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570",permalink:"/gf-site/en/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u51fd\u6570/\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u51fd\u6570/\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:2,frontMatter:{title:"\u6a21\u677f\u51fd\u6570-\u81ea\u5b9a\u4e49\u51fd\u6570",sidebar_position:2,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u677f\u51fd\u6570-\u5185\u7f6e\u51fd\u6570",permalink:"/gf-site/en/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u51fd\u6570/\u6a21\u677f\u51fd\u6570-\u5185\u7f6e\u51fd\u6570"},next:{title:"\u6570\u636e\u5e93ORM",permalink:"/gf-site/en/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/"}},c={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,r.jsx)(n.p,{children:"\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6a21\u677f\u51fd\u6570\uff0c\u5168\u5c40\u7ed1\u5b9a\u6a21\u677f\u51fd\u6570\u5230\u6307\u5b9a\u7684\u89c6\u56fe\u5bf9\u8c61\u4e2d\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u5c06\u81ea\u5b9a\u4e49\u7684\u5bf9\u8c61\u8d4b\u503c\u7ed9\u6a21\u677f\uff0c\u968f\u540e\u901a\u8fc7\u5bf9\u8c61\u6765\u8c03\u7528\u5176\u5c01\u88c5\u7684\u65b9\u6cd5\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\n// \u7528\u4e8e\u6d4b\u8bd5\u7684\u5e26\u53c2\u6570\u7684\u5185\u7f6e\u51fd\u6570\nfunc funcHello(name string) string {\n    return fmt.Sprintf(`Hello %s`, name)\n}\n\nfunc main() {\n    // \u7ed1\u5b9a\u5168\u5c40\u7684\u6a21\u677f\u51fd\u6570\n    g.View().BindFunc("hello", funcHello)\n\n    // \u666e\u901a\u65b9\u5f0f\u4f20\u53c2\n    parsed1, err := g.View().ParseContent(context.TODO(), `{{hello "GoFrame"}}`, nil)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(string(parsed1))\n\n    // \u901a\u8fc7\u7ba1\u9053\u4f20\u53c2\n    parsed2, err := g.View().ParseContent(context.TODO(), `{{"GoFrame" | hello}}`, nil)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(string(parsed2))\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Hello GoFrame\nHello GoFrame\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
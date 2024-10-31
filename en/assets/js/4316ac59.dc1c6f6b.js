"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[94363],{56580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(74848),o=t(28453);const r={title:"\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406",sidebar_position:5,hide_title:!0},s=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406",title:"\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6a21\u677f\u5f15\u64ce\u5bf9\u6240\u6709\u7684\u53d8\u91cf\u8f93\u51fa\u5e76\u6ca1\u6709\u4f7f\u7528 HTML \u8f6c\u7801\u5904\u7406\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u5f00\u53d1\u8005\u5904\u7406\u4e0d\u597d\uff0c\u53ef\u80fd\u4f1a\u5b58\u5728XSS\u6f0f\u6d1e\u3002",source:"@site/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406",permalink:"/gf-site/en/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:5,frontMatter:{title:"\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406",sidebar_position:5,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u5e03\u5c40",permalink:"/gf-site/en/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u5e03\u5c40"},next:{title:"\u6a21\u677f\u5f15\u64ce-\u5176\u4ed6\u4f7f\u7528",permalink:"/gf-site/en/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u5176\u4ed6\u4f7f\u7528"}},d={},l=[];function a(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6a21\u677f\u5f15\u64ce\u5bf9\u6240\u6709\u7684\u53d8\u91cf\u8f93\u51fa\u5e76\u6ca1\u6709\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"HTML"})," \u8f6c\u7801\u5904\u7406\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u5f00\u53d1\u8005\u5904\u7406\u4e0d\u597d\uff0c\u53ef\u80fd\u4f1a\u5b58\u5728XSS\u6f0f\u6d1e\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0d\u7528\u62c5\u5fc3\uff0c ",(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u5f53\u7136\u5df2\u7ecf\u5145\u5206\u8003\u8651\u5230\u8fd9\u70b9\uff0c\u5e76\u4e14\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u6bd4\u8f83\u7075\u6d3b\u7684\u914d\u7f6e\u53c2\u6570\u6765\u63a7\u5236\u662f\u5426\u9ed8\u8ba4\u8f6c\u4e49\u53d8\u91cf\u8f93\u51fa\u7684 ",(0,i.jsx)(n.code,{children:"HTML"})," \u5185\u5bb9\u3002\u8be5\u7279\u6027\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"AutoEncode"})," \u914d\u7f6e\u9879\uff0c\u6216\u8005 ",(0,i.jsx)(n.code,{children:"SetAutoEncode"})," \u65b9\u6cd5\u6765\u5f00\u542f/\u5173\u95ed\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8be5\u7279\u6027\u5e76\u4e0d\u4f1a\u5f71\u54cd ",(0,i.jsx)(n.code,{children:"include"})," \u6a21\u677f\u7684\u5185\u7f6e\u51fd\u6570\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.p,{children:"1\u3001\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[viewer]\n    delimiters  =  ["${", "}"]\n    autoencode  =  true\n'})}),"\n",(0,i.jsx)(n.p,{children:"2\u3001\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    result, _ := g.View().ParseContent(context.TODO(), "\u59d3\u540d: ${.name}", g.Map{\n        "name": "<script>alert(\'john\');<\/script>",\n    })\n    fmt.Println(result)\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"3\u3001\u6267\u884c\u8f93\u51fa"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u59d3\u540d: &lt;script&gt;alert(&#39;john&#39;);&lt;/script&gt;\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
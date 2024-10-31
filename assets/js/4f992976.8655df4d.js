"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[85899],{650082:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>t});var r=s(474848),o=s(28453);const d={title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362",sidebar_position:12,hide_title:!0},c=void 0,i={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362",title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362",description:"\u6211\u4eec\u77e5\u9053\u6570\u636e\u5e93\u7684\u914d\u7f6e\u4e2d\u6709\u652f\u6301\u5bf9\u9ed8\u8ba4\u6570\u636e\u5e93\u7684\u914d\u7f6e\uff0c\u56e0\u6b64 DB \u5bf9\u8c61\u53ca Model \u5bf9\u8c61\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u5df2\u7ecf\u7ed1\u5b9a\u5230\u4e86\u7279\u5b9a\u7684\u6570\u636e\u5e93\u4e0a\u3002\u8fd0\u884c\u65f6\u5207\u6362\u6570\u636e\u5e93\u6709\u51e0\u79cd\u65b9\u6848\uff08\u5047\u5982\u6211\u4eec\u7684\u6570\u636e\u5e93\u6709 user \u7528\u6237\u6570\u636e\u5e93\u548c order \u8ba2\u5355\u6570\u636e\u5e93\uff09\uff1a",source:"@site/versioned_docs/version-2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362",permalink:"/gf-site/docs/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362.md",tags:[],version:"2.4.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:12,frontMatter:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362",sidebar_position:12,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4",permalink:"/gf-site/docs/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4"},next:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027",permalink:"/gf-site/docs/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027"}},l={},t=[];function a(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u77e5\u9053\u6570\u636e\u5e93\u7684\u914d\u7f6e\u4e2d\u6709\u652f\u6301\u5bf9\u9ed8\u8ba4\u6570\u636e\u5e93\u7684\u914d\u7f6e\uff0c\u56e0\u6b64 ",(0,r.jsx)(n.code,{children:"DB"})," \u5bf9\u8c61\u53ca ",(0,r.jsx)(n.code,{children:"Model"})," \u5bf9\u8c61\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u5df2\u7ecf\u7ed1\u5b9a\u5230\u4e86\u7279\u5b9a\u7684\u6570\u636e\u5e93\u4e0a\u3002\u8fd0\u884c\u65f6\u5207\u6362\u6570\u636e\u5e93\u6709\u51e0\u79cd\u65b9\u6848\uff08\u5047\u5982\u6211\u4eec\u7684\u6570\u636e\u5e93\u6709 ",(0,r.jsx)(n.code,{children:"user"})," \u7528\u6237\u6570\u636e\u5e93\u548c ",(0,r.jsx)(n.code,{children:"order"})," \u8ba2\u5355\u6570\u636e\u5e93\uff09\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u4e0d\u540c\u7684\u914d\u7f6e\u5206\u7ec4\u6765\u5b9e\u73b0\u3002\u8fd9\u9700\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u4e0d\u540c\u7684\u5206\u7ec4\u914d\u7f6e\uff0c\u968f\u540e\u5728\u7a0b\u5e8f\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:'g.DB("\u5206\u7ec4\u540d\u79f0")'})," \u6765\u83b7\u53d6\u7279\u5b9a\u6570\u636e\u5e93\u7684\u5355\u4f8b\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u8fd0\u884c\u65f6 ",(0,r.jsx)(n.code,{children:"DB.SetSchema"})," \u65b9\u6cd5\u5207\u6362\u5355\u4f8b\u5bf9\u8c61\u7684\u6570\u636e\u5e93\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u7531\u4e8e\u4fee\u6539\u7684\u662f\u5355\u4f8b\u5bf9\u8c61\u7684\u6570\u636e\u5e93\u914d\u7f6e\uff0c\u56e0\u6b64\u5f71\u54cd\u662f\u5168\u5c40\u7684\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'g.DB().SetSchema("user-schema")\ng.DB().SetSchema("order-schema")\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u94fe\u5f0f\u64cd\u4f5c ",(0,r.jsx)(n.code,{children:"Schema"})," \u65b9\u6cd5\u521b\u5efa ",(0,r.jsx)(n.code,{children:"Schema"})," \u6570\u636e\u5e93\u5bf9\u8c61\uff0c\u5e76\u901a\u8fc7\u8be5\u6570\u636e\u5e93\u5bf9\u8c61\u521b\u5efa\u6a21\u578b\u5bf9\u8c61\u5e76\u6267\u884c\u540e\u7eed\u94fe\u5f0f\u64cd\u4f5c\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'g.DB().Schema("user-schema").Model("user").All()\ng.DB().Schema("order-schema").Model("order").All()\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4e5f\u53ef\u4ee5\u901a\u8fc7\u94fe\u5f0f\u64cd\u4f5c ",(0,r.jsx)(n.code,{children:"Model.Schema"})," \u65b9\u6cd5\u8bbe\u7f6e\u5f53\u524d\u94fe\u5f0f\u64cd\u4f5c\u5bf9\u5e94\u7684\u6570\u636e\u5e93\uff0c\u6ca1\u6709\u8bbe\u7f6e\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u7684\u662f\u5176 ",(0,r.jsx)(n.code,{children:"DB"})," \u6216\u8005 ",(0,r.jsx)(n.code,{children:"TX"})," \u9ed8\u8ba4\u8fde\u63a5\u7684\u6570\u636e\u5e93\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'g.Model("user").Schema("user-schema").All()\ng.Model("order").Schema("order-schema").All()\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\u4e24\u79cd\u4f7f\u7528\u65b9\u5f0f\u7684\u5dee\u522b\uff0c\u524d\u4e00\u79cd\u65b9\u5f0f\u6765\u81ea\u4e8e ",(0,r.jsx)(n.code,{children:"Schema"})," \u5bf9\u8c61\u521b\u5efa ",(0,r.jsx)(n.code,{children:"Model"})," \u5bf9\u8c61\u540e\u6267\u884c\u64cd\u4f5c\uff1b\u540e\u4e00\u79cd\u65b9\u5f0f\u662f\u901a\u8fc7\u4fee\u6539\u5f53\u524d ",(0,r.jsx)(n.code,{children:"Model"})," \u5bf9\u8c61\u64cd\u4f5c\u7684\u6570\u636e\u5e93\u540d\u79f0\u8fbe\u5230\u5207\u6362\u6570\u636e\u5e93\u7684\u76ee\u7684\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6b64\u5916\uff0c\u5047\u5982\u5f53\u524d\u6570\u636e\u5e93\u64cd\u4f5c\u914d\u7f6e\u7684\u7528\u6237\u6709\u6743\u9650\uff0c\u90a3\u4e48\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u8868\u540d\u4e2d\u5e26\u6570\u636e\u5e93\u540d\u79f0\u5b9e\u73b0\u8de8\u57df\u64cd\u4f5c\uff0c\u751a\u81f3\u8de8\u57df\u5173\u8054\u67e5\u8be2\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `order`.`order` o LEFT JOIN `user`.`user` u ON (o.uid=u.id) WHERE u.id=1 LIMIT 1\ng.Model("order.order o").LeftJoin("user.user u", "o.uid=u.id").Where("u.id", 1).One()\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(296540);const o={},d=r.createContext(o);function c(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);
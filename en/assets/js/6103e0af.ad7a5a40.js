"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[92193],{382055:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var r=i(474848),t=i(28453);const d={title:"ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c",sidebar_position:0,hide_title:!0},o=void 0,s={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c",title:"ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c",description:"\u5e38\u89c4\u7684\u4e8b\u52a1\u64cd\u4f5c\u65b9\u6cd5\u4e3a Begin/Commit/Rollback\uff0c\u6bcf\u4e00\u4e2a\u65b9\u6cd5\u6307\u5b9a\u7279\u5b9a\u7684\u4e8b\u52a1\u64cd\u4f5c\u3002\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7\u6267\u884c db.Begin \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56de\u4e8b\u52a1\u7684\u64cd\u4f5c\u5bf9\u8c61\uff0c\u7c7b\u578b\u4e3a *gdb.Tx\uff0c\u901a\u8fc7\u8be5\u5bf9\u8c61\u6267\u884c\u540e\u7eed\u7684\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u5e76\u53ef\u901a\u8fc7 tx.Commit \u63d0\u4ea4\u4fee\u6539\uff0c\u6216\u8005\u901a\u8fc7 tx.Rollback \u56de\u6eda\u4fee\u6539\u3002",source:"@site/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c",permalink:"/gf-site/en/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c.md",tags:[],version:"2.1.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:0,frontMatter:{title:"ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c",sidebar_position:0,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ORM\u4e8b\u52a1\u5904\u7406",permalink:"/gf-site/en/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/"},next:{title:"ORM\u4e8b\u52a1\u5904\u7406-\u95ed\u5305\u64cd\u4f5c",permalink:"/gf-site/en/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406-\u95ed\u5305\u64cd\u4f5c"}},c={},l=[{value:"\u4e00\u3001\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c",id:"\u4e00\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c",level:2},{value:"\u4e8c\u3001\u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c",id:"\u4e8c\u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c",level:2},{value:"\u4e09\u3001\u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c",id:"\u4e09\u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c",level:2},{value:"\u56db\u3001\u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c",id:"\u56db\u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u5e38\u89c4\u7684\u4e8b\u52a1\u64cd\u4f5c\u65b9\u6cd5\u4e3a ",(0,r.jsx)(n.code,{children:"Begin/Commit/Rollback"}),"\uff0c\u6bcf\u4e00\u4e2a\u65b9\u6cd5\u6307\u5b9a\u7279\u5b9a\u7684\u4e8b\u52a1\u64cd\u4f5c\u3002\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7\u6267\u884c ",(0,r.jsx)(n.code,{children:"db.Begin"})," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56de\u4e8b\u52a1\u7684\u64cd\u4f5c\u5bf9\u8c61\uff0c\u7c7b\u578b\u4e3a ",(0,r.jsx)(n.code,{children:"*gdb.Tx"}),"\uff0c\u901a\u8fc7\u8be5\u5bf9\u8c61\u6267\u884c\u540e\u7eed\u7684\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u5e76\u53ef\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"tx.Commit"})," \u63d0\u4ea4\u4fee\u6539\uff0c\u6216\u8005\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"tx.Rollback"})," \u56de\u6eda\u4fee\u6539\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5e38\u89c1\u95ee\u9898\u6ce8\u610f\uff1a\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c\u540e\uff0c\u8bf7\u52a1\u5fc5\u5728\u4e0d\u9700\u8981\u4f7f\u7528\u8be5\u4e8b\u52a1\u5bf9\u8c61\u65f6\uff0c\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Commit"}),"/ ",(0,r.jsx)(n.code,{children:"Rollback"})," \u64cd\u4f5c\u5173\u95ed\u6389\u8be5\u4e8b\u52a1\uff0c\u5efa\u8bae\u5145\u5206\u5229\u7528\u597d ",(0,r.jsx)(n.code,{children:"defer"})," \u65b9\u6cd5\u3002\u5982\u679c\u4e8b\u52a1\u4f7f\u7528\u540e\u4e0d\u5173\u95ed\uff0c\u5728\u5e94\u7528\u4fa7\u4f1a\u5f15\u8d77 ",(0,r.jsx)(n.code,{children:"goroutine"})," \u4e0d\u65ad\u6fc0\u589e\u6cc4\u9732\uff0c\u5728\u6570\u636e\u5e93\u4fa7\u4f1a\u5f15\u8d77\u4e8b\u52a1\u7ebf\u7a0b\u6570\u91cf\u88ab\u6253\u6ee1\uff0c\u4ee5\u81f3\u4e8e\u540e\u7eed\u7684\u4e8b\u52a1\u8bf7\u6c42\u6267\u884c\u8d85\u65f6\u3002\u6b64\u5916\uff0c\u5efa\u8bae\u5c3d\u53ef\u80fd\u4f7f\u7528\u540e\u7eed\u4ecb\u7ecd\u7684 ",(0,r.jsx)(n.code,{children:"Transaction"})," \u95ed\u5305\u65b9\u6cd5\u6765\u5b89\u5168\u5b9e\u73b0\u4e8b\u52a1\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4e00\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c",children:"\u4e00\u3001\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'if tx, err := db.Begin(ctx); err == nil {\n    fmt.Println("\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c")\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e8b\u52a1\u64cd\u4f5c\u5bf9\u8c61\u53ef\u4ee5\u6267\u884c\u6240\u6709 ",(0,r.jsx)(n.code,{children:"db"})," \u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"API\u6587\u6863"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4e8c\u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c",children:"\u4e8c\u3001\u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'if tx, err := db.Begin(ctx); err == nil {\n    r, err := tx.Save("user", g.Map{\n        "id"   :  1,\n        "name" : "john",\n    })\n    if err != nil {\n        tx.Rollback()\n    }\n    fmt.Println(r)\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u4e09\u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c",children:"\u4e09\u3001\u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'if tx, err := db.Begin(ctx); err == nil {\n    r, err := tx.Save("user", g.Map{\n        "id"   :  1,\n        "name" : "john",\n    })\n    if err == nil {\n       tx.Commit()\n    }\n    fmt.Println(r)\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u56db\u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c",children:"\u56db\u3001\u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e8b\u52a1\u64cd\u4f5c\u5bf9\u8c61\u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"tx.Model"})," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u7684\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u4e0e ",(0,r.jsx)(n.code,{children:"db.Model"})," \u65b9\u6cd5\u8fd4\u56de\u503c\u76f8\u540c\uff0c\u53ea\u4e0d\u8fc7\u6570\u636e\u5e93\u64cd\u4f5c\u5728\u4e8b\u52a1\u4e0a\u6267\u884c\uff0c\u53ef\u63d0\u4ea4\u6216\u56de\u6eda\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'if tx, err := db.Begin(); err == nil {\n    r, err := tx.Model("user").Data(g.Map{"id":1, "name": "john_1"}).Save()\n    if err == nil {\n       tx.Commit()\n    }\n    fmt.Println(r)\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4ed6\u94fe\u5f0f\u64cd\u4f5c\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/gf-site/en/docs/2.1.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%87%8D%E7%82%B9/",children:"ORM\u94fe\u5f0f\u64cd\u4f5c(\u91cd\u70b9)"})," \u7ae0\u8282\u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var r=i(296540);const t={},d=r.createContext(t);function o(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);
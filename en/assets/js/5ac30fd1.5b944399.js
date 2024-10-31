"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[75416],{890021:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>t});var s=d(474848),c=d(28453);const i={title:"\u6570\u636e\u5e93ORM",sidebar_position:11,hide_title:!0},r=void 0,l={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/\u6570\u636e\u5e93ORM",title:"\u6570\u636e\u5e93ORM",description:"\u9a71\u52a8\u5f15\u5165",source:"@site/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/\u6570\u636e\u5e93ORM.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/",permalink:"/gf-site/en/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/\u6570\u636e\u5e93ORM.md",tags:[],version:"2.1.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:11,frontMatter:{title:"\u6570\u636e\u5e93ORM",sidebar_position:11,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u94fe\u8def\u8ddf\u8e2a-TraceID\u6ce8\u5165\u548c\u83b7\u53d6",permalink:"/gf-site/en/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-\u6700\u4f73\u5b9e\u8df5/\u94fe\u8def\u8ddf\u8e2a-TraceID\u6ce8\u5165\u548c\u83b7\u53d6"},next:{title:"ORM\u4f7f\u7528\u914d\u7f6e",permalink:"/gf-site/en/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e"}},o={},t=[{value:"\u9a71\u52a8\u5f15\u5165",id:"\u9a71\u52a8\u5f15\u5165",level:2},{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u7ec4\u4ef6\u7279\u6027",id:"\u7ec4\u4ef6\u7279\u6027",level:2},{value:"\u77e5\u8bc6\u56fe\u8c31",id:"\u77e5\u8bc6\u56fe\u8c31",level:2},{value:"\u7ec4\u4ef6\u5173\u8054",id:"\u7ec4\u4ef6\u5173\u8054",level:2},{value:"<code>g.DB</code> \u4e0e <code>gdb.New</code>\u3001 <code>gdb.Instance</code>",id:"gdb-\u4e0e-gdbnew-gdbinstance",level:2},{value:"<code>New</code> \u521b\u5efa\u6570\u636e\u5e93\u5bf9\u8c61",id:"new-\u521b\u5efa\u6570\u636e\u5e93\u5bf9\u8c61",level:3},{value:"\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u5355\u4f8b",id:"\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u5355\u4f8b",level:3},{value:"\u5185\u7f6e\u652f\u6301\u7684\u6570\u636e\u5e93\u7c7b\u578b",id:"\u5185\u7f6e\u652f\u6301\u7684\u6570\u636e\u5e93\u7c7b\u578b",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u9a71\u52a8\u5f15\u5165",children:"\u9a71\u52a8\u5f15\u5165"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u5c06\u6570\u636e\u5e93\u9a71\u52a8\u4e0e\u6846\u67b6\u4e3b\u5e93\u89e3\u8026\uff0c\u4ece ",(0,s.jsx)(n.code,{children:"v2.1"})," \u7248\u672c\u5f00\u59cb\uff0c\u6240\u6709\u7684\u6570\u636e\u5e93\u9a71\u52a8\u90fd\u9700\u8981\u624b\u52a8\u5f15\u5165\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6570\u636e\u5e93\u9a71\u52a8\u7684\u5b89\u88c5\u548c\u5f15\u5165\u8bf7\u53c2\u8003\uff1a ",(0,s.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/drivers",children:"https://github.com/gogf/gf/tree/master/contrib/drivers"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u7684 ",(0,s.jsx)(n.code,{children:"ORM"})," \u529f\u80fd\u7531 ",(0,s.jsx)(n.code,{children:"gdb"})," \u6a21\u5757\u5b9e\u73b0\uff0c\u7528\u4e8e\u5e38\u7528\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684 ",(0,s.jsx)(n.code,{children:"ORM"})," \u64cd\u4f5c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gdb"})," \u6570\u636e\u5e93\u5f15\u64ce\u5e95\u5c42\u91c7\u7528\u4e86 ",(0,s.jsx)(n.strong,{children:"\u94fe\u63a5\u6c60\u8bbe\u8ba1"}),"\uff0c\u5f53\u94fe\u63a5\u4e0d\u518d\u4f7f\u7528\u65f6\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u56e0\u6b64\u94fe\u63a5\u5bf9\u8c61\u4e0d\u7528\u7684\u65f6\u5019\u4e0d\u9700\u8981\u663e\u5f0f\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Close"})," \u65b9\u6cd5\u5173\u95ed\u6570\u636e\u5e93\u8fde\u63a5\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u4e3a\u63d0\u9ad8\u6570\u636e\u5e93\u64cd\u4f5c\u5b89\u5168\u6027\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"ORM"})," \u64cd\u4f5c\u4e2d\u4e0d\u5efa\u8bae\u76f4\u63a5\u5c06\u53c2\u6570\u62fc\u63a5\u6210 ",(0,s.jsx)(n.code,{children:"SQL"})," \u5b57\u7b26\u4e32\u6267\u884c\uff0c\u5efa\u8bae\u4f7f\u7528\u9884\u5904\u7406\u7684\u65b9\u5f0f\uff08\u5145\u5206\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"?"})," \u5360\u4f4d\u7b26\uff09\u6765\u4f20\u9012 ",(0,s.jsx)(n.code,{children:"SQL"})," \u53c2\u6570\u3002 ",(0,s.jsx)(n.code,{children:"gdb"})," \u7684\u5e95\u5c42\u5b9e\u73b0\u4e2d\u5747\u91c7\u7528\u7684\u662f\u9884\u5904\u7406\u7684\u65b9\u5f0f\u5904\u7406\u5f00\u53d1\u8005\u4f20\u9012\u7684\u53c2\u6570\uff0c\u4ee5\u5145\u5206\u4fdd\u8bc1\u6570\u636e\u5e93\u64cd\u4f5c\u5b89\u5168\u6027\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863\uff1a"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7ec4\u4ef6\u7279\u6027",children:"\u7ec4\u4ef6\u7279\u6027"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GoFrame ORM"})," \u7ec4\u4ef6\u5177\u6709\u4ee5\u4e0b\u663e\u8457\u7279\u70b9\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5168\u81ea\u52a8\u5316\u652f\u6301\u5d4c\u5957\u4e8b\u52a1\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u9762\u5411\u63a5\u53e3\u5316\u8bbe\u8ba1\u3001\u6613\u4f7f\u7528\u6613\u6269\u5c55\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u7f6e\u652f\u6301\u4e3b\u6d41\u6570\u636e\u5e93\u7c7b\u578b\u9a71\u52a8\uff0c\u5e76\u6613\u4e8e\u6269\u5c55\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5f3a\u5927\u7684\u914d\u7f6e\u7ba1\u7406\uff0c\u4f7f\u7528\u6846\u67b6\u7edf\u4e00\u7684\u914d\u7f6e\u7ec4\u4ef6\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u5355\u4f8b\u6a21\u5f0f\u83b7\u53d6\u914d\u7f6e\u540c\u4e00\u5206\u7ec4\u6570\u636e\u5e93\u5bf9\u8c61\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u539f\u751fSQL\u65b9\u6cd5\u64cd\u4f5c\u3001ORM\u94fe\u5f0f\u64cd\u4f5c\u4e24\u79cd\u65b9\u5f0f\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u652f\u6301 ",(0,s.jsx)(n.code,{children:"OpenTelemetry"})," \u53ef\u89c2\u6d4b\u6027\uff1a\u94fe\u8def\u8ddf\u8e2a\u3001\u65e5\u5fd7\u8bb0\u5f55\u3001\u6307\u6807\u4e0a\u62a5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"Scan"})," \u65b9\u6cd5\u81ea\u52a8\u8bc6\u522b ",(0,s.jsx)(n.code,{children:"Map/Struct"})," \u63a5\u6536\u67e5\u8be2\u7ed3\u679c\uff0c\u81ea\u52a8\u5316\u67e5\u8be2\u7ed3\u679c\u521d\u59cb\u5316\u3001\u7ed3\u6784\u4f53\u7c7b\u578b\u8f6c\u6362\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u901a\u8fc7\u8fd4\u56de\u7ed3\u679c ",(0,s.jsx)(n.code,{children:"nil"})," \u8bc6\u522b\u4e3a\u7a7a\uff0c\u65e0\u9700 ",(0,s.jsx)(n.code,{children:"sql.ErrNoRows"})," \u8bc6\u522b\u67e5\u8be2\u6570\u636e\u4e3a\u7a7a\u7684\u60c5\u51b5\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5168\u81ea\u52a8\u5316\u7684\u7ed3\u6784\u4f53\u5c5e\u6027-\u5b57\u6bb5\u6620\u5c04\uff0c\u65e0\u9700\u663e\u793a\u5b9a\u4e49\u7ed3\u6784\u4f53\u6807\u7b7e\u7ef4\u62a4\u5c5e\u6027-\u5b57\u6bb5\u6620\u5c04\u5173\u7cfb\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u81ea\u52a8\u5316\u7684\u7ed9\u5b9a ",(0,s.jsx)(n.code,{children:"Map/Struct/Slice"})," \u53c2\u6570\u7c7b\u578b\u4e2d\u7684\u5b57\u6bb5\u8bc6\u522b\u3001\u8fc7\u6ee4\uff0c\u5927\u5927\u63d0\u9ad8\u67e5\u8be2\u6761\u4ef6\u8f93\u5165\u3001\u7ed3\u679c\u63a5\u6536\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5b8c\u7f8e\u652f\u6301 ",(0,s.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u5c42\u9762\u7684 ",(0,s.jsx)(n.code,{children:"DAO"})," \u8bbe\u8ba1\uff0c\u5168\u81ea\u52a8\u5316 ",(0,s.jsx)(n.code,{children:"Model/DAO"})," \u4ee3\u7801\u751f\u6210\uff0c\u6781\u5927\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u652f\u6301\u8c03\u8bd5\u6a21\u5f0f\u3001\u65e5\u5fd7\u8f93\u51fa\u3001 ",(0,s.jsx)(n.code,{children:"DryRun"}),"\u3001\u81ea\u5b9a\u4e49 ",(0,s.jsx)(n.code,{children:"Handler"}),"\u3001\u81ea\u52a8\u7c7b\u578b\u7c7b\u578b\u8f6c\u6362\u3001\u81ea\u5b9a\u4e49\u63a5\u53e3\u8f6c\u6362\u7b49\u7b49\u9ad8\u7ea7\u7279\u6027\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u67e5\u8be2\u7f13\u5b58\u3001\u8f6f\u5220\u9664\u3001\u81ea\u52a8\u5316\u65f6\u95f4\u66f4\u65b0\u3001\u6a21\u578b\u5173\u8054\u3001\u6570\u636e\u5e93\u96c6\u7fa4\u914d\u7f6e\uff08\u8f6f\u4ef6\u4e3b\u4ece\u6a21\u5f0f\uff09\u7b49\u7b49\u5b9e\u7528\u7279\u6027\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u77e5\u8bc6\u56fe\u8c31",children:"\u77e5\u8bc6\u56fe\u8c31"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d(749953).A+"",width:"2586",height:"2294"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GoFrame ORM Features"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7ec4\u4ef6\u5173\u8054",children:"\u7ec4\u4ef6\u5173\u8054"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d(822754).A+"",width:"2310",height:"940"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GoFrame ORM Dependencies"})}),"\n",(0,s.jsxs)(n.h2,{id:"gdb-\u4e0e-gdbnew-gdbinstance",children:[(0,s.jsx)(n.code,{children:"g.DB"})," \u4e0e ",(0,s.jsx)(n.code,{children:"gdb.New"}),"\u3001 ",(0,s.jsx)(n.code,{children:"gdb.Instance"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u83b7\u53d6\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\u6709\u4e09\u79cd\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"g.DB"})," \u65b9\u6cd5\uff08\u63a8\u8350\uff09\uff0c\u4e00\u79cd\u662f\u4f7f\u7528\u539f\u751f ",(0,s.jsx)(n.code,{children:"gdb.New"})," \u65b9\u6cd5\uff0c\u8fd8\u6709\u4e00\u79cd\u662f\u4f7f\u7528\u5305\u539f\u751f\u5355\u4f8b\u65b9\u6cd5 ",(0,s.jsx)(n.code,{children:"gdb.Instance"}),"\uff0c\u800c\u7b2c\u4e00\u79cd\u662f\u63a8\u8350\u7684\u4f7f\u7528\u65b9\u5f0f\u3002\u8fd9\u4e09\u79cd\u65b9\u5f0f\u7684\u533a\u522b\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"g.DB"})," \u5bf9\u8c61\u7ba1\u7406\u65b9\u5f0f\u83b7\u53d6\u7684\u662f\u5355\u4f8b\u5bf9\u8c61\uff0c\u6574\u5408\u4e86\u914d\u7f6e\u6587\u4ef6\u7684\u7ba1\u7406\u529f\u80fd\uff0c\u652f\u6301\u914d\u7f6e\u6587\u4ef6\u70ed\u66f4\u65b0\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gdb.New"})," \u662f\u6839\u636e\u7ed9\u5b9a\u7684\u6570\u636e\u5e93\u8282\u70b9\u914d\u7f6e\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u5e93\u5bf9\u8c61(\u975e\u5355\u4f8b)\uff0c\u65e0\u6cd5\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gdb.Instance"})," \u662f\u5305\u539f\u751f\u5355\u4f8b\u7ba1\u7406\u65b9\u6cd5\uff0c\u9700\u8981\u7ed3\u5408\u914d\u7f6e\u65b9\u6cd5\u4e00\u8d77\u4f7f\u7528\uff0c\u901a\u8fc7\u5206\u7ec4\u540d\u79f0(\u975e\u5fc5\u9700)\u83b7\u53d6\u5bf9\u5e94\u914d\u7f6e\u7684\u6570\u636e\u5e93\u5355\u4f8b\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u8fd9\u4e48\u591a\u5bf9\u8c61\u83b7\u53d6\u65b9\u5f0f\u539f\u56e0\u5728\u4e8e ",(0,s.jsx)(n.code,{children:"GoFrame"})," \u662f\u4e00\u4e2a\u6a21\u5757\u5316\u8bbe\u8ba1\u7684\u6846\u67b6\uff0c\u6bcf\u4e2a\u6a21\u5757\u7686\u53ef\u5355\u72ec\u4f7f\u7528\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"new-\u521b\u5efa\u6570\u636e\u5e93\u5bf9\u8c61",children:[(0,s.jsx)(n.code,{children:"New"})," \u521b\u5efa\u6570\u636e\u5e93\u5bf9\u8c61"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'db, err := gdb.New(gdb.ConfigNode{\n    Link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test",\n})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u5355\u4f8b",children:"\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u5355\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// \u83b7\u53d6\u9ed8\u8ba4\u914d\u7f6e\u7684\u6570\u636e\u5e93\u5bf9\u8c61(\u914d\u7f6e\u540d\u79f0\u4e3a"default")\ndb := g.DB()\n\n// \u83b7\u53d6\u914d\u7f6e\u5206\u7ec4\u540d\u79f0\u4e3a"user"\u7684\u6570\u636e\u5e93\u5bf9\u8c61\ndb := g.DB("user")\n\n// \u4f7f\u7528\u539f\u751f\u5355\u4f8b\u7ba1\u7406\u65b9\u6cd5\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u5355\u4f8b\ndb, err := gdb.Instance()\ndb, err := gdb.Instance("user")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u5185\u7f6e\u652f\u6301\u7684\u6570\u636e\u5e93\u7c7b\u578b",children:"\u5185\u7f6e\u652f\u6301\u7684\u6570\u636e\u5e93\u7c7b\u578b"}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,s.jsx)(n.code,{children:"go"})," \u6807\u51c6\u5e93\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\u91c7\u7528\u63a5\u53e3\u5b9e\u73b0\uff0c\u56e0\u6b64\u63d0\u4f9b\u4e86\u975e\u5e38\u597d\u7684\u53ef\u6269\u5c55\u6027\u548c\u517c\u5bb9\u6027\u3002\u6846\u67b6\u5df2\u652f\u6301\u7684\u7b2c\u4e09\u65b9\u6570\u636e\u5e93\u9a71\u52a8\u8bf7\u53c2\u8003\uff1a ",(0,s.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/drivers",children:"https://github.com/gogf/gf/tree/master/contrib/drivers"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u989d\u5916\u63a5\u5165\u65b0\u7684\u6570\u636e\u5e93\u76f8\u5f53\u65b9\u4fbf\uff0c\u53ef\u53c2\u8003\u6e90\u7801\u4e2d\u5173\u4e8e ",(0,s.jsx)(n.code,{children:"PostgreSQL"}),"\u3001 ",(0,s.jsx)(n.code,{children:"SQLite"}),"\u3001 ",(0,s.jsx)(n.code,{children:"Oracle"}),"\u3001 ",(0,s.jsx)(n.code,{children:"SQL Server"})," \u7684\u63a5\u5165\u65b9\u5f0f\u3002\u5177\u4f53\u4ecb\u7ecd\u8bf7\u53c2\u8003\u540e\u7eed ",(0,s.jsx)(n.a,{href:"/gf-site/en/docs/2.1.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%8E%A5%E5%8F%A3%E5%BC%80%E5%8F%91/ORM%E6%8E%A5%E5%8F%A3%E5%BC%80%E5%8F%91-%E9%A9%B1%E5%8A%A8%E5%BC%80%E5%8F%91",children:"ORM\u63a5\u53e3\u5f00\u53d1-\u9a71\u52a8\u5f00\u53d1"})," \u7ae0\u8282\u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},822754:(e,n,d)=>{d.d(n,{A:()=>s});const s=d.p+"assets/images/77c8ab7a19fd8792886e0238269026d2-5d61b04fbaf4be85bc886c8cbf8dc51a.png"},749953:(e,n,d)=>{d.d(n,{A:()=>s});const s=d.p+"assets/images/a7884494e73c87838ca36cb9d57ec433-812742ced256295346b6355c1c503e5a.png"},28453:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>l});var s=d(296540);const c={},i=s.createContext(c);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
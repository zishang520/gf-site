"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[67545],{988748:(E,B,e)=>{e.r(B),e.d(B,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var A=e(474848),n=e(28453);const r={title:"\u6570\u636e\u5e93ORM",sidebar_position:10},d=void 0,i={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/\u6570\u636e\u5e93ORM",title:"\u6570\u636e\u5e93ORM",description:"\u9a71\u52a8\u5f15\u5165",source:"@site/versioned_docs/version-2.6.x/2-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/10-\u6570\u636e\u5e93ORM.md",sourceDirName:"2-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/",permalink:"/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/2-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/10-\u6570\u636e\u5e93ORM.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:10,frontMatter:{title:"\u6570\u636e\u5e93ORM",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u677f\u5f15\u64ce-\u5176\u4ed6\u4f7f\u7528",permalink:"/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u5176\u4ed6\u4f7f\u7528"},next:{title:"ORM\u4f7f\u7528\u914d\u7f6e",permalink:"/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e"}},l={},s=[{value:"\u9a71\u52a8\u5f15\u5165",id:"\u9a71\u52a8\u5f15\u5165",level:2},{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u7ec4\u4ef6\u7279\u6027",id:"\u7ec4\u4ef6\u7279\u6027",level:2},{value:"\u77e5\u8bc6\u56fe\u8c31",id:"\u77e5\u8bc6\u56fe\u8c31",level:2},{value:"\u7ec4\u4ef6\u5173\u8054",id:"\u7ec4\u4ef6\u5173\u8054",level:2},{value:"<code>g.DB</code> \u4e0e <code>gdb.New</code>\u3001 <code>gdb.Instance</code>",id:"gdb-\u4e0e-gdbnew-gdbinstance",level:2},{value:"<code>New</code> \u521b\u5efa\u6570\u636e\u5e93\u5bf9\u8c61",id:"new-\u521b\u5efa\u6570\u636e\u5e93\u5bf9\u8c61",level:3},{value:"\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u5355\u4f8b",id:"\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u5355\u4f8b",level:3},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function c(E){const B={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...E.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(B.h2,{id:"\u9a71\u52a8\u5f15\u5165",children:"\u9a71\u52a8\u5f15\u5165"}),"\n",(0,A.jsxs)(B.p,{children:["\u4e3a\u4e86\u5c06\u6570\u636e\u5e93\u9a71\u52a8\u4e0e\u6846\u67b6\u4e3b\u5e93\u89e3\u8026\uff0c\u4ece ",(0,A.jsx)(B.code,{children:"v2.1"})," \u7248\u672c\u5f00\u59cb\uff0c\u6240\u6709\u7684\u6570\u636e\u5e93\u9a71\u52a8\u90fd\u9700\u8981\u901a\u8fc7\u793e\u533a\u5305\u624b\u52a8\u5f15\u5165\u3002"]}),"\n",(0,A.jsxs)(B.p,{children:["\u6570\u636e\u5e93\u9a71\u52a8\u7684\u5b89\u88c5\u548c\u5f15\u5165\u8bf7\u53c2\u8003\uff1a ",(0,A.jsx)(B.a,{href:"https://github.com/gogf/gf/tree/master/contrib/drivers",children:"https://github.com/gogf/gf/tree/master/contrib/drivers"})]}),"\n",(0,A.jsx)(B.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,A.jsxs)(B.p,{children:[(0,A.jsx)(B.code,{children:"GoFrame"})," \u6846\u67b6\u7684 ",(0,A.jsx)(B.code,{children:"ORM"})," \u529f\u80fd\u7531 ",(0,A.jsx)(B.code,{children:"gdb"})," \u6a21\u5757\u5b9e\u73b0\uff0c\u7528\u4e8e\u5e38\u7528\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684 ",(0,A.jsx)(B.code,{children:"ORM"})," \u64cd\u4f5c\u3002"]}),"\n",(0,A.jsxs)(B.p,{children:[(0,A.jsx)(B.code,{children:"gdb"})," \u6570\u636e\u5e93\u5f15\u64ce\u5e95\u5c42\u91c7\u7528\u4e86 ",(0,A.jsx)(B.strong,{children:"\u94fe\u63a5\u6c60\u8bbe\u8ba1"}),"\uff0c\u5f53\u94fe\u63a5\u4e0d\u518d\u4f7f\u7528\u65f6\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u56e0\u6b64\u94fe\u63a5\u5bf9\u8c61\u4e0d\u7528\u7684\u65f6\u5019\u4e0d\u9700\u8981\u663e\u5f0f\u4f7f\u7528 ",(0,A.jsx)(B.code,{children:"Close"})," \u65b9\u6cd5\u5173\u95ed\u6570\u636e\u5e93\u8fde\u63a5\u3002"]}),"\n",(0,A.jsxs)(B.p,{children:["\u6ce8\u610f\uff1a\u4e3a\u63d0\u9ad8\u6570\u636e\u5e93\u64cd\u4f5c\u5b89\u5168\u6027\uff0c\u5728 ",(0,A.jsx)(B.code,{children:"ORM"})," \u64cd\u4f5c\u4e2d\u4e0d\u5efa\u8bae\u76f4\u63a5\u5c06\u53c2\u6570\u62fc\u63a5\u6210 ",(0,A.jsx)(B.code,{children:"SQL"})," \u5b57\u7b26\u4e32\u6267\u884c\uff0c\u5efa\u8bae\u4f7f\u7528\u9884\u5904\u7406\u7684\u65b9\u5f0f\uff08\u5145\u5206\u4f7f\u7528 ",(0,A.jsx)(B.code,{children:"?"})," \u5360\u4f4d\u7b26\uff09\u6765\u4f20\u9012 ",(0,A.jsx)(B.code,{children:"SQL"})," \u53c2\u6570\u3002 ",(0,A.jsx)(B.code,{children:"gdb"})," \u7684\u5e95\u5c42\u5b9e\u73b0\u4e2d\u5747\u91c7\u7528\u7684\u662f\u9884\u5904\u7406\u7684\u65b9\u5f0f\u5904\u7406\u5f00\u53d1\u8005\u4f20\u9012\u7684\u53c2\u6570\uff0c\u4ee5\u5145\u5206\u4fdd\u8bc1\u6570\u636e\u5e93\u64cd\u4f5c\u5b89\u5168\u6027\u3002"]}),"\n",(0,A.jsx)(B.p,{children:(0,A.jsx)(B.strong,{children:"\u63a5\u53e3\u6587\u6863\uff1a"})}),"\n",(0,A.jsx)(B.p,{children:(0,A.jsx)(B.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})}),"\n",(0,A.jsx)(B.h2,{id:"\u7ec4\u4ef6\u7279\u6027",children:"\u7ec4\u4ef6\u7279\u6027"}),"\n",(0,A.jsxs)(B.p,{children:[(0,A.jsx)(B.code,{children:"GoFrame ORM"})," \u7ec4\u4ef6\u5177\u6709\u4ee5\u4e0b\u663e\u8457\u7279\u70b9\uff1a"]}),"\n",(0,A.jsxs)(B.ol,{children:["\n",(0,A.jsx)(B.li,{children:"\u5168\u81ea\u52a8\u5316\u652f\u6301\u5d4c\u5957\u4e8b\u52a1\u3002"}),"\n",(0,A.jsx)(B.li,{children:"\u9762\u5411\u63a5\u53e3\u5316\u8bbe\u8ba1\u3001\u6613\u4f7f\u7528\u6613\u6269\u5c55\u3002"}),"\n",(0,A.jsx)(B.li,{children:"\u5185\u7f6e\u652f\u6301\u4e3b\u6d41\u6570\u636e\u5e93\u7c7b\u578b\u9a71\u52a8\uff0c\u5e76\u6613\u4e8e\u6269\u5c55\u3002"}),"\n",(0,A.jsx)(B.li,{children:"\u5f3a\u5927\u7684\u914d\u7f6e\u7ba1\u7406\uff0c\u4f7f\u7528\u6846\u67b6\u7edf\u4e00\u7684\u914d\u7f6e\u7ec4\u4ef6\u3002"}),"\n",(0,A.jsx)(B.li,{children:"\u652f\u6301\u5355\u4f8b\u6a21\u5f0f\u83b7\u53d6\u914d\u7f6e\u540c\u4e00\u5206\u7ec4\u6570\u636e\u5e93\u5bf9\u8c61\u3002"}),"\n",(0,A.jsx)(B.li,{children:"\u652f\u6301\u539f\u751fSQL\u65b9\u6cd5\u64cd\u4f5c\u3001ORM\u94fe\u5f0f\u64cd\u4f5c\u4e24\u79cd\u65b9\u5f0f\u3002"}),"\n",(0,A.jsxs)(B.li,{children:["\u652f\u6301 ",(0,A.jsx)(B.code,{children:"OpenTelemetry"})," \u53ef\u89c2\u6d4b\u6027\uff1a\u94fe\u8def\u8ddf\u8e2a\u3001\u65e5\u5fd7\u8bb0\u5f55\u3001\u6307\u6807\u4e0a\u62a5\u3002"]}),"\n",(0,A.jsxs)(B.li,{children:["\u901a\u8fc7 ",(0,A.jsx)(B.code,{children:"Scan"})," \u65b9\u6cd5\u81ea\u52a8\u8bc6\u522b ",(0,A.jsx)(B.code,{children:"Map/Struct"})," \u63a5\u6536\u67e5\u8be2\u7ed3\u679c\uff0c\u81ea\u52a8\u5316\u67e5\u8be2\u7ed3\u679c\u521d\u59cb\u5316\u3001\u7ed3\u6784\u4f53\u7c7b\u578b\u8f6c\u6362\u3002"]}),"\n",(0,A.jsxs)(B.li,{children:["\u901a\u8fc7\u8fd4\u56de\u7ed3\u679c ",(0,A.jsx)(B.code,{children:"nil"})," \u8bc6\u522b\u4e3a\u7a7a\uff0c\u65e0\u9700 ",(0,A.jsx)(B.code,{children:"sql.ErrNoRows"})," \u8bc6\u522b\u67e5\u8be2\u6570\u636e\u4e3a\u7a7a\u7684\u60c5\u51b5\u3002"]}),"\n",(0,A.jsx)(B.li,{children:"\u5168\u81ea\u52a8\u5316\u7684\u7ed3\u6784\u4f53\u5c5e\u6027-\u5b57\u6bb5\u6620\u5c04\uff0c\u65e0\u9700\u663e\u793a\u5b9a\u4e49\u7ed3\u6784\u4f53\u6807\u7b7e\u7ef4\u62a4\u5c5e\u6027-\u5b57\u6bb5\u6620\u5c04\u5173\u7cfb\u3002"}),"\n",(0,A.jsxs)(B.li,{children:["\u81ea\u52a8\u5316\u7684\u7ed9\u5b9a ",(0,A.jsx)(B.code,{children:"Map/Struct/Slice"})," \u53c2\u6570\u7c7b\u578b\u4e2d\u7684\u5b57\u6bb5\u8bc6\u522b\u3001\u8fc7\u6ee4\uff0c\u5927\u5927\u63d0\u9ad8\u67e5\u8be2\u6761\u4ef6\u8f93\u5165\u3001\u7ed3\u679c\u63a5\u6536\u3002"]}),"\n",(0,A.jsxs)(B.li,{children:["\u5b8c\u7f8e\u652f\u6301 ",(0,A.jsx)(B.code,{children:"GoFrame"})," \u6846\u67b6\u5c42\u9762\u7684 ",(0,A.jsx)(B.code,{children:"DAO"})," \u8bbe\u8ba1\uff0c\u5168\u81ea\u52a8\u5316 ",(0,A.jsx)(B.code,{children:"Model/DAO"})," \u4ee3\u7801\u751f\u6210\uff0c\u6781\u5927\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002"]}),"\n",(0,A.jsxs)(B.li,{children:["\u652f\u6301\u8c03\u8bd5\u6a21\u5f0f\u3001\u65e5\u5fd7\u8f93\u51fa\u3001 ",(0,A.jsx)(B.code,{children:"DryRun"}),"\u3001\u81ea\u5b9a\u4e49 ",(0,A.jsx)(B.code,{children:"Handler"}),"\u3001\u81ea\u52a8\u7c7b\u578b\u7c7b\u578b\u8f6c\u6362\u3001\u81ea\u5b9a\u4e49\u63a5\u53e3\u8f6c\u6362\u7b49\u7b49\u9ad8\u7ea7\u7279\u6027\u3002"]}),"\n",(0,A.jsx)(B.li,{children:"\u652f\u6301\u67e5\u8be2\u7f13\u5b58\u3001\u8f6f\u5220\u9664\u3001\u81ea\u52a8\u5316\u65f6\u95f4\u66f4\u65b0\u3001\u6a21\u578b\u5173\u8054\u3001\u6570\u636e\u5e93\u96c6\u7fa4\u914d\u7f6e\uff08\u8f6f\u4ef6\u4e3b\u4ece\u6a21\u5f0f\uff09\u7b49\u7b49\u5b9e\u7528\u7279\u6027\u3002"}),"\n"]}),"\n",(0,A.jsx)(B.h2,{id:"\u77e5\u8bc6\u56fe\u8c31",children:"\u77e5\u8bc6\u56fe\u8c31"}),"\n",(0,A.jsx)(B.p,{children:(0,A.jsx)(B.img,{src:e(640253).A+"",width:"2586",height:"2294"})}),"\n",(0,A.jsx)(B.p,{children:(0,A.jsx)(B.code,{children:"GoFrame ORM Features"})}),"\n",(0,A.jsx)(B.h2,{id:"\u7ec4\u4ef6\u5173\u8054",children:"\u7ec4\u4ef6\u5173\u8054"}),"\n",(0,A.jsx)(B.p,{children:(0,A.jsx)(B.img,{src:e(676901).A+"",width:"2310",height:"940"})}),"\n",(0,A.jsx)(B.p,{children:(0,A.jsx)(B.code,{children:"GoFrame ORM Dependencies"})}),"\n",(0,A.jsxs)(B.h2,{id:"gdb-\u4e0e-gdbnew-gdbinstance",children:[(0,A.jsx)(B.code,{children:"g.DB"})," \u4e0e ",(0,A.jsx)(B.code,{children:"gdb.New"}),"\u3001 ",(0,A.jsx)(B.code,{children:"gdb.Instance"})]}),"\n",(0,A.jsxs)(B.p,{children:["\u83b7\u53d6\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\u6709\u4e09\u79cd\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f\u4f7f\u7528 ",(0,A.jsx)(B.code,{children:"g.DB"})," \u65b9\u6cd5\uff08\u63a8\u8350\uff09\uff0c\u4e00\u79cd\u662f\u4f7f\u7528\u539f\u751f ",(0,A.jsx)(B.code,{children:"gdb.New"})," \u65b9\u6cd5\uff0c\u8fd8\u6709\u4e00\u79cd\u662f\u4f7f\u7528\u5305\u539f\u751f\u5355\u4f8b\u65b9\u6cd5 ",(0,A.jsx)(B.code,{children:"gdb.Instance"}),"\uff0c\u800c\u7b2c\u4e00\u79cd\u662f\u63a8\u8350\u7684\u4f7f\u7528\u65b9\u5f0f\u3002\u8fd9\u4e09\u79cd\u65b9\u5f0f\u7684\u533a\u522b\u5982\u4e0b\uff1a"]}),"\n",(0,A.jsxs)(B.ol,{children:["\n",(0,A.jsxs)(B.li,{children:[(0,A.jsx)(B.code,{children:"g.DB"})," \u5bf9\u8c61\u7ba1\u7406\u65b9\u5f0f\u83b7\u53d6\u7684\u662f\u5355\u4f8b\u5bf9\u8c61\uff0c\u6574\u5408\u4e86\u914d\u7f6e\u6587\u4ef6\u7684\u7ba1\u7406\u529f\u80fd\uff0c\u652f\u6301\u914d\u7f6e\u6587\u4ef6\u70ed\u66f4\u65b0\u3002"]}),"\n",(0,A.jsxs)(B.li,{children:[(0,A.jsx)(B.code,{children:"gdb.New"})," \u662f\u6839\u636e\u7ed9\u5b9a\u7684\u6570\u636e\u5e93\u8282\u70b9\u914d\u7f6e\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u5e93\u5bf9\u8c61(\u975e\u5355\u4f8b)\uff0c\u65e0\u6cd5\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n",(0,A.jsxs)(B.li,{children:[(0,A.jsx)(B.code,{children:"gdb.Instance"})," \u662f\u5305\u539f\u751f\u5355\u4f8b\u7ba1\u7406\u65b9\u6cd5\uff0c\u9700\u8981\u7ed3\u5408\u914d\u7f6e\u65b9\u6cd5\u4e00\u8d77\u4f7f\u7528\uff0c\u901a\u8fc7\u5206\u7ec4\u540d\u79f0(\u975e\u5fc5\u9700)\u83b7\u53d6\u5bf9\u5e94\u914d\u7f6e\u7684\u6570\u636e\u5e93\u5355\u4f8b\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,A.jsxs)(B.p,{children:["\u6709\u8fd9\u4e48\u591a\u5bf9\u8c61\u83b7\u53d6\u65b9\u5f0f\u539f\u56e0\u5728\u4e8e ",(0,A.jsx)(B.code,{children:"GoFrame"})," \u662f\u4e00\u4e2a\u6a21\u5757\u5316\u8bbe\u8ba1\u7684\u6846\u67b6\uff0c\u6bcf\u4e2a\u6a21\u5757\u7686\u53ef\u5355\u72ec\u4f7f\u7528\u3002"]}),"\n",(0,A.jsxs)(B.h3,{id:"new-\u521b\u5efa\u6570\u636e\u5e93\u5bf9\u8c61",children:[(0,A.jsx)(B.code,{children:"New"})," \u521b\u5efa\u6570\u636e\u5e93\u5bf9\u8c61"]}),"\n",(0,A.jsx)(B.pre,{children:(0,A.jsx)(B.code,{children:'db, err := gdb.New(gdb.ConfigNode{\n\tLink: "mysql:root:12345678@tcp(127.0.0.1:3306)/test",\n})\n'})}),"\n",(0,A.jsx)(B.h3,{id:"\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u5355\u4f8b",children:"\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u5355\u4f8b"}),"\n",(0,A.jsx)(B.pre,{children:(0,A.jsx)(B.code,{children:'// \u83b7\u53d6\u9ed8\u8ba4\u914d\u7f6e\u7684\u6570\u636e\u5e93\u5bf9\u8c61(\u914d\u7f6e\u540d\u79f0\u4e3a"default")\ndb := g.DB()\n\n// \u83b7\u53d6\u914d\u7f6e\u5206\u7ec4\u540d\u79f0\u4e3a"user"\u7684\u6570\u636e\u5e93\u5bf9\u8c61\ndb := g.DB("user")\n\n// \u4f7f\u7528\u539f\u751f\u5355\u4f8b\u7ba1\u7406\u65b9\u6cd5\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u5355\u4f8b\ndb, err := gdb.Instance()\ndb, err := gdb.Instance("user")\n'})}),"\n",(0,A.jsx)(B.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,A.jsxs)(B.ul,{children:["\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BD%BF%E7%94%A8%E9%85%8D%E7%BD%AE",children:"ORM\u4f7f\u7528\u914d\u7f6e"})}),"\n",(0,A.jsxs)(B.li,{children:[(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C",children:"ORM\u94fe\u5f0f\u64cd\u4f5c(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)"}),"\n",(0,A.jsxs)(B.ul,{children:["\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%A8%A1%E5%9E%8B%E5%88%9B%E5%BB%BA",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E5%86%99%E5%85%A5%E4%BF%9D%E5%AD%98",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5199\u5165\u4fdd\u5b58"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%9B%B4%E6%96%B0%E5%88%A0%E9%99%A4",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u66f4\u65b0\u5220\u9664"})}),"\n",(0,A.jsxs)(B.li,{children:[(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2"}),"\n",(0,A.jsxs)(B.ul,{children:["\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-WhereWhereOrWhereNot",children:"ORM\u67e5\u8be2-Where/WhereOr/WhereNot"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-AllOneArrayValueCount",children:"ORM\u67e5\u8be2-All/One/Array/Value/Count"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-AllAndCount",children:"ORM\u67e5\u8be2-AllAndCount"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-Scan",children:"ORM\u67e5\u8be2-Scan"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-ScanAndCount",children:"ORM\u67e5\u8be2-ScanAndCount"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-LeftJoinRightJoinInnerJoin",children:"ORM\u67e5\u8be2-LeftJoin/RightJoin/InnerJoin"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-GroupOrderHaving",children:"ORM\u67e5\u8be2-Group/Order/Having"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-UnionUnionAll",children:"ORM\u67e5\u8be2-Union/UnionAll"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-%E5%AD%90%E6%9F%A5%E8%AF%A2%E7%89%B9%E6%80%A7",children:"ORM\u67e5\u8be2-\u5b50\u67e5\u8be2\u7279\u6027"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",children:"ORM\u67e5\u8be2-\u5e38\u7528\u64cd\u4f5c\u793a\u4f8b"})}),"\n"]}),"\n"]}),"\n",(0,A.jsxs)(B.li,{children:[(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%A8%A1%E5%9E%8B%E5%85%B3%E8%81%94",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u5173\u8054"}),"\n",(0,A.jsxs)(B.ul,{children:["\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%A8%A1%E5%9E%8B%E5%85%B3%E8%81%94/%E6%A8%A1%E5%9E%8B%E5%85%B3%E8%81%94-%E5%8A%A8%E6%80%81%E5%85%B3%E8%81%94-ScanList",children:"\u6a21\u578b\u5173\u8054-\u52a8\u6001\u5173\u8054-ScanList"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%A8%A1%E5%9E%8B%E5%85%B3%E8%81%94/%E6%A8%A1%E5%9E%8B%E5%85%B3%E8%81%94-%E9%9D%99%E6%80%81%E5%85%B3%E8%81%94-With%E7%89%B9%E6%80%A7",children:"\u6a21\u578b\u5173\u8054-\u9759\u6001\u5173\u8054-With\u7279\u6027"})}),"\n"]}),"\n"]}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E5%AF%B9%E8%B1%A1%E8%BE%93%E5%85%A5",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5bf9\u8c61\u8f93\u5165"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E5%AD%97%E6%AE%B5%E8%BF%87%E6%BB%A4",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u8fc7\u6ee4"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E5%AD%97%E6%AE%B5%E8%8E%B7%E5%8F%96",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e8b\u52a1\u5904\u7406"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E4%B8%BB%E4%BB%8E%E5%88%87%E6%8D%A2",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e3b\u4ece\u5207\u6362"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%9F%A5%E8%AF%A2%E7%BC%93%E5%AD%98",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u67e5\u8be2\u7f13\u5b58"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%97%B6%E9%97%B4%E7%BB%B4%E6%8A%A4",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%88%87%E6%8D%A2",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-Hook%E7%89%B9%E6%80%A7",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-Handler%E7%89%B9%E6%80%A7",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%82%B2%E8%A7%82%E9%94%81%20&%20%E4%B9%90%E8%A7%82%E9%94%81",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u60b2\u89c2\u9501 & \u4e50\u89c2\u9501"})}),"\n"]}),"\n"]}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%96%B9%E6%B3%95%E6%93%8D%E4%BD%9C-%E5%8E%9F%E7%94%9F",children:"ORM\u65b9\u6cd5\u64cd\u4f5c(\u539f\u751f)"})}),"\n",(0,A.jsxs)(B.li,{children:[(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86",children:"ORM\u4e8b\u52a1\u5904\u7406"}),"\n",(0,A.jsxs)(B.ul,{children:["\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86/ORM%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86-%E5%B8%B8%E8%A7%84%E6%93%8D%E4%BD%9C",children:"ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86/ORM%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86-%E9%97%AD%E5%8C%85%E6%93%8D%E4%BD%9C",children:"ORM\u4e8b\u52a1\u5904\u7406-\u95ed\u5305\u64cd\u4f5c"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86/ORM%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86-%E5%B5%8C%E5%A5%97%E4%BA%8B%E5%8A%A1",children:"ORM\u4e8b\u52a1\u5904\u7406-\u5d4c\u5957\u4e8b\u52a1"})}),"\n"]}),"\n"]}),"\n",(0,A.jsxs)(B.li,{children:[(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E7%BB%93%E6%9E%9C%E5%A4%84%E7%90%86",children:"ORM\u7ed3\u679c\u5904\u7406"}),"\n",(0,A.jsxs)(B.ul,{children:["\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E7%BB%93%E6%9E%9C%E5%A4%84%E7%90%86/ORM%E7%BB%93%E6%9E%9C%E5%A4%84%E7%90%86-%E7%BB%93%E6%9E%9C%E7%B1%BB%E5%9E%8B",children:"ORM\u7ed3\u679c\u5904\u7406-\u7ed3\u679c\u7c7b\u578b"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E7%BB%93%E6%9E%9C%E5%A4%84%E7%90%86/ORM%E7%BB%93%E6%9E%9C%E5%A4%84%E7%90%86-%E4%B8%BA%E7%A9%BA%E5%88%A4%E6%96%AD",children:"ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E7%BB%93%E6%9E%9C%E5%A4%84%E7%90%86/ORM%E7%BB%93%E6%9E%9C%E5%A4%84%E7%90%86-%E7%A9%BA%E6%95%B0%E7%BB%84%E7%BB%93%E6%9E%84%E8%BF%94%E5%9B%9E",children:"ORM\u7ed3\u679c\u5904\u7406-\u7a7a\u6570\u7ec4\u7ed3\u6784\u8fd4\u56de"})}),"\n"]}),"\n"]}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%97%B6%E5%8C%BA%E5%A4%84%E7%90%86",children:"ORM\u65f6\u533a\u5904\u7406"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%A8%A1%E5%9E%8B%E7%94%9F%E6%88%90",children:"ORM\u6a21\u578b\u751f\u6210"})}),"\n",(0,A.jsxs)(B.li,{children:[(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7",children:"ORM\u9ad8\u7ea7\u7279\u6027"}),"\n",(0,A.jsxs)(B.ul,{children:["\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-RawSQL",children:"ORM\u9ad8\u7ea7\u7279\u6027-RawSQL"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-SQL%E6%8D%95%E8%8E%B7",children:"ORM\u9ad8\u7ea7\u7279\u6027-SQL\u6355\u83b7"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-%E8%B0%83%E8%AF%95%E6%A8%A1%E5%BC%8F",children:"ORM\u9ad8\u7ea7\u7279\u6027-\u8c03\u8bd5\u6a21\u5f0f"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA",children:"ORM\u9ad8\u7ea7\u7279\u6027-\u65e5\u5fd7\u8f93\u51fa"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-%E5%AD%97%E6%AE%B5%E6%98%A0%E5%B0%84",children:"ORM\u9ad8\u7ea7\u7279\u6027-\u5b57\u6bb5\u6620\u5c04"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-%E7%A9%BA%E8%B7%91%E7%89%B9%E6%80%A7",children:"ORM\u9ad8\u7ea7\u7279\u6027-\u7a7a\u8dd1\u7279\u6027"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-%E7%B1%BB%E5%9E%8B%E8%AF%86%E5%88%AB",children:"ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2",children:"ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8f6c\u6362"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-%E5%86%85%E5%B5%8C%E7%BB%93%E6%9E%84%E6%94%AF%E6%8C%81",children:"ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2",children:"ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362"})}),"\n"]}),"\n"]}),"\n",(0,A.jsxs)(B.li,{children:[(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%8E%A5%E5%8F%A3%E5%BC%80%E5%8F%91",children:"ORM\u63a5\u53e3\u5f00\u53d1"}),"\n",(0,A.jsxs)(B.ul,{children:["\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%8E%A5%E5%8F%A3%E5%BC%80%E5%8F%91/ORM%E6%8E%A5%E5%8F%A3%E5%BC%80%E5%8F%91-%E5%9B%9E%E8%B0%83%E5%A4%84%E7%90%86",children:"ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%8E%A5%E5%8F%A3%E5%BC%80%E5%8F%91/ORM%E6%8E%A5%E5%8F%A3%E5%BC%80%E5%8F%91-%E9%A9%B1%E5%8A%A8%E5%BC%80%E5%8F%91",children:"ORM\u63a5\u53e3\u5f00\u53d1-\u9a71\u52a8\u5f00\u53d1"})}),"\n"]}),"\n"]}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%B8%8A%E4%B8%8B%E6%96%87%E5%8F%98%E9%87%8F",children:"ORM\u4e0a\u4e0b\u6587\u53d8\u91cf"})}),"\n",(0,A.jsxs)(B.li,{children:[(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5",children:"ORM\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,A.jsxs)(B.ul,{children:["\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/%E5%88%A9%E7%94%A8%E6%8C%87%E9%92%88%E5%B1%9E%E6%80%A7%E5%92%8Cdo%E5%AF%B9%E8%B1%A1%E5%AE%9E%E7%8E%B0%E7%81%B5%E6%B4%BB%E7%9A%84%E4%BF%AE%E6%94%B9%E6%8E%A5%E5%8F%A3",children:"\u5229\u7528\u6307\u9488\u5c5e\u6027\u548cdo\u5bf9\u8c61\u5b9e\u73b0\u7075\u6d3b\u7684\u4fee\u6539\u63a5\u53e3"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/%E5%A4%8D%E6%9D%82%E7%B1%BB%E5%9E%8B%E5%B0%BD%E9%87%8F%E4%BD%BF%E7%94%A8json%E5%AD%98%E5%82%A8%EF%BC%8C%E4%BE%BF%E4%BA%8EScan%E5%88%B0%E5%AF%B9%E8%B1%A1%E6%97%B6%E8%87%AA%E5%8A%A8%E5%8C%96%E8%BD%AC%E6%8D%A2%EF%BC%8C%E9%81%BF%E5%85%8D%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%A3%E6%9E%90",children:"\u590d\u6742\u7c7b\u578b\u5c3d\u91cf\u4f7f\u7528json\u5b58\u50a8\uff0c\u4fbf\u4e8eScan\u5230\u5bf9\u8c61\u65f6\u81ea\u52a8\u5316\u8f6c\u6362\uff0c\u907f\u514d\u81ea\u5b9a\u4e49\u89e3\u6790"})}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/%E6%9F%A5%E8%AF%A2%E6%97%B6%E9%81%BF%E5%85%8D%E8%BF%94%E5%9B%9E%E5%AF%B9%E8%B1%A1%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8F%8Asql.ErrNoRows%E5%88%A4%E6%96%AD",children:"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53casql.ErrNoRows\u5224\u65ad"})}),"\n"]}),"\n"]}),"\n",(0,A.jsx)(B.li,{children:(0,A.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98",children:"ORM\u5e38\u89c1\u95ee\u9898"})}),"\n"]})]})}function h(E={}){const{wrapper:B}={...(0,n.R)(),...E.components};return B?(0,A.jsx)(B,{...E,children:(0,A.jsx)(c,{...E})}):c(E)}},640253:(E,B,e)=>{e.d(B,{A:()=>A});const A=e.p+"assets/images/abd510c01036a18b4c5458dee67e25bf-812742ced256295346b6355c1c503e5a.png"},676901:(E,B,e)=>{e.d(B,{A:()=>A});const A=e.p+"assets/images/e8e3230a90193748b47a97839539dec1-5d61b04fbaf4be85bc886c8cbf8dc51a.png"},28453:(E,B,e)=>{e.d(B,{R:()=>d,x:()=>i});var A=e(296540);const n={},r=A.createContext(n);function d(E){const B=A.useContext(r);return A.useMemo((function(){return"function"==typeof E?E(B):{...B,...E}}),[B,E])}function i(E){let B;return B=E.disableParentContext?"function"==typeof E.components?E.components(n):E.components||n:d(E.components),A.createElement(r.Provider,{value:B},E.children)}}}]);
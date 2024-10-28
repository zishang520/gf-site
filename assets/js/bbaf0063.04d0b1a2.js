"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[41635],{113776:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var s=d(474848),c=d(28453);const i={title:"\u6570\u636e\u5e93ORM",sidebar_position:11},l=void 0,r={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/\u6570\u636e\u5e93ORM",title:"\u6570\u636e\u5e93ORM",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-1.16.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/11-\u6570\u636e\u5e93ORM.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/",permalink:"/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/11-\u6570\u636e\u5e93ORM.md",tags:[],version:"1.16.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:11,frontMatter:{title:"\u6570\u636e\u5e93ORM",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u94fe\u8def\u8ddf\u8e2a-GRPC\u8bf7\u6c42",permalink:"/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-GRPC\u8bf7\u6c42"},next:{title:"ORM\u4f7f\u7528\u914d\u7f6e",permalink:"/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e"}},o={},h=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u77e5\u8bc6\u56fe\u8c31",id:"\u77e5\u8bc6\u56fe\u8c31",level:2},{value:"\u7ec4\u4ef6\u5173\u8054",id:"\u7ec4\u4ef6\u5173\u8054",level:2},{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:2},{value:"<code>g.DB</code> \u4e0e <code>gdb.New</code>\u3001 <code>gdb.Instance</code>",id:"gdb-\u4e0e-gdbnew-gdbinstance",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u5e93\u7c7b\u578b",id:"\u652f\u6301\u7684\u6570\u636e\u5e93\u7c7b\u578b",level:2},{value:"<code>MySQL</code>",id:"mysql",level:3},{value:"<code>SQLite</code>",id:"sqlite",level:3},{value:"<code>PostgreSQL</code>",id:"postgresql",level:3},{value:"<code>SQL Server</code>",id:"sql-server",level:3},{value:"<code>Oracle</code>",id:"oracle",level:3},{value:"\u5176\u4ed6\u6570\u636e\u5e93\u7c7b\u578b",id:"\u5176\u4ed6\u6570\u636e\u5e93\u7c7b\u578b",level:3}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gf"})," \u6846\u67b6\u7684 ",(0,s.jsx)(n.code,{children:"ORM"})," \u529f\u80fd\u7531 ",(0,s.jsx)(n.code,{children:"gdb"})," \u6a21\u5757\u5b9e\u73b0\uff0c\u7528\u4e8e\u5e38\u7528\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684 ",(0,s.jsx)(n.code,{children:"ORM"})," \u64cd\u4f5c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gdb"})," \u6570\u636e\u5e93\u5f15\u64ce\u5e95\u5c42\u91c7\u7528\u4e86 ",(0,s.jsx)(n.strong,{children:"\u94fe\u63a5\u6c60\u8bbe\u8ba1"}),"\uff0c\u5f53\u94fe\u63a5\u4e0d\u518d\u4f7f\u7528\u65f6\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u56e0\u6b64\u94fe\u63a5\u5bf9\u8c61\u4e0d\u7528\u7684\u65f6\u5019\u4e0d\u9700\u8981\u663e\u5f0f\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Close"})," \u65b9\u6cd5\u5173\u95ed\u6570\u636e\u5e93\u8fde\u63a5\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u4e3a\u63d0\u9ad8\u6570\u636e\u5e93\u64cd\u4f5c\u5b89\u5168\u6027\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"ORM"})," \u64cd\u4f5c\u4e2d\u4e0d\u5efa\u8bae\u76f4\u63a5\u5c06\u53c2\u6570\u62fc\u63a5\u6210 ",(0,s.jsx)(n.code,{children:"SQL"})," \u5b57\u7b26\u4e32\u6267\u884c\uff0c\u5efa\u8bae\u5c3d\u91cf\u4f7f\u7528\u9884\u5904\u7406\u7684\u65b9\u5f0f\uff08\u5145\u5206\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"?"})," \u5360\u4f4d\u7b26\uff09\u6765\u4f20\u9012SQL\u53c2\u6570\u3002 ",(0,s.jsx)(n.code,{children:"gdb"})," \u7684\u5e95\u5c42\u5b9e\u73b0\u4e2d\u5747\u91c7\u7528\u7684\u662f\u9884\u5904\u7406\u7684\u65b9\u5f0f\u5904\u7406\u5f00\u53d1\u8005\u4f20\u9012\u7684\u53c2\u6570\uff0c\u4ee5\u5145\u5206\u4fdd\u8bc1\u6570\u636e\u5e93\u64cd\u4f5c\u5b89\u5168\u6027\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u53e3\u6587\u6863\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://godoc.org/github.com/gogf/gf/database/gdb",children:"https://godoc.org/github.com/gogf/gf/database/gdb"})}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u53e3\u5173\u7cfb\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d(451083).A+"",width:"2340",height:"1580"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GoFrame ORM Relations"})}),"\n",(0,s.jsx)(n.h2,{id:"\u77e5\u8bc6\u56fe\u8c31",children:"\u77e5\u8bc6\u56fe\u8c31"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d(190656).A+"",width:"2586",height:"2294"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GoFrame ORM Features"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7ec4\u4ef6\u5173\u8054",children:"\u7ec4\u4ef6\u5173\u8054"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d(587499).A+"",width:"2310",height:"940"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GoFrame ORM Dependencies"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6570\u636e\u7ed3\u6784",children:"\u6570\u636e\u7ed3\u6784"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u4fbf\u4e8e\u6570\u636e\u8868\u8bb0\u5f55\u7684\u64cd\u4f5c\uff0c ",(0,s.jsx)(n.code,{children:"ORM"})," \u5b9a\u4e49\u4e86 ",(0,s.jsx)(n.code,{children:"5"})," \u79cd\u57fa\u672c\u7684\u6570\u636e\u7c7b\u578b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"type Map         map[string]interface{} // \u6570\u636e\u8bb0\u5f55\ntype List        []Map                  // \u6570\u636e\u8bb0\u5f55\u5217\u8868\n\ntype Value       *gvar.Var              // \u8fd4\u56de\u6570\u636e\u8868\u8bb0\u5f55\u503c\ntype Record      map[string]Value       // \u8fd4\u56de\u6570\u636e\u8868\u8bb0\u5f55\u952e\u503c\u5bf9\ntype Result      []Record               // \u8fd4\u56de\u6570\u636e\u8868\u8bb0\u5f55\u5217\u8868\n\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Map"})," \u4e0e ",(0,s.jsx)(n.code,{children:"List"})," \u7528\u4e8eORM\u64cd\u4f5c\u8fc7\u7a0b\u4e2d\u7684\u8f93\u5165\u53c2\u6570\u7c7b\u578b\uff08\u4e0e\u5168\u5c40\u7c7b\u578b ",(0,s.jsx)(n.code,{children:"g.Map"})," \u548c ",(0,s.jsx)(n.code,{children:"g.List"})," \u4e00\u81f4\uff0c\u5728\u9879\u76ee\u5f00\u53d1\u4e2d\u5e38\u7528 ",(0,s.jsx)(n.code,{children:"g.Map"})," \u548c ",(0,s.jsx)(n.code,{children:"g.List"})," \u66ff\u6362\uff09\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Value/Record/Result"})," \u7528\u4e8eORM\u64cd\u4f5c\u7684\u7ed3\u679c\u6570\u636e\u7c7b\u578b\uff0c\u5177\u4f53\u8bf4\u660e\u8bf7\u67e5\u770b ",(0,s.jsx)(n.a,{href:"output/goframe-v1.16-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E7%BB%93%E6%9E%9C%E5%A4%84%E7%90%86",children:"ORM\u7ed3\u679c\u5904\u7406"})," \u7ae0\u8282\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"gdb-\u4e0e-gdbnew-gdbinstance",children:[(0,s.jsx)(n.code,{children:"g.DB"})," \u4e0e ",(0,s.jsx)(n.code,{children:"gdb.New"}),"\u3001 ",(0,s.jsx)(n.code,{children:"gdb.Instance"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u83b7\u53d6\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\u6709\u4e09\u79cd\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"g.DB"})," \u65b9\u6cd5\uff08\u63a8\u8350\uff09\uff0c\u4e00\u79cd\u662f\u4f7f\u7528\u539f\u751f ",(0,s.jsx)(n.code,{children:"gdb.New"})," \u65b9\u6cd5\uff0c\u8fd8\u6709\u4e00\u79cd\u662f\u4f7f\u7528\u5305\u539f\u751f\u5355\u4f8b\u65b9\u6cd5 ",(0,s.jsx)(n.code,{children:"gdb.Instance"}),"\uff0c\u800c\u7b2c\u4e00\u79cd\u662f\u63a8\u8350\u7684\u4f7f\u7528\u65b9\u5f0f\u3002\u8fd9\u4e09\u79cd\u65b9\u5f0f\u7684\u533a\u522b\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"g.DB"})," \u5bf9\u8c61\u7ba1\u7406\u65b9\u5f0f\u83b7\u53d6\u7684\u662f\u5355\u4f8b\u5bf9\u8c61\uff0c\u6574\u5408\u4e86\u914d\u7f6e\u6587\u4ef6\u7684\u7ba1\u7406\u529f\u80fd\uff0c\u652f\u6301\u914d\u7f6e\u6587\u4ef6\u70ed\u66f4\u65b0\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gdb.New"})," \u662f\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u5e93\u5bf9\u8c61(\u975e\u5355\u4f8b)\uff0c\u65e0\u6cd5\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\uff0c\u9700\u8981\u4f7f\u7528\u5305\u914d\u7f6e\u7ba1\u7406\u65b9\u6cd5\u8fdb\u884c\u914d\u7f6e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gdb.Instance"})," \u662f\u5305\u539f\u751f\u5355\u4f8b\u7ba1\u7406\u65b9\u6cd5\uff0c\u9700\u8981\u7ed3\u5408\u914d\u7f6e\u65b9\u6cd5\u4e00\u8d77\u4f7f\u7528\uff0c\u901a\u8fc7\u5206\u7ec4\u540d\u79f0(\u975e\u5fc5\u9700)\u83b7\u53d6\u5bf9\u5e94\u914d\u7f6e\u7684\u6570\u636e\u5e93\u5355\u4f8b\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5176\u4ed6\u4f7f\u7528\u65e0\u5dee\u522b\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u8fd9\u4e48\u591a\u5bf9\u8c61\u83b7\u53d6\u65b9\u5f0f\u539f\u56e0\u5728\u4e8e ",(0,s.jsx)(n.code,{children:"GoFrame"})," \u662f\u4e00\u4e2a\u6a21\u5757\u5316\u8bbe\u8ba1\u7684\u6846\u67b6\uff0c\u6bcf\u4e2a\u6a21\u5757\u7686\u53ef\u5355\u72ec\u4f7f\u7528\u3002\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u8005\u4f7f\u7528\u5e38\u7528\u7684\u4e00\u4e9b\u6a21\u5757\uff0c\u56e0\u6b64\u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"g"})," \u6a21\u5757\uff0c\u8fd9\u662f\u4e00\u4e2a\u9ad8\u5ea6\u8026\u5408\u7684\u6a21\u5757\uff0c\u5c01\u88c5\u4e86\u4e00\u4e9b\u5e38\u7528\u5bf9\u8c61\u7684\u5355\u4f8b\u83b7\u53d6\u65b9\u5f0f\uff0c\u8be6\u89c1 ",(0,s.jsx)(n.a,{href:"output/goframe-v1.16-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E5%AF%B9%E8%B1%A1%E7%AE%A1%E7%90%86",children:"\u5bf9\u8c61\u7ba1\u7406"})," \u7ae0\u8282\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u83b7\u53d6 ",(0,s.jsx)(n.code,{children:"ORM"})," \u5bf9\u8c61\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// \u83b7\u53d6\u9ed8\u8ba4\u914d\u7f6e\u7684\u6570\u636e\u5e93\u5bf9\u8c61(\u914d\u7f6e\u540d\u79f0\u4e3a"default")\ndb := g.DB()\n\n// \u83b7\u53d6\u914d\u7f6e\u5206\u7ec4\u540d\u79f0\u4e3a"user-center"\u7684\u6570\u636e\u5e93\u5bf9\u8c61\ndb := g.DB("user-center")\n\n// \u4f7f\u7528\u539f\u751fNew\u65b9\u6cd5\u521b\u5efa\u6570\u636e\u5e93\u5bf9\u8c61\ndb, err := gdb.New()\ndb, err := gdb.New("user-center")\n\n// \u4f7f\u7528\u539f\u751f\u5355\u4f8b\u7ba1\u7406\u65b9\u6cd5\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u5355\u4f8b\ndb, err := gdb.Instance()\ndb, err := gdb.Instance("user-center")\n\n// \u6ce8\u610f\u4e0d\u7528\u7684\u65f6\u5019\u4e0d\u9700\u8981\u4f7f\u7528Close\u65b9\u6cd5\u5173\u95ed\u6570\u636e\u5e93\u8fde\u63a5(\u5e76\u4e14gdb\u4e5f\u6ca1\u6709\u63d0\u4f9bClose\u65b9\u6cd5)\uff0c\n// \u6570\u636e\u5e93\u5f15\u64ce\u5e95\u5c42\u91c7\u7528\u4e86\u94fe\u63a5\u6c60\u8bbe\u8ba1\uff0c\u5f53\u94fe\u63a5\u4e0d\u518d\u4f7f\u7528\u65f6\u4f1a\u81ea\u52a8\u5173\u95ed\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u652f\u6301\u7684\u6570\u636e\u5e93\u7c7b\u578b",children:"\u652f\u6301\u7684\u6570\u636e\u5e93\u7c7b\u578b"}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,s.jsx)(n.code,{children:"go"})," \u6807\u51c6\u5e93\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\u91c7\u7528\u63a5\u53e3\u5b9e\u73b0\uff0c\u56e0\u6b64\u63d0\u4f9b\u4e86\u975e\u5e38\u597d\u7684\u53ef\u6269\u5c55\u6027\u548c\u517c\u5bb9\u6027\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"mysql",children:(0,s.jsx)(n.code,{children:"MySQL"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5185\u7f6e\u652f\u6301\uff0c\u65e0\u9700\u989d\u5916\u6269\u5c55\u6216\u7b2c\u4e09\u65b9\u5305\u63a5\u5165\uff0c\u76f4\u63a5\u53ef\u7528\u3002 \u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u5305\uff1a ",(0,s.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql",children:"https://github.com/go-sql-driver/mysql"})]}),"\n",(0,s.jsx)(n.h3,{id:"sqlite",children:(0,s.jsx)(n.code,{children:"SQLite"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4f7f\u7528\u65f6\u9700\u8981\u5f15\u5165\u7b2c\u4e09\u65b9\u5305 ( ",(0,s.jsx)(n.a,{href:"https://github.com/mattn/go-sqlite3",children:"go-sqlite3"})," )\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'_ "github.com/mattn/go-sqlite3"\n\n'})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4e0d\u652f\u6301 ",(0,s.jsx)(n.code,{children:"Save/Replace"})," \u65b9\u6cd5"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"postgresql",children:(0,s.jsx)(n.code,{children:"PostgreSQL"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4f7f\u7528\u65f6\u9700\u8981\u5f15\u5165\u7b2c\u4e09\u65b9\u5305 ( ",(0,s.jsx)(n.a,{href:"https://github.com/lib/pq",children:"pq"})," )\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'_ "github.com/lib/pq"\n\n'})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4e0d\u652f\u6301 ",(0,s.jsx)(n.code,{children:"LastInsertId"})," \u65b9\u6cd5"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4e0d\u652f\u6301 ",(0,s.jsx)(n.code,{children:"Save/Replace"})," \u65b9\u6cd5"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sql-server",children:(0,s.jsx)(n.code,{children:"SQL Server"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u65f6\u9700\u5bfc\u5165\u7b2c\u4e09\u65b9\u5305 ( ",(0,s.jsx)(n.a,{href:"https://github.com/denisenkom/go-mssqldb",children:"go-mssqldb"})," )\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'_ "github.com/denisenkom/go-mssqldb"\n\n'})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4e0d\u652f\u6301 ",(0,s.jsx)(n.code,{children:"LastInsertId"})," \u65b9\u6cd5"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4e0d\u652f\u6301 ",(0,s.jsx)(n.code,{children:"Save/Replace"})," \u65b9\u6cd5"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4ec5\u652f\u6301 ",(0,s.jsx)(n.code,{children:"SQL Server 2005"})," \u53ca\u5176\u540e\u7684\u7248\u672c"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"oracle",children:(0,s.jsx)(n.code,{children:"Oracle"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u65f6\u9700\u5bfc\u5165\u7b2c\u4e09\u65b9\u5305 ( ",(0,s.jsx)(n.a,{href:"https://github.com/mattn/go-oci8",children:"go-oci8"})," )\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'_ "github.com/mattn/go-oci8"\n\n'})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4e0d\u652f\u6301 ",(0,s.jsx)(n.code,{children:"LastInsertId"})," \u65b9\u6cd5"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4e0d\u652f\u6301 ",(0,s.jsx)(n.code,{children:"Save/Replace"})," \u65b9\u6cd5"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5176\u4ed6\u6570\u636e\u5e93\u7c7b\u578b",children:"\u5176\u4ed6\u6570\u636e\u5e93\u7c7b\u578b"}),"\n",(0,s.jsxs)(n.p,{children:["\u989d\u5916\u63a5\u5165\u65b0\u7684\u6570\u636e\u5e93\u76f8\u5f53\u65b9\u4fbf\uff0c\u53ef\u53c2\u8003\u6e90\u7801\u4e2d\u5173\u4e8e ",(0,s.jsx)(n.code,{children:"PostgreSQL"}),"\u3001 ",(0,s.jsx)(n.code,{children:"SQLite"}),"\u3001 ",(0,s.jsx)(n.code,{children:"Oracle"}),"\u3001 ",(0,s.jsx)(n.code,{children:"SQL Server"})," \u7684\u63a5\u5165\u65b9\u5f0f\u3002\u5177\u4f53\u4ecb\u7ecd\u8bf7\u53c2\u8003\u540e\u7eed ",(0,s.jsx)(n.a,{href:"output/goframe-v1.16-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%8E%A5%E5%8F%A3%E5%BC%80%E5%8F%91/ORM%E6%8E%A5%E5%8F%A3%E5%BC%80%E5%8F%91-%E9%A9%B1%E5%8A%A8%E5%BC%80%E5%8F%91",children:"ORM\u63a5\u53e3\u5f00\u53d1-\u9a71\u52a8\u5f00\u53d1"})," \u7ae0\u8282\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},587499:(e,n,d)=>{d.d(n,{A:()=>s});const s=d.p+"assets/images/03f6312a7e897eb4884c11d9f031162b-5d61b04fbaf4be85bc886c8cbf8dc51a.png"},190656:(e,n,d)=>{d.d(n,{A:()=>s});const s=d.p+"assets/images/0c4a2feb6c744b4020421cdeb4906039-812742ced256295346b6355c1c503e5a.png"},451083:(e,n,d)=>{d.d(n,{A:()=>s});const s=d.p+"assets/images/7f14aa8d916cb646f307b7ded1ebf60e-9793a288db16404dcb553b101d69ee20.png"},28453:(e,n,d)=>{d.d(n,{R:()=>l,x:()=>r});var s=d(296540);const c={},i=s.createContext(c);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
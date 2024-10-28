"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[80109],{849100:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=r(474848),t=r(28453);const i={title:"ORM\u65b9\u6cd5\u64cd\u4f5c",sidebar_position:2},l=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u65b9\u6cd5\u64cd\u4f5c",title:"ORM\u65b9\u6cd5\u64cd\u4f5c",description:"\u65b9\u6cd5\u64cd\u4f5c",source:"@site/versioned_docs/version-1.16.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/2-ORM\u65b9\u6cd5\u64cd\u4f5c.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u65b9\u6cd5\u64cd\u4f5c",permalink:"/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u65b9\u6cd5\u64cd\u4f5c",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/2-ORM\u65b9\u6cd5\u64cd\u4f5c.md",tags:[],version:"1.16.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:2,frontMatter:{title:"ORM\u65b9\u6cd5\u64cd\u4f5c",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u60b2\u89c2\u9501 & \u4e50\u89c2\u9501",permalink:"/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u60b2\u89c2\u9501 & \u4e50\u89c2\u9501"},next:{title:"ORM\u4e8b\u52a1\u5904\u7406",permalink:"/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406"}},d={},a=[{value:"\u65b9\u6cd5\u64cd\u4f5c",id:"\u65b9\u6cd5\u64cd\u4f5c",level:2},{value:"\u64cd\u4f5c\u793a\u4f8b",id:"\u64cd\u4f5c\u793a\u4f8b",level:2},{value:"1. <code>ORM</code> \u5bf9\u8c61",id:"1-orm-\u5bf9\u8c61",level:3},{value:"2. \u6570\u636e\u5199\u5165",id:"2-\u6570\u636e\u5199\u5165",level:3},{value:"3. \u6570\u636e\u67e5\u8be2(\u5217\u8868)",id:"3-\u6570\u636e\u67e5\u8be2\u5217\u8868",level:3},{value:"4. \u6570\u636e\u67e5\u8be2(\u5355\u6761)",id:"4-\u6570\u636e\u67e5\u8be2\u5355\u6761",level:3},{value:"5. \u6570\u636e\u4fdd\u5b58",id:"5-\u6570\u636e\u4fdd\u5b58",level:3},{value:"6. \u6279\u91cf\u64cd\u4f5c",id:"6-\u6279\u91cf\u64cd\u4f5c",level:3},{value:"7. \u6570\u636e\u66f4\u65b0/\u5220\u9664",id:"7-\u6570\u636e\u66f4\u65b0\u5220\u9664",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u65b9\u6cd5\u64cd\u4f5c",children:"\u65b9\u6cd5\u64cd\u4f5c"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gdb"})," \u65b9\u6cd5\u64cd\u4f5c\u76f8\u5bf9\u94fe\u5f0f\u64cd\u4f5c\u66f4\u504f\u5e95\u5c42\u64cd\u4f5c\u4e00\u4e9b\uff0c\u5728\u9879\u76ee\u5f00\u53d1\u4e2d\u5e38\u7528\u94fe\u5f0f\u64cd\u4f5c\uff0c\u56e0\u4e3a\u94fe\u5f0f\u64cd\u4f5c\u66f4\u7b80\u5355\u7075\u6d3b\uff0c\u4f46\u94fe\u5f0f\u64cd\u4f5c\u6267\u884c\u4e0d\u4e86\u592a\u8fc7\u4e8e\u590d\u6742\u7684SQL\u64cd\u4f5c\uff0c\u53ef\u4ee5\u4ea4\u7ed9\u65b9\u6cd5\u64cd\u4f5c\u6765\u5904\u7406\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863\uff1a"})," ",(0,s.jsx)(n.a,{href:"https://godoc.org/github.com/gogf/gf/database/gdb",children:"https://godoc.org/github.com/gogf/gf/database/gdb"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5e38\u7528\u65b9\u6cd5\uff1a"})}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u6863\u7684\u65b9\u6cd5\u5217\u8868\u53ef\u80fd\u6ede\u540e\u4e8e\u4e8e\u4ee3\u7801\uff0c\u8be6\u7ec6\u7684\u65b9\u6cd5\u5217\u8868\u8bf7\u67e5\u770b\u63a5\u53e3\u6587\u6863\uff0c\u4ee5\u4e0b\u65b9\u6cd5\u4ec5\u4f9b\u53c2\u8003\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// SQL\u64cd\u4f5c\u65b9\u6cd5\uff0c\u8fd4\u56de\u539f\u751f\u7684\u6807\u51c6\u5e93sql\u5bf9\u8c61\nQuery(query string, args ...interface{}) (*sql.Rows, error)\nExec(query string, args ...interface{}) (sql.Result, error)\nPrepare(query string) (*sql.Stmt, error)\n\n// \u6570\u636e\u8868\u8bb0\u5f55\u67e5\u8be2\uff1a\n// \u67e5\u8be2\u5355\u6761\u8bb0\u5f55\u3001\u67e5\u8be2\u591a\u6761\u8bb0\u5f55\u3001\u83b7\u53d6\u8bb0\u5f55\u5bf9\u8c61\u3001\u67e5\u8be2\u5355\u4e2a\u5b57\u6bb5\u503c(\u94fe\u5f0f\u64cd\u4f5c\u540c\u7406)\nGetAll(sql string, args ...interface{}) (Result, error)\nGetOne(sql string, args ...interface{}) (Record, error)\nGetValue(sql string, args ...interface{}) (Value, error)\nGetArray(sql string, args ...interface{}) ([]Value, error)\nGetCount(sql string, args ...interface{}) (int, error)\nGetStruct(objPointer interface{}, sql string, args ...interface{}) error\nGetStructs(objPointerSlice interface{}, sql string, args ...interface{}) error\nGetScan(objPointer interface{}, sql string, args ...interface{}) error\n\n// \u6570\u636e\u5355\u6761\u64cd\u4f5c\nInsert(table string, data interface{}, batch...int) (sql.Result, error)\nReplace(table string, data interface{}, batch...int) (sql.Result, error)\nSave(table string, data interface{}, batch...int) (sql.Result, error)\n\n// \u6570\u636e\u6279\u91cf\u64cd\u4f5c\nBatchInsert(table string, list interface{}, batch...int) (sql.Result, error)\nBatchReplace(table string, list interface{}, batch...int) (sql.Result, error)\nBatchSave(table string, list interface{}, batch...int) (sql.Result, error)\n\n// \u6570\u636e\u4fee\u6539/\u5220\u9664\nUpdate(table string, data interface{}, condition interface{}, args ...interface{}) (sql.Result, error)\nDelete(table string, condition interface{}, args ...interface{}) (sql.Result, error)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Query"})," \u8fd4\u56de\u7684\u662f\u539f\u751f\u7684\u6807\u51c6\u5e93\u7684\u7ed3\u679c\u96c6\u5bf9\u8c61\uff0c\u9700\u8981\u81ea\u884c\u89e3\u6790\uff1b"]}),"\n",(0,s.jsxs)(n.li,{children:["\xa0\u5728\u6267\u884c\u6570\u636e\u67e5\u8be2\u65f6\u63a8\u8350\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Get*"})," \u7cfb\u5217\u67e5\u8be2\u65b9\u6cd5\uff1b"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Insert"}),"/ ",(0,s.jsx)(n.code,{children:"Replace"}),"/ ",(0,s.jsx)(n.code,{children:"Save"})," \u65b9\u6cd5\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"data"})," \u53c2\u6570\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a\uff1a ",(0,s.jsx)(n.code,{children:"string/map/slice/struct/*struct"}),"\uff0c\u5f53\u4f20\u9012\u4e3a ",(0,s.jsx)(n.code,{children:"slice"})," \u7c7b\u578b\u65f6\uff0c\u81ea\u52a8\u8bc6\u522b\u4e3a\u6279\u91cf\u64cd\u4f5c\uff0c\u6b64\u65f6 ",(0,s.jsx)(n.code,{children:"batch"})," \u53c2\u6570\u6709\u6548\uff1b"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Batch*"})," \u65b9\u6cd5\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"list"})," \u53c2\u6570\u7c7b\u578b\u652f\u6301\u4efb\u610f\u7684 ",(0,s.jsx)(n.code,{children:"slice"})," \u7c7b\u578b\uff1b"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u64cd\u4f5c\u793a\u4f8b",children:"\u64cd\u4f5c\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.h3,{id:"1-orm-\u5bf9\u8c61",children:["1. ",(0,s.jsx)(n.code,{children:"ORM"})," \u5bf9\u8c61"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// \u83b7\u53d6\u9ed8\u8ba4\u914d\u7f6e\u7684\u6570\u636e\u5e93\u5bf9\u8c61(\u914d\u7f6e\u540d\u79f0\u4e3a"default")\ndb := g.DB()\n\n// \u83b7\u53d6\u914d\u7f6e\u5206\u7ec4\u540d\u79f0\u4e3a"user-center"\u7684\u6570\u636e\u5e93\u5bf9\u8c61\ndb := g.DB("user-center")\n\n// \u4f7f\u7528\u539f\u751fNew\u65b9\u6cd5\u521b\u5efa\u6570\u636e\u5e93\u5bf9\u8c61\ndb, err := gdb.New()\ndb, err := gdb.New("user-center")\n\n// \u4f7f\u7528\u539f\u751f\u5355\u4f8b\u7ba1\u7406\u65b9\u6cd5\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u5355\u4f8b\ndb, err := gdb.Instance()\ndb, err := gdb.Instance("user-center")\n\n// \u6ce8\u610f\u4e0d\u7528\u7684\u65f6\u5019\u4e0d\u9700\u8981\u4f7f\u7528Close\u65b9\u6cd5\u5173\u95ed\u6570\u636e\u5e93\u8fde\u63a5(\u5e76\u4e14gdb\u4e5f\u6ca1\u6709\u63d0\u4f9bClose\u65b9\u6cd5)\uff0c\n// \u6570\u636e\u5e93\u5f15\u64ce\u5e95\u5c42\u91c7\u7528\u4e86\u94fe\u63a5\u6c60\u8bbe\u8ba1\uff0c\u5f53\u94fe\u63a5\u4e0d\u518d\u4f7f\u7528\u65f6\u4f1a\u81ea\u52a8\u5173\u95ed\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-\u6570\u636e\u5199\u5165",children:"2. \u6570\u636e\u5199\u5165"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'r, err := db.Insert("user", gdb.Map {\n    "name": "john",\n})\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"3-\u6570\u636e\u67e5\u8be2\u5217\u8868",children:"3. \u6570\u636e\u67e5\u8be2(\u5217\u8868)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'list, err := db.GetAll("select * from user limit 2")\nlist, err := db.GetAll("select * from user where age > ? and name like ?", g.Slice{18, "%john%"})\nlist, err := db.GetAll("select * from user where status=?", g.Slice{1})\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"4-\u6570\u636e\u67e5\u8be2\u5355\u6761",children:"4. \u6570\u636e\u67e5\u8be2(\u5355\u6761)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'one, err := db.GetOne("select * from user limit 2")\none, err := db.GetOne("select * from user where uid=1000")\none, err := db.GetOne("select * from user where uid=?", 1000)\none, err := db.GetOne("select * from user where uid=?", g.Slice{1000})\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"5-\u6570\u636e\u4fdd\u5b58",children:"5. \u6570\u636e\u4fdd\u5b58"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'r, err := db.Save("user", gdb.Map {\n    "uid"  :  1,\n    "name" : "john",\n})\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"6-\u6279\u91cf\u64cd\u4f5c",children:"6. \u6279\u91cf\u64cd\u4f5c"}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"batch"})," \u53c2\u6570\u7528\u4e8e\u6307\u5b9a\u6279\u91cf\u64cd\u4f5c\u4e2d\u5206\u6279\u5199\u5165\u6761\u6570\u6570\u91cf\uff08\u9ed8\u8ba4\u662f ",(0,s.jsx)(n.code,{children:"10"}),"\uff09\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// BatchInsert/BatchReplace/BatchSave \u540c\u7406\n_, err := db.BatchInsert("user", gdb.List {\n    {"name": "john_1"},\n    {"name": "john_2"},\n    {"name": "john_3"},\n    {"name": "john_4"},\n}, 10)\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"7-\u6570\u636e\u66f4\u65b0\u5220\u9664",children:"7. \u6570\u636e\u66f4\u65b0/\u5220\u9664"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// db.Update/db.Delete \u540c\u7406\n// UPDATE `user` SET `name`=\'john\' WHERE `uid`=10000\nr, err := db.Update("user", gdb.Map {"name": "john"}, "uid=?", 10000)\n// UPDATE `user` SET `name`=\'john\' WHERE `uid`=10000\nr, err := db.Update("user", "name=\'john\'", "uid=10000")\n// UPDATE `user` SET `name`=\'john\' WHERE `uid`=10000\nr, err := db.Update("user", "name=?", "uid=?", "john", 10000)\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u53c2\u6570\u57df\u652f\u6301\u5e76\u5efa\u8bae\u4f7f\u7528\u9884\u5904\u7406\u6a21\u5f0f\uff08\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"?"})," \u5360\u4f4d\u7b26\uff09\u8fdb\u884c\u8f93\u5165\uff0c\u907f\u514d ",(0,s.jsx)(n.code,{children:"SQL"})," \u6ce8\u5165\u98ce\u9669\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var s=r(296540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[29004],{284755:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=d(474848),t=d(28453);const s={title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u66f4\u65b0\u5220\u9664",sidebar_position:2},o=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u66f4\u65b0\u5220\u9664",title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u66f4\u65b0\u5220\u9664",description:"\u4e3a\u5b89\u5168\u6027\u4fdd\u8bc1\u3001\u9632\u6b62\u8bef\u64cd\u4f5c\uff0c Update \u53ca Delete \u65b9\u6cd5\u5fc5\u987b\u5e26\u6709 Where \u6761\u4ef6\u624d\u80fd\u63d0\u4ea4\u6267\u884c\uff0c\u5426\u5219\u5c06\u4f1a\u9519\u8bef\u8fd4\u56de\uff0c\u9519\u8bef\u4fe1\u606f\u5982\uff1a there should be WHERE condition statement for XXX operation\u3002 goframe \u662f\u4e00\u6b3e\u7528\u4e8e\u4f01\u4e1a\u751f\u4ea7\u7ea7\u522b\u7684\u6846\u67b6\uff0c\u5404\u4e2a\u6a21\u5757\u8bbe\u8ba1\u4e25\u8c28\uff0c\u5de5\u7a0b\u5b9e\u8df5\u7684\u7ec6\u8282\u5904\u7406\u5f97\u6bd4\u8f83\u597d\u3002",source:"@site/versioned_docs/version-2.4.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/2-ORM\u94fe\u5f0f\u64cd\u4f5c-\u66f4\u65b0\u5220\u9664.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u66f4\u65b0\u5220\u9664",permalink:"/docs/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u66f4\u65b0\u5220\u9664",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/2-ORM\u94fe\u5f0f\u64cd\u4f5c-\u66f4\u65b0\u5220\u9664.md",tags:[],version:"2.4.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:2,frontMatter:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u66f4\u65b0\u5220\u9664",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5199\u5165\u4fdd\u5b58",permalink:"/docs/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5199\u5165\u4fdd\u5b58"},next:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2",permalink:"/docs/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/"}},i={},l=[{value:"<code>Update</code> \u66f4\u65b0\u65b9\u6cd5",id:"update-\u66f4\u65b0\u65b9\u6cd5",level:2},{value:"<code>Counter</code> \u66f4\u65b0\u7279\u6027",id:"counter-\u66f4\u65b0\u7279\u6027",level:2},{value:"<code>Increment/Decrement</code> \u81ea\u589e/\u51cf",id:"incrementdecrement-\u81ea\u589e\u51cf",level:2},{value:"<code>RawSQL</code> \u8bed\u53e5\u5d4c\u5165",id:"rawsql-\u8bed\u53e5\u5d4c\u5165",level:2},{value:"<code>Delete</code> \u5220\u9664\u65b9\u6cd5",id:"delete-\u5220\u9664\u65b9\u6cd5",level:2},{value:"\u8f6f\u5220\u9664\u7279\u6027",id:"\u8f6f\u5220\u9664\u7279\u6027",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u4e3a\u5b89\u5168\u6027\u4fdd\u8bc1\u3001\u9632\u6b62\u8bef\u64cd\u4f5c\uff0c ",(0,r.jsx)(n.code,{children:"Update"})," \u53ca ",(0,r.jsx)(n.code,{children:"Delete"})," \u65b9\u6cd5\u5fc5\u987b\u5e26\u6709 ",(0,r.jsx)(n.code,{children:"Where"})," \u6761\u4ef6\u624d\u80fd\u63d0\u4ea4\u6267\u884c\uff0c\u5426\u5219\u5c06\u4f1a\u9519\u8bef\u8fd4\u56de\uff0c\u9519\u8bef\u4fe1\u606f\u5982\uff1a ",(0,r.jsx)(n.code,{children:"there should be WHERE condition statement for XXX operation"}),"\u3002 ",(0,r.jsx)(n.code,{children:"goframe"})," \u662f\u4e00\u6b3e\u7528\u4e8e\u4f01\u4e1a\u751f\u4ea7\u7ea7\u522b\u7684\u6846\u67b6\uff0c\u5404\u4e2a\u6a21\u5757\u8bbe\u8ba1\u4e25\u8c28\uff0c\u5de5\u7a0b\u5b9e\u8df5\u7684\u7ec6\u8282\u5904\u7406\u5f97\u6bd4\u8f83\u597d\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"update-\u66f4\u65b0\u65b9\u6cd5",children:[(0,r.jsx)(n.code,{children:"Update"})," \u66f4\u65b0\u65b9\u6cd5"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Update"})," \u7528\u4e8e\u6570\u636e\u7684\u66f4\u65b0\uff0c\u5f80\u5f80\u9700\u8981\u7ed3\u5408 ",(0,r.jsx)(n.code,{children:"Data"})," \u53ca ",(0,r.jsx)(n.code,{children:"Where"})," \u65b9\u6cd5\u5171\u540c\u4f7f\u7528\u3002 ",(0,r.jsx)(n.code,{children:"Data"})," \u65b9\u6cd5\u7528\u4e8e\u6307\u5b9a\u9700\u8981\u66f4\u65b0\u7684\u6570\u636e\uff0c ",(0,r.jsx)(n.code,{children:"Where"})," \u65b9\u6cd5\u7528\u4e8e\u6307\u5b9a\u66f4\u65b0\u7684\u6761\u4ef6\u8303\u56f4\u3002\u540c\u65f6\uff0c ",(0,r.jsx)(n.code,{children:"Update"})," \u65b9\u6cd5\u4e5f\u652f\u6301\u76f4\u63a5\u7ed9\u5b9a\u6570\u636e\u548c\u6761\u4ef6\u53c2\u6570\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'// UPDATE `user` SET `name`=\'john guo\' WHERE name=\'john\'\ng.Model("user").Data(g.Map{"name" : "john guo"}).Where("name", "john").Update()\ng.Model("user").Data("name=\'john guo\'").Where("name", "john").Update()\n// UPDATE `user` SET `status`=1 ORDER BY `login_time` asc LIMIT 10\ng.Model("user").Data("status", 1).Order("login_time asc").Limit(10).Update()\n\n// UPDATE `user` SET `status`=1 WHERE 1\ng.Model("user").Data("status=1").Where(1).Update()\ng.Model("user").Data("status", 1).Where(1).Update()\ng.Model("user").Data(g.Map{"status" : 1}).Where(1).Update()\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7ed9 ",(0,r.jsx)(n.code,{children:"Update"})," \u65b9\u6cd5\u4f20\u9012 ",(0,r.jsx)(n.code,{children:"data"})," \u53ca ",(0,r.jsx)(n.code,{children:"where"})," \u53c2\u6570\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'// UPDATE `user` SET `name`=\'john guo\' WHERE name=\'john\'\ng.Model("user").Update(g.Map{"name" : "john guo"}, "name", "john")\ng.Model("user").Update("name=\'john guo\'", "name", "john")\n\n// UPDATE `user` SET `status`=1 WHERE 1\ng.Model("user").Update("status=1", 1)\ng.Model("user").Update(g.Map{"status" : 1}, 1)\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"counter-\u66f4\u65b0\u7279\u6027",children:[(0,r.jsx)(n.code,{children:"Counter"})," \u66f4\u65b0\u7279\u6027"]}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Counter"})," \u7c7b\u578b\u53c2\u6570\u5bf9\u7279\u5b9a\u7684\u5b57\u6bb5\u8fdb\u884c\u6570\u503c\u64cd\u4f5c\uff0c\u4f8b\u5982\uff1a\u589e\u52a0\u3001\u51cf\u5c11\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Counter"})," \u6570\u636e\u7ed3\u6784\u5b9a\u4e49\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"// Counter  is the type for update count.\ntype Counter struct {\n\tField string\n\tValue float64\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Counter"})," \u4f7f\u7528\u793a\u4f8b\uff0c\u5b57\u6bb5\u81ea\u589e\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'updateData := g.Map{\n\t"views": &gdb.Counter{\n        Field: "views",\n        Value: 1,\n    },\n}\n// UPDATE `article` SET `views`=`views`+1 WHERE `id`=1\nresult, err := db.Update("article", updateData, "id", 1)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Counter"})," \u4e5f\u53ef\u4ee5\u5b9e\u73b0\u975e\u81ea\u8eab\u5b57\u6bb5\u7684\u81ea\u589e\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'updateData := g.Map{\n\t"views": &gdb.Counter{\n        Field: "clicks",\n        Value: 1,\n    },\n}\n// UPDATE `article` SET `views`=`clicks`+1 WHERE `id`=1\nresult, err := db.Update("article", updateData, "id", 1)\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"incrementdecrement-\u81ea\u589e\u51cf",children:[(0,r.jsx)(n.code,{children:"Increment/Decrement"})," \u81ea\u589e/\u51cf"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Increment"})," \u548c ",(0,r.jsx)(n.code,{children:"Decrement"})," \u65b9\u6cd5\u5b9e\u73b0\u5bf9\u6307\u5b9a\u5b57\u6bb5\u7684\u81ea\u589e/\u81ea\u51cf\u5e38\u7528\u64cd\u4f5c\u3002\u4e24\u4e2a\u65b9\u6cd5\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"// Increment increments a column's value by a given amount.\nfunc (m *Model) Increment(column string, amount float64) (sql.Result, error)\n\n// Decrement decrements a column's value by a given amount.\nfunc (m *Model) Decrement(column string, amount float64) (sql.Result, error)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'// UPDATE `article` SET `views`=`views`+10000 WHERE `id`=1\ng.Model("article").Where("id", 1).Increment("views", 10000)\n// UPDATE `article` SET `views`=`views`-10000 WHERE `id`=1\ng.Model("article").Where("id", 1).Decrement("views", 10000)\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"rawsql-\u8bed\u53e5\u5d4c\u5165",children:[(0,r.jsx)(n.code,{children:"RawSQL"})," \u8bed\u53e5\u5d4c\u5165"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gdb.Raw"})," \u662f\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u8be5\u7c7b\u578b\u7684\u53c2\u6570\u5c06\u4f1a\u76f4\u63a5\u4f5c\u4e3a ",(0,r.jsx)(n.code,{children:"SQL"})," \u7247\u6bb5\u5d4c\u5165\u5230\u63d0\u4ea4\u5230\u5e95\u5c42\u7684 ",(0,r.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u4e2d\uff0c\u4e0d\u4f1a\u88ab\u81ea\u52a8\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u53c2\u6570\u7c7b\u578b\u3001\u4e5f\u4e0d\u4f1a\u88ab\u5f53\u505a\u9884\u5904\u7406\u53c2\u6570\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'// UPDATE `user` SET login_count=\'login_count+1\',update_time=\'now()\' WHERE id=1\ng.Model("user").Data(g.Map{\n    "login_count": "login_count+1",\n    "update_time": "now()",\n}).Where("id", 1).Update()\n// \u6267\u884c\u62a5\u9519\uff1aError Code: 1136. Column count doesn\'t match value count at row 1\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"gdb.Raw"})," \u6539\u9020\u540e\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'// UPDATE `user` SET login_count=login_count+1,update_time=now() WHERE id=1\ng.Model("user").Data(g.Map{\n    "login_count": gdb.Raw("login_count+1"),\n    "update_time": gdb.Raw("now()"),\n}).Where("id", 1).Update()\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"delete-\u5220\u9664\u65b9\u6cd5",children:[(0,r.jsx)(n.code,{children:"Delete"})," \u5220\u9664\u65b9\u6cd5"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Delete"})," \u65b9\u6cd5\u7528\u4e8e\u6570\u636e\u7684\u5220\u9664\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'// DELETE FROM `user` WHERE uid=10\ng.Model("user").Where("uid", 10).Delete()\n// DELETE FROM `user` ORDER BY `login_time` asc LIMIT 10\ng.Model("user").Order("login_time asc").Limit(10).Delete()\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7ed9 ",(0,r.jsx)(n.code,{children:"Delete"})," \u65b9\u6cd5\u4f20\u9012 ",(0,r.jsx)(n.code,{children:"where"})," \u53c2\u6570\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'// DELETE FROM `user` WHERE `uid`=10\ng.Model("user").Delete("uid", 10)\n// DELETE FROM `user` WHERE `score`<60\ng.Model("user").Delete("score < ", 60)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u8f6f\u5220\u9664\u7279\u6027",children:"\u8f6f\u5220\u9664\u7279\u6027"}),"\n",(0,r.jsxs)(n.p,{children:["\u8f6f\u5220\u9664\u7279\u6027\u8bf7\u67e5\u770b\u7ae0\u8282\uff1a ",(0,r.jsx)(n.a,{href:"output/goframe-v2.4-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%87%8D%E7%82%B9/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%97%B6%E9%97%B4%E7%BB%B4%E6%8A%A4",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>o,x:()=>c});var r=d(296540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[72876],{606653:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad","title":"ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cORM\u7ed3\u679c\u5904\u7406\u4e2d\u7684\u4e3a\u7a7a\u5224\u65ad\u3002\u5305\u62ec\u5904\u7406\u6570\u636e\u96c6\u5408\u3001\u591a\u6761\u6570\u636e\u8bb0\u5f55\u3001\u6570\u636e\u5b57\u6bb5\u503c\uff0c\u4ee5\u53caStruct\u5bf9\u8c61\u548cStruct\u6570\u7ec4\u7684\u7ed3\u679c\u5904\u7406\u65b9\u6cd5\u3002\u901a\u8fc7\u4f7f\u7528IsEmpty\u548cIsNil\u7b49\u65b9\u6cd5\uff0c\u53ef\u4ee5\u8f7b\u677e\u5730\u5224\u65ad\u67e5\u8be2\u7ed3\u679c\u662f\u5426\u4e3a\u7a7a\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406","slug":"/docs/core/gdb-result-empty-check","permalink":"/en/2.7.x/docs/core/gdb-result-empty-check","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad.md","tags":[],"version":"2.7.x","sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gdb-result-empty-check","title":"ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","ORM","\u7ed3\u679c\u5904\u7406","\u4e3a\u7a7a\u5224\u65ad","\u6570\u636e\u96c6\u5408","\u6570\u636e\u8bb0\u5f55","\u6570\u636e\u5b57\u6bb5\u503c","Struct\u5bf9\u8c61","Struct\u6570\u7ec4"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cORM\u7ed3\u679c\u5904\u7406\u4e2d\u7684\u4e3a\u7a7a\u5224\u65ad\u3002\u5305\u62ec\u5904\u7406\u6570\u636e\u96c6\u5408\u3001\u591a\u6761\u6570\u636e\u8bb0\u5f55\u3001\u6570\u636e\u5b57\u6bb5\u503c\uff0c\u4ee5\u53caStruct\u5bf9\u8c61\u548cStruct\u6570\u7ec4\u7684\u7ed3\u679c\u5904\u7406\u65b9\u6cd5\u3002\u901a\u8fc7\u4f7f\u7528IsEmpty\u548cIsNil\u7b49\u65b9\u6cd5\uff0c\u53ef\u4ee5\u8f7b\u677e\u5730\u5224\u65ad\u67e5\u8be2\u7ed3\u679c\u662f\u5426\u4e3a\u7a7a\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u7ed3\u679c\u5904\u7406-\u7ed3\u679c\u7c7b\u578b","permalink":"/en/2.7.x/docs/core/gdb-result-types"},"next":{"title":"ORM\u7ed3\u679c\u5904\u7406-\u7a7a\u6570\u7ec4\u7ed3\u6784\u8fd4\u56de","permalink":"/en/2.7.x/docs/core/gdb-result-empty-array"}}');var c=n(474848),d=n(28453);const t={slug:"/docs/core/gdb-result-empty-check",title:"ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","ORM","\u7ed3\u679c\u5904\u7406","\u4e3a\u7a7a\u5224\u65ad","\u6570\u636e\u96c6\u5408","\u6570\u636e\u8bb0\u5f55","\u6570\u636e\u5b57\u6bb5\u503c","Struct\u5bf9\u8c61","Struct\u6570\u7ec4"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cORM\u7ed3\u679c\u5904\u7406\u4e2d\u7684\u4e3a\u7a7a\u5224\u65ad\u3002\u5305\u62ec\u5904\u7406\u6570\u636e\u96c6\u5408\u3001\u591a\u6761\u6570\u636e\u8bb0\u5f55\u3001\u6570\u636e\u5b57\u6bb5\u503c\uff0c\u4ee5\u53caStruct\u5bf9\u8c61\u548cStruct\u6570\u7ec4\u7684\u7ed3\u679c\u5904\u7406\u65b9\u6cd5\u3002\u901a\u8fc7\u4f7f\u7528IsEmpty\u548cIsNil\u7b49\u65b9\u6cd5\uff0c\u53ef\u4ee5\u8f7b\u677e\u5730\u5224\u65ad\u67e5\u8be2\u7ed3\u679c\u662f\u5426\u4e3a\u7a7a\u3002"},i=void 0,l={},o=[{value:"\u4e00\u3001\u6570\u636e\u96c6\u5408\uff08\u591a\u6761\uff09",id:"\u4e00\u6570\u636e\u96c6\u5408\u591a\u6761",level:2},{value:"\u4e8c\u3001\u6570\u636e\u8bb0\u5f55\uff08\u5355\u6761\uff09",id:"\u4e8c\u6570\u636e\u8bb0\u5f55\u5355\u6761",level:2},{value:"\u4e09\u3001\u6570\u636e\u5b57\u6bb5\u503c",id:"\u4e09\u6570\u636e\u5b57\u6bb5\u503c",level:2},{value:"\u56db\u3001\u5b57\u6bb5\u503c\u6570\u7ec4",id:"\u56db\u5b57\u6bb5\u503c\u6570\u7ec4",level:2},{value:"\u4e94\u3001 <code>Struct</code> \u5bf9\u8c61\uff08\ud83d\udd25\u6ce8\u610f\ud83d\udd25\uff09",id:"\u4e94-struct-\u5bf9\u8c61\u6ce8\u610f",level:2},{value:"\u516d\u3001 <code>Struct</code> \u6570\u7ec4",id:"\u516d-struct-\u6570\u7ec4",level:2}];function a(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(r.code,{children:"GoFrame ORM"})," \u5bf9\u8fd4\u56de\u7ed3\u679c\u4e3a\u7a7a\u5224\u65ad\u975e\u5e38\u7b80\u4fbf\uff0c\u5927\u90e8\u5206\u573a\u666f\u4e0b\u76f4\u63a5\u5224\u65ad\u8fd4\u56de\u7684\u6570\u636e\u662f\u5426\u4e3a ",(0,c.jsx)(r.code,{children:"nil"})," \u6216\u8005\u957f\u5ea6\u4e3a ",(0,c.jsx)(r.code,{children:"0"}),"\uff0c\u6216\u8005\u4f7f\u7528 ",(0,c.jsx)(r.code,{children:"IsEmpty/IsNil"})," \u65b9\u6cd5\u3002"]}),"\n",(0,c.jsx)(r.h2,{id:"\u4e00\u6570\u636e\u96c6\u5408\u591a\u6761",children:"\u4e00\u3001\u6570\u636e\u96c6\u5408\uff08\u591a\u6761\uff09"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).All()\nif err != nil {\n    return err\n}\nif len(r) == 0 {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,c.jsxs)(r.p,{children:["\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(r.code,{children:"IsEmpty"})," \u65b9\u6cd5\uff1a"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).All()\nif err != nil {\n    return err\n}\nif r.IsEmpty() {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,c.jsx)(r.h2,{id:"\u4e8c\u6570\u636e\u8bb0\u5f55\u5355\u6761",children:"\u4e8c\u3001\u6570\u636e\u8bb0\u5f55\uff08\u5355\u6761\uff09"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).One()\nif err != nil {\n    return err\n}\nif len(r) == 0 {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,c.jsxs)(r.p,{children:["\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(r.code,{children:"IsEmpty"})," \u65b9\u6cd5\uff1a"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).One()\nif err != nil {\n    return err\n}\nif r.IsEmpty() {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,c.jsx)(r.h2,{id:"\u4e09\u6570\u636e\u5b57\u6bb5\u503c",children:"\u4e09\u3001\u6570\u636e\u5b57\u6bb5\u503c"}),"\n",(0,c.jsxs)(r.p,{children:['\u8fd4\u56de\u7684\u662f\u4e00\u4e2a"\u6cdb\u578b"\u53d8\u91cf\uff0c\u8fd9\u4e2a\u53ea\u80fd\u4f7f\u7528 ',(0,c.jsx)(r.code,{children:"IsEmpty"})," \u6765\u5224\u65ad\u662f\u5426\u4e3a\u7a7a\u4e86\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).Value()\nif err != nil {\n    return err\n}\nif r.IsEmpty() {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,c.jsx)(r.h2,{id:"\u56db\u5b57\u6bb5\u503c\u6570\u7ec4",children:"\u56db\u3001\u5b57\u6bb5\u503c\u6570\u7ec4"}),"\n",(0,c.jsxs)(r.p,{children:["\u67e5\u8be2\u8fd4\u56de\u5b57\u6bb5\u503c\u6570\u7ec4\u672c\u8eab\u7c7b\u578b\u4e3a ",(0,c.jsx)(r.code,{children:"[]gdb.Value"})," \u7c7b\u578b\uff0c\u56e0\u6b64\u76f4\u63a5\u5224\u65ad\u957f\u5ea6\u662f\u5426\u4e3a ",(0,c.jsx)(r.code,{children:"0"})," \u5373\u53ef\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'// Array/FindArray\nr, err := g.Model("order").Fields("id").Where("status", 1).Array()\nif err != nil {\n    return err\n}\nif len(r) == 0 {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,c.jsxs)(r.h2,{id:"\u4e94-struct-\u5bf9\u8c61\u6ce8\u610f",children:["\u4e94\u3001 ",(0,c.jsx)(r.code,{children:"Struct"})," \u5bf9\u8c61\uff08\ud83d\udd25\u6ce8\u610f\ud83d\udd25\uff09"]}),"\n",(0,c.jsxs)(r.p,{children:["\u5173\u4e8e ",(0,c.jsx)(r.code,{children:"Struct"})," \u8f6c\u6362\u5bf9\u8c61\u6765\u8bf4 ",(0,c.jsx)(r.strong,{children:"\u4f1a\u6709\u4e00\u70b9\u4e0d\u4e00\u6837"}),"\uff0c\u6211\u4eec\u76f4\u63a5\u770b\u4f8b\u5b50\u5427\u3002"]}),"\n",(0,c.jsxs)(r.p,{children:["\u5f53\u4f20\u9012\u7684\u5bf9\u8c61 ",(0,c.jsx)(r.strong,{children:"\u672c\u8eab\u5c31\u662f\u4e00\u4e2a\u7a7a\u6307\u9488\u65f6"}),"\uff0c\u5982\u679c\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u4f1a\u5728\u5185\u90e8 ",(0,c.jsx)(r.strong,{children:"\u81ea\u52a8\u521b\u5efa\u8fd9\u4e2a\u5bf9\u8c61"}),"\uff1b\u5982\u679c\u6ca1\u6709\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u8fd9\u4e2a\u7a7a\u6307\u9488\u4ecd\u65e7\u662f\u4e00\u4e2a\u7a7a\u6307\u9488\uff0c\u5185\u90e8\u5e76\u4e0d\u4f1a\u505a\u4efb\u4f55\u5904\u7406\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'var user *User\nerr := g.Model("order").Where("status", 1).Scan(&user)\nif err != nil {\n    return err\n}\nif user == nil {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,c.jsxs)(r.p,{children:["\u5f53\u4f20\u9012\u7684\u5bf9\u8c61 ",(0,c.jsx)(r.strong,{children:"\u672c\u8eab\u5df2\u7ecf\u662f\u4e00\u4e2a\u521d\u59cb\u5316\u7684\u5bf9\u8c61"}),"\uff0c\u5982\u679c\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u4f1a\u5728\u5185\u90e8\u5c06\u6570\u636e\u8d4b\u503c\u7ed9\u8fd9\u4e2a\u5bf9\u8c61\uff1b ",(0,c.jsxs)(r.strong,{children:["\u5982\u679c\u6ca1\u6709\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u6b64\u65f6\u5c31\u6ca1\u529e\u6cd5\u5c06\u5bf9\u8c61\u505a ",(0,c.jsx)(r.code,{children:"nil"})," \u5224\u65ad\u7a7a\u7ed3\u679c"]}),"\u3002\u56e0\u6b64 ",(0,c.jsx)(r.code,{children:"ORM"})," \u4f1a\u8fd4\u56de\u4e00\u4e2a ",(0,c.jsx)(r.code,{children:"sql.ErrNoRows"})," \u9519\u8bef\uff0c\u63d0\u9192\u5f00\u53d1\u8005\u6ca1\u6709\u67e5\u8be2\u5230\u4efb\u4f55\u6570\u636e\u5e76\u4e14\u5bf9\u8c61\u6ca1\u6709\u505a\u4efb\u4f55\u8d4b\u503c\uff0c\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u8fd8\u662f\u7ed9\u5b9a\u7684\u521d\u59cb\u5316\u6570\u503c\uff0c\u4ee5\u4fbf\u5f00\u53d1\u8005\u53ef\u4ee5\u505a\u8fdb\u4e00\u6b65\u7684\u7a7a\u7ed3\u679c\u5224\u65ad\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'var user = new(User)\nerr := g.Model("order").Where("status", 1).Scan(&user)\nif err != nil && err != sql.ErrNoRows {\n    return err\n}\nif err == sql.ErrNoRows {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,c.jsx)(r.admonition,{type:"tip",children:(0,c.jsxs)(r.p,{children:["\u6240\u4ee5\u6211\u4eec\u63a8\u8350\u5f00\u53d1\u8005\u4e0d\u8981\u4f20\u9012\u4e00\u4e2a\u521d\u59cb\u5316\u8fc7\u540e\u7684\u5bf9\u8c61\u7ed9 ",(0,c.jsx)(r.code,{children:"ORM"}),"\uff0c\u800c\u662f\u76f4\u63a5\u4f20\u9012\u4e00\u4e2a\u5bf9\u8c61\u7684\u6307\u9488\u7684\u6307\u9488\u7c7b\u578b\uff08 ",(0,c.jsx)(r.code,{children:"**struct"})," \u7c7b\u578b\uff09\uff0c ",(0,c.jsx)(r.code,{children:"ORM"})," \u5185\u90e8\u4f1a\u6839\u636e\u67e5\u8be2\u7ed3\u679c\u667a\u80fd\u5730\u505a\u81ea\u52a8\u521d\u59cb\u5316\u3002"]})}),"\n",(0,c.jsxs)(r.h2,{id:"\u516d-struct-\u6570\u7ec4",children:["\u516d\u3001 ",(0,c.jsx)(r.code,{children:"Struct"})," \u6570\u7ec4"]}),"\n",(0,c.jsxs)(r.p,{children:["\u5f53\u4f20\u9012\u7684\u5bf9\u8c61\u6570\u7ec4\u672c\u8eab\u662f\u4e00\u4e2a\u7a7a\u6570\u7ec4\uff08\u957f\u5ea6\u4e3a ",(0,c.jsx)(r.code,{children:"0"}),"\uff09\uff0c\u5982\u679c\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u4f1a\u5728\u5185\u90e8\u81ea\u52a8\u8d4b\u503c\u7ed9\u6570\u7ec4\uff1b\u5982\u679c\u6ca1\u6709\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u8fd9\u4e2a\u7a7a\u6570\u7ec4\u4ecd\u65e7\u662f\u4e00\u4e2a\u7a7a\u6570\u7ec4\uff0c\u5185\u90e8\u5e76\u4e0d\u4f1a\u505a\u4efb\u4f55\u5904\u7406\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'var users []*User\nerr := g.Model("order").Where("status", 1).Scan(&users)\nif err != nil {\n    return err\n}\nif len(users) == 0 {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,c.jsxs)(r.p,{children:["\u5f53\u4f20\u9012\u7684\u5bf9\u8c61\u6570\u7ec4\u672c\u8eab\u4e0d\u662f\u7a7a\u6570\u7ec4\uff0c\u5982\u679c\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u4f1a\u5728\u5185\u90e8\u81ea\u52a8\u4ece\u7d22\u5f15 ",(0,c.jsx)(r.code,{children:"0"})," \u4f4d\u7f6e\u8986\u76d6\u5230\u6570\u7ec4\u4e0a\uff1b\u5982\u679c\u6ca1\u6709\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u6b64\u65f6\u5c31\u6ca1\u529e\u6cd5\u5c06\u6570\u7ec4\u505a\u957f\u5ea6\u4e3a ",(0,c.jsx)(r.code,{children:"0"})," \u5224\u65ad\u7a7a\u7ed3\u679c\u3002\u56e0\u6b64 ",(0,c.jsx)(r.code,{children:"ORM"})," \u4f1a\u8fd4\u56de\u4e00\u4e2a ",(0,c.jsx)(r.code,{children:"sql.ErrNoRows"})," \u9519\u8bef\uff0c\u63d0\u9192\u5f00\u53d1\u8005\u6ca1\u6709\u67e5\u8be2\u5230\u4efb\u4f55\u6570\u636e\u5e76\u4e14\u6570\u7ec4\u6ca1\u6709\u505a\u4efb\u4f55\u8d4b\u503c\uff0c\u4ee5\u4fbf\u5f00\u53d1\u8005\u53ef\u4ee5\u505a\u8fdb\u4e00\u6b65\u7684\u7a7a\u7ed3\u679c\u5224\u65ad\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'var users = make([]*User, 100)\nerr := g.Model("order").Where("status", 1).Scan(&users)\nif err != nil {\n    return err\n}\nif err == sql.ErrNoRows {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,c.jsx)(r.admonition,{type:"warning",children:(0,c.jsxs)(r.p,{children:["\u7531\u4e8e ",(0,c.jsx)(r.code,{children:"struct"})," \u8f6c\u6362\u5229\u7528\u4e86 ",(0,c.jsx)(r.code,{children:"Golang"})," \u53cd\u5c04\u7279\u6027\uff0c\u6267\u884c\u6027\u80fd\u4f1a\u6709\u4e00\u5b9a\u7684\u635f\u8017\u3002\u5982\u679c\u60a8\u6d89\u53ca\u5230\u5927\u91cf\u67e5\u8be2\u7ed3\u679c\u6570\u636e\u7684 ",(0,c.jsx)(r.code,{children:"struct"})," \u6570\u7ec4\u5bf9\u8c61\u8f6c\u6362\uff0c\u5e76\u4e14\u9700\u8981\u63d0\u9ad8\u8f6c\u6362\u6027\u80fd\uff0c\u8bf7\u53c2\u8003\u81ea\u5b9a\u4e49\u5b9e\u73b0\u5bf9\u5e94 ",(0,c.jsx)(r.code,{children:"struct"})," \u7684 ",(0,c.jsx)(r.code,{children:"UnmarshalValue"})," \u65b9\u6cd5\uff1a\n",(0,c.jsx)(r.a,{href:"/en/2.7.x/docs/core/gconv-unmarshal-value",children:"\u7c7b\u578b\u8f6c\u6362-UnmarshalValue"})]})})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>i});var s=n(296540);const c={},d=s.createContext(c);function t(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);
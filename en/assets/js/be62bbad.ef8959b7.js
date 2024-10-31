"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[10731],{88100:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var r=s(74848),i=s(28453);const t={slug:"/core/gdb/chaining-relation-scan-list",title:"\u6a21\u578b\u5173\u8054-\u52a8\u6001\u5173\u8054-ScanList",sidebar_position:0,hide_title:!0},c=void 0,d={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u5173\u8054/\u6a21\u578b\u5173\u8054-\u52a8\u6001\u5173\u8054-ScanList",title:"\u6a21\u578b\u5173\u8054-\u52a8\u6001\u5173\u8054-ScanList",description:"gf \u7684 ORM \u6ca1\u6709\u91c7\u7528\u5176\u4ed6 ORM \u5e38\u89c1\u7684 BelongsTo, HasOne, HasMany, ManyToMany \u8fd9\u6837\u7684\u6a21\u578b\u5173\u8054\u8bbe\u8ba1\uff0c\u8fd9\u6837\u7684\u5173\u8054\u5173\u7cfb\u7ef4\u62a4\u8f83\u7e41\u7410\uff0c\u4f8b\u5982\u5916\u952e\u7ea6\u675f\u3001\u989d\u5916\u7684\u6807\u7b7e\u5907\u6ce8\u7b49\uff0c\u5bf9\u5f00\u53d1\u8005\u6709\u4e00\u5b9a\u7684\u5fc3\u667a\u8d1f\u62c5\u3002\u56e0\u6b64 gf \u6846\u67b6\u4e0d\u503e\u5411\u4e8e\u901a\u8fc7\u5411\u6a21\u578b\u7ed3\u6784\u4f53\u4e2d\u6ce8\u5165\u8fc7\u591a\u590d\u6742\u7684\u6807\u7b7e\u5185\u5bb9\u3001\u5173\u8054\u5c5e\u6027\u6216\u65b9\u6cd5\uff0c\u5e76\u4e00\u5982\u65e2\u5f80\u5730\u5c1d\u8bd5\u7740\u7b80\u5316\u8bbe\u8ba1\uff0c\u76ee\u6807\u662f\u4f7f\u5f97\u6a21\u578b\u5173\u8054\u67e5\u8be2\u5c3d\u53ef\u80fd\u5f97\u6613\u4e8e\u7406\u89e3\u3001\u4f7f\u7528\u4fbf\u6377\u3002",source:"@site/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u5173\u8054/\u6a21\u578b\u5173\u8054-\u52a8\u6001\u5173\u8054-ScanList.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u5173\u8054",slug:"/core/gdb/chaining-relation-scan-list",permalink:"/gf-site/en/docs/core/gdb/chaining-relation-scan-list",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u5173\u8054/\u6a21\u578b\u5173\u8054-\u52a8\u6001\u5173\u8054-ScanList.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730382718e3,sidebarPosition:0,frontMatter:{slug:"/core/gdb/chaining-relation-scan-list",title:"\u6a21\u578b\u5173\u8054-\u52a8\u6001\u5173\u8054-ScanList",sidebar_position:0,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"ORM\u67e5\u8be2-\u5e38\u7528\u64cd\u4f5c\u793a\u4f8b",permalink:"/gf-site/en/docs/core/gdb/chaining-query-example"},next:{title:"\u6a21\u578b\u5173\u8054-\u9759\u6001\u5173\u8054-With\u7279\u6027",permalink:"/gf-site/en/docs/core/gdb/chaining-relation-with"}},l={},o=[{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:3},{value:"\u6570\u636e\u6a21\u578b",id:"\u6570\u636e\u6a21\u578b",level:3},{value:"\u6570\u636e\u5199\u5165",id:"\u6570\u636e\u5199\u5165",level:3},{value:"\u6570\u636e\u67e5\u8be2",id:"\u6570\u636e\u67e5\u8be2",level:3},{value:"\u5355\u6761\u6570\u636e\u8bb0\u5f55",id:"\u5355\u6761\u6570\u636e\u8bb0\u5f55",level:4},{value:"\u591a\u6761\u6570\u636e\u8bb0\u5f55",id:"\u591a\u6761\u6570\u636e\u8bb0\u5f55",level:4}];function a(e){const n={code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gf"})," \u7684 ",(0,r.jsx)(n.code,{children:"ORM"})," \u6ca1\u6709\u91c7\u7528\u5176\u4ed6 ",(0,r.jsx)(n.code,{children:"ORM"})," \u5e38\u89c1\u7684 ",(0,r.jsx)(n.code,{children:"BelongsTo"}),", ",(0,r.jsx)(n.code,{children:"HasOne"}),", ",(0,r.jsx)(n.code,{children:"HasMany"}),", ",(0,r.jsx)(n.code,{children:"ManyToMany"})," \u8fd9\u6837\u7684\u6a21\u578b\u5173\u8054\u8bbe\u8ba1\uff0c\u8fd9\u6837\u7684\u5173\u8054\u5173\u7cfb\u7ef4\u62a4\u8f83\u7e41\u7410\uff0c\u4f8b\u5982\u5916\u952e\u7ea6\u675f\u3001\u989d\u5916\u7684\u6807\u7b7e\u5907\u6ce8\u7b49\uff0c\u5bf9\u5f00\u53d1\u8005\u6709\u4e00\u5b9a\u7684\u5fc3\u667a\u8d1f\u62c5\u3002\u56e0\u6b64 ",(0,r.jsx)(n.code,{children:"gf"})," \u6846\u67b6\u4e0d\u503e\u5411\u4e8e\u901a\u8fc7\u5411\u6a21\u578b\u7ed3\u6784\u4f53\u4e2d\u6ce8\u5165\u8fc7\u591a\u590d\u6742\u7684\u6807\u7b7e\u5185\u5bb9\u3001\u5173\u8054\u5c5e\u6027\u6216\u65b9\u6cd5\uff0c\u5e76\u4e00\u5982\u65e2\u5f80\u5730\u5c1d\u8bd5\u7740\u7b80\u5316\u8bbe\u8ba1\uff0c\u76ee\u6807\u662f\u4f7f\u5f97\u6a21\u578b\u5173\u8054\u67e5\u8be2\u5c3d\u53ef\u80fd\u5f97\u6613\u4e8e\u7406\u89e3\u3001\u4f7f\u7528\u4fbf\u6377\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u5173\u4e8e ",(0,r.jsx)(n.code,{children:"gf ORM"})," \u63d0\u4f9b\u7684\u6a21\u578b\u5173\u8054\u5b9e\u73b0\uff0c\u4ece ",(0,r.jsx)(n.code,{children:"GF v1.13.6"})," \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\uff0c\u76ee\u524d\u5c5e\u4e8e\u5b9e\u9a8c\u6027\u7279\u6027\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u90a3\u4e48\u6211\u4eec\u5c31\u4f7f\u7528\u4e00\u4e2a\u4f8b\u5b50\u6765\u4ecb\u7ecd ",(0,r.jsx)(n.code,{children:"gf ORM"})," \u63d0\u4f9b\u7684\u6a21\u578b\u5173\u8054\u5427\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636e\u7ed3\u6784",children:"\u6570\u636e\u7ed3\u6784"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u7b80\u5316\u793a\u4f8b\uff0c\u6211\u4eec\u8fd9\u91cc\u8bbe\u8ba1\u5f97\u8868\u90fd\u5c3d\u53ef\u80fd\u7b80\u5355\uff0c\u6bcf\u5f20\u8868\u4ec5\u5305\u542b3-4\u4e2a\u5b57\u6bb5\uff0c\u65b9\u4fbf\u9610\u8ff0\u5173\u8054\u5173\u7cfb\u5373\u53ef\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# \u7528\u6237\u8868\nCREATE TABLE `user` (\n  uid int(10) unsigned NOT NULL AUTO_INCREMENT,\n  name varchar(45) NOT NULL,\n  PRIMARY KEY (uid)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n# \u7528\u6237\u8be6\u60c5\nCREATE TABLE `user_detail` (\n  uid  int(10) unsigned NOT NULL AUTO_INCREMENT,\n  address varchar(45) NOT NULL,\n  PRIMARY KEY (uid)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n# \u7528\u6237\u5b66\u5206\nCREATE TABLE `user_scores` (\n  id int(10) unsigned NOT NULL AUTO_INCREMENT,\n  uid int(10) unsigned NOT NULL,\n  score int(10) unsigned NOT NULL,\n  course varchar(45) NOT NULL,\n  PRIMARY KEY (id)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636e\u6a21\u578b",children:"\u6570\u636e\u6a21\u578b"}),"\n",(0,r.jsx)(n.p,{children:"\u6839\u636e\u8868\u5b9a\u4e49\uff0c\u6211\u4eec\u53ef\u4ee5\u5f97\u77e5\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7528\u6237\u8868\u4e0e\u7528\u6237\u8be6\u60c5\u662f ",(0,r.jsx)(n.code,{children:"1:1"})," \u5173\u7cfb\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u7528\u6237\u8868\u4e0e\u7528\u6237\u5b66\u5206\u662f ",(0,r.jsx)(n.code,{children:"1:N"})," \u5173\u7cfb\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8fd9\u91cc\u5e76\u6ca1\u6709\u6f14\u793a ",(0,r.jsx)(n.code,{children:"N:N"})," \u7684\u5173\u7cfb\uff0c\u56e0\u4e3a\u76f8\u6bd4\u8f83\u4e8e ",(0,r.jsx)(n.code,{children:"1:N"})," \u7684\u67e5\u8be2\u53ea\u662f\u591a\u4e86\u4e00\u6b21\u5173\u8054\u3001\u6216\u8005\u4e00\u6b21\u67e5\u8be2\uff0c\u6700\u7ec8\u5904\u7406\u65b9\u5f0f\u548c ",(0,r.jsx)(n.code,{children:"1:N"})," \u7c7b\u4f3c\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u90a3\u4e48 ",(0,r.jsx)(n.code,{children:"Golang"})," \u7684\u6a21\u578b\u53ef\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// \u7528\u6237\u8868\ntype EntityUser struct {\n    Uid  int    `orm:"uid"`\n    Name string `orm:"name"`\n}\n// \u7528\u6237\u8be6\u60c5\ntype EntityUserDetail struct {\n    Uid     int    `orm:"uid"`\n    Address string `orm:"address"`\n}\n// \u7528\u6237\u5b66\u5206\ntype EntityUserScores struct {\n    Id     int    `orm:"id"`\n    Uid    int    `orm:"uid"`\n    Score  int    `orm:"score"`\n    Course string `orm:"course"`\n}\n// \u7ec4\u5408\u6a21\u578b\uff0c\u7528\u6237\u4fe1\u606f\ntype Entity struct {\n    User       *EntityUser\n    UserDetail *EntityUserDetail\n    UserScores []*EntityUserScores\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c ",(0,r.jsx)(n.code,{children:"EntityUser"}),", ",(0,r.jsx)(n.code,{children:"EntityUserDetail"}),", ",(0,r.jsx)(n.code,{children:"EntityUserScores"})," \u5206\u522b\u5bf9\u5e94\u7684\u662f\u7528\u6237\u8868\u3001\u7528\u6237\u8be6\u60c5\u3001\u7528\u6237\u5b66\u5206\u6570\u636e\u8868\u7684\u6570\u636e\u6a21\u578b\u3002 ",(0,r.jsx)(n.code,{children:"Entity"})," \u662f\u4e00\u4e2a\u7ec4\u5408\u6a21\u578b\uff0c\u5bf9\u5e94\u7684\u662f\u4e00\u4e2a\u7528\u6237\u7684\u6240\u6709\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636e\u5199\u5165",children:"\u6570\u636e\u5199\u5165"}),"\n",(0,r.jsx)(n.p,{children:"\u5199\u5165\u6570\u636e\u65f6\u6d89\u53ca\u5230\u7b80\u5355\u7684\u6570\u636e\u5e93\u4e8b\u52a1\u5373\u53ef\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'    err := g.DB().Transaction(ctx, func(ctx context.Context, tx gdb.TX) error {\n            r, err := tx.Model("user").Save(EntityUser{\n            Name: "john",\n        })\n        if err != nil {\n            return err\n        }\n        uid, err := r.LastInsertId()\n        if err != nil {\n            return err\n        }\n        _, err = tx.Model("user_detail").Save(EntityUserDetail{\n            Uid:     int(uid),\n            Address: "Beijing DongZhiMen #66",\n        })\n        if err != nil {\n            return err\n        }\n        _, err = tx.Model("user_scores").Save(g.Slice{\n            EntityUserScores{Uid: int(uid), Score: 100, Course: "math"},\n            EntityUserScores{Uid: int(uid), Score: 99, Course: "physics"},\n        })\n        return err\n    })\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636e\u67e5\u8be2",children:"\u6570\u636e\u67e5\u8be2"}),"\n",(0,r.jsx)(n.h4,{id:"\u5355\u6761\u6570\u636e\u8bb0\u5f55",children:"\u5355\u6761\u6570\u636e\u8bb0\u5f55"}),"\n",(0,r.jsxs)(n.p,{children:["\u67e5\u8be2\u5355\u6761\u6a21\u578b\u6570\u636e\u6bd4\u8f83\u7b80\u5355\uff0c\u76f4\u63a5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Scan"})," \u65b9\u6cd5\u5373\u53ef\uff0c\u8be5\u65b9\u6cd5\u4f1a\u81ea\u52a8\u8bc6\u522b\u7ed1\u5b9a\u67e5\u8be2\u7ed3\u679c\u5230\u5355\u4e2a\u5bf9\u8c61\u5c5e\u6027\u8fd8\u662f\u6570\u7ec4\u5bf9\u8c61\u5c5e\u6027\u4e2d\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// \u5b9a\u4e49\u7528\u6237\u5217\u8868\nvar user Entity\n// \u67e5\u8be2\u7528\u6237\u57fa\u7840\u6570\u636e\n// SELECT * FROM `user` WHERE `name`=\'john\'\nerr := g.Model("user").Scan(&user.User, "name", "john")\nif err != nil {\n    return err\n}\n// \u67e5\u8be2\u7528\u6237\u8be6\u60c5\u6570\u636e\n// SELECT * FROM `user_detail` WHERE `uid`=1\nerr := g.Model("user_detail").Scan(&user.UserDetail, "uid", user.User.Uid)\n// \u67e5\u8be2\u7528\u6237\u5b66\u5206\u6570\u636e\n// SELECT * FROM `user_scores` WHERE `uid`=1\nerr := g.Model("user_scores").Scan(&user.UserScores, "uid", user.User.Uid)\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u65b9\u6cd5\u5728\u4e4b\u524d\u7684\u7ae0\u8282\u4e2d\u5df2\u7ecf\u6709\u4ecb\u7ecd\uff0c\u56e0\u6b64\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u591a\u6761\u6570\u636e\u8bb0\u5f55",children:"\u591a\u6761\u6570\u636e\u8bb0\u5f55"}),"\n",(0,r.jsxs)(n.p,{children:["\u67e5\u8be2\u591a\u6761\u6570\u636e\u8bb0\u5f55\u5e76\u7ed1\u5b9a\u6570\u636e\u5230\u6570\u636e\u6a21\u578b\u6570\u7ec4\u4e2d\uff0c\u9700\u8981\u4f7f\u7528\u5230 ",(0,r.jsx)(n.code,{children:"ScanList"})," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u4f1a\u9700\u8981\u7528\u6237\u6307\u5b9a\u7ed3\u679c\u5b57\u6bb5\u4e0e\u6a21\u578b\u5c5e\u6027\u7684\u5173\u7cfb\uff0c\u968f\u540e\u5e95\u5c42\u4f1a\u904d\u5386\u6570\u7ec4\u5e76\u81ea\u52a8\u6267\u884c\u6570\u636e\u7ed1\u5b9a\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// \u5b9a\u4e49\u7528\u6237\u5217\u8868\nvar users []Entity\n// \u67e5\u8be2\u7528\u6237\u57fa\u7840\u6570\u636e\n// SELECT * FROM `user`\nerr := g.Model("user").ScanList(&users, "User")\n// \u67e5\u8be2\u7528\u6237\u8be6\u60c5\u6570\u636e\n// SELECT * FROM `user_detail` WHERE `uid` IN(1,2)\nerr := g.Model("user_detail").\n       Where("uid", gdb.ListItemValuesUnique(users, "User", "Uid")).\n       ScanList(&users, "UserDetail", "User", "uid:Uid")\n// \u67e5\u8be2\u7528\u6237\u5b66\u5206\u6570\u636e\n// SELECT * FROM `user_scores` WHERE `uid` IN(1,2)\nerr := g.Model("user_scores").\n       Where("uid", gdb.ListItemValuesUnique(users, "User", "Uid")).\n       ScanList(&users, "UserScores", "User", "uid:Uid")\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u5176\u4e2d\u6d89\u53ca\u5230\u4e24\u4e2a\u6bd4\u8f83\u91cd\u8981\u7684\u65b9\u6cd5\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["1. ",(0,r.jsx)(n.code,{children:"ScanList"})]})}),"\n",(0,r.jsx)(n.p,{children:"\u65b9\u6cd5\u5b9a\u4e49\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// ScanList converts <r> to struct slice which contains other complex struct attributes.\n// Note that the parameter <listPointer> should be type of *[]struct/*[]*struct.\n// Usage example:\n//\n// type Entity struct {\n//        User       *EntityUser\n//        UserDetail *EntityUserDetail\n//       UserScores []*EntityUserScores\n// }\n// var users []*Entity\n// or\n// var users []Entity\n//\n// ScanList(&users, "User")\n// ScanList(&users, "UserDetail", "User", "uid:Uid")\n// ScanList(&users, "UserScores", "User", "uid:Uid")\n// The parameters "User"/"UserDetail"/"UserScores" in the example codes specify the target attribute struct\n// that current result will be bound to.\n// The "uid" in the example codes is the table field name of the result, and the "Uid" is the relational\n// struct attribute name. It automatically calculates the HasOne/HasMany relationship with given <relation>\n// parameter.\n// See the example or unit testing cases for clear understanding for this function.\nfunc (m *Model) ScanList(listPointer interface{}, attributeName string, relation ...string) (err error)\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u65b9\u6cd5\u7528\u4e8e\u5c06\u67e5\u8be2\u5230\u7684\u6570\u7ec4\u6570\u636e\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684\u5217\u8868\u4e0a\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'ScanList(&users, "User")'})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8868\u793a\u5c06\u67e5\u8be2\u5230\u7684\u7528\u6237\u4fe1\u606f\u6570\u7ec4\u6570\u636e\u7ed1\u5b9a\u5230 ",(0,r.jsx)(n.code,{children:"users"})," \u5217\u8868\u4e2d\u6bcf\u4e00\u9879\u7684 ",(0,r.jsx)(n.code,{children:"User"})," \u5c5e\u6027\u4e0a\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'ScanList(&users, "UserDetail", "User", "uid:Uid")'})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8868\u793a\u5c06\u67e5\u8be2\u5230\u7528\u6237\u8be6\u60c5\u6570\u7ec4\u6570\u636e\u7ed1\u5b9a\u5230 ",(0,r.jsx)(n.code,{children:"users"})," \u5217\u8868\u4e2d\u6bcf\u4e00\u9879\u7684 ",(0,r.jsx)(n.code,{children:"UserDetail"})," \u5c5e\u6027\u4e0a\uff0c\u5e76\u4e14\u548c\u53e6\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"User"})," \u5bf9\u8c61\u5c5e\u6027\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"uid:Uid"})," \u7684 ",(0,r.jsx)(n.code,{children:"\u5b57\u6bb5:\u5c5e\u6027"})," \u5173\u8054\uff0c\u5185\u90e8\u5c06\u4f1a\u6839\u636e\u8fd9\u4e00\u5173\u8054\u5173\u7cfb\u81ea\u52a8\u8fdb\u884c\u6570\u636e\u7ed1\u5b9a\u3002\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"uid:Uid"})," \u524d\u9762\u7684 ",(0,r.jsx)(n.code,{children:"uid"})," \u8868\u793a\u67e5\u8be2\u7ed3\u679c\u5b57\u6bb5\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"uid"})," \u5b57\u6bb5\uff0c\u540e\u9762\u7684 ",(0,r.jsx)(n.code,{children:"Uid"})," \u8868\u793a\u76ee\u6807\u5173\u8054\u5bf9\u8c61\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"Uid"})," \u5c5e\u6027\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'ScanList(&users, "UserScores", "User", "uid:Uid")'})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8868\u793a\u5c06\u67e5\u8be2\u5230\u7528\u6237\u8be6\u60c5\u6570\u7ec4\u6570\u636e\u7ed1\u5b9a\u5230 ",(0,r.jsx)(n.code,{children:"users"})," \u5217\u8868\u4e2d\u6bcf\u4e00\u9879\u7684 ",(0,r.jsx)(n.code,{children:"UserScores"})," \u5c5e\u6027\u4e0a\uff0c\u5e76\u4e14\u548c\u53e6\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"User"})," \u5bf9\u8c61\u5c5e\u6027\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"uid:Uid"})," \u7684 ",(0,r.jsx)(n.code,{children:"\u5b57\u6bb5:\u5c5e\u6027"})," \u5173\u8054\uff0c\u5185\u90e8\u5c06\u4f1a\u6839\u636e\u8fd9\u4e00\u5173\u8054\u5173\u7cfb\u81ea\u52a8\u8fdb\u884c\u6570\u636e\u7ed1\u5b9a\u3002\u7531\u4e8e ",(0,r.jsx)(n.code,{children:"UserScores"})," \u662f\u4e00\u4e2a\u6570\u7ec4\u7c7b\u578b ",(0,r.jsx)(n.code,{children:"[]*EntityUserScores"}),"\uff0c\u56e0\u6b64\u8be5\u65b9\u6cd5\u5185\u90e8\u53ef\u4ee5\u81ea\u52a8\u8bc6\u522b\u5230 ",(0,r.jsx)(n.code,{children:"User"})," \u5230 ",(0,r.jsx)(n.code,{children:"UserScores"})," \u5176\u5b9e\u662f ",(0,r.jsx)(n.code,{children:"1:N"})," \u7684\u5173\u7cfb\uff0c\u81ea\u52a8\u5b8c\u6210\u6570\u636e\u7ed1\u5b9a\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9700\u8981\u63d0\u9192\u7684\u662f\uff0c\u5982\u679c\u5173\u8054\u6570\u636e\u4e2d\u5bf9\u5e94\u7684\u5173\u8054\u5c5e\u6027\u6570\u636e\u4e0d\u5b58\u5728\uff0c\u90a3\u4e48\u8be5\u5c5e\u6027\u4e0d\u4f1a\u88ab\u521d\u59cb\u5316\u5e76\u5c06\u4fdd\u6301 ",(0,r.jsx)(n.code,{children:"nil"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["2. ",(0,r.jsx)(n.code,{children:"ListItemValues/ListItemValuesUnique"})]})}),"\n",(0,r.jsx)(n.p,{children:"\u65b9\u6cd5\u5b9a\u4e49\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// ListItemValues retrieves and returns the elements of all item struct/map with key <key>.\n// Note that the parameter <list> should be type of slice which contains elements of map or struct,\n// or else it returns an empty slice.\n//\n// The parameter <list> supports types like:\n// []map[string]interface{}\n// []map[string]sub-map\n// []struct\n// []struct:sub-struct\n// Note that the sub-map/sub-struct makes sense only if the optional parameter <subKey> is given.\nfunc ListItemValues(list interface{}, key interface{}, subKey ...interface{}) (values []interface{})\n\n// ListItemValuesUnique retrieves and returns the unique elements of all struct/map with key <key>.\n// Note that the parameter <list> should be type of slice which contains elements of map or struct,\n// or else it returns an empty slice.\n// See gutil.ListItemValuesUnique.\nfunc ListItemValuesUnique(list interface{}, key string, subKey ...interface{}) []interface{}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ListItemValuesUnique"})," \u4e0e ",(0,r.jsx)(n.code,{children:"ListItemValues"})," \u65b9\u6cd5\u7684\u533a\u522b\u5728\u4e8e\u8fc7\u6ee4\u91cd\u590d\u7684\u8fd4\u56de\u503c\uff0c\u4fdd\u8bc1\u8fd4\u56de\u7684\u5217\u8868\u6570\u636e\u4e2d\u4e0d\u5e26\u6709\u91cd\u590d\u503c\u3002\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u90fd\u4f1a\u5728\u5f53\u7ed9\u5b9a\u7684\u5217\u8868\u4e2d\u5305\u542b ",(0,r.jsx)(n.code,{children:"struct"}),"/ ",(0,r.jsx)(n.code,{children:"map"})," \u6570\u636e\u9879\u65f6\uff0c\u7528\u4e8e\u83b7\u53d6\u6307\u5b9a\u5c5e\u6027/\u952e\u540d\u7684\u6570\u636e\u503c\uff0c\u6784\u9020\u6210\u6570\u7ec4 ",(0,r.jsx)(n.code,{children:"[]interface{}"})," \u8fd4\u56de\u3002\u793a\u4f8b\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'gdb.ListItemValuesUnique(users, "Uid")'})," \u7528\u4e8e\u83b7\u53d6 ",(0,r.jsx)(n.code,{children:"users"})," \u6570\u7ec4\u4e2d\uff0c\u6bcf\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"Uid"})," \u5c5e\u6027\uff0c\u6784\u9020\u6210 ",(0,r.jsx)(n.code,{children:"[]interface{}"})," \u6570\u7ec4\u8fd4\u56de\u3002\u8fd9\u91cc\u4ee5\u4fbf\u6839\u636e ",(0,r.jsx)(n.code,{children:"uid"})," \u6784\u9020\u6210 ",(0,r.jsx)(n.code,{children:"SELECT...IN..."})," \u67e5\u8be2\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'gdb.ListItemValuesUnique(users, "User", "Uid")'})," \u7528\u4e8e\u83b7\u53d6 ",(0,r.jsx)(n.code,{children:"users"})," \u6570\u7ec4\u4e2d\uff0c\u6bcf\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"User"})," \u5c5e\u6027\u9879\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"Uid"})," \u5c5e\u6027\uff0c\u6784\u9020\u6210 ",(0,r.jsx)(n.code,{children:"[]interface{}"})," \u6570\u7ec4\u8fd4\u56de\u3002\u8fd9\u91cc\u4ee5\u4fbf\u6839\u636e ",(0,r.jsx)(n.code,{children:"uid"})," \u6784\u9020\u6210 ",(0,r.jsx)(n.code,{children:"SELECT...IN..."})," \u67e5\u8be2\u3002"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var r=s(96540);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
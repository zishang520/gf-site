"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[13608],{33809:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var i=n(474848),d=n(28453);const r={title:"ORM\u65f6\u533a\u5904\u7406",sidebar_position:5,hide_title:!0},s=void 0,t={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u65f6\u533a\u5904\u7406",title:"ORM\u65f6\u533a\u5904\u7406",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u65f6\u533a\u5904\u7406.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u65f6\u533a\u5904\u7406",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u65f6\u533a\u5904\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u65f6\u533a\u5904\u7406.md",tags:[],version:"1.16.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:5,frontMatter:{title:"ORM\u65f6\u533a\u5904\u7406",sidebar_position:5,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ORM\u7ed3\u679c\u5904\u7406",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406"},next:{title:"ORM\u6a21\u578b\u751f\u6210",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u6a21\u578b\u751f\u6210"}},o={},l=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u8f6c\u6362\u793a\u4f8b",id:"\u8f6c\u6362\u793a\u4f8b",level:2},{value:"\u793a\u4f8b1\uff0c\u8bbe\u7f6e <code>loc=Local</code>",id:"\u793a\u4f8b1\u8bbe\u7f6e-loclocal",level:3},{value:"\u793a\u4f8b2\uff0c\u4e0d\u8bbe\u7f6e <code>loc</code> \u53c2\u6570",id:"\u793a\u4f8b2\u4e0d\u8bbe\u7f6e-loc-\u53c2\u6570",level:3},{value:"\u6539\u8fdb\u65b9\u6848",id:"\u6539\u8fdb\u65b9\u6848",level:2}];function a(e){const c={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,i.jsxs)(c.p,{children:["\u8fd9\u4e2a\u95ee\u9898\u7531\u4e8e\u5927\u5bb6\u95ee\u5f97\u6bd4\u8f83\u591a\uff0c\u56e0\u6b64\u5355\u72ec\u5f00\u4e86\u4e00\u4e2a\u7ae0\u8282\u8be6\u7ec6\u4ecb\u7ecd\u4e00\u4e0b ",(0,i.jsx)(c.code,{children:"ORM"})," \u4e2d\u7684\u65f6\u533a\u5904\u7406\u662f\u600e\u4e48\u4e00\u56de\u4e8b\u3002\u6211\u4eec\u8fd9\u91cc\u4ee5 ",(0,i.jsx)(c.code,{children:"MySQL"})," \u6570\u636e\u5e93\u4e3a\u57fa\u7840\u6765\u4ecb\u7ecd\u65f6\u533a\u8f6c\u6362\u7684\u4e8b\u60c5\uff0c\u672c\u5730\u65f6\u533a\u6211\u4eec\u8bbe\u5b9a\u4e3a ",(0,i.jsx)(c.code,{children:"+8"})," \u65f6\u533a\uff0c\u6570\u636e\u5e93\u65f6\u533a\u4e5f\u662f ",(0,i.jsx)(c.code,{children:"+8"})," \u65f6\u533a\u3002"]}),"\n",(0,i.jsxs)(c.p,{children:[(0,i.jsx)(c.code,{children:"MySQL"})," \u6570\u636e\u5e93\u9a71\u52a8\u7528\u5f97\u6700\u591a\u7684\u662f\u8fd9\u4e2a\u7b2c\u4e09\u65b9\u5305\uff1a ",(0,i.jsx)(c.a,{href:"https://github.com/go-sql-driver/mysql",children:"https://github.com/go-sql-driver/mysql"})," \uff0c\u5728\u8fd9\u4e2a\u7b2c\u4e09\u65b9\u5305\u4e2d\u6709\u8fd9\u4e48\u4e00\u4e2a\u53c2\u6570:"]}),"\n",(0,i.jsx)(c.p,{children:(0,i.jsx)(c.img,{src:n(134255).A+"",width:"1872",height:"768"})}),"\n",(0,i.jsxs)(c.p,{children:["\u5927\u6982\u7684\u610f\u601d\u662f\uff0c\u5f53\u4f60\u63d0\u4ea4\u7684\u65f6\u95f4\u53c2\u6570\u4e3a ",(0,i.jsx)(c.code,{children:"time.Time"})," \u65f6\uff0c\u8be5\u53c2\u6570\u7528\u6765\u8f6c\u6362\u53c2\u6570\u65f6\u533a\u7684\u3002\u5f53\u4f60\u5728\u8fde\u63a5\u6570\u636e\u5e93\u65f6\uff0c\u8be5\u53c2\u6570\u4f20\u9012 ",(0,i.jsx)(c.code,{children:"loc=Local"}),"\uff0c\u90a3\u4e48\u8be5 ",(0,i.jsx)(c.code,{children:"driver"})," \u5c06\u4f1a\u81ea\u52a8\u5c06\u4f60\u63d0\u4ea4\u7684 ",(0,i.jsx)(c.code,{children:"time.Time"})," \u53c2\u6570\u8f6c\u6362\u4e3a\u672c\u5730\u7a0b\u5e8f\u8bbe\u7f6e\u7684\u65f6\u533a\uff0c\u6ca1\u6709\u624b\u52a8\u8bbe\u7f6e\u65f6\uff0c\u90a3\u4e48\u8be5\u65f6\u533a\u4e3a ",(0,i.jsx)(c.code,{children:"UTC"})," \u65f6\u533a\u3002\u90a3\u4e48\u6211\u4eec\u6765\u770b\u4e24\u4e2a\u4f8b\u5b50\u3002"]}),"\n",(0,i.jsx)(c.h2,{id:"\u8f6c\u6362\u793a\u4f8b",children:"\u8f6c\u6362\u793a\u4f8b"}),"\n",(0,i.jsxs)(c.h3,{id:"\u793a\u4f8b1\u8bbe\u7f6e-loclocal",children:["\u793a\u4f8b1\uff0c\u8bbe\u7f6e ",(0,i.jsx)(c.code,{children:"loc=Local"})]}),"\n",(0,i.jsx)(c.p,{children:(0,i.jsx)(c.strong,{children:"\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{children:'[database]\n    link = "mysql:root:12345678@tcp(127.0.0.1:3306)/test?loc=Local"\n'})}),"\n",(0,i.jsx)(c.p,{children:(0,i.jsx)(c.strong,{children:"\u4ee3\u7801\u793a\u4f8b"})}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{className:"language-go",children:'t1, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 10:00:00")\nt2, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 11:00:00")\ndb.Model("user").Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 18:00:00\' AND create_time<\'2020-10-27 19:00:00\'\n'})}),"\n",(0,i.jsxs)(c.p,{children:["\u8fd9\u91cc\u7531\u4e8e\u901a\u8fc7 ",(0,i.jsx)(c.code,{children:"time.Parse"})," \u521b\u5efa\u7684 ",(0,i.jsx)(c.code,{children:"time.Time"})," \u65f6\u95f4\u5bf9\u8c61\u662f ",(0,i.jsx)(c.code,{children:"UTC"})," \u65f6\u533a\uff0c\u90a3\u4e48\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u6267\u884c\u65f6\u5c06\u4f1a\u88ab\u5e95\u5c42\u7684 ",(0,i.jsx)(c.code,{children:"driver"})," \u4fee\u6539\u4e3a ",(0,i.jsx)(c.code,{children:"+8"})," \u65f6\u533a\u3002"]}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{className:"language-go",children:'t1, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 10:00:00", time.Local)\nt2, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 11:00:00", time.Local)\ndb.Model("user").Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 10:00:00\' AND create_time<\'2020-10-27 11:00:00\'\n'})}),"\n",(0,i.jsxs)(c.p,{children:["\u8fd9\u91cc\u7531\u4e8e\u901a\u8fc7 ",(0,i.jsx)(c.code,{children:"time.ParseInLocation"})," \u521b\u5efa\u7684 ",(0,i.jsx)(c.code,{children:"time.Time"})," \u65f6\u95f4\u5bf9\u8c61\u662f ",(0,i.jsx)(c.code,{children:"+8"})," \u65f6\u533a\uff0c\u548c ",(0,i.jsx)(c.code,{children:"loc=Local"})," \u7684\u65f6\u533a\u4e00\u81f4\uff0c\u90a3\u4e48\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u6267\u884c\u65f6\u4e0d\u4f1a\u88ab\u5e95\u5c42\u7684 ",(0,i.jsx)(c.code,{children:"driver"})," \u4fee\u6539\u3002"]}),"\n",(0,i.jsxs)(c.p,{children:["\u6ce8\u610f\u5728\u5199\u5165\u6570\u636e\u4e2d\u5305\u542b ",(0,i.jsx)(c.code,{children:"time.Time"})," \u53c2\u6570\u65f6\uff0c\u4e5f\u9700\u8981\u6ce8\u610f\u65f6\u533a\u8f6c\u6362\u7684\u95ee\u9898\u3002"]}),"\n",(0,i.jsxs)(c.h3,{id:"\u793a\u4f8b2\u4e0d\u8bbe\u7f6e-loc-\u53c2\u6570",children:["\u793a\u4f8b2\uff0c\u4e0d\u8bbe\u7f6e ",(0,i.jsx)(c.code,{children:"loc"})," \u53c2\u6570"]}),"\n",(0,i.jsx)(c.p,{children:(0,i.jsx)(c.strong,{children:"\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{children:'[database]\n    link = "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n'})}),"\n",(0,i.jsx)(c.p,{children:(0,i.jsx)(c.strong,{children:"\u4ee3\u7801\u793a\u4f8b"})}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{className:"language-go",children:'t1, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 10:00:00")\nt2, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 11:00:00")\ndb.Model("user").Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 10:00:00\' AND create_time<\'2020-10-27 11:00:00\'\n'})}),"\n",(0,i.jsxs)(c.p,{children:["\u8fd9\u91cc\u7531\u4e8e\u901a\u8fc7 ",(0,i.jsx)(c.code,{children:"time.Parse"})," \u521b\u5efa\u7684 ",(0,i.jsx)(c.code,{children:"time.Time"})," \u65f6\u95f4\u5bf9\u8c61\u662f ",(0,i.jsx)(c.code,{children:"UTC"})," \u65f6\u533a\uff0c\u90a3\u4e48\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u6267\u884c\u65f6\u5c06\u4e0d\u4f1a\u88ab\u5e95\u5c42\u7684 ",(0,i.jsx)(c.code,{children:"driver"})," \u4fee\u6539\u3002"]}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{className:"language-go",children:'t1, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 10:00:00", time.Local)\nt2, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 11:00:00", time.Local)\ndb.Model("user").Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 02:00:00\' AND create_time<\'2020-10-27 03:00:00\'\n'})}),"\n",(0,i.jsxs)(c.p,{children:["\u8fd9\u91cc\u7531\u4e8e\u901a\u8fc7 ",(0,i.jsx)(c.code,{children:"time.ParseInLocation"})," \u521b\u5efa\u7684 ",(0,i.jsx)(c.code,{children:"time.Time"})," \u65f6\u95f4\u5bf9\u8c61\u662f ",(0,i.jsx)(c.code,{children:"+8"})," \u65f6\u533a\uff0c\u90a3\u4e48\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u6267\u884c\u65f6\u4f1a\u88ab\u5e95\u5c42\u7684 ",(0,i.jsx)(c.code,{children:"driver"})," \u4fee\u6539\u4e3a ",(0,i.jsx)(c.code,{children:"UTC"})," \u65f6\u533a\u3002"]}),"\n",(0,i.jsxs)(c.p,{children:["\u6ce8\u610f\u5728\u5199\u5165\u6570\u636e\u4e2d\u5305\u542b ",(0,i.jsx)(c.code,{children:"time.Time"})," \u53c2\u6570\u65f6\uff0c\u4e5f\u9700\u8981\u6ce8\u610f\u65f6\u533a\u8f6c\u6362\u7684\u95ee\u9898\u3002"]}),"\n",(0,i.jsx)(c.h2,{id:"\u6539\u8fdb\u65b9\u6848",children:"\u6539\u8fdb\u65b9\u6848"}),"\n",(0,i.jsxs)(c.p,{children:["\u4e5f\u5c31\u662f\u8bf4\uff0c\u5f53\u4f60\u4f7f\u7528 ",(0,i.jsx)(c.code,{children:"time.Time"})," \u5bf9\u8c61\u4f5c\u4e3a\u65f6\u95f4\u53c2\u6570\u65f6\uff0c\u65e0\u8bba\u5982\u4f55\u4f60\u90fd\u4f1a\u9700\u8981\u6ce8\u610f\u65f6\u533a\u81ea\u52a8\u8f6c\u6362\u7684\u95ee\u9898\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u907f\u514d\u8fd9\u6837\u7684\u5fc3\u667a\u8d1f\u62c5\uff0c\u9632\u6b62\u5927\u5bb6\u8e29\u5751\uff0c\u5728\u4fdd\u7559\u5bf9 ",(0,i.jsx)(c.code,{children:"time.Time"})," \u53c2\u6570\u652f\u6301\u7684\u540c\u65f6\uff0c ",(0,i.jsx)(c.code,{children:"ORM"})," \u589e\u52a0\u4e86\u5bf9 ",(0,i.jsx)(c.code,{children:"gtime.Time"})," \u7c7b\u578b\u53c2\u6570\u7684\u652f\u6301\uff0c\u8be5\u7c7b\u578b\u4e0d\u4f1a\u6d89\u53ca\u5230\u65f6\u533a\u8f6c\u6362\u56f0\u60d1\u7684\u95ee\u9898\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{className:"language-go",children:'t1 := gtime.New("2020-10-27 10:00:00")\nt2 := gtime.New("2020-10-27 11:00:00")\ndb.Model("user").Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 10:00:00\' AND create_time<\'2020-10-27 11:00:00\'\n'})}),"\n",(0,i.jsx)(c.p,{children:"\u5373\uff0c\u4f60\u4f20\u9012\u4ec0\u4e48\u65f6\u95f4\u53c2\u6570\uff0c\u90a3\u4e48\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u6267\u884c\u7684\u4e5f\u662f\u540c\u6837\u7684\u65f6\u95f4\u53c2\u6570\uff0c\u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u7684\u65f6\u533a\u8f6c\u6362\uff0c\u514d\u53bb\u4e86\u5fc3\u667a\u8d1f\u62c5\u3002"}),"\n",(0,i.jsxs)(c.p,{children:["\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48 ",(0,i.jsx)(c.code,{children:"gf"})," \u6846\u67b6 ",(0,i.jsx)(c.code,{children:"cli"})," \u5f00\u53d1\u5de5\u5177\u81ea\u52a8\u751f\u6210\u7684 ",(0,i.jsx)(c.code,{children:"model"})," \u4ee3\u7801\u6587\u4ef6\u4e2d\u6d89\u53ca\u5230\u65f6\u95f4\u7c7b\u578b\u7684\u5c5e\u6027\u5747\u4f7f\u7528\u4e86 ",(0,i.jsx)(c.code,{children:"*gtime.Time"})," \u7c7b\u578b\u800c\u4e0d\u662f ",(0,i.jsx)(c.code,{children:"time.Time"})," \u7684\u7f18\u6545\u3002"]}),"\n",(0,i.jsxs)(c.p,{children:["\u6b64\u5916\uff0c\u8fd8\u9700\u8981\u8bf4\u660e\u7684\u662f\uff0c ",(0,i.jsx)(c.code,{children:"gf"})," \u6846\u67b6\u7684 ",(0,i.jsx)(c.code,{children:"ORM"})," \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6ca1\u6709\u8bbe\u7f6e ",(0,i.jsx)(c.code,{children:"loc"})," \u53c2\u6570\u3002"]})]})}function h(e={}){const{wrapper:c}={...(0,d.R)(),...e.components};return c?(0,i.jsx)(c,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},134255:(e,c,n)=>{n.d(c,{A:()=>i});const i=n.p+"assets/images/253cc347dc18fa7b94a71fe899aaa477-4cb46e19a4360a42a197ba31624f3fd8.png"},28453:(e,c,n)=>{n.d(c,{R:()=>s,x:()=>t});var i=n(296540);const d={},r=i.createContext(d);function s(e){const c=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function t(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(r.Provider,{value:c},e.children)}}}]);
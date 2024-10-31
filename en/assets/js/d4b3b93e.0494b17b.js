"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[2773],{698109:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=n(474848),r=n(28453);const t={title:"gen dao(\u91cd\u70b9)",sidebar_position:0,hide_title:!0},i=void 0,l={id:"\u5f00\u53d1\u5de5\u5177/gen \u4ee3\u7801\u751f\u6210/gen dao-\u91cd\u70b9",title:"gen dao(\u91cd\u70b9)",description:"dao \u547d\u4ee4\u7528\u4e8e\u751f\u6210 dao \u6570\u636e\u8bbf\u95ee\u5bf9\u8c61\u6587\u4ef6\uff0c\u4ee5\u53ca model \u6570\u636e\u7ed3\u6784\u5b9a\u4e49\u6587\u4ef6\u3002\u63a8\u8350\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u6765\u7ba1\u7406\u751f\u6210\u89c4\u5219\u3002",source:"@site/versioned_docs/version-1.16.x/\u5f00\u53d1\u5de5\u5177/gen \u4ee3\u7801\u751f\u6210/gen dao-\u91cd\u70b9.md",sourceDirName:"\u5f00\u53d1\u5de5\u5177/gen \u4ee3\u7801\u751f\u6210",slug:"/\u5f00\u53d1\u5de5\u5177/gen \u4ee3\u7801\u751f\u6210/gen dao-\u91cd\u70b9",permalink:"/gf-site/en/docs/1.16.x/\u5f00\u53d1\u5de5\u5177/gen \u4ee3\u7801\u751f\u6210/gen dao-\u91cd\u70b9",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u5f00\u53d1\u5de5\u5177/gen \u4ee3\u7801\u751f\u6210/gen dao-\u91cd\u70b9.md",tags:[],version:"1.16.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:0,frontMatter:{title:"gen dao(\u91cd\u70b9)",sidebar_position:0,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"gen \u4ee3\u7801\u751f\u6210",permalink:"/gf-site/en/docs/1.16.x/\u5f00\u53d1\u5de5\u5177/gen \u4ee3\u7801\u751f\u6210/"},next:{title:"gen model",permalink:"/gf-site/en/docs/1.16.x/\u5f00\u53d1\u5de5\u5177/gen \u4ee3\u7801\u751f\u6210/gen model"}},o={},c=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2}];function a(e){const d={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"dao"})," \u547d\u4ee4\u7528\u4e8e\u751f\u6210 ",(0,s.jsx)(d.code,{children:"dao"})," \u6570\u636e\u8bbf\u95ee\u5bf9\u8c61\u6587\u4ef6\uff0c\u4ee5\u53ca ",(0,s.jsx)(d.code,{children:"model"})," \u6570\u636e\u7ed3\u6784\u5b9a\u4e49\u6587\u4ef6\u3002\u63a8\u8350\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u6765\u7ba1\u7406\u751f\u6210\u89c4\u5219\u3002"]}),"\n",(0,s.jsx)(d.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,s.jsxs)(d.p,{children:["\u8fdb\u5165\u9879\u76ee\u6839\u76ee\u5f55\u6267\u884c ",(0,s.jsx)(d.code,{children:"gf gen dao"})," \u5373\u53ef\u3002\u4ee5\u4e0b\u4e3a\u547d\u4ee4\u884c\u5e2e\u52a9\u4fe1\u606f\u3002"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:'$ gf gen dao -h\nUSAGE\n    gf gen dao [OPTION]\n\nOPTION\n    -/--path             directory path for generated files.\n    -l, --link           database configuration, the same as the ORM configuration of GoFrame.\n    -t, --tables         generate models only for given tables, multiple table names separated with \',\'\n    -e, --tablesEx       generate models excluding given tables, multiple table names separated with \',\'\n    -g, --group          specifying the configuration group name of database for generated ORM instance,\n                         it\'s not necessary and the default value is "default"\n    -p, --prefix         add prefix for all table of specified link/database tables.\n    -r, --removePrefix   remove specified prefix of the table, multiple prefix separated with \',\'\n    -m, --mod            module name for generated golang file imports.\n    -j, --jsonCase       generated json tag case for model struct, cases are as follows:\n                         | Case            | Example            |\n                         |---------------- |--------------------|\n                         | Camel           | AnyKindOfString    |\n                         | CamelLower      | anyKindOfString    | default\n                         | Snake           | any_kind_of_string |\n                         | SnakeScreaming  | ANY_KIND_OF_STRING |\n                         | SnakeFirstUpper | rgb_code_md5       |\n                         | Kebab           | any-kind-of-string |\n                         | KebabScreaming  | ANY-KIND-OF-STRING |\n    -/--stdTime          use time.Time from stdlib instead of gtime.Time for generated time/date fields of tables.\n    -/--gJsonSupport     use gJsonSupport to use *gjson.Json instead of string for generated json fields of tables.\n    -/--modelFile        custom file name for storing generated model content.\n    -/--tplDaoIndex      template content for Dao index files generating.\n    -/--tplDaoInternal   template content for Dao internal files generating.\n    -/--tplModelIndex    template content for Model index files generating.\n    -/--tplModelStruct   template content for Model internal files generating.\n\nCONFIGURATION SUPPORT\n    Options are also supported by configuration file.\n    It\'s suggested using configuration file instead of command line arguments making producing.\n    The configuration node name is "gf.gen.dao", which also supports multiple databases, for example:\n    [gfcli]\n        [[gfcli.gen.dao]]\n            link     = "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n            tables   = "order,products"\n            jsonCase = "CamelLower"\n        [[gfcli.gen.dao]]\n            link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/primary"\n            path   = "./my-app"\n            prefix = "primary_"\n            tables = "user, userDetail"\n\nEXAMPLES\n    gf gen dao\n    gf gen dao -l "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    gf gen dao -path ./model -c config.yaml -g user-center -t user,user_detail,user_login\n    gf gen dao -r user_\n'})}),"\n",(0,s.jsx)(d.h2,{id:"\u914d\u7f6e\u793a\u4f8b",children:"\u914d\u7f6e\u793a\u4f8b"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{children:'[gfcli]\n    [[gfcli.gen.dao]]\n        link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/order"\n        group  = "order"\n        prefix = "order_"\n        tables = ""\n    [[gfcli.gen.dao]]\n        link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n        group  = "user"\n        prefix = "user_"\n        tables = "user,userDetail,userScore"\n'})}),"\n",(0,s.jsx)(d.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u540d\u79f0"}),(0,s.jsx)(d.th,{children:"\u5fc5\u987b"}),(0,s.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(d.th,{children:"\u542b\u4e49"}),(0,s.jsx)(d.th,{children:"\u793a\u4f8b"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"gfcli.gen.dao"})}),(0,s.jsx)(d.td,{children:"\u662f"}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"dao"})," \u4ee3\u7801\u751f\u6210\u914d\u7f6e\u9879\uff0c\u53ef\u4ee5\u6709\u591a\u4e2a\u914d\u7f6e\u9879\u6784\u6210\u6570\u7ec4\uff0c\u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\u751f\u6210\u3002"]}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"link"})}),(0,s.jsx)(d.td,{children:"\u662f"}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["\u5206\u4e3a\u4e24\u90e8\u5206\uff0c\u7b2c\u4e00\u90e8\u5206\u8868\u793a\u4f60\u8fde\u63a5\u7684\u6570\u636e\u5e93\u7c7b\u578b ",(0,s.jsx)(d.code,{children:"mysql"}),", ",(0,s.jsx)(d.code,{children:"postgresql"})," \u7b49, \u7b2c\u4e8c\u90e8\u5206\u5c31\u662f\u8fde\u63a5\u6570\u636e\u5e93\u7684 ",(0,s.jsx)(d.code,{children:"dsn"})," \u4fe1\u606f\u3002\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,s.jsx)(d.a,{href:"/gf-site/en/docs/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BD%BF%E7%94%A8%E9%85%8D%E7%BD%AE",children:"ORM\u4f7f\u7528\u914d\u7f6e"})," \u7ae0\u8282\u3002"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"<br />mysql:root:12345678@tcp(127.0.0.1:3306)/user<br />"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"group"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"default"})}),(0,s.jsx)(d.td,{children:"\u5728\u6570\u636e\u5e93\u914d\u7f6e\u4e2d\u7684\u6570\u636e\u5e93\u5206\u7ec4\u540d\u79f0\u3002\u53ea\u80fd\u914d\u7f6e\u4e00\u4e2a\u540d\u79f0\u3002"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"default"}),(0,s.jsx)("br",{}),(0,s.jsx)(d.code,{children:"order"}),(0,s.jsx)("br",{}),(0,s.jsx)(d.code,{children:"user"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tables"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"\u6307\u5b9a\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u9700\u8981\u6267\u884c\u4ee3\u7801\u751f\u6210\u7684\u6570\u636e\u8868\u3002\u5982\u679c\u4e3a\u7a7a\uff0c\u8868\u793a\u6570\u636e\u5e93\u7684\u6240\u6709\u8868\u90fd\u4f1a\u751f\u6210\u3002"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"user, userDetail"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tablesEx"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"\u6307\u5b9a\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u9700\u8981\u6392\u9664\u4ee3\u7801\u751f\u6210\u7684\u6570\u636e\u8868\u3002"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"product, order"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"path"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"./app"})}),(0,s.jsxs)(d.td,{children:["\u751f\u6210 ",(0,s.jsx)(d.code,{children:"dao"})," \u548c ",(0,s.jsx)(d.code,{children:"model"})," \u6587\u4ef6\u7684\u5b58\u50a8\u76ee\u5f55\u5730\u5740"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"./app"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"modelFile"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"model.go"})}),(0,s.jsx)(d.td,{children:"\u81ea\u5b9a\u4e49\u751f\u6210\u7684\u6a21\u578b\u6587\u4ef6\u540d\u79f0\u3002"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"entity.go"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"prefix"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"\u751f\u6210\u6570\u636e\u5e93\u5bf9\u8c61\u53ca\u6587\u4ef6\u7684\u524d\u7f00\uff0c\u4ee5\u4fbf\u533a\u5206\u4e0d\u540c\u6570\u636e\u5e93\u6216\u8005\u4e0d\u540c\u6570\u636e\u5e93\u4e2d\u7684\u76f8\u540c\u8868\u540d\uff0c\u9632\u6b62\u6570\u636e\u8868\u540c\u540d\u8986\u76d6\u3002"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"order_"}),(0,s.jsx)("br",{}),(0,s.jsx)(d.code,{children:"user_"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"removePrefix"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"\u5220\u9664\u6570\u636e\u8868\u7684\u6307\u5b9a\u524d\u7f00\u540d\u79f0\u3002"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"gf_"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"jsonCase"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"CamelLower"})}),(0,s.jsxs)(d.td,{children:["\u6307\u5b9a ",(0,s.jsx)(d.code,{children:"model"})," \u4e2d\u751f\u6210\u7684\u6570\u636e\u5b9e\u4f53\u5bf9\u8c61\u4e2d ",(0,s.jsx)(d.code,{children:"json"})," \u6807\u7b7e\u540d\u79f0\u89c4\u5219\uff0c\u53c2\u6570\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002\u53c2\u6570\u53ef\u9009\u4e3a\uff1a ",(0,s.jsx)(d.code,{children:"Camel"}),"\u3001 ",(0,s.jsx)(d.code,{children:"CamelLower"}),"\u3001 ",(0,s.jsx)(d.code,{children:"Snake"}),"\u3001 ",(0,s.jsx)(d.code,{children:"SnakeScreaming"}),"\u3001 ",(0,s.jsx)(d.code,{children:"SnakeFirstUpper"}),"\u3001 ",(0,s.jsx)(d.code,{children:"Kebab"}),"\u3001 ",(0,s.jsx)(d.code,{children:"KebabScreaming"}),"\u3002\u5177\u4f53\u4ecb\u7ecd\u8bf7\u53c2\u8003\u547d\u540d\u884c\u5e2e\u52a9\u793a\u4f8b\u3002"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"CamelLower"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"stdTime"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["\u5f53\u6570\u636e\u8868\u5b57\u6bb5\u7c7b\u578b\u4e3a\u65f6\u95f4\u7c7b\u578b\u65f6\uff0c\u4ee3\u7801\u751f\u6210\u7684\u5c5e\u6027\u7c7b\u578b\u4f7f\u7528\u6807\u51c6\u5e93\u7684 ",(0,s.jsx)(d.code,{children:"time.Time"})," \u800c\u4e0d\u662f\u6846\u67b6\u7684 ",(0,s.jsx)(d.code,{children:"*gtime.Time"})," \u7c7b\u578b\u3002"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"1"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"gJsonSupport"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["\u5f53\u6570\u636e\u8868\u5b57\u6bb5\u7c7b\u578b\u4e3a ",(0,s.jsx)(d.code,{children:"JSON"})," \u7c7b\u578b\u65f6\uff0c\u4ee3\u7801\u751f\u6210\u7684\u5c5e\u6027\u7c7b\u578b\u4f7f\u7528 ",(0,s.jsx)(d.code,{children:"*gjson.Json"})," \u7c7b\u578b\u3002"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"1"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tplDaoIndex"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://github.com/gogf/gf-cli/blob/master/command/gen/gen_dao_template_dao.go",children:"gen_dao_template_dao.go"})}),(0,s.jsxs)(d.td,{children:["\u751f\u6210 ",(0,s.jsx)(d.code,{children:"Dao"})," \u4ee3\u7801\u6587\u4ef6\u6a21\u677f\u5185\u5bb9\u3002"]}),(0,s.jsx)(d.td,{children:"\u8bf7\u67e5\u770b\u4ee3\u7801\u6e90\u6587\u4ef6"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tplDaoInternal"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://github.com/gogf/gf-cli/blob/master/command/gen/gen_dao_template_dao.go",children:"gen_dao_template_dao.go"})}),(0,s.jsxs)(d.td,{children:["\u751f\u6210 ",(0,s.jsx)(d.code,{children:"Dao Internal"})," \u4ee3\u7801\u6587\u4ef6\u6a21\u677f\u5185\u5bb9\u3002"]}),(0,s.jsx)(d.td,{children:"\u8bf7\u67e5\u770b\u4ee3\u7801\u6e90\u6587\u4ef6"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tplModelIndex"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://github.com/gogf/gf-cli/blob/master/command/gen/gen_dao_template_model.go",children:"gen_dao_template_model.go"})}),(0,s.jsxs)(d.td,{children:["\u751f\u6210 ",(0,s.jsx)(d.code,{children:"Model"})," \u4ee3\u7801\u6587\u4ef6\u6a21\u677f\u5185\u5bb9\u3002"]}),(0,s.jsx)(d.td,{children:"\u8bf7\u67e5\u770b\u4ee3\u7801\u6e90\u6587\u4ef6"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tplModelStruct"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://github.com/gogf/gf-cli/blob/master/command/gen/gen_dao_template_model.go",children:"gen_dao_template_model.go"})}),(0,s.jsxs)(d.td,{children:["\u751f\u6210 ",(0,s.jsx)(d.code,{children:"Model Struct"})," \u4ee3\u7801\u6a21\u677f\u5185\u5bb9\u3002"]}),(0,s.jsx)(d.td,{children:"\u8bf7\u67e5\u770b\u4ee3\u7801\u6e90\u6587\u4ef6"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"mod"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["\u7528\u4e8e\u751f\u6210 ",(0,s.jsx)(d.code,{children:"go"})," \u6587\u4ef6\u7684 ",(0,s.jsx)(d.code,{children:"import"})," \u8ba1\u7b97\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u81ea\u52a8\u8bfb\u53d6\u5f53\u524d\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,s.jsx)(d.code,{children:"go.mod"})," \u83b7\u53d6\u3002"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"github.com/gogf/gf-demos"})})]})]})]}),"\n",(0,s.jsx)(d.p,{children:"\u751f\u6210\u7684\u4ee3\u7801\u7ed3\u6784\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{src:"https://goframe.org/download/attachments/1114168/image2020-12-24_17-39-44.png?version=1&modificationDate=1608802784148&api=v2",alt:""})}),"\n",(0,s.jsx)(d.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"dao/internal"}),"\xa0\u4ee5\u53ca ",(0,s.jsx)(d.code,{children:"model/internal"})," \u4e0b\u9762\u7684\u6587\u4ef6\u7531\u5de5\u5177\u751f\u6210\uff0c\u591a\u6b21\u751f\u6210\u4f1a\u88ab\u8986\u76d6\uff0c\u56e0\u6b64\u4e0d\u8981\u624b\u52a8\u4fee\u6539\u3002\u91c7\u7528 ",(0,s.jsx)(d.code,{children:"internal"})," \u5305\u540d\u7684\u76ee\u7684\u662f\u4ec5\u4f5c\u4e3a ",(0,s.jsx)(d.code,{children:"dao"})," \u6216 ",(0,s.jsx)(d.code,{children:"model"})," \u7684\u5185\u90e8\u5305\u5f15\u7528\uff0c\u4e0d\u5bf9\u5916\u5f00\u653e\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"dao"})," \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6 \u53ef\u4ee5\u505a\u4e00\u4e9b\u6570\u636e\u5e93\u7684\u5b9a\u5236\u5316\u64cd\u4f5c\uff0c\u901a\u8fc7\u5de5\u5177\u591a\u6b21\u751f\u6210\u4e0d\u4f1a\u8986\u76d6\uff0c\u4f46\u662f\u66f4\u591a\u5efa\u8bae\u7528\u6237\u5728\u81ea\u5df1\u7684 ",(0,s.jsx)(d.code,{children:"service"})," \u4e2d\u5b9e\u73b0\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"model"})," \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\uff0c\u53ef\u4ee5\u505a\u81ea\u5b9a\u4e49\u7684\u4e00\u4e9b\u6570\u636e\u7ed3\u6784\u5b9a\u4e49\uff0c\u901a\u8fc7\u5de5\u5177\u591a\u6b21\u751f\u6210\u4e0d\u4f1a\u8986\u76d6\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,d,n)=>{n.d(d,{R:()=>i,x:()=>l});var s=n(296540);const r={},t=s.createContext(r);function i(e){const d=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:d},e.children)}}}]);
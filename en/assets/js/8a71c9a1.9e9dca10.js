"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[89748],{706948:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406","title":"ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406","description":"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cORM\u63a5\u53e3\u5f00\u53d1\u65f6\uff0c\u901a\u8fc7\u81ea\u5b9a\u4e49\u56de\u8c03\u5904\u7406\u6765\u5bf9SQL\u8bed\u53e5\u8fdb\u884c\u65e5\u5fd7\u8bb0\u5f55\u6216\u9274\u6743\u3002\u901a\u8fc7\u5b9e\u73b0\u5e76\u8986\u76d6DoQuery\u3001DoExec\u7b49\u63a5\u53e3\u65b9\u6cd5\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6ce8\u5165\u81ea\u5b9a\u4e49\u903b\u8f91\u5230\u9ed8\u8ba4\u5b9e\u73b0\u4e2d\u3002\u793a\u4f8b\u4e2d\u5c55\u793a\u4e86\u5982\u4f55\u81ea\u5b9a\u4e49MySQL\u9a71\u52a8\u4ee5\u8bb0\u5f55\u6267\u884c\u7684SQL\u8bed\u53e5\uff0c\u5e76\u914d\u7f6egdb\u4ee5\u4f7f\u7528\u8be5\u9a71\u52a8\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1","slug":"/docs/core/gdb-interface-callback","permalink":"/en/2.7.x/docs/core/gdb-interface-callback","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406.md","tags":[],"version":"2.7.x","sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gdb-interface-callback","title":"ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","ORM\u63a5\u53e3","SQL\u8bed\u53e5","\u81ea\u5b9a\u4e49\u56de\u8c03","\u65e5\u5fd7\u8bb0\u5f55","\u9274\u6743\u64cd\u4f5c","\u6570\u636e\u5e93\u9a71\u52a8","MySQL\u9a71\u52a8","gdb\u63a5\u53e3","\u6846\u67b6\u8986\u76d6"],"description":"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cORM\u63a5\u53e3\u5f00\u53d1\u65f6\uff0c\u901a\u8fc7\u81ea\u5b9a\u4e49\u56de\u8c03\u5904\u7406\u6765\u5bf9SQL\u8bed\u53e5\u8fdb\u884c\u65e5\u5fd7\u8bb0\u5f55\u6216\u9274\u6743\u3002\u901a\u8fc7\u5b9e\u73b0\u5e76\u8986\u76d6DoQuery\u3001DoExec\u7b49\u63a5\u53e3\u65b9\u6cd5\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6ce8\u5165\u81ea\u5b9a\u4e49\u903b\u8f91\u5230\u9ed8\u8ba4\u5b9e\u73b0\u4e2d\u3002\u793a\u4f8b\u4e2d\u5c55\u793a\u4e86\u5982\u4f55\u81ea\u5b9a\u4e49MySQL\u9a71\u52a8\u4ee5\u8bb0\u5f55\u6267\u884c\u7684SQL\u8bed\u53e5\uff0c\u5e76\u914d\u7f6egdb\u4ee5\u4f7f\u7528\u8be5\u9a71\u52a8\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u63a5\u53e3\u5f00\u53d1","permalink":"/en/2.7.x/docs/core/gdb-interface"},"next":{"title":"ORM\u63a5\u53e3\u5f00\u53d1-\u9a71\u52a8\u5f00\u53d1","permalink":"/en/2.7.x/docs/core/gdb-interface-driver"}}');var t=n(474848),o=n(28453);const s={slug:"/docs/core/gdb-interface-callback",title:"ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406",sidebar_position:0,hide_title:!0,keywords:["GoFrame","ORM\u63a5\u53e3","SQL\u8bed\u53e5","\u81ea\u5b9a\u4e49\u56de\u8c03","\u65e5\u5fd7\u8bb0\u5f55","\u9274\u6743\u64cd\u4f5c","\u6570\u636e\u5e93\u9a71\u52a8","MySQL\u9a71\u52a8","gdb\u63a5\u53e3","\u6846\u67b6\u8986\u76d6"],description:"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cORM\u63a5\u53e3\u5f00\u53d1\u65f6\uff0c\u901a\u8fc7\u81ea\u5b9a\u4e49\u56de\u8c03\u5904\u7406\u6765\u5bf9SQL\u8bed\u53e5\u8fdb\u884c\u65e5\u5fd7\u8bb0\u5f55\u6216\u9274\u6743\u3002\u901a\u8fc7\u5b9e\u73b0\u5e76\u8986\u76d6DoQuery\u3001DoExec\u7b49\u63a5\u53e3\u65b9\u6cd5\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6ce8\u5165\u81ea\u5b9a\u4e49\u903b\u8f91\u5230\u9ed8\u8ba4\u5b9e\u73b0\u4e2d\u3002\u793a\u4f8b\u4e2d\u5c55\u793a\u4e86\u5982\u4f55\u81ea\u5b9a\u4e49MySQL\u9a71\u52a8\u4ee5\u8bb0\u5f55\u6267\u884c\u7684SQL\u8bed\u53e5\uff0c\u5e76\u914d\u7f6egdb\u4ee5\u4f7f\u7528\u8be5\u9a71\u52a8\u3002"},c=void 0,d={},l=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function a(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(r.p,{children:["\u81ea\u5b9a\u4e49\u56de\u8c03\u5904\u7406\u662f\u6700\u5e38\u89c1\u7684\u63a5\u53e3\u5f00\u53d1\u5b9e\u73b0\uff0c\u5f00\u53d1\u4e2d\u53ea\u9700\u8981\u5bf9\u63a5\u53e3\u4e2d\u7684\u90e8\u5206\u65b9\u6cd5\u8fdb\u884c ",(0,t.jsx)(r.strong,{children:"\u66ff\u6362\u4e0e\u4fee\u6539"}),"\uff0c\u5728\u9a71\u52a8\u9ed8\u8ba4\u5b9e\u73b0\u903b\u8f91\u4e2d\u6ce8\u5165\u81ea\u5b9a\u4e49\u903b\u8f91\u3002\u53c2\u8003\u63a5\u53e3\u5173\u7cfb\u56fe\uff08 ",(0,t.jsx)(r.a,{href:"/en/2.7.x/docs/core/gdb-interface",children:"ORM\u63a5\u53e3\u5f00\u53d1"}),"\uff09\u6211\u4eec\u53ef\u4ee5\u77e5\u9053\uff0c\u6240\u6709\u7684 ",(0,t.jsx)(r.code,{children:"SQL"})," \u8bed\u53e5\u6267\u884c\u5fc5\u5b9a\u4f1a\u901a\u8fc7 ",(0,t.jsx)(r.code,{children:"DoQuery"})," \u6216\u8005 ",(0,t.jsx)(r.code,{children:"DoExec"})," \u6216\u8005 ",(0,t.jsx)(r.code,{children:"DoFilter"})," \u63a5\u53e3\uff0c\u6839\u636e\u9700\u6c42\u5728\u81ea\u5b9a\u4e49\u7684\u9a71\u52a8\u4e2d ",(0,t.jsx)(r.strong,{children:"\u5b9e\u73b0\u5e76\u8986\u76d6"})," \u76f8\u5173\u63a5\u53e3\u65b9\u6cd5\u5b9e\u73b0\u6240\u9700\u529f\u80fd\u5373\u53ef\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u5176\u4e2d\uff0c\u6700\u957f\u89c1\u7684\u4f7f\u7528\u573a\u666f\u662f\u5728 ",(0,t.jsx)(r.code,{children:"ORM"})," \u5e95\u5c42\u5b9e\u73b0\u5bf9 ",(0,t.jsx)(r.code,{children:"SQL"})," \u7684 ",(0,t.jsx)(r.strong,{children:"\u65e5\u5fd7\u8bb0\u5f55\u6216\u8005\u9274\u6743\u7b49\u7edf\u4e00\u5224\u65ad\u64cd\u4f5c"}),"\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,t.jsxs)(r.p,{children:["\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u56de\u8c03\u5904\u7406\u7684\u793a\u4f8b\uff0c\u73b0\u9700\u8981\u5c06\u6240\u6709\u6267\u884c\u7684 ",(0,t.jsx)(r.code,{children:"SQL"})," \u8bed\u53e5\u8bb0\u5f55\u5230 ",(0,t.jsx)(r.code,{children:"monitor"})," \u8868\u4e2d\uff0c\u4ee5\u65b9\u4fbf\u4e8e\u8fdb\u884c ",(0,t.jsx)(r.code,{children:"SQL"})," \u5ba1\u8ba1\u3002\u56e0\u6b64\u901a\u8fc7\u81ea\u5b9a\u4e49 ",(0,t.jsx)(r.code,{children:"Driver"})," \u7136\u540e\u8986\u76d6 ",(0,t.jsx)(r.code,{children:"ORM"})," \u7684\u5e95\u5c42\u63a5\u53e3\u65b9\u6cd5\u6765\u5b9e\u73b0\u662f\u6700\u7b80\u5355\u7684\u3002\u4e3a\u7b80\u5316\u793a\u4f8b\u7f16\u5199\uff0c\u4ee5\u4e0b\u4ee3\u7801\u5b9e\u73b0\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 ",(0,t.jsx)(r.code,{children:"MySQL"})," \u9a71\u52a8\uff0c\u8be5\u9a71\u52a8\u7ee7\u627f\u4e8e ",(0,t.jsx)(r.code,{children:"drivers"})," \u4e0b ",(0,t.jsx)(r.code,{children:"mysql"})," \u6a21\u5757\u5185\u5df2\u7ecf\u5b9e\u73b0\u7684 ",(0,t.jsx)(r.code,{children:"Driver"}),"\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'package driver\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/contrib/drivers/mysql/v2"\n    "github.com/gogf/gf/v2/database/gdb"\n    "github.com/gogf/gf/v2/os/gtime"\n)\n\n// MyDriver is a custom database driver, which is used for testing only.\n// For simplifying the unit testing case purpose, MyDriver struct inherits the mysql driver\n// gdb.Driver and overwrites its functions DoQuery and DoExec.\n// So if there\'s any sql execution, it goes through MyDriver.DoQuery/MyDriver.DoExec firstly\n// and then gdb.Driver.DoQuery/gdb.Driver.DoExec.\n// You can call it sql "HOOK" or "HiJack" as your will.\ntype MyDriver struct {\n    *mysql.Driver\n}\n\nvar (\n    // customDriverName is my driver name, which is used for registering.\n    customDriverName = "MyDriver"\n)\n\nfunc init() {\n    // It here registers my custom driver in package initialization function "init".\n    // You can later use this type in the database configuration.\n    if err := gdb.Register(customDriverName, &MyDriver{}); err != nil {\n        panic(err)\n    }\n}\n\n// New creates and returns a database object for mysql.\n// It implements the interface of gdb.Driver for extra database driver installation.\nfunc (d *MyDriver) New(core *gdb.Core, node *gdb.ConfigNode) (gdb.DB, error) {\n    return &MyDriver{\n        &mysql.Driver{\n            Core: core,\n        },\n    }, nil\n}\n\n// DoCommit commits current sql and arguments to underlying sql driver.\nfunc (d *MyDriver) DoCommit(ctx context.Context, in gdb.DoCommitInput) (out gdb.DoCommitOutput, err error) {\n    tsMilliStart := gtime.TimestampMilli()\n    out, err = d.Core.DoCommit(ctx, in)\n    tsMilliFinished := gtime.TimestampMilli()\n    _, _ = in.Link.ExecContext(ctx,\n        "INSERT INTO `monitor`(`sql`,`cost`,`time`,`error`) VALUES(?,?,?,?)",\n        gdb.FormatSqlWithArgs(in.Sql, in.Args),\n        tsMilliFinished-tsMilliStart,\n        gtime.Now(),\n        err,\n    )\n    return\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["\u6211\u4eec\u770b\u5230\uff0c\u8fd9\u91cc\u5728\u5305\u521d\u59cb\u5316\u65b9\u6cd5 ",(0,t.jsx)(r.code,{children:"init"})," \u4e2d\u4f7f\u7528\u4e86 ",(0,t.jsx)(r.code,{children:'gdb.Register("MyDriver", &MyDriver{})'})," \u6765\u6ce8\u518c\u4e86\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u540d\u79f0\u7684\u9a71\u52a8\u3002\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(r.code,{children:'gdb.Register("mysql", &MyDriver{})'})," \u6765\u8986\u76d6\u5df2\u6709\u7684\u6846\u67b6 ",(0,t.jsx)(r.code,{children:"mysql"})," \u9a71\u52a8\u4e3a\u81ea\u5df1\u7684\u9a71\u52a8\u3002"]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["\u9a71\u52a8\u540d\u79f0 ",(0,t.jsx)(r.code,{children:"mysql"})," \u4e3a\u6846\u67b6\u9ed8\u8ba4\u7684 ",(0,t.jsx)(r.code,{children:"DriverMysql"})," \u9a71\u52a8\u7684\u540d\u79f0\u3002"]})}),"\n",(0,t.jsxs)(r.p,{children:["\u7531\u4e8e\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u4e86\u4e00\u4e2a\u65b0\u7684\u9a71\u52a8\u540d\u79f0 ",(0,t.jsx)(r.code,{children:"MyDriver"}),"\uff0c\u56e0\u6b64\u5728 ",(0,t.jsx)(r.code,{children:"gdb"})," \u914d\u7f6e\u4e2d\u7684 ",(0,t.jsx)(r.code,{children:"type"})," \u6570\u636e\u5e93\u7c7b\u578b\u65f6\uff0c\u9700\u8981\u586b\u5199\u8be5\u9a71\u52a8\u540d\u79f0\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f7f\u7528\u914d\u7f6e\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'database:\n  default:\n  - link: "MyDriver:root:12345678@tcp(127.0.0.1:3306)/user"\n'})}),"\n",(0,t.jsx)(r.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(r.p,{children:["\u5728\u63a5\u53e3\u65b9\u6cd5\u5b9e\u73b0\u4e2d\uff0c\u9700\u8981\u4f7f\u7528\u63a5\u53e3\u7684 ",(0,t.jsx)(r.code,{children:"Link"})," \u8f93\u5165\u5bf9\u8c61\u53c2\u6570\u6765\u64cd\u4f5c\u6570\u636e\u5e93\uff0c\u5982\u679c\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"g.DB"})," \u65b9\u6cd5\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u6765\u64cd\u4f5c\u53ef\u80fd\u4f1a\u5f15\u8d77\u6b7b\u9501\u95ee\u9898\u3002"]})]})}function g(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var i=n(296540);const t={},o=i.createContext(t);function s(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);
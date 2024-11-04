"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[97801],{45173:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>x,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406-\u5d4c\u5957\u4e8b\u52a1","title":"ORM\u4e8b\u52a1\u5904\u7406-\u5d4c\u5957\u4e8b\u52a1","description":"\u4ece GoFrame ORM \u652f\u6301\u6570\u636e\u5e93\u5d4c\u5957\u4e8b\u52a1\uff0c\u5d4c\u5957\u4e8b\u52a1\u5728\u4e1a\u52a1\u9879\u76ee\u4e2d\u7528\u5f97\u6bd4\u8f83\u591a\uff0c\u7279\u522b\u662f\u4e1a\u52a1\u6a21\u5757\u4e4b\u95f4\u7684\u76f8\u4e92\u8c03\u7528\uff0c\u4fdd\u8bc1\u5404\u4e2a\u4e1a\u52a1\u6a21\u5757\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u5904\u4e8e\u4e00\u4e2a\u4e8b\u52a1\u4e2d\uff0c\u5176\u539f\u7406\u662f\u901a\u8fc7\u4f20\u9012\u7684 context \u4e0a\u4e0b\u6587\u6765\u9690\u5f0f\u4f20\u9012\u548c\u5173\u8054\u540c\u4e00\u4e2a\u4e8b\u52a1\u5bf9\u8c61\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6570\u636e\u5e93\u670d\u52a1\u5f80\u5f80\u5e76\u4e0d\u652f\u6301\u5d4c\u5957\u4e8b\u52a1\uff0c\u800c\u662f\u4f9d\u9760 ORM \u7ec4\u4ef6\u5c42\u901a\u8fc7 Transaction Save Point \u7279\u6027\u5b9e\u73b0\u7684\u3002\u540c\u6837\u7684\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 Transaction \u95ed\u5305\u65b9\u6cd5\u6765\u5b9e\u73b0\u5d4c\u5957\u4e8b\u52a1\u64cd\u4f5c\u3002\u4e3a\u4e86\u4fdd\u8bc1\u6587\u6863\u7684\u5b8c\u6574\u6027\uff0c\u56e0\u6b64\u6211\u4eec\u8fd9\u91cc\u4ecd\u7136\u4ece\u6700\u57fa\u672c\u7684\u4e8b\u52a1\u64cd\u4f5c\u65b9\u6cd5\u5f00\u59cb\u6765\u4ecb\u7ecd\u5d4c\u5957\u4e8b\u52a1\u64cd\u4f5c\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406-\u5d4c\u5957\u4e8b\u52a1.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406","slug":"/docs/core/gdb-transaction-nested","permalink":"/en/docs/core/gdb-transaction-nested","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406-\u5d4c\u5957\u4e8b\u52a1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/core/gdb-transaction-nested","title":"ORM\u4e8b\u52a1\u5904\u7406-\u5d4c\u5957\u4e8b\u52a1","sidebar_position":2,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"ORM\u4e8b\u52a1\u5904\u7406-\u95ed\u5305\u64cd\u4f5c","permalink":"/en/docs/core/gdb-transaction-closure"},"next":{"title":"ORM\u7ed3\u679c\u5904\u7406","permalink":"/en/docs/core/gdb-result"}}');var i=r(74848),c=r(28453);const d={slug:"/docs/core/gdb-transaction-nested",title:"ORM\u4e8b\u52a1\u5904\u7406-\u5d4c\u5957\u4e8b\u52a1",sidebar_position:2,hide_title:!0},s=void 0,a={},o=[{value:"\u4e00\u3001\u793a\u4f8bSQL",id:"\u4e00\u793a\u4f8bsql",level:2},{value:"\u4e8c\u3001\u5e38\u89c4\u64cd\u4f5c\uff08\u4e0d\u63a8\u8350\uff09",id:"\u4e8c\u5e38\u89c4\u64cd\u4f5c\u4e0d\u63a8\u8350",level:2},{value:"1\u3001 <code>db.Begin</code> \u4e0e <code>tx.Begin</code>",id:"1-dbbegin-\u4e0e-txbegin",level:3},{value:"2\u3001\u66f4\u8be6\u7ec6\u7684\u65e5\u5fd7",id:"2\u66f4\u8be6\u7ec6\u7684\u65e5\u5fd7",level:3},{value:"\u4e09\u3001\u95ed\u5305\u64cd\u4f5c(\u63a8\u8350)",id:"\u4e09\u95ed\u5305\u64cd\u4f5c\u63a8\u8350",level:2},{value:"\u56db\u3001 <code>SavePoint/RollbackTo</code>",id:"\u56db-savepointrollbackto",level:2},{value:"\u4e94\u3001\u5d4c\u5957\u4e8b\u52a1\u5728\u5de5\u7a0b\u4e2d\u7684\u53c2\u8003\u793a\u4f8b",id:"\u4e94\u5d4c\u5957\u4e8b\u52a1\u5728\u5de5\u7a0b\u4e2d\u7684\u53c2\u8003\u793a\u4f8b",level:2},{value:"<code>controller</code>",id:"controller",level:3},{value:"<code>service</code>",id:"service",level:3},{value:"<code>dao</code>",id:"dao",level:3}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u4ece ",(0,i.jsx)(n.code,{children:"GoFrame ORM"})," \u652f\u6301\u6570\u636e\u5e93\u5d4c\u5957\u4e8b\u52a1\uff0c\u5d4c\u5957\u4e8b\u52a1\u5728\u4e1a\u52a1\u9879\u76ee\u4e2d\u7528\u5f97\u6bd4\u8f83\u591a\uff0c\u7279\u522b\u662f\u4e1a\u52a1\u6a21\u5757\u4e4b\u95f4\u7684\u76f8\u4e92\u8c03\u7528\uff0c\u4fdd\u8bc1\u5404\u4e2a\u4e1a\u52a1\u6a21\u5757\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u5904\u4e8e\u4e00\u4e2a\u4e8b\u52a1\u4e2d\uff0c\u5176\u539f\u7406\u662f\u901a\u8fc7\u4f20\u9012\u7684 ",(0,i.jsx)(n.code,{children:"context"})," \u4e0a\u4e0b\u6587\u6765\u9690\u5f0f\u4f20\u9012\u548c\u5173\u8054\u540c\u4e00\u4e2a\u4e8b\u52a1\u5bf9\u8c61\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6570\u636e\u5e93\u670d\u52a1\u5f80\u5f80\u5e76\u4e0d\u652f\u6301\u5d4c\u5957\u4e8b\u52a1\uff0c\u800c\u662f\u4f9d\u9760 ",(0,i.jsx)(n.code,{children:"ORM"})," \u7ec4\u4ef6\u5c42\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"Transaction Save Point"})," \u7279\u6027\u5b9e\u73b0\u7684\u3002\u540c\u6837\u7684\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"Transaction"})," \u95ed\u5305\u65b9\u6cd5\u6765\u5b9e\u73b0\u5d4c\u5957\u4e8b\u52a1\u64cd\u4f5c\u3002\u4e3a\u4e86\u4fdd\u8bc1\u6587\u6863\u7684\u5b8c\u6574\u6027\uff0c\u56e0\u6b64\u6211\u4eec\u8fd9\u91cc\u4ecd\u7136\u4ece\u6700\u57fa\u672c\u7684\u4e8b\u52a1\u64cd\u4f5c\u65b9\u6cd5\u5f00\u59cb\u6765\u4ecb\u7ecd\u5d4c\u5957\u4e8b\u52a1\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4e00\u793a\u4f8bsql",children:"\u4e00\u3001\u793a\u4f8bSQL"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b ",(0,i.jsx)(n.code,{children:"SQL"}),"\uff0c\u5305\u542b\u4e24\u4e2a\u5b57\u6bb5 ",(0,i.jsx)(n.code,{children:"id"})," \u548c ",(0,i.jsx)(n.code,{children:"name"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `user` (\n  `id` int(10) unsigned NOT NULL COMMENT '\u7528\u6237ID',\n  `name` varchar(45) NOT NULL COMMENT '\u7528\u6237\u540d\u79f0',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4e8c\u5e38\u89c4\u64cd\u4f5c\u4e0d\u63a8\u8350",children:"\u4e8c\u3001\u5e38\u89c4\u64cd\u4f5c\uff08\u4e0d\u63a8\u8350\uff09"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'db := g.DB()\n\ntx, err := db.Begin()\nif err != nil {\n    panic(err)\n}\nif err = tx.Begin(); err != nil {\n    panic(err)\n}\n_, err = tx.Model(table).Data(g.Map{"id": 1, "name": "john"}).Insert()\nif err = tx.Rollback(); err != nil {\n    panic(err)\n}\n_, err = tx.Model(table).Data(g.Map{"id": 2, "name": "smith"}).Insert()\nif err = tx.Commit(); err != nil {\n    panic(err)\n}\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"1-dbbegin-\u4e0e-txbegin",children:["1\u3001 ",(0,i.jsx)(n.code,{children:"db.Begin"})," \u4e0e ",(0,i.jsx)(n.code,{children:"tx.Begin"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u6211\u4eec\u7684\u5d4c\u5957\u4e8b\u52a1\u4e2d\u51fa\u73b0\u4e86 ",(0,i.jsx)(n.code,{children:"db.Begin"})," \u548c ",(0,i.jsx)(n.code,{children:"tx.Begin"})," \u4e24\u79cd\u4e8b\u52a1\u5f00\u542f\u65b9\u5f0f\uff0c\u4e24\u8005\u6709\u4ec0\u4e48\u533a\u522b\u5462\uff1f ",(0,i.jsx)(n.code,{children:"db.Begin"})," \u662f\u5728\u6570\u636e\u5e93\u670d\u52a1\u4e0a\u771f\u6b63\u5f00\u542f\u4e00\u4e2a\u4e8b\u52a1\u64cd\u4f5c\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u4e8b\u52a1\u64cd\u4f5c\u5bf9\u8c61 ",(0,i.jsx)(n.code,{children:"tx"}),"\uff0c\u968f\u540e\u6240\u6709\u7684\u4e8b\u52a1\u64cd\u4f5c\u90fd\u662f\u901a\u8fc7\u8be5 ",(0,i.jsx)(n.code,{children:"tx"})," \u4e8b\u52a1\u5bf9\u8c61\u6765\u64cd\u4f5c\u7ba1\u7406\u3002 ",(0,i.jsx)(n.code,{children:"tx.Begin"})," \u8868\u793a\u5728\u5f53\u524d\u4e8b\u52a1\u64cd\u4f5c\u4e2d\u5f00\u542f\u5d4c\u5957\u4e8b\u52a1\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u5bf9\u5d4c\u5957\u4e8b\u52a1\u7684 ",(0,i.jsx)(n.code,{children:"SavePoint"})," \u91c7\u7528\u81ea\u52a8\u547d\u540d\uff0c\u547d\u540d\u683c\u5f0f\u4e3a ",(0,i.jsx)(n.code,{children:"transactionN"}),"\uff0c\u5176\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"N"})," \u8868\u793a\u5d4c\u5957\u7684\u5c42\u7ea7\u6570\u91cf\uff0c\u5982\u679c\u60a8\u770b\u5230\u65e5\u5fd7\u4e2d\u51fa\u73b0 ",(0,i.jsx)(n.code,{children:"SAVEPOINT `transaction1` "})," \u8868\u793a\u5f53\u524d\u5d4c\u5957\u5c42\u7ea7\u4e3a ",(0,i.jsx)(n.code,{children:"2"}),"\uff08\u4ece ",(0,i.jsx)(n.code,{children:"0"})," \u5f00\u59cb\u8ba1\u7b97\uff09\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"2\u66f4\u8be6\u7ec6\u7684\u65e5\u5fd7",children:"2\u3001\u66f4\u8be6\u7ec6\u7684\u65e5\u5fd7"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"goframe"})," \u7684 ",(0,i.jsx)(n.code,{children:"ORM"})," \u62e5\u6709\u76f8\u5f53\u5b8c\u5584\u7684\u65e5\u5fd7\u8bb0\u5f55\u673a\u5236\uff0c\u5982\u679c\u60a8\u6253\u5f00 ",(0,i.jsx)(n.code,{children:"SQL"})," \u65e5\u5fd7\uff0c\u90a3\u4e48\u5c06\u4f1a\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u4fe1\u606f\uff0c\u5c55\u793a\u4e86\u6574\u4e2a\u6570\u636e\u5e93\u8bf7\u6c42\u7684\u8be6\u7ec6\u6267\u884c\u6d41\u7a0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"2021-05-22 21:12:10.776 [DEBU] [  4 ms] [default] [txid:1] BEGIN\n2021-05-22 21:12:10.776 [DEBU] [  0 ms] [default] [txid:1] SAVEPOINT `transaction0`\n2021-05-22 21:12:10.789 [DEBU] [ 13 ms] [default] [txid:1] SHOW FULL COLUMNS FROM `user`\n2021-05-22 21:12:10.790 [DEBU] [  1 ms] [default] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-22 21:12:10.791 [DEBU] [  1 ms] [default] [txid:1] ROLLBACK TO SAVEPOINT `transaction0`\n2021-05-22 21:12:10.791 [DEBU] [  0 ms] [default] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')\n2021-05-22 21:12:10.792 [DEBU] [  1 ms] [default] [txid:1] COMMIT\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"[txid:1]"})," \u8868\u793a ",(0,i.jsx)(n.code,{children:"ORM"})," \u7ec4\u4ef6\u8bb0\u5f55\u7684\u4e8b\u52a1ID\uff0c\u591a\u4e2a\u771f\u5b9e\u7684\u4e8b\u52a1\u540c\u65f6\u64cd\u4f5c\u65f6\uff0c\u6bcf\u4e2a\u4e8b\u52a1\u7684ID\u5c06\u4f1a\u4e0d\u540c\u3002\u5728\u540c\u4e00\u4e2a\u771f\u5b9e\u4e8b\u52a1\u4e0b\u7684\u5d4c\u5957\u4e8b\u52a1\u7684\u4e8b\u52a1ID\u662f\u4e00\u6837\u7684\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\u67e5\u8be2\u6570\u636e\u5e93\u7ed3\u679c\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select * from `user`;\n+----+-------+\n| id | name  |\n+----+-------+\n|  2 | smith |\n+----+-------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u88ab\u6210\u529f\u56de\u6eda\uff0c\u53ea\u6709\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u6267\u884c\u5e76\u63d0\u4ea4\u6210\u529f\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4e09\u95ed\u5305\u64cd\u4f5c\u63a8\u8350",children:"\u4e09\u3001\u95ed\u5305\u64cd\u4f5c(\u63a8\u8350)"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u95ed\u5305\u64cd\u4f5c\u6765\u5b9e\u73b0\u5d4c\u5957\u4e8b\u52a1\uff0c\u540c\u6837\u4e5f\u662f\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"Transaction"})," \u65b9\u6cd5\u5b9e\u73b0\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'db.Transaction(ctx, func(ctx context.Context, tx gdb.Tx) error {\n    // Nested transaction 1.\n    if err := tx.Transaction(ctx, func(ctx context.Context, tx gdb.Tx) error {\n        _, err := tx.Model(table).Ctx(ctx).Data(g.Map{"id": 1, "name": "john"}).Insert()\n        return err\n    }); err != nil {\n        return err\n    }\n    // Nested transaction 2, panic.\n    if err := tx.Transaction(ctx, func(ctx context.Context, tx gdb.Tx) error {\n        _, err := tx.Model(table).Ctx(ctx).Data(g.Map{"id": 2, "name": "smith"}).Insert()\n        // Create a panic that can make this transaction rollback automatically.\n        panic("error")\n        return err\n    }); err != nil {\n        return err\n    }\n    return nil\n})\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5d4c\u5957\u4e8b\u52a1\u7684\u95ed\u5305\u5d4c\u5957\u4e2d\u4e5f\u53ef\u4ee5\u4e0d\u4f7f\u7528\u5176\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"tx"})," \u5bf9\u8c61\uff0c\u800c\u662f\u76f4\u63a5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"db"})," \u5bf9\u8c61\u6216\u8005 ",(0,i.jsx)(n.code,{children:"dao"})," \u5305\uff0c\u8fd9\u79cd\u65b9\u5f0f\u66f4\u5e38\u89c1\u4e00\u4e9b\u3002\u7279\u522b\u662f\u5728\u65b9\u6cd5\u5c42\u7ea7\u8c03\u7528\u65f6\uff0c\u4f7f\u5f97\u5bf9\u4e8e\u5f00\u53d1\u8005\u6765\u8bf4\u5e76\u4e0d\u7528\u5173\u5fc3 ",(0,i.jsx)(n.code,{children:"tx"})," \u5bf9\u8c61\u7684\u4f20\u9012\uff0c\u4e5f\u5e76\u4e0d\u7528\u5173\u5fc3\u5f53\u524d\u4e8b\u52a1\u662f\u5426\u9700\u8981\u5d4c\u5957\u6267\u884c\uff0c\u4e00\u5207\u90fd\u7531\u7ec4\u4ef6\u81ea\u52a8\u7ef4\u62a4\uff0c\u6781\u5927\u51cf\u5c11\u5f00\u53d1\u8005\u7684\u5fc3\u667a\u8d1f\u62c5\u3002\u4f46\u662f\u52a1\u5fc5\u8bb0\u5f97\u5c06 ",(0,i.jsx)(n.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u5c42\u5c42\u4f20\u9012\u4e0b\u53bb\u54e6\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'db.Transaction(ctx, func(ctx context.Context, tx gdb.Tx) error {\n    // Nested transaction 1.\n    if err := db.Transaction(ctx, func(ctx context.Context, tx gdb.Tx) error {\n        _, err := db.Model(table).Ctx(ctx).Data(g.Map{"id": 1, "name": "john"}).Insert()\n        return err\n    }); err != nil {\n        return err\n    }\n    // Nested transaction 2, panic.\n    if err := db.Transaction(ctx, func(ctx context.Context, tx gdb.Tx) error {\n        _, err := db.Model(table).Ctx(ctx).Data(g.Map{"id": 2, "name": "smith"}).Insert()\n        // Create a panic that can make this transaction rollback automatically.\n        panic("error")\n        return err\n    }); err != nil {\n        return err\n    }\n    return nil\n})\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u6253\u5f00 ",(0,i.jsx)(n.code,{children:"SQL"})," \u65e5\u5fd7\uff0c\u90a3\u4e48\u6267\u884c\u540e\u5c06\u4f1a\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u4fe1\u606f\uff0c\u5c55\u793a\u4e86\u6574\u4e2a\u6570\u636e\u5e93\u8bf7\u6c42\u7684\u8be6\u7ec6\u6267\u884c\u6d41\u7a0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"2021-05-22 21:18:46.672 [DEBU] [  2 ms] [default] [txid:1] BEGIN\n2021-05-22 21:18:46.672 [DEBU] [  0 ms] [default] [txid:1] SAVEPOINT `transaction0`\n2021-05-22 21:18:46.673 [DEBU] [  0 ms] [default] [txid:1] SHOW FULL COLUMNS FROM `user`\n2021-05-22 21:18:46.674 [DEBU] [  0 ms] [default] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-22 21:18:46.674 [DEBU] [  0 ms] [default] [txid:1] RELEASE SAVEPOINT `transaction0`\n2021-05-22 21:18:46.675 [DEBU] [  1 ms] [default] [txid:1] SAVEPOINT `transaction0`\n2021-05-22 21:18:46.675 [DEBU] [  0 ms] [default] [txid:1] INSERT INTO `user`(`name`,`id`) VALUES('smith',2)\n2021-05-22 21:18:46.675 [DEBU] [  0 ms] [default] [txid:1] ROLLBACK TO SAVEPOINT `transaction0`\n2021-05-22 21:18:46.676 [DEBU] [  1 ms] [default] [txid:1] ROLLBACK\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["\u5047\u5982 ",(0,i.jsx)(n.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u6ca1\u6709\u5c42\u5c42\u4f20\u9012\u4e0b\u53bb\uff0c\u90a3\u4e48\u5d4c\u5957\u4e8b\u52a1\u5c06\u4f1a\u5931\u8d25\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u9519\u8bef\u7684\u4f8b\u5b50\uff1a"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'db.Transaction(ctx, func(ctx context.Context, tx gdb.Tx) error {\n    // Nested transaction 1.\n    if err := db.Transaction(ctx, func(ctx context.Context, tx gdb.Tx) error {\n        _, err := db.Model(table).Ctx(ctx).Data(g.Map{"id": 1, "name": "john"}).Insert()\n        return err\n    }); err != nil {\n        return err\n    }\n    // Nested transaction 2, panic.\n    if err := db.Transaction(ctx, func(ctx context.Context, tx gdb.Tx) error {\n        _, err := db.Model(table).Data(g.Map{"id": 2, "name": "smith"}).Insert()\n        // Create a panic that can make this transaction rollback automatically.\n        panic("error")\n        return err\n    }); err != nil {\n        return err\n    }\n    return nil\n})\n'})}),(0,i.jsxs)(n.p,{children:["\u6253\u5f00 ",(0,i.jsx)(n.code,{children:"SQL"})," \u6267\u884c\u65e5\u5fd7\uff0c\u6267\u884c\u540e\uff0c\u60a8\u5c06\u4f1a\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u5185\u5bb9\uff1a"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"2021-05-22 21:29:38.841 [DEBU] [  3 ms] [default] [txid:1] BEGIN\n2021-05-22 21:29:38.842 [DEBU] [  1 ms] [default] [txid:1] SAVEPOINT `transaction0`\n2021-05-22 21:29:38.843 [DEBU] [  1 ms] [default] [txid:1] SHOW FULL COLUMNS FROM `user`\n2021-05-22 21:29:38.845 [DEBU] [  2 ms] [default] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-22 21:29:38.845 [DEBU] [  0 ms] [default] [txid:1] RELEASE SAVEPOINT `transaction0`\n2021-05-22 21:29:38.846 [DEBU] [  1 ms] [default] [txid:1] SAVEPOINT `transaction0`\n2021-05-22 21:29:38.847 [DEBU] [  1 ms] [default] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')\n2021-05-22 21:29:38.848 [DEBU] [  0 ms] [default] [txid:1] ROLLBACK TO SAVEPOINT `transaction0`\n2021-05-22 21:29:38.848 [DEBU] [  0 ms] [default] [txid:1] ROLLBACK\n"})}),(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u7b2c\u4e8c\u6761 ",(0,i.jsx)(n.code,{children:"INSERT"})," \u64cd\u4f5c ",(0,i.jsx)(n.code,{children:"INSERT INTO `user`(`id`,`name`) VALUES(2,'smith') "})," \u6ca1\u6709\u4e8b\u52a1ID\u6253\u5370\uff0c\u8868\u793a\u6ca1\u6709\u4f7f\u7528\u5230\u4e8b\u52a1\uff0c\u90a3\u4e48\u8be5\u64cd\u4f5c\u5c06\u4f1a\u88ab\u771f\u6b63\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u6267\u884c\uff0c\u5e76\u4e0d\u80fd\u88ab\u56de\u6eda\u3002"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"\u56db-savepointrollbackto",children:["\u56db\u3001 ",(0,i.jsx)(n.code,{children:"SavePoint/RollbackTo"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u7075\u6d3b\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"Transaction Save Point"})," \u7279\u6027\uff0c\u5e76\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684 ",(0,i.jsx)(n.code,{children:"SavePoint"})," \u547d\u540d\u4ee5\u53ca\u6307\u5b9a ",(0,i.jsx)(n.code,{children:"Point"})," \u56de\u6eda\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'tx, err := db.Begin()\nif err != nil {\n    panic(err)\n}\ndefer func() {\n    if err := recover(); err != nil {\n        _ = tx.Rollback()\n    }\n}()\nif _, err = tx.Model(table).Data(g.Map{"id": 1, "name": "john"}).Insert(); err != nil {\n    panic(err)\n}\nif err = tx.SavePoint("MyPoint"); err != nil {\n    panic(err)\n}\nif _, err = tx.Model(table).Data(g.Map{"id": 2, "name": "smith"}).Insert(); err != nil {\n    panic(err)\n}\nif _, err = tx.Model(table).Data(g.Map{"id": 3, "name": "green"}).Insert(); err != nil {\n    panic(err)\n}\nif err = tx.RollbackTo("MyPoint"); err != nil {\n    panic(err)\n}\nif err = tx.Commit(); err != nil {\n    panic(err)\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u6253\u5f00 ",(0,i.jsx)(n.code,{children:"SQL"})," \u65e5\u5fd7\uff0c\u90a3\u4e48\u5c06\u4f1a\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u4fe1\u606f\uff0c\u5c55\u793a\u4e86\u6574\u4e2a\u6570\u636e\u5e93\u8bf7\u6c42\u7684\u8be6\u7ec6\u6267\u884c\u6d41\u7a0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"2021-05-22 21:38:51.992 [DEBU] [  3 ms] [default] [txid:1] BEGIN\n2021-05-22 21:38:52.002 [DEBU] [  9 ms] [default] [txid:1] SHOW FULL COLUMNS FROM `user`\n2021-05-22 21:38:52.002 [DEBU] [  0 ms] [default] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-22 21:38:52.003 [DEBU] [  1 ms] [default] [txid:1] SAVEPOINT `MyPoint`\n2021-05-22 21:38:52.004 [DEBU] [  1 ms] [default] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')\n2021-05-22 21:38:52.005 [DEBU] [  1 ms] [default] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(3,'green')\n2021-05-22 21:38:52.006 [DEBU] [  0 ms] [default] [txid:1] ROLLBACK TO SAVEPOINT `MyPoint`\n2021-05-22 21:38:52.006 [DEBU] [  0 ms] [default] [txid:1] COMMIT\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\u67e5\u8be2\u6570\u636e\u5e93\u7ed3\u679c\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select * from `user`;\n+----+------+\n| id | name |\n+----+------+\n|  1 | john |\n+----+------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u901a\u8fc7\u5728\u7b2c\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"Insert"})," \u64cd\u4f5c\u540e\u4fdd\u5b58\u4e86\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"SavePoint"})," \u540d\u79f0 ",(0,i.jsx)(n.code,{children:"MyPoint"}),"\uff0c\u968f\u540e\u7684\u51e0\u6b21\u64cd\u4f5c\u90fd\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"RollbackTo"})," \u65b9\u6cd5\u88ab\u56de\u6eda\u6389\u4e86\uff0c\u56e0\u6b64\u53ea\u6709\u7b2c\u4e00\u6b21 ",(0,i.jsx)(n.code,{children:"Insert"})," \u64cd\u4f5c\u88ab\u6210\u529f\u63d0\u4ea4\u6267\u884c\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4e94\u5d4c\u5957\u4e8b\u52a1\u5728\u5de5\u7a0b\u4e2d\u7684\u53c2\u8003\u793a\u4f8b",children:"\u4e94\u3001\u5d4c\u5957\u4e8b\u52a1\u5728\u5de5\u7a0b\u4e2d\u7684\u53c2\u8003\u793a\u4f8b"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u7b80\u5316\u793a\u4f8b\uff0c\u6211\u4eec\u8fd8\u662f\u4f7f\u7528\u7528\u6237\u6a21\u5757\u76f8\u5173\u7684\u793a\u4f8b\uff0c\u4f8b\u5982\u7528\u6237\u6ce8\u518c\uff0c\u901a\u8fc7\u4e8b\u52a1\u64cd\u4f5c\u4fdd\u5b58\u7528\u6237\u57fa\u672c\u4fe1\u606f( ",(0,i.jsx)(n.code,{children:"user"}),")\u3001\u8be6\u7ec6\u4fe1\u606f( ",(0,i.jsx)(n.code,{children:"user_detail"}),")\u4e24\u4e2a\u8868\uff0c\u4efb\u4e00\u4e2a\u8868\u64cd\u4f5c\u5931\u8d25\u6574\u4e2a\u6ce8\u518c\u64cd\u4f5c\u90fd\u5c06\u5931\u8d25\u3002\u4e3a\u5c55\u793a\u5d4c\u5957\u4e8b\u52a1\u6548\u679c\uff0c\u6211\u4eec\u5c06\u7528\u6237\u57fa\u672c\u4fe1\u606f\u7ba1\u7406\u548c\u7528\u6237\u8be6\u7ec6\u4fe1\u606f\u7ba1\u7406\u5212\u5206\u4e3a\u4e86\u4e24\u4e2a ",(0,i.jsx)(n.code,{children:"dao"})," \u5bf9\u8c61\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5047\u5982\u6211\u4eec\u7684\u9879\u76ee\u6309\u7167 ",(0,i.jsx)(n.code,{children:"goframe"})," \u6807\u51c6\u9879\u76ee\u5de5\u7a0b\u5316\u5206\u4e3a\u4e09\u5c42 ",(0,i.jsx)(n.code,{children:"api-service-dao"}),"\uff0c\u90a3\u4e48\u6211\u4eec\u7684\u5d4c\u5957\u4e8b\u52a1\u64cd\u4f5c\u53ef\u80fd\u662f\u8fd9\u6837\u7684\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"controller",children:(0,i.jsx)(n.code,{children:"controller"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// \u7528\u6237\u6ce8\u518cHTTP\u63a5\u53e3\nfunc (*cUser) Signup(r *ghttp.Request) {\n    // ....\n    service.User().Signup(r.Context(), userServiceSignupReq)\n    // ...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u627f\u63a5HTTP\u8bf7\u6c42\uff0c\u5e76\u4e14\u5c06 ",(0,i.jsx)(n.code,{children:"Context"})," \u4e0a\u4e0b\u6587\u8fb9\u53d8\u91cf\u4f20\u9012\u7ed9\u540e\u7eed\u7684\u6d41\u7a0b\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"service",children:(0,i.jsx)(n.code,{children:"service"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// \u7528\u6237\u6ce8\u518c\u4e1a\u52a1\u903b\u8f91\u5904\u7406\nfunc (*userService) Signup(ctx context.Context, r *model.UserServiceSignupReq) {\n    // ....\n    dao.User.Transaction(ctx, func(ctx context.Context, tx gdb.Tx) error {\n        err := dao.User.Ctx(ctx).Save(r.UserInfo)\n        if err != nil {\n            return err\n        }\n        err := dao.UserDetail.Ctx(ctx).Save(r.UserDetail)\n        if err != nil {\n            return err\n        }\n        return nil\n    })\n    // ...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5185\u90e8\u7684 ",(0,i.jsx)(n.code,{children:"user"})," \u8868\u548c ",(0,i.jsx)(n.code,{children:"user_detail"})," \u8868\u4f7f\u7528\u4e86\u5d4c\u5957\u4e8b\u52a1\u6765\u7edf\u4e00\u6267\u884c\u4e8b\u52a1\u64cd\u4f5c\u3002\u6ce8\u610f\u5728\u95ed\u5305\u5185\u90e8\u9700\u8981\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"Ctx"})," \u65b9\u6cd5\u5c06\u4e0a\u4e0b\u6587\u53d8\u91cf\u4f20\u9012\u7ed9\u4e0b\u4e00\u5c42\u7ea7\u3002\u5047\u5982\u5728\u95ed\u5305\u4e2d\u5b58\u5728\u5bf9\u5176\u4ed6 ",(0,i.jsx)(n.code,{children:"service"})," \u5bf9\u8c61\u7684\u8c03\u7528\uff0c\u90a3\u4e48\u4e5f\u9700\u8981\u5c06 ",(0,i.jsx)(n.code,{children:"ctx"})," \u53d8\u91cf\u4f20\u9012\u8fc7\u53bb\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func (*userService) Signup(ctx context.Context, r *model.UserServiceSignupReq) {\n    // ....\n    dao.User.Transaction(ctx, func(ctx context.Context, tx gdb.Tx) (err error) {\n        if err = dao.User.Ctx(ctx).Save(r.UserInfo); err != nil {\n            return err\n        }\n        if err = dao.UserDetail.Ctx(ctx).Save(r.UserDetail); err != nil {\n            return err\n        }\n        if err = service.XXXA().Call(ctx, ...); err != nil {\n            return err\n        }\n        if err = service.XXXB().Call(ctx, ...); err != nil {\n            return err\n        }\n        if err = service.XXXC().Call(ctx, ...); err != nil {\n            return err\n        }\n        // ...\n        return nil\n    })\n    // ...\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"dao",children:(0,i.jsx)(n.code,{children:"dao"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dao"})," \u5c42\u7684\u4ee3\u7801\u7531 ",(0,i.jsx)(n.code,{children:"goframe cli"})," \u5de5\u5177\u5168\u81ea\u52a8\u5316\u751f\u6210\u53ca\u7ef4\u62a4\u5373\u53ef\u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>s});var t=r(96540);const i={},c=t.createContext(i);function d(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);
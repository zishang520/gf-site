"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[94269],{939907:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>s,toc:()=>g});const s=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e/ORM\u4f7f\u7528\u914d\u7f6e-\u914d\u7f6e\u65b9\u6cd5","title":"ORM\u4f7f\u7528\u914d\u7f6e-\u914d\u7f6e\u65b9\u6cd5","description":"\u5728GoFrame\u6846\u67b6\u4e2d\u914d\u7f6e\u7ba1\u7406gdb\u6570\u636e\u5e93\u6a21\u5757\u3002\u4e3b\u8981\u6db5\u76d6\u4e86\u6570\u636e\u7ed3\u6784\u8bbe\u8ba1\u3001\u914d\u7f6e\u7279\u70b9\u3001\u4ee5\u53ca\u5177\u4f53\u7684\u914d\u7f6e\u65b9\u6cd5\u3002\u901a\u8fc7\u914d\u7f6eConfigNode\u548cConfigGroup\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u7075\u6d3b\u5730\u7ba1\u7406\u591a\u8282\u70b9\u6570\u636e\u5e93\u96c6\u7fa4\uff0c\u5b9e\u73b0\u9ad8\u6548\u7684\u8d1f\u8f7d\u5747\u8861\u548c\u8bfb\u5199\u5206\u79bb\u3002\u6b64\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u9ed8\u8ba4\u7684\u5206\u7ec4\u548c\u81ea\u5b9a\u4e49\u5168\u5c40\u914d\u7f6e\u7684\u793a\u4f8b\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e/ORM\u4f7f\u7528\u914d\u7f6e-\u914d\u7f6e\u65b9\u6cd5.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e","slug":"/docs/core/gdb-config-funcs","permalink":"/2.7.x/docs/core/gdb-config-funcs","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e/ORM\u4f7f\u7528\u914d\u7f6e-\u914d\u7f6e\u65b9\u6cd5.md","tags":[],"version":"2.7.x","sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gdb-config-funcs","title":"ORM\u4f7f\u7528\u914d\u7f6e-\u914d\u7f6e\u65b9\u6cd5","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","ORM\u4f7f\u7528\u914d\u7f6e","\u6570\u636e\u5e93\u8282\u70b9\u7ba1\u7406","\u8fde\u63a5\u5c5e\u6027\u914d\u7f6e","\u6570\u636e\u5e93\u96c6\u7fa4","\u5173\u7cfb\u578b\u6570\u636e\u5e93","\u8bfb\u5199\u5206\u79bb","\u8d1f\u8f7d\u5747\u8861","\u914d\u7f6e\u7ba1\u7406\u7279\u70b9","GoFrame\u6846\u67b6"],"description":"\u5728GoFrame\u6846\u67b6\u4e2d\u914d\u7f6e\u7ba1\u7406gdb\u6570\u636e\u5e93\u6a21\u5757\u3002\u4e3b\u8981\u6db5\u76d6\u4e86\u6570\u636e\u7ed3\u6784\u8bbe\u8ba1\u3001\u914d\u7f6e\u7279\u70b9\u3001\u4ee5\u53ca\u5177\u4f53\u7684\u914d\u7f6e\u65b9\u6cd5\u3002\u901a\u8fc7\u914d\u7f6eConfigNode\u548cConfigGroup\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u7075\u6d3b\u5730\u7ba1\u7406\u591a\u8282\u70b9\u6570\u636e\u5e93\u96c6\u7fa4\uff0c\u5b9e\u73b0\u9ad8\u6548\u7684\u8d1f\u8f7d\u5747\u8861\u548c\u8bfb\u5199\u5206\u79bb\u3002\u6b64\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u9ed8\u8ba4\u7684\u5206\u7ec4\u548c\u81ea\u5b9a\u4e49\u5168\u5c40\u914d\u7f6e\u7684\u793a\u4f8b\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u4f7f\u7528\u914d\u7f6e-\u914d\u7f6e\u6587\u4ef6","permalink":"/2.7.x/docs/core/gdb-config-file"},"next":{"title":"ORM\u4f7f\u7528\u914d\u7f6e-\u5e38\u89c1\u95ee\u9898","permalink":"/2.7.x/docs/core/gdb-config-faq"}}');var i=o(474848),r=o(28453);const t={slug:"/docs/core/gdb-config-funcs",title:"ORM\u4f7f\u7528\u914d\u7f6e-\u914d\u7f6e\u65b9\u6cd5",sidebar_position:1,hide_title:!0,keywords:["GoFrame","ORM\u4f7f\u7528\u914d\u7f6e","\u6570\u636e\u5e93\u8282\u70b9\u7ba1\u7406","\u8fde\u63a5\u5c5e\u6027\u914d\u7f6e","\u6570\u636e\u5e93\u96c6\u7fa4","\u5173\u7cfb\u578b\u6570\u636e\u5e93","\u8bfb\u5199\u5206\u79bb","\u8d1f\u8f7d\u5747\u8861","\u914d\u7f6e\u7ba1\u7406\u7279\u70b9","GoFrame\u6846\u67b6"],description:"\u5728GoFrame\u6846\u67b6\u4e2d\u914d\u7f6e\u7ba1\u7406gdb\u6570\u636e\u5e93\u6a21\u5757\u3002\u4e3b\u8981\u6db5\u76d6\u4e86\u6570\u636e\u7ed3\u6784\u8bbe\u8ba1\u3001\u914d\u7f6e\u7279\u70b9\u3001\u4ee5\u53ca\u5177\u4f53\u7684\u914d\u7f6e\u65b9\u6cd5\u3002\u901a\u8fc7\u914d\u7f6eConfigNode\u548cConfigGroup\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u7075\u6d3b\u5730\u7ba1\u7406\u591a\u8282\u70b9\u6570\u636e\u5e93\u96c6\u7fa4\uff0c\u5b9e\u73b0\u9ad8\u6548\u7684\u8d1f\u8f7d\u5747\u8861\u548c\u8bfb\u5199\u5206\u79bb\u3002\u6b64\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u9ed8\u8ba4\u7684\u5206\u7ec4\u548c\u81ea\u5b9a\u4e49\u5168\u5c40\u914d\u7f6e\u7684\u793a\u4f8b\u3002"},d=void 0,c={},g=[{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:2},{value:"\u914d\u7f6e\u65b9\u6cd5",id:"\u914d\u7f6e\u65b9\u6cd5",level:2}];function l(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u4e3a\u6570\u636e\u5e93\u5e95\u5c42\u7ba1\u7406\u914d\u7f6e\u4ecb\u7ecd\uff0c\u5982\u679c\u60a8\u5bf9\u6570\u636e\u5e93\u7684\u5e95\u5c42\u914d\u7f6e\u7ba1\u7406\u6bd4\u8f83\u611f\u5174\u8da3\uff0c\u53ef\u7ee7\u7eed\u9605\u8bfb\u540e\u7eed\u7ae0\u8282\u3002"})}),"\n",(0,i.jsx)(e.h2,{id:"\u6570\u636e\u7ed3\u6784",children:"\u6570\u636e\u7ed3\u6784"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"gdb"})," \u6570\u636e\u5e93\u7ba1\u7406\u6a21\u5757\u7684\u5185\u90e8\u914d\u7f6e\u7ba1\u7406\u6570\u636e\u7ed3\u6784\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"ConfigNode"})," \u7528\u4e8e\u5b58\u50a8\u4e00\u4e2a\u6570\u636e\u5e93\u8282\u70b9\u4fe1\u606f\uff1b ",(0,i.jsx)(e.code,{children:"ConfigGroup"})," \u7528\u4e8e\u7ba1\u7406\u591a\u4e2a\u6570\u636e\u5e93\u8282\u70b9\u7ec4\u6210\u7684\u914d\u7f6e\u5206\u7ec4(\u4e00\u822c\u4e00\u4e2a\u5206\u7ec4\u5bf9\u5e94\u4e00\u4e2a\u4e1a\u52a1\u6570\u636e\u5e93\u96c6\u7fa4)\uff1b ",(0,i.jsx)(e.code,{children:"Config"})," \u7528\u4e8e\u7ba1\u7406\u591a\u4e2a ",(0,i.jsx)(e.code,{children:"ConfigGroup"})," \u914d\u7f6e\u5206\u7ec4\u3002"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u914d\u7f6e\u7ba1\u7406\u7279\u70b9\uff1a"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u652f\u6301\u591a\u8282\u70b9\u6570\u636e\u5e93\u96c6\u7fa4\u7ba1\u7406\uff1b"}),"\n",(0,i.jsx)(e.li,{children:"\u6bcf\u4e2a\u8282\u70b9\u53ef\u4ee5\u5355\u72ec\u914d\u7f6e\u8fde\u63a5\u5c5e\u6027\uff1b"}),"\n",(0,i.jsx)(e.li,{children:"\u91c7\u7528\u5355\u4f8b\u6a21\u5f0f\u7ba1\u7406\u6570\u636e\u5e93\u5b9e\u4f8b\u5316\u5bf9\u8c61\uff1b"}),"\n",(0,i.jsx)(e.li,{children:"\u652f\u6301\u5bf9\u6570\u636e\u5e93\u96c6\u7fa4\u5206\u7ec4\u7ba1\u7406\uff0c\u6309\u7167\u5206\u7ec4\u540d\u79f0\u83b7\u53d6\u5b9e\u4f8b\u5316\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\uff1b"}),"\n",(0,i.jsxs)(e.li,{children:["\u652f\u6301\u591a\u79cd\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\uff0c\u53ef\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"ConfigNode.Type"})," \u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:["\u652f\u6301 ",(0,i.jsx)(e.code,{children:"Master-Slave"})," \u8bfb\u5199\u5206\u79bb\uff0c\u53ef\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"ConfigNode.Role"})," \u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:["\u652f\u6301\u5ba2\u6237\u7aef\u7684\u8d1f\u8f7d\u5747\u8861\u7ba1\u7406\uff0c\u53ef\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"ConfigNode.Weight"})," \u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff0c\u503c\u8d8a\u5927\uff0c\u4f18\u5148\u7ea7\u8d8a\u9ad8\uff1b"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"type Config      map[string]ConfigGroup // \u6570\u636e\u5e93\u914d\u7f6e\u5bf9\u8c61\ntype ConfigGroup []ConfigNode           // \u6570\u636e\u5e93\u5206\u7ec4\u914d\u7f6e\n// \u6570\u636e\u5e93\u914d\u7f6e\u9879(\u4e00\u4e2a\u5206\u7ec4\u914d\u7f6e\u5bf9\u5e94\u591a\u4e2a\u914d\u7f6e\u9879)\ntype ConfigNode  struct {\n    Host             string        // \u5730\u5740\n    Port             string        // \u7aef\u53e3\n    User             string        // \u8d26\u53f7\n    Pass             string        // \u5bc6\u7801\n    Name             string        // \u6570\u636e\u5e93\u540d\u79f0\n    Type             string        // \u6570\u636e\u5e93\u7c7b\u578b\uff1amysql, sqlite, mssql, pgsql, oracle\n    Link             string        // (\u53ef\u9009)\u81ea\u5b9a\u4e49\u94fe\u63a5\u4fe1\u606f\uff0c\u5f53\u8be5\u5b57\u6bb5\u88ab\u8bbe\u7f6e\u503c\u65f6\uff0c\u4ee5\u4e0a\u94fe\u63a5\u5b57\u6bb5(Host,Port,User,Pass,Name)\u5c06\u5931\u6548(\u8be5\u5b57\u6bb5\u662f\u4e00\u4e2a\u6269\u5c55\u529f\u80fd)\n    Extra            string        // (\u53ef\u9009)\u4e0d\u540c\u6570\u636e\u5e93\u7684\u989d\u5916\u7279\u6027\u914d\u7f6e\uff0c\u7531\u5e95\u5c42\u6570\u636e\u5e93driver\u5b9a\u4e49\n    Role             string        // (\u53ef\u9009\uff0c\u9ed8\u8ba4\u4e3amaster)\u6570\u636e\u5e93\u7684\u89d2\u8272\uff0c\u7528\u4e8e\u4e3b\u4ece\u64cd\u4f5c\u5206\u79bb\uff0c\u81f3\u5c11\u9700\u8981\u6709\u4e00\u4e2amaster\uff0c\u53c2\u6570\u503c\uff1amaster, slave\n    Debug            bool          // (\u53ef\u9009)\u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f\n    Charset          string        // (\u53ef\u9009\uff0c\u9ed8\u8ba4\u4e3a utf8)\u7f16\u7801\uff0c\u9ed8\u8ba4\u4e3a utf8\n    Prefix           string        // (\u53ef\u9009)\u8868\u540d\u524d\u7f00\n    Weight           int           // (\u53ef\u9009)\u7528\u4e8e\u8d1f\u8f7d\u5747\u8861\u7684\u6743\u91cd\u8ba1\u7b97\uff0c\u5f53\u96c6\u7fa4\u4e2d\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\u65f6\uff0c\u6743\u91cd\u6ca1\u6709\u4efb\u4f55\u610f\u4e49\n    MaxIdleConnCount int           // (\u53ef\u9009)\u8fde\u63a5\u6c60\u6700\u5927\u95f2\u7f6e\u7684\u8fde\u63a5\u6570\n    MaxOpenConnCount int           // (\u53ef\u9009)\u8fde\u63a5\u6c60\u6700\u5927\u6253\u5f00\u7684\u8fde\u63a5\u6570\n    MaxConnLifetime  time.Duration // (\u53ef\u9009\uff0c\u5355\u4f4d\u79d2)\u8fde\u63a5\u5bf9\u8c61\u53ef\u91cd\u590d\u4f7f\u7528\u7684\u65f6\u95f4\u957f\u5ea6\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u7279\u522b\u8bf4\u660e\uff0c ",(0,i.jsx)(e.code,{children:"gdb"})," \u7684\u914d\u7f6e\u7ba1\u7406\u6700\u5927\u7684 ",(0,i.jsx)(e.strong,{children:"\u7279\u70b9"})," \u662f\uff0c\uff08\u540c\u4e00\u8fdb\u7a0b\u4e2d\uff09\u6240\u6709\u7684\u6570\u636e\u5e93\u96c6\u7fa4\u4fe1\u606f\u90fd\u4f7f\u7528\u540c\u4e00\u4e2a\u914d\u7f6e\u7ba1\u7406\u6a21\u5757\u8fdb\u884c\u7edf\u4e00\u7ef4\u62a4\uff0c ",(0,i.jsx)(e.strong,{children:"\u4e0d\u540c\u4e1a\u52a1\u7684\u6570\u636e\u5e93\u96c6\u7fa4\u914d\u7f6e\u4f7f\u7528\u4e0d\u540c\u7684\u5206\u7ec4\u540d\u79f0"})," \u8fdb\u884c\u914d\u7f6e\u548c\u83b7\u53d6\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u914d\u7f6e\u65b9\u6cd5",children:"\u914d\u7f6e\u65b9\u6cd5"}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u662f\u539f\u751f\u8c03\u7528 ",(0,i.jsx)(e.code,{children:"gdb"})," \u6a21\u5757\u6765\u914d\u7f6e\u7ba1\u7406\u6570\u636e\u5e93\u3002\u5982\u679c\u5f00\u53d1\u8005\u60f3\u8981\u81ea\u884c\u63a7\u5236\u6570\u636e\u5e93\u914d\u7f6e\u7ba1\u7406\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u65b9\u6cd5\u3002\u82e5\u65e0\u9700\u8981\u53ef\u5ffd\u7565\u8be5\u7ae0\u8282\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,i.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"// \u6dfb\u52a0\u4e00\u4e2a\u6570\u636e\u5e93\u8282\u70b9\u5230\u6307\u5b9a\u7684\u5206\u7ec4\u4e2d\nfunc AddConfigNode(group string, node ConfigNode)\n// \u6dfb\u52a0\u4e00\u4e2a\u914d\u7f6e\u5206\u7ec4\u5230\u6570\u636e\u5e93\u914d\u7f6e\u7ba1\u7406\u4e2d(\u540c\u540d\u8986\u76d6)\nfunc AddConfigGroup(group string, nodes ConfigGroup)\n\n// \u6dfb\u52a0\u4e00\u4e2a\u6570\u636e\u5e93\u8282\u70b9\u5230\u9ed8\u8ba4\u7684\u5206\u7ec4\u4e2d(\u9ed8\u8ba4\u4e3adefault\uff0c\u53ef\u4fee\u6539)\nfunc AddDefaultConfigNode(node ConfigNode)\n// \u6dfb\u52a0\u4e00\u4e2a\u914d\u7f6e\u5206\u7ec4\u5230\u6570\u636e\u5e93\u914d\u7f6e\u7ba1\u7406\u4e2d(\u9ed8\u8ba4\u5206\u7ec4\u4e3adefault\uff0c\u53ef\u4fee\u6539)\nfunc AddDefaultConfigGroup(nodes ConfigGroup)\n\n// \u8bbe\u7f6e\u9ed8\u8ba4\u7684\u5206\u7ec4\u540d\u79f0\uff0c\u83b7\u53d6\u9ed8\u8ba4\u6570\u636e\u5e93\u5bf9\u8c61\u65f6\u5c06\u4f1a\u81ea\u52a8\u8bfb\u53d6\u8be5\u5206\u7ec4\u914d\u7f6e\nfunc SetDefaultGroup(groupName string)\n\n// \u8bbe\u7f6e\u6570\u636e\u5e93\u914d\u7f6e\u4e3a\u5b9a\u4e49\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u4f1a\u5c06\u539f\u6709\u914d\u7f6e\u8986\u76d6\nfunc SetConfig(c Config)\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u9ed8\u8ba4\u5206\u7ec4\u8868\u793a\uff0c\u5982\u679c\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u65f6\u4e0d\u6307\u5b9a\u914d\u7f6e\u5206\u7ec4\u540d\u79f0\uff0c\u90a3\u4e48 ",(0,i.jsx)(e.code,{children:"gdb"})," \u9ed8\u8ba4\u8bfb\u53d6\u7684\u914d\u7f6e\u5206\u7ec4\u3002\u4f8b\u5982\uff1a ",(0,i.jsx)(e.code,{children:"gdb.NewByGroup()"})," \u53ef\u83b7\u53d6\u4e00\u4e2a\u9ed8\u8ba4\u5206\u7ec4\u7684\u6570\u636e\u5e93\u5bf9\u8c61\u3002\u7b80\u5355\u7684\u505a\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"gdb"})," \u5305\u7684 ",(0,i.jsx)(e.code,{children:"SetConfig"})," \u914d\u7f6e\u7ba1\u7406\u65b9\u6cd5\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u5e93\u5168\u5c40\u914d\u7f6e\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'gdb.SetConfig(gdb.Config {\n    "default" : gdb.ConfigGroup {\n        gdb.ConfigNode {\n            Host     : "192.168.1.100",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "master",\n            Weight   : 100,\n        },\n        gdb.ConfigNode {\n            Host     : "192.168.1.101",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "slave",\n            Weight   : 100,\n        },\n    },\n    "user-center" : gdb.ConfigGroup {\n        gdb.ConfigNode {\n            Host     : "192.168.1.110",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "master",\n            Weight   : 100,\n        },\n    },\n})\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u968f\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:'gdb.NewByGroup("\u6570\u636e\u5e93\u5206\u7ec4\u540d\u79f0")'})," \u6765\u83b7\u53d6\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\u3002\u8be5\u5bf9\u8c61\u7528\u4e8e\u540e\u7eed\u7684\u6570\u636e\u5e93\u4e00\u7cfb\u5217\u65b9\u6cd5/\u94fe\u5f0f\u64cd\u4f5c\u3002"]})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>t,x:()=>d});var s=o(296540);const i={},r=s.createContext(i);function t(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);
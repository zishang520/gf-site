"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[25785],{218646:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>t,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.9 2019-09-24","title":"v1.9 2019-09-24","description":"GoFrame\u6846\u67b6\u53d1\u5e03v1.9\u7248\u672c\uff0c\u5305\u542b\u91cd\u8981\u7684\u65b0\u7279\u6027\u548c\u529f\u80fd\u6539\u8fdb\u3002\u65b0\u589e\u4e86gf\u547d\u4ee4\u884c\u5de5\u5177\u3001gres\u8d44\u6e90\u7ba1\u7406\u5668\u548cgsession\u6a21\u5757\u7b49\uff0c\u5e76\u542f\u7528\u66f4\u4fbf\u6377\u7684WebServer\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\u3002\u6539\u8fdb\u4e86ghttp\u548cgdb\u7b49\u6a21\u5757\uff0c\u8c03\u6574container\u5206\u7c7b\u6a21\u5757\uff0c\u540c\u65f6\u4fee\u590d\u4e86\u4e00\u4e9b\u5df2\u77e5\u95ee\u9898\u3002","source":"@site/docs/release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.9 2019-09-24.md","sourceDirName":"release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x","slug":"/release/v1.9","permalink":"/release/v1.9","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.9 2019-09-24.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"slug":"/release/v1.9","title":"v1.9 2019-09-24","sidebar_position":7,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","gf\u547d\u4ee4\u884c","gres\u8d44\u6e90\u7ba1\u7406\u5668","gsession\u6a21\u5757","gi18n\u56fd\u9645\u5316","gini\u6a21\u5757","gcmd\u89e3\u6790","gdebug\u6a21\u5757","WebServer\u4e2d\u95f4\u4ef6"],"description":"GoFrame\u6846\u67b6\u53d1\u5e03v1.9\u7248\u672c\uff0c\u5305\u542b\u91cd\u8981\u7684\u65b0\u7279\u6027\u548c\u529f\u80fd\u6539\u8fdb\u3002\u65b0\u589e\u4e86gf\u547d\u4ee4\u884c\u5de5\u5177\u3001gres\u8d44\u6e90\u7ba1\u7406\u5668\u548cgsession\u6a21\u5757\u7b49\uff0c\u5e76\u542f\u7528\u66f4\u4fbf\u6377\u7684WebServer\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\u3002\u6539\u8fdb\u4e86ghttp\u548cgdb\u7b49\u6a21\u5757\uff0c\u8c03\u6574container\u5206\u7c7b\u6a21\u5757\uff0c\u540c\u65f6\u4fee\u590d\u4e86\u4e00\u4e9b\u5df2\u77e5\u95ee\u9898\u3002"},"sidebar":"releaseSidebar","previous":{"title":"v1.10 2019-12-05","permalink":"/release/v1.10"},"next":{"title":"v1.8 2019-07-15","permalink":"/release/v1.8"}}');var r=s(474848),d=s(28453);const l={slug:"/release/v1.9",title:"v1.9 2019-09-24",sidebar_position:7,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","gf\u547d\u4ee4\u884c","gres\u8d44\u6e90\u7ba1\u7406\u5668","gsession\u6a21\u5757","gi18n\u56fd\u9645\u5316","gini\u6a21\u5757","gcmd\u89e3\u6790","gdebug\u6a21\u5757","WebServer\u4e2d\u95f4\u4ef6"],description:"GoFrame\u6846\u67b6\u53d1\u5e03v1.9\u7248\u672c\uff0c\u5305\u542b\u91cd\u8981\u7684\u65b0\u7279\u6027\u548c\u529f\u80fd\u6539\u8fdb\u3002\u65b0\u589e\u4e86gf\u547d\u4ee4\u884c\u5de5\u5177\u3001gres\u8d44\u6e90\u7ba1\u7406\u5668\u548cgsession\u6a21\u5757\u7b49\uff0c\u5e76\u542f\u7528\u66f4\u4fbf\u6377\u7684WebServer\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\u3002\u6539\u8fdb\u4e86ghttp\u548cgdb\u7b49\u6a21\u5757\uff0c\u8c03\u6574container\u5206\u7c7b\u6a21\u5757\uff0c\u540c\u65f6\u4fee\u590d\u4e86\u4e00\u4e9b\u5df2\u77e5\u95ee\u9898\u3002"},c=void 0,o={},h=[{value:"\u65b0\u7279\u6027",id:"\u65b0\u7279\u6027",level:3},{value:"\u91cd\u5927\u8c03\u6574",id:"\u91cd\u5927\u8c03\u6574",level:3},{value:"\u529f\u80fd\u6539\u8fdb",id:"\u529f\u80fd\u6539\u8fdb",level:3},{value:"Bug Fix",id:"bug-fix",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u8be5\u7248\u672c\u5b9e\u9645\u4e3a ",(0,r.jsx)(n.code,{children:"v2.0"})," \u7684\u5927\u7248\u672c\u53d1\u5e03\uff0c\u4e3a\u907f\u514d ",(0,r.jsx)(n.code,{children:"go module"})," \u673a\u5236\u4e25\u683c\u8981\u6c42 ",(0,r.jsx)(n.code,{children:"v2"})," \u7248\u672c\u4ee5\u4e0a\u9700\u8981\u4fee\u6539 ",(0,r.jsx)(n.code,{children:"import"})," \u5e76\u52a0\u4e0a ",(0,r.jsx)(n.code,{children:"v2"})," \u540e\u7f00\uff0c\u56e0\u6b64\u4f7f\u7528\u4e86 ",(0,r.jsx)(n.code,{children:"v1.9"})," \u8fdb\u884c\u53d1\u5e03\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u65b0\u7279\u6027",children:"\u65b0\u7279\u6027"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e ",(0,r.jsx)(n.code,{children:"gf"})," \u547d\u4ee4\u884c\u5f00\u53d1\u8f85\u52a9\u5de5\u5177\uff1a ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/toolchain/cli",children:"https://goframe.org/toolchain/cli"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e ",(0,r.jsx)(n.code,{children:"gres"})," \u8d44\u6e90\u7ba1\u7406\u5668\u6a21\u5757\uff1a ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/os/gres/index",children:"https://goframe.org/os/gres/index"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u91cd\u6784 ",(0,r.jsx)(n.code,{children:"Session"})," \u529f\u80fd\uff0c\u65b0\u589e ",(0,r.jsx)(n.code,{children:"gsession"})," \u6a21\u5757\uff0c ",(0,r.jsx)(n.code,{children:"WebServer"})," \u9ed8\u8ba4\u4f7f\u7528\u6587\u4ef6\u5b58\u50a8 ",(0,r.jsx)(n.code,{children:"Session"}),"\uff1a ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/net/ghttp/session",children:"https://goframe.org/net/ghttp/session"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WebServer"})," \u65b0\u589e\u4e2d\u95f4\u4ef6\u7279\u6027\uff0c\u5e76\u4fdd\u7559\u539f\u6709\u7684HOOK\u8bbe\u8ba1\uff0c\u4e24\u8005\u90fd\u53ef\u5b9e\u73b0\u8bf7\u6c42\u62e6\u622a\u3001\u9884\u5904\u7406\u7b49\u7b49\u7279\u6027\uff1a ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/net/ghttp/router/middleware",children:"https://goframe.org/net/ghttp/router/middleware"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e ",(0,r.jsx)(n.code,{children:"gi18n"})," \u56fd\u9645\u5316\u7ba1\u7406\u6a21\u5757\uff1a ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/i18n/gi18n/index",children:"https://goframe.org/i18n/gi18n/index"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e ",(0,r.jsx)(n.code,{children:"gini"})," \u6a21\u5757\uff1a ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/encoding/gini/index",children:"https://goframe.org/encoding/gini/index"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WebServer"})," \u65b0\u589e\u66f4\u4fbf\u6377\u7684\u5c42\u7ea7\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\uff1a ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/net/ghttp/group/level",children:"https://goframe.org/net/ghttp/group/level"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gcmd"})," \u547d\u4ee4\u884c\u53c2\u6570\u89e3\u6790\u6a21\u5757\u91cd\u6784\uff0c\u589e\u52a0 ",(0,r.jsx)(n.code,{children:"Parser"})," \u89e3\u6790\u5bf9\u8c61\uff1a ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/os/gcmd/index",children:"https://goframe.org/os/gcmd/index"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e ",(0,r.jsx)(n.code,{children:"gdebug"})," \u6a21\u5757\uff0c\u7528\u4e8e\u5806\u6808\u4fe1\u606f\u83b7\u53d6/\u6253\u5370\uff1a ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/debug/gdebug/index",children:"https://goframe.org/debug/gdebug/index"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u91cd\u5927\u8c03\u6574",children:"\u91cd\u5927\u8c03\u6574"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53bb\u6389 ",(0,r.jsx)(n.code,{children:"1.x"})," \u7248\u672c\u4e2d\u5df2\u7ecf\u88ab\u6807\u8bb0\u4e3a ",(0,r.jsx)(n.code,{children:"deprecated"})," \u7684\u65b9\u6cd5\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8c03\u6574 ",(0,r.jsx)(n.code,{children:"container"})," \u5206\u7c7b\u7684\u5bb9\u5668\u6a21\u5757\uff0c\u5c06\u9ed8\u8ba4\u5e76\u53d1\u5b89\u5168\u53c2\u6570\u8c03\u6574\u4e3a\u9ed8\u8ba4\u975e\u5e76\u53d1\u5b89\u5168\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u76ee\u5f55\u8c03\u6574:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53bb\u6389 ",(0,r.jsx)(n.code,{children:"third"})," \u76ee\u5f55\uff0c\u7edf\u4e00\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"go module"})," \u7ba1\u7406\u5305\u4f9d\u8d56\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5c06\u539f\u6709 ",(0,r.jsx)(n.code,{children:"g"})," \u76ee\u5f55\u4e2d\u7684\u6a21\u5757\u79fb\u51fa\u5230\u6846\u67b6\u4e3b\u76ee\u5f55\uff0c\u539f\u6709\u7684 ",(0,r.jsx)(n.code,{children:"g"})," \u6a21\u5757\u79fb\u52a8\u5230 ",(0,r.jsx)(n.code,{children:"frame/g"})," \u76ee\u5f55\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5c06\u539f\u6709 ",(0,r.jsx)(n.code,{children:"geg"})," \u793a\u4f8b\u4ee3\u7801\u76ee\u5f55\u540d\u79f0\u4fee\u6539\u4e3a ",(0,r.jsx)(n.code,{children:".example"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u529f\u80fd\u6539\u8fdb",children:"\u529f\u80fd\u6539\u8fdb"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ghttp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,r.jsx)(n.code,{children:"Request"})," \u53c2\u6570\u89e3\u6790\u65b9\u5f0f\uff1a ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/net/ghttp/request",children:"https://goframe.org/net/ghttp/request"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u6539\u8fdb\u8de8\u57df\u8bf7\u6c42\u529f\u80fd\uff0c\u65b0\u589e ",(0,r.jsx)(n.code,{children:"Origin"})," \u8bbe\u7f6e\u53ca\u6821\u9a8c\u529f\u80fd\uff1a ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/net/ghttp/cors",children:"https://goframe.org/net/ghttp/cors"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Cookie"})," \u53ca ",(0,r.jsx)(n.code,{children:"Session"})," \u7684 ",(0,r.jsx)(n.code,{children:"TTL"})," \u914d\u7f6e\u6570\u636e\u7c7b\u578b\u4fee\u6539\u4e3a ",(0,r.jsx)(n.code,{children:"time.Duration"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e\u5141\u8bb8\u540c\u65f6\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Header/Cookie"})," \u4f20\u9012 ",(0,r.jsx)(n.code,{children:"SessionId"}),"\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e ",(0,r.jsx)(n.code,{children:"ConfigFromMap/SetConfigWithMap"})," \u65b9\u6cd5\uff0c\u652f\u6301\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"map"})," \u53c2\u6570\u8bbe\u7f6eWebServer\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6539\u8fdb\u9ed8\u8ba4\u7684 ",(0,r.jsx)(n.code,{children:"CORS"})," \u914d\u7f6e\uff0c\u589e\u52a0\u5bf9\u5e38\u89c1 ",(0,r.jsx)(n.code,{children:"Header"})," \u53c2\u6570\u7684\u9ed8\u8ba4\u652f\u6301\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e ",(0,r.jsx)(n.code,{children:"IsExitError"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u5904\u7406 ",(0,r.jsx)(n.code,{children:"recover"})," \u9519\u8bef\u5904\u7406\u65f6\uff0c\u8fc7\u6ee4\u6846\u67b6\u672c\u8eab\u81ea\u5b9a\u4e49\u7684\u975e\u5f02\u5e38\u9519\u8bef\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e ",(0,r.jsx)(n.code,{children:"SetSessionStorage"})," \u914d\u7f6e\u65b9\u6cd5\uff0c\u7528\u4e8e\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49 ",(0,r.jsx)(n.code,{children:"Session"})," \u5b58\u50a8\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ghttp.Request"})," \u65b0\u589e\u66f4\u591a\u7684\u53c2\u6570\u83b7\u53d6\u65b9\u6cd5\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gdb"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u589e\u52a0\u5bf9SQL\u4e2d\u90e8\u5206\u5b57\u6bb5\u7684\u81ea\u52a8\u8f6c\u4e49( ",(0,r.jsx)(n.code,{children:"Quote"}),")\u529f\u80fd\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u589e\u52a0\u5bf9\u65b9\u6cd5\u64cd\u4f5c\u4ee5\u53ca\u94fe\u5f0f\u64cd\u4f5c\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"slice"})," \u53c2\u6570\u7684\u652f\u6301\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,r.jsx)(n.code,{children:"SetLogger"})," \u65b9\u6cd5\u7528\u4e8e\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u6570\u636e\u5e93\u7684\u65e5\u5fd7\u6253\u5370\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,r.jsx)(n.code,{children:"Master/Slave"})," \u65b9\u6cd5\uff0c\u5f00\u53d1\u8005\u53ef\u81ea\u4e3b\u9009\u62e9\u6570\u636e\u5e93\u64cd\u4f5c\u6267\u884c\u7684\u4e3b\u4ece\u8282\u70b9\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u589e\u52a0\u5bf9 ",(0,r.jsx)(n.code,{children:"mssql/pgsql/oracle"})," \u7684\u5355\u5143\u6d4b\u8bd5\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"debug"})," \u6a21\u5f0f\u652f\u6301\u5b8c\u6574\u5e26\u53c2\u6570\u6574\u5408\u7684SQL\u8bed\u53e5\u8c03\u8bd5\u6253\u5370\uff1b"]}),"\n",(0,r.jsx)(n.li,{children:"\u589e\u52a0\u4e86\u66f4\u591a\u7684\u529f\u80fd\u65b9\u6cd5\uff1b"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"glog"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e ",(0,r.jsx)(n.code,{children:"Default"})," \u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u9ed8\u8ba4\u7684 ",(0,r.jsx)(n.code,{children:"Logger"})," \u5bf9\u8c61\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e ",(0,r.jsx)(n.code,{children:"StackWithFilter"})," \u65b9\u6cd5\u7528\u4e8e\u81ea\u5b9a\u4e49\u5806\u6808\u6253\u5370\u8fc7\u6ee4\uff1b"]}),"\n",(0,r.jsx)(n.li,{children:"\u589e\u52a0\u4e86\u66f4\u591a\u7684\u529f\u80fd\u65b9\u6cd5\uff1b"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gfile"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u90e8\u5206\u65b9\u6cd5\u540d\u79f0\u8c03\u6574\uff1a ",(0,r.jsx)(n.code,{children:"Get/PutBinContents"})," \u4fee\u6539\u4e3a ",(0,r.jsx)(n.code,{children:"Get/PutBytes"}),"\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,r.jsx)(n.code,{children:"ScanDirFile"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u4ec5\u68c0\u7d22\u6587\u4ef6\u76ee\u5f55\uff0c\u652f\u6301\u9012\u5f52\u68c0\u7d22\uff1b"]}),"\n",(0,r.jsx)(n.li,{children:"\u589e\u52a0\u4e86\u66f4\u591a\u7684\u529f\u80fd\u65b9\u6cd5\uff1b"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gview"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e ",(0,r.jsx)(n.code,{children:"SetI18n"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u89c6\u56fe\u5bf9\u8c61\u81ea\u5b9a\u4e49\u7684 ",(0,r.jsx)(n.code,{children:"gi18n"})," \u56fd\u9645\u5316\u5bf9\u8c61\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e\u5bf9 ",(0,r.jsx)(n.code,{children:"gres"})," \u8d44\u6e90\u7ba1\u7406\u5668\u7684\u5185\u7f6e\u652f\u6301\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gcompress"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,r.jsx)(n.code,{children:"zip"})," \u7b97\u6cd5\u7684\u6587\u4ef6/\u76ee\u5f55\u7684\u538b\u7f29/\u89e3\u538b\u65b9\u6cd5\uff1b"]}),"\n",(0,r.jsx)(n.li,{children:"\u6587\u4ef6/\u76ee\u5f55\u538b\u7f29\u53c2\u6570\u652f\u6301\u591a\u8def\u5f84\uff1b"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gconv"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6539\u8fdb\u5bf9 ",(0,r.jsx)(n.code,{children:"[]byte"})," \u6570\u636e\u7c7b\u578b\u53c2\u6570\u7684\u652f\u6301\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e ",(0,r.jsx)(n.code,{children:"Unsafe"})," \u8f6c\u6362\u65b9\u6cd5\uff0c\u5f00\u53d1\u8005\u53ef\u5728\u7279\u5b9a\u573a\u666f\u4e0b\u4f7f\u7528\uff0c\u63d0\u9ad8\u8f6c\u6362\u6548\u7387\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e ",(0,r.jsx)(n.code,{children:"MapDeep/StructDeep/StructsDeep"})," \u65b9\u6cd5\uff0c\u652f\u6301\u9012\u5f52 ",(0,r.jsx)(n.code,{children:"struct"})," \u8f6c\u6362\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gjson/gparser"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6539\u8fdb\u7c7b\u578b\u81ea\u52a8\u8bc6\u522b\u529f\u80fd\uff1b"}),"\n",(0,r.jsxs)(n.li,{children:["\u65b0\u589e ",(0,r.jsx)(n.code,{children:"LoadJson/LoadXml/LoadToml/LoadYaml/LoadIni"})," \u65b9\u6cd5\u7528\u4e8e\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u7c7b\u578b\u5185\u5bb9\u52a0\u8f7d\uff1b"]}),"\n",(0,r.jsx)(n.li,{children:"\u589e\u52a0\u4e86\u66f4\u591a\u7684\u529f\u80fd\u65b9\u6cd5\uff1b"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gerror"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6539\u8fdb\u9519\u8bef\u5806\u6808\u83b7\u53d6\u903b\u8f91\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u589e\u52a0\u4e86\u66f4\u591a\u7684\u529f\u80fd\u65b9\u6cd5\uff1b"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gmap/garray/gset/glist/gvar"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6539\u8fdb\u5e76\u53d1\u5b89\u5168\u57fa\u51c6\u6d4b\u8bd5\u811a\u672c\uff1b"}),"\n",(0,r.jsxs)(n.li,{children:["\u4fee\u6539 ",(0,r.jsx)(n.code,{children:"garray.StringArray"})," \u4e3a ",(0,r.jsx)(n.code,{children:"garray.StrArray"}),"\uff1b"]}),"\n",(0,r.jsx)(n.li,{children:"\u589e\u52a0\u4e86\u66f4\u591a\u7684\u529f\u80fd\u65b9\u6cd5\uff1b"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gdes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u89c4\u8303\u5316\u4fee\u6539\u65b9\u6cd5\u540d\u79f0\uff1b"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gstr"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,r.jsx)(n.code,{children:"Camel/Snake"})," \u76f8\u5173\u547d\u540d\u8f6c\u6362\u65b9\u6cd5\uff1b"]}),"\n",(0,r.jsx)(n.li,{children:"\u589e\u52a0\u4e86\u66f4\u591a\u7684\u529f\u80fd\u65b9\u6cd5\uff1b"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"genv"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u589e\u52a0\u4e86\u66f4\u591a\u7684\u529f\u80fd\u65b9\u6cd5\uff1b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4fee\u590d ",(0,r.jsx)(n.code,{children:"gvalid"})," \u6821\u9a8c ",(0,r.jsx)(n.code,{children:"struct"})," \u65f6\u7684 ",(0,r.jsx)(n.code,{children:"tag"})," \u81ea\u5b9a\u4e49\u9519\u8bef\u5931\u6548\u7684\u95ee\u9898\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4fee\u590d ",(0,r.jsx)(n.code,{children:"gcfg"})," \u914d\u7f6e\u7ba1\u7406\u6a21\u5757\u5728\u7279\u5b9a\u60c5\u51b5\u4e0b\u7684\u5185\u5bb9\u7c7b\u578b\u81ea\u52a8\u8bc6\u522b\u5931\u8d25\u95ee\u9898\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4fee\u590d ",(0,r.jsx)(n.code,{children:"gqueue"})," \u5728\u7528\u6237\u4e3b\u52a8\u5173\u95ed\u961f\u5217\u65f6\u7684\u5e76\u53d1\u5b89\u5168\u95ee\u9898\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4fee\u590d ",(0,r.jsx)(n.code,{children:"session"})," \u5728\u5f00\u53d1\u8005\u8bbe\u7f6e\u7684 ",(0,r.jsx)(n.code,{children:"TTL"})," \u8fc7\u5927\u65f6\u7684\u6574\u578b\u53d8\u91cf\u6ea2\u51fa\u95ee\u9898\uff1b"]}),"\n"]})]})}function t(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(296540);const r={},d=i.createContext(r);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);
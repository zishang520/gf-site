"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[48771],{822314:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"docs/\u5176\u4ed6\u8d44\u6599/\u5982\u4f55\u4ecev1\u6109\u5feb\u5347\u7ea7\u5230v2","title":"\u5982\u4f55\u4ecev1\u6109\u5feb\u5347\u7ea7\u5230v2","description":"GoFrame\u6846\u67b6\u53d1\u5e03\u4e86v2\u7248\u672c\uff0c\u63a8\u8350\u4ecev1\u5347\u7ea7\u81f3v2\u4ee5\u83b7\u53d6\u65b0\u529f\u80fd\u548c\u7a33\u5b9a\u6027\u63d0\u5347\u3002\u6ce8\u610f\u8c03\u6574import\u8def\u5f84\u5e76\u5904\u7406\u53ef\u80fd\u7684\u4ee3\u7801\u4fee\u6539\u3002gredis\u7ec4\u4ef6\u96c6\u7fa4\u5316\u652f\u6301\u5e26\u6765\u914d\u7f6e\u53d8\u5316\uff0cCLI\u5de5\u5177\u4ea6\u6709\u91cd\u8981\u66f4\u65b0\u548c\u7cbe\u7b80\uff0c\u5efa\u8bae\u53c2\u8003\u6307\u5357\u5b9e\u73b0\u987a\u5229\u8fc7\u6e21\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u5176\u4ed6\u8d44\u6599/\u5982\u4f55\u4ecev1\u6109\u5feb\u5347\u7ea7\u5230v2.md","sourceDirName":"docs/\u5176\u4ed6\u8d44\u6599","slug":"/docs/other/happy-upgrading-from-v1-to-v2","permalink":"/2.7.x/docs/other/happy-upgrading-from-v1-to-v2","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u5176\u4ed6\u8d44\u6599/\u5982\u4f55\u4ecev1\u6109\u5feb\u5347\u7ea7\u5230v2.md","tags":[],"version":"2.7.x","sidebarPosition":5,"frontMatter":{"slug":"/docs/other/happy-upgrading-from-v1-to-v2","title":"\u5982\u4f55\u4ecev1\u6109\u5feb\u5347\u7ea7\u5230v2","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u5347\u7ea7\u6307\u5bfc","\u517c\u5bb9\u6027","import\u8def\u5f84","gredis","v1","v2","\u5de5\u7a0b\u76ee\u5f55","CLI\u5de5\u5177"],"description":"GoFrame\u6846\u67b6\u53d1\u5e03\u4e86v2\u7248\u672c\uff0c\u63a8\u8350\u4ecev1\u5347\u7ea7\u81f3v2\u4ee5\u83b7\u53d6\u65b0\u529f\u80fd\u548c\u7a33\u5b9a\u6027\u63d0\u5347\u3002\u6ce8\u610f\u8c03\u6574import\u8def\u5f84\u5e76\u5904\u7406\u53ef\u80fd\u7684\u4ee3\u7801\u4fee\u6539\u3002gredis\u7ec4\u4ef6\u96c6\u7fa4\u5316\u652f\u6301\u5e26\u6765\u914d\u7f6e\u53d8\u5316\uff0cCLI\u5de5\u5177\u4ea6\u6709\u91cd\u8981\u66f4\u65b0\u548c\u7cbe\u7b80\uff0c\u5efa\u8bae\u53c2\u8003\u6307\u5357\u5b9e\u73b0\u987a\u5229\u8fc7\u6e21\u3002"},"sidebar":"mainSidebar","previous":{"title":"Golang\u5b66\u4e60\u8d44\u6e90","permalink":"/2.7.x/docs/other/golang-resource"},"next":{"title":"\u683c\u5f0f\u5316\u6253\u5370\u5360\u4f4d\u7b26","permalink":"/2.7.x/docs/other/printing-format"}}');var d=n(474848),r=n(28453);const c={slug:"/docs/other/happy-upgrading-from-v1-to-v2",title:"\u5982\u4f55\u4ecev1\u6109\u5feb\u5347\u7ea7\u5230v2",sidebar_position:5,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u5347\u7ea7\u6307\u5bfc","\u517c\u5bb9\u6027","import\u8def\u5f84","gredis","v1","v2","\u5de5\u7a0b\u76ee\u5f55","CLI\u5de5\u5177"],description:"GoFrame\u6846\u67b6\u53d1\u5e03\u4e86v2\u7248\u672c\uff0c\u63a8\u8350\u4ecev1\u5347\u7ea7\u81f3v2\u4ee5\u83b7\u53d6\u65b0\u529f\u80fd\u548c\u7a33\u5b9a\u6027\u63d0\u5347\u3002\u6ce8\u610f\u8c03\u6574import\u8def\u5f84\u5e76\u5904\u7406\u53ef\u80fd\u7684\u4ee3\u7801\u4fee\u6539\u3002gredis\u7ec4\u4ef6\u96c6\u7fa4\u5316\u652f\u6301\u5e26\u6765\u914d\u7f6e\u53d8\u5316\uff0cCLI\u5de5\u5177\u4ea6\u6709\u91cd\u8981\u66f4\u65b0\u548c\u7cbe\u7b80\uff0c\u5efa\u8bae\u53c2\u8003\u6307\u5357\u5b9e\u73b0\u987a\u5229\u8fc7\u6e21\u3002"},o=void 0,l={},t=[{value:"\u5199\u5728\u524d\u9762",id:"\u5199\u5728\u524d\u9762",level:2},{value:"v1\u4e0ev2\u7684\u517c\u5bb9\u6027",id:"v1\u4e0ev2\u7684\u517c\u5bb9\u6027",level:2},{value:"\u5c06\u4f9d\u8d56\u66ff\u6362\u4e3av2",id:"\u5c06\u4f9d\u8d56\u66ff\u6362\u4e3av2",level:2},{value:"\u4e0b\u8f7d\u6700\u65b0v2\u7248\u672c",id:"\u4e0b\u8f7d\u6700\u65b0v2\u7248\u672c",level:2},{value:"\u5de5\u7a0b\u76ee\u5f55\u7684\u8c03\u6574",id:"\u5de5\u7a0b\u76ee\u5f55\u7684\u8c03\u6574",level:2},{value:"\u7f16\u8bd1\u8fd0\u884c\u4fee\u6539",id:"\u7f16\u8bd1\u8fd0\u884c\u4fee\u6539",level:2},{value:"CLI\u7684\u91cd\u8981\u53d8\u5316",id:"cli\u7684\u91cd\u8981\u53d8\u5316",level:2},{value:"\u4e00\u4e9b\u91cd\u8981\u8bf4\u660e",id:"\u4e00\u4e9b\u91cd\u8981\u8bf4\u660e",level:2}];function h(e){const i={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.h2,{id:"\u5199\u5728\u524d\u9762",children:"\u5199\u5728\u524d\u9762"}),"\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"GoFrame"})," \u6846\u67b6\u53d1\u5e03\u4e86 ",(0,d.jsx)(i.code,{children:"v2"})," \u7248\u672c\uff0c\u8fd9\u662f\u4e00\u4e2a\u91cc\u7a0b\u7891\u7248\u672c\uff0c\u5305\u542b\u4e86\u5f88\u591a\u65b0\u529f\u80fd\u7279\u6027\u548c\u5927\u91cf\u6539\u8fdb\uff0c\u5e76\u4e14\u53d1\u5e03\u4e86\u4e00\u4e9b\u5f00\u521b\u6027\u7684\u7279\u6027\u3002"]}),"\n",(0,d.jsxs)(i.p,{children:["\u5982\u679c\u662f\u65b0\u7528\u6237\uff0c\u8bf7\u76f4\u63a5\u4f7f\u7528 ",(0,d.jsx)(i.code,{children:"v2"})," \u8d77\u98de\u3002\u5982\u679c\u662f\u8001\u7528\u6237\uff0c\u5899\u88c2\u63a8\u8350\u4ece ",(0,d.jsx)(i.code,{children:"v1"})," \u5347\u7ea7\u4e3a ",(0,d.jsx)(i.code,{children:"v2"}),"\uff0c\u66f4\u52a0\u7a33\u5b9a\u53ef\u9760\u3002"]}),"\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"v2"})," \u5347\u7ea7\u7684\u51e0\u70b9\u91cd\u8981\u8bf4\u660e\uff1a"]}),"\n",(0,d.jsxs)(i.ol,{children:["\n",(0,d.jsxs)(i.li,{children:["\u4e3a\u4fdd\u8bc1\u517c\u5bb9\u6027\uff0c\u6309\u7167 ",(0,d.jsx)(i.code,{children:"Golang"})," \u5b98\u65b9 ",(0,d.jsx)(i.code,{children:"module"})," \u7ba1\u7406\u7684\u89c4\u8303\uff0c\u6211\u4eec\u5c06 ",(0,d.jsx)(i.code,{children:"import"})," \u8def\u5f84\u53d8\u5316\u4e86\uff0c\u56e0\u6b64\u9700\u8981\u5168\u5c40\u66ff\u6362 ",(0,d.jsx)(i.code,{children:"import"})," \u8def\u5f84\u3002"]}),"\n",(0,d.jsx)(i.li,{children:"\u7531\u4e8e\u662f\u5927\u7248\u672c\u5347\u7ea7\uff0c\u56e0\u6b64\u5b58\u5728\u90e8\u5206\u65b9\u6cd5\u5220\u51cf\u3001\u66f4\u65b0\u7684\u60c5\u51b5\uff0c\u5927\u5bb6\u653e\u5fc3\u4e00\u5207\u90fd\u6709\u66f4\u597d\u7684\u65b9\u6848\u63d0\u4f9b\u5566\u3002"}),"\n",(0,d.jsx)(i.li,{children:"\u4e00\u822c\u6765\u8bf4\u5347\u7ea7\u540e\u91cd\u65b0\u7f16\u8bd1\uff0c\u6839\u636e\u7f16\u8bd1\u9519\u8bef\u63d0\u793a\u4fee\u6539\u4ee3\u7801\u5373\u53ef\u5b8c\u6210\u5347\u7ea7\u3002"}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"gredis"})," \u7ec4\u4ef6\u7531\u4e8e\u652f\u6301\u96c6\u7fa4\u5316\uff0c\u56e0\u6b64\u914d\u7f6e\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u8fd9\u5757\u9700\u8981\u6ce8\u610f\u3002"]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"\u6211\u4eec\u6ca1\u6709\u63d0\u4f9b\u5347\u7ea7\u5de5\u5177\uff0c\u56e0\u4e3a\u6211\u4eec\u89c9\u5f97\u63d0\u4f9b\u5347\u7ea7\u6307\u5bfc\u5373\u53ef\u3002"}),"\n",(0,d.jsx)(i.h2,{id:"v1\u4e0ev2\u7684\u517c\u5bb9\u6027",children:"v1\u4e0ev2\u7684\u517c\u5bb9\u6027"}),"\n",(0,d.jsxs)(i.p,{children:["\u4e3a\u4e86\u4fdd\u8bc1\u9879\u76ee\u517c\u5bb9\u6027\uff0c\u80fd\u591f\u540c\u65f6\u4f9d\u8d56 ",(0,d.jsx)(i.code,{children:"v1"})," \u548c ",(0,d.jsx)(i.code,{children:"v2"})," \u7248\u672c\uff0c\u56e0\u6b64\u6211\u4eec\u53d1\u5e03\u4e86 ",(0,d.jsx)(i.code,{children:"v1"})," \u6700\u540e\u4e00\u4e2a\u7248\u672c ",(0,d.jsx)(i.code,{children:"v1.16.7"}),"\uff0c\u5927\u5bb6\u6709\u9700\u8981\u53ef\u4ee5\u5347\u7ea7\u3002\u5e76\u4e14\u89e3\u51b3\u4e86 ",(0,d.jsx)(i.code,{children:"client_tracing.go:73:3: undefined: attribute.Any"})," \u7684\u5e38\u89c1\u95ee\u9898\u3002\u4f46\u540c\u65f6\u4f9d\u8d56\u4e24\u4e2a\u7248\u672c\u7684 ",(0,d.jsx)(i.code,{children:"GoFrame"})," \u53ef\u80fd\u4f1a\u964d\u4f4e\u9879\u76ee\u7ef4\u62a4\u6027\uff0c\u56e0\u6b64\u5efa\u8bae\u5927\u5bb6\u5c3d\u5feb\u5347\u7ea7\u5230 ",(0,d.jsx)(i.code,{children:"v2"})," \u7248\u672c\u3002"]}),"\n",(0,d.jsx)(i.h2,{id:"\u5c06\u4f9d\u8d56\u66ff\u6362\u4e3av2",children:"\u5c06\u4f9d\u8d56\u66ff\u6362\u4e3av2"}),"\n",(0,d.jsx)(i.p,{children:"\u5168\u5c40\u66ff\u6362\u6e90\u4ee3\u7801\u5373\u53ef\uff0c\u89c4\u5219\u5982\u4e0b\uff1a"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-go",children:'"github.com/gogf/gf/ => "github.com/gogf/gf/v2/\n'})}),"\n",(0,d.jsx)(i.p,{children:"\u50cf\u8fd9\u6837\uff1a"}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.img,{src:n(956571).A+"",width:"1562",height:"1234"})}),"\n",(0,d.jsx)(i.h2,{id:"\u4e0b\u8f7d\u6700\u65b0v2\u7248\u672c",children:"\u4e0b\u8f7d\u6700\u65b0v2\u7248\u672c"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-bash",children:"go get -u github.com/gogf/gf/v2@latest\n"})}),"\n",(0,d.jsx)(i.h2,{id:"\u5de5\u7a0b\u76ee\u5f55\u7684\u8c03\u6574",children:"\u5de5\u7a0b\u76ee\u5f55\u7684\u8c03\u6574"}),"\n",(0,d.jsxs)(i.p,{children:["\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f ",(0,d.jsx)(i.code,{children:"GoFrame"})," \u5b98\u65b9\u63a8\u8350\u7684\u5de5\u7a0b\u76ee\u5f55\u7ed3\u6784\uff0c\u53ef\u4ee5\u53c2\u8003\u6700\u65b0\u7684\u5de5\u7a0b\u76ee\u5f55\u7ed3\u6784\u624b\u52a8\u8c03\u6574\u5373\u53ef\uff1a ",(0,d.jsx)(i.a,{href:"/2.7.x/docs/design/project-structure",children:"\u5de5\u7a0b\u76ee\u5f55\u8bbe\u8ba1\ud83d\udd25"})]}),"\n",(0,d.jsxs)(i.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6700\u65b0\u7684 ",(0,d.jsx)(i.code,{children:"cli"})," \u5de5\u5177\u4e0d\u518d\u652f\u6301\u65e7\u7248\u5de5\u7a0b\u76ee\u5f55\u7684\u9879\u76ee\u521b\u5efa\u3002"]}),"\n",(0,d.jsx)(i.h2,{id:"\u7f16\u8bd1\u8fd0\u884c\u4fee\u6539",children:"\u7f16\u8bd1\u8fd0\u884c\u4fee\u6539"}),"\n",(0,d.jsx)(i.p,{children:"\u8fd0\u884c\u60a8\u7684\u9879\u76ee\uff0c\u5982\u679c\u9047\u5230\u7f16\u8bd1\u95ee\u9898\uff0c\u6839\u636e\u9519\u8bef\u63d0\u793a\u8fdb\u884c\u624b\u52a8\u4fee\u6539\uff0c\u5982\u6b64\u5faa\u73af\u3002"}),"\n",(0,d.jsx)(i.p,{children:"\u5982\u679c\u60a8\u4e0d\u77e5\u9053\u5982\u4f55\u4fee\u6539\uff0c\u8bf7\u5728\u672c\u6587\u6863\u8bc4\u8bba\uff0c\u6211\u4eec\u7684\u793e\u533a\u56e2\u961f\u5c0f\u4f19\u4f34\u5c06\u4f1a\u53ca\u65f6\u7ed9\u4e0e\u5347\u7ea7\u5e2e\u52a9\u3002"}),"\n",(0,d.jsx)(i.h2,{id:"cli\u7684\u91cd\u8981\u53d8\u5316",children:"CLI\u7684\u91cd\u8981\u53d8\u5316"}),"\n",(0,d.jsxs)(i.ol,{children:["\n",(0,d.jsxs)(i.li,{children:["\u53bb\u6389\u4e86 ",(0,d.jsx)(i.code,{children:"swagger"})," \u547d\u4ee4\u3002 ",(0,d.jsx)(i.code,{children:"v1"})," \u7248\u672c\u7684 ",(0,d.jsx)(i.code,{children:"gf swagger"})," \u547d\u4ee4\u65f6\u901a\u8fc7\u81ea\u52a8\u5b89\u88c5\u7b2c\u4e09\u65b9\u7684 ",(0,d.jsx)(i.code,{children:"swag"})," \u5de5\u5177\uff0c\u89e3\u6790\u6e90\u4ee3\u7801\u4e2d\u7684\u6ce8\u91ca\u751f\u6210\u7684 ",(0,d.jsx)(i.code,{children:"swagger"})," \u6587\u6863\u3002\u8fd9\u79cd\u6587\u6863\u7684\u7ba1\u7406\u7ef4\u62a4\u65b9\u5f0f\u4f1a\u6709\u4e00\u4e9b\u95ee\u9898\uff1a\u4ec5\u652f\u6301 ",(0,d.jsx)(i.code,{children:"Swagger2.0"})," \u534f\u8bae\u3001\u4f7f\u7528\u4f53\u9a8c\u5f88\u5dee\u3001\u6ce8\u91ca\u96be\u4ee5\u548c\u4ee3\u7801\u540c\u6b65\u7ef4\u62a4\uff0c\u9020\u6210\u63a5\u53e3\u6587\u6863\u4e0e\u4ee3\u7801\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\u3002\u65b0\u7248\u672c\u6709\u4e86\u89c4\u8303\u8def\u7531\uff0c\u8be5\u547d\u4ee4\u5373\u5e9f\u5f03\u6389\u4e86\u3002\u5982\u679c\u9700\u8981\u7ee7\u7eed\u4f7f\u7528\u8be5\u547d\u4ee4\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\u4f7f\u7528\u7b2c\u4e09\u65b9 ",(0,d.jsx)(i.code,{children:"swag"})," \u5de5\u5177\uff1a ",(0,d.jsx)(i.a,{href:"https://github.com/swaggo/swag",children:"https://github.com/swaggo/swag"})]}),"\n",(0,d.jsxs)(i.li,{children:["\u53bb\u6389\u4e86 ",(0,d.jsx)(i.code,{children:"update"})," \u547d\u4ee4\u3002 ",(0,d.jsx)(i.code,{children:"v2"})," \u7248\u672c\u5f00\u59cb\uff0c ",(0,d.jsx)(i.code,{children:"CLI"})," \u5de5\u5177\u7684\u5b89\u88c5\u4e0b\u8f7d\u7edf\u4e00\u8d70 ",(0,d.jsx)(i.code,{children:"github"}),"\uff0c\u4ee5\u51cf\u5c11 ",(0,d.jsx)(i.code,{children:"CLI"})," \u5de5\u5177\u7684\u7ef4\u62a4\u5de5\u4f5c\u91cf\u3002\u540e\u7eed\u53ef\u80fd\u4f1a\u91cd\u65b0\u589e\u52a0\u8be5\u547d\u4ee4\u3002"]}),"\n"]}),"\n",(0,d.jsx)(i.h2,{id:"\u4e00\u4e9b\u91cd\u8981\u8bf4\u660e",children:"\u4e00\u4e9b\u91cd\u8981\u8bf4\u660e"}),"\n",(0,d.jsxs)(i.ol,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"gf-cli"})," \u7684\u4ed3\u5e93\u5df2\u7ecf\u642c\u8fc1\u5230\u4e86 ",(0,d.jsx)(i.code,{children:"gf"})," \u4e3b\u5e93\u7ef4\u62a4\uff0c\u4fbf\u4e8e\u4fdd\u8bc1\u5de5\u5177\u4e0e\u6846\u67b6\u7248\u672c\u540c\u6b65\u3002\u539f\u6709\u4ed3\u5e93\u4e0d\u518d\u7ef4\u62a4\u3002\u5177\u4f53\u8bf7\u67e5\u770b\u8bf4\u660e\uff1a ",(0,d.jsx)(i.a,{href:"https://github.com/gogf/gf/tree/master/cmd/gf",children:"https://github.com/gogf/gf/tree/master/cmd/gf"})]}),"\n",(0,d.jsx)(i.li,{children:"\u6846\u67b6\u6838\u5fc3\u7ec4\u4ef6\u91c7\u7528\u4e86\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u4e3a\u4fdd\u8bc1\u63a5\u53e3\u901a\u7528\u6027\uff0c\u5bf9\u5916\u66b4\u9732\u7684\u65b9\u6cd5\u6709\u4e2a\u522b\u5220\u51cf\u3002"}),"\n",(0,d.jsxs)(i.li,{children:["\u6846\u67b6\u6838\u5fc3\u7ec4\u4ef6\u5927\u91cf\u4f7f\u7528\u4e86 ",(0,d.jsx)(i.code,{children:"gvar"})," \u6cdb\u578b\uff0c\u4ee5\u63d0\u9ad8\u6613\u7528\u6027\u3001\u5c4f\u853d\u5e95\u5c42\u7684\u5177\u4f53\u7c7b\u578b\u5b9e\u73b0\u3002\u4e3a\u4fdd\u8bc1\u7a33\u5b9a\u6027\u548c\u6613\u7528\u6027\uff0c\u6846\u67b6\u5728\u672a\u6765 ",(0,d.jsx)(i.code,{children:"2-3"})," \u5e74\u5185\u4e0d\u4f1a\u8003\u8651\u4f7f\u7528 ",(0,d.jsx)(i.code,{children:"Golang"})," \u5b98\u65b9\u6cdb\u578b\u3002\u5b98\u65b9\u6cdb\u578b\u5728\u6846\u67b6\u90e8\u5206\u7ec4\u4ef6\u7684\u90e8\u5206\u7279\u6027\u4e0b\u6709\u6539\u9020\u4ef7\u503c\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},956571:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/6e0a32d42cc581bd2f4220d721714f41-115e3b6aaae6c9d33d928b45f9590836.png"},28453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>o});var s=n(296540);const d={},r=s.createContext(d);function c(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);
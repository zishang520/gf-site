"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[90658],{46214:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"docs/\u6846\u67b6\u8bbe\u8ba1/\u5168\u9519\u8bef\u5806\u6808\u8bbe\u8ba1","title":"\u5168\u9519\u8bef\u5806\u6808\u8bbe\u8ba1","description":"GoFrame\u6846\u67b6\u5728\u9519\u8bef\u5904\u7406\u65b9\u9762\u7684\u7b56\u7565\u548c\u8bbe\u8ba1\uff0c\u901a\u8fc7\u7edf\u4e00\u7684\u9519\u8bef\u5904\u7406\u65b9\u6848\u548c\u9519\u8bef\u7ec4\u4ef6\uff0c\u89e3\u51b3\u4e86\u9879\u76ee\u4e2d\u5e38\u89c1\u7684\u9519\u8bef\u5806\u6808\u7f3a\u5931\u548c\u65e5\u5fd7\u5197\u4f59\u7b49\u95ee\u9898\u3002GoFrame\u6846\u67b6\u7684\u5168\u7ec4\u4ef6\u652f\u6301\u9519\u8bef\u5806\u6808\u529f\u80fd\uff0c\u964d\u4f4e\u4e86\u9519\u8bef\u6392\u67e5\u548c\u7ef4\u62a4\u7684\u6210\u672c\uff0c\u63d0\u9ad8\u4e86\u9879\u76ee\u7684\u7a33\u5b9a\u6027\u548c\u6613\u7528\u6027\u3002","source":"@site/docs/docs/\u6846\u67b6\u8bbe\u8ba1/\u5168\u9519\u8bef\u5806\u6808\u8bbe\u8ba1.md","sourceDirName":"docs/\u6846\u67b6\u8bbe\u8ba1","slug":"/docs/design/error-stack","permalink":"/en/docs/design/error-stack","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67b6\u8bbe\u8ba1/\u5168\u9519\u8bef\u5806\u6808\u8bbe\u8ba1.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"slug":"/docs/design/error-stack","title":"\u5168\u9519\u8bef\u5806\u6808\u8bbe\u8ba1","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u9519\u8bef\u5904\u7406","\u9519\u8bef\u5806\u6808","\u7edf\u4e00\u9519\u8bef\u5904\u7406","\u65e5\u5fd7\u6253\u6869","\u9519\u8bef\u7ec4\u4ef6","\u5806\u6808\u4fe1\u606f","\u7b2c\u4e09\u65b9\u7ec4\u4ef6","\u9519\u8bef\u8fd4\u56de"],"description":"GoFrame\u6846\u67b6\u5728\u9519\u8bef\u5904\u7406\u65b9\u9762\u7684\u7b56\u7565\u548c\u8bbe\u8ba1\uff0c\u901a\u8fc7\u7edf\u4e00\u7684\u9519\u8bef\u5904\u7406\u65b9\u6848\u548c\u9519\u8bef\u7ec4\u4ef6\uff0c\u89e3\u51b3\u4e86\u9879\u76ee\u4e2d\u5e38\u89c1\u7684\u9519\u8bef\u5806\u6808\u7f3a\u5931\u548c\u65e5\u5fd7\u5197\u4f59\u7b49\u95ee\u9898\u3002GoFrame\u6846\u67b6\u7684\u5168\u7ec4\u4ef6\u652f\u6301\u9519\u8bef\u5806\u6808\u529f\u80fd\uff0c\u964d\u4f4e\u4e86\u9519\u8bef\u6392\u67e5\u548c\u7ef4\u62a4\u7684\u6210\u672c\uff0c\u63d0\u9ad8\u4e86\u9879\u76ee\u7684\u7a33\u5b9a\u6027\u548c\u6613\u7528\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5168\u94fe\u8def\u8ddf\u8e2a\u8bbe\u8ba1","permalink":"/en/docs/design/tracing"},"next":{"title":"\u63a5\u53e3\u5316\u4e0e\u6cdb\u578b\u8bbe\u8ba1","permalink":"/en/docs/design/interface-generic"}}');var d=r(474848),i=r(28453);const c={slug:"/docs/design/error-stack",title:"\u5168\u9519\u8bef\u5806\u6808\u8bbe\u8ba1",sidebar_position:5,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u9519\u8bef\u5904\u7406","\u9519\u8bef\u5806\u6808","\u7edf\u4e00\u9519\u8bef\u5904\u7406","\u65e5\u5fd7\u6253\u6869","\u9519\u8bef\u7ec4\u4ef6","\u5806\u6808\u4fe1\u606f","\u7b2c\u4e09\u65b9\u7ec4\u4ef6","\u9519\u8bef\u8fd4\u56de"],description:"GoFrame\u6846\u67b6\u5728\u9519\u8bef\u5904\u7406\u65b9\u9762\u7684\u7b56\u7565\u548c\u8bbe\u8ba1\uff0c\u901a\u8fc7\u7edf\u4e00\u7684\u9519\u8bef\u5904\u7406\u65b9\u6848\u548c\u9519\u8bef\u7ec4\u4ef6\uff0c\u89e3\u51b3\u4e86\u9879\u76ee\u4e2d\u5e38\u89c1\u7684\u9519\u8bef\u5806\u6808\u7f3a\u5931\u548c\u65e5\u5fd7\u5197\u4f59\u7b49\u95ee\u9898\u3002GoFrame\u6846\u67b6\u7684\u5168\u7ec4\u4ef6\u652f\u6301\u9519\u8bef\u5806\u6808\u529f\u80fd\uff0c\u964d\u4f4e\u4e86\u9519\u8bef\u6392\u67e5\u548c\u7ef4\u62a4\u7684\u6210\u672c\uff0c\u63d0\u9ad8\u4e86\u9879\u76ee\u7684\u7a33\u5b9a\u6027\u548c\u6613\u7528\u6027\u3002"},o=void 0,l={},t=[{value:"\u4e00\u3001\u9879\u76ee\u9519\u8bef\u5904\u7406\u75db\u70b9",id:"\u4e00\u9879\u76ee\u9519\u8bef\u5904\u7406\u75db\u70b9",level:2},{value:"1\u3001\u7f3a\u5c11\u7edf\u4e00\u9519\u8bef\u5904\u7406\u65b9\u6848\uff0c\u4ee3\u7801\u4e2d\u968f\u5904\u53ef\u89c1\u7684\u65e5\u5fd7\u6253\u6869",id:"1\u7f3a\u5c11\u7edf\u4e00\u9519\u8bef\u5904\u7406\u65b9\u6848\u4ee3\u7801\u4e2d\u968f\u5904\u53ef\u89c1\u7684\u65e5\u5fd7\u6253\u6869",level:3},{value:"2\u3001\u8bf7\u6c42\u6267\u884c\u62a5\u9519\u540e\u7f3a\u5c11\u9519\u8bef\u5806\u6808\uff0c\u96be\u4ee5\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898",id:"2\u8bf7\u6c42\u6267\u884c\u62a5\u9519\u540e\u7f3a\u5c11\u9519\u8bef\u5806\u6808\u96be\u4ee5\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898",level:3},{value:"3\u3001\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u6267\u884c\u8fd4\u56de\u7684\u9519\u8bef\uff0c\u672c\u8eab\u4e0d\u5e26\u6709\u5806\u6808\u4fe1\u606f",id:"3\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u6267\u884c\u8fd4\u56de\u7684\u9519\u8bef\u672c\u8eab\u4e0d\u5e26\u6709\u5806\u6808\u4fe1\u606f",level:3},{value:"4\u3001\u9519\u8bef\u7ec4\u4ef6\u591a\u6837\uff0c\u81ea\u8eab\u9879\u76ee\u5f80\u5f80\u8fd8\u60f3\u5f53\u7136\u518d\u5c01\u88c5\u4e00\u5c42",id:"4\u9519\u8bef\u7ec4\u4ef6\u591a\u6837\u81ea\u8eab\u9879\u76ee\u5f80\u5f80\u8fd8\u60f3\u5f53\u7136\u518d\u5c01\u88c5\u4e00\u5c42",level:3},{value:"\u4e8c\u3001\u6846\u67b6\u5168\u9519\u8bef\u5806\u6808\u8bbe\u8ba1",id:"\u4e8c\u6846\u67b6\u5168\u9519\u8bef\u5806\u6808\u8bbe\u8ba1",level:2},{value:"1\u3001\u7edf\u4e00\u9519\u8bef\u7ec4\u4ef6",id:"1\u7edf\u4e00\u9519\u8bef\u7ec4\u4ef6",level:3},{value:"2\u3001\u7edf\u4e00\u9519\u8bef\u5904\u7406\u65b9\u6848",id:"2\u7edf\u4e00\u9519\u8bef\u5904\u7406\u65b9\u6848",level:3},{value:"3\u3001\u5168\u7ec4\u4ef6\u652f\u6301\u5806\u6808\u9519\u8bef",id:"3\u5168\u7ec4\u4ef6\u652f\u6301\u5806\u6808\u9519\u8bef",level:3},{value:"4\u3001\u5173\u952e\u7ec4\u4ef6\u652f\u6301\u9519\u8bef\u5806\u6808\u6253\u5370",id:"4\u5173\u952e\u7ec4\u4ef6\u652f\u6301\u9519\u8bef\u5806\u6808\u6253\u5370",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u4e00\u9879\u76ee\u9519\u8bef\u5904\u7406\u75db\u70b9",children:"\u4e00\u3001\u9879\u76ee\u9519\u8bef\u5904\u7406\u75db\u70b9"}),"\n",(0,d.jsx)(n.p,{children:"\u6211\u4eec\u5728\u4e1a\u52a1\u9879\u76ee\u4e2d\uff0c\u7ecf\u5e38\u4f1a\u9047\u5230\u4ee5\u4e0b\u75db\u70b9\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"1\u7f3a\u5c11\u7edf\u4e00\u9519\u8bef\u5904\u7406\u65b9\u6848\u4ee3\u7801\u4e2d\u968f\u5904\u53ef\u89c1\u7684\u65e5\u5fd7\u6253\u6869",children:"1\u3001\u7f3a\u5c11\u7edf\u4e00\u9519\u8bef\u5904\u7406\u65b9\u6848\uff0c\u4ee3\u7801\u4e2d\u968f\u5904\u53ef\u89c1\u7684\u65e5\u5fd7\u6253\u6869"}),"\n",(0,d.jsx)(n.p,{children:"\u4e3a\u4e86\u65b9\u4fbf\u63a5\u53e3\u51fa\u9519\u65f6\u5b9a\u4f4d\u95ee\u9898\uff0c\u4ee3\u7801\u4e2d\u968f\u5904\u53ef\u89c1\u7684\u65e5\u5fd7\u6253\u6869\uff0c\u5e76\u5c06\u5176\u770b\u505a\u662f\u4e00\u4ef6\u7406\u6240\u5f53\u7136\u7684\u4e8b\uff0c\u7136\u800c\u6beb\u65e0\u7ae0\u6cd5\u7684\u5e9e\u5927\u65e5\u5fd7\u91cf\u9664\u4e86\u63d0\u9ad8\u7ef4\u62a4\u7684\u5de5\u4f5c\u91cf\uff0c\u5374\u901a\u5e38\u96be\u4ee5\u8fbe\u5230\u5b83\u8be5\u6709\u7684\u76ee\u7684\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"2\u8bf7\u6c42\u6267\u884c\u62a5\u9519\u540e\u7f3a\u5c11\u9519\u8bef\u5806\u6808\u96be\u4ee5\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898",children:"2\u3001\u8bf7\u6c42\u6267\u884c\u62a5\u9519\u540e\u7f3a\u5c11\u9519\u8bef\u5806\u6808\uff0c\u96be\u4ee5\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898"}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u4e0b\uff0c\u5f53\u5e95\u5c42\u51fa\u73b0 ",(0,d.jsx)(n.code,{children:"error"})," \u7ea7\u522b\u7684\u9519\u8bef\u65f6\uff0c\u5728\u9876\u5c42\u770b\u5230\u7684\u5c31\u4e00\u4e2a\u9519\u8bef\u4fe1\u606f\uff0c\u8bf7\u95ee\u5982\u4f55\u6392\u67e5\uff1f"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:r(979923).A+"",width:"3570",height:"758"})}),"\n",(0,d.jsx)(n.p,{children:"\u4e00\u5f20\u771f\u5b9e\u7684\u73b0\u7f51\u6848\u4f8b\u6392\u67e5\u622a\u56fe"}),"\n",(0,d.jsx)(n.h3,{id:"3\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u6267\u884c\u8fd4\u56de\u7684\u9519\u8bef\u672c\u8eab\u4e0d\u5e26\u6709\u5806\u6808\u4fe1\u606f",children:"3\u3001\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u6267\u884c\u8fd4\u56de\u7684\u9519\u8bef\uff0c\u672c\u8eab\u4e0d\u5e26\u6709\u5806\u6808\u4fe1\u606f"}),"\n",(0,d.jsxs)(n.p,{children:["\u4e0d\u4ec5\u4ec5\u662f\u7b2c\u4e09\u65b9\u7ec4\u4ef6\uff0c\u8fde\u6807\u51c6\u5e93\u6240\u6709\u65b9\u6cd5\u8fd4\u56de\u7684 ",(0,d.jsx)(n.code,{children:"error"})," \u90fd\u4e0d\u5e26\u6709\u5806\u6808\uff0c\u8fd9\u5bf9\u4e1a\u52a1\u5c42\u7edf\u4e00\u9519\u8bef\u5904\u7406\u9020\u6210\u4e86\u5f88\u5927\u7684\u6311\u6218\u3002\u51e0\u4e4e\u6240\u6709\u4e1a\u52a1\u5c42\u4ee3\u7801\u8c03\u7528\u8fd4\u56de\u7684\u9519\u8bef\uff0c\u90fd\u9700\u8981\u81ea\u884c\u4f7f\u7528\u7c7b\u4f3c\u4e8e ",(0,d.jsx)(n.code,{children:"Wrap"})," \u65b9\u6cd5\u518d\u5305\u88f9\u4e00\u5c42\uff0c\u4ee5\u4fbf\u4e8e\u4e1a\u52a1\u5c42\u81ea\u5df1\u53ef\u4ee5\u5b9e\u73b0\u9519\u8bef\u5806\u6808\u8fd4\u56de\u3002\u8fd9\u6837\u7684\u7ef4\u62a4\u6210\u672c\u6bd4\u8f83\u5927\uff0c\u51e0\u4e4e\u53ea\u80fd\u9760 ",(0,d.jsx)(n.code,{children:"CodeReview"})," \u6765\u4eba\u8089\u4fdd\u969c\uff0c\u4e00\u4e0d\u5c0f\u5fc3\u53ef\u80fd\u4f1a\u6f0f\u6389 ",(0,d.jsx)(n.code,{children:"Wrap"})," \u5904\u7406\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"4\u9519\u8bef\u7ec4\u4ef6\u591a\u6837\u81ea\u8eab\u9879\u76ee\u5f80\u5f80\u8fd8\u60f3\u5f53\u7136\u518d\u5c01\u88c5\u4e00\u5c42",children:"4\u3001\u9519\u8bef\u7ec4\u4ef6\u591a\u6837\uff0c\u81ea\u8eab\u9879\u76ee\u5f80\u5f80\u8fd8\u60f3\u5f53\u7136\u518d\u5c01\u88c5\u4e00\u5c42"}),"\n",(0,d.jsx)(n.p,{children:"\u9519\u8bef\u5904\u7406\u7684\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u4e5f\u6bd4\u8f83\u591a\uff0c\u5982\u4f55\u9009\u62e9\uff1f\u751a\u81f3\u4e1a\u52a1\u9879\u76ee\u5f80\u5f80\u4e5f\u60f3\u81ea\u5df1\u518d\u5c01\u88c5\u4e00\u5c42\uff0c\u8fdb\u4e00\u6b65\u63d0\u9ad8\u9519\u8bef\u5904\u7406\u7ec4\u4ef6\u7684\u7ef4\u62a4\u6210\u672c\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u4e8c\u6846\u67b6\u5168\u9519\u8bef\u5806\u6808\u8bbe\u8ba1",children:"\u4e8c\u3001\u6846\u67b6\u5168\u9519\u8bef\u5806\u6808\u8bbe\u8ba1"}),"\n",(0,d.jsx)(n.h3,{id:"1\u7edf\u4e00\u9519\u8bef\u7ec4\u4ef6",children:"1\u3001\u7edf\u4e00\u9519\u8bef\u7ec4\u4ef6"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u4e1a\u5185\u529f\u80fd\u6700\u5f3a\u5927\u7684\u9519\u8bef\u5904\u7406\u7ec4\u4ef6\uff0c\u5e76\u4e14\u8be5\u7ec4\u4ef6\u4e5f\u662f\u6846\u67b6\u5185\u90e8\u5e7f\u6cdb\u4f7f\u7528\u7684\u9519\u8bef\u7ec4\u4ef6\uff0c\u964d\u4f4e\u4e1a\u52a1\u56e2\u961f\u7684\u9009\u62e9\u6210\u672c\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"2\u7edf\u4e00\u9519\u8bef\u5904\u7406\u65b9\u6848",children:"2\u3001\u7edf\u4e00\u9519\u8bef\u5904\u7406\u65b9\u6848"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u5de5\u7a0b\u8bbe\u8ba1\u89c4\u8303\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u5fc5\u8981\u7684\u7edf\u4e00\u7684\u9519\u8bef\u5904\u7406\u65b9\u6848\u3002\u6309\u7167\u7edf\u4e00\u6846\u67b6\u7684\u5de5\u7a0b\u8bbe\u8ba1\uff0c\u4e00\u4e9b\u901a\u7528\u6027\u7684\u75db\u70b9\u5df2\u901a\u8fc7\u7ec4\u4ef6\u3001\u5de5\u5177\u7684\u65b9\u5f0f\u5f97\u4ee5\u89e3\u51b3\uff0c\u4f7f\u5f97\u4e1a\u52a1\u56e2\u961f\u80fd\u591f\u5c06\u7cbe\u529b\u805a\u7126\u4e8e\u4e1a\u52a1\u672c\u8eab\uff0c\u5f00\u53d1\u5de5\u4f5c\u5c06\u4f1a\u4e8b\u534a\u529f\u500d\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u7edf\u4e00\u7684\u9519\u8bef\u5904\u7406\u65b9\u6848\u4e0b\uff0c\u9879\u76ee\u4e2d\u6240\u6709\u7684\u65b9\u6cd5\u8c03\u7528\u5c06\u4f1a\u4ee5 ",(0,d.jsx)(n.code,{children:"error"})," \u8fd4\u56de\u503c\u4f5c\u4e3a\u6267\u884c\u6210\u529f\u4e0e\u5426\u7684\u4f9d\u636e\u3002\u5982\u679c ",(0,d.jsx)(n.code,{children:"error"})," \u4e0d\u4e3a ",(0,d.jsx)(n.code,{children:"nil"})," \u65f6\uff0c\u53ca\u65f6\u8fd4\u56de\uff0c\u5e76\u5c06\u5176\u5c42\u5c42\u5f80\u4e0a\u4f20\u9012\uff0c\u5728\u6700\u9876\u5c42\u7edf\u4e00\u505a\u9519\u8bef\u5904\u7406\u3002\u5e76\u4e14\uff0c\u5728\u6846\u67b6\u7684\u5173\u952e\u7ec4\u4ef6\u5df2\u7ecf\u63d0\u4f9b\u4e86\u9ed8\u8ba4\u7684\u9519\u8bef\u5904\u7406\u903b\u8f91\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:r(436459).A+"",width:"3072",height:"1576"})}),"\n",(0,d.jsx)(n.h3,{id:"3\u5168\u7ec4\u4ef6\u652f\u6301\u5806\u6808\u9519\u8bef",children:"3\u3001\u5168\u7ec4\u4ef6\u652f\u6301\u5806\u6808\u9519\u8bef"}),"\n",(0,d.jsxs)(n.p,{children:["\ud83d\udd25 ",(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6 ",(0,d.jsx)(n.strong,{children:"\u6240\u6709\u57fa\u7840\u7ec4\u4ef6"})," \u7684 ",(0,d.jsx)(n.code,{children:"error"})," \u8fd4\u56de\u5bf9\u8c61\u5747\u5e26\u6709\u9519\u8bef\u5806\u6808\uff01\ud83d\udd25"]}),"\n",(0,d.jsxs)(n.p,{children:["\ud83d\udd25 ",(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6 ",(0,d.jsx)(n.strong,{children:"\u6240\u6709\u57fa\u7840\u7ec4\u4ef6"})," \u7684 ",(0,d.jsx)(n.code,{children:"error"})," \u8fd4\u56de\u5bf9\u8c61\u5747\u5e26\u6709\u9519\u8bef\u5806\u6808\uff01\ud83d\udd25"]}),"\n",(0,d.jsxs)(n.p,{children:["\ud83d\udd25 ",(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6 ",(0,d.jsx)(n.strong,{children:"\u6240\u6709\u57fa\u7840\u7ec4\u4ef6"})," \u7684 ",(0,d.jsx)(n.code,{children:"error"})," \u8fd4\u56de\u5bf9\u8c61\u5747\u5e26\u6709\u9519\u8bef\u5806\u6808\uff01\ud83d\udd25"]}),"\n",(0,d.jsx)(n.p,{children:"\ud83d\udd25\u91cd\u8981\u7684\u4e8b\u60c5\u8bf4\u4e09\u904d\uff01\ud83d\udd25"}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u662f\u4e00\u4ef6\u5f88\u96be\u505a\u5230\u7684\u4e8b\u60c5\uff0c\u56e0\u4e3a\u6846\u67b6\u63d0\u4f9b\u7684\u7ec4\u4ef6\u51e0\u4e4e\u80fd\u591f\u8986\u76d6\u4e86\u5927\u90e8\u5206\u4e1a\u52a1\u9879\u76ee\u7684\u6240\u6709\u9700\u6c42\uff0c\u4f46\u662f\u6846\u67b6\u786e\u5b9e\u505a\u5230\u4e86\u3002\u867d\u7136\u6846\u67b6\u5728\u8fd9\u5757\u6295\u5165\u7684\u6210\u672c\u6bd4\u8f83\u5927\uff08\u5355\u72ec\u4e00\u4e2a\u7248\u672c\u6765\u5b9e\u73b0\u4e86\u8fd9\u4e2a\u7279\u6027\uff09\uff0c\u4f46\u5374\u662f\u524d\u671f\u4e00\u6b21\u6027\u6295\u5165\u3001\u957f\u671f\u6536\u76ca\u7684\u4e8b\u60c5\u3002\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\uff0c\u5982\u679c\u4e1a\u52a1\u9879\u76ee\u5728\u4f7f\u7528\u7edf\u4e00\u7684 ",(0,d.jsx)(n.code,{children:"GoFrame"})," \u57fa\u7840\u6846\u67b6\u4e0b\uff0c\u9519\u8bef\u5904\u7406\u5c06\u4f1a\u66f4\u52a0\u7b80\u4fbf\uff0c\u9519\u8bef\u5806\u6808\u4e22\u5931\u7684\u98ce\u9669\u5f97\u5230\u4e86\u6781\u5927\u7684\u964d\u4f4e\uff0c\u9879\u76ee\u5c06\u4f1a\u66f4\u52a0\u7a33\u5065\u3001\u6613\u4e8e\u5feb\u901f\u6392\u9519\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"4\u5173\u952e\u7ec4\u4ef6\u652f\u6301\u9519\u8bef\u5806\u6808\u6253\u5370",children:"4\u3001\u5173\u952e\u7ec4\u4ef6\u652f\u6301\u9519\u8bef\u5806\u6808\u6253\u5370"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u6846\u67b6\u7684\u5173\u952e\u7ec4\u4ef6\u4e2d\uff0c\u63d0\u4f9b\u4e86\u5bf9\u9519\u8bef\u5806\u6808\u6253\u5370\u7684 ",(0,d.jsx)(n.strong,{children:"\u9ed8\u8ba4\u5904\u7406"}),"\uff0c\u4ee5\u63d0\u9ad8\u6613\u7528\u6027\uff0c\u7b80\u5316\u4f7f\u7528\u8005\u8d1f\u62c5\u3002\u8fd9\u4e9b\u5173\u952e\u7684\u7ec4\u4ef6\u662f\u7a0b\u5e8f\u7684\u5165\u53e3\uff0c\u5982 ",(0,d.jsx)(n.code,{children:"HTTP/GRPC Server"}),"\u3001 ",(0,d.jsx)(n.code,{children:"Command"})," \u547d\u4ee4\u884c\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},436459:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/0237be84e57c222bd476dad67a883253-a941be83645aaf91c743e5c94f5efd35.png"},979923:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/d0a2ecfa83e3b3107e38a519bacf0f17-c777903d0df81e08ec27159774de1654.png"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var s=r(296540);const d={},i=s.createContext(d);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
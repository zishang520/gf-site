"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[2893],{116435:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>h,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>t});var c=s(474848),n=s(28453);const i={title:"DAO-\u7ec4\u4ef6\u75db\u70b9\u53ca\u6539\u8fdb",sidebar_position:0},r=void 0,l={id:"\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/DAO\u5c01\u88c5\u8bbe\u8ba1/DAO-\u7ec4\u4ef6\u75db\u70b9\u53ca\u6539\u8fdb",title:"DAO-\u7ec4\u4ef6\u75db\u70b9\u53ca\u6539\u8fdb",description:"\u5173\u4e8e DAO \u6570\u636e\u8bbf\u95ee\u5bf9\u8c61\u8bbe\u8ba1\u5176\u5b9e\u662f\u5173\u4e8e GoFrame \u6846\u67b6\u5de5\u7a0b\u5316\u5b9e\u8df5\u4e2d\u6bd4\u8f83\u91cd\u8981\u4e00\u5757\u8bbe\u8ba1\u3002",source:"@site/docs/1-\u6846\u67b6\u8bbe\u8ba1/2-\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/2-DAO\u5c01\u88c5\u8bbe\u8ba1/0-DAO-\u7ec4\u4ef6\u75db\u70b9\u53ca\u6539\u8fdb.md",sourceDirName:"1-\u6846\u67b6\u8bbe\u8ba1/2-\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/2-DAO\u5c01\u88c5\u8bbe\u8ba1",slug:"/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/DAO\u5c01\u88c5\u8bbe\u8ba1/DAO-\u7ec4\u4ef6\u75db\u70b9\u53ca\u6539\u8fdb",permalink:"/docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/DAO\u5c01\u88c5\u8bbe\u8ba1/DAO-\u7ec4\u4ef6\u75db\u70b9\u53ca\u6539\u8fdb",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/1-\u6846\u67b6\u8bbe\u8ba1/2-\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/2-DAO\u5c01\u88c5\u8bbe\u8ba1/0-DAO-\u7ec4\u4ef6\u75db\u70b9\u53ca\u6539\u8fdb.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730022623e3,sidebarPosition:0,frontMatter:{title:"DAO-\u7ec4\u4ef6\u75db\u70b9\u53ca\u6539\u8fdb",sidebar_position:0},sidebar:"hiddenSidebar",previous:{title:"DAO\u5c01\u88c5\u8bbe\u8ba1",permalink:"/docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/DAO\u5c01\u88c5\u8bbe\u8ba1/"},next:{title:"DAO-\u5de5\u7a0b\u75db\u70b9\u53ca\u6539\u8fdb",permalink:"/docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/DAO\u5c01\u88c5\u8bbe\u8ba1/DAO-\u5de5\u7a0b\u75db\u70b9\u53ca\u6539\u8fdb"}},h={},t=[{value:"\u4e00\u3001\u73b0\u6709 <code>ORM</code> \u4f7f\u7528\u793a\u4f8b",id:"\u4e00\u73b0\u6709-orm-\u4f7f\u7528\u793a\u4f8b",level:2},{value:"1\u3001\u9700\u8981\u5b9a\u4e49\u6a21\u578b",id:"1\u9700\u8981\u5b9a\u4e49\u6a21\u578b",level:3},{value:"2\u3001 <code>GRPC</code> \u63a5\u53e3\u5b9e\u73b0\u793a\u4f8b",id:"2-grpc-\u63a5\u53e3\u5b9e\u73b0\u793a\u4f8b",level:3},{value:"\u4e8c\u3001\u73b0\u6709\u75db\u70b9\u63cf\u8ff0",id:"\u4e8c\u73b0\u6709\u75db\u70b9\u63cf\u8ff0",level:2},{value:"1\u3001\u5fc5\u987b\u8981\u5b9a\u4e49 <code>tag</code> \u5173\u8054\u8868\u7ed3\u6784\u4e0e <code>struct</code> \u5c5e\u6027\uff0c\u65e0\u6cd5\u505a\u5230\u81ea\u52a8\u6620\u5c04",id:"1\u5fc5\u987b\u8981\u5b9a\u4e49-tag-\u5173\u8054\u8868\u7ed3\u6784\u4e0e-struct-\u5c5e\u6027\u65e0\u6cd5\u505a\u5230\u81ea\u52a8\u6620\u5c04",level:3},{value:"2\u3001\u4e0d\u652f\u6301\u901a\u8fc7\u8fd4\u56de\u5bf9\u8c61\u6307\u5b9a\u9700\u8981\u67e5\u8be2\u7684\u5b57\u6bb5",id:"2\u4e0d\u652f\u6301\u901a\u8fc7\u8fd4\u56de\u5bf9\u8c61\u6307\u5b9a\u9700\u8981\u67e5\u8be2\u7684\u5b57\u6bb5",level:3},{value:"3\u3001\u65e0\u6cd5\u5bf9\u8f93\u5165\u5bf9\u8c61\u5c5e\u6027\u540d\u79f0\u8fdb\u884c\u81ea\u52a8\u5b57\u6bb5\u8fc7\u6ee4",id:"3\u65e0\u6cd5\u5bf9\u8f93\u5165\u5bf9\u8c61\u5c5e\u6027\u540d\u79f0\u8fdb\u884c\u81ea\u52a8\u5b57\u6bb5\u8fc7\u6ee4",level:3},{value:"4\u3001\u9700\u8981\u521b\u5efa\u4e2d\u95f4\u67e5\u8be2\u7ed3\u679c\u5bf9\u8c61\u6267\u884c\u8d4b\u503c\u8f6c\u6362",id:"4\u9700\u8981\u521b\u5efa\u4e2d\u95f4\u67e5\u8be2\u7ed3\u679c\u5bf9\u8c61\u6267\u884c\u8d4b\u503c\u8f6c\u6362",level:3},{value:"5\u3001\u9700\u8981\u63d0\u524d\u521d\u59cb\u5316\u8fd4\u56de\u5bf9\u8c61\uff0c\u4e0d\u7ba1\u6709\u65e0\u67e5\u8be2\u5230\u6570\u636e",id:"5\u9700\u8981\u63d0\u524d\u521d\u59cb\u5316\u8fd4\u56de\u5bf9\u8c61\u4e0d\u7ba1\u6709\u65e0\u67e5\u8be2\u5230\u6570\u636e",level:3},{value:"6\u3001\u9879\u76ee\u901a\u7bc7\u4f7f\u7528\u5e95\u5c42\u88f8 <code>DB</code> \u5bf9\u8c61\u64cd\u4f5c\uff0c\u6ca1\u6709\u5bf9\u8c61\u5c01\u88c5\u64cd\u4f5c",id:"6\u9879\u76ee\u901a\u7bc7\u4f7f\u7528\u5e95\u5c42\u88f8-db-\u5bf9\u8c61\u64cd\u4f5c\u6ca1\u6709\u5bf9\u8c61\u5c01\u88c5\u64cd\u4f5c",level:3},{value:"7\u3001\u968f\u5904\u53ef\u89c1\u7684\u5b57\u7b26\u4e32\u786c\u7f16\u7801\uff0c\u5982\u8868\u540d\u548c\u5b57\u6bb5\u7684\u786c\u7f16\u7801",id:"7\u968f\u5904\u53ef\u89c1\u7684\u5b57\u7b26\u4e32\u786c\u7f16\u7801\u5982\u8868\u540d\u548c\u5b57\u6bb5\u7684\u786c\u7f16\u7801",level:3},{value:"8\u3001\u5e95\u5c42ORM\u5f15\u8d77\u592a\u591a\u7684\u6307\u9488\u5c5e\u6027\u5b9a\u4e49",id:"8\u5e95\u5c42orm\u5f15\u8d77\u592a\u591a\u7684\u6307\u9488\u5c5e\u6027\u5b9a\u4e49",level:3},{value:"9\u3001\u53ef\u89c2\u6d4b\u6027\u7684\u652f\u6301\uff1aTracing\u3001Metrics\u3001Logging",id:"9\u53ef\u89c2\u6d4b\u6027\u7684\u652f\u6301tracingmetricslogging",level:3},{value:"10\u3001\u6570\u636e\u96c6\u5408\u4e0e\u4ee3\u7801\u6570\u636e\u5b9e\u4f53\u7ed3\u6784\u4e0d\u4e00\u81f4",id:"10\u6570\u636e\u96c6\u5408\u4e0e\u4ee3\u7801\u6570\u636e\u5b9e\u4f53\u7ed3\u6784\u4e0d\u4e00\u81f4",level:3},{value:"\u4e09\u3001\u6539\u8fdb\u65b9\u6848\u8bbe\u8ba1",id:"\u4e09\u6539\u8fdb\u65b9\u6848\u8bbe\u8ba1",level:2}];function a(e){const d={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(d.p,{children:["\u5173\u4e8e ",(0,c.jsx)(d.code,{children:"DAO"})," \u6570\u636e\u8bbf\u95ee\u5bf9\u8c61\u8bbe\u8ba1\u5176\u5b9e\u662f\u5173\u4e8e ",(0,c.jsx)(d.code,{children:"GoFrame"})," \u6846\u67b6\u5de5\u7a0b\u5316\u5b9e\u8df5\u4e2d\u6bd4\u8f83\u91cd\u8981\u4e00\u5757\u8bbe\u8ba1\u3002"]}),"\n",(0,c.jsxs)(d.p,{children:[(0,c.jsx)(d.code,{children:"DAO"})," \u8bbe\u8ba1\u7ed3\u5408 ",(0,c.jsx)(d.code,{children:"GoFrame"})," \u7684 ",(0,c.jsx)(d.code,{children:"ORM"})," \u7ec4\u4ef6\u6027\u80fd\u548c\u6613\u7528\u6027\u90fd\u5f88\u5f3a\uff0c\u53ef\u4ee5\u6781\u5927\u63d0\u9ad8\u5f00\u53d1\u548c\u7ef4\u62a4\u6548\u7387\u3002\u770b\u5b8c\u672c\u7ae0\u8282\u5185\u5bb9\u4e4b\u540e\uff0c\u5c0f\u4f19\u4f34\u4eec\u5e94\u8be5\u80fd\u591f\u7406\u89e3\u5e76\u4f53\u4f1a\u5230\u4f7f\u7528 ",(0,c.jsx)(d.code,{children:"DAO"})," \u6570\u636e\u5e93\u8bbf\u95ee\u5bf9\u8c61\u8bbe\u8ba1\u7684\u4f18\u70b9\u3002"]}),"\n",(0,c.jsx)(d.p,{children:"\u6211\u6bcf\u5e74\u90fd\u4f1a\u6765\u56de\u91cd\u65b0\u5ba1\u89c6\u8fd9\u7bc7\u6587\u7ae0\uff0c\u770b\u770b\u662f\u5426\u53ef\u4ee5\u5220\u9664\u4e00\u4e9b\u5730\u65b9\u3002\u53ef\u662f\u6bcf\u6b21\u90fd\u500d\u611f\u5931\u671b\uff0c\u56e0\u4e3a\u8fd9\u7bc7\u6587\u7ae0\u5bf9\u5f53\u4eca\u73b0\u72b6\u4ecd\u65e7\u9002\u7528\u3002\u5e76\u4e14\u4eca\u5e74\uff0c\u6211\u8fd8\u65b0\u589e\u4e86\u5185\u5bb9\u3002"}),"\n",(0,c.jsxs)(d.h2,{id:"\u4e00\u73b0\u6709-orm-\u4f7f\u7528\u793a\u4f8b",children:["\u4e00\u3001\u73b0\u6709 ",(0,c.jsx)(d.code,{children:"ORM"})," \u4f7f\u7528\u793a\u4f8b"]}),"\n",(0,c.jsx)(d.h3,{id:"1\u9700\u8981\u5b9a\u4e49\u6a21\u578b",children:"1\u3001\u9700\u8981\u5b9a\u4e49\u6a21\u578b"}),"\n",(0,c.jsxs)(d.p,{children:[(0,c.jsx)(d.img,{src:s(282557).A+"",width:"1065",height:"432"}),"\u7528\u6237\u57fa\u7840\u8868\uff08\u4ec5\u4f5c\u6f14\u793a\uff0c\u771f\u5b9e\u7684\u8868\u6709\u6570\u5341\u4e2a\u5b57\u6bb5\uff09"]}),"\n",(0,c.jsxs)(d.p,{children:[(0,c.jsx)(d.img,{src:s(591289).A+"",width:"1160",height:"646"}),"\u533b\u751f\u4fe1\u606f\u8868\uff08\u4ec5\u4f5c\u6f14\u793a\uff0c\u771f\u5b9e\u7684\u8868\u6709\u4e0a\u767e\u4e2a\u5b57\u6bb5\uff09"]}),"\n",(0,c.jsxs)(d.h3,{id:"2-grpc-\u63a5\u53e3\u5b9e\u73b0\u793a\u4f8b",children:["2\u3001 ",(0,c.jsx)(d.code,{children:"GRPC"})," \u63a5\u53e3\u5b9e\u73b0\u793a\u4f8b"]}),"\n",(0,c.jsxs)(d.p,{children:["\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,c.jsx)(d.code,{children:"GRPC"})," \u67e5\u8be2\u4fe1\u606f\u63a5\u53e3\u3002"]}),"\n",(0,c.jsxs)(d.p,{children:[(0,c.jsx)(d.img,{src:s(695761).A+"",width:"1154",height:"894"}),"\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,c.jsx)(d.code,{children:"GRPC"})," \u6570\u636e\u67e5\u8be2\u63a5\u53e3"]}),"\n",(0,c.jsx)(d.h2,{id:"\u4e8c\u73b0\u6709\u75db\u70b9\u63cf\u8ff0",children:"\u4e8c\u3001\u73b0\u6709\u75db\u70b9\u63cf\u8ff0"}),"\n",(0,c.jsxs)(d.h3,{id:"1\u5fc5\u987b\u8981\u5b9a\u4e49-tag-\u5173\u8054\u8868\u7ed3\u6784\u4e0e-struct-\u5c5e\u6027\u65e0\u6cd5\u505a\u5230\u81ea\u52a8\u6620\u5c04",children:["1\u3001\u5fc5\u987b\u8981\u5b9a\u4e49 ",(0,c.jsx)(d.code,{children:"tag"})," \u5173\u8054\u8868\u7ed3\u6784\u4e0e ",(0,c.jsx)(d.code,{children:"struct"})," \u5c5e\u6027\uff0c\u65e0\u6cd5\u505a\u5230\u81ea\u52a8\u6620\u5c04"]}),"\n",(0,c.jsxs)(d.p,{children:["\u8868\u5b57\u6bb5\u4e0e\u5b9e\u4f53\u5bf9\u8c61\u5c5e\u6027\u540d\u79f0\u4e4b\u95f4\u539f\u672c\u5c31\u6709\u4e00\u5b9a\u7684\u5173\u8054\u89c4\u5219\uff0c\u6ca1\u6709\u5fc5\u8981\u5b9a\u4e49\u548c\u7ef4\u62a4\u5927\u91cf\u7684 ",(0,c.jsx)(d.code,{children:"tag"})," \u5b9a\u4e49\u3002"]}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.img,{src:s(846996).A+"",width:"769",height:"644"})}),"\n",(0,c.jsxs)(d.p,{children:["\u5927\u91cf\u975e\u5fc5\u8981\u7684 ",(0,c.jsx)(d.code,{children:"tag"})," \u5b9a\u4e49\uff0c\u7528\u4e8e\u6307\u5b9a\u6570\u636e\u8868\u5b57\u6bb5\u5230\u5b9e\u4f53\u5bf9\u8c61\u5c5e\u6027\u6620\u5c04"]}),"\n",(0,c.jsx)(d.h3,{id:"2\u4e0d\u652f\u6301\u901a\u8fc7\u8fd4\u56de\u5bf9\u8c61\u6307\u5b9a\u9700\u8981\u67e5\u8be2\u7684\u5b57\u6bb5",children:"2\u3001\u4e0d\u652f\u6301\u901a\u8fc7\u8fd4\u56de\u5bf9\u8c61\u6307\u5b9a\u9700\u8981\u67e5\u8be2\u7684\u5b57\u6bb5"}),"\n",(0,c.jsxs)(d.p,{children:["\u65e0\u6cd5\u901a\u8fc7\u8fd4\u56de\u7684\u5bf9\u8c61\u6570\u636e\u7ed3\u6784\u6307\u5b9a\u67e5\u8be2\u5b57\u6bb5\uff0c\u8981\u4e48\u53ea\u80fd ",(0,c.jsx)(d.code,{children:"SELECT *"})," \uff0c\u8981\u4e48\u53ea\u80fd\u901a\u8fc7\u989d\u5916\u7684\u65b9\u6cd5\u624b\u52a8\u5f55\u5165\u67e5\u8be2\u5b57\u6bb5\uff0c\u6548\u7387\u5f88\u4f4e\u4e0b\u3002"]}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.img,{src:s(976681).A+"",width:"912",height:"657"})}),"\n",(0,c.jsxs)(d.p,{children:["\u5e38\u89c1\u7684 ",(0,c.jsx)(d.code,{children:"SELECT *"})," \u64cd\u4f5c\uff0c\u65e0\u6cd5\u6839\u636e\u63a5\u53e3\u5bf9\u8c61\u6307\u5b9a\u67e5\u8be2\u5b57\u6bb5"]}),"\n",(0,c.jsx)(d.h3,{id:"3\u65e0\u6cd5\u5bf9\u8f93\u5165\u5bf9\u8c61\u5c5e\u6027\u540d\u79f0\u8fdb\u884c\u81ea\u52a8\u5b57\u6bb5\u8fc7\u6ee4",children:"3\u3001\u65e0\u6cd5\u5bf9\u8f93\u5165\u5bf9\u8c61\u5c5e\u6027\u540d\u79f0\u8fdb\u884c\u81ea\u52a8\u5b57\u6bb5\u8fc7\u6ee4"}),"\n",(0,c.jsx)(d.p,{children:"\u5b9a\u4e49\u4e86\u8f93\u5165\u4e0e\u8f93\u51fa\u6570\u636e\u7ed3\u6784\uff0c\u8f93\u51fa\u7684\u6570\u636e\u7ed3\u6784\u5df2\u7ecf\u5305\u542b\u6211\u4eec\u9700\u8981\u67e5\u8be2\u7684\u5b57\u6bb5\u540d\u79f0\u3002\u5f00\u53d1\u8005\u8f93\u5165\u5b9a\u4e49\u7684\u8fd4\u56de\u5bf9\u8c61\uff0c\u671f\u671b\u5728\u67e5\u8be2\u7684\u65f6\u5019\u4ec5\u67e5\u8be2\u6211\u9700\u8981\u7684\u5b57\u6bb5\u540d\u79f0\uff0c\u591a\u4f59\u7684\u5c5e\u6027\u5219\u4e0d\u4f1a\u6267\u884c\u67e5\u8be2\uff0c\u81ea\u52a8\u8fc7\u6ee4\u6389\u3002"}),"\n",(0,c.jsx)(d.h3,{id:"4\u9700\u8981\u521b\u5efa\u4e2d\u95f4\u67e5\u8be2\u7ed3\u679c\u5bf9\u8c61\u6267\u884c\u8d4b\u503c\u8f6c\u6362",children:"4\u3001\u9700\u8981\u521b\u5efa\u4e2d\u95f4\u67e5\u8be2\u7ed3\u679c\u5bf9\u8c61\u6267\u884c\u8d4b\u503c\u8f6c\u6362"}),"\n",(0,c.jsxs)(d.p,{children:["\u67e5\u8be2\u7ed3\u679c\u4e0d\u652f\u6301 ",(0,c.jsx)(d.code,{children:"struct"})," \u667a\u80fd\u8f6c\u6362\uff0c\u9700\u8981\u989d\u5916\u5b9a\u4e49\u4e00\u4e2a\u4e2d\u95f4 ",(0,c.jsx)(d.code,{children:"model"})," \u6a21\u578b\uff0c\u518d\u901a\u8fc7\u5176\u4ed6\u5de5\u5177\u8fdb\u884c\u590d\u5236\uff0c\u6548\u7387\u4f4e\u3002"]}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.img,{src:s(667656).A+"",width:"2252",height:"1294"})}),"\n",(0,c.jsx)(d.p,{children:"\u5b58\u5728\u4e2d\u95f4\u4e34\u65f6\u7684\u6a21\u578b\u5bf9\u8c61\uff0c\u7528\u4e8e\u627f\u63a5\u67e5\u8be2\u7ed3\u679c\u53ca\u8fd4\u56de\u7ed3\u6784\u5bf9\u8c61\u8d4b\u503c\u8f6c\u6362"}),"\n",(0,c.jsx)(d.h3,{id:"5\u9700\u8981\u63d0\u524d\u521d\u59cb\u5316\u8fd4\u56de\u5bf9\u8c61\u4e0d\u7ba1\u6709\u65e0\u67e5\u8be2\u5230\u6570\u636e",children:"5\u3001\u9700\u8981\u63d0\u524d\u521d\u59cb\u5316\u8fd4\u56de\u5bf9\u8c61\uff0c\u4e0d\u7ba1\u6709\u65e0\u67e5\u8be2\u5230\u6570\u636e"}),"\n",(0,c.jsxs)(d.p,{children:["\u8fd9\u79cd\u65b9\u5f0f\u4e0d\u4ec5\u4e0d\u4f18\u96c5\uff0c\u5bf9\u6027\u80fd\u4e5f\u6709\u5f71\u54cd\uff0c\u8fd8\u5bf9 ",(0,c.jsx)(d.code,{children:"GC"})," \u4e0d\u592a\u53cb\u597d\u3002\u671f\u671b\u67e5\u8be2\u5230\u6570\u636e\u65f6\u518d\u81ea\u52a8\u521b\u5efa\u8fd4\u56de\u5bf9\u8c61\uff0c\u6ca1\u6709\u67e5\u8be2\u5230\u6570\u636e\u65f6\u4ec0\u4e48\u90fd\u4e0d\u8981\u505a\u3002"]}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.img,{src:s(702319).A+"",width:"935",height:"640"})}),"\n",(0,c.jsx)(d.p,{children:"\u9700\u8981\u9884\u5148\u521d\u59cb\u5316\u8fd4\u56de\u5bf9\u8c61\uff0c\u4e0d\u7ba1\u6709\u65e0\u67e5\u8be2\u5230\u6570\u636e"}),"\n",(0,c.jsxs)(d.h3,{id:"6\u9879\u76ee\u901a\u7bc7\u4f7f\u7528\u5e95\u5c42\u88f8-db-\u5bf9\u8c61\u64cd\u4f5c\u6ca1\u6709\u5bf9\u8c61\u5c01\u88c5\u64cd\u4f5c",children:["6\u3001\u9879\u76ee\u901a\u7bc7\u4f7f\u7528\u5e95\u5c42\u88f8 ",(0,c.jsx)(d.code,{children:"DB"})," \u5bf9\u8c61\u64cd\u4f5c\uff0c\u6ca1\u6709\u5bf9\u8c61\u5c01\u88c5\u64cd\u4f5c"]}),"\n",(0,c.jsxs)(d.p,{children:["\u5927\u90e8\u5206\u7684 ",(0,c.jsx)(d.code,{children:"Golang"})," \u521d\u5b66\u8005\u4f3c\u4e4e\u90fd\u503e\u5411\u4e8e\u4f7f\u7528\u4e00\u4e2a\u5168\u5c40\u7684 ",(0,c.jsx)(d.code,{children:"DB"})," \u5bf9\u8c61\uff0c\u5728\u67e5\u8be2\u7684\u65f6\u5019\u901a\u8fc7 ",(0,c.jsx)(d.code,{children:"DB"})," \u5bf9\u8c61\u751f\u6210\u7279\u5b9a\u8868\u7684 ",(0,c.jsx)(d.code,{children:"Model"})," \u5bf9\u8c61\u518d\u6267\u884c ",(0,c.jsx)(d.code,{children:"CURD"})," \u64cd\u4f5c\uff0c\u8fd9\u662f\u4e00\u79cd\u9762\u5411\u8fc7\u7a0b\u7684\u4f7f\u7528\u65b9\u5f0f\u3002\u8fd9\u79cd\u65b9\u5f0f\u5e76\u6ca1\u6709\u4ee3\u7801\u5206\u5c42\u7684\u8bbe\u8ba1\u53ef\u8a00\uff0c ",(0,c.jsx)(d.strong,{children:"\u4f7f\u5f97\u6570\u636e\u64cd\u4f5c\u548c\u4e1a\u52a1\u903b\u8f91\u9ad8\u5ea6\u8026\u5408"}),"\u3002"]}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.img,{src:s(749758).A+"",width:"1133",height:"668"})}),"\n",(0,c.jsxs)(d.p,{children:["\u539f\u59cb\u6570\u636e\u5e93\u5bf9\u8c61\u64cd\u4f5c\u65b9\u5f0f\uff0c\u6ca1\u6709 ",(0,c.jsx)(d.code,{children:"DAO"})," \u5c01\u88c5"]}),"\n",(0,c.jsx)(d.h3,{id:"7\u968f\u5904\u53ef\u89c1\u7684\u5b57\u7b26\u4e32\u786c\u7f16\u7801\u5982\u8868\u540d\u548c\u5b57\u6bb5\u7684\u786c\u7f16\u7801",children:"7\u3001\u968f\u5904\u53ef\u89c1\u7684\u5b57\u7b26\u4e32\u786c\u7f16\u7801\uff0c\u5982\u8868\u540d\u548c\u5b57\u6bb5\u7684\u786c\u7f16\u7801"}),"\n",(0,c.jsxs)(d.p,{children:["\u4e3e\u4e2a\u4f8b\u5b50\uff0c ",(0,c.jsx)(d.code,{children:"userId"})," \u8fd9\u4e2a\u5b57\u6bb5\u5047\u5982\u4e00\u4e0d\u5c0f\u5fc3\u5199\u6210\u4e86 ",(0,c.jsx)(d.code,{children:"UserId"})," \u6216\u8005 ",(0,c.jsx)(d.code,{children:"userid"}),"\uff0c\u6d4b\u8bd5\u7684\u65f6\u5019\u5982\u679c\u6ca1\u6709\u5b8c\u5168\u8986\u76d6\u5230\uff0c\u5728\u4e00\u5b9a\u7684\u6761\u4ef6\u4e0b\u624d\u89e6\u53d1\u67e5\u8be2\u64cd\u4f5c\uff0c\u662f\u4e0d\u662f\u4f1a\u9020\u6210\u65b0\u7684\u4e00\u573a\u4e8b\u6545\u5462\uff1f"]}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.img,{src:s(836781).A+"",width:"2402",height:"1304"})}),"\n",(0,c.jsx)(d.p,{children:"\u5927\u91cf\u7684\u5b57\u7b26\u4e32\u786c\u7f16\u7801"}),"\n",(0,c.jsx)(d.h3,{id:"8\u5e95\u5c42orm\u5f15\u8d77\u592a\u591a\u7684\u6307\u9488\u5c5e\u6027\u5b9a\u4e49",children:"8\u3001\u5e95\u5c42ORM\u5f15\u8d77\u592a\u591a\u7684\u6307\u9488\u5c5e\u6027\u5b9a\u4e49"}),"\n",(0,c.jsxs)(d.p,{children:["\u6307\u9488\u5c5e\u6027\u5bf9\u8c61\u4e3a\u4e1a\u52a1\u903b\u8f91\u5904\u7406\u57cb\u4e0b\u9690\u60a3\uff0c\u5f00\u53d1\u8005\u5728\u4ee3\u7801\u903b\u8f91\u4e2d\u9700\u8981\u5728\u6307\u9488\u4e0e\u5c5e\u6027\u4e4b\u95f4\u6765\u56de\u5207\u6362\uff0c\u7279\u522b\u662f\u4e00\u4e9b\u57fa\u7840\u7c7b\u578b\u5f80\u5f80\u9700\u8981\u901a\u8fc7\u91cd\u65b0\u53d6\u503c\u7684\u65b9\u5f0f\u4f20\u9012\u53c2\u6570\u3002\u5982\u679c\u8f93\u5165\u53c2\u6570\u662f ",(0,c.jsx)(d.code,{children:"interface{}"})," \u7c7b\u578b\uff0c\u90a3\u4e48\u66f4\u5bb9\u6613\u5f15\u8d77 ",(0,c.jsx)(d.code,{children:"BUG"}),"\u3002"]}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.img,{src:s(414987).A+"",width:"2464",height:"1730"})}),"\n",(0,c.jsxs)(d.p,{children:[(0,c.jsx)(d.code,{children:"BUG"})," \u793a\u4f8b\uff0c\u6307\u9488\u5c5e\u6027\u4f7f\u7528\u4e0d\u5f53\uff0c\u5f15\u8d77\u5730\u5740\u6bd4\u8f83\u903b\u8f91\u9519\u8bef\u3002"]}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.img,{src:s(962911).A+"",width:"2264",height:"1716"})}),"\n",(0,c.jsx)(d.p,{children:"\u540c\u65f6\u4e5f\u5f71\u54cd\u4e86\u4e1a\u52a1\u6a21\u578b\u7ed3\u6784\u4f53\u5b9a\u4e49\u8bbe\u8ba1\uff0c\u5bf9\u5f00\u53d1\u8005\u9020\u6210\u4e86\u9519\u8bef\u4e60\u60ef\u5f15\u5bfc\uff08\u4e0a\u5c42\u4e1a\u52a1\u6a21\u578b\u7684\u6307\u9488\u5c5e\u6027\u5f80\u5f80\u662f\u4e3a\u4e86\u8fce\u5408\u5e95\u5c42\u6570\u636e\u8868\u5b9e\u4f53\u5bf9\u8c61\uff0c\u65b9\u4fbf\u6570\u636e\u4f20\u9012\uff09\u3002"}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.img,{src:s(883384).A+"",width:"2432",height:"1730"})}),"\n",(0,c.jsx)(d.p,{children:"\u503c\u5f97\u6ce8\u610f\u4e00\u4e2a\u5e38\u89c1\u9519\u8bef\uff0c\u5c31\u662f\u5c06\u5e95\u5c42\u6570\u636e\u5b9e\u4f53\u6a21\u578b\u5f53\u505a\u9876\u5c42\u4e1a\u52a1\u6a21\u578b\u4f7f\u7528\u3002\u7279\u522b\u662f\u5728\u5e95\u5c42\u6570\u636e\u5b9e\u4f53\u5bf9\u8c61\u4f7f\u7528\u6307\u9488\u5c5e\u6027\u7684\u573a\u666f\u4e0b\uff0c\u8be5\u95ee\u9898\u5341\u5206\u660e\u663e\u3002"}),"\n",(0,c.jsx)(d.h3,{id:"9\u53ef\u89c2\u6d4b\u6027\u7684\u652f\u6301tracingmetricslogging",children:"9\u3001\u53ef\u89c2\u6d4b\u6027\u7684\u652f\u6301\uff1aTracing\u3001Metrics\u3001Logging"}),"\n",(0,c.jsx)(d.p,{children:"\u6570\u636e\u5e93ORM\u4f5c\u4e3a\u4e1a\u52a1\u9879\u76ee\u6700\u5173\u952e\u6838\u5fc3\u7684\u7ec4\u4ef6\uff0c\u53ef\u89c2\u6d4b\u6027\u7684\u652f\u6301\u81f3\u5173\u91cd\u8981\u3002"}),"\n",(0,c.jsx)(d.h3,{id:"10\u6570\u636e\u96c6\u5408\u4e0e\u4ee3\u7801\u6570\u636e\u5b9e\u4f53\u7ed3\u6784\u4e0d\u4e00\u81f4",children:"10\u3001\u6570\u636e\u96c6\u5408\u4e0e\u4ee3\u7801\u6570\u636e\u5b9e\u4f53\u7ed3\u6784\u4e0d\u4e00\u81f4"}),"\n",(0,c.jsx)(d.p,{children:"\u5f53\u901a\u8fc7\u4eba\u5de5\u7ef4\u62a4\u6570\u636e\u5b9e\u4f53\u7ed3\u6784\u65f6\uff0c\u6570\u636e\u96c6\u5408\u4e0e\u4ee3\u7801\u6570\u636e\u5b9e\u4f53\u7ed3\u6784\u5f80\u5f80\u4f1a\u51fa\u73b0\u4e0d\u4e00\u81f4\u7684\u98ce\u9669\uff0c\u5f00\u53d1\u548c\u7ef4\u62a4\u6210\u672c\u9ad8\u3002"}),"\n",(0,c.jsx)(d.h2,{id:"\u4e09\u6539\u8fdb\u65b9\u6848\u8bbe\u8ba1",children:"\u4e09\u3001\u6539\u8fdb\u65b9\u6848\u8bbe\u8ba1"}),"\n",(0,c.jsx)(d.p,{children:"1\u3001\u67e5\u8be2\u7ed3\u679c\u5bf9\u8c61\u65e0\u9700\u7279\u6b8a\u6807\u7b7e\u5b9a\u4e49\uff0c\u5168\u81ea\u52a8\u5173\u8054\u6620\u5c04"}),"\n",(0,c.jsxs)(d.p,{children:["2\u3001\u652f\u6301\u6839\u636e\u6307\u5b9a\u5bf9\u8c61\u81ea\u52a8\u8bc6\u522b\u67e5\u8be2\u5b57\u6bb5\uff0c\u800c\u4e0d\u662f\u5168\u90e8 ",(0,c.jsx)(d.code,{children:"SELECT *"})]}),"\n",(0,c.jsx)(d.p,{children:"3\u3001\u652f\u6301\u6839\u636e\u6307\u5b9a\u5bf9\u8c61\u81ea\u52a8\u8fc7\u6ee4\u4e0d\u5b58\u5728\u7684\u5b57\u6bb5\u5185\u5bb9"}),"\n",(0,c.jsxs)(d.p,{children:["4\u3001\u4f7f\u7528 ",(0,c.jsx)(d.code,{children:"DAO"})," \u5bf9\u8c61\u5c01\u88c5\u4ee3\u7801\u8bbe\u8ba1\uff0c\u901a\u8fc7\u5bf9\u8c61\u65b9\u5f0f\u64cd\u4f5c\u6570\u636e\u8868"]}),"\n",(0,c.jsxs)(d.p,{children:["5\u3001 ",(0,c.jsx)(d.code,{children:"DAO"})," \u5bf9\u8c61\u5c06\u5173\u8054\u7684\u8868\u540d\u53ca\u5b57\u6bb5\u540d\u8fdb\u884c\u5c01\u88c5\uff0c\u907f\u514d\u5b57\u7b26\u4e32\u786c\u7f16\u7801"]}),"\n",(0,c.jsx)(d.p,{children:"6\u3001\u65e0\u9700\u63d0\u524d\u5b9a\u4e49\u5b9e\u4f53\u5bf9\u8c61\u63a5\u53d7\u8fd4\u56de\u7ed3\u679c\uff0c\u65e0\u9700\u521b\u5efa\u4e2d\u95f4\u5b9e\u4f53\u5bf9\u8c61\u7528\u4e8e\u63a5\u53e3\u8fd4\u56de\u5bf9\u8c61\u7684\u8d4b\u503c\u8f6c\u6362"}),"\n",(0,c.jsx)(d.p,{children:"7\u3001\u67e5\u8be2\u7ed3\u679c\u5bf9\u8c61\u65e0\u9700\u63d0\u524d\u521d\u59cb\u5316\uff0c\u67e5\u8be2\u5230\u6570\u636e\u65f6\u624d\u4f1a\u81ea\u52a8\u521b\u5efa"}),"\n",(0,c.jsxs)(d.p,{children:["8\u3001\u5185\u7f6e\u652f\u6301 ",(0,c.jsx)(d.code,{children:"OpenTelemetry"})," \u6807\u51c6\uff0c\u5b9e\u73b0\u53ef\u89c2\u6d4b\u6027\uff0c\u6781\u5927\u63d0\u9ad8\u7ef4\u62a4\u6548\u7387\u3001\u964d\u4f4e\u6210\u672c"]}),"\n",(0,c.jsxs)(d.p,{children:["9\u3001\u652f\u6301 ",(0,c.jsx)(d.code,{children:"SQL"})," \u65e5\u5fd7\u8f93\u51fa\u80fd\u529b\uff0c\u652f\u6301\u5f00\u5173\u529f\u80fd"]}),"\n",(0,c.jsxs)(d.p,{children:["10\u3001\u6570\u636e\u6a21\u578b\u3001\u6570\u636e\u64cd\u4f5c\u3001\u4e1a\u52a1\u903b\u8f91\u89e3\u8026\uff0c\u652f\u6301 ",(0,c.jsx)(d.code,{children:"Dao"})," \u53ca ",(0,c.jsx)(d.code,{children:"Model"})," \u4ee3\u7801\u5de5\u5177\u5316\u81ea\u52a8\u751f\u6210\uff0c\u4fdd\u8bc1\u6570\u636e\u96c6\u5408\u4e0e\u4ee3\u7801\u6570\u636e\u7ed3\u6784\u4e00\u81f4\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u4fbf\u4e8e\u89c4\u8303\u843d\u5730"]}),"\n",(0,c.jsx)(d.p,{children:"11\u3001\u7b49\u7b49\u3002"}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.img,{src:s(69200).A+"",width:"2464",height:"650"})}),"\n",(0,c.jsxs)(d.p,{children:["\u91c7\u7528 ",(0,c.jsx)(d.code,{children:"DAO"})," \u8bbe\u8ba1\u6539\u8fdb\u540e\u7684\u4ee3\u7801\u793a\u4f8b"]})]})}function o(e={}){const{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,c.jsx)(d,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},667656:(e,d,s)=>{s.d(d,{A:()=>c});const c=s.p+"assets/images/05bf7722da09a27e7ca82bf6e0f89271-c1fa3d038052e85f8ac34728e8852f44.png"},702319:(e,d,s)=>{s.d(d,{A:()=>c});const c=s.p+"assets/images/239f4b75b4b77e85bca523371a7dd1b4-9c664ceb37f7b1fda957f96d5864811b.png"},836781:(e,d,s)=>{s.d(d,{A:()=>c});const c=s.p+"assets/images/46d8aae38995327c6ce26832d21f628b-aab20cf6cfc3aeb8b4bd9d12e9e87b3d.png"},414987:(e,d,s)=>{s.d(d,{A:()=>c});const c=s.p+"assets/images/620c8a9a4a47de0243748d588aa0bb51-7d237ccc764b58b03cb7d9c1e0e49d53.png"},976681:(e,d,s)=>{s.d(d,{A:()=>c});const c=s.p+"assets/images/70e01c869632543b846b04a1696e9737-cd7d25aa20a2d730369db62469f90510.png"},282557:(e,d,s)=>{s.d(d,{A:()=>c});const c=s.p+"assets/images/77daf5d299eabade856d950ab3161f94-b50361a3a6232ba6d81f0d79e67df4c5.png"},69200:(e,d,s)=>{s.d(d,{A:()=>c});const c=s.p+"assets/images/90537635dc3b5623060fa9edfc49948a-6e0517950a26ea1562c25067f1c811ec.png"},695761:(e,d,s)=>{s.d(d,{A:()=>c});const c=s.p+"assets/images/b45b3af0a0bdc9ad30f739e31d0039ae-88e9e808d4ffdf213440b3e3bdc4770b.png"},883384:(e,d,s)=>{s.d(d,{A:()=>c});const c=s.p+"assets/images/bba716ea66e03727826ae6401ce01b2d-d3b19578993ec7e5f59cc5025a0e5fb1.png"},749758:(e,d,s)=>{s.d(d,{A:()=>c});const c=s.p+"assets/images/d73fdaa5b76b831db0a2c1069742c218-105f68f458e290a2d03dc0a450c4f6fe.png"},962911:(e,d,s)=>{s.d(d,{A:()=>c});const c=s.p+"assets/images/daa08ad1e9102f4ac964a8176a80e061-867ac37ef33fa994f2f6af27c3fcc2c7.png"},846996:(e,d,s)=>{s.d(d,{A:()=>c});const c=s.p+"assets/images/f1bb2d203d4fe4f2c44bbc7e14b7832a-f3782e20453de0d57c8efeb5e5f2238a.png"},591289:(e,d,s)=>{s.d(d,{A:()=>c});const c=s.p+"assets/images/f4e8c70ee25ec329f2b64bb3a53ff503-1d32e08995f781aa0ffe379eba54a94d.png"},28453:(e,d,s)=>{s.d(d,{R:()=>r,x:()=>l});var c=s(296540);const n={},i=c.createContext(n);function r(e){const d=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),c.createElement(i.Provider,{value:d},e.children)}}}]);
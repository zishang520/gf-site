"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[32663],{55479:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=d(74848),c=d(28453);const s={slug:"/design/tracing",title:"\u5168\u94fe\u8def\u8ddf\u8e2a\u8bbe\u8ba1",sidebar_position:4,hide_title:!0},r=void 0,l={id:"\u6846\u67b6\u8bbe\u8ba1/\u5168\u94fe\u8def\u8ddf\u8e2a\u8bbe\u8ba1",title:"\u5168\u94fe\u8def\u8ddf\u8e2a\u8bbe\u8ba1",description:"\u53ef\u89c2\u6d4b\u6027\u662f\u5f88\u91cd\u8981\u7684\uff0c\u76ee\u524d\u5df2\u7ecf\u6709\u6bd4\u8f83\u4e0d\u9519\u7684 OpenTelemetry \u6807\u51c6\uff0c\u5404\u4e2a\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u4ee5\u53ca\u5382\u5546\u90fd\u6309\u7167\u8fd9\u5957\u6807\u51c6\u5e93\u6765\u66b4\u9732\u548c\u5bf9\u63a5\u89c2\u6d4b\u6570\u636e\u5c06\u4f1a\u66f4\u52a0\u7b80\u4fbf\u3002\u6211\u4eec\u672c\u6b21\u804a\u5230\u7684\uff0c\u662f\u94fe\u8def\u8ddf\u8e2a\uff0c\u5b83\u662f\u53ef\u89c2\u6d4b\u6027\u4e2d\u5f88\u91cd\u8981\u7684\u4e00\u9879\u6307\u6807\u3002",source:"@site/docs/\u6846\u67b6\u8bbe\u8ba1/\u5168\u94fe\u8def\u8ddf\u8e2a\u8bbe\u8ba1.md",sourceDirName:"\u6846\u67b6\u8bbe\u8ba1",slug:"/design/tracing",permalink:"/gf-site/en/docs/design/tracing",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u6846\u67b6\u8bbe\u8ba1/\u5168\u94fe\u8def\u8ddf\u8e2a\u8bbe\u8ba1.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730384077e3,sidebarPosition:4,frontMatter:{slug:"/design/tracing",title:"\u5168\u94fe\u8def\u8ddf\u8e2a\u8bbe\u8ba1",sidebar_position:4,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"DAO-\u5de5\u7a0b\u75db\u70b9\u53ca\u6539\u8fdb",permalink:"/gf-site/en/docs/design/project/dao-improvement"},next:{title:"\u5168\u9519\u8bef\u5806\u6808\u8bbe\u8ba1",permalink:"/gf-site/en/docs/design/error-stack"}},t={},o=[{value:"\u4e00\u3001\u9879\u76ee\u5b9e\u8df5\u7684\u75db\u70b9",id:"\u4e00\u9879\u76ee\u5b9e\u8df5\u7684\u75db\u70b9",level:2},{value:"1\u3001\u7ec4\u4ef6\u6ca1\u6709\u4e25\u683c\u6267\u884c\u6807\u51c6",id:"1\u7ec4\u4ef6\u6ca1\u6709\u4e25\u683c\u6267\u884c\u6807\u51c6",level:3},{value:"2\u3001\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u6742\u4e71\u65e0\u7ae0",id:"2\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u6742\u4e71\u65e0\u7ae0",level:3},{value:"3\u3001\u4e1a\u52a1\u903b\u8f91\u6613\u4e22\u5931\u94fe\u8def",id:"3\u4e1a\u52a1\u903b\u8f91\u6613\u4e22\u5931\u94fe\u8def",level:3},{value:"\u4e8c\u3001\u6846\u67b6\u5168\u94fe\u8def\u8ddf\u8e2a",id:"\u4e8c\u6846\u67b6\u5168\u94fe\u8def\u8ddf\u8e2a",level:2},{value:"1\u3001\u7edf\u4e00\u6846\u67b6",id:"1\u7edf\u4e00\u6846\u67b6",level:3},{value:"2\u3001\u6807\u51c6\u843d\u5730",id:"2\u6807\u51c6\u843d\u5730",level:3},{value:"3\u3001\u65e5\u5fd7\u652f\u6301",id:"3\u65e5\u5fd7\u652f\u6301",level:3},{value:"4\u3001\u89c4\u8303\u68c0\u6d4b\u5de5\u5177",id:"4\u89c4\u8303\u68c0\u6d4b\u5de5\u5177",level:3},{value:"5\u3001\u94fe\u8def\u4f20\u9012\u652f\u6301",id:"5\u94fe\u8def\u4f20\u9012\u652f\u6301",level:3}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u53ef\u89c2\u6d4b\u6027\u662f\u5f88\u91cd\u8981\u7684\uff0c\u76ee\u524d\u5df2\u7ecf\u6709\u6bd4\u8f83\u4e0d\u9519\u7684 ",(0,i.jsx)(n.code,{children:"OpenTelemetry"})," \u6807\u51c6\uff0c\u5404\u4e2a\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u4ee5\u53ca\u5382\u5546\u90fd\u6309\u7167\u8fd9\u5957\u6807\u51c6\u5e93\u6765\u66b4\u9732\u548c\u5bf9\u63a5\u89c2\u6d4b\u6570\u636e\u5c06\u4f1a\u66f4\u52a0\u7b80\u4fbf\u3002\u6211\u4eec\u672c\u6b21\u804a\u5230\u7684\uff0c\u662f\u94fe\u8def\u8ddf\u8e2a\uff0c\u5b83\u662f\u53ef\u89c2\u6d4b\u6027\u4e2d\u5f88\u91cd\u8981\u7684\u4e00\u9879\u6307\u6807\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u5177\u6709\u5f88\u9ad8\u7684\u524d\u77bb\u6027\uff0c\u5728 ",(0,i.jsx)(n.code,{children:"OpenTelemetry"})," \u6807\u51c6\u8349\u7a3f\u9636\u6bb5\u4fbf\u5f00\u59cb\u6301\u7eed\u5173\u6ce8\uff0c\u5e76\u5728\u53d1\u5e03 ",(0,i.jsx)(n.code,{children:"OTEL"})," \u6807\u51c6\u53d1\u5e03\u4e86 ",(0,i.jsx)(n.code,{children:"alpha"})," \u7248\u672c\u65f6\uff0c\u6846\u67b6\u4fbf\u5f00\u59cb\u652f\u6301\u3002\u76ee\u524d ",(0,i.jsx)(n.code,{children:"OTEL"})," \u7684 ",(0,i.jsx)(n.code,{children:"Golang"})," \u5b9e\u73b0\u5df2\u7ecf\u7a33\u5b9a\u3002 ",(0,i.jsx)(n.code,{children:"GoFrame"}),' \u662f\u76ee\u524d\u4f17\u591a"\u6846\u67b6"\u4e2d\u5bf9 ',(0,i.jsx)(n.code,{children:"OTEL"})," \u6807\u51c6\u53ca\u5b9e\u73b0\u652f\u6301\u5f97\u6700\u597d\u7684\u6846\u67b6\uff0c\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u5373\u9690\u5f0f\u81ea\u5e26\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\u3002\u5e76\u4e14\u53ef\u89c2\u6d4b\u6027\u4e5f\u662f\u6846\u67b6\u672a\u6765\u53d1\u5c55\u7684\u91cd\u70b9\u7279\u6027\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u4e00\u9879\u76ee\u5b9e\u8df5\u7684\u75db\u70b9",children:"\u4e00\u3001\u9879\u76ee\u5b9e\u8df5\u7684\u75db\u70b9"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u9879\u76ee\u5b9e\u8df5\u4e2d\uff0c\u5b9e\u73b0\u94fe\u8def\u8ddf\u8e2a\u5f80\u5f80\u4f1a\u9047\u5230\u4ee5\u4e0b\u5e38\u89c1\u7684\u75db\u70b9\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"1\u7ec4\u4ef6\u6ca1\u6709\u4e25\u683c\u6267\u884c\u6807\u51c6",children:"1\u3001\u7ec4\u4ef6\u6ca1\u6709\u4e25\u683c\u6267\u884c\u6807\u51c6"}),"\n",(0,i.jsxs)(n.p,{children:["\u867d\u7136\u5df2\u7ecf\u6709 ",(0,i.jsx)(n.code,{children:"OTEL"})," \u6807\u51c6\uff0c\u4f46\u662f\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u6ca1\u6709\u4e25\u683c\u6267\u884c\u3002\u4f8b\u5982\uff0c\u5728\u65e5\u5fd7\u548c ",(0,i.jsx)(n.code,{children:"ORM"})," \u7ec4\u4ef6\u4e2d\uff0c\u6ca1\u6709\u4e25\u683c\u7ea6\u675f\u4f20\u9012 ",(0,i.jsx)(n.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"2\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u6742\u4e71\u65e0\u7ae0",children:"2\u3001\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u6742\u4e71\u65e0\u7ae0"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e1a\u52a1\u9879\u76ee\u62fc\u51d1\u4f7f\u7528\u7684\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u4f17\u591a\uff0c\u6709\u7684\u7ec4\u4ef6\u6ca1\u6709\u5b9e\u73b0\u94fe\u8def\u8ddf\u8e2a\u652f\u6301\uff0c\u66f4\u522b\u63d0 ",(0,i.jsx)(n.code,{children:"OTEL"})," \u6807\u51c6\u3002\u4f8b\u5982\uff0c\u547d\u4ee4\u7ba1\u7406\u3001\u914d\u7f6e\u7ba1\u7406\u3001\u7f13\u5b58\u7ba1\u7406\u3001\u6570\u636e\u6821\u9a8c\u3001\u5b9a\u65f6\u4efb\u52a1\u7b49\u7b49\u5e38\u7528\u7ec4\u4ef6\uff0c\u8868\u8c61\u5c31\u662f\u6ca1\u6709\u63d0\u4f9b ",(0,i.jsx)(n.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u4f20\u9012\u3002\u5f53\u4f7f\u7528\u5230\u7684\u7ec4\u4ef6\u4e0d\u652f\u6301\u94fe\u8def\u4f20\u9012\u65f6\uff0c\u94fe\u8def\u4fe1\u606f\u4fbf\u4e22\u5931\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"3\u4e1a\u52a1\u903b\u8f91\u6613\u4e22\u5931\u94fe\u8def",children:"3\u3001\u4e1a\u52a1\u903b\u8f91\u6613\u4e22\u5931\u94fe\u8def"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e1a\u52a1\u9879\u76ee\u4e2d\uff0c\u94fe\u8def\u8ddf\u8e2a\u6ca1\u6709\u68c0\u6d4b\u624b\u6bb5\uff0c\u4e5f\u5c31\u662f\u5199\u7740\u5199\u7740\uff0c\u94fe\u8def\u8ddf\u8e2a\u4e0d\u5c0f\u5fc3\u5c31\u5f04\u4e22\u4e86\u3002\u4f8b\u5982\u5728\u94fe\u8def\u4f20\u9012\u4e2d\u65b0\u5efa ",(0,i.jsx)(n.code,{children:"ctx"})," \u6216\u8005\u4f20\u9012 ",(0,i.jsx)(n.code,{children:"nil"})," \u7684 ",(0,i.jsx)(n.code,{children:"ctx"}),"\u3002\u5f53\u6218\u7565\u8bbe\u8ba1\u5728\u6218\u672f\u5b9e\u65bd\u65f6\u906d\u9047\u5230\u4e86\u732a\u961f\u53cb\uff0c\u9047\u5230\u95ee\u9898\u9700\u8981\u5b9a\u4f4d\u65f6\u5c31GG\u3002\u7279\u522b\u662f\u5728 ",(0,i.jsx)(n.code,{children:"toB"})," \u4e1a\u52a1\u4e2d\uff0c\u9047\u5230\u5de5\u5355\u9650\u65f6\u4f1a\u5f88\u6293\u72c2\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4e8c\u6846\u67b6\u5168\u94fe\u8def\u8ddf\u8e2a",children:"\u4e8c\u3001\u6846\u67b6\u5168\u94fe\u8def\u8ddf\u8e2a"}),"\n",(0,i.jsx)(n.h3,{id:"1\u7edf\u4e00\u6846\u67b6",children:"1\u3001\u7edf\u4e00\u6846\u67b6"}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,i.jsx)(n.code,{children:"GoFrame"})," \u662f\u4e00\u6b3e\u5de5\u7a0b\u5b8c\u5907\u7684\u57fa\u7840\u6846\u67b6\uff0c\u63d0\u4f9b\u4e86\u9879\u76ee\u6240\u9700\u7684\u901a\u7528\u6838\u5fc3\u57fa\u7840\u7ec4\u4ef6\uff0c\u56e0\u6b64\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u7edf\u4e00\u5730\u7684\u57fa\u7840\u7ec4\u4ef6\u5b9e\u73b0\u94fe\u8def\u8ddf\u8e2a\u6807\u51c6\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"2\u6807\u51c6\u843d\u5730",children:"2\u3001\u6807\u51c6\u843d\u5730"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u6846\u67b6\u7684\u6838\u5fc3\u7ec4\u4ef6\u4e2d\u5747\u589e\u52a0\u4e86\u5bf9 ",(0,i.jsx)(n.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u7684\u652f\u6301\uff0c\u5e76\u4e25\u683c\u6267\u884c ",(0,i.jsx)(n.code,{children:"OTEL"})," \u6807\u51c6\uff0c\u4fdd\u969c\u6807\u51c6\u7684\u987a\u5229\u843d\u5730\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"3\u65e5\u5fd7\u652f\u6301",children:"3\u3001\u65e5\u5fd7\u652f\u6301"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u5de5\u7a0b\u5b9e\u8df5\u4e2d\uff0c\u65e5\u5fd7\u5bf9\u4e8e\u94fe\u8def\u8ddf\u8e2a\u6765\u8bf4\u662f\u975e\u5e38\u91cd\u8981\u7684\u7ec4\u4ef6\uff0c\u5728\u5927\u90e8\u5206\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u901a\u8fc7\u94fe\u8def\u8ddf\u8e2a\u548c\u65e5\u5fd7\u5185\u5bb9\u6765\u6392\u67e5\u548c\u5b9a\u4f4d\u5177\u4f53\u95ee\u9898\u3002",(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u65e5\u5fd7\u7ec4\u4ef6\u4e5f\u652f\u6301\u5e76\u4e14\u4e25\u683c\u6267\u884c ",(0,i.jsx)(n.code,{children:"OTEL"})," \u6807\u51c6\uff0c\u56e0\u6b64\u53ea\u8981\u4f7f\u7528\u6846\u67b6\u7684\u65e5\u5fd7\u7ec4\u4ef6\uff0c\u90a3\u4e48\u4e5f\u4f1a\u81ea\u52a8\u6253\u5370\u94fe\u8def\u76f8\u5173\u4fe1\u606f\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"4\u89c4\u8303\u68c0\u6d4b\u5de5\u5177",children:"4\u3001\u89c4\u8303\u68c0\u6d4b\u5de5\u5177"}),"\n",(0,i.jsxs)(n.p,{children:["\u6846\u67b6\u901a\u8fc7\u5f00\u53d1\u5de5\u5177\u63d0\u4f9b\u5de5\u7a0b\u89c4\u8303\u68c0\u6d4b\u529f\u80fd\uff0c\u53ef\u4ee5\u81ea\u52a8\u68c0\u6d4b\u51fa\u4e1a\u52a1\u9879\u76ee\u4e2d\u7684\u94fe\u8def\u4e22\u5931\u95ee\u9898\uff0c\u8fdb\u4e00\u6b65\u63a8\u8fdb ",(0,i.jsx)(n.code,{children:"OTEL"})," \u6807\u51c6\u843d\u5730\uff0c\u4fdd\u969c\u9879\u76ee\u8d28\u91cf\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"5\u94fe\u8def\u4f20\u9012\u652f\u6301",children:"5\u3001\u94fe\u8def\u4f20\u9012\u652f\u6301"}),"\n",(0,i.jsxs)(n.p,{children:["\u94fe\u8def\u7684\u4f20\u9012\u4e5f\u9700\u8981\u7edf\u4e00\u7ec4\u4ef6\u3002\u76ee\u524d\u6bd4\u8f83\u5e38\u89c1\u7684\u534f\u8bae\u662f ",(0,i.jsx)(n.code,{children:"HTTP/GRPC"})," \u534f\u8bae\uff0c\u56e0\u6b64\u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86 ",(0,i.jsx)(n.code,{children:"HTTP Client/Server"})," \u4ee5\u53ca ",(0,i.jsx)(n.code,{children:"GRPC Client/Server"})," \u7ec4\u4ef6\u6765\u4fdd\u969c\u94fe\u8def\u7684\u4f20\u9012\u3002\u5e76\u4e14\u4e3a\u63d0\u9ad8\u4ecb\u5165\u6027\u548c\u6613\u7528\u6027\uff0c\u5c4f\u853d\u590d\u6742\u7684\u5e95\u5c42\u529f\u80fd\u7ec6\u8282\uff0c\u8fd9\u79cd\u94fe\u8def\u4f20\u9012\u662f\u5e95\u5c42 ",(0,i.jsx)(n.strong,{children:"\u9690\u5f0f\u5b9e\u73b0"})," \u7684\uff0c\u4f7f\u7528\u8005\u5bf9\u6b64\u4e8b\u5b8c\u5168\u65e0\u611f\u77e5\u7684\u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>l});var i=d(96540);const c={},s=i.createContext(c);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
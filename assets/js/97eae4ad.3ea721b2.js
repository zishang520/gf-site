"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[7617],{35006:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var s=n(74848),d=n(28453);const c={slug:"/design/initialization",title:"\u9690\u5f0f\u4e0e\u663e\u5f0f\u521d\u59cb\u5316",sidebar_position:7,hide_title:!0},t=void 0,o={id:"\u6846\u67b6\u8bbe\u8ba1/\u9690\u5f0f\u4e0e\u663e\u5f0f\u521d\u59cb\u5316",title:"\u9690\u5f0f\u4e0e\u663e\u5f0f\u521d\u59cb\u5316",description:'\u6211\u4eec\u77e5\u9053\u5728\u7a0b\u5e8f\u542f\u52a8\u65f6\u4f1a\u9700\u8981\u6267\u884c\u4e00\u4e9b"\u521d\u59cb\u5316"\u7684\u903b\u8f91\u64cd\u4f5c\uff0c\u4f8b\u5982\uff1a Server \u914d\u7f6e\u3001\u5404\u79cd\u6570\u636e\u5e93\uff08 MySQL\u3001 Redis\u3001 Kafka \u7b49\uff09\u914d\u7f6e\u3001\u4e1a\u52a1\u5bf9\u8c61\u914d\u7f6e\u7b49\u7b49\u3002\u7edd\u5927\u591a\u6570\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u6709\u4e24\u79cd\u521d\u59cb\u5316\u65b9\u5f0f\uff1a\u9690\u5f0f\u521d\u59cb\u5316\u548c\u663e\u5f0f\u521d\u59cb\u5316\u3002',source:"@site/docs/\u6846\u67b6\u8bbe\u8ba1/\u9690\u5f0f\u4e0e\u663e\u5f0f\u521d\u59cb\u5316.md",sourceDirName:"\u6846\u67b6\u8bbe\u8ba1",slug:"/design/initialization",permalink:"/gf-site/docs/design/initialization",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u6846\u67b6\u8bbe\u8ba1/\u9690\u5f0f\u4e0e\u663e\u5f0f\u521d\u59cb\u5316.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730384077e3,sidebarPosition:7,frontMatter:{slug:"/design/initialization",title:"\u9690\u5f0f\u4e0e\u663e\u5f0f\u521d\u59cb\u5316",sidebar_position:7,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u63a5\u53e3\u5316\u4e0e\u6cdb\u578b\u8bbe\u8ba1",permalink:"/gf-site/docs/design/interface-generic"},next:{title:"Golang\u679a\u4e3e\u503c\u7ba1\u7406",permalink:"/gf-site/docs/design/enums"}},r={},a=[{value:"\u4e00\u3001\u9690\u5f0f\u521d\u59cb\u5316",id:"\u4e00\u9690\u5f0f\u521d\u59cb\u5316",level:2},{value:"\u4e8c\u3001\u663e\u5f0f\u521d\u59cb\u5316",id:"\u4e8c\u663e\u5f0f\u521d\u59cb\u5316",level:2},{value:"\u4e09\u3001\u5982\u4f55\u9009\u62e9",id:"\u4e09\u5982\u4f55\u9009\u62e9",level:2}];function l(e){const i={admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",strong:"strong",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:['\u6211\u4eec\u77e5\u9053\u5728\u7a0b\u5e8f\u542f\u52a8\u65f6\u4f1a\u9700\u8981\u6267\u884c\u4e00\u4e9b"\u521d\u59cb\u5316"\u7684\u903b\u8f91\u64cd\u4f5c\uff0c\u4f8b\u5982\uff1a ',(0,s.jsx)(i.code,{children:"Server"})," \u914d\u7f6e\u3001\u5404\u79cd\u6570\u636e\u5e93\uff08 ",(0,s.jsx)(i.code,{children:"MySQL"}),"\u3001 ",(0,s.jsx)(i.code,{children:"Redis"}),"\u3001 ",(0,s.jsx)(i.code,{children:"Kafka"})," \u7b49\uff09\u914d\u7f6e\u3001\u4e1a\u52a1\u5bf9\u8c61\u914d\u7f6e\u7b49\u7b49\u3002\u7edd\u5927\u591a\u6570\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u6709\u4e24\u79cd\u521d\u59cb\u5316\u65b9\u5f0f\uff1a\u9690\u5f0f\u521d\u59cb\u5316\u548c\u663e\u5f0f\u521d\u59cb\u5316\u3002"]}),"\n",(0,s.jsx)(i.h2,{id:"\u4e00\u9690\u5f0f\u521d\u59cb\u5316",children:"\u4e00\u3001\u9690\u5f0f\u521d\u59cb\u5316"}),"\n",(0,s.jsx)(i.admonition,{type:"warning",children:(0,s.jsxs)(i.p,{children:["\u7279\u522b\u6ce8\u610f\uff1a\u5728 ",(0,s.jsx)(i.code,{children:"Golang v1.21"})," \u7248\u672c\u540e\uff0c ",(0,s.jsx)(i.code,{children:"init"})," \u7684\u521d\u59cb\u5316\u6267\u884c\u987a\u5e8f\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u5e76\u4e14\u53ef\u80fd\u4f1a\u5f15\u8d77\u4f9d\u8d56 ",(0,s.jsx)(i.code,{children:"init"})," \u6765\u6267\u884c\u521d\u59cb\u5316\u903b\u8f91\u7684\u5305\u7684\u95ee\u9898\u3002\u56e0\u6b64\uff0c\u4e0d\u5efa\u8bae\u5728 ",(0,s.jsx)(i.code,{children:"init"})," \u4e2d\u6267\u884c ",(0,s.jsx)(i.strong,{children:"\u590d\u6742\u7684\u521d\u59cb\u5316\u903b\u8f91"}),"\uff0c ",(0,s.jsx)(i.strong,{children:"\u5efa\u8bae\u662f\u901a\u8fc7\u663e\u5f0f\u8c03\u7528\u65b9\u5f0f\u6765\u5b9e\u73b0\u6a21\u5757\u590d\u6742\u7684\u521d\u59cb\u5316\u903b\u8f91"}),"\u3002"]})}),"\n",(0,s.jsxs)(i.p,{children:["\u9690\u5f0f\u521d\u59cb\u5316\u4e00\u822c\u901a\u8fc7\u5305\u521d\u59cb\u5316\u65b9\u6cd5 ",(0,s.jsx)(i.code,{children:"init"})," \u6267\u884c\u521d\u59cb\u5316\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u521d\u59cb\u5316\u903b\u8f91\u5b58\u5728\u9519\u8bef\u7684\u53ef\u80fd\uff0c\u7531\u4e8e ",(0,s.jsx)(i.code,{children:"init"})," \u65b9\u6cd5\u7684\u9519\u8bef\u65e0\u6cd5\u88ab\u4e0a\u5c42\u6355\u83b7\uff0c\u521d\u59cb\u5316\u51fa\u9519\u65f6\u5f80\u5f80\u76f4\u63a5\u7ec8\u6b62\u7a0b\u5e8f\u542f\u52a8\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(86949).A+"",width:"2880",height:"1646"})}),"\n",(0,s.jsx)(i.p,{children:"\u9690\u5f0f\u521d\u59cb\u5316\u51fa\u9519\u65f6\u5f80\u5f80\u76f4\u63a5\u7ec8\u6b62\u7a0b\u5e8f\u542f\u52a8"}),"\n",(0,s.jsx)(i.p,{children:"\u9690\u5f0f\u521d\u59cb\u5316\u7684\u597d\u5904\u662f\u4e0d\u9700\u8981\u624b\u52a8\u8c03\u7528\u521d\u59cb\u5316\u65b9\u6cd5\uff0c\u5bf9\u4e8e\u5f00\u53d1\u8005\u9690\u85cf\u4e86\u521d\u59cb\u5316\u7ec6\u8282\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u6ca1\u6709\u5fc3\u667a\u8d1f\u62c5\u3002\u4f46\u662f\u7f3a\u70b9\u4e5f\u540c\u6837\u5982\u6b64\uff0c\u5f00\u53d1\u8005\u4e0d\u77e5\u9053\u521d\u59cb\u5316\u7ec6\u8282\uff0c\u4e00\u65e6\u51fa\u73b0\u9519\u8bef\u65f6\uff0c\u5f88\u96be\u5feb\u901f\u5b9a\u4f4d\u9519\u8bef\u539f\u56e0\u3002\u56e0\u6b64\u4f7f\u7528\u9690\u5f0f\u521d\u59cb\u5316\u65f6\uff0c\u5f80\u5f80\u8981\u6c42\u5728\u521d\u59cb\u5316\u51fa\u9519\u65f6\u5c06\u8be6\u7ec6\u7684\u9519\u8bef\u4ee5\u53ca\u5806\u6808\u4fe1\u606f\u6253\u5370\u51fa\u6765\u4fbf\u4e8e\u9519\u8bef\u5b9a\u4f4d\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u5f88\u591a\u6a21\u5757\u90fd\u91c7\u7528\u4e86\u9690\u5f0f\u521d\u59cb\u5316\uff0c\u9690\u85cf\u6a21\u5757\u7684\u521d\u59cb\u5316\u7ec6\u8282\uff0c\u51cf\u5c11\u5f00\u53d1\u8005\u7684\u5fc3\u667a\u8d1f\u62c5\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(94446).A+"",width:"2880",height:"1646"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"GoFrame"})," \u4e2d\u7684\u6a21\u5757\u666e\u904d\u5b58\u5728\u9690\u5f0f\u521d\u59cb\u5316\u8bbe\u8ba1"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(84179).A+"",width:"3072",height:"1764"})}),"\n",(0,s.jsxs)(i.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(i.code,{children:"GoFrame"})," \u6846\u67b6\u7684 ",(0,s.jsx)(i.code,{children:"main"})," \u5305\u9690\u5f0f ",(0,s.jsx)(i.code,{children:"imports"})]}),"\n",(0,s.jsxs)(i.p,{children:["\u5173\u4e8e\u5305 ",(0,s.jsx)(i.code,{children:"init"})," \u65b9\u6cd5\u7684\u521d\u59cb\u5316\u6d41\u7a0b\uff1a"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(23214).A+"",width:"2166",height:"948"})}),"\n",(0,s.jsx)(i.h2,{id:"\u4e8c\u663e\u5f0f\u521d\u59cb\u5316",children:"\u4e8c\u3001\u663e\u5f0f\u521d\u59cb\u5316"}),"\n",(0,s.jsxs)(i.p,{children:["\u663e\u5f0f\u521d\u59cb\u5316\u8981\u6c42\u5f00\u53d1\u5728\u7a0b\u5e8f\u542f\u52a8\u65f6\uff0c\u5982\u5728 ",(0,s.jsx)(i.code,{children:"main"})," \u6216\u8005 ",(0,s.jsx)(i.code,{children:"boot"})," \u6a21\u5757\u4e2d\uff0c\u8c03\u7528\u7279\u5b9a\u7684\u65b9\u6cd5\u6765\u6267\u884c\u521d\u59cb\u5316\u64cd\u4f5c\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u57fa\u7840\u7ec4\u4ef6\u7684\u521d\u59cb\u5316\u5f80\u5f80\u91c7\u7528\u9690\u5f0f\u521d\u59cb\u5316\u591a\u4e00\u4e9b\uff0c\u56e0\u4e3a\u5bf9\u4e8e\u4f7f\u7528\u8005\u6765\u8bb2\u5e76\u4e0d\u5173\u5fc3\u5e95\u5c42\u57fa\u7840\u6a21\u5757\u7684\u521d\u59cb\u5316\u903b\u8f91\uff0c\u800c\u4e1a\u52a1\u6a21\u5757\u7684\u521d\u59cb\u5316\u5927\u591a\u6570\u4f1a\u91c7\u7528\u663e\u5f0f\u521d\u59cb\u5316\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{src:n(74943).A+"",width:"2880",height:"1646"}),"\u5728 ",(0,s.jsx)(i.code,{children:"boot"})," \u5305\u4e2d\u6309\u7167\u987a\u5e8f\u6267\u884c\u663e\u5f0f\u521d\u59cb\u5316"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{src:n(62287).A+"",width:"2880",height:"1646"}),"\u5728 ",(0,s.jsx)(i.code,{children:"main"})," \u5305\u8c03\u7528 ",(0,s.jsx)(i.code,{children:"boot.Boot()"})," \u65b9\u6cd5\u6267\u884c\u521d\u59cb\u5316"]}),"\n",(0,s.jsx)(i.h2,{id:"\u4e09\u5982\u4f55\u9009\u62e9",children:"\u4e09\u3001\u5982\u4f55\u9009\u62e9"}),"\n",(0,s.jsxs)(i.p,{children:["\u5728\u4e1a\u52a1\u573a\u666f\u4e0b\uff0c\u975e\u7279\u6b8a\u5fc5\u8981\uff0c\u6211\u4eec\u5efa\u8bae\u5927\u5bb6\u91c7\u7528 ",(0,s.jsx)(i.strong,{children:"\u663e\u5f0f\u521d\u59cb\u5316"})," \u7684\u65b9\u5f0f\uff0c\u4ee5\u4fdd\u8bc1\u66f4\u597d\u7684\u53ef\u7ef4\u62a4\u6027\u3002"]})]})}function h(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},74943:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/0124c249f03cd1f9fd78fe0970ffbda6-241d14f0a8db591cea05bc6d5329544a.png"},23214:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/40b3b7c2b75dcb36be348c840ca0eb3e-a3d6ae889acbf11171d2f637a0778f94.png"},62287:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/8417caae0e203d44d43c6bca369b3023-8ec6bf1660f960c0ddf5a615b2a00570.png"},86949:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/9190e5a8e2acf34a70442c6814a52327-0a3885ec217a5784bfe25e400e9ee9e5.png"},84179:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/b0b839a86595ee57f2c5a1b39c559df0-ebe01b0730cac6e1474a31c3cd8fb4d9.png"},94446:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/d019031d40a93f6318a933271d63c503-707bd17a2482aac25e2b7d6f0b4da59c.png"},28453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>o});var s=n(96540);const d={},c=s.createContext(d);function t(e){const i=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(c.Provider,{value:i},e.children)}}}]);
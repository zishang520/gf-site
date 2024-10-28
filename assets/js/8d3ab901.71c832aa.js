"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[70717],{666379:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>s,toc:()=>h});var d=r(474848),t=r(28453);const c={title:"\u62e6\u622a\u5668\u7ec4\u4ef6",sidebar_position:4},i=void 0,s={id:"\u5fae\u670d\u52a1\u5f00\u53d1/\u62e6\u622a\u5668\u7ec4\u4ef6",title:"\u62e6\u622a\u5668\u7ec4\u4ef6",description:"GRPC \u652f\u6301\u62e6\u622a\u5668\u7279\u6027\uff0c\u63d0\u9ad8\u4e86 GRPC \u7684\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027\u3002",source:"@site/versioned_docs/version-2.5.x/4-\u5fae\u670d\u52a1\u5f00\u53d1/4-\u62e6\u622a\u5668\u7ec4\u4ef6.md",sourceDirName:"4-\u5fae\u670d\u52a1\u5f00\u53d1",slug:"/\u5fae\u670d\u52a1\u5f00\u53d1/\u62e6\u622a\u5668\u7ec4\u4ef6",permalink:"/docs/2.5.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u62e6\u622a\u5668\u7ec4\u4ef6",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/4-\u5fae\u670d\u52a1\u5f00\u53d1/4-\u62e6\u622a\u5668\u7ec4\u4ef6.md",tags:[],version:"2.5.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:4,frontMatter:{title:"\u62e6\u622a\u5668\u7ec4\u4ef6",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u670d\u52a1\u7aef\u914d\u7f6e",permalink:"/docs/2.5.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e"},next:{title:"\u670d\u52a1\u6ce8\u518c\u53d1\u73b0",permalink:"/docs/2.5.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u6ce8\u518c\u53d1\u73b0"}},l={},h=[{value:"\u62e6\u622a\u5668\u4f7f\u7528",id:"\u62e6\u622a\u5668\u4f7f\u7528",level:2},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:3},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:3},{value:"\u62e6\u622a\u5668\u5217\u8868",id:"\u62e6\u622a\u5668\u5217\u8868",level:2}];function x(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"GRPC"})," \u652f\u6301\u62e6\u622a\u5668\u7279\u6027\uff0c\u63d0\u9ad8\u4e86 ",(0,d.jsx)(n.code,{children:"GRPC"})," \u7684\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u62e6\u622a\u5668\u4f7f\u7528",children:"\u62e6\u622a\u5668\u4f7f\u7528"}),"\n",(0,d.jsx)(n.h3,{id:"\u670d\u52a1\u7aef",children:"\u670d\u52a1\u7aef"}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"grpcx.Server.ChainUnary"})," \u589e\u52a0\u989d\u5916\u7684\u670d\u52a1\u7aef\u62e6\u622a\u5668\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"c := grpcx.Server.NewConfig()\nc.Options = append(c.Options, []grpc.ServerOption{\n\tgrpcx.Server.ChainUnary(\n\t\tgrpcx.Server.UnaryValidate,\n\t)}...,\n)\ns := grpcx.Server.New(c)\nuser.Register(s)\ns.Run()\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u5ba2\u6237\u7aef",children:"\u5ba2\u6237\u7aef"}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"grpcx.Client.ChainUnary"})," \u589e\u52a0\u989d\u5916\u7684\u670d\u52a1\u7aef\u62e6\u622a\u5668\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'conn = grpcx.Client.MustNewGrpcClientConn("demo", grpcx.Client.ChainUnary(\n    grpcx.Client.UnaryTracing,\n))\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u62e6\u622a\u5668\u5217\u8868",children:"\u62e6\u622a\u5668\u5217\u8868"}),"\n",(0,d.jsxs)(n.p,{children:["\u6846\u67b6\u7684 ",(0,d.jsx)(n.code,{children:"grpcx"})," \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u5e38\u7528\u62e6\u622a\u5668\uff0c\u90e8\u5206\u5185\u7f6e\uff0c\u90e8\u5206\u53ef\u9009\u62e9\u63d2\u62d4\u4f7f\u7528\u3002"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u62e6\u622a\u5668"}),(0,d.jsx)(n.th,{children:"\u4f7f\u7528\u90e8\u4f4d"}),(0,d.jsx)(n.th,{children:"\u662f\u5426\u5185\u7f6e"}),(0,d.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"UnaryError"})}),(0,d.jsx)(n.td,{children:"\u5ba2\u6237\u7aef"}),(0,d.jsx)(n.td,{children:"\u662f"}),(0,d.jsx)(n.td,{children:"\u652f\u6301\u6846\u67b6\u9519\u8bef\u5904\u7406\u7ec4\u4ef6\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"UnaryTracing"})}),(0,d.jsx)(n.td,{children:"\u5ba2\u6237\u7aef"}),(0,d.jsx)(n.td,{children:"\u662f"}),(0,d.jsx)(n.td,{children:"\u652f\u6301\u94fe\u8def\u8ddf\u8e2a\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"StreamTracing"})}),(0,d.jsx)(n.td,{children:"\u5ba2\u6237\u7aef"}),(0,d.jsx)(n.td,{children:"\u662f"}),(0,d.jsx)(n.td,{children:"\u652f\u6301\u94fe\u8def\u8ddf\u8e2a\uff08\u957f\u8fde\u63a5\uff09\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"UnaryError"})}),(0,d.jsx)(n.td,{children:"\u670d\u52a1\u7aef"}),(0,d.jsx)(n.td,{children:"\u662f"}),(0,d.jsx)(n.td,{children:"\u652f\u6301\u6846\u67b6\u9519\u8bef\u5904\u7406\u7ec4\u4ef6\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"UnaryRecover"})}),(0,d.jsx)(n.td,{children:"\u670d\u52a1\u7aef"}),(0,d.jsx)(n.td,{children:"\u662f"}),(0,d.jsxs)(n.td,{children:["\u652f\u6301\u670d\u52a1\u7aef ",(0,d.jsx)(n.code,{children:"panic"})," \u81ea\u52a8\u6355\u83b7\u4e0d\u5d29\u6e83\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"UnaryAllowNilRes"})}),(0,d.jsx)(n.td,{children:"\u670d\u52a1\u7aef"}),(0,d.jsx)(n.td,{children:"\u662f"}),(0,d.jsxs)(n.td,{children:["\u652f\u6301 ",(0,d.jsx)(n.code,{children:"nil"})," \u7684 ",(0,d.jsx)(n.code,{children:"Res"})," \u5bf9\u8c61\u8fd4\u56de\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"UnaryValidate"})}),(0,d.jsx)(n.td,{children:"\u670d\u52a1\u7aef"}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"\u652f\u6301\u6846\u67b6\u7684\u81ea\u52a8\u9519\u8bef\u6821\u9a8c\uff0c\u57fa\u4e8e\u7ed3\u6784\u4f53\u6807\u7b7e\u3002\u9700\u8981\u624b\u52a8\u5f15\u5165\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"UnaryTracing"})}),(0,d.jsx)(n.td,{children:"\u670d\u52a1\u7aef"}),(0,d.jsx)(n.td,{children:"\u662f"}),(0,d.jsx)(n.td,{children:"\u652f\u6301\u94fe\u8def\u8ddf\u8e2a\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"StreamTracing"})}),(0,d.jsx)(n.td,{children:"\u670d\u52a1\u7aef"}),(0,d.jsx)(n.td,{children:"\u662f"}),(0,d.jsx)(n.td,{children:"\u652f\u6301\u94fe\u8def\u8ddf\u8e2a\uff08\u957f\u8fde\u63a5\uff09\u3002"})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var d=r(296540);const t={},c=d.createContext(t);function i(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);
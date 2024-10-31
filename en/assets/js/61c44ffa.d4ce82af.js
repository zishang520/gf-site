"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[3096],{53117:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(474848),i=t(28453);const r={title:"\u73af\u5883\u51c6\u5907",sidebar_position:0,hide_title:!0},o=void 0,c={id:"\u5fae\u670d\u52a1\u5f00\u53d1/\u73af\u5883\u51c6\u5907",title:"\u73af\u5883\u51c6\u5907",description:"\u540e\u7eed\u5fae\u670d\u52a1\u7ae0\u8282\u4e3b\u8981\u4ee5 GRPC \u534f\u8bae\u4e3a\u4e3b\uff0c\u4ecb\u7ecd\u5fae\u670d\u52a1\u7684\u5f00\u53d1\u3001\u7ec4\u4ef6\u53ca\u5de5\u5177\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-2.4.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u73af\u5883\u51c6\u5907.md",sourceDirName:"\u5fae\u670d\u52a1\u5f00\u53d1",slug:"/\u5fae\u670d\u52a1\u5f00\u53d1/\u73af\u5883\u51c6\u5907",permalink:"/gf-site/en/docs/2.4.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u73af\u5883\u51c6\u5907",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u73af\u5883\u51c6\u5907.md",tags:[],version:"2.4.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:0,frontMatter:{title:"\u73af\u5883\u51c6\u5907",sidebar_position:0,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u5fae\u670d\u52a1\u5f00\u53d1",permalink:"/gf-site/en/docs/2.4.x/\u5fae\u670d\u52a1\u5f00\u53d1/"},next:{title:"\u5de5\u7a0b\u7ba1\u7406",permalink:"/gf-site/en/docs/2.4.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u5de5\u7a0b\u7ba1\u7406"}},d={},l=[{value:"\u4f9d\u8d56\u5b89\u88c5",id:"\u4f9d\u8d56\u5b89\u88c5",level:2},{value:"\u6846\u67b6\u5de5\u5177",id:"\u6846\u67b6\u5de5\u5177",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u540e\u7eed\u5fae\u670d\u52a1\u7ae0\u8282\u4e3b\u8981\u4ee5 ",(0,s.jsx)(n.code,{children:"GRPC"})," \u534f\u8bae\u4e3a\u4e3b\uff0c\u4ecb\u7ecd\u5fae\u670d\u52a1\u7684\u5f00\u53d1\u3001\u7ec4\u4ef6\u53ca\u5de5\u5177\u4f7f\u7528\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f9d\u8d56\u5b89\u88c5",children:"\u4f9d\u8d56\u5b89\u88c5"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8fdb\u4e00\u6b65\u5b66\u4e60\u4e4b\u524d\uff0c\u8bf7\u5148\u4e86\u89e3 ",(0,s.jsx)(n.code,{children:"GRPC"})," \u76f8\u5173\u6982\u5ff5\uff0c\u5e76\u4e14\u5b89\u88c5\u5bf9\u5e94\u7684\u5de5\u5177\u5230\u672c\u5730\u5f00\u53d1\u73af\u5883\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://grpc.io/",children:"https://grpc.io/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://grpc.io/docs/languages/go/quickstart/",children:"https://grpc.io/docs/languages/go/quickstart/"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u662f ",(0,s.jsx)(n.code,{children:"MacOS"})," \u73af\u5883\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"brew"})," \u5de5\u5177\u5b89\u88c5\u4f9d\u8d56\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"brew install grpc protoc-gen-go protoc-gen-go-grpc\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f9d\u8d56\u5de5\u5177\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"https://grpc.io/docs/languages/go/quickstart/",children:"https://grpc.io/docs/languages/go/quickstart/"})," \u7ae0\u8282\u7684\u4ecb\u7ecd\u5b8c\u6210\u57fa\u7840\u7684 ",(0,s.jsx)(n.code,{children:"protoc"})," \u5de5\u5177\u4f7f\u7528\u5b66\u4e60\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6846\u67b6\u5de5\u5177",children:"\u6846\u67b6\u5de5\u5177"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u7684CLI\u5f00\u53d1\u5de5\u5177\u8bf7\u4fdd\u8bc1\u7248\u672c ",(0,s.jsx)(n.code,{children:">= v2.4"}),"\u3002\u5de5\u5177\u5b89\u88c5\u3001\u5347\u7ea7\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,s.jsx)(n.a,{href:"/gf-site/en/docs/2.4.x/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/",children:"\u5f00\u53d1\u5de5\u5177"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6846\u67b6\u5de5\u5177\u9488\u5bf9 ",(0,s.jsx)(n.code,{children:"GRPC"})," \u534f\u8bae\uff0c\u63d0\u4f9b\u4e86\u989d\u5916\u7684\u547d\u4ee4\u652f\u6301\uff0c\u6781\u5927\u5730\u7b80\u5316\u4e86\u57fa\u4e8e ",(0,s.jsx)(n.code,{children:"GRPC"})," \u534f\u8bae\u7684\u5fae\u670d\u52a1\u5f00\u53d1\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(296540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
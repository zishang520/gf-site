"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[8456],{92060:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u5e38\u89c1\u95ee\u9898","title":"\u65e5\u5fd7\u7ec4\u4ef6-\u5e38\u89c1\u95ee\u9898","description":"\u5982\u679c\u6253\u5370 error \u53d8\u91cf\uff0c\u6253\u5370\u51fa error \u5bf9\u5e94\u7684\u5806\u6808\u800c\u4e0d\u662f\u65e5\u5fd7\u65b9\u6cd5\u8c03\u7528\u65f6\u7684\u5806\u6808","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u5e38\u89c1\u95ee\u9898.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6","slug":"/docs/core/glog-faq","permalink":"/docs/core/glog-faq","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u5e38\u89c1\u95ee\u9898.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":14,"frontMatter":{"slug":"/docs/core/glog-faq","title":"\u65e5\u5fd7\u7ec4\u4ef6-\u5e38\u89c1\u95ee\u9898","sidebar_position":14,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-Rotate\u7279\u6027","permalink":"/docs/core/glog-rotate"},"next":{"title":"\u9519\u8bef\u5904\u7406","permalink":"/docs/core/gerror"}}');var s=o(74848),n=o(28453);const c={slug:"/docs/core/glog-faq",title:"\u65e5\u5fd7\u7ec4\u4ef6-\u5e38\u89c1\u95ee\u9898",sidebar_position:14,hide_title:!0},i=void 0,d={},l=[{value:"\u5982\u679c\u6253\u5370 <code>error</code> \u53d8\u91cf\uff0c\u6253\u5370\u51fa <code>error</code> \u5bf9\u5e94\u7684\u5806\u6808\u800c\u4e0d\u662f\u65e5\u5fd7\u65b9\u6cd5\u8c03\u7528\u65f6\u7684\u5806\u6808",id:"\u5982\u679c\u6253\u5370-error-\u53d8\u91cf\u6253\u5370\u51fa-error-\u5bf9\u5e94\u7684\u5806\u6808\u800c\u4e0d\u662f\u65e5\u5fd7\u65b9\u6cd5\u8c03\u7528\u65f6\u7684\u5806\u6808",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h2,{id:"\u5982\u679c\u6253\u5370-error-\u53d8\u91cf\u6253\u5370\u51fa-error-\u5bf9\u5e94\u7684\u5806\u6808\u800c\u4e0d\u662f\u65e5\u5fd7\u65b9\u6cd5\u8c03\u7528\u65f6\u7684\u5806\u6808",children:["\u5982\u679c\u6253\u5370 ",(0,s.jsx)(r.code,{children:"error"})," \u53d8\u91cf\uff0c\u6253\u5370\u51fa ",(0,s.jsx)(r.code,{children:"error"})," \u5bf9\u5e94\u7684\u5806\u6808\u800c\u4e0d\u662f\u65e5\u5fd7\u65b9\u6cd5\u8c03\u7528\u65f6\u7684\u5806\u6808"]}),"\n",(0,s.jsxs)(r.p,{children:["\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u53ea\u4f1a\u6253\u5370 ",(0,s.jsx)(r.code,{children:"error"})," \u7684\u5b57\u7b26\u4e32\u63cf\u8ff0\u4fe1\u606f\uff0c\u5e76\u4e14\u5806\u6808\u53ea\u662f\u65e5\u5fd7\u65b9\u6cd5 ",(0,s.jsx)(r.code,{children:"Error"})," \u8c03\u7528\u65f6\u7684\u5806\u6808\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:"g.Log().Error(ctx, err)\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679c\u60f3\u8981\u6253\u5370 ",(0,s.jsx)(r.code,{children:"error"})," \u53d8\u91cf\u7684\u5806\u6808\uff0c\u5e76\u4e0d\u60f3\u6253\u5370 ",(0,s.jsx)(r.code,{children:"Error"})," \u65b9\u6cd5\u8c03\u7528\u65f6\u7684\u5806\u6808\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'g.Log().Printf(ctx, "%+v", err)\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u53c2\u8003\u8fde\u63a5\uff1a"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/gogf/gf/issues/1640",children:"https://github.com/gogf/gf/issues/1640"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/core/gerror-other",children:"\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027"})}),"\n"]})]})}function g(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>c,x:()=>i});var t=o(96540);const s={},n=t.createContext(s);function c(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);
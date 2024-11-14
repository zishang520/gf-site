"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[49785],{707422:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u5e38\u89c1\u95ee\u9898","title":"\u65e5\u5fd7\u7ec4\u4ef6-\u5e38\u89c1\u95ee\u9898","description":"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u65e5\u5fd7\u8bb0\u5f55\u65f6\uff0c\u6253\u5370error\u53d8\u91cf\u7684\u5806\u6808\u4fe1\u606f\uff0c\u800c\u4e0d\u662f\u6253\u5370\u65e5\u5fd7\u65b9\u6cd5\u8c03\u7528\u65f6\u7684\u5806\u6808\u3002\u63d0\u4f9b\u4e86\u5177\u4f53\u7684Go\u4ee3\u7801\u793a\u4f8b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u51c6\u786e\u5730\u8fdb\u884c\u9519\u8bef\u65e5\u5fd7\u7684\u8bb0\u5f55\u548c\u8c03\u8bd5\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u5e38\u89c1\u95ee\u9898.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6","slug":"/docs/core/glog-faq","permalink":"/en/2.7.x/docs/core/glog-faq","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u5e38\u89c1\u95ee\u9898.md","tags":[],"version":"2.7.x","sidebarPosition":14,"frontMatter":{"slug":"/docs/core/glog-faq","title":"\u65e5\u5fd7\u7ec4\u4ef6-\u5e38\u89c1\u95ee\u9898","sidebar_position":14,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u65e5\u5fd7\u7ec4\u4ef6","\u5e38\u89c1\u95ee\u9898","error\u53d8\u91cf","\u9519\u8bef\u5806\u6808","\u65e5\u5fd7\u65b9\u6cd5","\u6253\u5370\u9519\u8bef","g.Log","GoFrame\u65e5\u5fd7"],"description":"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u65e5\u5fd7\u8bb0\u5f55\u65f6\uff0c\u6253\u5370error\u53d8\u91cf\u7684\u5806\u6808\u4fe1\u606f\uff0c\u800c\u4e0d\u662f\u6253\u5370\u65e5\u5fd7\u65b9\u6cd5\u8c03\u7528\u65f6\u7684\u5806\u6808\u3002\u63d0\u4f9b\u4e86\u5177\u4f53\u7684Go\u4ee3\u7801\u793a\u4f8b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u51c6\u786e\u5730\u8fdb\u884c\u9519\u8bef\u65e5\u5fd7\u7684\u8bb0\u5f55\u548c\u8c03\u8bd5\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-Rotate\u7279\u6027","permalink":"/en/2.7.x/docs/core/glog-rotate"},"next":{"title":"\u9519\u8bef\u5904\u7406","permalink":"/en/2.7.x/docs/core/gerror"}}');var n=o(474848),t=o(28453);const c={slug:"/docs/core/glog-faq",title:"\u65e5\u5fd7\u7ec4\u4ef6-\u5e38\u89c1\u95ee\u9898",sidebar_position:14,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u65e5\u5fd7\u7ec4\u4ef6","\u5e38\u89c1\u95ee\u9898","error\u53d8\u91cf","\u9519\u8bef\u5806\u6808","\u65e5\u5fd7\u65b9\u6cd5","\u6253\u5370\u9519\u8bef","g.Log","GoFrame\u65e5\u5fd7"],description:"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u65e5\u5fd7\u8bb0\u5f55\u65f6\uff0c\u6253\u5370error\u53d8\u91cf\u7684\u5806\u6808\u4fe1\u606f\uff0c\u800c\u4e0d\u662f\u6253\u5370\u65e5\u5fd7\u65b9\u6cd5\u8c03\u7528\u65f6\u7684\u5806\u6808\u3002\u63d0\u4f9b\u4e86\u5177\u4f53\u7684Go\u4ee3\u7801\u793a\u4f8b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u51c6\u786e\u5730\u8fdb\u884c\u9519\u8bef\u65e5\u5fd7\u7684\u8bb0\u5f55\u548c\u8c03\u8bd5\u3002"},i=void 0,d={},l=[{value:"\u5982\u679c\u6253\u5370 <code>error</code> \u53d8\u91cf\uff0c\u6253\u5370\u51fa <code>error</code> \u5bf9\u5e94\u7684\u5806\u6808\u800c\u4e0d\u662f\u65e5\u5fd7\u65b9\u6cd5\u8c03\u7528\u65f6\u7684\u5806\u6808",id:"\u5982\u679c\u6253\u5370-error-\u53d8\u91cf\u6253\u5370\u51fa-error-\u5bf9\u5e94\u7684\u5806\u6808\u800c\u4e0d\u662f\u65e5\u5fd7\u65b9\u6cd5\u8c03\u7528\u65f6\u7684\u5806\u6808",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h2,{id:"\u5982\u679c\u6253\u5370-error-\u53d8\u91cf\u6253\u5370\u51fa-error-\u5bf9\u5e94\u7684\u5806\u6808\u800c\u4e0d\u662f\u65e5\u5fd7\u65b9\u6cd5\u8c03\u7528\u65f6\u7684\u5806\u6808",children:["\u5982\u679c\u6253\u5370 ",(0,n.jsx)(r.code,{children:"error"})," \u53d8\u91cf\uff0c\u6253\u5370\u51fa ",(0,n.jsx)(r.code,{children:"error"})," \u5bf9\u5e94\u7684\u5806\u6808\u800c\u4e0d\u662f\u65e5\u5fd7\u65b9\u6cd5\u8c03\u7528\u65f6\u7684\u5806\u6808"]}),"\n",(0,n.jsxs)(r.p,{children:["\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u53ea\u4f1a\u6253\u5370 ",(0,n.jsx)(r.code,{children:"error"})," \u7684\u5b57\u7b26\u4e32\u63cf\u8ff0\u4fe1\u606f\uff0c\u5e76\u4e14\u5806\u6808\u53ea\u662f\u65e5\u5fd7\u65b9\u6cd5 ",(0,n.jsx)(r.code,{children:"Error"})," \u8c03\u7528\u65f6\u7684\u5806\u6808\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:"g.Log().Error(ctx, err)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u679c\u60f3\u8981\u6253\u5370 ",(0,n.jsx)(r.code,{children:"error"})," \u53d8\u91cf\u7684\u5806\u6808\uff0c\u5e76\u4e0d\u60f3\u6253\u5370 ",(0,n.jsx)(r.code,{children:"Error"})," \u65b9\u6cd5\u8c03\u7528\u65f6\u7684\u5806\u6808\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:'g.Log().Printf(ctx, "%+v", err)\n'})}),"\n",(0,n.jsx)(r.p,{children:"\u53c2\u8003\u8fde\u63a5\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/gogf/gf/issues/1640",children:"https://github.com/gogf/gf/issues/1640"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/en/2.7.x/docs/core/gerror-other",children:"\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027"})}),"\n"]})]})}function g(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>c,x:()=>i});var s=o(296540);const n={},t=s.createContext(n);function c(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);
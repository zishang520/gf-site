"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[14072],{195248:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u5e38\u7528\u65b9\u6cd5","title":"\u9519\u8bef\u5904\u7406-\u5e38\u7528\u65b9\u6cd5","description":"GoFrame\u6846\u67b6\u4e2d\u5173\u4e8e\u9519\u8bef\u5904\u7406\u7684\u5e38\u7528\u65b9\u6cd5\uff0c\u5305\u62ec\u9519\u8bef\u521b\u5efa\u3001\u9519\u8bef\u5305\u88c5\u4ee5\u53ca\u9519\u8bef\u7801\u76f8\u5173\u7684\u51fd\u6570\uff0c\u63d0\u4f9b\u4e86\u521b\u5efa\u548c\u5305\u88c5\u81ea\u5b9a\u4e49\u9519\u8bef\u4fe1\u606f\u7684\u591a\u79cd\u65b9\u5f0f\uff0c\u4ee5\u4fbf\u5f00\u53d1\u8005\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u65f6\u80fd\u591f\u6709\u6548\u7ba1\u7406\u9519\u8bef\u548c\u8c03\u8bd5\u4ee3\u7801\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u5e38\u7528\u65b9\u6cd5.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406","slug":"/docs/core/gerror-funcs","permalink":"/2.7.x/docs/core/gerror-funcs","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u5e38\u7528\u65b9\u6cd5.md","tags":[],"version":"2.7.x","sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gerror-funcs","title":"\u9519\u8bef\u5904\u7406-\u5e38\u7528\u65b9\u6cd5","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u9519\u8bef\u5904\u7406","\u9519\u8bef\u521b\u5efa","New","Wrap","NewSkip","\u9519\u8bef\u7801","gerror","\u5806\u6808\u4fe1\u606f"],"description":"GoFrame\u6846\u67b6\u4e2d\u5173\u4e8e\u9519\u8bef\u5904\u7406\u7684\u5e38\u7528\u65b9\u6cd5\uff0c\u5305\u62ec\u9519\u8bef\u521b\u5efa\u3001\u9519\u8bef\u5305\u88c5\u4ee5\u53ca\u9519\u8bef\u7801\u76f8\u5173\u7684\u51fd\u6570\uff0c\u63d0\u4f9b\u4e86\u521b\u5efa\u548c\u5305\u88c5\u81ea\u5b9a\u4e49\u9519\u8bef\u4fe1\u606f\u7684\u591a\u79cd\u65b9\u5f0f\uff0c\u4ee5\u4fbf\u5f00\u53d1\u8005\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u65f6\u80fd\u591f\u6709\u6548\u7ba1\u7406\u9519\u8bef\u548c\u8c03\u8bd5\u4ee3\u7801\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u9519\u8bef\u5904\u7406","permalink":"/2.7.x/docs/core/gerror"},"next":{"title":"\u9519\u8bef\u5904\u7406-\u5806\u6808\u7279\u6027","permalink":"/2.7.x/docs/core/gerror-stack"}}');var i=n(474848),s=n(28453);const c={slug:"/docs/core/gerror-funcs",title:"\u9519\u8bef\u5904\u7406-\u5e38\u7528\u65b9\u6cd5",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u9519\u8bef\u5904\u7406","\u9519\u8bef\u521b\u5efa","New","Wrap","NewSkip","\u9519\u8bef\u7801","gerror","\u5806\u6808\u4fe1\u606f"],description:"GoFrame\u6846\u67b6\u4e2d\u5173\u4e8e\u9519\u8bef\u5904\u7406\u7684\u5e38\u7528\u65b9\u6cd5\uff0c\u5305\u62ec\u9519\u8bef\u521b\u5efa\u3001\u9519\u8bef\u5305\u88c5\u4ee5\u53ca\u9519\u8bef\u7801\u76f8\u5173\u7684\u51fd\u6570\uff0c\u63d0\u4f9b\u4e86\u521b\u5efa\u548c\u5305\u88c5\u81ea\u5b9a\u4e49\u9519\u8bef\u4fe1\u606f\u7684\u591a\u79cd\u65b9\u5f0f\uff0c\u4ee5\u4fbf\u5f00\u53d1\u8005\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u65f6\u80fd\u591f\u6709\u6548\u7ba1\u7406\u9519\u8bef\u548c\u8c03\u8bd5\u4ee3\u7801\u3002"},t=void 0,d={},a=[{value:"\u9519\u8bef\u521b\u5efa",id:"\u9519\u8bef\u521b\u5efa",level:2},{value:"<code>New/Newf</code>",id:"newnewf",level:3},{value:"<code>Wrap/Wrapf</code>",id:"wrapwrapf",level:3},{value:"<code>NewSkip/NewSkipf</code>",id:"newskipnewskipf",level:3},{value:"\u9519\u8bef\u7801\u76f8\u5173\u65b9\u6cd5",id:"\u9519\u8bef\u7801\u76f8\u5173\u65b9\u6cd5",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["\u672c\u7ae0\u8282\u4ec5\u4ecb\u7ecd\u4e00\u4e9b\u5e38\u7528\u65b9\u6cd5\uff0c\u5b8c\u6574\u7684\u9519\u8bef\u65b9\u6cd5\u8bf7\u53c2\u8003\u63a5\u53e3\u6587\u6863\uff1a ",(0,i.jsx)(r.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/errors/gerror",children:"https://pkg.go.dev/github.com/gogf/gf/v2/errors/gerror"})]}),"\n",(0,i.jsx)(r.h2,{id:"\u9519\u8bef\u521b\u5efa",children:"\u9519\u8bef\u521b\u5efa"}),"\n",(0,i.jsx)(r.h3,{id:"newnewf",children:(0,i.jsx)(r.code,{children:"New/Newf"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u8bf4\u660e\uff1a\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u9519\u8bef\u4fe1\u606f\u7684 ",(0,i.jsx)(r.code,{children:"error"})," \u5bf9\u8c61\uff0c\u5e76\u5305\u542b\u5806\u6808\u4fe1\u606f\u3002"]}),"\n",(0,i.jsx)(r.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"New(text string) error\nNewf(format string, args ...interface{}) error\n"})}),"\n",(0,i.jsx)(r.h3,{id:"wrapwrapf",children:(0,i.jsx)(r.code,{children:"Wrap/Wrapf"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u8bf4\u660e\uff1a\u7528\u4e8e\u5305\u88f9\u5176\u4ed6\u9519\u8bef ",(0,i.jsx)(r.code,{children:"error"})," \u5bf9\u8c61\uff0c\u6784\u9020\u6210\u591a\u7ea7\u7684\u9519\u8bef\u4fe1\u606f\uff0c\u5305\u542b\u5806\u6808\u4fe1\u606f\u3002"]}),"\n",(0,i.jsx)(r.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"func Wrap(err error, text string) error\nfunc Wrapf(err error, format string, args ...interface{}) error\n"})}),"\n",(0,i.jsx)(r.h3,{id:"newskipnewskipf",children:(0,i.jsx)(r.code,{children:"NewSkip/NewSkipf"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u8bf4\u660e\uff1a\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u9519\u8bef\u4fe1\u606f\u7684 ",(0,i.jsx)(r.code,{children:"error"})," \u5bf9\u8c61\uff0c\u5e76\u4e14\u5ffd\u7565\u90e8\u5206\u5806\u6808\u4fe1\u606f\uff08\u6309\u7167\u5f53\u524d\u8c03\u7528\u65b9\u6cd5\u4f4d\u7f6e\u5f80\u4e0a\u5ffd\u7565\uff09\u3002\u9ad8\u7ea7\u529f\u80fd\uff0c\u4e00\u822c\u5f00\u53d1\u8005\u5f88\u5c11\u7528\u5f97\u5230\u3002"]}),"\n",(0,i.jsx)(r.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"func NewSkip(skip int, text string) error\nfunc NewSkipf(skip int, format string, args ...interface{}) error\n"})}),"\n",(0,i.jsx)(r.h2,{id:"\u9519\u8bef\u7801\u76f8\u5173\u65b9\u6cd5",children:"\u9519\u8bef\u7801\u76f8\u5173\u65b9\u6cd5"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"func NewCode(code int, text string) error\nfunc NewCodef(code int, format string, args ...interface{}) error\nfunc NewCodeSkip(code, skip int, text string) error\nfunc NewCodeSkipf(code, skip int, format string, args ...interface{}) error\nfunc WrapCode(code int, err error, text string) error\nfunc WrapCodef(code int, err error, format string, args ...interface{}) error\n"})}),"\n",(0,i.jsxs)(r.p,{children:["\u5177\u4f53\u4ecb\u7ecd\u8bf7\u53c2\u8003\u540e\u7eed ",(0,i.jsx)(r.a,{href:"/2.7.x/docs/core/gerror-code-example",children:"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u4f7f\u7528"})," \u7ae0\u8282\u3002"]})]})}function f(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>t});var o=n(296540);const i={},s=o.createContext(i);function c(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);
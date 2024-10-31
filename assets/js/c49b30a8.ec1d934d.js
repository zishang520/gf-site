"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[14353],{96696:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var i=n(74848),o=n(28453);const t={slug:"/core/gerror/funcs",title:"\u9519\u8bef\u5904\u7406-\u5e38\u7528\u65b9\u6cd5",sidebar_position:0,hide_title:!0},s=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u5e38\u7528\u65b9\u6cd5",title:"\u9519\u8bef\u5904\u7406-\u5e38\u7528\u65b9\u6cd5",description:"\u672c\u7ae0\u8282\u4ec5\u4ecb\u7ecd\u4e00\u4e9b\u5e38\u7528\u65b9\u6cd5\uff0c\u5b8c\u6574\u7684\u9519\u8bef\u65b9\u6cd5\u8bf7\u53c2\u8003\u63a5\u53e3\u6587\u6863\uff1a https://pkg.go.dev/github.com/gogf/gf/v2/errors/gerror",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/5-\u9519\u8bef\u5904\u7406/0-\u9519\u8bef\u5904\u7406-\u5e38\u7528\u65b9\u6cd5.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/5-\u9519\u8bef\u5904\u7406",slug:"/core/gerror/funcs",permalink:"/gf-site/docs/core/gerror/funcs",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/4-\u6838\u5fc3\u7ec4\u4ef6/5-\u9519\u8bef\u5904\u7406/0-\u9519\u8bef\u5904\u7406-\u5e38\u7528\u65b9\u6cd5.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730354542e3,sidebarPosition:0,frontMatter:{slug:"/core/gerror/funcs",title:"\u9519\u8bef\u5904\u7406-\u5e38\u7528\u65b9\u6cd5",sidebar_position:0,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u9519\u8bef\u5904\u7406",permalink:"/gf-site/docs/core/gerror"},next:{title:"\u9519\u8bef\u5904\u7406-\u5806\u6808\u7279\u6027",permalink:"/gf-site/docs/core/gerror/stack"}},d={},l=[{value:"\u9519\u8bef\u521b\u5efa",id:"\u9519\u8bef\u521b\u5efa",level:2},{value:"<code>New/Newf</code>",id:"newnewf",level:3},{value:"<code>Wrap/Wrapf</code>",id:"wrapwrapf",level:3},{value:"<code>NewSkip/NewSkipf</code>",id:"newskipnewskipf",level:3},{value:"\u9519\u8bef\u7801\u76f8\u5173\u65b9\u6cd5",id:"\u9519\u8bef\u7801\u76f8\u5173\u65b9\u6cd5",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["\u672c\u7ae0\u8282\u4ec5\u4ecb\u7ecd\u4e00\u4e9b\u5e38\u7528\u65b9\u6cd5\uff0c\u5b8c\u6574\u7684\u9519\u8bef\u65b9\u6cd5\u8bf7\u53c2\u8003\u63a5\u53e3\u6587\u6863\uff1a ",(0,i.jsx)(r.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/errors/gerror",children:"https://pkg.go.dev/github.com/gogf/gf/v2/errors/gerror"})]}),"\n",(0,i.jsx)(r.h2,{id:"\u9519\u8bef\u521b\u5efa",children:"\u9519\u8bef\u521b\u5efa"}),"\n",(0,i.jsx)(r.h3,{id:"newnewf",children:(0,i.jsx)(r.code,{children:"New/Newf"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u8bf4\u660e\uff1a\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u9519\u8bef\u4fe1\u606f\u7684 ",(0,i.jsx)(r.code,{children:"error"})," \u5bf9\u8c61\uff0c\u5e76\u5305\u542b\u5806\u6808\u4fe1\u606f\u3002"]}),"\n",(0,i.jsx)(r.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"New(text string) error\nNewf(format string, args ...interface{}) error\n"})}),"\n",(0,i.jsx)(r.h3,{id:"wrapwrapf",children:(0,i.jsx)(r.code,{children:"Wrap/Wrapf"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u8bf4\u660e\uff1a\u7528\u4e8e\u5305\u88f9\u5176\u4ed6\u9519\u8bef ",(0,i.jsx)(r.code,{children:"error"})," \u5bf9\u8c61\uff0c\u6784\u9020\u6210\u591a\u7ea7\u7684\u9519\u8bef\u4fe1\u606f\uff0c\u5305\u542b\u5806\u6808\u4fe1\u606f\u3002"]}),"\n",(0,i.jsx)(r.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"func Wrap(err error, text string) error\nfunc Wrapf(err error, format string, args ...interface{}) error\n"})}),"\n",(0,i.jsx)(r.h3,{id:"newskipnewskipf",children:(0,i.jsx)(r.code,{children:"NewSkip/NewSkipf"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u8bf4\u660e\uff1a\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u9519\u8bef\u4fe1\u606f\u7684 ",(0,i.jsx)(r.code,{children:"error"})," \u5bf9\u8c61\uff0c\u5e76\u4e14\u5ffd\u7565\u90e8\u5206\u5806\u6808\u4fe1\u606f\uff08\u6309\u7167\u5f53\u524d\u8c03\u7528\u65b9\u6cd5\u4f4d\u7f6e\u5f80\u4e0a\u5ffd\u7565\uff09\u3002\u9ad8\u7ea7\u529f\u80fd\uff0c\u4e00\u822c\u5f00\u53d1\u8005\u5f88\u5c11\u7528\u5f97\u5230\u3002"]}),"\n",(0,i.jsx)(r.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"func NewSkip(skip int, text string) error\nfunc NewSkipf(skip int, format string, args ...interface{}) error\n"})}),"\n",(0,i.jsx)(r.h2,{id:"\u9519\u8bef\u7801\u76f8\u5173\u65b9\u6cd5",children:"\u9519\u8bef\u7801\u76f8\u5173\u65b9\u6cd5"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"func NewCode(code int, text string) error\nfunc NewCodef(code int, format string, args ...interface{}) error\nfunc NewCodeSkip(code, skip int, text string) error\nfunc NewCodeSkipf(code, skip int, format string, args ...interface{}) error\nfunc WrapCode(code int, err error, text string) error\nfunc WrapCodef(code int, err error, format string, args ...interface{}) error\n"})}),"\n",(0,i.jsxs)(r.p,{children:["\u5177\u4f53\u4ecb\u7ecd\u8bf7\u53c2\u8003\u540e\u7eed ",(0,i.jsx)(r.a,{href:"/gf-site/docs/core/gerror/code",children:"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u4f7f\u7528"})," \u7ae0\u8282\u3002"]})]})}function f(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var i=n(96540);const o={},t=i.createContext(o);function s(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);
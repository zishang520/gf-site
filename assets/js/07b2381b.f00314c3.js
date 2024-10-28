"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[67072],{330057:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(474848),r=t(28453);const s={title:"gdebug (\u8c03\u8bd5\u529f\u80fd)",sidebar_position:0},c=void 0,o={id:"\u6a21\u5757\u5217\u8868/\u529f\u80fd\u8c03\u8bd5/gdebug -\u8c03\u8bd5\u529f\u80fd",title:"gdebug (\u8c03\u8bd5\u529f\u80fd)",description:"gdebug \u6a21\u5757\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5b9e\u7528\u7684\u201c\u8c03\u8bd5\u201d\u76f8\u5173\u7684\u65b9\u6cd5\u3002\u6240\u8c13\u7684\u201c\u8c03\u8bd5\u201d\u65b9\u6cd5\u5927\u591a\u6570\u548c\u5f00\u53d1\u73af\u5883\u6709\u4e00\u5b9a\u5173\u7cfb\uff0c\u5305\u542b\u5806\u6808\u548c\u8c03\u7528\u94fe\u4fe1\u606f\u5206\u6790\uff0c\u5e76\u4e14\u6027\u80fd\u5f80\u5f80\u4e0d\u662f\u7279\u522b\u9ad8\u3002",source:"@site/versioned_docs/version-1.15.x/2-\u6a21\u5757\u5217\u8868/9-\u529f\u80fd\u8c03\u8bd5/0-gdebug -\u8c03\u8bd5\u529f\u80fd.md",sourceDirName:"2-\u6a21\u5757\u5217\u8868/9-\u529f\u80fd\u8c03\u8bd5",slug:"/\u6a21\u5757\u5217\u8868/\u529f\u80fd\u8c03\u8bd5/gdebug -\u8c03\u8bd5\u529f\u80fd",permalink:"/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u529f\u80fd\u8c03\u8bd5/gdebug -\u8c03\u8bd5\u529f\u80fd",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.15.x/2-\u6a21\u5757\u5217\u8868/9-\u529f\u80fd\u8c03\u8bd5/0-gdebug -\u8c03\u8bd5\u529f\u80fd.md",tags:[],version:"1.15.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:0,frontMatter:{title:"gdebug (\u8c03\u8bd5\u529f\u80fd)",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u529f\u80fd\u8c03\u8bd5",permalink:"/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u529f\u80fd\u8c03\u8bd5/"},next:{title:"I18N\u56fd\u9645\u5316",permalink:"/docs/1.15.x/\u6a21\u5757\u5217\u8868/I18N\u56fd\u9645\u5316/"}},d={},l=[];function g(n){const e={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"gdebug"})," \u6a21\u5757\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5b9e\u7528\u7684\u201c\u8c03\u8bd5\u201d\u76f8\u5173\u7684\u65b9\u6cd5\u3002\u6240\u8c13\u7684\u201c\u8c03\u8bd5\u201d\u65b9\u6cd5\u5927\u591a\u6570\u548c\u5f00\u53d1\u73af\u5883\u6709\u4e00\u5b9a\u5173\u7cfb\uff0c\u5305\u542b\u5806\u6808\u548c\u8c03\u7528\u94fe\u4fe1\u606f\u5206\u6790\uff0c\u5e76\u4e14\u6027\u80fd\u5f80\u5f80\u4e0d\u662f\u7279\u522b\u9ad8\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/debug/gdebug"\n\n'})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://godoc.org/github.com/gogf/gf/debug/gdebug",children:"https://godoc.org/github.com/gogf/gf/debug/gdebug"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"func Caller(skip ...int) (function string, path string, line int)\nfunc CallerDirectory() string\nfunc CallerFileLine() string\nfunc CallerFilePath() string\nfunc CallerFunction() string\nfunc CallerPackage() string\nfunc CallerWithFilter(filter string, skip ...int) (function string, path string, line int)\nfunc PrintStack(skip ...int)\nfunc Stack(skip ...int) string\nfunc StackWithFilter(filter string, skip ...int) string\nfunc StackWithFilters(filters []string, skip ...int) string\nfunc CallerFileLineShort() string\nfunc FuncName(f interface{}) string\nfunc FuncPath(f interface{}) string\nfunc GoroutineId() int\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u719f\u6089 ",(0,i.jsx)(e.code,{children:"PHP"})," \u7684\u540c\u5b66\u53ef\u80fd\u6bd4\u8f83\u597d\u7406\u89e3\uff0c\u8fd9\u91cc\u67d0\u4e9b\u65b9\u6cd5\u5176\u5b9e\u548c ",(0,i.jsx)(e.code,{children:"PHP"})," \u7684\u90e8\u5206 ",(0,i.jsx)(e.a,{href:"https://www.php.net/manual/en/language.constants.predefined.php",children:"\u9b54\u672f\u5e38\u91cf"})," \u529f\u80fd\u4e00\u81f4\u3002 ",(0,i.jsx)(e.code,{children:"CallerDirectory"})," \u5bf9\u5e94 ",(0,i.jsx)(e.code,{children:"__DIR__"}),"\uff0c ",(0,i.jsx)(e.code,{children:"CallerFilePath"})," \u5bf9\u5e94 ",(0,i.jsx)(e.code,{children:"__FILE__"}),"\uff0c ",(0,i.jsx)(e.code,{children:"CallerFunction"})," \u5bf9\u5e94 ",(0,i.jsx)(e.code,{children:"__FUNCTION__"}),"\u3002"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(g,{...n})}):g(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var i=t(296540);const r={},s=i.createContext(r);function c(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);
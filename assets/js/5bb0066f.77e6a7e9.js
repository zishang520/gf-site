"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[63774],{574190:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var r=e(474848),o=e(28453);const s={title:"I18N\u56fd\u9645\u5316",sidebar_position:13,hide_title:!0},i=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/I18N\u56fd\u9645\u5316/I18N\u56fd\u9645\u5316",title:"I18N\u56fd\u9645\u5316",description:"GoFrame \u6846\u67b6\u63d0\u4f9b\u4e86\u5e38\u7528\u7684 I18N \u56fd\u9645\u5316\u7ec4\u4ef6\uff0c\u7531 gi18n \u6a21\u5757\u5b9e\u73b0\u3002",source:"@site/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/I18N\u56fd\u9645\u5316/I18N\u56fd\u9645\u5316.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/I18N\u56fd\u9645\u5316",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/I18N\u56fd\u9645\u5316/",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/I18N\u56fd\u9645\u5316/",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/I18N\u56fd\u9645\u5316/I18N\u56fd\u9645\u5316.md",tags:[],version:"1.16.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:13,frontMatter:{title:"I18N\u56fd\u9645\u5316",sidebar_position:13,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Redis-Context",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Context"},next:{title:"I18N\u56fd\u9645\u5316-\u914d\u7f6e\u7ba1\u7406",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/I18N\u56fd\u9645\u5316/I18N\u56fd\u9645\u5316-\u914d\u7f6e\u7ba1\u7406"}},a={},g=[];function x(t){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u5e38\u7528\u7684 ",(0,r.jsx)(n.code,{children:"I18N"})," \u56fd\u9645\u5316\u7ec4\u4ef6\uff0c\u7531 ",(0,r.jsx)(n.code,{children:"gi18n"})," \u6a21\u5757\u5b9e\u73b0\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/i18n/gi18n"\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/i18n/gi18n",children:"https://pkg.go.dev/github.com/gogf/gf/i18n/gi18n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u65b9\u6cd5\u5217\u8868\uff1a"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func GetContent(ctx context.Context, key string) string\nfunc LanguageFromCtx(ctx context.Context) string\nfunc SetDelimiters(left, right string)\nfunc SetLanguage(language string)\nfunc SetPath(path string) error\nfunc T(ctx context.Context, content string) string\nfunc Tf(ctx context.Context, format string, values ...interface{}) string\nfunc Translate(ctx context.Context, content string) string\nfunc TranslateFormat(ctx context.Context, format string, values ...interface{}) string\nfunc WithLanguage(ctx context.Context, language string) context.Context\ntype Manager\n    func Instance(name ...string) *Manager\n    func New(options ...Options) *Manager\n    func (m *Manager) GetContent(ctx context.Context, key string) string\n    func (m *Manager) SetDelimiters(left, right string)\n    func (m *Manager) SetLanguage(language string)\n    func (m *Manager) SetPath(path string) error\n    func (m *Manager) T(ctx context.Context, content string) string\n    func (m *Manager) Tf(ctx context.Context, format string, values ...interface{}) string\n    func (m *Manager) Translate(ctx context.Context, content string) string\n    func (m *Manager) TranslateFormat(ctx context.Context, format string, values ...interface{}) string\ntype Options\n    func DefaultOptions() Options\n"})})]})}function d(t={}){const{wrapper:n}={...(0,o.R)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(x,{...t})}):x(t)}},28453:(t,n,e)=>{e.d(n,{R:()=>i,x:()=>c});var r=e(296540);const o={},s=r.createContext(o);function i(t){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),r.createElement(s.Provider,{value:n},t.children)}}}]);
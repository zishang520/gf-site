"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[56807],{84652:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var i=n(74848),s=n(28453);const t={title:"Cookie",sidebar_position:6},c=void 0,d={id:"WEB\u670d\u52a1\u5f00\u53d1/Cookie",title:"Cookie",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.7.x/7-WEB\u670d\u52a1\u5f00\u53d1/6-Cookie.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1",slug:"/WEB\u670d\u52a1\u5f00\u53d1/Cookie",permalink:"/gf-site/en/docs/2.7.x/WEB\u670d\u52a1\u5f00\u53d1/Cookie",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/7-WEB\u670d\u52a1\u5f00\u53d1/6-Cookie.md",tags:[],version:"2.7.x",lastUpdatedBy:"John",lastUpdatedAt:172999724e4,sidebarPosition:6,frontMatter:{title:"Cookie",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u670d\u52a1\u914d\u7f6e-\u914d\u7f6e\u65b9\u6cd5",permalink:"/gf-site/en/docs/2.7.x/WEB\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u914d\u7f6e/\u670d\u52a1\u914d\u7f6e-\u914d\u7f6e\u65b9\u6cd5"},next:{title:"Session",permalink:"/gf-site/en/docs/2.7.x/WEB\u670d\u52a1\u5f00\u53d1/Session/"}},r={},l=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"<code>Cookie</code> \u4f1a\u8bdd\u8fc7\u671f",id:"cookie-\u4f1a\u8bdd\u8fc7\u671f",level:2}];function h(e){const o={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,i.jsxs)(o.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,i.jsx)(o.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Cookie",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Cookie"})]}),"\n",(0,i.jsx)(o.p,{children:"\u5e38\u7528\u65b9\u6cd5\uff1a"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"type Cookie\n    func GetCookie(r *Request) *Cookie\n    func (c *Cookie) Contains(key string) bool\n    func (c *Cookie) Flush()\n    func (c *Cookie) Get(key string, def ...string) string\n    func (c *Cookie) GetSessionId() string\n    func (c *Cookie) Map() map[string]string\n    func (c *Cookie) Remove(key string)\n    func (c *Cookie) RemoveCookie(key, domain, path string)\n    func (c *Cookie) Set(key, value string)\n    func (c *Cookie) SetCookie(key, value, domain, path string, maxAge time.Duration, httpOnly ...bool)\n    func (c *Cookie) SetHttpCookie(httpCookie *http.Cookie)\n    func (c *Cookie) SetSessionId(id string)\n"})}),"\n",(0,i.jsxs)(o.p,{children:["\u4efb\u4f55\u65f6\u5019\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(o.code,{children:"*ghttp.Request"})," \u5bf9\u8c61\u83b7\u53d6\u5230\u5f53\u524d\u8bf7\u6c42\u5bf9\u5e94\u7684 ",(0,i.jsx)(o.code,{children:"Cookie"})," \u5bf9\u8c61\uff0c\u56e0\u4e3a ",(0,i.jsx)(o.code,{children:"Cookie"})," \u548c ",(0,i.jsx)(o.code,{children:"Session"})," \u90fd\u662f\u548c\u8bf7\u6c42\u4f1a\u8bdd\u76f8\u5173\uff0c\u56e0\u6b64\u90fd\u5c5e\u4e8e ",(0,i.jsx)(o.code,{children:"ghttp.Request"})," \u7684\u6210\u5458\u5bf9\u8c61\uff0c\u5e76\u5bf9\u5916\u516c\u5f00\u3002 ",(0,i.jsx)(o.code,{children:"Cookie"})," \u5bf9\u8c61\u4e0d\u9700\u8981\u624b\u52a8 ",(0,i.jsx)(o.code,{children:"Close"}),"\uff0c\u8bf7\u6c42\u6d41\u7a0b\u7ed3\u675f\u540e\uff0c ",(0,i.jsx)(o.code,{children:"HTTP Server"})," \u4f1a\u81ea\u52a8\u5173\u95ed\u6389\u3002"]}),"\n",(0,i.jsxs)(o.p,{children:["\u6b64\u5916\uff0c ",(0,i.jsx)(o.code,{children:"Cookie"})," \u4e2d\u5c01\u88c5\u4e86\u4e24\u4e2a ",(0,i.jsx)(o.code,{children:"SessionId"})," \u76f8\u5173\u7684\u65b9\u6cd5\uff1a"]}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"Cookie.GetSessionId()"})," \u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u63d0\u4ea4\u7684 ",(0,i.jsx)(o.code,{children:"SessionId"}),"\uff0c\u6bcf\u4e2a\u8bf7\u6c42\u7684 ",(0,i.jsx)(o.code,{children:"SessionId"})," \u90fd\u662f\u552f\u4e00\u7684\uff0c\u5e76\u4e14\u4f34\u968f\u6574\u4e2a\u8bf7\u6c42\u6d41\u7a0b\uff0c\u8be5\u503c\u53ef\u80fd\u4e3a\u7a7a\u3002"]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"Cookie.SetSessionId(id string)"})," \u7528\u4e8e\u81ea\u5b9a\u4e49\u8bbe\u7f6e ",(0,i.jsx)(o.code,{children:"SessionId"})," \u5230 ",(0,i.jsx)(o.code,{children:"Cookie"})," \u4e2d\uff0c\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\uff08\u5f80\u5f80\u662f\u6d4f\u89c8\u5668\uff09\u5b58\u50a8\uff0c\u968f\u540e\u5ba2\u6237\u7aef\u6bcf\u4e00\u6b21\u8bf7\u6c42\u5728 ",(0,i.jsx)(o.code,{children:"Cookie"})," \u4e2d\u53ef\u5e26\u4e0a\u8be5 ",(0,i.jsx)(o.code,{children:"SessionId"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["\u5728\u8bbe\u7f6e ",(0,i.jsx)(o.code,{children:"Cookie"})," \u53d8\u91cf\u7684\u65f6\u5019\u53ef\u4ee5\u7ed9\u5b9a\u8fc7\u671f\u65f6\u95f4\uff0c\u8be5\u65f6\u95f4\u4e3a\u53ef\u9009\u53c2\u6570\uff0c\u9ed8\u8ba4\u7684 ",(0,i.jsx)(o.code,{children:"Cookie"})," \u8fc7\u671f\u65f6\u95f4\u4e3a\u4e00\u5e74\u3002"]}),"\n",(0,i.jsxs)(o.p,{children:["\u9ed8\u8ba4\u7684 ",(0,i.jsx)(o.code,{children:"SessionId"})," \u5728 ",(0,i.jsx)(o.code,{children:"Cookie"})," \u4e2d\u7684\u5b58\u50a8\u540d\u79f0\u4e3a ",(0,i.jsx)(o.code,{children:"gfsession"}),"\u3002"]}),"\n",(0,i.jsx)(o.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/cookie", func(r *ghttp.Request) {\n        datetime := r.Cookie.Get("datetime")\n        r.Cookie.Set("datetime", gtime.Datetime())\n        r.Response.Write("datetime:", datetime)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsxs)(o.p,{children:["\u6267\u884c\u5916\u5c42\u7684 ",(0,i.jsx)(o.code,{children:"main.go"}),"\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5237\u65b0\u9875\u9762 ",(0,i.jsx)(o.a,{href:"http://127.0.0.1:8199/cookie",children:"http://127.0.0.1:8199/cookie"})," \uff0c\u663e\u793a\u7684\u65f6\u95f4\u5728\u4e00\u76f4\u53d8\u5316\u3002"]}),"\n",(0,i.jsx)(o.p,{children:"\u5bf9\u4e8e\u63a7\u5236\u5668\u5bf9\u8c61\u800c\u8a00\uff0c\u4ece\u57fa\u7c7b\u63a7\u5236\u5668\u4e2d\u7ee7\u627f\u4e86\u5f88\u591a\u4f1a\u8bdd\u76f8\u5173\u7684\u5bf9\u8c61\u6307\u9488\uff0c\u53ef\u4ee5\u770b\u505aalias\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u4ed6\u4eec\u90fd\u662f\u6307\u5411\u7684\u540c\u4e00\u4e2a\u5bf9\u8c61\uff1a"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"type Controller struct {\n\tRequest  *ghttp.Request  // \u8bf7\u6c42\u6570\u636e\u5bf9\u8c61\n\tResponse *ghttp.Response // \u8fd4\u56de\u6570\u636e\u5bf9\u8c61(r.Response)\n\tServer   *ghttp.Server   // WebServer\u5bf9\u8c61(r.Server)\n\tCookie   *ghttp.Cookie   // COOKIE\u64cd\u4f5c\u5bf9\u8c61(r.Cookie)\n\tSession  *ghttp.Session  // SESSION\u64cd\u4f5c\u5bf9\u8c61\n\tView     *View           // \u89c6\u56fe\u5bf9\u8c61\n}\n"})}),"\n",(0,i.jsxs)(o.p,{children:["\u7531\u4e8e\u5bf9\u4e8eWeb\u5f00\u53d1\u8005\u6765\u8bb2\uff0c ",(0,i.jsx)(o.code,{children:"Cookie"})," \u90fd\u5df2\u7ecf\u662f\u975e\u5e38\u719f\u6089\u7684\u7ec4\u4ef6\u4e86\uff0c\u76f8\u5173 ",(0,i.jsx)(o.code,{children:"API"})," \u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u8fd9\u91cc\u4fbf\u4e0d\u518d\u8d58\u8ff0\u3002"]}),"\n",(0,i.jsxs)(o.h2,{id:"cookie-\u4f1a\u8bdd\u8fc7\u671f",children:[(0,i.jsx)(o.code,{children:"Cookie"})," \u4f1a\u8bdd\u8fc7\u671f"]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"Cookie"})," \u7684\u6709\u6548\u671f\u9ed8\u8ba4\u662f1\u5e74\uff0c\u5982\u679c\u6211\u4eec\u671f\u671bCookie\u968f\u7740\u7528\u6237\u7684\u6d4f\u89c8\u4f1a\u8bdd\u8fc7\u671f\uff0c\u50cf\u8fd9\u6837\uff1a"]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:n(81421).A+"",width:"2758",height:"736"})}),"\n",(0,i.jsxs)(o.p,{children:["\u90a3\u4e48\u6211\u4eec\u4ec5\u9700\u8981\u901a\u8fc7 ",(0,i.jsx)(o.code,{children:"SetCookie"})," \u6765\u8bbe\u7f6e ",(0,i.jsx)(o.code,{children:"Cookie"})," \u952e\u503c\u5bf9\u5e76\u5c06 ",(0,i.jsx)(o.code,{children:"maxAge"})," \u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(o.code,{children:"0"})," \u5373\u53ef\u3002\u50cf\u8fd9\u6837\uff1a"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:'r.Cookie.SetCookie("MyCookieKey", "MyCookieValue", "", "/", 0)\n'})})]})}function a(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},81421:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/6aca8ffefa9db267e2a4ecf1423ba6be-883a1673a01ec06c663cb3b6431a7c94.png"},28453:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>d});var i=n(96540);const s={},t=i.createContext(s);function c(e){const o=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:o},e.children)}}}]);
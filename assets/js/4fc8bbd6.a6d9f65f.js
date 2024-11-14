"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[38570],{434108:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Cookie","title":"HTTPClient-\u81ea\u5b9a\u4e49Cookie","description":"HTTP\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u65f6\u53ef\u4ee5\u81ea\u5b9a\u4e49\u53d1\u9001\u7ed9\u670d\u52a1\u7aef\u7684 Cookie \u5185\u5bb9\uff0c\u8be5\u7279\u6027\u4f7f\u7528 SetCookie* \u76f8\u5173\u65b9\u6cd5\u5b9e\u73b0\u3002","source":"@site/versioned_docs/version-2.5.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Cookie.md","sourceDirName":"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient","slug":"/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Cookie","permalink":"/2.5.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Cookie","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Cookie.md","tags":[],"version":"2.5.x","sidebarPosition":2,"frontMatter":{"title":"HTTPClient-\u81ea\u5b9a\u4e49Cookie","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"HTTPClient-\u6587\u4ef6\u4e0a\u4f20","permalink":"/2.5.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u6587\u4ef6\u4e0a\u4f20"},"next":{"title":"HTTPClient-\u81ea\u5b9a\u4e49Header","permalink":"/2.5.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Header"}}');var o=i(474848),c=i(28453);const s={title:"HTTPClient-\u81ea\u5b9a\u4e49Cookie",sidebar_position:2,hide_title:!0},r=void 0,l={},d=[{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:3},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:3}];function a(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["HTTP\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u65f6\u53ef\u4ee5\u81ea\u5b9a\u4e49\u53d1\u9001\u7ed9\u670d\u52a1\u7aef\u7684 ",(0,o.jsx)(n.code,{children:"Cookie"})," \u5185\u5bb9\uff0c\u8be5\u7279\u6027\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"SetCookie*"})," \u76f8\u5173\u65b9\u6cd5\u5b9e\u73b0\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u65b9\u6cd5\u5217\u8868\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func (c *Client) SetCookie(key, value string) *Client\nfunc (c *Client) SetCookieMap(m map[string]string) *Client\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u5ba2\u6237\u7aef\u81ea\u5b9a\u4e49 ",(0,o.jsx)(n.code,{children:"Cookie"})," \u7684\u793a\u4f8b\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"\u670d\u52a1\u7aef",children:"\u670d\u52a1\u7aef"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request){\n        r.Response.Write(r.Cookie.Map())\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u7531\u4e8e\u662f\u4f5c\u4e3a\u793a\u4f8b\uff0c\u670d\u52a1\u7aef\u7684\u903b\u8f91\u5f88\u7b80\u5355\uff0c\u76f4\u63a5\u5c06\u63a5\u6536\u5230\u7684 ",(0,o.jsx)(n.code,{children:"Cookie"})," \u53c2\u6570\u5168\u90e8\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"\u5ba2\u6237\u7aef",children:"\u5ba2\u6237\u7aef"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"SetCookie"})," \u65b9\u6cd5"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n       "fmt"\n\n       "github.com/gogf/gf/v2/frame/g"\n       "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n       c := g.Client()\n       c.SetCookie("name", "john")\n       c.SetCookie("score", "100")\n       if r, e := c.Get(gctx.New(), "http://127.0.0.1:8199/"); e != nil {\n           panic(e)\n       } else {\n           fmt.Println(r.ReadAllString())\n       }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"g.Client()"})," \u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684HTTP\u8bf7\u6c42\u5ba2\u6237\u7aef\u5bf9\u8c61\uff0c\u5e76\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"c.SetCookie"})," \u65b9\u6cd5\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u7684 ",(0,o.jsx)(n.code,{children:"Cookie"}),"\uff0c\u8fd9\u91cc\u6211\u4eec\u8bbe\u7f6e\u4e86\u4e24\u4e2a\u793a\u4f8b\u7528\u7684 ",(0,o.jsx)(n.code,{children:"Cookie"})," \u53c2\u6570\uff0c\u4e00\u4e2a ",(0,o.jsx)(n.code,{children:"name"}),"\uff0c\u4e00\u4e2a ",(0,o.jsx)(n.code,{children:"score"}),"\u3002"]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"SetCookieMap"})," \u65b9\u6cd5"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u4e2a\u65b9\u6cd5\u66f4\u52a0\u7b80\u5355\uff0c\u53ef\u4ee5\u6279\u91cf\u8bbe\u7f6e ",(0,o.jsx)(n.code,{children:"Cookie"})," \u952e\u503c\u5bf9\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n       "fmt"\n\n       "github.com/gogf/gf/v2/frame/g"\n       "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n       c := g.Client()\n       c.SetCookieMap(g.MapStrStr{\n           "name":  "john",\n           "score": "100",\n       })\n       if r, e := c.Get(gctx.New(), "http://127.0.0.1:8199/"); e != nil {\n           panic(e)\n       } else {\n           fmt.Println(r.ReadAllString())\n       }\n}\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7ed3\u679c"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u4ee3\u7801\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u5c06\u4f1a\u6253\u5370\u51fa\u670d\u52a1\u7aef\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"map[name:john score:100]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u670d\u52a1\u7aef\u5df2\u7ecf\u63a5\u6536\u5230\u4e86\u5ba2\u6237\u7aef\u81ea\u5b9a\u4e49\u7684 ",(0,o.jsx)(n.code,{children:"Cookie"})," \u53c2\u6570\u3002"]})]})}function g(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(296540);const o={},c=t.createContext(o);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);
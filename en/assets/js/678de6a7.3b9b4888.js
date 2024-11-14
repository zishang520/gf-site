"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[60779],{776391:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-JSONXML","title":"\u6570\u636e\u8fd4\u56de-JSON/XML","description":"\u76f8\u5173\u65b9\u6cd5\uff1a","source":"@site/versioned_docs/version-2.1.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-JSONXML.md","sourceDirName":"WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de","slug":"/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-JSONXML","permalink":"/en/2.1.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-JSONXML","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-JSONXML.md","tags":[],"version":"2.1.x","sidebarPosition":1,"frontMatter":{"title":"\u6570\u636e\u8fd4\u56de-JSON/XML","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236","permalink":"/en/2.1.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236"},"next":{"title":"\u6570\u636e\u8fd4\u56de-Redirect","permalink":"/en/2.1.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Redirect"}}');var o=r(474848),c=r(28453);const s={title:"\u6570\u636e\u8fd4\u56de-JSON/XML",sidebar_position:1,hide_title:!0},i=void 0,d={},l=[{value:"<code>JSON</code>",id:"json",level:2},{value:"<code>JSONP</code>",id:"jsonp",level:2},{value:"<code>XML</code>",id:"xml",level:2}];function a(n){const e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"\u76f8\u5173\u65b9\u6cd5\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:"func (r *Response) WriteJson(content interface{}) error\nfunc (r *Response) WriteJsonExit(content interface{}) error\nfunc (r *Response) WriteJsonP(content interface{}) error\nfunc (r *Response) WriteJsonPExit(content interface{}) error\nfunc (r *Response) WriteXml(content interface{}, rootTag ...string) error\nfunc (r *Response) WriteXmlExit(content interface{}, rootTag ...string) error\n"})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"Response"})," \u63d0\u4f9b\u4e86\u5bf9 ",(0,o.jsx)(e.code,{children:"JSON/XML"})," \u6570\u636e\u683c\u5f0f\u8f93\u51fa\u7684\u539f\u751f\u652f\u6301\uff0c\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u5b9e\u73b0\uff1a"]}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"WriteJson*"})," \u65b9\u6cd5\u7528\u4e8e\u8fd4\u56de ",(0,o.jsx)(e.code,{children:"JSON"})," \u6570\u636e\u683c\u5f0f\uff0c\u53c2\u6570\u4e3a\u4efb\u610f\u7c7b\u578b\uff0c\u53ef\u4ee5\u4e3a ",(0,o.jsx)(e.code,{children:"string"}),"\u3001 ",(0,o.jsx)(e.code,{children:"map"}),"\u3001 ",(0,o.jsx)(e.code,{children:"struct"})," \u7b49\u7b49\u3002\u8fd4\u56de\u7684 ",(0,o.jsx)(e.code,{children:"Content-Type"})," \u4e3a ",(0,o.jsx)(e.code,{children:"application/json"}),"\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"WriteXml*"})," \u65b9\u6cd5\u7528\u4e8e\u8fd4\u56de ",(0,o.jsx)(e.code,{children:"XML"})," \u6570\u636e\u683c\u5f0f\uff0c\u53c2\u6570\u4e3a\u4efb\u610f\u7c7b\u578b\uff0c\u53ef\u4ee5\u4e3a ",(0,o.jsx)(e.code,{children:"string"}),"\u3001 ",(0,o.jsx)(e.code,{children:"map"}),"\u3001 ",(0,o.jsx)(e.code,{children:"struct"})," \u7b49\u7b49\u3002\u8fd4\u56de\u7684 ",(0,o.jsx)(e.code,{children:"Content-Type"})," \u4e3a ",(0,o.jsx)(e.code,{children:"application/xml"}),"\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["\u5bf9 ",(0,o.jsx)(e.code,{children:"JSON"})," \u6570\u636e\u683c\u5f0f\u652f\u6301\u7684\u540c\u65f6\uff0c\u540c\u65f6\u4e5f\u652f\u6301 ",(0,o.jsx)(e.code,{children:"JSONP"})," \u534f\u8bae\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"json",children:(0,o.jsx)(e.code,{children:"JSON"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/json", func(r *ghttp.Request) {\n            r.Response.WriteJson(g.Map{\n                "id":   1,\n                "name": "john",\n            })\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,o.jsx)(e.code,{children:"curl"})," \u5de5\u5177\u6d4b\u8bd5\u4e0b\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'$ curl -i http://127.0.0.1:8199/json\nHTTP/1.1 200 OK\nContent-Type: application/json\nServer: GF HTTP Server\nDate: Sun, 05 Jan 2020 02:49:31 GMT\nContent-Length: 22\n\n{"id":1,"name":"john"}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"jsonp",children:(0,o.jsx)(e.code,{children:"JSONP"})}),"\n",(0,o.jsxs)(e.p,{children:["\u9700\u8981\u6ce8\u610f\u4f7f\u7528 ",(0,o.jsx)(e.code,{children:"JSONP"})," \u534f\u8bae\u65f6\u5fc5\u987b\u901a\u8fc7 ",(0,o.jsx)(e.code,{children:"Query"})," \u65b9\u5f0f\u63d0\u4f9b ",(0,o.jsx)(e.code,{children:"callback"})," \u53c2\u6570\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/jsonp", func(r *ghttp.Request) {\n            r.Response.WriteJsonP(g.Map{\n                "id":   1,\n                "name": "john",\n            })\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,o.jsx)(e.code,{children:"curl"})," \u5de5\u5177\u6d4b\u8bd5\u4e0b\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'$ curl -i "http://127.0.0.1:8199/jsonp?callback=MyCallback"\nHTTP/1.1 200 OK\nServer: GF HTTP Server\nDate: Sun, 05 Jan 2020 02:50:42 GMT\nContent-Length: 34\nContent-Type: text/plain; charset=utf-8\n\nMyCallback({"id":1,"name":"john"})\n'})}),"\n",(0,o.jsx)(e.h2,{id:"xml",children:(0,o.jsx)(e.code,{children:"XML"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/xml", func(r *ghttp.Request) {\n            r.Response.Write(`<?xml version="1.0" encoding="UTF-8"?>`)\n            r.Response.WriteXml(g.Map{\n                "id":   1,\n                "name": "john",\n            })\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,o.jsx)(e.code,{children:"curl"})," \u5de5\u5177\u6d4b\u8bd5\u4e0b\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'$ curl -i http://127.0.0.1:8199/xml\nHTTP/1.1 200 OK\nContent-Type: application/xml\nServer: GF HTTP Server\nDate: Sun, 05 Jan 2020 03:00:55 GMT\nContent-Length: 76\n\n<?xml version="1.0" encoding="UTF-8"?><doc><id>1</id><name>john</name></doc>\n'})})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>i});var t=r(296540);const o={},c=t.createContext(o);function s(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);
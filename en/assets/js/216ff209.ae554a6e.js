"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[83321],{785189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u62e6\u622a\u5668\u4e2d\u95f4\u4ef6","title":"HTTPClient-\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6","description":"GoFrame\u6846\u67b6\u4e2d\u7684HTTPClient\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6\u7279\u6027\uff0c\u53ef\u7528\u4e8e\u5168\u5c40\u8bf7\u6c42\u62e6\u622a\u548c\u53c2\u6570\u6821\u9a8c\u3002\u901a\u8fc7\u4e2d\u95f4\u4ef6\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u8bf7\u6c42\u7684\u524d\u7f6e\u548c\u540e\u7f6e\u9636\u6bb5\u63d2\u5165\u81ea\u5b9a\u4e49\u903b\u8f91\uff0c\u4fee\u6539\u63d0\u4ea4\u53c2\u6570\u6216\u8fd4\u56de\u53c2\u6570\uff0c\u5b9e\u73b0\u7b7e\u540d\u53c2\u6570\u6ce8\u5165\u7b49\u529f\u80fd\uff0c\u786e\u4fdd\u63a5\u53e3\u53c2\u6570\u7684\u5b89\u5168\u6027\u3002","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u62e6\u622a\u5668\u4e2d\u95f4\u4ef6.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient","slug":"/docs/web/http-client-middleware","permalink":"/en/docs/web/http-client-middleware","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u62e6\u622a\u5668\u4e2d\u95f4\u4ef6.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"slug":"/docs/web/http-client-middleware","title":"HTTPClient-\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6","sidebar_position":8,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","HTTPClient","\u62e6\u622a\u5668","\u4e2d\u95f4\u4ef6","\u5ba2\u6237\u7aef\u8bf7\u6c42","\u53c2\u6570\u6821\u9a8c","\u7b7e\u540d\u751f\u6210","\u63a5\u53e3\u5b89\u5168","\u8bf7\u6c42\u62e6\u622a"],"description":"GoFrame\u6846\u67b6\u4e2d\u7684HTTPClient\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6\u7279\u6027\uff0c\u53ef\u7528\u4e8e\u5168\u5c40\u8bf7\u6c42\u62e6\u622a\u548c\u53c2\u6570\u6821\u9a8c\u3002\u901a\u8fc7\u4e2d\u95f4\u4ef6\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u8bf7\u6c42\u7684\u524d\u7f6e\u548c\u540e\u7f6e\u9636\u6bb5\u63d2\u5165\u81ea\u5b9a\u4e49\u903b\u8f91\uff0c\u4fee\u6539\u63d0\u4ea4\u53c2\u6570\u6216\u8fd4\u56de\u53c2\u6570\uff0c\u5b9e\u73b0\u7b7e\u540d\u53c2\u6570\u6ce8\u5165\u7b49\u529f\u80fd\uff0c\u786e\u4fdd\u63a5\u53e3\u53c2\u6570\u7684\u5b89\u5168\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e","permalink":"/en/docs/web/http-client-proxy"},"next":{"title":"HTTPClient-\u5e38\u89c1\u95ee\u9898","permalink":"/en/docs/web/http-client-faq"}}');var i=t(474848),s=t(28453);const o={slug:"/docs/web/http-client-middleware",title:"HTTPClient-\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6",sidebar_position:8,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","HTTPClient","\u62e6\u622a\u5668","\u4e2d\u95f4\u4ef6","\u5ba2\u6237\u7aef\u8bf7\u6c42","\u53c2\u6570\u6821\u9a8c","\u7b7e\u540d\u751f\u6210","\u63a5\u53e3\u5b89\u5168","\u8bf7\u6c42\u62e6\u622a"],description:"GoFrame\u6846\u67b6\u4e2d\u7684HTTPClient\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6\u7279\u6027\uff0c\u53ef\u7528\u4e8e\u5168\u5c40\u8bf7\u6c42\u62e6\u622a\u548c\u53c2\u6570\u6821\u9a8c\u3002\u901a\u8fc7\u4e2d\u95f4\u4ef6\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u8bf7\u6c42\u7684\u524d\u7f6e\u548c\u540e\u7f6e\u9636\u6bb5\u63d2\u5165\u81ea\u5b9a\u4e49\u903b\u8f91\uff0c\u4fee\u6539\u63d0\u4ea4\u53c2\u6570\u6216\u8fd4\u56de\u53c2\u6570\uff0c\u5b9e\u73b0\u7b7e\u540d\u53c2\u6570\u6ce8\u5165\u7b49\u529f\u80fd\uff0c\u786e\u4fdd\u63a5\u53e3\u53c2\u6570\u7684\u5b89\u5168\u6027\u3002"},c=void 0,l={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4e2d\u95f4\u4ef6\u7c7b\u578b",id:"\u4e2d\u95f4\u4ef6\u7c7b\u578b",level:2},{value:"\u524d\u7f6e\u4e2d\u95f4\u4ef6",id:"\u524d\u7f6e\u4e2d\u95f4\u4ef6",level:3},{value:"\u540e\u7f6e\u4e2d\u95f4\u4ef6",id:"\u540e\u7f6e\u4e2d\u95f4\u4ef6",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:3},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:3},{value:"\u8fd0\u884c\u6d4b\u8bd5",id:"\u8fd0\u884c\u6d4b\u8bd5",level:3}];function a(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"HTTPClient"})," \u652f\u6301\u5f3a\u5927\u7684\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6\u7279\u6027\uff0c\u8be5\u7279\u6027\u4f7f\u5f97\u5bf9\u4e8e\u5ba2\u6237\u7aef\u7684\u5168\u5c40\u8bf7\u6c42\u62e6\u622a\u53ca\u6ce8\u5165\u6210\u4e3a\u4e86\u53ef\u80fd\uff0c\u4f8b\u5982\u4fee\u6539/\u6ce8\u5165\u63d0\u4ea4\u53c2\u6570\u3001\u4fee\u6539/\u6ce8\u5165\u8fd4\u56de\u53c2\u6570\u3001\u57fa\u4e8e\u5ba2\u6237\u7aef\u7684\u53c2\u6570\u6821\u9a8c\u7b49\u7b49\u3002\u4e2d\u95f4\u4ef6\u7684\u6ce8\u5165\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u5b9e\u73b0\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func (c *Client) Use(handlers ...HandlerFunc) *Client\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4e2d\u95f4\u4ef6\u4e2d\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"Next"})," \u65b9\u6cd5\u6267\u884c\u4e0b\u4e00\u6b65\u6d41\u7a0b\uff0c ",(0,i.jsx)(n.code,{children:"Next"})," \u65b9\u6cd5\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func (c *Client) Next(req *http.Request) (*Response, error)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4e2d\u95f4\u4ef6\u7c7b\u578b",children:"\u4e2d\u95f4\u4ef6\u7c7b\u578b"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"HTTPClient"})," \u4e2d\u95f4\u4ef6\u529f\u80fd\u540c ",(0,i.jsx)(n.code,{children:"HTTPServer"})," \u7684\u4e2d\u95f4\u4ef6\u529f\u80fd\u7c7b\u4f3c\uff0c\u540c\u6837\u4e5f\u662f\u5206\u4e3a\u4e86\u524d\u7f6e\u4e2d\u95f4\u4ef6\u548c\u540e\u7f6e\u4e2d\u95f4\u4ef6\u4e24\u79cd\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u524d\u7f6e\u4e2d\u95f4\u4ef6",children:"\u524d\u7f6e\u4e2d\u95f4\u4ef6"}),"\n",(0,i.jsxs)(n.p,{children:["\u5904\u7406\u903b\u8f91\u4f4d\u4e8e ",(0,i.jsx)(n.code,{children:"Next"})," \u65b9\u6cd5\u4e4b\u524d\uff0c\u683c\u5f0f\u5f62\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"c := g.Client()\nc.Use(func(c *gclient.Client, r *http.Request) (resp *gclient.Response, err error) {\n    // \u81ea\u5b9a\u4e49\u5904\u7406\u903b\u8f91\n    resp, err = c.Next(r)\n    return resp, err\n})\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u540e\u7f6e\u4e2d\u95f4\u4ef6",children:"\u540e\u7f6e\u4e2d\u95f4\u4ef6"}),"\n",(0,i.jsxs)(n.p,{children:["\u5904\u7406\u903b\u8f91\u4f4d\u4e8e ",(0,i.jsx)(n.code,{children:"Next"})," \u65b9\u6cd5\u4e4b\u540e\uff0c\u683c\u5f0f\u5f62\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"c := g.Client()\nc.Use(func(c *gclient.Client, r *http.Request) (resp *gclient.Response, err error) {\n    resp, err = c.Next(r)\n    // \u81ea\u5b9a\u4e49\u5904\u7406\u903b\u8f91\n    return resp, err\n})\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u6765\u4e00\u4e2a\u4ee3\u7801\u793a\u4f8b\u66f4\u597d\u4ecb\u7ecd\u4f7f\u7528\uff0c\u8be5\u793a\u4f8b\u901a\u8fc7\u7ed9\u5ba2\u6237\u7aef\u589e\u52a0\u62e6\u622a\u5668\uff0c\u5bf9\u63d0\u4ea4\u7684JSON\u6570\u636e\u6ce8\u5165\u81ea\u5b9a\u4e49\u7684\u989d\u5916\u53c2\u6570\uff0c\u8fd9\u4e9b\u989d\u5916\u53c2\u6570\u5b9e\u73b0\u5bf9\u63d0\u4ea4\u53c2\u6570\u7684\u7b7e\u540d\u751f\u6210\u4f53\u79ef\u7b7e\u540d\u76f8\u5173\u53c2\u6570\u63d0\u4ea4\uff0c\u4e5f\u5c31\u662f\u5b9e\u73b0\u4e00\u7248\u7b80\u5355\u7684\u63a5\u53e3\u53c2\u6570\u5b89\u5168\u6821\u9a8c\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u670d\u52a1\u7aef",children:"\u670d\u52a1\u7aef"}),"\n",(0,i.jsxs)(n.p,{children:["\u670d\u52a1\u7aef\u7684\u903b\u8f91\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u628a\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684 ",(0,i.jsx)(n.code,{children:"JSON"})," \u53c2\u6570\u6309\u7167 ",(0,i.jsx)(n.code,{children:"map"})," \u89e3\u6790\u540e\u518d\u6784\u9020\u6210 ",(0,i.jsx)(n.code,{children:"JSON"})," \u5b57\u7b26\u4e32\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"\u5f80\u5f80\u670d\u52a1\u7aef\u4e5f\u9700\u8981\u901a\u8fc7\u4e2d\u95f4\u4ef6\u8fdb\u884c\u7b7e\u540d\u6821\u9a8c\uff0c\u6211\u8fd9\u91cc\u5077\u4e86\u4e00\u4e2a\u61d2\uff0c\u76f4\u63a5\u8fd4\u56de\u4e86\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684\u6570\u636e\u3002\u4f53\u8c05\u4e00\u4e0b\u6587\u6863\u7ef4\u62a4\u4f5c\u8005\ud83d\ude38\u3002"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/", func(r *ghttp.Request) {\n            r.Response.Write(r.GetMap())\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u5ba2\u6237\u7aef",children:"\u5ba2\u6237\u7aef"}),"\n",(0,i.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u7684\u903b\u8f91\u662f\u5b9e\u73b0\u57fa\u672c\u7684\u5ba2\u6237\u7aef\u53c2\u6570\u63d0\u4ea4\u3001\u62e6\u622a\u5668\u6ce8\u5165\u3001\u7b7e\u540d\u76f8\u5173\u53c2\u6570\u6ce8\u5165\u4ee5\u53ca\u7b7e\u540d\u53c2\u6570\u751f\u6210\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "bytes"\n    "fmt"\n    "io/ioutil"\n    "net/http"\n\n    "github.com/gogf/gf/v2/container/garray"\n    "github.com/gogf/gf/v2/crypto/gmd5"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/internal/json"\n    "github.com/gogf/gf/v2/net/gclient"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/util/gconv"\n    "github.com/gogf/gf/v2/util/guid"\n    "github.com/gogf/gf/v2/util/gutil"\n)\n\nconst (\n    appId     = "123"\n    appSecret = "456"\n)\n\n// \u6ce8\u5165\u7edf\u4e00\u7684\u63a5\u53e3\u7b7e\u540d\u53c2\u6570\nfunc injectSignature(jsonContent []byte) []byte {\n    var m map[string]interface{}\n    _ = json.Unmarshal(jsonContent, &m)\n    if len(m) > 0 {\n        m["appid"] = appId\n        m["nonce"] = guid.S()\n        m["timestamp"] = gtime.Timestamp()\n        var (\n            keyArray   = garray.NewSortedStrArrayFrom(gutil.Keys(m))\n            sigContent string\n        )\n        keyArray.Iterator(func(k int, v string) bool {\n            sigContent += v\n            sigContent += gconv.String(m[v])\n            return true\n        })\n        m["signature"] = gmd5.MustEncryptString(gmd5.MustEncryptString(sigContent) + appSecret)\n        jsonContent, _ = json.Marshal(m)\n    }\n    return jsonContent\n}\n\nfunc main() {\n    c := g.Client()\n    c.Use(func(c *gclient.Client, r *http.Request) (resp *gclient.Response, err error) {\n        bodyBytes, _ := ioutil.ReadAll(r.Body)\n        if len(bodyBytes) > 0 {\n            // \u6ce8\u5165\u7b7e\u540d\u76f8\u5173\u53c2\u6570\uff0c\u4fee\u6539Request\u539f\u6709\u7684\u63d0\u4ea4\u53c2\u6570\n            bodyBytes = injectSignature(bodyBytes)\n            r.Body = ioutil.NopCloser(bytes.NewBuffer(bodyBytes))\n            r.ContentLength = int64(len(bodyBytes))\n        }\n        return c.Next(r)\n    })\n    content := c.ContentJson().PostContent(gctx.New(), "http://127.0.0.1:8199/", g.Map{\n        "name": "goframe",\n        "site": "https://goframe.org",\n    })\n    fmt.Println(content)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u8fd0\u884c\u6d4b\u8bd5",children:"\u8fd0\u884c\u6d4b\u8bd5"}),"\n",(0,i.jsx)(n.p,{children:"\u5148\u8fd0\u884c\u670d\u52a1\u7aef\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ go run server.go\n\n  SERVER  | DOMAIN  | ADDRESS | METHOD | ROUTE |      HANDLER      | MIDDLEWARE\n----------|---------|---------|--------|-------|-------------------|-------------\n  default | default | :8199   | ALL    | /     | main.main.func1.1 |\n----------|---------|---------|--------|-------|-------------------|-------------\n\n2021-05-18 09:23:41.865 97906: http server started listening on [:8199]\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u518d\u8fd0\u884c\u5ba2\u6237\u7aef\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ go run client.go\n{"appid":"123","name":"goframe","nonce":"12vd8tx23l6cbfz9k59xehk1002pixfo","signature":"578a90b67bdc63d551d6a18635307ba2","site":"https://goframe.org","timestamp":1621301076}\n$\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u670d\u52a1\u7aef\u63a5\u53d7\u5230\u7684\u53c2\u6570\u591a\u4e86\u591a\u4e86\u51e0\u9879\uff0c\u5305\u62ec ",(0,i.jsx)(n.code,{children:"appid/nonce/timestamp/signature"}),"\uff0c\u8fd9\u4e9b\u53c2\u6570\u5f80\u5f80\u90fd\u662f\u7b7e\u540d\u6821\u9a8c\u7b97\u6cd5\u6240\u9700\u8981\u7684\u53c2\u6570\u3002"]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(296540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
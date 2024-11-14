"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[10409],{2797:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient","title":"HTTPClient","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/versioned_docs/version-2.2.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient.md","sourceDirName":"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient","slug":"/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/","permalink":"/2.2.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient.md","tags":[],"version":"2.2.x","sidebarPosition":9,"frontMatter":{"title":"HTTPClient","sidebar_position":9,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u5f02\u5e38\u5904\u7406","permalink":"/2.2.x/WEB\u670d\u52a1\u5f00\u53d1/\u5f02\u5e38\u5904\u7406"},"next":{"title":"HTTPClient-\u57fa\u672c\u4f7f\u7528","permalink":"/2.2.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u57fa\u672c\u4f7f\u7528"}}');var c=i(474848),l=i(28453);const t={title:"HTTPClient",sidebar_position:9,hide_title:!0},r=void 0,d={},o=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u94fe\u5f0f\u64cd\u4f5c",id:"\u94fe\u5f0f\u64cd\u4f5c",level:2},{value:"\u8fd4\u56de\u5bf9\u8c61",id:"\u8fd4\u56de\u5bf9\u8c61",level:2},{value:"\u91cd\u8981\u8bf4\u660e",id:"\u91cd\u8981\u8bf4\u660e",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u5f3a\u5927\u4fbf\u6377\u6613\u7528\u7684HTTP\u5ba2\u6237\u7aef\uff0c\u7531 ",(0,c.jsx)(n.code,{children:"gclient"})," \u7ec4\u4ef6\u5b9e\u73b0\uff0c\u5bf9\u8c61\u521b\u5efa\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"gclient.New()"})," \u5305\u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"g.Client()"})," \u65b9\u6cd5\u8c03\u7528\u3002\u63a8\u8350\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"g.Client()"})," \u6765\u4fbf\u6377\u5730\u521b\u5efaHTTP\u5ba2\u6237\u7aef\u5bf9\u8c61\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u65b9\u6cd5\u5217\u8868\uff1a",(0,c.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gclient",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gclient"})]}),"\n",(0,c.jsx)(n.p,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"New"})," \u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684HTTP\u5ba2\u6237\u7aef\u5bf9\u8c61 ",(0,c.jsx)(n.code,{children:"Client"}),"\uff0c\u968f\u540e\u53ef\u4ee5\u4f7f\u7528\u8be5\u5bf9\u8c61\u6267\u884c\u8bf7\u6c42\uff0c\u8be5\u5bf9\u8c61\u5e95\u5c42\u4f7f\u7528\u4e86\u8fde\u63a5\u6c60\u8bbe\u8ba1\uff0c\u56e0\u6b64\u6ca1\u6709 ",(0,c.jsx)(n.code,{children:"Close"})," \u5173\u95ed\u65b9\u6cd5\u3002 ",(0,c.jsx)(n.code,{children:"HTTP"})," \u5ba2\u6237\u7aef\u5bf9\u8c61\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"g.Client()"})," \u5feb\u6377\u65b9\u6cd5\u521b\u5efa\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5ba2\u6237\u7aef\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u4ee5 ",(0,c.jsx)(n.code,{children:"HTTP Method"})," \u547d\u540d\u7684\u65b9\u6cd5\uff0c\u8c03\u7528\u8fd9\u4e9b\u65b9\u6cd5\u5c06\u4f1a\u53d1\u8d77\u5bf9\u5e94\u7684 ",(0,c.jsx)(n.code,{children:"HTTP Method"})," \u8bf7\u6c42\u3002\u5e38\u7528\u7684\u65b9\u6cd5\u662f ",(0,c.jsx)(n.code,{children:"Get"})," \u548c ",(0,c.jsx)(n.code,{children:"Post"})," \u65b9\u6cd5\uff0c\u540c\u65f6 ",(0,c.jsx)(n.code,{children:"DoRequest"})," \u662f\u6838\u5fc3\u7684\u8bf7\u6c42\u65b9\u6cd5\uff0c\u7528\u6237\u53ef\u4ee5\u8c03\u7528\u8be5\u65b9\u6cd5\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684 ",(0,c.jsx)(n.code,{children:"HTTP Method"})," \u53d1\u9001\u8bf7\u6c42\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u8bf7\u6c42\u8fd4\u56de\u7ed3\u679c\u4e3a ",(0,c.jsx)(n.code,{children:"*ClientResponse"})," \u5bf9\u8c61\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u7ed3\u679c\u5bf9\u8c61\u83b7\u53d6\u5bf9\u5e94\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"ReadAll"}),"/ ",(0,c.jsx)(n.code,{children:"ReadAllString"})," \u65b9\u6cd5\u53ef\u4ee5\u83b7\u5f97\u8fd4\u56de\u7684\u5185\u5bb9\uff0c\u8be5\u5bf9\u8c61\u5728\u4f7f\u7528\u5b8c\u6bd5\u540e\u9700\u8981\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"Close"})," \u65b9\u6cd5\u5173\u95ed\uff0c\u9632\u6b62\u5185\u5b58\u6ea2\u51fa\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"*Bytes"})," \u65b9\u6cd5\u7528\u4e8e\u83b7\u5f97\u670d\u52a1\u7aef\u8fd4\u56de\u7684\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u5982\u679c\u8bf7\u6c42\u5931\u8d25\u8fd4\u56de ",(0,c.jsx)(n.code,{children:"nil"}),"\uff1b ",(0,c.jsx)(n.code,{children:"*Content"})," \u65b9\u6cd5\u7528\u4e8e\u8bf7\u6c42\u83b7\u5f97\u5b57\u7b26\u4e32\u7ed3\u679c\u6570\u636e\uff0c\u5982\u679c\u8bf7\u6c42\u5931\u8d25\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\uff1b ",(0,c.jsx)(n.code,{children:"Set*"})," \u65b9\u6cd5\u7528\u4e8e ",(0,c.jsx)(n.code,{children:"Client"})," \u7684\u53c2\u6570\u8bbe\u7f6e\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"*Var"})," \u65b9\u6cd5\u76f4\u63a5\u8bf7\u6c42\u5e76\u83b7\u53d6HTTP\u63a5\u53e3\u7ed3\u679c\u4e3a\u6cdb\u578b\u7c7b\u578b\u4fbf\u4e8e\u8f6c\u6362\u3002\u5982\u679c\u8bf7\u6c42\u5931\u8d25\u6216\u8005\u8bf7\u6c42\u7ed3\u679c\u4e3a\u7a7a\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a\u7a7a\u7684 ",(0,c.jsx)(n.code,{children:"g.Var"})," \u6cdb\u578b\u5bf9\u8c61\uff0c\u4e0d\u5f71\u54cd\u8f6c\u6362\u65b9\u6cd5\u8c03\u7528\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u53c2\u6570\u7684\u6570\u636e\u53c2\u6570 ",(0,c.jsx)(n.code,{children:"data"})," \u6570\u636e\u7c7b\u578b\u4e3a ",(0,c.jsx)(n.code,{children:"interface{}"})," \u7c7b\u578b\uff0c\u4e5f\u5c31\u662f\u8bf4\u53ef\u4ee5\u4f20\u9012\u4efb\u610f\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5e38\u89c1\u7684\u53c2\u6570\u6570\u636e\u7c7b\u578b\u4e3a ",(0,c.jsx)(n.code,{children:"string"}),"/ ",(0,c.jsx)(n.code,{children:"map"}),"\uff0c\u5982\u679c\u53c2\u6570\u4e3a ",(0,c.jsx)(n.code,{children:"map"})," \u7c7b\u578b\uff0c\u53c2\u6570\u503c\u5c06\u4f1a\u88ab\u81ea\u52a8 ",(0,c.jsx)(n.code,{children:"urlencode"})," \u7f16\u7801\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8bf7\u4f7f\u7528\u7ed9\u5b9a\u7684\u65b9\u6cd5\u521b\u5efa ",(0,c.jsx)(n.code,{children:"Client"})," \u5bf9\u8c61\uff0c\u800c\u4e0d\u8981\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"new(ghttp.Client)"})," \u6216\u8005 ",(0,c.jsx)(n.code,{children:"&ghttp.Client{}"})," \u521b\u5efa\u5ba2\u6237\u7aef\u5bf9\u8c61\uff0c\u5426\u5219\uff0c\u54fc\u54fc\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u94fe\u5f0f\u64cd\u4f5c",children:"\u94fe\u5f0f\u64cd\u4f5c"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u5ba2\u6237\u7aef\u652f\u6301\u4fbf\u6377\u7684\u94fe\u5f0f\u64cd\u4f5c\uff0c\u5e38\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"func (c *Client) Timeout(t time.Duration) *Client\nfunc (c *Client) Cookie(m map[string]string) *Client\nfunc (c *Client) Header(m map[string]string) *Client\nfunc (c *Client) HeaderRaw(headers string) *Client\nfunc (c *Client) ContentType(contentType string) *Client\nfunc (c *Client) ContentJson() *Client\nfunc (c *Client) ContentXml() *Client\nfunc (c *Client) BasicAuth(user, pass string) *Client\nfunc (c *Client) Retry(retryCount int, retryInterval time.Duration) *Client\nfunc (c *Client) Prefix(prefix string) *Client\nfunc (c *Client) Proxy(proxyURL string) *Client\nfunc (c *Client) RedirectLimit(redirectLimit int) *Client\nfunc (c *Client) Dump(dump ...bool) *Client\nfunc (c *Client) Use(handlers ...HandlerFunc) *Client\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Timeout"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u5f53\u524d\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Cookie"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u5f53\u524d\u8bf7\u6c42\u7684\u81ea\u5b9a\u4e49 ",(0,c.jsx)(n.code,{children:"Cookie"})," \u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Header*"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u5f53\u524d\u8bf7\u6c42\u7684\u81ea\u5b9a\u4e49 ",(0,c.jsx)(n.code,{children:"Header"})," \u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Content*"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u5f53\u524d\u8bf7\u6c42\u7684 ",(0,c.jsx)(n.code,{children:"Content-Type"})," \u4fe1\u606f\uff0c\u5e76\u4e14\u652f\u6301\u6839\u636e\u8be5\u4fe1\u606f\u81ea\u52a8\u68c0\u67e5\u63d0\u4ea4\u53c2\u6570\u5e76\u81ea\u52a8\u7f16\u7801\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"BasicAuth"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e ",(0,c.jsx)(n.code,{children:"HTTP Basic Auth"})," \u6821\u9a8c\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Retry"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u8bf7\u6c42\u5931\u8d25\u65f6\u91cd\u8fde\u6b21\u6570\u548c\u91cd\u8fde\u95f4\u9694\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Proxy"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6ehttp\u8bbf\u95ee\u4ee3\u7406\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"RedirectLimit"})," \u65b9\u6cd5\u7528\u4e8e\u9650\u5236\u91cd\u5b9a\u5411\u8df3\u8f6c\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u5bf9\u8c61",children:"\u8fd4\u56de\u5bf9\u8c61"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"gclient.Response"})," \u4e3aHTTP\u5bf9\u5e94\u8bf7\u6c42\u7684\u8fd4\u56de\u7ed3\u679c\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u7ee7\u627f\u4e8e ",(0,c.jsx)(n.code,{children:"http.Response"}),"\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"http.Response"})," \u7684\u6240\u6709\u65b9\u6cd5\u3002\u5728\u6b64\u57fa\u7840\u4e4b\u4e0a\u589e\u52a0\u4e86\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u6cd5\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"func (r *Response) GetCookie(key string) string\nfunc (r *Response) GetCookieMap() map[string]string\nfunc (r *Response) Raw() string\nfunc (r *Response) RawDump()\nfunc (r *Response) RawRequest() string\nfunc (r *Response) RawResponse() string\nfunc (r *Response) ReadAll() []byte\nfunc (r *Response) ReadAllString() string\nfunc (r *Response) Close() error\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u91cc\u4e5f\u8981\u63d0\u9192\u7684\u662f\uff0c ",(0,c.jsx)(n.code,{children:"Response"})," \u9700\u8981\u624b\u52a8\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"Close"})," \u65b9\u6cd5\u5173\u95ed\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e0d\u7ba1\u4f60\u4f7f\u7528\u4e0d\u4f7f\u7528\u8fd4\u56de\u7684 ",(0,c.jsx)(n.code,{children:"Response"})," \u5bf9\u8c61\uff0c\u4f60\u90fd\u9700\u8981\u5c06\u8be5\u8fd4\u56de\u5bf9\u8c61\u8d4b\u503c\u7ed9\u4e00\u4e2a\u53d8\u91cf\uff0c\u5e76\u4e14\u624b\u52a8\u8c03\u7528\u5176 ",(0,c.jsx)(n.code,{children:"Close"})," \u65b9\u6cd5\u8fdb\u884c\u5173\u95ed\uff08\u5f80\u5f80\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"defer r.Close()"}),"\uff09\uff0c\u5426\u5219\u4f1a\u9020\u6210\u6587\u4ef6\u53e5\u67c4\u6ea2\u51fa\u3001\u5185\u5b58\u6ea2\u51fa\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u91cd\u8981\u8bf4\u660e",children:"\u91cd\u8981\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ghttp"})," \u5ba2\u6237\u7aef\u9ed8\u8ba4\u5173\u95ed\u4e86 ",(0,c.jsx)(n.code,{children:"KeepAlive"})," \u529f\u80fd\u4ee5\u53ca\u5bf9\u670d\u52a1\u7aef ",(0,c.jsx)(n.code,{children:"TLS"})," \u8bc1\u4e66\u7684\u6821\u9a8c\u529f\u80fd\uff0c\u5982\u679c\u9700\u8981\u542f\u7528\u53ef\u81ea\u5b9a\u4e49\u5ba2\u6237\u7aef\u7684 ",(0,c.jsx)(n.code,{children:"Transport"})," \u5c5e\u6027\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u8fde\u63a5\u6c60\u53c2\u6570\u8bbe\u5b9a\u3001\u8fde\u63a5\u4ee3\u7406\u8bbe\u7f6e\u8fd9\u4e9b\u9ad8\u7ea7\u529f\u80fd\u4e5f\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u5ba2\u6237\u7aef\u7684 ",(0,c.jsx)(n.code,{children:"Transport"})," \u5c5e\u6027\u5b9e\u73b0\uff0c\u8be5\u6570\u636e\u7ee7\u627f\u4e8e\u6807\u51c6\u5e93\u7684 ",(0,c.jsx)(n.code,{children:"http.Transport"})," \u5bf9\u8c61\u3002"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var s=i(296540);const c={},l=s.createContext(c);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);
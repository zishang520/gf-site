"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[42595],{40501:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var r=t(74848),i=t(28453);const o={title:"TCP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5",sidebar_position:1,hide_title:!0},d=void 0,s={id:"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5",title:"TCP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5",description:"gtcp \u6a21\u5757\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u5de5\u5177\u65b9\u6cd5\u3002",source:"@site/versioned_docs/version-2.6.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5.md",sourceDirName:"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6",slug:"/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5",permalink:"/gf-site/en/docs/2.6.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:1,frontMatter:{title:"TCP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5",sidebar_position:1,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u8fde\u63a5\u5bf9\u8c61-\u901a\u4fe1\u5f00\u53d1\u8fdb\u9636",permalink:"/gf-site/en/docs/2.6.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61/\u8fde\u63a5\u5bf9\u8c61-\u901a\u4fe1\u5f00\u53d1\u8fdb\u9636"},next:{title:"TCP\u7ec4\u4ef6-TLS\u52a0\u5bc6",permalink:"/gf-site/en/docs/2.6.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-TLS\u52a0\u5bc6"}},c={},a=[];function l(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gtcp"})," \u6a21\u5757\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u5de5\u5177\u65b9\u6cd5\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/net/gtcp"\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtcp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtcp"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func LoadKeyCrt(crtFile, keyFile string) (*tls.Config, error)\nfunc NewNetConn(addr string, timeout ...int) (net.Conn, error)\nfunc NewNetConnKeyCrt(addr, crtFile, keyFile string) (net.Conn, error)\nfunc NewNetConnTLS(addr string, tlsConfig *tls.Config) (net.Conn, error)\nfunc Send(addr string, data []byte, retry ...Retry) error\nfunc SendPkg(addr string, data []byte, option ...PkgOption) error\nfunc SendPkgWithTimeout(addr string, data []byte, timeout time.Duration, option ...PkgOption) error\nfunc SendRecv(addr string, data []byte, receive int, retry ...Retry) ([]byte, error)\nfunc SendRecvPkg(addr string, data []byte, option ...PkgOption) ([]byte, error)\nfunc SendRecvPkgWithTimeout(addr string, data []byte, timeout time.Duration, option ...PkgOption) ([]byte, error)\nfunc SendRecvWithTimeout(addr string, data []byte, receive int, timeout time.Duration, retry ...Retry) ([]byte, error)\nfunc SendWithTimeout(addr string, data []byte, timeout time.Duration, retry ...Retry) error\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NewNetConn"})," \u7528\u4e8e\u7b80\u5316\u6807\u51c6\u5e93\u8fde\u63a5\u5bf9\u8c61 ",(0,r.jsx)(n.code,{children:"net.Conn"})," \u7684\u521b\u5efa\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NewNetConnTLS"})," \u548c ",(0,r.jsx)(n.code,{children:"NewNetConnKeyCrt"})," \u7528\u4e8e\u521b\u5efa\u652f\u6301TLS\u5b89\u5168\u52a0\u5bc6\u901a\u4fe1\u7684TCP\u5ba2\u6237\u7aef\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Send*"})," \u7cfb\u5217\u65b9\u6cd5\u76f4\u63a5\u901a\u8fc7\u7ed9\u5b9a\u5730\u5740\u8fdb\u884c\u6570\u636e\u53d1\u9001\uff0c\u5e76\u83b7\u53d6\u8be5\u8bf7\u6c42\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u7528\u4e8e\u77ed\u94fe\u63a5\u8bf7\u6c42\u7684\u60c5\u51b5\uff1b"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e3a\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u6211\u4eec\u4f7f\u7528\u5de5\u5177\u65b9\u6cd5\u6765\u8bbf\u95ee\u6307\u5b9a\u7684Web\u7ad9\u70b9\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/net/gtcp"\n)\n\nfunc main() {\n    data, err := gtcp.SendRecv("www.baidu.com:80", []byte("HEAD / HTTP/1.1\\n\\n"), -1)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(string(data))\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7TCP\u8bbf\u95ee\u767e\u5ea6\u9996\u9875\uff0c\u6a21\u62dfHTTP\u8bf7\u6c42\u5934\u4fe1\u606f\uff0c\u5e76\u83b7\u5f97\u8fd4\u56de\u7ed3\u679c\u3002 \u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'HTTP/1.1 302 Found\nConnection: Keep-Alive\nContent-Length: 17931\nContent-Type: text/html\nDate: Tue, 04 Jun 2019 15:53:09 GMT\nEtag: "54d9749e-460b"\nServer: bfe/1.0.8.18\n'})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>s});var r=t(96540);const i={},o=r.createContext(i);function d(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
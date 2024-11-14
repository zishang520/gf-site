"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[88737],{937600:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6","title":"TCP\u7ec4\u4ef6","description":"GoFrame\u6846\u67b6\u4e2d\u7684gtcp\u6a21\u5757\uff0c\u8be5\u6a21\u5757\u5b9e\u73b0\u4e86\u7b80\u4fbf\u6613\u7528\u3001\u8f7b\u91cf\u7ea7\u7684TCPServer\u670d\u52a1\u7aef\u3002\u901a\u8fc7\u4f7f\u7528gtcp\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u521b\u5efa\u548c\u7ba1\u7406TCP\u670d\u52a1\uff0c\u5e76\u652f\u6301\u9ad8\u5e76\u53d1\u8fde\u63a5\u3002\u6587\u6863\u4e2d\u63d0\u4f9b\u4e86\u7b80\u5355\u7684\u4ee3\u7801\u793a\u4f8b\uff0c\u4ee5\u6f14\u793a\u5982\u4f55\u4f7f\u7528gtcp\u6a21\u5757\u521b\u5efa\u4e00\u4e2a\u57fa\u672c\u7684echo\u670d\u52a1\u5668\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6.md","sourceDirName":"docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6","slug":"/docs/network/gtcp","permalink":"/2.7.x/docs/network/gtcp","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6.md","tags":[],"version":"2.7.x","sidebarPosition":0,"frontMatter":{"slug":"/docs/network/gtcp","title":"TCP\u7ec4\u4ef6","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","gtcp","TCPServer","\u670d\u52a1\u5668","\u7f16\u7a0b","\u7f51\u7edc\u8fde\u63a5","\u8f7b\u91cf\u7ea7","\u5e76\u53d1","\u4f8b\u5b50"],"description":"GoFrame\u6846\u67b6\u4e2d\u7684gtcp\u6a21\u5757\uff0c\u8be5\u6a21\u5757\u5b9e\u73b0\u4e86\u7b80\u4fbf\u6613\u7528\u3001\u8f7b\u91cf\u7ea7\u7684TCPServer\u670d\u52a1\u7aef\u3002\u901a\u8fc7\u4f7f\u7528gtcp\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u521b\u5efa\u548c\u7ba1\u7406TCP\u670d\u52a1\uff0c\u5e76\u652f\u6301\u9ad8\u5e76\u53d1\u8fde\u63a5\u3002\u6587\u6863\u4e2d\u63d0\u4f9b\u4e86\u7b80\u5355\u7684\u4ee3\u7801\u793a\u4f8b\uff0c\u4ee5\u6f14\u793a\u5982\u4f55\u4f7f\u7528gtcp\u6a21\u5757\u521b\u5efa\u4e00\u4e2a\u57fa\u672c\u7684echo\u670d\u52a1\u5668\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1","permalink":"/2.7.x/docs/network"},"next":{"title":"TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61","permalink":"/2.7.x/docs/network/gtcp-conn"}}');var c=r(474848),s=r(28453),o=r(103514);const i={slug:"/docs/network/gtcp",title:"TCP\u7ec4\u4ef6",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","gtcp","TCPServer","\u670d\u52a1\u5668","\u7f16\u7a0b","\u7f51\u7edc\u8fde\u63a5","\u8f7b\u91cf\u7ea7","\u5e76\u53d1","\u4f8b\u5b50"],description:"GoFrame\u6846\u67b6\u4e2d\u7684gtcp\u6a21\u5757\uff0c\u8be5\u6a21\u5757\u5b9e\u73b0\u4e86\u7b80\u4fbf\u6613\u7528\u3001\u8f7b\u91cf\u7ea7\u7684TCPServer\u670d\u52a1\u7aef\u3002\u901a\u8fc7\u4f7f\u7528gtcp\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u521b\u5efa\u548c\u7ba1\u7406TCP\u670d\u52a1\uff0c\u5e76\u652f\u6301\u9ad8\u5e76\u53d1\u8fde\u63a5\u3002\u6587\u6863\u4e2d\u63d0\u4f9b\u4e86\u7b80\u5355\u7684\u4ee3\u7801\u793a\u4f8b\uff0c\u4ee5\u6f14\u793a\u5982\u4f55\u4f7f\u7528gtcp\u6a21\u5757\u521b\u5efa\u4e00\u4e2a\u57fa\u672c\u7684echo\u670d\u52a1\u5668\u3002"},l=void 0,a={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"gtcp"})," \u6a21\u5757\u5b9e\u73b0\u7b80\u4fbf\u6613\u7528\u3001\u8f7b\u91cf\u7ea7\u7684 ",(0,c.jsx)(n.code,{children:"TCPServer"})," \u670d\u52a1\u7aef\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/net/gtcp"\n'})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a ",(0,c.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtcp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtcp"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"type Server\n    func GetServer(name ...interface{}) *Server\n    func NewServer(address string, handler func(*Conn), name ...string) *Server\n    func NewServerKeyCrt(address, crtFile, keyFile string, handler func(*Conn), name ...string) *Server\n    func NewServerTLS(address string, tlsConfig *tls.Config, handler func(*Conn), name ...string) *Server\n    func (s *Server) Close() error\n    func (s *Server) Run() (err error)\n    func (s *Server) SetAddress(address string)\n    func (s *Server) SetHandler(handler func(*Conn))\n    func (s *Server) SetTLSConfig(tlsConfig *tls.Config)\n    func (s *Server) SetTLSKeyCrt(crtFile, keyFile string) error\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c ",(0,c.jsx)(n.code,{children:"GetServer"})," \u4f7f\u7528\u5355\u4f8b\u6a21\u5f0f\u901a\u8fc7\u7ed9\u5b9a\u4e00\u4e2a\u552f\u4e00\u7684\u540d\u79f0\u83b7\u53d6/\u521b\u5efa\u4e00\u4e2a\u5355\u4f8b ",(0,c.jsx)(n.code,{children:"Server"}),"\uff0c\u540e\u7eed\u53ef\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"SetAddress"})," \u548c ",(0,c.jsx)(n.code,{children:"SetHandler"})," \u65b9\u6cd5\u52a8\u6001\u4fee\u6539Server\u5c5e\u6027\uff1b ",(0,c.jsx)(n.code,{children:"NewServer"})," \u5219\u76f4\u63a5\u6839\u636e\u7ed9\u5b9a\u53c2\u6570\u521b\u5efa\u4e00\u4e2aServer\u5bf9\u8c61\uff0c\u5e76\u53ef\u6307\u5b9a\u540d\u79f0\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u901a\u8fc7\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,c.jsx)(n.code,{children:"echo\u670d\u52a1\u5668"})," \u6765\u6f14\u793a ",(0,c.jsx)(n.code,{children:"TCPServer"})," \u7684\u4f7f\u7528\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/net/gtcp"\n)\n\nfunc main() {\n    gtcp.NewServer("127.0.0.1:8999", func(conn *gtcp.Conn) {\n        defer conn.Close()\n        for {\n            data, err := conn.Recv(-1)\n            if len(data) > 0 {\n                if err := conn.Send(append([]byte("> "), data...)); err != nil {\n                  fmt.Println(err)\n                }\n            }\n            if err != nil {\n                break\n            }\n        }\n    }).Run()\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\u6211\u4eec\u4f7f\u7528\u4e86 ",(0,c.jsx)(n.code,{children:"Send"})," \u548c ",(0,c.jsx)(n.code,{children:"Recv"})," \u6765\u53d1\u9001\u548c\u63a5\u6536\u6570\u636e\u3002\u5176\u4e2d ",(0,c.jsx)(n.code,{children:"Recv"})," \u65b9\u6cd5\u4f1a\u901a\u8fc7\u963b\u585e\u65b9\u5f0f\u63a5\u6536\u6570\u636e\uff0c\u76f4\u5230\u5ba2\u6237\u7aef\u201d\u53d1\u9001\u5b8c\u6bd5\u4e00\u6761\u6570\u636e\u201d(\u6267\u884c\u4e00\u6b21 ",(0,c.jsx)(n.code,{children:"Send"}),"\uff0c\u5e95\u5c42Socket\u901a\u4fe1\u4e0d\u5e26\u7f13\u51b2\u5b9e\u73b0)\uff0c\u6216\u8005\u5173\u95ed\u94fe\u63a5\u3002\u5173\u4e8e\u5176\u4e2d\u7684\u94fe\u63a5\u5bf9\u8c61 ",(0,c.jsx)(n.code,{children:"gtcp.Conn"})," \u7684\u4ecb\u7ecd\uff0c\u8bf7\u7ee7\u7eed\u9605\u8bfb\u540e\u7eed\u7ae0\u8282\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6267\u884c\u4e4b\u540e\u6211\u4eec\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"telnet"})," \u5de5\u5177\u6765\u8fdb\u884c\u6d4b\u8bd5\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"john@home:~$ telnet 127.0.0.1 8999\nTrying 127.0.0.1...\nConnected to 127.0.0.1.\nEscape character is '^]'.\nhello\n> hello\nhi there\n> hi there\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6bcf\u4e00\u4e2a\u5ba2\u6237\u7aef\u53d1\u8d77\u7684TCP\u94fe\u63a5\uff0cTCPServer\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a ",(0,c.jsx)(n.code,{children:"goroutine"})," \u8fdb\u884c\u5904\u7406\uff0c\u76f4\u81f3TCP\u94fe\u63a5\u65ad\u5f00\u3002\u7531\u4e8egoroutine\u6bd4\u8f83\u8f7b\u91cf\u7ea7\uff0c\u56e0\u6b64\u53ef\u4ee5\u652f\u6491\u5f88\u9ad8\u7684\u5e76\u53d1\u91cf\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,c.jsx)(o.A,{})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},103514:(e,n,r)=>{r.d(n,{A:()=>v});r(296540);var t=r(634164),c=r(944718),s=r(328774),o=r(853465),i=r(316654),l=r(721312),a=r(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(474848);function h(e){let{href:n,children:r}=e;return(0,u.jsx)(s.A,{href:n,className:(0,t.A)("card padding--lg",d.cardContainer),children:r})}function g(e){let{href:n,icon:r,title:c,description:s}=e;return(0,u.jsxs)(h,{href:n,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,t.A)("text--truncate",d.cardTitle),title:c,children:[r," ",c]}),s&&(0,u.jsx)("p",{className:(0,t.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:n}=e;const r=(0,c.Nr)(n),t=function(){const{selectMessage:e}=(0,o.W)();return n=>e(n,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return r?(0,u.jsx)(g,{href:r,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??t(n.items.length)}):null}function f(e){let{item:n}=e;const r=(0,i.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,c.cC)(n.docId??void 0);return(0,u.jsx)(g,{href:n.href,icon:r,title:n.label,description:n.description??t?.description})}function m(e){let{item:n}=e;switch(n.type){case"link":return(0,u.jsx)(f,{item:n});case"category":return(0,u.jsx)(p,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e;const r=(0,c.$S)();return(0,u.jsx)(v,{items:r.items,className:n})}function v(e){const{items:n,className:r}=e;if(!n)return(0,u.jsx)(x,{...e});const s=(0,c.d1)(n);return(0,u.jsx)("section",{className:(0,t.A)("row",r),children:s.map(((e,n)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(m,{item:e})},n)))})}},853465:(e,n,r)=>{r.d(n,{W:()=>a});var t=r(296540),c=r(144586);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((n=>e.includes(n)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,c.A)();return(0,t.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:o(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),i}}),[e])}function a(){const e=l();return{selectMessage:(n,r)=>function(e,n,r){const t=e.split("|");if(1===t.length)return t[0];t.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const c=r.select(n),s=r.pluralForms.indexOf(c);return t[Math.min(s,t.length-1)]}(r,n,e)}}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(296540);const c={},s=t.createContext(c);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
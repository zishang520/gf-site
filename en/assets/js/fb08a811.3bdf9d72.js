"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[41290],{471384:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=r(474848),s=r(28453);const o={title:"UDP\u7ec4\u4ef6",sidebar_position:1,hide_title:!0},d=void 0,c={id:"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6",title:"UDP\u7ec4\u4ef6",description:"UDP (User Datagram Protocol) \u4e00\u79cd\u65e0\u8fde\u63a5\u7684\u4f20\u8f93\u5c42\u534f\u8bae\uff0c\u63d0\u4f9b\u9762\u5411\u4e8b\u52a1\u7684\u7b80\u5355\u4e0d\u53ef\u9760\u4fe1\u606f\u4f20\u9001\u670d\u52a1\u3002 UDP \u670d\u52a1\u7aef\u901a\u8fc7 gudp.Server \u5b9e\u73b0\uff0c\u5ba2\u6237\u7aef\u901a\u8fc7 gudp.Conn \u5bf9\u8c61\u6216\u8005\u5de5\u5177\u65b9\u6cd5\u5b9e\u73b0\u3002",source:"@site/versioned_docs/version-2.4.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6.md",sourceDirName:"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6",slug:"/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/",permalink:"/gf-site/en/docs/2.4.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6.md",tags:[],version:"2.4.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:1,frontMatter:{title:"UDP\u7ec4\u4ef6",sidebar_position:1,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"TCP\u7ec4\u4ef6-\u8fde\u63a5\u6c60\u7279\u6027",permalink:"/gf-site/en/docs/2.4.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u6c60\u7279\u6027"},next:{title:"UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61",permalink:"/gf-site/en/docs/2.4.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61"}},i={},a=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"UDP (User Datagram Protocol)"})," \u4e00\u79cd\u65e0\u8fde\u63a5\u7684\u4f20\u8f93\u5c42\u534f\u8bae\uff0c\u63d0\u4f9b\u9762\u5411\u4e8b\u52a1\u7684\u7b80\u5355\u4e0d\u53ef\u9760\u4fe1\u606f\u4f20\u9001\u670d\u52a1\u3002 ",(0,t.jsx)(n.code,{children:"UDP"})," \u670d\u52a1\u7aef\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"gudp.Server"})," \u5b9e\u73b0\uff0c\u5ba2\u6237\u7aef\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"gudp.Conn"})," \u5bf9\u8c61\u6216\u8005\u5de5\u5177\u65b9\u6cd5\u5b9e\u73b0\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/net/gudp"\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Server\n    func GetServer(name ...interface{}) *Server\n    func NewServer(address string, handler func(*Conn), names ...string) *Server\n    func (s *Server) Close() error\n    func (s *Server) Run() error\n    func (s *Server) SetAddress(address string)\n    func (s *Server) SetHandler(handler func(*Conn))\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,t.jsx)(n.code,{children:"GetServer"})," \u4f7f\u7528\u5355\u4f8b\u6a21\u5f0f\u901a\u8fc7\u7ed9\u5b9a\u4e00\u4e2a\u552f\u4e00\u7684\u540d\u79f0\u83b7\u53d6/\u521b\u5efa\u4e00\u4e2aServer\uff0c\u540e\u7eed\u53ef\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"SetAddress"})," \u548c ",(0,t.jsx)(n.code,{children:"SetHandler"})," \u65b9\u6cd5\u52a8\u6001\u4fee\u6539Server\u5c5e\u6027\uff1b ",(0,t.jsx)(n.code,{children:"NewServer"})," \u5219\u76f4\u63a5\u6839\u636e\u7ed9\u5b9a\u53c2\u6570\u521b\u5efa\u4e00\u4e2aServer\u5bf9\u8c61\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6765\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/net/gudp"\n)\n\nfunc main() {\n    gudp.NewServer("127.0.0.1:8999", func(conn *gudp.Conn) {\n        defer conn.Close()\n        for {\n            if data, _ := conn.Recv(-1); len(data) > 0 {\n                fmt.Println(string(data))\n            }\n        }\n    }).Run()\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"UDPServer"})," \u662f\u963b\u585e\u8fd0\u884c\u7684\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u81ea\u5b9a\u4e49\u7684\u56de\u8c03\u51fd\u6570\u4e2d\u6839\u636e\u8bfb\u53d6\u5185\u5bb9\u8fdb\u884c\u5e76\u53d1\u5904\u7406\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 ",(0,t.jsx)(n.code,{children:"Linux"})," \u4e0b\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5411\u670d\u52a1\u7aef\u53d1\u9001 ",(0,t.jsx)(n.code,{children:"UDP"})," \u6570\u636e\u8fdb\u884c\u6d4b\u8bd5\uff0c\u968f\u540e\u67e5\u770b\u670d\u52a1\u7aef\u7aef\u662f\u5426\u6709\u8f93\u51fa\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'echo "hello" > /dev/udp/127.0.0.1/8999\n'})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var t=r(296540);const s={},o=t.createContext(s);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
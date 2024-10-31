"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[54705],{592767:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var t=r(474848),o=r(28453);const i={title:"UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61",sidebar_position:0,hide_title:!0},c=void 0,d={id:"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61",title:"UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61",description:"gudp \u6a21\u5757\u63d0\u4f9b\u4e86\u975e\u5e38\u7b80\u4fbf\u6613\u7528\u7684 gudp.Conn \u94fe\u63a5\u64cd\u4f5c\u5bf9\u8c61\u3002",source:"@site/versioned_docs/version-2.3.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61.md",sourceDirName:"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6",slug:"/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61",permalink:"/gf-site/docs/2.3.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61.md",tags:[],version:"2.3.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:0,frontMatter:{title:"UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61",sidebar_position:0,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UDP\u7ec4\u4ef6",permalink:"/gf-site/docs/2.3.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/"},next:{title:"UDP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5",permalink:"/gf-site/docs/2.3.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5"}},s={},u=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function a(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"gudp"})," \u6a21\u5757\u63d0\u4f9b\u4e86\u975e\u5e38\u7b80\u4fbf\u6613\u7528\u7684 ",(0,t.jsx)(e.code,{children:"gudp.Conn"})," \u94fe\u63a5\u64cd\u4f5c\u5bf9\u8c61\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/net/gudp"\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a ",(0,t.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:"type Conn\n    func NewConn(raddr string, laddr ...string) (*Conn, error)\n    func NewConnByNetConn(udp *net.UDPConn) *Conn\n    func (c *Conn) Close() error\n    func (c *Conn) LocalAddr() net.Addr\n    func (c *Conn) Recv(length int, retry ...Retry) ([]byte, error)\n    func (c *Conn) RecvPkg(retry ...Retry) (result []byte, err error)\n    func (c *Conn) RecvPkgWithTimeout(timeout time.Duration, retry ...Retry) ([]byte, error)\n    func (c *Conn) RecvWithTimeout(length int, timeout time.Duration, retry ...Retry) ([]byte, error)\n    func (c *Conn) RemoteAddr() net.Addr\n    func (c *Conn) Send(data []byte, retry ...Retry) error\n    func (c *Conn) SendPkg(data []byte, retry ...Retry) error\n    func (c *Conn) SendPkgWithTimeout(data []byte, timeout time.Duration, retry ...Retry) error\n    func (c *Conn) SendRecv(data []byte, receive int, retry ...Retry) ([]byte, error)\n    func (c *Conn) SendRecvPkg(data []byte, retry ...Retry) ([]byte, error)\n    func (c *Conn) SendRecvPkgWithTimeout(data []byte, timeout time.Duration, retry ...Retry) ([]byte, error)\n    func (c *Conn) SendRecvWithTimeout(data []byte, receive int, timeout time.Duration, retry ...Retry) ([]byte, error)\n    func (c *Conn) SendWithTimeout(data []byte, timeout time.Duration, retry ...Retry) error\n    func (c *Conn) SetDeadline(t time.Time) error\n    func (c *Conn) SetRecvBufferWait(d time.Duration)\n    func (c *Conn) SetRecvDeadline(t time.Time) error\n    func (c *Conn) SetSendDeadline(t time.Time) error\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c ",(0,t.jsx)(e.code,{children:"gudp.Conn"})," \u548c ",(0,t.jsx)(e.code,{children:"gtcp.Conn"})," \u7684\u65b9\u6cd5\u975e\u5e38\u7c7b\u4f3c\uff0c\u5e76\u4e14\u4e5f\u652f\u6301\u7b80\u5355\u534f\u8bae\u7684\u6d88\u606f\u5305\u65b9\u6cd5\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"gudp.Conn"})," \u7684\u64cd\u4f5c\u7edd\u5927\u90e8\u5206\u7c7b\u4f3c\u4e8e ",(0,t.jsx)(e.code,{children:"gtcp"})," \u7684\u64cd\u4f5c\u65b9\u5f0f\uff08\u5927\u90e8\u5206\u7684\u65b9\u6cd5\u540d\u79f0\u4e5f\u76f8\u540c\uff09\uff0c\u4f46\u7531\u4e8e ",(0,t.jsx)(e.code,{children:"UDP"})," \u662f\u9762\u5411\u975e\u8fde\u63a5\u7684\u534f\u8bae\uff0c\u56e0\u6b64 ",(0,t.jsx)(e.code,{children:"gudp.Conn"}),"\uff08\u5e95\u5c42\u901a\u4fe1\u7aef\u53e3\uff09\u4e5f\u53ea\u80fd\u5b8c\u6210\u6700\u591a\u4e00\u6b21\u6570\u636e\u5199\u5165\u548c\u8bfb\u53d6\uff0c\u5ba2\u6237\u7aef\u4e0b\u4e00\u6b21\u518d\u4e0e\u76ee\u6807\u670d\u52a1\u7aef\u8fdb\u884c\u901a\u4fe1\u7684\u65f6\u5019\uff0c\u5c06\u9700\u8981\u521b\u5efa\u65b0\u7684 ",(0,t.jsx)(e.code,{children:"Conn"})," \u5bf9\u8c61\u8fdb\u884c\u901a\u4fe1\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/gudp"\n    "github.com/gogf/gf/v2/os/gtime"\n    "time"\n)\n\nfunc main() {\n    // Server\n    go gudp.NewServer("127.0.0.1:8999", func(conn *gudp.Conn) {\n        defer conn.Close()\n        for {\n            data, err := conn.Recv(-1)\n            if len(data) > 0 {\n                if err := conn.Send(append([]byte("> "), data...)); err != nil {\n                    g.Log().Error(err)\n                }\n            }\n            if err != nil {\n                g.Log().Error(err)\n            }\n        }\n    }).Run()\n\n    time.Sleep(time.Second)\n\n    // Client\n    for {\n        if conn, err := gudp.NewConn("127.0.0.1:8999"); err == nil {\n            if b, err := conn.SendRecv([]byte(gtime.Datetime()), -1); err == nil {\n                fmt.Println(string(b), conn.LocalAddr(), conn.RemoteAddr())\n            } else {\n                g.Log().Error(err)\n            }\n            conn.Close()\n        } else {\n            g.Log().Error(err)\n        }\n        time.Sleep(time.Second)\n    }\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u8be5\u793a\u4f8b\u4e0e ",(0,t.jsx)(e.code,{children:"gtcp.Conn"})," \u4e2d\u7684\u901a\u4fe1\u793a\u4f8b\u7c7b\u4f3c\uff0c\u4e0d\u540c\u7684\u662f\uff0c\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u65e0\u6cd5\u4fdd\u6301\u8fde\u63a5\uff0c\u6bcf\u6b21\u901a\u4fe1\u90fd\u9700\u8981\u521b\u5efa\u7684\u65b0\u7684\u8fde\u63a5\u5bf9\u8c61\u8fdb\u884c\u901a\u4fe1\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"> 2018-07-21 23:13:31 127.0.0.1:33271 127.0.0.1:8999\n> 2018-07-21 23:13:32 127.0.0.1:45826 127.0.0.1:8999\n> 2018-07-21 23:13:33 127.0.0.1:58027 127.0.0.1:8999\n> 2018-07-21 23:13:34 127.0.0.1:33056 127.0.0.1:8999\n> 2018-07-21 23:13:35 127.0.0.1:39260 127.0.0.1:8999\n> 2018-07-21 23:13:36 127.0.0.1:33967 127.0.0.1:8999\n> 2018-07-21 23:13:37 127.0.0.1:52359 127.0.0.1:8999\n...\n"})})]})}function g(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>d});var t=r(296540);const o={},i=t.createContext(o);function c(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);
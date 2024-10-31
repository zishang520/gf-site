"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[83491],{94643:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=t(74848),i=t(28453);const r={slug:"/components/container/gpool/example",title:"\u5bf9\u8c61\u590d\u7528-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},c=void 0,l={id:"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool/\u5bf9\u8c61\u590d\u7528-\u57fa\u672c\u4f7f\u7528",title:"\u5bf9\u8c61\u590d\u7528-\u57fa\u672c\u4f7f\u7528",description:"\u57fa\u672c\u4f7f\u7528",source:"@site/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool/\u5bf9\u8c61\u590d\u7528-\u57fa\u672c\u4f7f\u7528.md",sourceDirName:"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool",slug:"/components/container/gpool/example",permalink:"/gf-site/docs/components/container/gpool/example",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool/\u5bf9\u8c61\u590d\u7528-\u57fa\u672c\u4f7f\u7528.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:0,frontMatter:{slug:"/components/container/gpool/example",title:"\u5bf9\u8c61\u590d\u7528-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u5bf9\u8c61\u590d\u7528-gpool",permalink:"/gf-site/docs/components/container/gpool"},next:{title:"\u5e76\u53d1\u5b89\u5168\u73af-gring",permalink:"/gf-site/docs/components/container/gring"}},s={},p=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u521b\u5efa\u53ca\u9500\u6bc1\u65b9\u6cd5",id:"\u521b\u5efa\u53ca\u9500\u6bc1\u65b9\u6cd5",level:2}];function a(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/container/gpool"\n    "fmt"\n    "time"\n)\n\nfunc main () {\n    // \u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u6c60\uff0c\u8fc7\u671f\u65f6\u95f4\u4e3a1\u79d2\n    p := gpool.New(time.Second, nil)\n\n    // \u4ece\u6c60\u4e2d\u53d6\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8fd4\u56denil\u53ca\u9519\u8bef\u4fe1\u606f\n    fmt.Println(p.Get())\n\n    // \u4e22\u4e00\u4e2a\u5bf9\u8c61\u5230\u6c60\u4e2d\n    p.Put(1)\n\n    // \u91cd\u65b0\u4ece\u6c60\u4e2d\u53d6\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8fd4\u56de1\n    fmt.Println(p.Get())\n\n    // \u7b49\u5f852\u79d2\u540e\u91cd\u8bd5\uff0c\u53d1\u73b0\u5bf9\u8c61\u5df2\u8fc7\u671f\uff0c\u8fd4\u56denil\u53ca\u9519\u8bef\u4fe1\u606f\n    time.Sleep(2*time.Second)\n    fmt.Println(p.Get())\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u521b\u5efa\u53ca\u9500\u6bc1\u65b9\u6cd5",children:"\u521b\u5efa\u53ca\u9500\u6bc1\u65b9\u6cd5"}),"\n",(0,o.jsx)(e.p,{children:"\u6211\u4eec\u53ef\u4ee5\u7ed9\u5b9a\u52a8\u6001\u521b\u5efa\u53ca\u9500\u6bc1\u65b9\u6cd5\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gpool"\n    "github.com/gogf/gf/v2/net/gtcp"\n    "github.com/gogf/gf/v2/os/glog"\n    "time"\n)\n\nfunc main() {\n    // \u521b\u5efa\u5bf9\u8c61\u590d\u7528\u6c60\uff0c\u5bf9\u8c61\u8fc7\u671f\u65f6\u95f4\u4e3a3\u79d2\uff0c\u5e76\u7ed9\u5b9a\u521b\u5efa\u53ca\u9500\u6bc1\u65b9\u6cd5\n    p := gpool.New(3*time.Second, func() (interface{}, error) {\n        return gtcp.NewConn("www.baidu.com:80")\n    }, func(i interface{}) {\n        glog.Println("expired")\n        i.(*gtcp.Conn).Close()\n    })\n    conn, err := p.Get()\n    if err != nil {\n        panic(err)\n    }\n    result, err := conn.(*gtcp.Conn).SendRecv([]byte("HEAD / HTTP/1.1\\n\\n"), -1)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(string(result))\n    // \u4e22\u56de\u6c60\u4e2d\u4ee5\u4fbf\u91cd\u590d\u4f7f\u7528\n    p.Put(conn)\n    // \u7b49\u5f85\u4e00\u5b9a\u65f6\u95f4\u89c2\u5bdf\u8fc7\u671f\u65b9\u6cd5\u8c03\u7528\n    time.Sleep(4*time.Second)\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'HTTP/1.1 302 Found\nConnection: Keep-Alive\nContent-Length: 17931\nContent-Type: text/html\nDate: Wed, 29 May 2019 11:23:20 GMT\nEtag: "54d9749e-460b"\nServer: bfe/1.0.8.18\n\n2019-05-29 19:23:24.732 expired\n'})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var o=t(96540);const i={},r=o.createContext(i);function c(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);
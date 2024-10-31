"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[19612],{837e3:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var t=r(474848),d=r(28453);const i={title:"URL\u7f16\u89e3\u7801-gurl",sidebar_position:5,hide_title:!0},l=void 0,s={id:"\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/URL\u7f16\u89e3\u7801-gurl",title:"URL\u7f16\u89e3\u7801-gurl",description:"URL \u7f16\u7801\u89e3\u6790\u3002",source:"@site/versioned_docs/version-2.4.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/URL\u7f16\u89e3\u7801-gurl.md",sourceDirName:"\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801",slug:"/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/URL\u7f16\u89e3\u7801-gurl",permalink:"/gf-site/docs/2.4.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/URL\u7f16\u89e3\u7801-gurl",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/URL\u7f16\u89e3\u7801-gurl.md",tags:[],version:"2.4.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:5,frontMatter:{title:"URL\u7f16\u89e3\u7801-gurl",sidebar_position:5,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"HTML\u7f16\u89e3\u7801-ghtml",permalink:"/gf-site/docs/2.4.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/HTML\u7f16\u89e3\u7801-ghtml"},next:{title:"XML\u7f16\u89e3\u7801-gxml",permalink:"/gf-site/docs/2.4.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/XML\u7f16\u89e3\u7801-gxml"}},c={},o=[{value:"<code>URL</code> \u53c2\u6570\u6784\u5efa",id:"url-\u53c2\u6570\u6784\u5efa",level:2},{value:"<code>URL</code> \u53c2\u6570\u7f16\u7801\u4e0e\u89e3\u7801",id:"url-\u53c2\u6570\u7f16\u7801\u4e0e\u89e3\u7801",level:2},{value:"\u89e3\u6790 <code>URL</code>",id:"\u89e3\u6790-url",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"URL"})," \u7f16\u7801\u89e3\u6790\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/encoding/gurl"\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gurl",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gurl"})}),"\n",(0,t.jsxs)(n.h2,{id:"url-\u53c2\u6570\u6784\u5efa",children:[(0,t.jsx)(n.code,{children:"URL"})," \u53c2\u6570\u6784\u5efa"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/encoding/gurl"\n    "net/url"\n)\n\nfunc main() {\n    // \u6784\u5efaurl\u53c2\u6570\n    values := url.Values{}\n    values.Add("name", "gopher")\n    values.Add("limit", "20")\n    values.Add("page", "7")\n\n    // \u751f\u6210URL\u7f16\u7801\u67e5\u8be2\u5b57\u7b26\u4e32 limit=20&name=gopher&page=7\n    urlStr := gurl.BuildQuery(values)\n    fmt.Println(urlStr)\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"limit=20&name=gopher&page=7\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"url-\u53c2\u6570\u7f16\u7801\u4e0e\u89e3\u7801",children:[(0,t.jsx)(n.code,{children:"URL"})," \u53c2\u6570\u7f16\u7801\u4e0e\u89e3\u7801"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/encoding/gurl"\n    "log"\n)\n\nfunc main() {\n    // \u7f16\u7801\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u8f6c\u4e49\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u5c06\u5176\u5b89\u5168\u5730\u653e\u7f6e\u5728URL\u67e5\u8be2\u4e2d\u3002\n    encodeStr := gurl.Encode("limit=20&name=gopher&page=7")\n    fmt.Println(encodeStr)\n\n    // \u8fdb\u884cURL\u89e3\u7801\n    decodeStr, err := gurl.Decode("limit%3D20%26name%3Dgopher%26page%3D7")\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(decodeStr)\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"limit%3D20%26name%3Dgopher%26page%3D7\nlimit=20&name=gopher&page=7\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"\u89e3\u6790-url",children:["\u89e3\u6790 ",(0,t.jsx)(n.code,{children:"URL"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"component"})," \u53c2\u6570\u503c\u53ef\u9009\u9879:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u53c2\u6570\u503c"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-1"}),(0,t.jsx)(n.td,{children:"all"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"scheme"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"host"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"port"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"user"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"16"}),(0,t.jsx)(n.td,{children:"pass"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"32"}),(0,t.jsx)(n.td,{children:"path"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"64"}),(0,t.jsx)(n.td,{children:"query"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"128"}),(0,t.jsx)(n.td,{children:"fragment"})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/encoding/gurl"\n    "log"\n)\n\nfunc main() {\n    // \u89e3\u6790URL\u5e76\u8fd4\u56de\u5176\u7ec4\u4ef6\n    data, err := gurl.ParseURL("http://127.0.0.1:8199/goods?limit=20&name=gopher&page=7", -1)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(data)\n    fmt.Println(data["host"])\n    fmt.Println(data["query"])\n    fmt.Println(data["path"])\n    fmt.Println(data["scheme"])\n    fmt.Println(data["fragment"])\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"map[fragment: host:127.0.0.1 pass: path:/goods port:8199 query:limit=20&name=gopher&page=7 scheme:http user:]\n127.0.0.1\nlimit=20&name=gopher&page=7\n/goods\nhttp\n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var t=r(296540);const d={},i=t.createContext(d);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
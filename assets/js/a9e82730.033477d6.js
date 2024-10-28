"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[85538],{291982:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>r,default:()=>v,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var e=i(474848),o=i(28453);const s={title:"\u7c7b\u578b\u8f6c\u6362-\u57fa\u672c\u7c7b\u578b",sidebar_position:0},r=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-\u57fa\u672c\u7c7b\u578b",title:"\u7c7b\u578b\u8f6c\u6362-\u57fa\u672c\u7c7b\u578b",description:"\u5e38\u7528\u57fa\u672c\u7c7b\u578b\u7684\u8f6c\u6362\u65b9\u6cd5\u6bd4\u8f83\u7b80\u5355\uff0c\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528\u4e00\u4e2a\u4f8b\u5b50\u6765\u6f14\u793a\u8f6c\u6362\u65b9\u6cd5\u7684\u4f7f\u7528\u53ca\u6548\u679c\u3002",source:"@site/versioned_docs/version-2.6.x/2-\u6838\u5fc3\u7ec4\u4ef6/7-\u7c7b\u578b\u8f6c\u6362/0-\u7c7b\u578b\u8f6c\u6362-\u57fa\u672c\u7c7b\u578b.md",sourceDirName:"2-\u6838\u5fc3\u7ec4\u4ef6/7-\u7c7b\u578b\u8f6c\u6362",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-\u57fa\u672c\u7c7b\u578b",permalink:"/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-\u57fa\u672c\u7c7b\u578b",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/2-\u6838\u5fc3\u7ec4\u4ef6/7-\u7c7b\u578b\u8f6c\u6362/0-\u7c7b\u578b\u8f6c\u6362-\u57fa\u672c\u7c7b\u578b.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:0,frontMatter:{title:"\u7c7b\u578b\u8f6c\u6362-\u57fa\u672c\u7c7b\u578b",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u7c7b\u578b\u8f6c\u6362",permalink:"/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/"},next:{title:"\u7c7b\u578b\u8f6c\u6362-Map\u8f6c\u6362",permalink:"/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-Map\u8f6c\u6362"}},f={},d=[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5341\u516d\u8fdb\u5236\u8f6c\u6362",id:"\u5341\u516d\u8fdb\u5236\u8f6c\u6362",level:3}];function l(n){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.p,{children:"\u5e38\u7528\u57fa\u672c\u7c7b\u578b\u7684\u8f6c\u6362\u65b9\u6cd5\u6bd4\u8f83\u7b80\u5355\uff0c\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528\u4e00\u4e2a\u4f8b\u5b50\u6765\u6f14\u793a\u8f6c\u6362\u65b9\u6cd5\u7684\u4f7f\u7528\u53ca\u6548\u679c\u3002"}),"\n",(0,e.jsx)(t.h2,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,e.jsxs)(t.p,{children:["\u66f4\u591a\u7684\u7c7b\u578b\u8f6c\u6362\u65b9\u6cd5\u8bf7\u53c2\u8003\u63a5\u53e3\u6587\u6863\uff1a ",(0,e.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/util/gconv",children:"https://pkg.go.dev/github.com/gogf/gf/v2/util/gconv"})]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/util/gconv"\n)\n\nfunc main() {\n    i := 123.456\n    fmt.Printf("%10s %v\\n", "Int:",        gconv.Int(i))\n    fmt.Printf("%10s %v\\n", "Int8:",       gconv.Int8(i))\n    fmt.Printf("%10s %v\\n", "Int16:",      gconv.Int16(i))\n    fmt.Printf("%10s %v\\n", "Int32:",      gconv.Int32(i))\n    fmt.Printf("%10s %v\\n", "Int64:",      gconv.Int64(i))\n    fmt.Printf("%10s %v\\n", "Uint:",       gconv.Uint(i))\n    fmt.Printf("%10s %v\\n", "Uint8:",      gconv.Uint8(i))\n    fmt.Printf("%10s %v\\n", "Uint16:",     gconv.Uint16(i))\n    fmt.Printf("%10s %v\\n", "Uint32:",     gconv.Uint32(i))\n    fmt.Printf("%10s %v\\n", "Uint64:",     gconv.Uint64(i))\n    fmt.Printf("%10s %v\\n", "Float32:",    gconv.Float32(i))\n    fmt.Printf("%10s %v\\n", "Float64:",    gconv.Float64(i))\n    fmt.Printf("%10s %v\\n", "Bool:",       gconv.Bool(i))\n    fmt.Printf("%10s %v\\n", "String:",     gconv.String(i))\n    fmt.Printf("%10s %v\\n", "Bytes:",      gconv.Bytes(i))\n    fmt.Printf("%10s %v\\n", "Strings:",    gconv.Strings(i))\n    fmt.Printf("%10s %v\\n", "Ints:",       gconv.Ints(i))\n    fmt.Printf("%10s %v\\n", "Floats:",     gconv.Floats(i))\n    fmt.Printf("%10s %v\\n", "Interfaces:", gconv.Interfaces(i))\n}\n\n'})}),"\n",(0,e.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{children:"      Int: 123\n     Int8: 123\n    Int16: 123\n    Int32: 123\n    Int64: 123\n     Uint: 123\n    Uint8: 123\n   Uint16: 123\n   Uint32: 123\n   Uint64: 123\n  Float32: 123.456\n  Float64: 123.456\n     Bool: true\n   String: 123.456\n    Bytes: [119 190 159 26 47 221 94 64]\n  Strings: [123.456]\n     Ints: [123]\n   Floats: [123.456]\nInterfaces: [123.456]\n"})}),"\n",(0,e.jsx)(t.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,e.jsxs)(t.p,{children:["\u6570\u5b57\u8f6c\u6362\u65b9\u6cd5\u4f8b\u5982 ",(0,e.jsx)(t.code,{children:"gconv.Int/Uint"})," \u7b49\u7b49\uff0c\u5f53\u7ed9\u5b9a\u7684\u8f6c\u6362\u53c2\u6570\u4e3a\u5b57\u7b26\u4e32\u65f6\uff0c\u4f1a\u81ea\u52a8\u8bc6\u522b\u5341\u516d\u8fdb\u5236\u3001\u516b\u8fdb\u5236\u3002"]}),"\n",(0,e.jsx)(t.h3,{id:"\u5341\u516d\u8fdb\u5236\u8f6c\u6362",children:"\u5341\u516d\u8fdb\u5236\u8f6c\u6362"}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.code,{children:"gconv"})," \u5c06 ",(0,e.jsx)(t.code,{children:"0x"})," \u5f00\u5934\u7684\u6570\u5b57\u5b57\u7b26\u4e32\u5f53\u505a\u5341\u516d\u8fdb\u5236\u8f6c\u6362\u3002\u4f8b\u5982\uff0c ",(0,e.jsx)(t.code,{children:'gconv.Int("0xff")'})," \u5c06\u4f1a\u8fd4\u56de ",(0,e.jsx)(t.code,{children:"255"}),"\u3002"]})]})}function v(n={}){const{wrapper:t}={...(0,o.R)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(l,{...n})}):l(n)}},28453:(n,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var e=i(296540);const o={},s=e.createContext(o);function r(n){const t=e.useContext(s);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),e.createElement(s.Provider,{value:t},n.children)}}}]);
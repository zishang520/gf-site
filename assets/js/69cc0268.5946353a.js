"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[41154],{609127:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>h,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash","title":"\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/versioned_docs/version-2.1.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash.md","sourceDirName":"\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801","slug":"/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash","permalink":"/2.1.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash.md","tags":[],"version":"2.1.x","sidebarPosition":3,"frontMatter":{"title":"\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"BASE64\u7f16\u89e3\u7801-gbase64","permalink":"/2.1.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/BASE64\u7f16\u89e3\u7801-gbase64"},"next":{"title":"HTML\u7f16\u89e3\u7801-ghtml","permalink":"/2.1.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/HTML\u7f16\u89e3\u7801-ghtml"}}');var t=s(474848),c=s(28453);const h={title:"\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash",sidebar_position:3,hide_title:!0},d=void 0,i={},o=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u57fa\u51c6\u6d4b\u8bd5",id:"\u57fa\u51c6\u6d4b\u8bd5",level:2},{value:"\u91cd\u590d\u6d4b\u8bd5",id:"\u91cd\u590d\u6d4b\u8bd5",level:2}];function a(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(e.p,{children:["\u5e38\u7528\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570Go\u8bed\u8a00\u5b9e\u73b0\uff0c\u63d0\u4f9b ",(0,t.jsx)(e.code,{children:"uint32"})," \u53ca ",(0,t.jsx)(e.code,{children:"uint64"})," \u7c7b\u578b\u7684\u54c8\u5e0c\u51fd\u6570\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/encoding/ghash"\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/ghash",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/ghash"})}),"\n",(0,t.jsx)(e.h2,{id:"\u57fa\u51c6\u6d4b\u8bd5",children:"\u57fa\u51c6\u6d4b\u8bd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"goos: darwin\ngoarch: amd64\npkg: github.com/gogf/gf/v2/encoding/ghash\ncpu: Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz\nBenchmark_BKDR\nBenchmark_BKDR-12          39315165            26.88 ns/op\nBenchmark_BKDR64\nBenchmark_BKDR64-12        62891215            22.61 ns/op\nBenchmark_SDBM\nBenchmark_SDBM-12          49689925            25.40 ns/op\nBenchmark_SDBM64\nBenchmark_SDBM64-12        48860472            24.38 ns/op\nBenchmark_RS\nBenchmark_RS-12            39463418            25.52 ns/op\nBenchmark_RS64\nBenchmark_RS64-12         53318370            19.45 ns/op\nBenchmark_JS\nBenchmark_JS-12            53751033            23.20 ns/op\nBenchmark_JS64\nBenchmark_JS64-12          62440287            19.25 ns/op\nBenchmark_PJW\nBenchmark_PJW-12           42439626            27.85 ns/op\nBenchmark_PJW64\nBenchmark_PJW64-12         37491696            33.28 ns/op\nBenchmark_ELF\nBenchmark_ELF-12           38034584            31.74 ns/op\nBenchmark_ELF64\nBenchmark_ELF64-12         44047201            27.58 ns/op\nBenchmark_DJB\nBenchmark_DJB-12           46994352            22.60 ns/op\nBenchmark_DJB64\nBenchmark_DJB64-12         61980186            19.19 ns/op\nBenchmark_AP\nBenchmark_AP-12            29544234            40.58 ns/op\nBenchmark_AP64\nBenchmark_AP64-12          28123783            42.48 ns/op\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u91cd\u590d\u6d4b\u8bd5",children:"\u91cd\u590d\u6d4b\u8bd5"}),"\n",(0,t.jsxs)(e.p,{children:["\u6d4b\u8bd5\u7ed3\u679c\u4e0e\u6d4b\u8bd5\u5185\u5bb9\u6709\u5173\u8054\u6027\u548c\u968f\u673a\u6027\uff0c\u6211\u8fd9\u91cc\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"uint64"})," \u6570\u503c\u7684\u8303\u56f4\u904d\u5386\u6765\u8fdb\u884c\u7b80\u5355\u7684\u91cd\u590d\u6027\u6d4b\u8bd5\uff0c\u672c\u8eab\u4e0d\u591f\u4e25\u8c28\uff0c\u56e0\u6b64\u4ec5\u4f9b\u8da3\u5473\u6027\u53c2\u8003\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "encoding/binary"\n    "fmt"\n    "math"\n\n    "github.com/gogf/gf/v2/encoding/ghash"\n)\n\nfunc main() {\n    var (\n        m    = make(map[uint64]struct{})\n        b    = make([]byte, 8)\n        ok   bool\n        hash uint64\n    )\n    for i := uint64(0); i < math.MaxUint64; i++ {\n        binary.LittleEndian.PutUint64(b, i)\n        hash = ghash.PJW64(b)\n        if _, ok = m[hash]; ok {\n            fmt.Println("repeated found:", i)\n            break\n        }\n        m[hash] = struct{}{}\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u54c8\u5e0c\u51fd\u6570"}),(0,t.jsx)(e.th,{children:"\u91cd\u590d\u4f4d\u7f6e"}),(0,t.jsx)(e.th,{children:"\u5907\u6ce8"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"AP64"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"8388640"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"BKDR64"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"33536"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"DJB64"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"8448"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"ELF64"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"4096"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"JS64"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"734"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"PJW64"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"2"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"RS64"})}),(0,t.jsx)(e.td,{children:"-"}),(0,t.jsx)(e.td,{children:"32G Memory OOM"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"SDBM64"})}),(0,t.jsx)(e.td,{children:"-"}),(0,t.jsx)(e.td,{children:"32G Memory OOM"})]})]})]})]})}function l(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>h,x:()=>d});var r=s(296540);const t={},c=r.createContext(t);function h(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:h(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);
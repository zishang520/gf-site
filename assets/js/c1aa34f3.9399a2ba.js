"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[45309],{819748:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>c,metadata:()=>h,toc:()=>o});var s=t(474848),r=t(28453);const c={title:"\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash",sidebar_position:3},d=void 0,h={id:"\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash",title:"\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.3.x/2-\u7ec4\u4ef6\u5217\u8868/3-\u7f16\u7801\u89e3\u7801/3-\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash.md",sourceDirName:"2-\u7ec4\u4ef6\u5217\u8868/3-\u7f16\u7801\u89e3\u7801",slug:"/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash",permalink:"/docs/2.3.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/2-\u7ec4\u4ef6\u5217\u8868/3-\u7f16\u7801\u89e3\u7801/3-\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash.md",tags:[],version:"2.3.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:3,frontMatter:{title:"\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"BASE64\u7f16\u89e3\u7801-gbase64",permalink:"/docs/2.3.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/BASE64\u7f16\u89e3\u7801-gbase64"},next:{title:"HTML\u7f16\u89e3\u7801-ghtml",permalink:"/docs/2.3.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/HTML\u7f16\u89e3\u7801-ghtml"}},i={},o=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u57fa\u51c6\u6d4b\u8bd5",id:"\u57fa\u51c6\u6d4b\u8bd5",level:2},{value:"\u91cd\u590d\u6d4b\u8bd5",id:"\u91cd\u590d\u6d4b\u8bd5",level:2}];function a(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(e.p,{children:["\u5e38\u7528\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570Go\u8bed\u8a00\u5b9e\u73b0\uff0c\u63d0\u4f9b ",(0,s.jsx)(e.code,{children:"uint32"})," \u53ca ",(0,s.jsx)(e.code,{children:"uint64"})," \u7c7b\u578b\u7684\u54c8\u5e0c\u51fd\u6570\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'import "github.com/gogf/gf/v2/encoding/ghash"\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/ghash",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/ghash"})}),"\n",(0,s.jsx)(e.h2,{id:"\u57fa\u51c6\u6d4b\u8bd5",children:"\u57fa\u51c6\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"goos: darwin\ngoarch: amd64\npkg: github.com/gogf/gf/v2/encoding/ghash\ncpu: Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz\nBenchmark_BKDR\nBenchmark_BKDR-12      \t39315165\t        26.88 ns/op\nBenchmark_BKDR64\nBenchmark_BKDR64-12    \t62891215\t        22.61 ns/op\nBenchmark_SDBM\nBenchmark_SDBM-12      \t49689925\t        25.40 ns/op\nBenchmark_SDBM64\nBenchmark_SDBM64-12    \t48860472\t        24.38 ns/op\nBenchmark_RS\nBenchmark_RS-12        \t39463418\t        25.52 ns/op\nBenchmark_RS64\nBenchmark_RS64-12     \t53318370\t        19.45 ns/op\nBenchmark_JS\nBenchmark_JS-12        \t53751033\t        23.20 ns/op\nBenchmark_JS64\nBenchmark_JS64-12      \t62440287\t        19.25 ns/op\nBenchmark_PJW\nBenchmark_PJW-12       \t42439626\t        27.85 ns/op\nBenchmark_PJW64\nBenchmark_PJW64-12     \t37491696\t        33.28 ns/op\nBenchmark_ELF\nBenchmark_ELF-12       \t38034584\t        31.74 ns/op\nBenchmark_ELF64\nBenchmark_ELF64-12     \t44047201\t        27.58 ns/op\nBenchmark_DJB\nBenchmark_DJB-12       \t46994352\t        22.60 ns/op\nBenchmark_DJB64\nBenchmark_DJB64-12     \t61980186\t        19.19 ns/op\nBenchmark_AP\nBenchmark_AP-12        \t29544234\t        40.58 ns/op\nBenchmark_AP64\nBenchmark_AP64-12      \t28123783\t        42.48 ns/op\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u91cd\u590d\u6d4b\u8bd5",children:"\u91cd\u590d\u6d4b\u8bd5"}),"\n",(0,s.jsxs)(e.p,{children:["\u6d4b\u8bd5\u7ed3\u679c\u4e0e\u6d4b\u8bd5\u5185\u5bb9\u6709\u5173\u8054\u6027\u548c\u968f\u673a\u6027\uff0c\u6211\u8fd9\u91cc\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"uint64"})," \u6570\u503c\u7684\u8303\u56f4\u904d\u5386\u6765\u8fdb\u884c\u7b80\u5355\u7684\u91cd\u590d\u6027\u6d4b\u8bd5\uff0c\u672c\u8eab\u4e0d\u591f\u4e25\u8c28\uff0c\u56e0\u6b64\u4ec5\u4f9b\u8da3\u5473\u6027\u53c2\u8003\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'package main\n\nimport (\n\t"encoding/binary"\n\t"fmt"\n\t"math"\n\n\t"github.com/gogf/gf/v2/encoding/ghash"\n)\n\nfunc main() {\n\tvar (\n\t\tm    = make(map[uint64]struct{})\n\t\tb    = make([]byte, 8)\n\t\tok   bool\n\t\thash uint64\n\t)\n\tfor i := uint64(0); i < math.MaxUint64; i++ {\n\t\tbinary.LittleEndian.PutUint64(b, i)\n\t\thash = ghash.PJW64(b)\n\t\tif _, ok = m[hash]; ok {\n\t\t\tfmt.Println("repeated found:", i)\n\t\t\tbreak\n\t\t}\n\t\tm[hash] = struct{}{}\n\t}\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u54c8\u5e0c\u51fd\u6570"}),(0,s.jsx)(e.th,{children:"\u91cd\u590d\u4f4d\u7f6e"}),(0,s.jsx)(e.th,{children:"\u5907\u6ce8"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"AP64"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"8388640"})}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"BKDR64"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"33536"})}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"DJB64"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"8448"})}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ELF64"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"4096"})}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"JS64"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"734"})}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PJW64"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"2"})}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"RS64"})}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"32G Memory OOM"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"SDBM64"})}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"32G Memory OOM"})]})]})]})]})}function l(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>d,x:()=>h});var s=t(296540);const r={},c=s.createContext(r);function d(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);
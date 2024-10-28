"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[100],{421168:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=e(474848),s=e(28453);const o={title:"glist (\u94fe\u8868)",sidebar_position:3},l=void 0,r={id:"\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/glist -\u94fe\u8868",title:"glist (\u94fe\u8868)",description:"\u5e26\u5e76\u53d1\u5b89\u5168\u5f00\u5173\u7684\u53cc\u5411\u5217\u8868\u3002",source:"@site/versioned_docs/version-1.16.x/2-\u6a21\u5757\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/3-glist -\u94fe\u8868.md",sourceDirName:"2-\u6a21\u5757\u5217\u8868/0-\u6570\u636e\u7ed3\u6784",slug:"/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/glist -\u94fe\u8868",permalink:"/docs/1.16.x/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/glist -\u94fe\u8868",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/2-\u6a21\u5757\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/3-glist -\u94fe\u8868.md",tags:[],version:"1.16.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:3,frontMatter:{title:"glist (\u94fe\u8868)",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"gset (\u96c6\u5408)",permalink:"/docs/1.16.x/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/gset -\u96c6\u5408"},next:{title:"gvar (\u901a\u7528\u53d8\u91cf)",permalink:"/docs/1.16.x/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/gvar -\u901a\u7528\u53d8\u91cf"}},c={},a=[{value:"\u57fa\u7840\u4f7f\u7528",id:"\u57fa\u7840\u4f7f\u7528",level:3},{value:"\u94fe\u8868\u904d\u5386",id:"\u94fe\u8868\u904d\u5386",level:3},{value:"<code>Pop*</code> \u5143\u7d20\u9879\u51fa\u6808",id:"pop-\u5143\u7d20\u9879\u51fa\u6808",level:3},{value:"<code>Join</code> \u5143\u7d20\u9879\u4e32\u8fde",id:"join-\u5143\u7d20\u9879\u4e32\u8fde",level:3},{value:"<code>JSON</code> \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217",id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",level:3},{value:"\u6027\u80fd\u6d4b\u8bd5",id:"\u6027\u80fd\u6d4b\u8bd5",level:3}];function g(n){const t={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"\u5e26\u5e76\u53d1\u5b89\u5168\u5f00\u5173\u7684\u53cc\u5411\u5217\u8868\u3002"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,i.jsx)(t.p,{children:"\u53cc\u5411\u94fe\u8868\u3002"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import "github.com/gogf/gf/container/glist"\n\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://godoc.org/github.com/gogf/gf/container/glist",children:"https://godoc.org/github.com/gogf/gf/container/glist"})}),"\n",(0,i.jsx)(t.h3,{id:"\u57fa\u7840\u4f7f\u7528",children:"\u57fa\u7840\u4f7f\u7528"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/container/glist"\n)\n\nfunc main() {\n\t// Not concurrent-safe in default.\n\tl := glist.New()\n\t// Push\n\tl.PushBack(1)\n\tl.PushBack(2)\n\te := l.PushFront(0)\n\t// Insert\n\tl.InsertBefore(e, -1)\n\tl.InsertAfter(e, "a")\n\tfmt.Println(l)\n\t// Pop\n\tfmt.Println(l.PopFront())\n\tfmt.Println(l.PopBack())\n\tfmt.Println(l)\n}\n\n'})}),"\n",(0,i.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-undefined",children:'[-1,0,"a",1,2]\n-1\n2\n[0,"a",1]\n\n'})}),"\n",(0,i.jsx)(t.h3,{id:"\u94fe\u8868\u904d\u5386",children:"\u94fe\u8868\u904d\u5386"}),"\n",(0,i.jsxs)(t.p,{children:["\u8be5\u793a\u4f8b\u4e2d\u6211\u4eec\u5c06\u901a\u8fc7\u8bfb\u9501\u548c\u5199\u9501\u904d\u5386\u4e00\u4e2a\u5e76\u53d1\u5b89\u5168\u7684\u94fe\u8868\uff0c\u5206\u522b\u901a\u8fc7 ",(0,i.jsx)(t.code,{children:"RLockFunc"})," \u548c ",(0,i.jsx)(t.code,{children:"LockFunc"})," \u5b9e\u73b0\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"container/list"\n\t"fmt"\n\t"github.com/gogf/gf/container/garray"\n\t"github.com/gogf/gf/container/glist"\n)\n\nfunc main() {\n\t// concurrent-safe list.\n\tl := glist.NewFrom(garray.NewArrayRange(1, 10, 1).Slice(), true)\n\t// iterate reading from head.\n\tl.RLockFunc(func(list *list.List) {\n\t\tlength := list.Len()\n\t\tif length > 0 {\n\t\t\tfor i, e := 0, list.Front(); i < length; i, e = i+1, e.Next() {\n\t\t\t\tfmt.Print(e.Value)\n\t\t\t}\n\t\t}\n\t})\n\tfmt.Println()\n\t// iterate reading from tail.\n\tl.RLockFunc(func(list *list.List) {\n\t\tlength := list.Len()\n\t\tif length > 0 {\n\t\t\tfor i, e := 0, list.Back(); i < length; i, e = i+1, e.Prev() {\n\t\t\t\tfmt.Print(e.Value)\n\t\t\t}\n\t\t}\n\t})\n\n    fmt.Println()\n\n    // iterate reading from head using IteratorAsc.\n\tl.IteratorAsc(func(e *glist.Element) bool {\n\t\tfmt.Print(e.Value)\n\t\treturn true\n\t})\n\tfmt.Println()\n\t// iterate reading from tail using IteratorDesc.\n\tl.IteratorDesc(func(e *glist.Element) bool {\n\t\tfmt.Print(e.Value)\n\t\treturn true\n\t})\n\n\tfmt.Println()\n\n\t// iterate writing from head.\n\tl.LockFunc(func(list *list.List) {\n\t\tlength := list.Len()\n\t\tif length > 0 {\n\t\t\tfor i, e := 0, list.Front(); i < length; i, e = i+1, e.Next() {\n\t\t\t\tif e.Value == 6 {\n\t\t\t\t\te.Value = "M"\n\t\t\t\t\tbreak\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t})\n\tfmt.Println(l)\n}\n\n'})}),"\n",(0,i.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-undefined",children:'12345678910\n10987654321\n12345678910\n10987654321\n[1,2,3,4,5,"M",7,8,9,10]\n\n'})}),"\n",(0,i.jsxs)(t.h3,{id:"pop-\u5143\u7d20\u9879\u51fa\u6808",children:[(0,i.jsx)(t.code,{children:"Pop*"})," \u5143\u7d20\u9879\u51fa\u6808"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/container/glist"\n\t"github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n\tl := glist.NewFrom(g.Slice{1, 2, 3, 4, 5, 6, 7, 8, 9})\n\n\tfmt.Println(l.PopBack())\n\tfmt.Println(l.PopBacks(2))\n\tfmt.Println(l.PopFront())\n\tfmt.Println(l.PopFronts(2))\n\n\t// Output:\n\t// 9\n\t// [8 7]\n\t// 1\n\t// [2 3]\n}\n\n'})}),"\n",(0,i.jsxs)(t.h3,{id:"join-\u5143\u7d20\u9879\u4e32\u8fde",children:[(0,i.jsx)(t.code,{children:"Join"})," \u5143\u7d20\u9879\u4e32\u8fde"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/container/glist"\n\t"github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n\tvar l glist.List\n\tl.PushBacks(g.Slice{"a", "b", "c", "d"})\n\n\tfmt.Println(l.Join(","))\n\n\t// Output:\n\t// a,b,c,d\n}\n\n'})}),"\n",(0,i.jsxs)(t.h3,{id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",children:[(0,i.jsx)(t.code,{children:"JSON"})," \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"glist"})," \u5bb9\u5668\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93 ",(0,i.jsx)(t.code,{children:"json"})," \u6570\u636e\u683c\u5f0f\u7684\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u63a5\u53e3\u3002 1. ",(0,i.jsx)(t.code,{children:"Marshal"})," \u201c`go package main"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-undefined",children:'import (\n    "encoding/json"\n    "fmt"\n    "github.com/gogf/gf/container/glist"\n    "github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n    type Student struct {\n        Id     int\n        Name   string\n        Scores *glist.List\n    }\n    s := Student{\n        Id:     1,\n        Name:   "john",\n        Scores: glist.NewFrom(g.Slice{100, 99, 98}),\n    }\n    b, _ := json.Marshal(s)\n    fmt.Println(string(b))\n}\n```\n\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\uff1a\n```\n{"Id":1,"Name":"john","Scores":[100,99,98]}\n```\n\n'})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Unmarshal"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\n\nimport (\n    "encoding/json"\n    "fmt"\n    "github.com/gogf/gf/container/glist"\n)\n\n\nfunc main() {\n    b := []byte(`{"Id":1,"Name":"john","Scores":[100,99,98]}`)\n    type Student struct {\n        Id     int\n        Name   string\n        Scores *glist.List\n    }\n    s := Student{}\n    json.Unmarshal(b, &s)\n    fmt.Println(s)\n}\n\n'})}),"\n",(0,i.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-undefined",children:"{1 john [100,99,98]}\n\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"\u6027\u80fd\u6d4b\u8bd5",children:"\u6027\u80fd\u6d4b\u8bd5"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/gogf/gf/blob/master/container/glist/glist_z_bench_test.go",children:"https://github.com/gogf/gf/blob/master/container/glist/glist_z_bench_test.go"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-undefined",children:"goos: linux\ngoarch: amd64\npkg: github.com/gogf/gf/container/glist\nBenchmark_PushBack-4             5000000               268 ns/op              56 B/op          2 allocs/op\nBenchmark_PushFront-4           10000000               435 ns/op              56 B/op          2 allocs/op\nBenchmark_Len-4                 30000000              44.5 ns/op               0 B/op          0 allocs/op\nBenchmark_PopFront-4            20000000              71.1 ns/op               0 B/op          0 allocs/op\nBenchmark_PopBack-4             30000000              70.1 ns/op               0 B/op          0 allocs/op\nPASS\n\n"})})]})}function d(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(g,{...n})}):g(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>l,x:()=>r});var i=e(296540);const s={},o=i.createContext(s);function l(n){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(o.Provider,{value:t},n.children)}}}]);
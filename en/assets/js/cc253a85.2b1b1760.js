"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[8727],{48441:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var s=t(74848),i=t(28453);const c={slug:"/components/container/gset/example",title:"\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},r=void 0,o={id:"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",title:"\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",description:"\u57fa\u672c\u4f7f\u7528",source:"@site/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md",sourceDirName:"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset",slug:"/components/container/gset/example",permalink:"/gf-site/en/docs/components/container/gset/example",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:0,frontMatter:{slug:"/components/container/gset/example",title:"\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u96c6\u5408\u7c7b\u578b-gset",permalink:"/gf-site/en/docs/components/container/gset"},next:{title:"\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",permalink:"/gf-site/en/docs/components/container/gset/benchmark"}},l={},d=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u4ea4\u5dee\u5e76\u8865\u96c6",id:"\u4ea4\u5dee\u5e76\u8865\u96c6",level:2},{value:"<code>Contains/ContainsI</code> \u5305\u542b\u5224\u65ad",id:"containscontainsi-\u5305\u542b\u5224\u65ad",level:2},{value:"<code>Pop/Pops</code> \u96c6\u5408\u9879\u51fa\u6808",id:"poppops-\u96c6\u5408\u9879\u51fa\u6808",level:2},{value:"<code>Join</code> \u96c6\u5408\u9879\u4e32\u8fde",id:"join-\u96c6\u5408\u9879\u4e32\u8fde",level:2},{value:"<code>IsSubsetOf</code> \u5b50\u96c6\u5224\u65ad",id:"issubsetof-\u5b50\u96c6\u5224\u65ad",level:2},{value:"<code>AddIfNotExist*</code> \u5224\u65ad\u6027\u5199\u5165",id:"addifnotexist-\u5224\u65ad\u6027\u5199\u5165",level:2},{value:"<code>Walk</code> \u904d\u5386\u4fee\u6539",id:"walk-\u904d\u5386\u4fee\u6539",level:2},{value:"<code>JSON</code> \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217",id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",level:2}];function a(n){const e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/container/gset"\n    "fmt"\n)\n\nfunc main() {\n    // \u521b\u5efa\u4e00\u4e2a\u5e76\u53d1\u5b89\u5168\u7684\u96c6\u5408\u5bf9\u8c61\n    s := gset.New(true)\n\n    // \u6dfb\u52a0\u6570\u636e\u9879\n    s.Add(1)\n\n    // \u6279\u91cf\u6dfb\u52a0\u6570\u636e\u9879\n    s.Add([]interface{}{1, 2, 3}...)\n\n    // \u96c6\u5408\u6570\u636e\u9879\u5927\u5c0f\n    fmt.Println(s.Size())\n\n    // \u96c6\u5408\u4e2d\u662f\u5426\u5b58\u5728\u6307\u5b9a\u6570\u636e\u9879\n    fmt.Println(s.Contains(2))\n\n    // \u8fd4\u56de\u6570\u636e\u9879slice\n    fmt.Println(s.Slice())\n\n    // \u5220\u9664\u6570\u636e\u9879\n    s.Remove(3)\n\n    // \u904d\u5386\u6570\u636e\u9879\n    s.Iterator(func(v interface{}) bool {\n        fmt.Println("Iterator:", v)\n        return true\n    })\n\n    // \u5c06\u96c6\u5408\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\n    fmt.Println(s.String())\n\n    // \u5e76\u53d1\u5b89\u5168\u5199\u9501\u64cd\u4f5c\n    s.LockFunc(func(m map[interface{}]struct{}) {\n        m[4] = struct{}{}\n    })\n\n    // \u5e76\u53d1\u5b89\u5168\u8bfb\u9501\u64cd\u4f5c\n    s.RLockFunc(func(m map[interface{}]struct{}) {\n        fmt.Println(m)\n    })\n\n    // \u6e05\u7a7a\u96c6\u5408\n    s.Clear()\n    fmt.Println(s.Size())\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-3",children:"true\n[1 2 3]\nIterator: 1\nIterator: 2\n[1 2]\nmap[1:{} 2:{} 4:{}]\n0\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4ea4\u5dee\u5e76\u8865\u96c6",children:"\u4ea4\u5dee\u5e76\u8865\u96c6"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u5b9e\u73b0\u4ea4\u5dee\u5e76\u8865\u96c6\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u7ed3\u679c\u96c6\u5408\uff0c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"func (set *Set) Intersect(others ...*Set) (newSet *Set)\nfunc (set *Set) Diff(others ...*Set) (newSet *Set)\nfunc (set *Set) Union(others ...*Set) (newSet *Set)\nfunc (set *Set) Complement(full *Set) (newSet *Set)\n"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Intersect"}),": \u4ea4\u96c6\uff0c\u5c5e\u4e8eset\u4e14\u5c5e\u4e8eothers\u7684\u5143\u7d20\u4e3a\u5143\u7d20\u7684\u96c6\u5408\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Diff"}),": \u5dee\u96c6\uff0c\u5c5e\u4e8eset\u4e14\u4e0d\u5c5e\u4e8eothers\u7684\u5143\u7d20\u4e3a\u5143\u7d20\u7684\u96c6\u5408\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Union"}),": \u5e76\u96c6\uff0c\u5c5e\u4e8eset\u6216\u5c5e\u4e8eothers\u7684\u5143\u7d20\u4e3a\u5143\u7d20\u7684\u96c6\u5408\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Complement"}),": \u8865\u96c6\uff0c(\u524d\u63d0: set\u5e94\u5f53\u4e3afull\u7684\u5b50\u96c6)\u5c5e\u4e8e\u5168\u96c6full\u4e0d\u5c5e\u4e8e\u96c6\u5408set\u7684\u5143\u7d20\u7ec4\u6210\u7684\u96c6\u5408\u3002\u5982\u679c\u7ed9\u5b9a\u7684full\u96c6\u5408\u4e0d\u662fset\u7684\u5168\u96c6\u65f6\uff0c\u8fd4\u56defull\u4e0eset\u7684\u5dee\u96c6."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7\u96c6\u5408\u65b9\u6cd5\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\uff0c\u4ea4\u5dee\u5e76\u96c6\u65b9\u6cd5\u652f\u6301\u591a\u4e2a\u96c6\u5408\u53c2\u6570\u8fdb\u884c\u8ba1\u7b97\u3002\u4ee5\u4e0b\u4e3a\u7b80\u5316\u793a\u4f8b\uff0c\u53ea\u4f7f\u7528\u4e00\u4e2a\u53c2\u6570\u96c6\u5408\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n    s1 := gset.NewFrom(g.Slice{1, 2, 3})\n    s2 := gset.NewFrom(g.Slice{4, 5, 6})\n    s3 := gset.NewFrom(g.Slice{1, 2, 3, 4, 5, 6, 7})\n\n    // \u4ea4\u96c6\n    fmt.Println(s3.Intersect(s1).Slice())\n    // \u5dee\u96c6\n    fmt.Println(s3.Diff(s1).Slice())\n    // \u5e76\u96c6\n    fmt.Println(s1.Union(s2).Slice())\n    // \u8865\u96c6\n    fmt.Println(s1.Complement(s3).Slice())\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"[1 2 3]\n[4 5 6 7]\n[1 2 3 4 5 6]\n[7 4 5 6]\n"})}),"\n",(0,s.jsxs)(e.h2,{id:"containscontainsi-\u5305\u542b\u5224\u65ad",children:[(0,s.jsx)(e.code,{children:"Contains/ContainsI"})," \u5305\u542b\u5224\u65ad"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n    var set gset.StrSet\n    set.Add("a")\n    fmt.Println(set.Contains("a"))\n    fmt.Println(set.Contains("A"))\n    fmt.Println(set.ContainsI("A"))\n\n    // Output:\n    // true\n    // false\n    // true\n}\n'})}),"\n",(0,s.jsxs)(e.h2,{id:"poppops-\u96c6\u5408\u9879\u51fa\u6808",children:[(0,s.jsx)(e.code,{children:"Pop/Pops"})," \u96c6\u5408\u9879\u51fa\u6808"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n    var set gset.Set\n    set.Add(1, 2, 3, 4)\n    fmt.Println(set.Pop())\n    fmt.Println(set.Pops(2))\n    fmt.Println(set.Size())\n\n    // May Output:\n    // 1\n    // [2 3]\n    // 1\n}\n'})}),"\n",(0,s.jsxs)(e.h2,{id:"join-\u96c6\u5408\u9879\u4e32\u8fde",children:[(0,s.jsx)(e.code,{children:"Join"})," \u96c6\u5408\u9879\u4e32\u8fde"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n    var set gset.Set\n    set.Add("a", "b", "c", "d")\n    fmt.Println(set.Join(","))\n\n    // May Output:\n    // a,b,c,d\n}\n'})}),"\n",(0,s.jsxs)(e.h2,{id:"issubsetof-\u5b50\u96c6\u5224\u65ad",children:[(0,s.jsx)(e.code,{children:"IsSubsetOf"})," \u5b50\u96c6\u5224\u65ad"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gset"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    var s1, s2 gset.Set\n    s1.Add(g.Slice{1, 2, 3}...)\n    s2.Add(g.Slice{2, 3}...)\n    fmt.Println(s1.IsSubsetOf(&s2))\n    fmt.Println(s2.IsSubsetOf(&s1))\n\n    // Output:\n    // false\n    // true\n}\n'})}),"\n",(0,s.jsxs)(e.h2,{id:"addifnotexist-\u5224\u65ad\u6027\u5199\u5165",children:[(0,s.jsx)(e.code,{children:"AddIfNotExist*"})," \u5224\u65ad\u6027\u5199\u5165"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5224\u65ad\u6027\u5199\u5165\u662f\u6307\u5f53\u6307\u5b9a\u7684\u6570\u636e\u9879\u4e0d\u5b58\u5728\u65f6\u5219\u5199\u5165\u5e76\u4e14\u65b9\u6cd5\u8fd4\u56de ",(0,s.jsx)(e.code,{children:"true"}),"\uff0c\u5426\u5219\u5ffd\u7565\u5438\u5165\u5e76\u4e14\u65b9\u6cd5\u8fd4\u56de ",(0,s.jsx)(e.code,{children:"false"}),"\u3002\u76f8\u5173\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"AddIfNotExist"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"AddIfNotExistFunc"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"AddIfNotExistFuncLock"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u65b9\u6cd5\u5177\u4f53\u63cf\u8ff0\u8bf7\u67e5\u770b\u63a5\u53e3\u6587\u6863\u6216\u6e90\u7801\u6ce8\u91ca\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n    var set gset.Set\n    fmt.Println(set.AddIfNotExist(1))\n    fmt.Println(set.AddIfNotExist(1))\n    fmt.Println(set.Slice())\n\n    // Output:\n    // true\n    // false\n    // [1]\n}\n'})}),"\n",(0,s.jsxs)(e.h2,{id:"walk-\u904d\u5386\u4fee\u6539",children:[(0,s.jsx)(e.code,{children:"Walk"})," \u904d\u5386\u4fee\u6539"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gset"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    var (\n        set    gset.StrSet\n        names  = g.SliceStr{"user", "user_detail"}\n        prefix = "gf_"\n    )\n    set.Add(names...)\n    // Add prefix for given table names.\n    set.Walk(func(item string) string {\n        return prefix + item\n    })\n    fmt.Println(set.Slice())\n\n    // May Output:\n    // [gf_user gf_user_detail]\n}\n'})}),"\n",(0,s.jsxs)(e.h2,{id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",children:[(0,s.jsx)(e.code,{children:"JSON"})," \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gset"})," \u6a21\u5757\u4e0b\u7684\u6240\u6709\u5bb9\u5668\u7c7b\u578b\u5747\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93 ",(0,s.jsx)(e.code,{children:"json"})," \u6570\u636e\u683c\u5f0f\u7684\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u63a5\u53e3\u3002"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"Marshal"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n       "encoding/json"\n       "fmt"\n       "github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n       type Student struct {\n           Id     int\n           Name   string\n           Scores *gset.IntSet\n       }\n       s := Student{\n           Id:     1,\n           Name:   "john",\n           Scores: gset.NewIntSetFrom([]int{100, 99, 98}),\n       }\n       b, _ := json.Marshal(s)\n       fmt.Println(string(b))\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'{"Id":1,"Name":"john","Scores":[100,99,98]}\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"Unmarshal"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\n\nimport (\n       "encoding/json"\n       "fmt"\n       "github.com/gogf/gf/v2/container/gset"\n)\n\n\nfunc main() {\n       b := []byte(`{"Id":1,"Name":"john","Scores":[100,99,98]}`)\n       type Student struct {\n           Id     int\n           Name   string\n           Scores *gset.IntSet\n       }\n       s := Student{}\n       json.Unmarshal(b, &s)\n       fmt.Println(s)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"{1 john [100,99,98]}\n"})})]})}function g(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var s=t(96540);const i={},c=s.createContext(i);function r(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);
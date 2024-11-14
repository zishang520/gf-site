"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[30710],{466284:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","title":"\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","description":"\u57fa\u672c\u4f7f\u7528","source":"@site/versioned_docs/version-2.0.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md","sourceDirName":"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree","slug":"/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","permalink":"/en/2.0.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md","tags":[],"version":"2.0.x","sidebarPosition":0,"frontMatter":{"title":"\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6811\u5f62\u7c7b\u578b-gtree","permalink":"/en/2.0.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/"},"next":{"title":"\u6811\u5f62\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/en/2.0.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/\u6811\u5f62\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd"}}');var i=t(474848),o=t(28453);const a={title:"\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},l=void 0,s={},c=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u524d\u5e8f/\u540e\u7eed\u904d\u5386",id:"\u524d\u5e8f\u540e\u7eed\u904d\u5386",level:2}];function m(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gtree"\n    "github.com/gogf/gf/v2/util/gutil"\n)\n\nfunc main() {\n    m := gtree.NewRedBlackTree(gutil.ComparatorInt)\n\n    // \u8bbe\u7f6e\u952e\u503c\u5bf9\n    for i := 0; i < 10; i++ {\n        m.Set(i, i*10)\n    }\n    // \u67e5\u8be2\u5927\u5c0f\n    fmt.Println(m.Size())\n    // \u6279\u91cf\u8bbe\u7f6e\u952e\u503c\u5bf9(\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u5bf9\u8c61\u53c2\u6570\u4e0d\u540c)\n    m.Sets(map[interface{}]interface{}{\n        10: 10,\n        11: 11,\n    })\n    fmt.Println(m.Size())\n\n    // \u67e5\u8be2\u662f\u5426\u5b58\u5728\n    fmt.Println(m.Contains(1))\n\n    // \u67e5\u8be2\u952e\u503c\n    fmt.Println(m.Get(1))\n\n    // \u5220\u9664\u6570\u636e\u9879\n    m.Remove(9)\n    fmt.Println(m.Size())\n\n    // \u6279\u91cf\u5220\u9664\n    m.Removes([]interface{}{10, 11})\n    fmt.Println(m.Size())\n\n    // \u5f53\u524d\u952e\u540d\u5217\u8868(\u968f\u673a\u6392\u5e8f)\n    fmt.Println(m.Keys())\n    // \u5f53\u524d\u952e\u503c\u5217\u8868(\u968f\u673a\u6392\u5e8f)\n    fmt.Println(m.Values())\n\n    // \u67e5\u8be2\u952e\u540d\uff0c\u5f53\u952e\u503c\u4e0d\u5b58\u5728\u65f6\uff0c\u5199\u5165\u7ed9\u5b9a\u7684\u9ed8\u8ba4\u503c\n    fmt.Println(m.GetOrSet(100, 100))\n\n    // \u5220\u9664\u952e\u503c\u5bf9\uff0c\u5e76\u8fd4\u56de\u5bf9\u5e94\u7684\u952e\u503c\n    fmt.Println(m.Remove(100))\n\n    // \u904d\u5386map\n    m.IteratorAsc(func(k interface{}, v interface{}) bool {\n        fmt.Printf("%v:%v ", k, v)\n        return true\n    })\n    fmt.Println()\n\n    // \u6e05\u7a7amap\n    m.Clear()\n\n    // \u5224\u65admap\u662f\u5426\u4e3a\u7a7a\n    fmt.Println(m.IsEmpty())\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-10",children:"12\ntrue\n10\n11\n9\n[0 1 2 3 4 5 6 7 8]\n[0 10 20 30 40 50 60 70 80]\n100\n100\n0:0 1:10 2:20 3:30 4:40 5:50 6:60 7:70 8:80\ntrue\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u524d\u5e8f\u540e\u7eed\u904d\u5386",children:"\u524d\u5e8f/\u540e\u7eed\u904d\u5386"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gtree"\n    "github.com/gogf/gf/v2/util/gutil"\n)\n\nfunc main() {\n    tree := gtree.NewAVLTree(gutil.ComparatorInt)\n    for i := 0; i < 10; i++ {\n        tree.Set(i, i*10)\n    }\n    // \u6253\u5370\u6811\u5f62\n    tree.Print()\n    // \u524d\u5e8f\u904d\u5386\n    fmt.Println("ASC:")\n    tree.IteratorAsc(func(key, value interface{}) bool {\n        fmt.Println(key, value)\n        return true\n    })\n    // \u540e\u7eed\u904d\u5386\n    fmt.Println("DESC:")\n    tree.IteratorDesc(func(key, value interface{}) bool {\n        fmt.Println(key, value)\n        return true\n    })\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-AVLTree",children:"\u2502           \u250c\u2500\u2500 9\n\u2502       \u250c\u2500\u2500 8\n\u2502   \u250c\u2500\u2500 7\n\u2502   \u2502   \u2502   \u250c\u2500\u2500 6\n\u2502   \u2502   \u2514\u2500\u2500 5\n\u2502   \u2502       \u2514\u2500\u2500 4\n\u2514\u2500\u2500 3\n    \u2502   \u250c\u2500\u2500 2\n    \u2514\u2500\u2500 1\n        \u2514\u2500\u2500 0\n\nASC:\n0 0\n1 10\n2 20\n3 30\n4 40\n5 50\n6 60\n7 70\n8 80\n9 90\nDESC:\n9 90\n8 80\n7 70\n6 60\n5 50\n4 40\n3 30\n2 20\n1 10\n0 0\n"})})]})}function f(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>l});var r=t(296540);const i={},o=r.createContext(i);function a(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);
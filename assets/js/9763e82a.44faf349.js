"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[81622],{86493:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177/\u5de5\u5177\u65b9\u6cd5-gutil","title":"\u5de5\u5177\u65b9\u6cd5-gutil","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177/\u5de5\u5177\u65b9\u6cd5-gutil.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177","slug":"/docs/components/util-gutil","permalink":"/docs/components/util-gutil","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177/\u5de5\u5177\u65b9\u6cd5-gutil.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/components/util-gutil","title":"\u5de5\u5177\u65b9\u6cd5-gutil","sidebar_position":6,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u5206\u9875\u7ba1\u7406-gpage","permalink":"/docs/components/util-gpage"},"next":{"title":"\u5355\u5143\u6d4b\u8bd5","permalink":"/docs/components/test"}}');var s=i(74848),r=i(28453);const c={slug:"/docs/components/util-gutil",title:"\u5de5\u5177\u65b9\u6cd5-gutil",sidebar_position:6,hide_title:!0},o=void 0,l={},u=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u5e38\u7528\u65b9\u6cd5",id:"\u5e38\u7528\u65b9\u6cd5",level:2},{value:"<code>Dump</code>",id:"dump",level:3},{value:"<code>DumpWithType</code>",id:"dumpwithtype",level:3},{value:"<code>DumpTo</code>",id:"dumpto",level:3}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gutil"})," \u7ec4\u4ef6\u5c01\u88c5\u4e86\u4e00\u4e9b\u5f00\u53d1\u4e2d\u5e38\u7528\u7684\u5de5\u5177\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528\u65b9\u5f0f\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/util/gutil"\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u63a5\u53e3\u6587\u6863\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/util/gutil",children:"https://pkg.go.dev/github.com/gogf/gf/v2/util/gutil"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5e38\u7528\u65b9\u6cd5",children:"\u5e38\u7528\u65b9\u6cd5"}),"\n",(0,s.jsx)(e.h3,{id:"dump",children:(0,s.jsx)(e.code,{children:"Dump"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u8bf4\u660e\uff1a ",(0,s.jsx)(e.code,{children:"Dump"})," \u5c06 ",(0,s.jsx)(e.code,{children:"values"})," \u4ee5\u66f4\u597d\u7684\u53ef\u8bfb\u6027\u7684\u65b9\u5f0f\u8f93\u51fa\u5728\u6807\u51c6\u8f93\u51fa\u4e2d\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"Dump(values ...interface{})\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u793a\u4f8b\uff1a"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'type User struct {\n      Name string\n      Age int\n}\n\ntype Location struct {\n      Province string\n      City string\n}\n\ntype UserInfo struct {\n      U User\n      L Location\n}\n\nfunc main() {\n      userList := make([]UserInfo, 0)\n      userList = append(userList, UserInfo{\n          U: User{\n              Name: "\u90ed\u5f3a",\n              Age:  18,\n          },\n          L: Location{\n              Province: "\u56db\u5ddd",\n              City:     "\u6210\u90fd",\n          },\n      })\n      userList = append(userList, UserInfo{\n          U: User{\n              Name: "\u9ec4\u9a9e",\n              Age:  18,\n          },\n          L: Location{\n              Province: "\u6c5f\u82cf",\n              City:     "\u5357\u4eac",\n          },\n      })\n\n      gutil.Dump(userList)\n}\n\n// Output:\n[\n      {\n          U: {\n              Name: "\u90ed\u5f3a",\n              Age:  18,\n          },\n          L: {\n              Province: "\u56db\u5ddd",\n              City:     "\u6210\u90fd",\n          },\n      },\n      {\n          U: {\n              Name: "\u9ec4\u9a9e",\n              Age:  18,\n          },\n          L: {\n              Province: "\u6c5f\u82cf",\n              City:     "\u5357\u4eac",\n          },\n      },\n]\n'})}),"\n",(0,s.jsx)(e.h3,{id:"dumpwithtype",children:(0,s.jsx)(e.code,{children:"DumpWithType"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u8bf4\u660e\uff1a ",(0,s.jsx)(e.code,{children:"DumpWithType"})," \u548c ",(0,s.jsx)(e.code,{children:"Dump"})," \u7c7b\u4f3c\uff0c\u4f46\u662f\u591a\u4e86\u7c7b\u578b\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"DumpWithType(values ...interface{})\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u793a\u4f8b\uff1a"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'type User struct {\n      Name string\n      Age int\n}\n\ntype Location struct {\n      Province string\n      City string\n}\n\ntype UserInfo struct {\n      U User\n      L Location\n}\n\nfunc main() {\n      userList := make([]UserInfo, 0)\n      userList = append(userList, UserInfo{\n          U: User{\n              Name: "\u90ed\u5f3a",\n              Age:  18,\n          },\n          L: Location{\n              Province: "\u56db\u5ddd",\n              City:     "\u6210\u90fd",\n          },\n      })\n      userList = append(userList, UserInfo{\n          U: User{\n              Name: "\u9ec4\u9a9e",\n              Age:  18,\n          },\n          L: Location{\n              Province: "\u6c5f\u82cf",\n              City:     "\u5357\u4eac",\n          },\n      })\n\n      gutil.DumpWithType(userList)\n}\n\n// Output:\n[]main.UserInfo(2) [\n      main.UserInfo(2) {\n          U: main.User(2) {\n              Name: string(6) "\u90ed\u5f3a",\n              Age:  int(18),\n          },\n          L: main.Location(2) {\n              Province: string(6) "\u56db\u5ddd",\n              City:     string(6) "\u6210\u90fd",\n          },\n      },\n      main.UserInfo(2) {\n          U: main.User(2) {\n              Name: string(6) "\u9ec4\u9a9e",\n              Age:  int(18),\n          },\n          L: main.Location(2) {\n              Province: string(6) "\u6c5f\u82cf",\n              City:     string(6) "\u5357\u4eac",\n          },\n      },\n]\n'})}),"\n",(0,s.jsx)(e.h3,{id:"dumpto",children:(0,s.jsx)(e.code,{children:"DumpTo"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u8bf4\u660e\uff1a ",(0,s.jsx)(e.code,{children:"DumpTo"})," \u5c06 ",(0,s.jsx)(e.code,{children:"value"})," \u4ee5\u81ea\u5b9a\u4e49\u7684\u8f93\u51fa\u5f62\u5f0f\u5199\u5165\u5230 ",(0,s.jsx)(e.code,{children:"write"})," \u4e2d\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"DumpTo(writer io.Writer, value interface{}, option DumpOption)\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u793a\u4f8b\uff1a"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n      "bytes"\n      "fmt"\n      "github.com/gogf/gf/v2/util/gutil"\n      "io"\n)\n\ntype UserInfo struct {\n      Name     string\n      Age      int\n      Province string\n      City     string\n}\n\ntype DumpWriter struct {\n      Content string\n}\n\nfunc (d *DumpWriter) Write(p []byte) (n int, err error) {\n      buffer := bytes.NewBuffer(nil)\n      buffer.WriteString("I\'m Start!\\n")\n      buffer.WriteString(string(p))\n      buffer.WriteString("\\nI\'m End!\\n")\n\n      d.Content = buffer.String()\n\n      return buffer.Len(), nil\n}\n\nfunc main() {\n      u := UserInfo{\n          "a", 18, "b", "c",\n      }\n\n      var dw io.Writer = &DumpWriter{}\n\n      gutil.DumpTo(dw, u, gutil.DumpOption{})\n\n      fmt.Println(dw.(*DumpWriter).Content)\n}\n\n// Output:\nI\'m Start!\n{\n      Name:     "a",\n      Age:      18,\n      Province: "b",\n      City:     "c",\n}\nI\'m End!\n'})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>o});var t=i(96540);const s={},r=t.createContext(s);function c(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);
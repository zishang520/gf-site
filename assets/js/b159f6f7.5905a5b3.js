"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[25075],{49074:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>o});const c=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406/\u547d\u4ee4\u7ba1\u7406-\u57fa\u7840\u65b9\u6cd5","title":"\u547d\u4ee4\u7ba1\u7406-\u57fa\u7840\u65b9\u6cd5","description":"gcmd \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u5e38\u7528\u7684\u57fa\u7840\u5305\u65b9\u6cd5\uff0c\u53ef\u4ee5\u6309\u7167\u9ed8\u8ba4\u7684\u89e3\u6790\u89c4\u5219\uff0c\u76f4\u63a5\u83b7\u53d6\u547d\u4ee4\u884c\u53c2\u6570\u53ca\u9009\u9879\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406/\u547d\u4ee4\u7ba1\u7406-\u57fa\u7840\u65b9\u6cd5.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406","slug":"/docs/core/gcmd-funcs","permalink":"/docs/core/gcmd-funcs","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u547d\u4ee4\u7ba1\u7406/\u547d\u4ee4\u7ba1\u7406-\u57fa\u7840\u65b9\u6cd5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gcmd-funcs","title":"\u547d\u4ee4\u7ba1\u7406-\u57fa\u7840\u65b9\u6cd5","sidebar_position":1,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u547d\u4ee4\u7ba1\u7406-\u57fa\u672c\u6982\u5ff5","permalink":"/docs/core/gcmd-intro"},"next":{"title":"\u547d\u4ee4\u7ba1\u7406-Parser\u89e3\u6790","permalink":"/docs/core/gcmd-parser"}}');var d=t(74848),i=t(28453);const s={slug:"/docs/core/gcmd-funcs",title:"\u547d\u4ee4\u7ba1\u7406-\u57fa\u7840\u65b9\u6cd5",sidebar_position:1,hide_title:!0},r=void 0,l={},o=[{value:"\u5e38\u7528\u65b9\u6cd5",id:"\u5e38\u7528\u65b9\u6cd5",level:2},{value:"<code>Init</code> \u81ea\u5b9a\u4e49\u547d\u4ee4\u884c",id:"init-\u81ea\u5b9a\u4e49\u547d\u4ee4\u884c",level:2},{value:"<code>GetArg*</code> \u53c2\u6570\u83b7\u53d6",id:"getarg-\u53c2\u6570\u83b7\u53d6",level:2},{value:"<code>GetOpt*</code> \u9009\u9879\u83b7\u53d6",id:"getopt-\u9009\u9879\u83b7\u53d6",level:2},{value:"<code>GetOptWithEnv</code> \u7279\u6027",id:"getoptwithenv-\u7279\u6027",level:2}];function g(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"gcmd"})," \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u5e38\u7528\u7684\u57fa\u7840\u5305\u65b9\u6cd5\uff0c\u53ef\u4ee5\u6309\u7167\u9ed8\u8ba4\u7684\u89e3\u6790\u89c4\u5219\uff0c\u76f4\u63a5\u83b7\u53d6\u547d\u4ee4\u884c\u53c2\u6570\u53ca\u9009\u9879\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u5e38\u7528\u65b9\u6cd5",children:"\u5e38\u7528\u65b9\u6cd5"}),"\n",(0,d.jsxs)(n.p,{children:["\u66f4\u591a\u7ec4\u4ef6\u65b9\u6cd5\u8bf7\u53c2\u8003\u63a5\u53e3\u6587\u6863\uff1a ",(0,d.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcmd",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcmd"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:"func Init(args ...string)\n\nfunc GetArg(index int, def ...string) *gvar.Var\nfunc GetArgAll() []string\n\nfunc GetOpt(name string, def ...string) *gvar.Var\nfunc GetOptAll() map[string]string\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"init-\u81ea\u5b9a\u4e49\u547d\u4ee4\u884c",children:[(0,d.jsx)(n.code,{children:"Init"})," \u81ea\u5b9a\u4e49\u547d\u4ee4\u884c"]}),"\n",(0,d.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c ",(0,d.jsx)(n.code,{children:"gcmd"})," \u7ec4\u4ef6\u4f1a\u81ea\u52a8\u4ece ",(0,d.jsx)(n.code,{children:"os.Args"})," \u89e3\u6790\u83b7\u53d6\u53c2\u6570\u53ca\u6570\u636e\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"Init"})," \u65b9\u6cd5\u81ea\u5b9a\u4e49\u547d\u4ee4\u884c\u6570\u636e\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'func ExampleInit() {\n    gcmd.Init("gf", "build", "main.go", "-o=gf.exe", "-y")\n    fmt.Printf(`%#v`, gcmd.GetArgAll())\n\n    // Output:\n    // []string{"gf", "build", "main.go"}\n}\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"getarg-\u53c2\u6570\u83b7\u53d6",children:[(0,d.jsx)(n.code,{children:"GetArg*"})," \u53c2\u6570\u83b7\u53d6"]}),"\n",(0,d.jsx)(n.p,{children:"\u53c2\u6570\u83b7\u53d6\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u4e2a\u65b9\u6cd5\uff1a"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"GetArg"})," \u65b9\u6cd5\u7528\u4ee5\u83b7\u53d6\u9ed8\u8ba4\u89e3\u6790\u7684\u547d\u4ee4\u884c\u53c2\u6570\uff0c\u53c2\u6570\u901a\u8fc7\u8f93\u5165\u7d22\u5f15\u4f4d\u7f6e\u83b7\u53d6\uff0c\u7d22\u5f15\u4f4d\u7f6e\u4ece ",(0,d.jsx)(n.code,{children:"0"})," \u5f00\u59cb\uff0c\u4f46\u5f80\u5f80\u6211\u4eec\u9700\u8981\u83b7\u53d6\u7684\u53c2\u6570\u662f\u4ece ",(0,d.jsx)(n.code,{children:"1"})," \u5f00\u59cb\uff0c\u56e0\u4e3a\u7d22\u5f15 ",(0,d.jsx)(n.code,{children:"0"})," \u7684\u53c2\u6570\u662f\u7a0b\u5e8f\u540d\u79f0\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"GetArgAll"})," \u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u6240\u6709\u7684\u547d\u4ee4\u884c\u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'func ExampleGetArg() {\n    gcmd.Init("gf", "build", "main.go", "-o=gf.exe", "-y")\n    fmt.Printf(\n        `Arg[0]: "%v", Arg[1]: "%v", Arg[2]: "%v", Arg[3]: "%v"`,\n        gcmd.GetArg(0), gcmd.GetArg(1), gcmd.GetArg(2), gcmd.GetArg(3),\n    )\n\n    // Output:\n    // Arg[0]: "gf", Arg[1]: "build", Arg[2]: "main.go", Arg[3]: ""\n}\n\nfunc ExampleGetArgAll() {\n    gcmd.Init("gf", "build", "main.go", "-o=gf.exe", "-y")\n    fmt.Printf(`%#v`, gcmd.GetArgAll())\n\n    // Output:\n    // []string{"gf", "build", "main.go"}\n}\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"getopt-\u9009\u9879\u83b7\u53d6",children:[(0,d.jsx)(n.code,{children:"GetOpt*"})," \u9009\u9879\u83b7\u53d6"]}),"\n",(0,d.jsx)(n.p,{children:"\u9009\u9879\u83b7\u53d6\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u4e2a\u65b9\u6cd5\uff1a"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"GetOpt"})," \u65b9\u6cd5\u7528\u4ee5\u83b7\u53d6\u9ed8\u8ba4\u89e3\u6790\u7684\u547d\u4ee4\u884c\u9009\u9879\uff0c\u9009\u9879\u901a\u8fc7\u540d\u79f0\u83b7\u53d6\uff0c\u5e76\u4e14\u9009\u9879\u7684\u8f93\u5165\u6ca1\u6709\u987a\u5e8f\u6027\uff0c\u53ef\u4ee5\u8f93\u5165\u5230\u4efb\u610f\u7684\u547d\u4ee4\u884c\u4f4d\u7f6e\u3002\u5f53\u7ed9\u5b9a\u540d\u79f0\u7684\u9009\u9879\u6570\u636e\u4e0d\u5b58\u5728\u65f6\uff0c\u8fd4\u56de ",(0,d.jsx)(n.code,{children:"nil"}),"\u3002\u6ce8\u610f\u5224\u65ad\u4e0d\u5e26\u6570\u636e\u7684\u9009\u9879\u662f\u5426\u5b58\u5728\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"GetOpt(name) != nil"})," \u65b9\u5f0f\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"GetOptAll"})," \u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u6240\u6709\u7684\u9009\u9879\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'func ExampleGetOpt() {\n    gcmd.Init("gf", "build", "main.go", "-o=gf.exe", "-y")\n    fmt.Printf(\n        `Opt["o"]: "%v", Opt["y"]: "%v", Opt["d"]: "%v"`,\n        gcmd.GetOpt("o"), gcmd.GetOpt("y"), gcmd.GetOpt("d", "default value"),\n    )\n\n    // Output:\n    // Opt["o"]: "gf.exe", Opt["y"]: "", Opt["d"]: "default value"\n}\n\nfunc ExampleGetOptAll() {\n    gcmd.Init("gf", "build", "main.go", "-o=gf.exe", "-y")\n    fmt.Printf(`%#v`, gcmd.GetOptAll())\n\n    // May Output:\n    // map[string]string{"o":"gf.exe", "y":""}\n}\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"getoptwithenv-\u7279\u6027",children:[(0,d.jsx)(n.code,{children:"GetOptWithEnv"})," \u7279\u6027"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:"func GetOptWithEnv(key string, def ...interface{}) *gvar.Var\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8be5\u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u547d\u4ee4\u884c\u4e2d\u6307\u5b9a\u7684\u9009\u9879\u6570\u503c\uff0c\u5982\u679c\u8be5\u9009\u9879\u4e0d\u5b58\u5728\u65f6\uff0c\u5219\u4ece\u73af\u5883\u53d8\u91cf\u4e2d\u8bfb\u53d6\u3002\u4f46\u662f\u4e24\u8005\u7684\u540d\u79f0\u89c4\u5219\u4f1a\u4e0d\u4e00\u6837\u3002\u4f8b\u5982\uff1a ",(0,d.jsx)(n.code,{children:'gcmd.GetOptWithEnv("gf.debug")'})," \u5c06\u4f1a\u4f18\u5148\u53bb\u8bfb\u53d6\u547d\u4ee4\u884c\u4e2d\u7684 ",(0,d.jsx)(n.code,{children:"gf.debug"})," \u9009\u9879\uff0c\u5f53\u4e0d\u5b58\u5728\u65f6\uff0c\u5219\u4f1a\u53bb\u8bfb\u53d6 ",(0,d.jsx)(n.code,{children:"GF_DEBUG"})," \u73af\u5883\u53d8\u91cf\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\u53c2\u6570\u547d\u540d\u8f6c\u6362\u89c4\u5219\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u73af\u5883\u53d8\u91cf\u4f1a\u5c06\u540d\u79f0\u8f6c\u6362\u4e3a\u5927\u5199\uff0c\u540d\u79f0\u4e2d\u7684 ",(0,d.jsx)(n.code,{children:"."})," \u5b57\u7b26\u8f6c\u6362\u4e3a ",(0,d.jsx)(n.code,{children:"_"})," \u5b57\u7b26\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u547d\u4ee4\u884c\u4e2d\u4f1a\u5c06\u540d\u79f0\u8f6c\u6362\u4e3a\u5c0f\u5199\uff0c\u540d\u79f0\u4e2d\u7684 ",(0,d.jsx)(n.code,{children:"_"})," \u5b57\u7b26\u8f6c\u6362\u4e3a ",(0,d.jsx)(n.code,{children:"."})," \u5b57\u7b26\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'func ExampleGetOptWithEnv() {\n    fmt.Printf("Opt[gf.test]:%s\\n", gcmd.GetOptWithEnv("gf.test"))\n    _ = genv.Set("GF_TEST", "YES")\n    fmt.Printf("Opt[gf.test]:%s\\n", gcmd.GetOptWithEnv("gf.test"))\n\n    // Output:\n    // Opt[gf.test]:\n    // Opt[gf.test]:YES\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(g,{...e})}):g(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var c=t(96540);const d={},i=c.createContext(d);function s(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);
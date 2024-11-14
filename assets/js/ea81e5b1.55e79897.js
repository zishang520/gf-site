"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[74109],{326142:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e","title":"\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gtime\u7ec4\u4ef6\u8fdb\u884c\u5168\u5c40\u65f6\u533a\u8bbe\u7f6e\uff0c\u89e3\u91caSetTimeZone\u65b9\u6cd5\u7684\u4f7f\u7528\u9650\u5236\u53ca\u6ce8\u610f\u4e8b\u9879\uff0c\u5e76\u63d0\u4f9b\u4ee3\u7801\u793a\u4f8b\u5c55\u793a\u7a0b\u5e8f\u4e2d\u5982\u4f55\u6b63\u786e\u7ba1\u7406\u548c\u8f6c\u6362\u65f6\u95f4\uff0c\u5c24\u5176\u662f\u5728\u6d89\u53ca\u591a\u4e2a\u65f6\u533a\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime","slug":"/docs/components/os-gtime-timezone","permalink":"/2.7.x/docs/components/os-gtime-timezone","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e.md","tags":[],"version":"2.7.x","sidebarPosition":3,"frontMatter":{"slug":"/docs/components/os-gtime-timezone","title":"\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","\u65f6\u533a\u8bbe\u7f6e","SetTimeZone","\u65f6\u95f4\u7ba1\u7406","gtime","\u6807\u51c6\u5e93","\u65f6\u95f4\u8f6c\u6362","\u65e5\u5fd7\u8f93\u51fa","\u5168\u5c40\u8bbe\u7f6e","\u7f16\u7a0b\u6307\u5357"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gtime\u7ec4\u4ef6\u8fdb\u884c\u5168\u5c40\u65f6\u533a\u8bbe\u7f6e\uff0c\u89e3\u91caSetTimeZone\u65b9\u6cd5\u7684\u4f7f\u7528\u9650\u5236\u53ca\u6ce8\u610f\u4e8b\u9879\uff0c\u5e76\u63d0\u4f9b\u4ee3\u7801\u793a\u4f8b\u5c55\u793a\u7a0b\u5e8f\u4e2d\u5982\u4f55\u6b63\u786e\u7ba1\u7406\u548c\u8f6c\u6362\u65f6\u95f4\uff0c\u5c24\u5176\u662f\u5728\u6d89\u53ca\u591a\u4e2a\u65f6\u533a\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u65f6\u95f4\u7ba1\u7406-\u5de5\u5177\u65b9\u6cd5","permalink":"/2.7.x/docs/components/os-gtime-common-funcs"},"next":{"title":"\u65f6\u95f4\u7ba1\u7406-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/2.7.x/docs/components/os-gtime-funcs"}}');var o=i(474848),s=i(28453);const c={slug:"/docs/components/os-gtime-timezone",title:"\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e",sidebar_position:3,hide_title:!0,keywords:["GoFrame","\u65f6\u533a\u8bbe\u7f6e","SetTimeZone","\u65f6\u95f4\u7ba1\u7406","gtime","\u6807\u51c6\u5e93","\u65f6\u95f4\u8f6c\u6362","\u65e5\u5fd7\u8f93\u51fa","\u5168\u5c40\u8bbe\u7f6e","\u7f16\u7a0b\u6307\u5357"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gtime\u7ec4\u4ef6\u8fdb\u884c\u5168\u5c40\u65f6\u533a\u8bbe\u7f6e\uff0c\u89e3\u91caSetTimeZone\u65b9\u6cd5\u7684\u4f7f\u7528\u9650\u5236\u53ca\u6ce8\u610f\u4e8b\u9879\uff0c\u5e76\u63d0\u4f9b\u4ee3\u7801\u793a\u4f8b\u5c55\u793a\u7a0b\u5e8f\u4e2d\u5982\u4f55\u6b63\u786e\u7ba1\u7406\u548c\u8f6c\u6362\u65f6\u95f4\uff0c\u5c24\u5176\u662f\u5728\u6d89\u53ca\u591a\u4e2a\u65f6\u533a\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\u3002"},r=void 0,m={},d=[{value:"<code>SetTimeZone</code> \u8bbe\u7f6e\u5168\u5c40\u65f6\u533a",id:"settimezone-\u8bbe\u7f6e\u5168\u5c40\u65f6\u533a",level:2},{value:"\u65f6\u533a\u8bbe\u7f6e\u6ce8\u610f\u4e8b\u9879",id:"\u65f6\u533a\u8bbe\u7f6e\u6ce8\u610f\u4e8b\u9879",level:2},{value:"<code>SetTimeZone</code> \u65b9\u6cd5\u591a\u6b21\u8c03\u7528\u62a5\u9519",id:"settimezone-\u65b9\u6cd5\u591a\u6b21\u8c03\u7528\u62a5\u9519",level:3},{value:"\u4e1a\u52a1\u9879\u76ee\u4e2d\uff0c <code>time</code> \u5305\u521d\u59cb\u5316\u95ee\u9898",id:"\u4e1a\u52a1\u9879\u76ee\u4e2d-time-\u5305\u521d\u59cb\u5316\u95ee\u9898",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h2,{id:"settimezone-\u8bbe\u7f6e\u5168\u5c40\u65f6\u533a",children:[(0,o.jsx)(n.code,{children:"SetTimeZone"})," \u8bbe\u7f6e\u5168\u5c40\u65f6\u533a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n\n    "github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n    // \u8bbe\u7f6e\u8fdb\u7a0b\u5168\u5c40\u65f6\u533a\n    err := gtime.SetTimeZone("Asia/Tokyo")\n    if err != nil {\n        panic(err)\n    }\n\n    // \u4f7f\u7528gtime\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n    fmt.Println(gtime.Now().String())\n\n    // \u4f7f\u7528\u6807\u51c6\u5e93\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n    fmt.Println(time.Now().String())\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"2023-01-06 15:27:38\n2023-01-06 15:27:38.753909 +0900 JST m=+0.002758145\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u65f6\u533a\u8bbe\u7f6e\u6ce8\u610f\u4e8b\u9879",children:"\u65f6\u533a\u8bbe\u7f6e\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,o.jsxs)(n.h3,{id:"settimezone-\u65b9\u6cd5\u591a\u6b21\u8c03\u7528\u62a5\u9519",children:[(0,o.jsx)(n.code,{children:"SetTimeZone"})," \u65b9\u6cd5\u591a\u6b21\u8c03\u7528\u62a5\u9519"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"SetTimeZone"})," \u65b9\u6cd5\u53ea\u5141\u8bb8\u5168\u5c40\u8bbe\u7f6e\u4e00\u6b21\u65f6\u533a\uff0c\u5982\u679c\u591a\u6b21\u8c03\u7528\uff0c\u5e76\u4e14\u8bbe\u7f6e\u7684\u65f6\u533a\u4e0d\u4e00\u6837\uff0c\u540e\u7eed\u8c03\u7528\u5c06\u4f1a\u5931\u8d25\uff0c\u5e76\u8fd4\u56de ",(0,o.jsx)(n.code,{children:"error"}),"\u3002"]}),"\n",(0,o.jsxs)(n.h3,{id:"\u4e1a\u52a1\u9879\u76ee\u4e2d-time-\u5305\u521d\u59cb\u5316\u95ee\u9898",children:["\u4e1a\u52a1\u9879\u76ee\u4e2d\uff0c ",(0,o.jsx)(n.code,{children:"time"})," \u5305\u521d\u59cb\u5316\u95ee\u9898"]}),"\n",(0,o.jsxs)(n.p,{children:["\u7a0b\u5e8f\u65f6\u533a\u7684\u5168\u5c40\u8bbe\u7f6e\u5fc5\u987b\u8981\u5728\u6807\u51c6\u5e93\u7684 ",(0,o.jsx)(n.code,{children:"time"})," \u5305 ",(0,o.jsx)(n.code,{children:"import"})," \u4e4b\u524d\u8c03\u7528\uff0c\u56e0\u4e3a\u6807\u51c6\u5e93\u7684 ",(0,o.jsx)(n.code,{children:"time"})," \u5305\u5728 ",(0,o.jsx)(n.code,{children:"import"})," \u65f6\u4f1a\u6267\u884c\u521d\u59cb\u5316\uff0c\u4e4b\u540e\u65e0\u6cd5\u518d\u5168\u5c40\u4fee\u6539\u7a0b\u5e8f\u65f6\u533a\uff0c\u53ea\u80fd\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"ToLocation"})," \u65b9\u6cd5\uff08\u6216\u8005\u6807\u51c6\u5e93 ",(0,o.jsx)(n.code,{children:"In"})," \u65b9\u6cd5\uff09\u5bf9\u7279\u5b9a\u65f6\u95f4\u5bf9\u8c61\u6267\u884c\u65f6\u533a\u8f6c\u6362\u3002\u5bf9\u65f6\u95f4\u5bf9\u8c61\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"ToLocation"})," \u8f6c\u6362\u7684\u4f8b\u5b50\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n\n    "github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n    // \u8bbe\u7f6e\u8fdb\u7a0b\u5168\u5c40\u65f6\u533a\n    err := gtime.SetTimeZone("Asia/Tokyo")\n    if err != nil {\n        panic(err)\n    }\n\n    // \u4f7f\u7528gtime\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n    fmt.Println(gtime.Now())\n\n    // \u4f7f\u7528\u6807\u51c6\u5e93\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n    fmt.Println(time.Now())\n\n    // \u5bf9\u7279\u5b9a\u65f6\u95f4\u5bf9\u8c61\u6267\u884c\u65f6\u533a\u8f6c\u6362\n    local, err := time.LoadLocation("Asia/Shanghai")\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(gtime.Now().ToLocation(local))\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"2023-01-06 15:37:38\n2023-01-06 15:37:38.753909 +0900 JST m=+0.002758145\n2023-01-06 14:37:38\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u4e1a\u52a1\u9879\u76ee\u4e2d\uff0c\u5f80\u5f80\u5728 ",(0,o.jsx)(n.code,{children:"main"})," \u5305\u4e4b\u524d\u4f1a\u6709\u5f88\u591a\u4e1a\u52a1\u7684\u5305 ",(0,o.jsx)(n.code,{children:"import"}),"\uff0c\u4f1a\u5f15\u8d77 ",(0,o.jsx)(n.code,{children:"time"})," \u5305\u7684\u521d\u59cb\u5316\u95ee\u9898\u3002\u56e0\u6b64\uff0c\u5982\u679c\u9700\u8981\u5168\u5c40\u8bbe\u7f6e\u65f6\u533a\uff0c\u5efa\u8bae\u901a\u8fc7\u4e00\u4e2a\u72ec\u7acb\u7684\u5305\u6765\u8c03\u7528 ",(0,o.jsx)(n.code,{children:"SetTimeZone"})," \u65b9\u6cd5\uff0c\u5e76\u4e14\u5728 ",(0,o.jsx)(n.code,{children:"main"})," \u5305\u7684\u6700\u5f00\u5934\u6267\u884c ",(0,o.jsx)(n.code,{children:"import"})," \u89c4\u907f ",(0,o.jsx)(n.code,{children:"time"})," \u5305\u521d\u59cb\u5316\u7684\u95ee\u9898\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,o.jsxs)(n.p,{children:["\u76f8\u5173\u53c2\u8003\u94fe\u63a5\uff1a ",(0,o.jsx)(n.a,{href:"https://stackoverflow.com/questions/54363451/setting-timezone-globally-in-golang",children:"https://stackoverflow.com/questions/54363451/setting-timezone-globally-in-golang"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    _ "boot/time"\n\n    "fmt"\n    "time"\n)\n\nfunc main() {\n    // \u4f7f\u7528gtime\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n    fmt.Println(gtime.Now().String())\n\n    // \u4f7f\u7528\u6807\u51c6\u5e93\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n    fmt.Println(time.Now().String())\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var t=i(296540);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
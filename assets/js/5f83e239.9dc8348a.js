"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[5876],{331928:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u914d\u7f6e/\u670d\u52a1\u914d\u7f6e-\u914d\u7f6e\u65b9\u6cd5","title":"\u670d\u52a1\u914d\u7f6e-\u914d\u7f6e\u65b9\u6cd5","description":"\u5728GoFrame\u6846\u67b6\u4e2d\u901a\u8fc7SetConfig\u548cSetConfigWithMap\u65b9\u6cd5\u5bf9\u670d\u52a1\u5668\u8fdb\u884c\u914d\u7f6e\uff0c\u5305\u62ec\u914d\u7f6e\u5bf9\u8c61ServerConfig\u7684\u5b9a\u4e49\u53ca\u4f7f\u7528Server\u5bf9\u8c61\u8fdb\u884c\u7279\u5b9a\u914d\u7f6e\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u914d\u7f6e\u9879\u5728Server\u6267\u884cStart\u540e\u4fbf\u4e0d\u80fd\u518d\u4fee\u6539\uff0c\u4ee5\u4fdd\u8bc1\u5e76\u53d1\u5b89\u5168\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u914d\u7f6e/\u670d\u52a1\u914d\u7f6e-\u914d\u7f6e\u65b9\u6cd5.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u914d\u7f6e","slug":"/docs/web/server-config-funcs","permalink":"/2.7.x/docs/web/server-config-funcs","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u914d\u7f6e/\u670d\u52a1\u914d\u7f6e-\u914d\u7f6e\u65b9\u6cd5.md","tags":[],"version":"2.7.x","sidebarPosition":2,"frontMatter":{"slug":"/docs/web/server-config-funcs","title":"\u670d\u52a1\u914d\u7f6e-\u914d\u7f6e\u65b9\u6cd5","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u670d\u52a1\u914d\u7f6e","SetConfig","SetConfigWithMap","ServerConfig","\u914d\u7f6e\u65b9\u6cd5","ghttp\u5e93","\u670d\u52a1\u5668","\u914d\u7f6e\u5bf9\u8c61"],"description":"\u5728GoFrame\u6846\u67b6\u4e2d\u901a\u8fc7SetConfig\u548cSetConfigWithMap\u65b9\u6cd5\u5bf9\u670d\u52a1\u5668\u8fdb\u884c\u914d\u7f6e\uff0c\u5305\u62ec\u914d\u7f6e\u5bf9\u8c61ServerConfig\u7684\u5b9a\u4e49\u53ca\u4f7f\u7528Server\u5bf9\u8c61\u8fdb\u884c\u7279\u5b9a\u914d\u7f6e\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u914d\u7f6e\u9879\u5728Server\u6267\u884cStart\u540e\u4fbf\u4e0d\u80fd\u518d\u4fee\u6539\uff0c\u4ee5\u4fdd\u8bc1\u5e76\u53d1\u5b89\u5168\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u670d\u52a1\u914d\u7f6e-\u914d\u7f6e\u6587\u4ef6\u6a21\u677f","permalink":"/2.7.x/docs/web/server-config-file-template"},"next":{"title":"Cookie","permalink":"/2.7.x/docs/web/cookie"}}');var t=n(474848),i=n(28453);const s={slug:"/docs/web/server-config-funcs",title:"\u670d\u52a1\u914d\u7f6e-\u914d\u7f6e\u65b9\u6cd5",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u670d\u52a1\u914d\u7f6e","SetConfig","SetConfigWithMap","ServerConfig","\u914d\u7f6e\u65b9\u6cd5","ghttp\u5e93","\u670d\u52a1\u5668","\u914d\u7f6e\u5bf9\u8c61"],description:"\u5728GoFrame\u6846\u67b6\u4e2d\u901a\u8fc7SetConfig\u548cSetConfigWithMap\u65b9\u6cd5\u5bf9\u670d\u52a1\u5668\u8fdb\u884c\u914d\u7f6e\uff0c\u5305\u62ec\u914d\u7f6e\u5bf9\u8c61ServerConfig\u7684\u5b9a\u4e49\u53ca\u4f7f\u7528Server\u5bf9\u8c61\u8fdb\u884c\u7279\u5b9a\u914d\u7f6e\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u914d\u7f6e\u9879\u5728Server\u6267\u884cStart\u540e\u4fbf\u4e0d\u80fd\u518d\u4fee\u6539\uff0c\u4ee5\u4fdd\u8bc1\u5e76\u53d1\u5b89\u5168\u3002"},c=void 0,d={},l=[{value:"\u914d\u7f6e\u5bf9\u8c61",id:"\u914d\u7f6e\u5bf9\u8c61",level:2},{value:"\u914d\u7f6e\u65b9\u6cd5",id:"\u914d\u7f6e\u65b9\u6cd5",level:2},{value:"<code>SetConfigWithMap</code> \u65b9\u6cd5",id:"setconfigwithmap-\u65b9\u6cd5",level:3}];function a(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"\u914d\u7f6e\u5bf9\u8c61",children:"\u914d\u7f6e\u5bf9\u8c61"}),"\n",(0,t.jsxs)(r.p,{children:["\u914d\u7f6e\u5bf9\u8c61\u5b9a\u4e49\uff1a ",(0,t.jsx)(r.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#ServerConfig",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#ServerConfig"})]}),"\n",(0,t.jsx)(r.h2,{id:"\u914d\u7f6e\u65b9\u6cd5",children:"\u914d\u7f6e\u65b9\u6cd5"}),"\n",(0,t.jsxs)(r.p,{children:["\u65b9\u6cd5\u5217\u8868\uff1a ",(0,t.jsx)(r.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Server",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Server"})]}),"\n",(0,t.jsx)(r.p,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(r.code,{children:"SetConfig"})," \u53ca ",(0,t.jsx)(r.code,{children:"SetConfigWithMap"})," \u6765\u8bbe\u7f6e\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:["\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"Server"})," \u5bf9\u8c61\u7684 ",(0,t.jsx)(r.code,{children:"Set*/Enable*"})," \u65b9\u6cd5\u8fdb\u884c\u7279\u5b9a\u914d\u7f6e\u7684\u8bbe\u7f6e\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:["\u4e3b\u8981\u6ce8\u610f\u7684\u662f\uff0c\u914d\u7f6e\u9879\u5728 ",(0,t.jsx)(r.code,{children:"Server"})," \u6267\u884c ",(0,t.jsx)(r.code,{children:"Start"})," \u4e4b\u540e\u4fbf\u4e0d\u80fd\u518d\u4fee\u6539\uff0c\u9632\u6b62\u4ea7\u751f\u5e76\u53d1\u5b89\u5168\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(r.h3,{id:"setconfigwithmap-\u65b9\u6cd5",children:[(0,t.jsx)(r.code,{children:"SetConfigWithMap"})," \u65b9\u6cd5"]}),"\n",(0,t.jsxs)(r.p,{children:["\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"SetConfigWithMap"})," \u65b9\u6cd5\u901a\u8fc7 ",(0,t.jsx)(r.code,{children:"Key-Value"})," \u952e\u503c\u5bf9\u6765\u8bbe\u7f6e/\u4fee\u6539 ",(0,t.jsx)(r.code,{children:"Server"})," \u7684\u7279\u5b9a\u914d\u7f6e\uff0c\u5176\u4f59\u7684\u914d\u7f6e\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u5373\u53ef\u3002\u5176\u4e2d ",(0,t.jsx)(r.code,{children:"Key"})," \u7684\u540d\u79f0\u5373\u662f ",(0,t.jsx)(r.code,{children:"ServerConfig"})," \u8fd9\u4e2a ",(0,t.jsx)(r.code,{children:"struct"})," \u4e2d\u7684\u5c5e\u6027\u540d\u79f0\uff0c\u5e76\u4e14\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff0c\u5355\u8bcd\u95f4\u4e5f\u652f\u6301\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"-"}),"/ ",(0,t.jsx)(r.code,{children:"_"}),"/ ",(0,t.jsx)(r.code,{children:"\u7a7a\u683c"})," \u7b26\u53f7\u8fde\u63a5\uff0c\u5177\u4f53\u53ef\u53c2\u8003 ",(0,t.jsx)(r.a,{href:"/2.7.x/docs/core/gconv-struct",children:"\u7c7b\u578b\u8f6c\u6362-Struct\u8f6c\u6362"})," \u7ae0\u8282\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"\u7b80\u5355\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'s := g.Server()\ns.SetConfigWithMap(g.Map{\n    "Address":    ":80",\n    "ServerRoot": "/var/www/MyServerRoot",\n})\ns.Run()\n'})}),"\n",(0,t.jsxs)(r.p,{children:["\u5176\u4e2d ",(0,t.jsx)(r.code,{children:"ServerRoot"})," \u7684\u952e\u540d\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"serverRoot"}),", ",(0,t.jsx)(r.code,{children:"server-root"}),", ",(0,t.jsx)(r.code,{children:"server_root"}),", ",(0,t.jsx)(r.code,{children:"server root"}),"\uff0c\u5176\u4ed6\u914d\u7f6e\u5c5e\u6027\u4ee5\u6b64\u7c7b\u63a8\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"\u4e00\u4e2a\u6bd4\u8f83\u5b8c\u6574\u7684\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'s := g.Server()\ns.SetConfigWithMap(g.Map{\n    "address":          ":80",\n    "serverRoot":       "/var/www/Server",\n    "indexFiles":       g.Slice{"index.html", "main.html"},\n    "accessLogEnabled": true,\n    "errorLogEnabled":  true,\n    "pprofEnabled":     true,\n    "logPath":          "/var/log/ServerLog",\n    "sessionIdName":    "MySessionId",\n    "sessionPath":      "/tmp/MySessionStoragePath",\n    "sessionMaxAge":    24 * time.Hour,\n    "dumpRouterMap":    false,\n})\ns.Run()\n'})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var o=n(296540);const t={},i=o.createContext(t);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);
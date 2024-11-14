"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[81509],{220330:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Redis-KeyValue","title":"Session-Redis-KeyValue","description":"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528Redis\u8fdb\u884cSession\u7684KeyValue\u5b58\u50a8\uff0c\u4ee5\u89e3\u51b3\u591a\u8282\u70b9\u90e8\u7f72\u4e0bSession\u5171\u4eab\u7684\u95ee\u9898\u3002\u901a\u8fc7\u4f7f\u7528StorageRedis\u5bf9\u8c61\u5b9e\u73b0Redis\u5b58\u50a8\uff0c\u63d0\u9ad8\u6267\u884c\u6548\u7387\uff0c\u9002\u5408\u5355\u4e2a\u7528\u6237Session\u6570\u636e\u91cf\u8f83\u5c0f\u7684\u573a\u666f\uff0c\u5e76\u63d0\u4f9b\u5177\u4f53\u7684\u4f7f\u7528\u793a\u4f8b\u548c\u8bf4\u660e\u3002\u5728\u793a\u4f8b\u4e2d\uff0cSession\u8fc7\u671f\u65f6\u95f4\u8bbe\u4e3a1\u5206\u949f\uff0c\u5c55\u793a\u4e86\u8bbe\u7f6e\u3001\u83b7\u53d6\u3001\u5220\u9664Session\u7684\u65b9\u6cd5\u53caRedis\u4e2dSession\u6570\u636e\u7684\u6062\u590d\u529f\u80fd\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Redis-KeyValue.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/Session","slug":"/docs/web/session-redis-key-value","permalink":"/2.7.x/docs/web/session-redis-key-value","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Redis-KeyValue.md","tags":[],"version":"2.7.x","sidebarPosition":2,"frontMatter":{"slug":"/docs/web/session-redis-key-value","title":"Session-Redis-KeyValue","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","Redis","Session","KeyValue","\u591a\u8282\u70b9\u90e8\u7f72","StorageRedis","\u5185\u5b58+Redis","JSON\u5e8f\u5217\u5316","HashTable Storage"],"description":"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528Redis\u8fdb\u884cSession\u7684KeyValue\u5b58\u50a8\uff0c\u4ee5\u89e3\u51b3\u591a\u8282\u70b9\u90e8\u7f72\u4e0bSession\u5171\u4eab\u7684\u95ee\u9898\u3002\u901a\u8fc7\u4f7f\u7528StorageRedis\u5bf9\u8c61\u5b9e\u73b0Redis\u5b58\u50a8\uff0c\u63d0\u9ad8\u6267\u884c\u6548\u7387\uff0c\u9002\u5408\u5355\u4e2a\u7528\u6237Session\u6570\u636e\u91cf\u8f83\u5c0f\u7684\u573a\u666f\uff0c\u5e76\u63d0\u4f9b\u5177\u4f53\u7684\u4f7f\u7528\u793a\u4f8b\u548c\u8bf4\u660e\u3002\u5728\u793a\u4f8b\u4e2d\uff0cSession\u8fc7\u671f\u65f6\u95f4\u8bbe\u4e3a1\u5206\u949f\uff0c\u5c55\u793a\u4e86\u8bbe\u7f6e\u3001\u83b7\u53d6\u3001\u5220\u9664Session\u7684\u65b9\u6cd5\u53caRedis\u4e2dSession\u6570\u636e\u7684\u6062\u590d\u529f\u80fd\u3002"},"sidebar":"mainSidebar","previous":{"title":"Session-Memory","permalink":"/2.7.x/docs/web/session-memory"},"next":{"title":"Session-Redis-HashTable","permalink":"/2.7.x/docs/web/session-redis-hash-table"}}');var o=i(474848),d=i(28453);const t={slug:"/docs/web/session-redis-key-value",title:"Session-Redis-KeyValue",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","Redis","Session","KeyValue","\u591a\u8282\u70b9\u90e8\u7f72","StorageRedis","\u5185\u5b58+Redis","JSON\u5e8f\u5217\u5316","HashTable Storage"],description:"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528Redis\u8fdb\u884cSession\u7684KeyValue\u5b58\u50a8\uff0c\u4ee5\u89e3\u51b3\u591a\u8282\u70b9\u90e8\u7f72\u4e0bSession\u5171\u4eab\u7684\u95ee\u9898\u3002\u901a\u8fc7\u4f7f\u7528StorageRedis\u5bf9\u8c61\u5b9e\u73b0Redis\u5b58\u50a8\uff0c\u63d0\u9ad8\u6267\u884c\u6548\u7387\uff0c\u9002\u5408\u5355\u4e2a\u7528\u6237Session\u6570\u636e\u91cf\u8f83\u5c0f\u7684\u573a\u666f\uff0c\u5e76\u63d0\u4f9b\u5177\u4f53\u7684\u4f7f\u7528\u793a\u4f8b\u548c\u8bf4\u660e\u3002\u5728\u793a\u4f8b\u4e2d\uff0cSession\u8fc7\u671f\u65f6\u95f4\u8bbe\u4e3a1\u5206\u949f\uff0c\u5c55\u793a\u4e86\u8bbe\u7f6e\u3001\u83b7\u53d6\u3001\u5220\u9664Session\u7684\u65b9\u6cd5\u53caRedis\u4e2dSession\u6570\u636e\u7684\u6062\u590d\u529f\u80fd\u3002"},r=void 0,c={},l=[{value:"Redis KeyValue Storage",id:"redis-keyvalue-storage",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"redis-keyvalue-storage",children:"Redis KeyValue Storage"}),"\n",(0,o.jsxs)(s.p,{children:["\u6587\u4ef6\u5b58\u50a8\u7684\u65b9\u5f0f\u5728\u5355\u8282\u70b9\u7684\u573a\u666f\u4e0b\u975e\u5e38\u4e0d\u9519\uff0c\u4f46\u662f\u6d89\u53ca\u5230\u5bf9\u5e94\u7528\u8fdb\u884c\u591a\u8282\u70b9\u90e8\u7f72\u7684\u573a\u666f\u4e0b\uff0c\u5404\u4e2a\u8282\u70b9\u7684 ",(0,o.jsx)(s.code,{children:"Session"})," \u65e0\u6cd5\u5171\u4eab\uff0c\u56e0\u6b64\u9700\u8981\u5c06 ",(0,o.jsx)(s.code,{children:"Session"})," \u5b58\u50a8\u5355\u72ec\u5265\u79bb\u51fa\u6765\u7ba1\u7406\uff0c ",(0,o.jsx)(s.code,{children:"Redis"})," \u670d\u52a1\u5668\u662f\u6bd4\u8f83\u5e38\u89c1\u7684\u4e00\u4e2a\u9009\u62e9\u3002"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"gsession"})," \u7684 ",(0,o.jsx)(s.code,{children:"Redis"})," \u5b58\u50a8\u4f7f\u7528 ",(0,o.jsx)(s.code,{children:"StorageRedis"})," \u5bf9\u8c61\u5b9e\u73b0\uff0c\u4e0e\u6587\u4ef6\u5b58\u50a8\u6bd4\u8f83\u7c7b\u4f3c\uff0c\u4e3a\u4e86\u63d0\u9ad8\u6267\u884c\u6548\u7387\uff0c\u4e5f\u662f\u91c7\u7528\u4e86 ",(0,o.jsx)(s.code,{children:"\u5185\u5b58+Redis"})," \u7684\u65b9\u5f0f\u3002\u4e0e\u6587\u4ef6\u5b58\u50a8\u552f\u4e00\u4e0d\u540c\u7684\u662f\uff0c\u5728\u6bcf\u4e00\u6b21\u8bf7\u6c42\u4e2d\u5982\u679c\u9700\u8981\u5bf9 ",(0,o.jsx)(s.code,{children:"Session"})," \u8fdb\u884c\u64cd\u4f5c\u65f6\uff0c\u5c06\u4f1a\u4ece ",(0,o.jsx)(s.code,{children:"Redis"})," \u4e2d\u62c9\u53d6\u4e00\u6b21\u6700\u65b0\u7684 ",(0,o.jsx)(s.code,{children:"Session"})," \u6570\u636e\uff08\u800c\u6587\u4ef6\u5b58\u50a8\u53ea\u4f1a\u5728 ",(0,o.jsx)(s.code,{children:"Session"})," \u4e0d\u5b58\u5728\u65f6\u8bfb\u53d6\u4e00\u6b21\u6587\u4ef6\uff09\u3002\u5728\u6bcf\u4e00\u6b21\u8bf7\u6c42\u7ed3\u675f\u4e4b\u540e\uff0c\u5c06\u5168\u91cf\u7684 ",(0,o.jsx)(s.code,{children:"Session"})," \u6570\u636e\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"JSON"})," \u5e8f\u5217\u5316\u4e4b\u540e\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"KeyValue"})," \u65b9\u5f0f\u66f4\u65b0\u5230 ",(0,o.jsx)(s.code,{children:"Redis"})," \u670d\u52a1\u4e2d\u3002"]}),"\n",(0,o.jsx)(s.admonition,{type:"tip",children:(0,o.jsxs)(s.p,{children:["\u5982\u679c\u5355\u4e2a\u7528\u6237\u4e0b(\u4ee5\u7528\u6237\u7ef4\u5ea6\u4e3e\u4f8b) ",(0,o.jsx)(s.code,{children:"Session"})," \u6570\u636e\u91cf\u4e0d\u5927\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u90fd\u63a8\u8350\u4f7f\u7528\u8fd9\u79cd ",(0,o.jsx)(s.code,{children:"Storage"})," \u65b9\u5f0f\u3002\u5982\u679c\u5355\u4e2a\u7528\u6237 ",(0,o.jsx)(s.code,{children:"Session"})," \u6570\u636e\u91cf\u8f83\u5927\uff08\u4f8b\u5982 ",(0,o.jsx)(s.code,{children:">10MB"}),"\uff09\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,o.jsx)(s.code,{children:"HashTable"})," \u7684 ",(0,o.jsx)(s.code,{children:"Storage"})," \u65b9\u5f0f\uff1a ",(0,o.jsx)(s.a,{href:"/2.7.x/docs/web/session-redis-hash-table",children:"Session-Redis-HashTable"})]})}),"\n",(0,o.jsx)(s.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gsession"\n    "github.com/gogf/gf/v2/os/gtime"\n    "time"\n)\n\nfunc main() {\n    s := g.Server()\n    s.SetSessionMaxAge(time.Minute)\n    s.SetSessionStorage(gsession.NewStorageRedis(g.Redis()))\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/set", func(r *ghttp.Request) {\n            r.Session.Set("time", gtime.Timestamp())\n            r.Response.Write("ok")\n        })\n        group.ALL("/get", func(r *ghttp.Request) {\n            r.Response.Write(r.Session.Data())\n        })\n        group.ALL("/del", func(r *ghttp.Request) {\n            _ = r.Session.RemoveAll()\n            r.Response.Write("ok")\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,o.jsxs)(s.p,{children:["\u5728\u8be5\u5b9e\u4f8b\u4e2d\uff0c\u4e3a\u4e86\u65b9\u4fbf\u89c2\u5bdf\u8fc7\u671f\u5931\u6548\uff0c\u6211\u4eec\u5c06 ",(0,o.jsx)(s.code,{children:"Session"})," \u7684\u8fc7\u671f\u65f6\u95f4\u8bbe\u7f6e\u4e3a ",(0,o.jsx)(s.code,{children:"1\u5206\u949f"}),"\u3002\u6267\u884c\u540e\uff0c"]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\u9996\u5148\uff0c\u8bbf\u95ee ",(0,o.jsx)(s.a,{href:"http://127.0.0.1:8199/set",children:"http://127.0.0.1:8199/set"})," \u8bbe\u7f6e\u4e00\u4e2a ",(0,o.jsx)(s.code,{children:"Session"})," \u53d8\u91cf\uff1b"]}),"\n",(0,o.jsxs)(s.li,{children:["\u968f\u540e\uff0c\u8bbf\u95ee ",(0,o.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53ef\u4ee5\u770b\u5230\u8be5 ",(0,o.jsx)(s.code,{children:"Session"})," \u53d8\u91cf\u5df2\u7ecf\u8bbe\u7f6e\u5e76\u6210\u529f\u83b7\u53d6\uff1b"]}),"\n",(0,o.jsxs)(s.li,{children:["\u63a5\u7740\uff0c\u6211\u4eec\u505c\u6b62\u7a0b\u5e8f\uff0c\u5e76\u91cd\u65b0\u542f\u52a8\uff0c\u518d\u6b21\u8bbf\u95ee ",(0,o.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"}),"\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,o.jsx)(s.code,{children:"Session"})," \u53d8\u91cf\u5df2\u7ecf\u4ece ",(0,o.jsx)(s.code,{children:"Redis"})," \u5b58\u50a8\u4e2d\u6062\u590d\uff1b\u5982\u679c\u6211\u4eec\u624b\u52a8\u4fee\u6539 ",(0,o.jsx)(s.code,{children:"Redis"})," \u4e2d\u7684\u5bf9\u5e94\u952e\u503c\u6570\u636e\uff0c\u9875\u9762\u5237\u65b0\u65f6\u4e5f\u4f1a\u8bfb\u53d6\u5230\u6700\u65b0\u7684\u503c\uff1b"]}),"\n",(0,o.jsxs)(s.li,{children:["\u7b49\u5f851\u5206\u949f\u540e\uff0c\u518d\u6b21\u8bbf\u95ee ",(0,o.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u65e0\u6cd5\u83b7\u53d6\u8be5 ",(0,o.jsx)(s.code,{children:"Session"}),"\uff0c\u56e0\u4e3a\u8be5 ",(0,o.jsx)(s.code,{children:"Session"})," \u5df2\u7ecf\u8fc7\u671f\uff1b"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>t,x:()=>r});var n=i(296540);const o={},d=n.createContext(o);function t(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);
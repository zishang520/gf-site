"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[6093],{975713:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406","title":"\u7f13\u5b58\u7ba1\u7406","description":"GoFrame\u6846\u67b6\u4e2d\u7684gcache\u6a21\u5757\uff0c\u5b83\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u7f13\u5b58\u7ba1\u7406\u529f\u80fd\uff0c\u5305\u62ec\u5185\u5b58\u7f13\u5b58\u9002\u914d\u5b9e\u73b0\u3002gcache\u652f\u6301\u81ea\u5b9a\u4e49\u952e\u540d\u7684\u6570\u636e\u7c7b\u578b\u548c\u5b58\u50a8\u4efb\u610f\u7684\u6570\u636e\u7c7b\u578b\uff0c\u901a\u8fc7\u6cdb\u578b\u5bf9\u8c61\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\uff0c\u907f\u514d\u76f4\u63a5\u4f7f\u7528\u7c7b\u578b\u65ad\u8a00\u5e26\u6765\u7684\u98ce\u9669\u3002\u6b64\u5916\uff0cgcache\u8fd8\u63d0\u4f9b\u4e86\u7f13\u5b58\u8fc7\u671f\u65f6\u95f4\u8bbe\u7f6e\uff0c\u7075\u6d3b\u9002\u7528\u4e8e\u5404\u79cd\u7f13\u5b58\u5e94\u7528\u573a\u666f\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406","slug":"/docs/core/gcache","permalink":"/en/2.7.x/docs/core/gcache","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406.md","tags":[],"version":"2.7.x","sidebarPosition":8,"frontMatter":{"slug":"/docs/core/gcache","title":"\u7f13\u5b58\u7ba1\u7406","sidebar_position":8,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","gcache","\u7f13\u5b58\u7ba1\u7406","\u5185\u5b58\u7f13\u5b58","\u7f13\u5b58\u9002\u914d","\u952e\u503c\u5bf9","\u63a5\u53e3\u8bbe\u8ba1","\u6570\u636e\u7c7b\u578b\u8f6c\u6362","\u9002\u914d\u5668\u63a5\u53e3"],"description":"GoFrame\u6846\u67b6\u4e2d\u7684gcache\u6a21\u5757\uff0c\u5b83\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u7f13\u5b58\u7ba1\u7406\u529f\u80fd\uff0c\u5305\u62ec\u5185\u5b58\u7f13\u5b58\u9002\u914d\u5b9e\u73b0\u3002gcache\u652f\u6301\u81ea\u5b9a\u4e49\u952e\u540d\u7684\u6570\u636e\u7c7b\u578b\u548c\u5b58\u50a8\u4efb\u610f\u7684\u6570\u636e\u7c7b\u578b\uff0c\u901a\u8fc7\u6cdb\u578b\u5bf9\u8c61\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\uff0c\u907f\u514d\u76f4\u63a5\u4f7f\u7528\u7c7b\u578b\u65ad\u8a00\u5e26\u6765\u7684\u98ce\u9669\u3002\u6b64\u5916\uff0cgcache\u8fd8\u63d0\u4f9b\u4e86\u7f13\u5b58\u8fc7\u671f\u65f6\u95f4\u8bbe\u7f6e\uff0c\u7075\u6d3b\u9002\u7528\u4e8e\u5404\u79cd\u7f13\u5b58\u5e94\u7528\u573a\u666f\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5","permalink":"/en/2.7.x/docs/core/gconv-benchmark"},"next":{"title":"\u7f13\u5b58\u7ba1\u7406-\u63a5\u53e3\u8bbe\u8ba1","permalink":"/en/2.7.x/docs/core/gcache-interface"}}');var t=c(474848),s=c(28453),i=c(103514);const o={slug:"/docs/core/gcache",title:"\u7f13\u5b58\u7ba1\u7406",sidebar_position:8,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","gcache","\u7f13\u5b58\u7ba1\u7406","\u5185\u5b58\u7f13\u5b58","\u7f13\u5b58\u9002\u914d","\u952e\u503c\u5bf9","\u63a5\u53e3\u8bbe\u8ba1","\u6570\u636e\u7c7b\u578b\u8f6c\u6362","\u9002\u914d\u5668\u63a5\u53e3"],description:"GoFrame\u6846\u67b6\u4e2d\u7684gcache\u6a21\u5757\uff0c\u5b83\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u7f13\u5b58\u7ba1\u7406\u529f\u80fd\uff0c\u5305\u62ec\u5185\u5b58\u7f13\u5b58\u9002\u914d\u5b9e\u73b0\u3002gcache\u652f\u6301\u81ea\u5b9a\u4e49\u952e\u540d\u7684\u6570\u636e\u7c7b\u578b\u548c\u5b58\u50a8\u4efb\u610f\u7684\u6570\u636e\u7c7b\u578b\uff0c\u901a\u8fc7\u6cdb\u578b\u5bf9\u8c61\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\uff0c\u907f\u514d\u76f4\u63a5\u4f7f\u7528\u7c7b\u578b\u65ad\u8a00\u5e26\u6765\u7684\u98ce\u9669\u3002\u6b64\u5916\uff0cgcache\u8fd8\u63d0\u4f9b\u4e86\u7f13\u5b58\u8fc7\u671f\u65f6\u95f4\u8bbe\u7f6e\uff0c\u7075\u6d3b\u9002\u7528\u4e8e\u5404\u79cd\u7f13\u5b58\u5e94\u7528\u573a\u666f\u3002"},l=void 0,a={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5173\u4e8e\u952e\u540d\u6570\u636e\u7c7b\u578b",id:"\u5173\u4e8e\u952e\u540d\u6570\u636e\u7c7b\u578b",level:3},{value:"\u5173\u4e8e\u83b7\u53d6\u5bf9\u8c61\u952e\u503c",id:"\u5173\u4e8e\u83b7\u53d6\u5bf9\u8c61\u952e\u503c",level:3},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"gcache"})," \u662f\u63d0\u4f9b\u7edf\u4e00\u7684\u7f13\u5b58\u7ba1\u7406\u6a21\u5757\uff0c\u63d0\u4f9b\u4e86\u5f00\u53d1\u8005\u53ef\u81ea\u5b9a\u4e49\u7075\u6d3b\u63a5\u5165\u7684\u7f13\u5b58\u9002\u914d\u63a5\u53e3\uff0c\u5e76\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u9ad8\u901f\u5185\u5b58\u7f13\u5b58\u9002\u914d\u5b9e\u73b0\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/gcache"\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcache",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcache"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7b80\u8981\u4ecb\u7ecd\uff1a"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"gcache"})," \u9ed8\u8ba4\u63d0\u4f9b\u9ed8\u8ba4\u7684\u9ad8\u901f\u5185\u5b58\u7f13\u5b58\u5bf9\u8c61\uff0c\u53ef\u4ee5\u901a\u8fc7\u5305\u65b9\u6cd5\u64cd\u4f5c\u5185\u5b58\u7f13\u5b58\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"New"})," \u65b9\u6cd5\u521b\u5efa\u5185\u5b58\u7f13\u5b58\u5bf9\u8c61\u3002\u5728\u901a\u8fc7\u5305\u65b9\u6cd5\u4f7f\u7528\u7f13\u5b58\u529f\u80fd\u65f6\uff0c\u64cd\u4f5c\u7684\u662f ",(0,t.jsx)(n.code,{children:"gcache"})," \u9ed8\u8ba4\u63d0\u4f9b\u7684\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"gcache.Cache"})," \u5bf9\u8c61\uff0c\u5177\u6709\u5168\u5c40\u6027\uff0c\u56e0\u6b64\u5728\u4f7f\u7528\u65f6\u6ce8\u610f\u5168\u5c40\u952e\u540d\u7684\u8986\u76d6\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"gcache"})," \u4f7f\u7528\u7684\u952e\u540d\u7c7b\u578b\u662f ",(0,t.jsx)(n.code,{children:"interface{}"}),"\uff0c\u800c\u4e0d\u662f ",(0,t.jsx)(n.code,{children:"string"})," \u7c7b\u578b\uff0c\u8fd9\u610f\u5473\u7740\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u7c7b\u578b\u7684\u53d8\u91cf\u4f5c\u4e3a\u952e\u540d\uff0c\u4f46\u5927\u591a\u6570\u65f6\u5019\u5efa\u8bae\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"string"})," \u6216\u8005 ",(0,t.jsx)(n.code,{children:"[]byte"})," \u4f5c\u4e3a\u952e\u540d\uff0c\u5e76\u4e14\u7edf\u4e00\u952e\u540d\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4ee5\u4fbf\u7ef4\u62a4\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"gcache"})," \u5b58\u50a8\u7684\u952e\u503c\u7c7b\u578b\u662f ",(0,t.jsx)(n.code,{children:"interface{}"}),"\uff0c\u4e5f\u5c31\u662f\u8bf4\u53ef\u4ee5\u5b58\u50a8\u4efb\u610f\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5f53\u83b7\u53d6\u6570\u636e\u65f6\u8fd4\u56de\u7684\u4e5f\u662f ",(0,t.jsx)(n.code,{children:"interface{}"})," \u7c7b\u578b\uff0c\u82e5\u9700\u8981\u8f6c\u6362\u4e3a\u5176\u4ed6\u7684\u7c7b\u578b\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"gcache"})," \u7684 ",(0,t.jsx)(n.code,{children:"Get*"})," \u65b9\u6cd5\u4fbf\u6377\u83b7\u53d6\u5e38\u89c1\u7c7b\u578b\u3002\u6ce8\u610f\uff0c\u5982\u679c\u60a8\u786e\u5b9a\u77e5\u9053\u81ea\u5df1\u4f7f\u7528\u7684\u662f\u5185\u5b58\u7f13\u5b58\uff0c\u90a3\u4e48\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u65ad\u8a00\u65b9\u5f0f\u5bf9\u8fd4\u56de\u7684 ",(0,t.jsx)(n.code,{children:"interface{}"})," \u53d8\u91cf\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\uff0c\u5426\u5219\u5efa\u8bae\u901a\u8fc7\u83b7\u53d6\u5230\u7684\u6cdb\u578b\u5bf9\u8c61\u5bf9\u5e94\u65b9\u6cd5\u5b8c\u6210\u7c7b\u578b\u8f6c\u6362\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u53e6\u5916\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c ",(0,t.jsx)(n.code,{children:"gcache"})," \u7684\u7f13\u5b58\u8fc7\u671f\u65f6\u95f4\u53c2\u6570 ",(0,t.jsx)(n.code,{children:"duration"})," \u7684\u7c7b\u578b\u4e3a ",(0,t.jsx)(n.code,{children:"time.Duration"})," \u7c7b\u578b\uff0c\u5728 ",(0,t.jsx)(n.code,{children:"Set"})," \u7f13\u5b58\u53d8\u91cf\u65f6\uff0c\u5982\u679c\u7f13\u5b58\u65f6\u95f4\u53c2\u6570 ",(0,t.jsx)(n.code,{children:"duration = 0"})," \u8868\u793a\u4e0d\u8fc7\u671f\uff0c ",(0,t.jsx)(n.code,{children:"duration < 0"})," \u8868\u793a\u7acb\u5373\u8fc7\u671f\uff0c ",(0,t.jsx)(n.code,{children:"duration > 0"})," \u8868\u793a\u8d85\u65f6\u8fc7\u671f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsx)(n.h3,{id:"\u5173\u4e8e\u952e\u540d\u6570\u636e\u7c7b\u578b",children:"\u5173\u4e8e\u952e\u540d\u6570\u636e\u7c7b\u578b"}),"\n",(0,t.jsxs)(n.p,{children:["\u5927\u5bb6\u53ef\u4ee5\u53d1\u73b0\u7f13\u5b58\u7ec4\u4ef6\u4e2d\u5173\u4e8e\u952e\u503c\u5bf9\u7684\u6570\u636e\u7c7b\u578b\u90fd\u662f ",(0,t.jsx)(n.code,{children:"interface{}"}),"\uff0c\u8fd9\u79cd\u8bbe\u8ba1\u4e3b\u8981\u662f\u4e3a\u4e86\u8003\u8651\u901a\u7528\u6027\u548c\u6613\u7528\u6027\uff0c\u4f46\u662f\u4f7f\u7528\u4e0a\u9700\u8981\u6ce8\u610f ",(0,t.jsx)(n.code,{children:"interface{}"})," \u7684\u6bd4\u8f83\uff1a\u53ea\u6709 ",(0,t.jsx)(n.strong,{children:"\u6570\u636e"})," \u548c ",(0,t.jsx)(n.strong,{children:"\u7c7b\u578b"})," \u90fd\u76f8\u7b49\u624d\u7b97\u771f\u6b63\u5339\u914d\u3002\u6211\u4eec\u6765\u770b\u4e2a\u4f8b\u5b50\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/os/gcache"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx           = gctx.New()\n        key1  int32   = 1\n        key2  float64 = 1\n        value         = `value`\n    )\n    _ = gcache.Set(ctx, key1, value, 0)\n    fmt.Println(gcache.MustGet(ctx, key1).Val())\n    fmt.Println(gcache.MustGet(ctx, key2).Val())\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-value",children:"<nil>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u867d\u7136 ",(0,t.jsx)(n.code,{children:"key1"})," \u548c ",(0,t.jsx)(n.code,{children:"key2"})," \u7684\u6570\u503c\u90fd\u662f\u76f8\u540c\u7684\uff0c\u4f46\u662f\u4e24\u8005\u7c7b\u578b\u4e0d\u540c\uff0c\u56e0\u6b64\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"key2"})," \u65e0\u6cd5\u83b7\u53d6\u5230\u952e\u503c\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5173\u4e8e\u83b7\u53d6\u5bf9\u8c61\u952e\u503c",children:"\u5173\u4e8e\u83b7\u53d6\u5bf9\u8c61\u952e\u503c"}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e\u952e\u503c\u7684\u7c7b\u578b\u4e5f\u662f ",(0,t.jsx)(n.code,{children:"interface{}"}),"\uff0c\u5f80\u5f80\u5728\u83b7\u53d6\u540e\u4f1a\u901a\u8fc7\u7c7b\u578b\u8f6c\u6362\u4e3a\u9700\u8981\u7684\u6570\u636e\u7c7b\u578b\u3002\u5e38\u89c1\u7684\u7c7b\u578b\u8f6c\u6362\u662f\u76f4\u63a5\u4f7f\u7528\u7c7b\u578b\u65ad\u8a00\uff0c\u8fd9\u79cd\u505a\u6cd5\u6709\u79cd\u98ce\u9669\uff0c\u5c31\u662f\u7531\u4e8e ",(0,t.jsx)(n.code,{children:"gcache"})," \u7ec4\u4ef6\u91c7\u7528 ",(0,t.jsx)(n.strong,{children:"\u9002\u914d\u5668\u63a5\u53e3\u8bbe\u8ba1\u6a21\u5f0f"}),"\uff0c\u56e0\u6b64\u5e95\u5c42\u7684\u5b9e\u73b0\u4e0a\uff08\u9664\u4e86\u9ed8\u8ba4\u7684\u5185\u5b58\u9002\u914d\u5668\uff09\u5f80\u5f80\u4f1a\u6539\u53d8\u539f\u6709\u7684\u6570\u636e\u7c7b\u578b\uff08\u975e\u5185\u5b58\u5b9e\u73b0\u5f80\u5f80\u90fd\u4f1a\u6d89\u53ca\u5230\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u5b58\u50a8\uff09\uff0c\u56e0\u6b64\u4e0d\u63a8\u8350\u5927\u5bb6\u76f4\u63a5\u4f7f\u7528\u7c7b\u578b\u65ad\u8a00\u8fdb\u884c\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u56e0\u6b64\u7f13\u5b58\u7ec4\u4ef6\u5728\u83b7\u53d6\u952e\u503c\u4e0a\u505a\u4e86\u6539\u8fdb\uff0c\u5e76\u4e0d\u662f\u76f4\u63a5\u8fd4\u56de ",(0,t.jsx)(n.code,{children:"interface{}"})," \u7684\u952e\u503c\u7c7b\u578b\uff0c\u800c\u662f\u4ee5\u6846\u67b6\u6cdb\u578b ",(0,t.jsx)(n.code,{children:"*gvar.Var"})," \u5bf9\u8c61\u8fd4\u56de\uff0c\u5f00\u53d1\u8005\u6839\u636e\u4e1a\u52a1\u573a\u666f\u8f6c\u6362\u4e3a\u6240\u9700\u7684\u6570\u636e\u7c7b\u578b\u3002\u7279\u522b\u662f\u9488\u5bf9\u4e8e\u5bf9\u8c61\u7f13\u5b58\u5b58\u50a8\u548c\u8bfb\u53d6\u7684\u573a\u666f\u7279\u522b\u6709\u7528\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u793a\u4f8b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/os/gcache"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    type User struct {\n        Id   int\n        Name string\n        Site string\n    }\n    var (\n        ctx   = gctx.New()\n        user  *User\n        key   = `UserKey`\n        value = &User{\n            Id:   1,\n            Name: "GoFrame",\n            Site: "https://goframe.org",\n        }\n    )\n    err := gcache.Set(ctx, key, value, 0)\n    if err != nil {\n        panic(err)\n    }\n    v, err := gcache.Get(ctx, key)\n    if err != nil {\n        panic(err)\n    }\n    if err = v.Scan(&user); err != nil {\n        panic(err)\n    }\n    fmt.Printf(`%#v`, user)\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'&main.User{Id:1, Name:"GoFrame", Site:"https://goframe.org"}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,t.jsx)(i.A,{})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},103514:(e,n,c)=>{c.d(n,{A:()=>j});c(296540);var r=c(634164),t=c(944718),s=c(328774),i=c(853465),o=c(316654),l=c(721312),a=c(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=c(474848);function g(e){let{href:n,children:c}=e;return(0,h.jsx)(s.A,{href:n,className:(0,r.A)("card padding--lg",d.cardContainer),children:c})}function u(e){let{href:n,icon:c,title:t,description:s}=e;return(0,h.jsxs)(g,{href:n,children:[(0,h.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:t,children:[c," ",t]}),s&&(0,h.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function x(e){let{item:n}=e;const c=(0,t.Nr)(n),r=function(){const{selectMessage:e}=(0,i.W)();return n=>e(n,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return c?(0,h.jsx)(u,{href:c,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??r(n.items.length)}):null}function m(e){let{item:n}=e;const c=(0,o.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,t.cC)(n.docId??void 0);return(0,h.jsx)(u,{href:n.href,icon:c,title:n.label,description:n.description??r?.description})}function f(e){let{item:n}=e;switch(n.type){case"link":return(0,h.jsx)(m,{item:n});case"category":return(0,h.jsx)(x,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function p(e){let{className:n}=e;const c=(0,t.$S)();return(0,h.jsx)(j,{items:c.items,className:n})}function j(e){const{items:n,className:c}=e;if(!n)return(0,h.jsx)(p,{...e});const s=(0,t.d1)(n);return(0,h.jsx)("section",{className:(0,r.A)("row",c),children:s.map(((e,n)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(f,{item:e})},n)))})}},853465:(e,n,c)=>{c.d(n,{W:()=>a});var r=c(296540),t=c(144586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((n=>e.includes(n)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,t.A)();return(0,r.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:i(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),o}}),[e])}function a(){const e=l();return{selectMessage:(n,c)=>function(e,n,c){const r=e.split("|");if(1===r.length)return r[0];r.length>c.pluralForms.length&&console.error(`For locale=${c.locale}, a maximum of ${c.pluralForms.length} plural forms are expected (${c.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const t=c.select(n),s=c.pluralForms.indexOf(t);return r[Math.min(s,r.length-1)]}(c,n,e)}}},28453:(e,n,c)=>{c.d(n,{R:()=>i,x:()=>o});var r=c(296540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
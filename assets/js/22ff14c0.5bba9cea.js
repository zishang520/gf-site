"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[4801],{296646:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});const c=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58","title":"\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406","slug":"/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58","permalink":"/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58.md","tags":[],"version":"2.6.x","sidebarPosition":2,"frontMatter":{"title":"\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u7f13\u5b58\u7ba1\u7406-\u5185\u5b58\u7f13\u5b58","permalink":"/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-\u5185\u5b58\u7f13\u5b58"},"next":{"title":"\u7f13\u5b58\u7ba1\u7406-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-\u65b9\u6cd5\u4ecb\u7ecd"}}');var d=i(474848),r=i(28453);const s={title:"\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58",sidebar_position:2,hide_title:!0},t=void 0,o={},l=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5173\u4e8e <code>Clear/Size</code> \u7b49\u65b9\u6cd5",id:"\u5173\u4e8e-clearsize-\u7b49\u65b9\u6cd5",level:3},{value:"\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u7684 <code>redis db</code> \u533a\u5206\u4e1a\u52a1\u7f13\u5b58\u7c7b\u578b",id:"\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u7684-redis-db-\u533a\u5206\u4e1a\u52a1\u7f13\u5b58\u7c7b\u578b",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,d.jsxs)(n.p,{children:["\u7f13\u5b58\u7ec4\u4ef6\u540c\u65f6\u63d0\u4f9b\u4e86 ",(0,d.jsx)(n.code,{children:"gcache"})," \u7684 ",(0,d.jsx)(n.code,{children:"Redis"})," \u7f13\u5b58\u9002\u914d\u5b9e\u73b0\u3002 ",(0,d.jsx)(n.code,{children:"Redis"})," \u7f13\u5b58\u5728\u591a\u8282\u70b9\u4fdd\u8bc1\u7f13\u5b58\u7684\u6570\u636e\u4e00\u81f4\u6027\u65f6\u975e\u5e38\u6709\u7528\uff0c\u7279\u522b\u662f ",(0,d.jsx)(n.code,{children:"Session"})," \u5171\u4eab\u3001\u6570\u636e\u5e93\u67e5\u8be2\u7f13\u5b58\u7b49\u573a\u666f\u4e2d\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'func ExampleCache_SetAdapter() {\n    var (\n        err         error\n        ctx         = gctx.New()\n        cache       = gcache.New()\n        redisConfig = &gredis.Config{\n            Address: "127.0.0.1:6379",\n            Db:      9,\n        }\n        cacheKey   = `key`\n        cacheValue = `value`\n    )\n    // Create redis client object.\n    redis, err := gredis.New(redisConfig)\n    if err != nil {\n        panic(err)\n    }\n    // Create redis cache adapter and set it to cache object.\n    cache.SetAdapter(gcache.NewAdapterRedis(redis))\n\n    // Set and Get using cache object.\n    err = cache.Set(ctx, cacheKey, cacheValue, time.Second)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(cache.MustGet(ctx, cacheKey).String())\n\n    // Get using redis client.\n    fmt.Println(redis.MustDo(ctx, "GET", cacheKey).String())\n\n    // Output:\n    // value\n    // value\n}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,d.jsxs)(n.h3,{id:"\u5173\u4e8e-clearsize-\u7b49\u65b9\u6cd5",children:["\u5173\u4e8e ",(0,d.jsx)(n.code,{children:"Clear/Size"})," \u7b49\u65b9\u6cd5"]}),"\n",(0,d.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u76f8\u540c\u7684 ",(0,d.jsx)(n.code,{children:"gredis.Config"})," \u603b\u662f\u4f1a\u8fde\u63a5\u5230\u76f8\u540c\u7684 ",(0,d.jsx)(n.code,{children:"redis db"})," \u4e2d\uff0c\u800c\u7531\u4e8e ",(0,d.jsx)(n.code,{children:"Redis"})," \u672c\u8eab\u6ca1\u6709\u6570\u636e\u5206\u7ec4\u529f\u80fd\uff0c\u6240\u4ee5\u5f53\u591a\u4e2a ",(0,d.jsx)(n.code,{children:"gcache.Cache"})," \u5bf9\u8c61\u8fde\u63a5\u5230\u540c\u4e2a ",(0,d.jsx)(n.code,{children:"redis db"})," \u65f6\uff0c\u5c06\u4f1a\u5171\u4eab\u6574\u4e2a ",(0,d.jsx)(n.code,{children:"redis db"}),"\uff0c\u800c\u4e0d\u4f1a\u5355\u72ec\u5f00\u8f9f\u4e00\u4e2a\u5206\u7ec4\u7528\u6765\u5b58\u50a8\u5f53\u524d ",(0,d.jsx)(n.code,{children:"gcache.Cache"})," \u5bf9\u8c61\u4e2d\u7684\u5185\u5bb9\u3002\u56e0\u6b64\u5f53\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"Clear"}),"\u3001 ",(0,d.jsx)(n.code,{children:"Size"})," \u8fd9\u7c7b\u64cd\u4f5c\u65f6\uff0c\u5c06\u4f1a\u5bf9\u6574\u4e2a ",(0,d.jsx)(n.code,{children:"redis db"})," \u8fdb\u884c\u64cd\u4f5c\uff0c\u800c\u4e0d\u662f\u4e0e\u5185\u5b58\u7f13\u5b58\u4e00\u6837\u7684\u4ec5\u64cd\u4f5c\u5f53\u524d ",(0,d.jsx)(n.code,{children:"gcache.Cache"})," \u5bf9\u8c61\u4e2d\u7684\u5185\u5bb9\uff0c\u5b58\u5728\u4e00\u5b9a\u7684\u53cd\u76f4\u89c9\uff0c\u8bf7\u52a1\u5fc5\u8c28\u614e\u4f7f\u7528\u3002"]}),"\n",(0,d.jsxs)(n.h3,{id:"\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u7684-redis-db-\u533a\u5206\u4e1a\u52a1\u7f13\u5b58\u7c7b\u578b",children:["\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u7684 ",(0,d.jsx)(n.code,{children:"redis db"})," \u533a\u5206\u4e1a\u52a1\u7f13\u5b58\u7c7b\u578b"]}),"\n",(0,d.jsxs)(n.p,{children:["\u53e6\u5916\uff0c\u5efa\u8bae\u5927\u5bb6\u5728\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"Redis"})," \u7f13\u5b58\u65f6\uff0c\u5355\u72ec\u914d\u7f6e\u4e0d\u540c\u7684 ",(0,d.jsx)(n.code,{children:"db"})," \u6765\u4f7f\u7528\uff0c\u800c\u4e0d\u662f\u548c\u5176\u4ed6\u7684\u4e1a\u52a1\u6570\u636e\u5171\u7528\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"db"}),"\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>t});var c=i(296540);const d={},r=c.createContext(d);function s(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);
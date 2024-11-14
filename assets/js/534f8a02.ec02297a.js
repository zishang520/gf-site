"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[99202],{44115:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58","title":"\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7f13\u5b58\u7ba1\u7406","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58","permalink":"/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58.md","tags":[],"version":"2.1.x","sidebarPosition":2,"frontMatter":{"title":"\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u7f13\u5b58\u7ba1\u7406-\u5185\u5b58\u7f13\u5b58","permalink":"/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-\u5185\u5b58\u7f13\u5b58"},"next":{"title":"\u7f13\u5b58\u7ba1\u7406-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-\u65b9\u6cd5\u4ecb\u7ecd"}}');var r=t(474848),c=t(28453);const s={title:"\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58",sidebar_position:2,hide_title:!0},d=void 0,o={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(n.p,{children:["\u7f13\u5b58\u7ec4\u4ef6\u540c\u65f6\u63d0\u4f9b\u4e86 ",(0,r.jsx)(n.code,{children:"gcache"})," \u7684 ",(0,r.jsx)(n.code,{children:"Redis"})," \u7f13\u5b58\u9002\u914d\u5b9e\u73b0\u3002 ",(0,r.jsx)(n.code,{children:"Redis"})," \u7f13\u5b58\u5728\u591a\u8282\u70b9\u4fdd\u8bc1\u7f13\u5b58\u7684\u6570\u636e\u4e00\u81f4\u6027\u65f6\u975e\u5e38\u6709\u7528\uff0c\u7279\u522b\u662f ",(0,r.jsx)(n.code,{children:"Session"})," \u5171\u4eab\u3001\u6570\u636e\u5e93\u67e5\u8be2\u7f13\u5b58\u7b49\u573a\u666f\u4e2d\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func ExampleCache_SetAdapter() {\n    var (\n        err         error\n        ctx         = gctx.New()\n        cache       = gcache.New()\n        redisConfig = &gredis.Config{\n            Address: "127.0.0.1:6379",\n            Db:      9,\n        }\n        cacheKey   = `key`\n        cacheValue = `value`\n    )\n    // Create redis client object.\n    redis, err := gredis.New(redisConfig)\n    if err != nil {\n        panic(err)\n    }\n    // Create redis cache adapter and set it to cache object.\n    cache.SetAdapter(gcache.NewAdapterRedis(redis))\n\n    // Set and Get using cache object.\n    err = cache.Set(ctx, cacheKey, cacheValue, time.Second)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(cache.MustGet(ctx, cacheKey).String())\n\n    // Get using redis client.\n    fmt.Println(redis.MustDo(ctx, "GET", cacheKey).String())\n\n    // Output:\n    // value\n    // value\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(296540);const r={},c=i.createContext(r);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);
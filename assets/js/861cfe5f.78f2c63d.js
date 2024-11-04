"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[90323],{473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u914d\u7f6e\u7ba1\u7406/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1","title":"\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1","description":"gcfg \u7ec4\u4ef6\u91c7\u7528\u4e86\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u4ee5\u5b9e\u73b0\u9ad8\u6269\u5c55\u6027\u3002\u901a\u8fc7\u63a5\u53e3\u5316\u8bbe\u8ba1\u7684\u65b9\u5f0f\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5bf9\u63a5\u7684\u914d\u7f6e\u83b7\u53d6\u65b9\u5f0f\uff0c\u4f8b\u5982 etcd, zookeeper, consul, kubernetes configmap, apollo \u7b49\u7b49\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u914d\u7f6e\u7ba1\u7406/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u914d\u7f6e\u7ba1\u7406/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1","slug":"/docs/core/gcfg-interface","permalink":"/docs/core/gcfg-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u914d\u7f6e\u7ba1\u7406/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/core/gcfg-interface","title":"\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1","sidebar_position":3,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u914d\u7f6e\u7ba1\u7406-\u5e38\u7528\u65b9\u6cd5","permalink":"/docs/core/gcfg-funcs"},"next":{"title":"\u914d\u7f6e\u7ba1\u7406-AdapterFile","permalink":"/docs/core/gcfg-interface-adapter-file"}}');var o=n(74848),c=n(28453);const a={slug:"/docs/core/gcfg-interface",title:"\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1",sidebar_position:3,hide_title:!0},i=void 0,s={},d=[{value:"\u63a5\u53e3\u5b9a\u4e49",id:"\u63a5\u53e3\u5b9a\u4e49",level:2},{value:"\u8bbe\u7f6e\u63a5\u53e3\u5b9e\u73b0",id:"\u8bbe\u7f6e\u63a5\u53e3\u5b9e\u73b0",level:2},{value:"\u83b7\u53d6\u63a5\u53e3\u5b9e\u73b0",id:"\u83b7\u53d6\u63a5\u53e3\u5b9e\u73b0",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"gcfg"})," \u7ec4\u4ef6\u91c7\u7528\u4e86\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u4ee5\u5b9e\u73b0\u9ad8\u6269\u5c55\u6027\u3002\u901a\u8fc7\u63a5\u53e3\u5316\u8bbe\u8ba1\u7684\u65b9\u5f0f\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5bf9\u63a5\u7684\u914d\u7f6e\u83b7\u53d6\u65b9\u5f0f\uff0c\u4f8b\u5982 ",(0,o.jsx)(t.code,{children:"etcd, zookeeper, consul, kubernetes configmap, apollo"})," \u7b49\u7b49\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u63a5\u53e3\u5b9a\u4e49",children:"\u63a5\u53e3\u5b9a\u4e49"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/gogf/gf/blob/master/os/gcfg/gcfg_adaper.go",children:"https://github.com/gogf/gf/blob/master/os/gcfg/gcfg_adaper.go"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"// Adapter is the interface for configuration retrieving.\ntype Adapter interface {\n    // Available checks and returns the configuration service is available.\n    // The optional parameter `resource` specifies certain configuration resource.\n    //\n    // It returns true if configuration file is present in default AdapterFile, or else false.\n    // Note that this function does not return error as it just does simply check for backend configuration service.\n    Available(ctx context.Context, resource ...string) (ok bool)\n\n    // Get retrieves and returns value by specified `pattern`.\n    Get(ctx context.Context, pattern string) (value interface{}, err error)\n\n    // Data retrieves and returns all configuration data as map type.\n    // Note that this function may lead lots of memory usage if configuration data is too large,\n    // you can implement this function if necessary.\n    Data(ctx context.Context) (data map[string]interface{}, err error)\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u8bbe\u7f6e\u63a5\u53e3\u5b9e\u73b0",children:"\u8bbe\u7f6e\u63a5\u53e3\u5b9e\u73b0"}),"\n",(0,o.jsxs)(t.p,{children:["\u914d\u7f6e\u5bf9\u8c61\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"SetAdapter"})," \u65b9\u6cd5\u8bbe\u7f6e\u5f53\u524d\u4f7f\u7528\u7684\u63a5\u53e3\u5b9e\u73b0\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"// SetAdapter sets the adapter of current Config object.\nfunc (c *Config) SetAdapter(adapter Adapter)\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u83b7\u53d6\u63a5\u53e3\u5b9e\u73b0",children:"\u83b7\u53d6\u63a5\u53e3\u5b9e\u73b0"}),"\n",(0,o.jsxs)(t.p,{children:["\u914d\u7f6e\u5bf9\u8c61\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"GetAdapter"})," \u65b9\u6cd5\u83b7\u53d6\u5f53\u524d\u4f7f\u7528\u7684\u63a5\u53e3\u5b9e\u73b0\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"// GetAdapter returns the adapter of current Config object.\nfunc (c *Config) GetAdapter() Adapter\n"})})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const o={},c=r.createContext(o);function a(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);
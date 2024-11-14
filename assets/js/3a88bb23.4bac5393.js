"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[60362],{114272:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>c,metadata:()=>n,toc:()=>g});const n=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u52a0\u5bc6\u89e3\u5bc6/DES\u7b97\u6cd5-gdes","title":"DES\u7b97\u6cd5-gdes","description":"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528DES\u7b97\u6cd5\u7684\u65b9\u5f0f\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7gdes\u5305\u5b9e\u73b0\u52a0\u5bc6\u64cd\u4f5c\u3002\u901a\u8fc7\u94fe\u63a5\u81f3\u5b98\u65b9\u63a5\u53e3\u6587\u6863\u4ee5\u4fbf\u5f00\u53d1\u8005\u83b7\u53d6\u66f4\u591a\u6280\u672f\u7ec6\u8282\u3002\u5728\u5305\u4e2d\u652f\u6301\u4e24\u79cd\u8865\u4f4d\u65b9\u5f0f\uff0c\u5e76\u5bf9\u4e09\u500d\u957fDES\u7b97\u6cd5\u7684\u5bc6\u94a5\u4f7f\u7528\u8fdb\u884c\u4e86\u7279\u6b8a\u8bf4\u660e\uff0c\u4ee5\u786e\u4fdd\u6570\u636e\u5b89\u5168\u6027\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u52a0\u5bc6\u89e3\u5bc6/DES\u7b97\u6cd5-gdes.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u52a0\u5bc6\u89e3\u5bc6","slug":"/docs/components/crypto-gdes","permalink":"/docs/components/crypto-gdes","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u52a0\u5bc6\u89e3\u5bc6/DES\u7b97\u6cd5-gdes.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"slug":"/docs/components/crypto-gdes","title":"DES\u7b97\u6cd5-gdes","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","DES\u7b97\u6cd5","gdes","crypto","encryption","PKCS5PADDING","NOPADDING","\u4e09\u500d\u957fDES","\u5bc6\u94a5"],"description":"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528DES\u7b97\u6cd5\u7684\u65b9\u5f0f\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7gdes\u5305\u5b9e\u73b0\u52a0\u5bc6\u64cd\u4f5c\u3002\u901a\u8fc7\u94fe\u63a5\u81f3\u5b98\u65b9\u63a5\u53e3\u6587\u6863\u4ee5\u4fbf\u5f00\u53d1\u8005\u83b7\u53d6\u66f4\u591a\u6280\u672f\u7ec6\u8282\u3002\u5728\u5305\u4e2d\u652f\u6301\u4e24\u79cd\u8865\u4f4d\u65b9\u5f0f\uff0c\u5e76\u5bf9\u4e09\u500d\u957fDES\u7b97\u6cd5\u7684\u5bc6\u94a5\u4f7f\u7528\u8fdb\u884c\u4e86\u7279\u6b8a\u8bf4\u660e\uff0c\u4ee5\u786e\u4fdd\u6570\u636e\u5b89\u5168\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"AES\u7b97\u6cd5-gaes","permalink":"/docs/components/crypto-gaes"},"next":{"title":"SHA1\u7b97\u6cd5-gsha1","permalink":"/docs/components/crypto-gsha1"}}');var t=o(474848),r=o(28453);const c={slug:"/docs/components/crypto-gdes",title:"DES\u7b97\u6cd5-gdes",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","DES\u7b97\u6cd5","gdes","crypto","encryption","PKCS5PADDING","NOPADDING","\u4e09\u500d\u957fDES","\u5bc6\u94a5"],description:"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528DES\u7b97\u6cd5\u7684\u65b9\u5f0f\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7gdes\u5305\u5b9e\u73b0\u52a0\u5bc6\u64cd\u4f5c\u3002\u901a\u8fc7\u94fe\u63a5\u81f3\u5b98\u65b9\u63a5\u53e3\u6587\u6863\u4ee5\u4fbf\u5f00\u53d1\u8005\u83b7\u53d6\u66f4\u591a\u6280\u672f\u7ec6\u8282\u3002\u5728\u5305\u4e2d\u652f\u6301\u4e24\u79cd\u8865\u4f4d\u65b9\u5f0f\uff0c\u5e76\u5bf9\u4e09\u500d\u957fDES\u7b97\u6cd5\u7684\u5bc6\u94a5\u4f7f\u7528\u8fdb\u884c\u4e86\u7279\u6b8a\u8bf4\u660e\uff0c\u4ee5\u786e\u4fdd\u6570\u636e\u5b89\u5168\u6027\u3002"},d=void 0,i={},g=[];function p(e){const s={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"DES\u7b97\u6cd5\u3002"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/crypto/gdes"\n'})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/crypto/gdes",children:"https://pkg.go.dev/github.com/gogf/gf/v2/crypto/gdes"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.strong,{children:["\u5173\u4e8e ",(0,t.jsx)(s.code,{children:"gdes"})," \u5305\u4e2d\u7684\u8865\u4f4d\u8bf4\u660e\uff1a"]})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.code,{children:"gdes"})," \u5305\u4e2d\u8865\u4f4d\u65b9\u5f0f\u652f\u6301\uff1a ",(0,t.jsx)(s.code,{children:"PKCS5PADDING"}),"\u3001 ",(0,t.jsx)(s.code,{children:"NOPADDING"})," \u4e24\u79cd\u65b9\u5f0f\uff0c\u5f53\u4f7f\u7528 ",(0,t.jsx)(s.code,{children:"NOPADDING"})," \u65b9\u5f0f\u65f6\u9700\u8981\u81ea\u5b9a\u4e49\u8865\u4f4d\u65b9\u6cd5\u3002"]})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u5173\u4e8egdes\u5305\u4e2d\u7684\u5bc6\u94a5\u7684\u8bf4\u660e\uff1a"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u5f53\u4f7f\u7528\u4e09\u500d\u957f\u7684DES\u7b97\u6cd5\u65f6\uff0c\u5bc6\u94a5\u4e3a16\u5b57\u8282\u65f6\uff0ckey3\u7b49\u4e8ekey1\u3002"})})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,s,o)=>{o.d(s,{R:()=>c,x:()=>d});var n=o(296540);const t={},r=n.createContext(t);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);
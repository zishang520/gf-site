"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[18898],{304752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var o=n(474848),i=n(28453);const s={title:"\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",sidebar_position:3},a=void 0,r={id:"WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",title:"\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",description:"gpage \u652f\u6301\u81ea\u5b9a\u4e49 URL \u6a21\u677f\uff0c\u5728\u6a21\u677f\u4e2d\u53ef\u4ee5\u4f7f\u7528 {.page} \u5185\u7f6e\u53d8\u91cf\u66ff\u6362\u9875\u7801\u7684\u5185\u5bb9\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a",source:"@site/versioned_docs/version-1.15.x/3-WEB\u670d\u52a1\u5f00\u53d1/9-\u5206\u9875\u7ba1\u7406/3-\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f.md",sourceDirName:"3-WEB\u670d\u52a1\u5f00\u53d1/9-\u5206\u9875\u7ba1\u7406",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",permalink:"/docs/1.15.x/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.15.x/3-WEB\u670d\u52a1\u5f00\u53d1/9-\u5206\u9875\u7ba1\u7406/3-\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f.md",tags:[],version:"1.15.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:3,frontMatter:{title:"\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5206\u9875\u7ba1\u7406-Ajax\u5206\u9875",permalink:"/docs/1.15.x/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-Ajax\u5206\u9875"},next:{title:"\u5206\u9875\u7ba1\u7406-\u81ea\u5b9a\u4e49\u5206\u9875",permalink:"/docs/1.15.x/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-\u81ea\u5b9a\u4e49\u5206\u9875"}},d={},p=[];function c(e){const t={code:"code",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"gpage"})," \u652f\u6301\u81ea\u5b9a\u4e49 ",(0,o.jsx)(t.code,{children:"URL"})," \u6a21\u677f\uff0c\u5728\u6a21\u677f\u4e2d\u53ef\u4ee5\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"{.page}"})," \u5185\u7f6e\u53d8\u91cf\u66ff\u6362\u9875\u7801\u7684\u5185\u5bb9\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/gogf/gf/frame/g"\n\t"github.com/gogf/gf/net/ghttp"\n\t"github.com/gogf/gf/os/gview"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.BindHandler("/page/template/{page}.html", func(r *ghttp.Request) {\n\t\tpage := r.GetPage(100, 10)\n\t\tpage.UrlTemplate = "/order/list/{.page}.html"\n\t\tbuffer, _ := gview.ParseContent(`\n        <html>\n            <head>\n                <style>\n                    a,span {padding:8px; font-size:16px;}\n                    div{margin:5px 5px 20px 5px}\n                </style>\n            </head>\n            <body>\n                <div>{{.page1}}</div>\n                <div>{{.page2}}</div>\n                <div>{{.page3}}</div>\n                <div>{{.page4}}</div>\n            </body>\n        </html>\n        `, g.Map{\n\t\t\t"page1": page.GetContent(1),\n\t\t\t"page2": page.GetContent(2),\n\t\t\t"page3": page.GetContent(3),\n\t\t\t"page4": page.GetContent(4),\n\t\t})\n\t\tr.Response.Write(buffer)\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n\n'})}),"\n",(0,o.jsxs)(t.p,{children:["\u5728\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"UrlTemplate"})," \u5c5e\u6027\u8bbe\u7f6e ",(0,o.jsx)(t.code,{children:"URL"})," \u6a21\u677f\uff0c\u6267\u884c\u540e\uff0c\u7ed3\u679c\u5982\u4e0b\uff1a"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(117786).A+"",width:"660",height:"230"})})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},117786:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/49fbc69600d3e52c4dd28f03f50d9ace-ba3cd994a145bf97246f07323673b7d2.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(296540);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);
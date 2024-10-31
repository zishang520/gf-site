"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[58449],{95977:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>g,toc:()=>d});var i=t(74848),a=t(28453);const s={slug:"/web/paging/template",title:"\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",sidebar_position:3,hide_title:!0},o=void 0,g={id:"WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",title:"\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",description:"gpage \u652f\u6301\u81ea\u5b9a\u4e49 URL \u6a21\u677f\uff0c\u5728\u6a21\u677f\u4e2d\u53ef\u4ee5\u4f7f\u7528 {.page} \u5185\u7f6e\u53d8\u91cf\u66ff\u6362\u9875\u7801\u7684\u5185\u5bb9\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a",source:"@site/docs/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f.md",sourceDirName:"WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406",slug:"/web/paging/template",permalink:"/gf-site/en/docs/web/paging/template",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:3,frontMatter:{slug:"/web/paging/template",title:"\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",sidebar_position:3,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u5206\u9875\u7ba1\u7406-Ajax\u5206\u9875",permalink:"/gf-site/en/docs/web/paging/ajax"},next:{title:"\u5206\u9875\u7ba1\u7406-\u81ea\u5b9a\u4e49\u5206\u9875",permalink:"/gf-site/en/docs/web/paging/customization"}},p={},d=[];function r(e){const n={code:"code",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gpage"})," \u652f\u6301\u81ea\u5b9a\u4e49 ",(0,i.jsx)(n.code,{children:"URL"})," \u6a21\u677f\uff0c\u5728\u6a21\u677f\u4e2d\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"{.page}"})," \u5185\u7f6e\u53d8\u91cf\u66ff\u6362\u9875\u7801\u7684\u5185\u5bb9\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gview"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/page/template/{page}.html", func(r *ghttp.Request) {\n        page := r.GetPage(100, 10)\n        page.UrlTemplate = "/order/list/{.page}.html"\n        buffer, _ := gview.ParseContent(`\n        <html>\n            <head>\n                <style>\n                    a,span {padding:8px; font-size:16px;}\n                    div{margin:5px 5px 20px 5px}\n                </style>\n            </head>\n            <body>\n                <div>{{.page1}}</div>\n                <div>{{.page2}}</div>\n                <div>{{.page3}}</div>\n                <div>{{.page4}}</div>\n            </body>\n        </html>\n        `, g.Map{\n            "page1": page.GetContent(1),\n            "page2": page.GetContent(2),\n            "page3": page.GetContent(3),\n            "page4": page.GetContent(4),\n        })\n        r.Response.Write(buffer)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"UrlTemplate"})," \u5c5e\u6027\u8bbe\u7f6e ",(0,i.jsx)(n.code,{children:"URL"})," \u6a21\u677f\uff0c\u6267\u884c\u540e\uff0c\u7ed3\u679c\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(67437).A+"",width:"660",height:"230"})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},67437:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/a67f2f6285ed959812f70fd066e7453a-ba3cd994a145bf97246f07323673b7d2.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>g});var i=t(96540);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function g(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
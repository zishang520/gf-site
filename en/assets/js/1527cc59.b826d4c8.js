"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[48364],{63078:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var d=n(74848),s=n(28453);const c={slug:"/install-go/go-module",title:"Go Module",sidebar_position:1,hide_title:!0},i=void 0,l={id:"\u5176\u4ed6\u8d44\u6599/\u51c6\u5907\u5de5\u4f5c/Go Module",title:"Go Module",description:"Go Module \u662f\u4eceGo\u7248\u672c 1.11.1 \u5f00\u59cb\u5b98\u65b9\u63d0\u4f9b\u7684\u5305\u7ba1\u7406\u5de5\u5177\uff0c\u7528\u4e8e\u89e3\u51b3Go\u9879\u76ee\u7684\u5305\u7ba1\u7406\u53ca\u4f9d\u8d56\uff0c\u7c7b\u4f3c\u4e8ePHP\u7684 composer\u3001Nodejs\u7684 npm\u3002\u672c\u7ae0\u8282\u4f1a\u5bf9 Go Module \u7684\u4e00\u4e9b\u5e38\u7528\u7684\u5b9e\u7528\u7684\u547d\u4ee4/\u8bbe\u7f6e\u8fdb\u884c\u4ecb\u7ecd\uff0c\u66f4\u8be6\u7ec6\u7684\u4ecb\u7ecd\u8bf7\u67e5\u770b\u5b98\u65b9\u6587\u6863\uff1a https://github.com/golang/go/wiki/Modules",source:"@site/docs/16-\u5176\u4ed6\u8d44\u6599/0-\u51c6\u5907\u5de5\u4f5c/1-Go Module.md",sourceDirName:"16-\u5176\u4ed6\u8d44\u6599/0-\u51c6\u5907\u5de5\u4f5c",slug:"/install-go/go-module",permalink:"/gf-site/en/docs/install-go/go-module",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/16-\u5176\u4ed6\u8d44\u6599/0-\u51c6\u5907\u5de5\u4f5c/1-Go Module.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730354542e3,sidebarPosition:1,frontMatter:{slug:"/install-go/go-module",title:"Go Module",sidebar_position:1,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u73af\u5883\u5b89\u88c5",permalink:"/gf-site/en/docs/install-go"},next:{title:"\u5f00\u53d1\u73af\u5883\u914d\u7f6e",permalink:"/gf-site/en/docs/install-go/config-env"}},r={},h=[{value:"\u5173\u4e8e <code>go.mod</code>",id:"\u5173\u4e8e-gomod",level:2},{value:"\u4f7f\u7528 <code>go.mod</code>",id:"\u4f7f\u7528-gomod",level:2},{value:"\u4f7f\u7528Goland IDE vgo\uff08\u63a8\u8350\uff09",id:"\u4f7f\u7528goland-ide-vgo\u63a8\u8350",level:3},{value:"\u4f7f\u7528\u547d\u4ee4\u884c",id:"\u4f7f\u7528\u547d\u4ee4\u884c",level:3}];function t(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.code,{children:"Go Module"})," \u662f\u4eceGo\u7248\u672c ",(0,d.jsx)(o.code,{children:"1.11.1"})," \u5f00\u59cb\u5b98\u65b9\u63d0\u4f9b\u7684\u5305\u7ba1\u7406\u5de5\u5177\uff0c\u7528\u4e8e\u89e3\u51b3Go\u9879\u76ee\u7684\u5305\u7ba1\u7406\u53ca\u4f9d\u8d56\uff0c\u7c7b\u4f3c\u4e8ePHP\u7684 ",(0,d.jsx)(o.code,{children:"composer"}),"\u3001Nodejs\u7684 ",(0,d.jsx)(o.code,{children:"npm"}),"\u3002\u672c\u7ae0\u8282\u4f1a\u5bf9 ",(0,d.jsx)(o.code,{children:"Go Module"})," \u7684\u4e00\u4e9b\u5e38\u7528\u7684\u5b9e\u7528\u7684\u547d\u4ee4/\u8bbe\u7f6e\u8fdb\u884c\u4ecb\u7ecd\uff0c\u66f4\u8be6\u7ec6\u7684\u4ecb\u7ecd\u8bf7\u67e5\u770b\u5b98\u65b9\u6587\u6863\uff1a ",(0,d.jsx)(o.a,{href:"https://github.com/golang/go/wiki/Modules",children:"https://github.com/golang/go/wiki/Modules"})]}),"\n",(0,d.jsxs)(o.h2,{id:"\u5173\u4e8e-gomod",children:["\u5173\u4e8e ",(0,d.jsx)(o.code,{children:"go.mod"})]}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.code,{children:"go.mod"})," \u662fGo\u9879\u76ee\u7684\u4f9d\u8d56\u63cf\u8ff0\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u4e3b\u8981\u7528\u6765\u63cf\u8ff0\u4e24\u4e2a\u4e8b\u60c5\uff1a"]}),"\n",(0,d.jsxs)(o.ol,{children:["\n",(0,d.jsxs)(o.li,{children:["\u5f53\u524d\u9879\u76ee\u540d( ",(0,d.jsx)(o.code,{children:"module"}),")\u662f\u4ec0\u4e48\u3002\u6bcf\u4e2a\u9879\u76ee\u90fd\u5e94\u8be5\u8bbe\u7f6e\u4e00\u4e2a\u540d\u79f0\uff0c\u5f53\u524d\u9879\u76ee\u4e2d\u7684\u5305( ",(0,d.jsx)(o.code,{children:"package"}),")\u53ef\u4ee5\u4f7f\u7528\u8be5\u540d\u79f0\u8fdb\u884c\u76f8\u4e92\u8c03\u7528\u3002"]}),"\n",(0,d.jsxs)(o.li,{children:["\u5f53\u524d\u9879\u76ee\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u5305\u540d\u79f0\u3002\u9879\u76ee\u8fd0\u884c\u65f6\u4f1a\u81ea\u52a8\u5206\u6790\u9879\u76ee\u4e2d\u7684\u4ee3\u7801\u4f9d\u8d56\uff0c\u751f\u6210 ",(0,d.jsx)(o.code,{children:"go.sum"})," \u4f9d\u8d56\u5206\u6790\u7ed3\u679c\uff0c\u968f\u540ego\u7f16\u8bd1\u5668\u4f1a\u53bb\u4e0b\u8f7d\u8fd9\u4e9b\u7b2c\u4e09\u65b9\u5305\uff0c\u7136\u540e\u518d\u7f16\u8bd1\u8fd0\u884c\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(o.p,{children:["\u6211\u4eec\u5c06\u4e4b\u524d\u7684 ",(0,d.jsx)(o.code,{children:"hello world"})," \u9879\u76ee\u505a\u4e00\u4e9b\u6539\u53d8\uff0c\u589e\u52a0\u4e00\u4e2a ",(0,d.jsx)(o.code,{children:"go.mod"})," \u6587\u4ef6\uff08\u4e5f\u53ef\u4ee5\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u4f7f\u7528 ",(0,d.jsx)(o.code,{children:"go mod init \u9879\u76ee\u540d\u79f0"})," \u547d\u4ee4\u521d\u59cb\u5316\u9879\u76ee\u751f\u6210\u8be5\u6587\u4ef6\uff09\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-go",children:"module my-hello\n"})}),"\n",(0,d.jsxs)(o.p,{children:["\u5176\u4e2d\uff0c ",(0,d.jsx)(o.code,{children:"my-hello"})," \u4e3a\u5f53\u524d\u9879\u76ee\u7684\u540d\u79f0\uff0c\u53ef\u4ee5\u968f\u610f\u8bbe\u7f6e\u3002"]}),"\n",(0,d.jsxs)(o.p,{children:["\u5c31\u8fd9\u6837\u7b80\u5355\u4fbf\u5b8c\u6210\u4e86\u9879\u76ee\u7684 ",(0,d.jsx)(o.code,{children:"module"})," \u521d\u59cb\u5316\u3002"]}),"\n",(0,d.jsxs)(o.p,{children:["\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c ",(0,d.jsx)(o.code,{children:"go.sum"})," \u4f9d\u8d56\u5206\u6790\u6587\u4ef6\u5e94\u5f53\u88ab\u6dfb\u52a0\u5230\u7248\u672c\u7ba1\u7406\u4e2d\u968f\u7740 ",(0,d.jsx)(o.code,{children:"go.mod"})," \u6587\u4ef6\u4e00\u8d77\u63d0\u4ea4\u3002"]}),"\n",(0,d.jsxs)(o.h2,{id:"\u4f7f\u7528-gomod",children:["\u4f7f\u7528 ",(0,d.jsx)(o.code,{children:"go.mod"})]}),"\n",(0,d.jsxs)(o.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(o.code,{children:"go.mod"})," \u610f\u5373\u7528 ",(0,d.jsx)(o.code,{children:"go.mod"})," \u8fdb\u884c\u9879\u76ee\u4f9d\u8d56\u7ba1\u7406\u3002\u6211\u4eec\u6709\u4e24\u79cd ",(0,d.jsx)(o.code,{children:"go.mod"})," \u7684 ",(0,d.jsx)(o.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a ",(0,d.jsx)(o.code,{children:"IDE-vgo"})," \u548c ",(0,d.jsx)(o.code,{children:"\u547d\u4ee4\u884c"})," \u65b9\u5f0f\u3002\u4ee5\u4e0b\u6211\u4eec\u901a\u8fc7\u4e0b\u8f7d\u4f7f\u7528 ",(0,d.jsx)(o.code,{children:"GoFrame"})," \u6846\u67b6\u6765\u6f14\u793a\u5982\u4f55\u4f7f\u7528\u8fd9\u4e24\u79cd\u65b9\u5f0f\u6765\u7ba1\u7406\u4f9d\u8d56\u3002"]}),"\n",(0,d.jsxs)(o.blockquote,{children:["\n",(0,d.jsxs)(o.p,{children:["\u5982\u679c\u9700\u8981 ",(0,d.jsx)(o.code,{children:"Goland"})," IDE\u652f\u6301 ",(0,d.jsx)(o.code,{children:"go.mod"}),"\uff0c\u5fc5\u987b\u8981\u6253\u5f00 ",(0,d.jsx)(o.code,{children:"vgo"})," \u7684\u652f\u6301\uff08\u5305\u62ec\u4ee3\u7801\u4f9d\u8d56\u68c0\u6d4b\uff09\u3002\u8fd9\u4e24\u79cd\u4f7f\u7528\u65b9\u5f0f\u7684\u533a\u522b\u4ec5\u4ec5\u662f\u4e0b\u8f7d\u4f9d\u8d56\u5305\u7684\u65b9\u5f0f\u4e0d\u540c\u3002"]}),"\n"]}),"\n",(0,d.jsx)(o.h3,{id:"\u4f7f\u7528goland-ide-vgo\u63a8\u8350",children:"\u4f7f\u7528Goland IDE vgo\uff08\u63a8\u8350\uff09"}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.code,{children:"vgo"})," \u662f\u57fa\u4e8e ",(0,d.jsx)(o.code,{children:"Go Module"})," \u89c4\u8303\u7684\u5305\u7ba1\u7406\u5de5\u5177\uff0c\u540c\u5b98\u65b9\u7684 ",(0,d.jsx)(o.code,{children:"go mod"})," \u547d\u4ee4\u5de5\u5177\u7c7b\u4f3c\u3002"]}),"\n",(0,d.jsxs)(o.ol,{children:["\n",(0,d.jsxs)(o.li,{children:["\u8bbe\u7f6e ",(0,d.jsx)(o.code,{children:"Goland"})," \u542f\u7528 ",(0,d.jsx)(o.code,{children:"vgo"})]}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.img,{src:n(9128).A+"",width:"2024",height:"1396"})}),"\n",(0,d.jsxs)(o.p,{children:["\u5982\u679c\u60a8\u672c\u5730\u73af\u5883\u5df2\u7ecf\u6709 ",(0,d.jsx)(o.code,{children:"VPN"})," \u529f\u80fd\uff0c\u90a3\u4e48\u53ef\u4ee5\u5ffd\u7565 ",(0,d.jsx)(o.code,{children:"proxy"})," \u7684\u8bbe\u7f6e\u3002"]}),"\n",(0,d.jsxs)(o.p,{children:["\u5176\u4e2d ",(0,d.jsx)(o.code,{children:"Proxy"})," \u8bf7\u8f93\u5165\u4ee3\u7406\u5730\u5740\u4e0b\u8f7d\u4f9d\u8d56\u5305\uff0c\u5982\u679c\u9009\u62e9 ",(0,d.jsx)(o.code,{children:"direct"})," \u8868\u793a\u4e0d\u4f7f\u7528\u4ee3\u7406\u3002\u53ef\u9009\u62e9\u7684\u53cd\u5411\u4ee3\u7406\u5730\u5740\u6709\uff1a"]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:(0,d.jsx)(o.code,{children:"https://goproxy.cn"})}),"\n",(0,d.jsx)(o.li,{children:(0,d.jsx)(o.code,{children:"https://goproxy.io"})}),"\n",(0,d.jsx)(o.li,{children:(0,d.jsx)(o.code,{children:"https://mirrors.aliyun.com/goproxy/"})}),"\n"]}),"\n",(0,d.jsxs)(o.p,{children:["\u8be6\u89c1Go\u5b98\u7f51\u8bf4\u660e\uff1a ",(0,d.jsx)(o.a,{href:"https://github.com/golang/go/wiki/Modules#are-there-always-on-module-repositories-and-enterprise-proxies",children:"https://github.com/golang/go/wiki/Modules#are-there-always-on-module-repositories-and-enterprise-proxies"})]}),"\n",(0,d.jsx)(o.p,{children:"\u8fd9\u91cc\u8bf7\u52a1\u5fc5\u9009\u62e9\u4e00\u4e2a\u4ee3\u7406\u5730\u5740\u8f93\u5165\u3002"}),"\n",(0,d.jsxs)(o.ol,{start:"2",children:["\n",(0,d.jsxs)(o.li,{children:["\u624b\u52a8\u4fee\u6539 ",(0,d.jsx)(o.code,{children:"go.mod"})," \u6587\u4ef6\u5982\u4e0b\uff1a"]}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-go",children:"module my-hello\n\n\nrequire github.com/gogf/gf latest\n"})}),"\n",(0,d.jsxs)(o.p,{children:["\u589e\u52a0 ",(0,d.jsx)(o.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u4f9d\u8d56\uff0c\u5176\u4e2d ",(0,d.jsx)(o.code,{children:"latest"})," \u8868\u793a\u4f7f\u7528\u6700\u65b0\u7248\u672c\uff0cIDE\u5c06\u4f1a\u7acb\u5373\u53bb\u66f4\u65b0\u4e0b\u8f7d\u6846\u67b6\u4ee3\u7801\u3002\u6210\u529f\u540e\uff0cIDE\u5c06\u4f1a\u4fee\u6539 ",(0,d.jsx)(o.code,{children:"go.mod"})," \u6587\u4ef6\u5e76\u751f\u6210 ",(0,d.jsx)(o.code,{children:"go.sum"})," \u4f9d\u8d56\u5206\u6790\u6587\u4ef6\u3002"]}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.img,{src:n(20954).A+"",width:"800",height:"273"})}),"\n",(0,d.jsxs)(o.ol,{start:"3",children:["\n",(0,d.jsxs)(o.li,{children:["\u968f\u540e ",(0,d.jsx)(o.code,{children:"go.mod"})," \u6587\u4ef6\u88ab\u81ea\u52a8\u66f4\u65b0\u4e3a\uff1a"]}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-go",children:"module my-hello\n\n\nrequire github.com/gogf/gf v1.6.13\n"})}),"\n",(0,d.jsxs)(o.p,{children:["\u5176\u4e2d ",(0,d.jsx)(o.code,{children:"v1.6.13"})," \u8868\u793avgo\u68c0\u6d4b\u5230\u7684\u6700\u65b0\u6846\u67b6\u7248\u672c\u3002"]}),"\n",(0,d.jsxs)(o.ol,{start:"4",children:["\n",(0,d.jsxs)(o.li,{children:["\u5982\u679c\u4e0b\u8f7d\u6700\u65b0\u4ee3\u7801\u6846\u67b6\u540e\u51fa\u73b0\u4e0b\u56fe\u60c5\u51b5\uff1a ",(0,d.jsx)(o.a,{href:"https://www.jetbrains.com/help/go/create-a-project-with-vgo-integration.html",children:"https://www.jetbrains.com/help/go/create-a-project-with-vgo-integration.html"})]}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.img,{src:n(76266).A+"",width:"800",height:"292"})}),"\n",(0,d.jsxs)(o.ol,{start:"5",children:["\n",(0,d.jsxs)(o.li,{children:["\u8bf7\u6309\u5feb\u6377\u952e ",(0,d.jsx)(o.code,{children:"\u2325(option)+\u21a9(return)"})," \u6216\u8005 \u9f20\u6807\u53f3\u952e, \u9009\u62e9 ",(0,d.jsx)(o.code,{children:"Sync packages of my-hello"})]}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.img,{src:n(63619).A+"",width:"800",height:"260"})}),"\n",(0,d.jsxs)(o.ol,{start:"6",children:["\n",(0,d.jsxs)(o.li,{children:["\u968f\u540e\u7b49\u5f85\u51e0\u79d2\u949f\u4e4b\u540e, \u53ef\u4ee5\u770b\u5230\u5de6\u4fa7\u7684 ",(0,d.jsx)(o.code,{children:"Go Module"})," \u5df2\u7ecf\u6709\u5185\u5bb9\uff0c\u5e76\u4e14\u4e2d\u7ec8\u7aef\u81ea\u52a8\u8f93\u51fa\u4e86\u4e0b\u8f7d\u7684\u6846\u67b6\u7248\u672c"]}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.img,{src:n(11287).A+"",width:"800",height:"435"})}),"\n",(0,d.jsx)(o.h3,{id:"\u4f7f\u7528\u547d\u4ee4\u884c",children:"\u4f7f\u7528\u547d\u4ee4\u884c"}),"\n",(0,d.jsxs)(o.ol,{children:["\n",(0,d.jsxs)(o.li,{children:["\u6253\u5f00 ",(0,d.jsx)(o.code,{children:"Terminal"}),"\uff0c\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c:"]}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"export GO111MODULE=on GOPROXY=https://goproxy.cn; go get -u github.com/gogf/gf\n"})}),"\n",(0,d.jsxs)(o.p,{children:["\u8be5\u547d\u4ee4\u5c06\u4f1a\u7acb\u5373\u4e0b\u8f7d\u6700\u65b0\u7a33\u5b9a\u7248\u672c\u7684 ",(0,d.jsx)(o.code,{children:"GoFrame"})," \u6846\u67b6\u3002\u5176\u4e2d ",(0,d.jsx)(o.code,{children:"export GO111MODULE=on;"})," \u8868\u793a\u5f00\u542f ",(0,d.jsx)(o.code,{children:"Go Module"})," \u7279\u6027\uff08Go ",(0,d.jsx)(o.code,{children:"1.11.x"})," \u7248\u672c\u9ed8\u8ba4\u5173\u95ed\uff0c\u9700\u8981\u624b\u52a8\u5f00\u542f\uff09\uff0c ",(0,d.jsx)(o.code,{children:"export GOPROXY=https://goproxy.cn"})," \u8868\u793a\u4f7f\u7528\u4ee3\u7406\u4e0b\u8f7d\uff0c\u539f\u56e0\u4f60\u61c2\u7684\uff0c\u5e76\u4e14\u4e5f\u80fd\u6781\u5927\u63d0\u9ad8\u4f9d\u8d56\u5305\u4e0b\u8f7d\u901f\u5ea6\u3002\u4ee3\u7406\u5730\u5740\u4e5f\u53ef\u4f7f\u7528\uff1a"]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:(0,d.jsx)(o.code,{children:"https://goproxy.cn"})}),"\n",(0,d.jsx)(o.li,{children:(0,d.jsx)(o.code,{children:"https://goproxy.io"})}),"\n",(0,d.jsx)(o.li,{children:(0,d.jsx)(o.code,{children:"https://mirrors.aliyun.com/goproxy"})}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.img,{src:n(16400).A+"",width:"800",height:"430"})}),"\n",(0,d.jsxs)(o.ol,{start:"2",children:["\n",(0,d.jsxs)(o.li,{children:["\u968f\u540e ",(0,d.jsx)(o.code,{children:"go.mod"})," \u6587\u4ef6\u5185\u5bb9\u88ab\u81ea\u52a8\u66f4\u65b0\u4e3a\uff1a"]}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-go",children:"module my-hello\n\n\nrequire github.com/gogf/gf v1.6.13 // indirect\n"})}),"\n",(0,d.jsxs)(o.p,{children:["\u4e14\u751f\u6210\u4e86\u65b0\u7684 ",(0,d.jsx)(o.code,{children:"go.sum"})," \u4f9d\u8d56\u5206\u6790\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u5145\u5176\u91cf\u7b97\u662f\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6\uff0c\u5bf9\u4e8e\u6211\u4eec\u5e73\u65f6\u5f00\u53d1\u5de5\u4f5c\u6765\u8bf4\u610f\u4e49\u4e0d\u5927\u3002"]})]})}function g(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}},16400:(e,o,n)=>{n.d(o,{A:()=>d});const d=n.p+"assets/images/2274104a3ec3a6d2ac7ea35ad374c85c-2c43604673051906d4a6fc3a3e6966cf.png"},76266:(e,o,n)=>{n.d(o,{A:()=>d});const d=n.p+"assets/images/6c6bad791c9e0eee3c740f9cda0ea5c4-2202756c2cf6b9042872f180a06e4f3e.png"},11287:(e,o,n)=>{n.d(o,{A:()=>d});const d=n.p+"assets/images/955367cd46f617411d664c5baa8af9ce-3a915d47bb15a4d91ef33856bca402ea.png"},20954:(e,o,n)=>{n.d(o,{A:()=>d});const d=n.p+"assets/images/cb698537b6d68707fb4c1284530d9f90-ef7b5fc080c512fd03b873d49df13138.png"},63619:(e,o,n)=>{n.d(o,{A:()=>d});const d=n.p+"assets/images/cf02717043547f5e1bf0a14b31d40b1c-fa828240ebcc998aacea5651bbd28bce.png"},9128:(e,o,n)=>{n.d(o,{A:()=>d});const d=n.p+"assets/images/f3f9552ca0703fb4e88ae2958b58815c-102d6773f287281f0ae31a581d98e8aa.png"},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>l});var d=n(96540);const s={},c=d.createContext(s);function i(e){const o=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(c.Provider,{value:o},e.children)}}}]);
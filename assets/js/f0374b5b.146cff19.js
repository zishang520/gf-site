"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[16344],{465522:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>t});var o=c(474848),d=c(28453);const i={title:"\u8d44\u6e90\u7ba1\u7406-\u5de5\u5177\u6253\u5305",sidebar_position:0},s=void 0,r={id:"\u6838\u5fc3\u7ec4\u4ef6/\u8d44\u6e90\u7ba1\u7406/\u8d44\u6e90\u7ba1\u7406-\u5de5\u5177\u6253\u5305",title:"\u8d44\u6e90\u7ba1\u7406-\u5de5\u5177\u6253\u5305",description:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 gf \u547d\u4ee4\u884c\u5de5\u5177\u7684 pack \u547d\u4ee4\u5b9e\u73b0\u5bf9\u4efb\u610f\u6587\u4ef6/\u76ee\u5f55\u7684\u6253\u5305\uff0c\u5173\u4e8e gf \u547d\u4ee4\u884c\u5de5\u5177\u7684\u5b89\u88c5\u548c\u4f7f\u7528\u5177\u4f53\u8bf7\u67e5\u770b \u5f00\u53d1\u5de5\u5177 \u7ae0\u8282\u3002\u7531\u4e8e\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u8fdb\u884c\u6253\u5305\u6bd4\u8f83\u7b80\u4fbf\uff0c\u56e0\u6b64\u4e5f\u662f\u63a8\u8350\u7684\u6253\u5305\u65b9\u5f0f\u3002",source:"@site/versioned_docs/version-1.15.x/1-\u6838\u5fc3\u7ec4\u4ef6/3-\u8d44\u6e90\u7ba1\u7406/0-\u8d44\u6e90\u7ba1\u7406-\u5de5\u5177\u6253\u5305.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6/3-\u8d44\u6e90\u7ba1\u7406",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u8d44\u6e90\u7ba1\u7406/\u8d44\u6e90\u7ba1\u7406-\u5de5\u5177\u6253\u5305",permalink:"/docs/1.15.x/\u6838\u5fc3\u7ec4\u4ef6/\u8d44\u6e90\u7ba1\u7406/\u8d44\u6e90\u7ba1\u7406-\u5de5\u5177\u6253\u5305",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.15.x/1-\u6838\u5fc3\u7ec4\u4ef6/3-\u8d44\u6e90\u7ba1\u7406/0-\u8d44\u6e90\u7ba1\u7406-\u5de5\u5177\u6253\u5305.md",tags:[],version:"1.15.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:0,frontMatter:{title:"\u8d44\u6e90\u7ba1\u7406-\u5de5\u5177\u6253\u5305",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u8d44\u6e90\u7ba1\u7406",permalink:"/docs/1.15.x/\u6838\u5fc3\u7ec4\u4ef6/\u8d44\u6e90\u7ba1\u7406/"},next:{title:"\u8d44\u6e90\u7ba1\u7406-\u65b9\u6cd5\u64cd\u4f5c",permalink:"/docs/1.15.x/\u6838\u5fc3\u7ec4\u4ef6/\u8d44\u6e90\u7ba1\u7406/\u8d44\u6e90\u7ba1\u7406-\u65b9\u6cd5\u64cd\u4f5c"}},l={},t=[{value:"1. <code>gf pack</code> \u751f\u6210 <code>Go</code> \u6587\u4ef6",id:"1-gf-pack-\u751f\u6210-go-\u6587\u4ef6",level:3},{value:"2. \u4f7f\u7528\u6253\u5305\u7684 <code>Go</code> \u6587\u4ef6",id:"2-\u4f7f\u7528\u6253\u5305\u7684-go-\u6587\u4ef6",level:3},{value:"1) \u5728 <code>boot</code> \u5305\u4e2d\u4f18\u5148\u5f15\u5165 <code>packed</code> \u8d44\u6e90\u5305",id:"1-\u5728-boot-\u5305\u4e2d\u4f18\u5148\u5f15\u5165-packed-\u8d44\u6e90\u5305",level:4},{value:"2) \u5728 <code>main</code> \u5305\u4e2d\u4f18\u5148\u5f15\u5165 <code>boot</code> \u5305",id:"2-\u5728-main-\u5305\u4e2d\u4f18\u5148\u5f15\u5165-boot-\u5305",level:4},{value:"3. \u6253\u5370\u8d44\u6e90\u7ba1\u7406\u6587\u4ef6\u5217\u8868",id:"3-\u6253\u5370\u8d44\u6e90\u7ba1\u7406\u6587\u4ef6\u5217\u8868",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"gf"})," \u547d\u4ee4\u884c\u5de5\u5177\u7684 ",(0,o.jsx)(n.code,{children:"pack"})," \u547d\u4ee4\u5b9e\u73b0\u5bf9\u4efb\u610f\u6587\u4ef6/\u76ee\u5f55\u7684\u6253\u5305\uff0c\u5173\u4e8e ",(0,o.jsx)(n.code,{children:"gf"})," \u547d\u4ee4\u884c\u5de5\u5177\u7684\u5b89\u88c5\u548c\u4f7f\u7528\u5177\u4f53\u8bf7\u67e5\u770b ",(0,o.jsx)(n.a,{href:"output/goframe-v1.15-md/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7",children:"\u5f00\u53d1\u5de5\u5177"})," \u7ae0\u8282\u3002\u7531\u4e8e\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u8fdb\u884c\u6253\u5305\u6bd4\u8f83\u7b80\u4fbf\uff0c\u56e0\u6b64\u4e5f\u662f\u63a8\u8350\u7684\u6253\u5305\u65b9\u5f0f\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"gf pack"})," \u7684\u547d\u4ee4\u4ecb\u7ecd\u5982\u4e0b\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-undefined",children:'$ gf pack -h\nUSAGE\n    gf pack SRC DST\n\nARGUMENT\n    SRC  source path for packing, which can be multiple source paths.\n    DST  destination file path for packed file. if extension of the filename is ".go" and "-n" option is given,\n         it enables packing SRC to go file, or else it packs SRC into a binary file.\n\nOPTION\n    -n, --name      package name for output go file, it\'s set as its directory name if no name passed\n    -p, --prefix    prefix for each file packed into the resource file\n\nEXAMPLES\n    gf pack public data.bin\n    gf pack public,template data.bin\n    gf pack public,template packed/data.go\n    gf pack public,template,config packed/data.go\n    gf pack public,template,config packed/data.go -n=packed -p=/var/www/my-app\n    gf pack /var/www/public packed/data.go -n=packed\n\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"1-gf-pack-\u751f\u6210-go-\u6587\u4ef6",children:["1. ",(0,o.jsx)(n.code,{children:"gf pack"})," \u751f\u6210 ",(0,o.jsx)(n.code,{children:"Go"})," \u6587\u4ef6"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6bd4\u8f83\u63a8\u8350\u7684\u65b9\u5f0f\u662f\u5c06 ",(0,o.jsx)(n.code,{children:"Go"})," \u6587\u4ef6\u76f4\u63a5\u751f\u6210\u5230 ",(0,o.jsx)(n.code,{children:"boot"})," \u542f\u52a8\u76ee\u5f55\uff0c\u5e76\u8bbe\u7f6e\u751f\u6210 ",(0,o.jsx)(n.code,{children:"Go"})," \u6587\u4ef6\u7684\u5305\u540d\u4e3a ",(0,o.jsx)(n.code,{children:"boot"}),"\uff0c\u8fd9\u6837\u8be5\u8d44\u6e90\u6587\u4ef6\u5c06\u4f1a\u88ab\u81ea\u52a8\u5f15\u5165\u5230\u9879\u76ee\u4e2d\u3002\u6211\u4eec\u5c06\u9879\u76ee\u7684 ",(0,o.jsx)(n.code,{children:"config,public,template"})," \u4e09\u4e2a\u76ee\u5f55\u7684\u6587\u4ef6\u6253\u5305\u5230 ",(0,o.jsx)(n.code,{children:"Go"})," \u6587\u4ef6\uff0c\u6253\u5305\u547d\u4ee4\u4e3a\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-undefined",children:"gf pack config,public,template packed/data.go -n packed\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u751f\u6210\u7684 ",(0,o.jsx)(n.code,{children:"Go"})," \u6587\u4ef6\u5185\u5bb9\u7c7b\u4f3c\u4e8e\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package packed\n\nimport "github.com/gogf/gf/os/gres"\n\nfunc init() {\n\tif err := gres.Add("H4sIAAAAAAAC/5y8c5Bl0Zbuu9O2bVaq0rZZ6Urbtm3bNnfatipto9"); err != nil {\n\t\tpanic(err)\n\t}\n}\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u751f\u6210\u7684 ",(0,o.jsx)(n.code,{children:"Go"})," \u6587\u4ef6\u4e2d\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"gres.Add"})," \u65b9\u6cd5\u5c06\u8d44\u6e90\u6587\u4ef6\u7684\u4e8c\u8fdb\u5236\u5185\u5bb9\u6dfb\u52a0\u5230\u9ed8\u8ba4\u7684\u8d44\u6e90\u7ba1\u7406\u5668\u4e2d\uff0c\u8be5\u65b9\u6cd5\u7684\u53c2\u6570\u662f\u538b\u7f29\u8fc7\u540e\u7684BASE64\u5b57\u7b26\u4e32\uff0c\u5c06\u4f1a\u5728\u7a0b\u5e8f\u542f\u52a8\u7684\u65f6\u5019\u505a\u89e3\u538b\u5e76\u5728\u5185\u5b58\u4e2d\u751f\u6210\u4e00\u4e2a\u6587\u4ef6\u6811\u5bf9\u8c61\uff0c\u4fbf\u4e8e\u5728\u8fd0\u884c\u65f6\u5feb\u901f\u64cd\u4f5c\u6587\u4ef6\u3002"]}),"\n",(0,o.jsxs)(n.h3,{id:"2-\u4f7f\u7528\u6253\u5305\u7684-go-\u6587\u4ef6",children:["2. \u4f7f\u7528\u6253\u5305\u7684 ",(0,o.jsx)(n.code,{children:"Go"})," \u6587\u4ef6"]}),"\n",(0,o.jsxs)(n.h4,{id:"1-\u5728-boot-\u5305\u4e2d\u4f18\u5148\u5f15\u5165-packed-\u8d44\u6e90\u5305",children:["1) \u5728 ",(0,o.jsx)(n.code,{children:"boot"})," \u5305\u4e2d\u4f18\u5148\u5f15\u5165 ",(0,o.jsx)(n.code,{children:"packed"})," \u8d44\u6e90\u5305"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u9879\u76ee\u7684 ",(0,o.jsx)(n.code,{children:"boot"})," \u7a0b\u5e8f\u542f\u52a8\u8bbe\u7f6e\u5305\u4e2d\u81ea\u52a8\u5f15\u5165 ",(0,o.jsx)(n.code,{children:"packed"})," \u8d44\u6e90\u5305\uff0c\u5e76\u4e14\u5e94\u5f53\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u5f15\u5165\u7684\u5305\uff0c\u4ee5\u4fbf\u4e8e\u5176\u4ed6\u5f15\u5165\u7684\u5305\u5728\u521d\u59cb\u5316\u65f6\uff08 ",(0,o.jsx)(n.code,{children:"init"})," \u65b9\u6cd5\u4e2d\uff09\u4fbf\u80fd\u4f7f\u7528\u5230\u8d44\u6e90\u5185\u5bb9\uff0c\u4f8b\u5982\u50cf\u8fd9\u6837\uff08 ",(0,o.jsx)(n.code,{children:"module"})," \u540d\u79f0\u4e3a ",(0,o.jsx)(n.code,{children:"my-app"}),"\uff09\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'import (\n    _ "my-app/packed"\n\n    // \u5176\u4ed6\u5305\n)\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u91cc\u5efa\u8bae\u5f15\u5165 ",(0,o.jsx)(n.code,{children:"packed"})," \u5305\u548c\u5176\u4ed6\u5305\u4e4b\u95f4\u52a0\u5165\u4e00\u4e2a\u7a7a\u884c\u4ee5\u4f5c\u533a\u5206\uff0c\u7279\u522b\u662f ",(0,o.jsx)(n.code,{children:"Goland"})," IDE\u7684 ",(0,o.jsx)(n.code,{children:"import"})," \u63d2\u4ef6\u4e0d\u4f1a\u5c06\u5f15\u5165\u5305\u8fdb\u884c\u81ea\u52a8\u6392\u5e8f\u3002"]}),"\n",(0,o.jsxs)(n.h4,{id:"2-\u5728-main-\u5305\u4e2d\u4f18\u5148\u5f15\u5165-boot-\u5305",children:["2) \u5728 ",(0,o.jsx)(n.code,{children:"main"})," \u5305\u4e2d\u4f18\u5148\u5f15\u5165 ",(0,o.jsx)(n.code,{children:"boot"})," \u5305"]}),"\n",(0,o.jsxs)(n.p,{children:["\u7531\u4e8e\u9879\u76ee\u7684 ",(0,o.jsx)(n.code,{children:"main"})," \u5165\u53e3\u7a0b\u5e8f\u6587\u4ef6\u4f1a\u5f15\u5165 ",(0,o.jsx)(n.code,{children:"boot"})," \u5305\uff0c\u5e76\u4e14\u5e94\u5f53\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u5f15\u5165\u7684\u5305\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'import (\n    _ "my-app/boot"\n\n    // \u5176\u4ed6\u5305\n)\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u91cc\u5efa\u8bae\u5f15\u5165 ",(0,o.jsx)(n.code,{children:"boot"})," \u5305\u548c\u5176\u4ed6\u5305\u4e4b\u95f4\u52a0\u5165\u4e00\u4e2a\u7a7a\u884c\u4ee5\u4f5c\u533a\u5206\uff0c\u7279\u522b\u662f ",(0,o.jsx)(n.code,{children:"Goland"})," IDE\u7684 ",(0,o.jsx)(n.code,{children:"import"})," \u63d2\u4ef6\u4e0d\u4f1a\u5c06\u5f15\u5165\u5305\u8fdb\u884c\u81ea\u52a8\u6392\u5e8f\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u968f\u540e\u53ef\u4ee5\u5728\u9879\u76ee\u7684\u4efb\u4f55\u5730\u65b9\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"gres"})," \u6a21\u5757\u6765\u8bbf\u95ee\u6253\u5305\u7684\u8d44\u6e90\u6587\u4ef6\u3002"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"GF"})," \u63a8\u8350\u7684\u9879\u76ee\u76ee\u5f55\u7ed3\u6784\uff08\u65b0\u5efa\u9879\u76ee\uff09\uff0c\u5728\u76ee\u5f55\u7ed3\u6784\u4e2d\u4f1a\u5b58\u5728 ",(0,o.jsx)(n.code,{children:"boot"})," \u76ee\u5f55\uff08\u5bf9\u5e94\u5305\u540d\u4e5f\u662f ",(0,o.jsx)(n.code,{children:"boot"}),"\uff09\uff0c\u7528\u4e8e\u7a0b\u5e8f\u542f\u52a8\u8bbe\u7f6e\u3002\u56e0\u6b64\u5982\u679c\u5c06 ",(0,o.jsx)(n.code,{children:"Go"})," \u6587\u4ef6\u751f\u6210\u5230 ",(0,o.jsx)(n.code,{children:"boot"})," \u76ee\u5f55\u4e0b\uff0c\u90a3\u4e48\u5c06\u4f1a\u88ab\u81ea\u52a8\u7f16\u8bd1\u8fdb\u53ef\u6267\u884c\u6587\u4ef6\u4e2d\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"3-\u6253\u5370\u8d44\u6e90\u7ba1\u7406\u6587\u4ef6\u5217\u8868",children:"3. \u6253\u5370\u8d44\u6e90\u7ba1\u7406\u6587\u4ef6\u5217\u8868"}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"gres.Dump()"})," \u65b9\u6cd5\u6253\u5370\u51fa\u5f53\u524d\u8d44\u6e90\u7ba1\u7406\u5668\u4e2d\u6240\u6709\u7684\u6587\u4ef6\u5217\u8868\uff0c\u8f93\u51fa\u5185\u5bb9\u7c7b\u4f3c\u4e8e\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"2019-09-15T13:36:28+00:00   0.00B config\n2019-07-27T07:26:12+00:00   1.34K config/config.toml\n2019-09-15T13:36:28+00:00   0.00B public\n2019-06-25T17:03:56+00:00   0.00B public/resource\n2018-12-04T12:50:16+00:00   0.00B public/resource/css\n2018-12-17T12:54:26+00:00   0.00B public/resource/css/document\n2018-12-17T12:54:26+00:00   4.20K public/resource/css/document/style.css\n2018-08-24T01:46:58+00:00  32.00B public/resource/css/index.css\n2019-05-23T03:51:24+00:00   0.00B public/resource/image\n2018-08-20T05:02:08+00:00  24.01K public/resource/image/cover.png\n2019-05-23T03:51:24+00:00   4.19K public/resource/image/favicon.ico\n2018-08-23T01:44:50+00:00   4.19K public/resource/image/gf.ico\n2018-12-04T13:04:34+00:00   0.00B public/resource/js\n2019-06-27T11:06:12+00:00   0.00B public/resource/js/document\n2019-06-27T11:06:12+00:00  11.67K public/resource/js/document/index.js\n2019-09-15T13:36:28+00:00   0.00B template\n2019-02-02T09:08:56+00:00   0.00B template/document\n2018-12-04T12:49:08+00:00   0.00B template/document/include\n2018-12-04T12:49:08+00:00 329.00B template/document/include/404.html\n2019-03-06T01:52:56+00:00   3.42K template/document/index.html\n...\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u4f7f\u7528\u8d44\u6e90\u7ba1\u7406\u5668\u4e2d\u7684\u8d44\u6e90\u6587\u4ef6\u65f6\uff0c\u9700\u8981\u4e25\u683c\u6309\u7167\u5176\u8def\u5f84\u8fdb\u884c\u68c0\u7d22\u83b7\u53d6\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>s,x:()=>r});var o=c(296540);const d={},i=o.createContext(d);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
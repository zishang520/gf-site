"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[75214],{138498:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"quick/\u5feb\u901f\u5f00\u59cb/\u4e0b\u8f7d\u4e0e\u4f7f\u7528","title":"\u4e0b\u8f7d\u4e0e\u4f7f\u7528","description":"GoFrame\u6846\u67b6\u7684\u5feb\u901f\u5f00\u59cb\u6307\u5357\u3002GoFrame\u662f\u4e00\u6b3e\u6a21\u5757\u5316\u3001\u4f4e\u8026\u5408\u8bbe\u8ba1\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u5305\u542b\u5e38\u7528\u57fa\u7840\u7ec4\u4ef6\u548c\u5f00\u53d1\u5de5\u5177\uff0c\u9002\u7528\u4e8e\u5b8c\u6574\u4e1a\u52a1\u9879\u76ee\u548c\u72ec\u7acb\u7ec4\u4ef6\u5e93\u3002\u5185\u5bb9\u6db5\u76d6GoFrame\u7684\u4e0b\u8f7d\u4e0e\u5b89\u88c5\u3001\u8fd0\u884c\u57fa\u672c\u64cd\u4f5c\uff0c\u5e76\u4ecb\u7ecd\u5982\u4f55\u5f00\u53d1\u7b80\u6613Web Server\u63a5\u53e3\u5e94\u7528\u3002","source":"@site/versioned_docs/version-2.7.x/quick/\u5feb\u901f\u5f00\u59cb/\u4e0b\u8f7d\u4e0e\u4f7f\u7528.md","sourceDirName":"quick/\u5feb\u901f\u5f00\u59cb","slug":"/quick/install","permalink":"/en/2.7.x/quick/install","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/quick/\u5feb\u901f\u5f00\u59cb/\u4e0b\u8f7d\u4e0e\u4f7f\u7528.md","tags":[],"version":"2.7.x","sidebarPosition":1,"frontMatter":{"slug":"/quick/install","title":"\u4e0b\u8f7d\u4e0e\u4f7f\u7528","hide_title":true,"sidebar_position":1,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u5b89\u88c5GoFrame","\u6a21\u5757\u5316\u6846\u67b6","\u4f4e\u8026\u5408\u8bbe\u8ba1","Web Server\u63a5\u53e3\u5f00\u53d1","Go\u8bed\u8a00\u73af\u5883","\u9879\u76ee\u6846\u67b6","\u57fa\u7840\u7ec4\u4ef6","HTTP Server"],"description":"GoFrame\u6846\u67b6\u7684\u5feb\u901f\u5f00\u59cb\u6307\u5357\u3002GoFrame\u662f\u4e00\u6b3e\u6a21\u5757\u5316\u3001\u4f4e\u8026\u5408\u8bbe\u8ba1\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u5305\u542b\u5e38\u7528\u57fa\u7840\u7ec4\u4ef6\u548c\u5f00\u53d1\u5de5\u5177\uff0c\u9002\u7528\u4e8e\u5b8c\u6574\u4e1a\u52a1\u9879\u76ee\u548c\u72ec\u7acb\u7ec4\u4ef6\u5e93\u3002\u5185\u5bb9\u6db5\u76d6GoFrame\u7684\u4e0b\u8f7d\u4e0e\u5b89\u88c5\u3001\u8fd0\u884c\u57fa\u672c\u64cd\u4f5c\uff0c\u5e76\u4ecb\u7ecd\u5982\u4f55\u5f00\u53d1\u7b80\u6613Web Server\u63a5\u53e3\u5e94\u7528\u3002"},"sidebar":"quickSidebar","previous":{"title":"\u5feb\u901f\u5f00\u59cb","permalink":"/en/2.7.x/quick"},"next":{"title":"Hello World","permalink":"/en/2.7.x/quick/hello-world"}}');var o=r(474848),s=r(28453);const c={slug:"/quick/install",title:"\u4e0b\u8f7d\u4e0e\u4f7f\u7528",hide_title:!0,sidebar_position:1,keywords:["GoFrame","GoFrame\u6846\u67b6","\u5b89\u88c5GoFrame","\u6a21\u5757\u5316\u6846\u67b6","\u4f4e\u8026\u5408\u8bbe\u8ba1","Web Server\u63a5\u53e3\u5f00\u53d1","Go\u8bed\u8a00\u73af\u5883","\u9879\u76ee\u6846\u67b6","\u57fa\u7840\u7ec4\u4ef6","HTTP Server"],description:"GoFrame\u6846\u67b6\u7684\u5feb\u901f\u5f00\u59cb\u6307\u5357\u3002GoFrame\u662f\u4e00\u6b3e\u6a21\u5757\u5316\u3001\u4f4e\u8026\u5408\u8bbe\u8ba1\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u5305\u542b\u5e38\u7528\u57fa\u7840\u7ec4\u4ef6\u548c\u5f00\u53d1\u5de5\u5177\uff0c\u9002\u7528\u4e8e\u5b8c\u6574\u4e1a\u52a1\u9879\u76ee\u548c\u72ec\u7acb\u7ec4\u4ef6\u5e93\u3002\u5185\u5bb9\u6db5\u76d6GoFrame\u7684\u4e0b\u8f7d\u4e0e\u5b89\u88c5\u3001\u8fd0\u884c\u57fa\u672c\u64cd\u4f5c\uff0c\u5e76\u4ecb\u7ecd\u5982\u4f55\u5f00\u53d1\u7b80\u6613Web Server\u63a5\u53e3\u5e94\u7528\u3002"},l=void 0,d={},a=[{value:"\u9650\u5236",id:"\u9650\u5236",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2}];function t(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u5927\u5bb6\u597d\uff0c\u6b22\u8fce\u8bbf\u95ee ",(0,o.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u5feb\u901f\u5f00\u59cb\u7ae0\u8282\uff01\n\u7531\u4e8e ",(0,o.jsx)(n.code,{children:"GoFrame"})," \u662f\u4e00\u6b3e\u6a21\u5757\u5316\u3001\u4f4e\u8026\u5408\u8bbe\u8ba1\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u5305\u542b\u4e86\u5e38\u7528\u7684\u57fa\u7840\u7ec4\u4ef6\u548c\u5f00\u53d1\u5de5\u5177\uff0c\u65e2\u53ef\u4ee5\u4f5c\u4e3a\u5b8c\u6574\u7684\u4e1a\u52a1\u9879\u76ee\u6846\u67b6\u4f7f\u7528\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u72ec\u7acb\u7684\u7ec4\u4ef6\u5e93\u4f7f\u7528\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4eec\u672c\u7ae0\u8282\u4ece\u6846\u67b6\u7684\u4e0b\u8f7d\u5b89\u88c5\u4f7f\u7528\u5f00\u59cb\uff0c\u5230\u6307\u5bfc\u5927\u5bb6\u5b8c\u6210\u4e00\u4e2a\u8f83\u5b8c\u5584\u7684",(0,o.jsx)(n.code,{children:"Web Server"}),"\u63a5\u53e3\u5f00\u53d1\u3002"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u8fd8\u672a\u51c6\u5907\u597d",(0,o.jsx)(n.code,{children:"Go"}),"\u8bed\u8a00\u5f00\u53d1\u73af\u5883\uff0c\u5efa\u8bae\u60a8\u5148\u67e5\u9605\u73af\u5883\u5b89\u88c5\u6587\u6863\uff1a",(0,o.jsx)(n.a,{href:"/en/2.7.x/docs/install-go",children:"\u73af\u5883\u5b89\u88c5"}),"\n\u4e86\u89e3\u4e00\u4e9b\u57fa\u7840\u7684",(0,o.jsx)(n.code,{children:"Go"}),"\u8bed\u8a00\u77e5\u8bc6\u518d\u8fdb\u884c\u4e0b\u4e00\u6b65\u3002"]})}),"\n",(0,o.jsx)(n.h2,{id:"\u9650\u5236",children:"\u9650\u5236"}),"\n",(0,o.jsxs)(n.p,{children:["\u4e3a\u4fdd\u8bc1\u6846\u67b6\u7684\u7a33\u5b9a\u6027\u548c\u5b89\u5168\u6027\uff0c",(0,o.jsx)(n.code,{children:"GoFrame"}),"\u6846\u67b6\u8981\u6c42\u7684\u6700\u4f4e\u7684\u57fa\u7840",(0,o.jsx)(n.code,{children:"Go"}),"\u8bed\u8a00\u7248\u672c\u901a\u5e38\u4f1a\u6bd4\u6700\u65b0\u7684",(0,o.jsx)(n.code,{children:"Go"}),"\u8bed\u8a00\u7248\u672c\u4f4e",(0,o.jsx)(n.code,{children:"1~3"}),"\u4e2a\u7248\u672c\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5f53\u524d\u6700\u65b0\u6846\u67b6\u7248\u672c\u8981\u6c42\u7684\u6700\u4f4e",(0,o.jsx)(n.code,{children:"Go"}),"\u8bed\u8a00\u7248\u672c\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"golang\u7248\u672c >= 1.20\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,o.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b89\u88c5\u6846\u67b6\u6700\u65b0\u7248\u672c\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go get -u -v github.com/gogf/gf/v2\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u901a\u5e38\uff0c\u5728\u9879\u76ee\u7684 ",(0,o.jsx)(n.code,{children:"go.mod"})," \u4e2d\u5305\u542b\u5e76\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"GoFrame"})," \u7684\u6700\u65b0\u7248\u672c:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"require github.com/gogf/gf/v2 latest\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f",(0,o.jsx)(n.code,{children:"Goland IDE"}),"\uff0c\u90a3\u4e48\u5728\u4fee\u6539",(0,o.jsx)(n.code,{children:"go.mod"}),"\u540e\u7b49\u5f85\u7247\u523b\uff0c",(0,o.jsx)(n.code,{children:"IDE"}),"\u5c06\u4f1a\u81ea\u52a8\u4e0b\u8f7d\u66f4\u65b0\u6700\u65b0\u7684",(0,o.jsx)(n.code,{children:"GoFrame"}),"\u7248\u672c\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f\u5176\u4ed6",(0,o.jsx)(n.code,{children:"IDE"}),"\uff0c\u5728\u4fee\u6539",(0,o.jsx)(n.code,{children:"go.mod"}),"\u540e\uff0c\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u6267\u884c\uff1a","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go mod tidy\n"})}),"\n","\u4e0b\u8f7d\u66f4\u65b0\u6700\u65b0\u7684",(0,o.jsx)(n.code,{children:"GoFrame"}),"\u7248\u672c\u3002"]}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"\u8fd0\u884c",children:"\u8fd0\u884c"}),"\n",(0,o.jsx)(n.p,{children:"\u6211\u4eec\u5c1d\u8bd5\u8fd0\u884c\u4ee5\u4e0b\u4ee3\u7801\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2"\n)\n\nfunc main() {\n    fmt.Println("Hello GF:", gf.VERSION)\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u6bb5\u7b80\u5355\u7684\u4ee3\u7801\u793a\u4f8b\u662f\u6253\u5370\u5f53\u524d\u5f15\u5165\u7684",(0,o.jsx)(n.code,{children:"GoFrame"}),"\u6846\u67b6\u7248\u672c\u3002\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6267\u884c\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u60a8\u5c06\u4f1a\u5728\u7ec8\u7aef\u770b\u5230\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Hello GF: v2.7.4\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u606d\u559c\u60a8\uff01\u8fd9\u8868\u793a\u60a8\u5df2\u7ecf\u6210\u529f\u5f15\u7528\u4e86",(0,o.jsx)(n.code,{children:"GoFrame"}),"\u5230\u5f53\u524d\u9879\u76ee\u4e2d\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u4e0b\u4e00\u6b65\uff0c\u6211\u4eec\u5c06\u4f7f\u7528",(0,o.jsx)(n.code,{children:"GoFrame"}),"\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684",(0,o.jsx)(n.code,{children:"HTTP Server"}),"\u670d\u52a1\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var i=r(296540);const o={},s=i.createContext(o);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
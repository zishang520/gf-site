"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[71548],{182843:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var s=r(474848),t=r(28453);const c={title:"HTTPClient-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},l=void 0,i={id:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u57fa\u672c\u4f7f\u7528",title:"HTTPClient-\u57fa\u672c\u4f7f\u7528",description:"\u57fa\u672c\u4f7f\u7528",source:"@site/versioned_docs/version-2.0.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u57fa\u672c\u4f7f\u7528.md",sourceDirName:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient",slug:"/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/docs/2.0.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u57fa\u672c\u4f7f\u7528",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u57fa\u672c\u4f7f\u7528.md",tags:[],version:"2.0.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:0,frontMatter:{title:"HTTPClient-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"HTTPClient",permalink:"/gf-site/docs/2.0.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/"},next:{title:"HTTPClient-\u6587\u4ef6\u4e0a\u4f20",permalink:"/gf-site/docs/2.0.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u6587\u4ef6\u4e0a\u4f20"}},d={},o=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"<code>*Bytes</code> \u53ca <code>*Content</code> \u65b9\u6cd5",id:"bytes-\u53ca-content-\u65b9\u6cd5",level:2},{value:"<code>*Var</code> \u65b9\u6cd5",id:"var-\u65b9\u6cd5",level:2},{value:"<code>New</code> \u65b9\u6cd5\u7684\u4f7f\u7528",id:"new-\u65b9\u6cd5\u7684\u4f7f\u7528",level:2}];function a(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u51e0\u4e2aHTTP\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u7b80\u5355\u793a\u4f8b\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["\u53d1\u9001 ",(0,s.jsx)(n.code,{children:"GET"})," \u8bf7\u6c42\uff0c\u5e76\u6253\u5370\u51fa\u8fd4\u56de\u503c"]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'if r, err := g.Client().Get(ctx, "https://goframe.org"); err != nil {\n       panic(err)\n}\ndefer r.Close()\nfmt.Println(r.ReadAllString())\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["\u53d1\u9001 ",(0,s.jsx)(n.code,{children:"GET"})," \u8bf7\u6c42\uff0c\u4e0b\u8f7d\u8fdc\u7a0b\u6587\u4ef6"]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'if r, err := g.Client().Get(ctx, "https://goframe.org/cover.png"); err != nil {\n       panic(err)\n}\ndefer r.Close()\ngfile.PutBytes("/Users/john/Temp/cover.png", r.ReadAll())\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u8f7d\u6587\u4ef6\u64cd\u4f5c\uff0c\u5c0f\u6587\u4ef6\u4e0b\u8f7d\u975e\u5e38\u7b80\u5355\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u8fdc\u7a0b\u6587\u4ef6\u6bd4\u8f83\u5927\u65f6\uff0c\u670d\u52a1\u7aef\u4f1a\u5206\u6279\u8fd4\u56de\u6570\u636e\uff0c\u56e0\u6b64\u4f1a\u9700\u8981\u5ba2\u6237\u7aef\u53d1\u591a\u4e2a ",(0,s.jsx)(n.code,{children:"GET"})," \u8bf7\u6c42\uff0c\u6bcf\u4e00\u6b21\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"Header"})," \u6765\u8bf7\u6c42\u5206\u6279\u7684\u6587\u4ef6\u8303\u56f4\u957f\u5ea6\uff0c\u611f\u5174\u8da3\u7684\u540c\u5b66\u53ef\u81ea\u884c\u7814\u7a76\u76f8\u5173\u7ec6\u8282\u3002"]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["\u53d1\u9001 ",(0,s.jsx)(n.code,{children:"POST"})," \u8bf7\u6c42\uff0c\u5e76\u6253\u5370\u51fa\u8fd4\u56de\u503c"]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'if r, err := g.Client().Post(ctx, "http://127.0.0.1:8199/form", "name=john&age=18"); err != nil {\n       panic(err)\n}\ndefer r.Close()\nfmt.Println(r.ReadAllString())\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f20\u9012\u591a\u53c2\u6570\u7684\u65f6\u5019\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"&"})," \u7b26\u53f7\u8fdb\u884c\u8fde\u63a5\uff0c\u6ce8\u610f\u53c2\u6570\u503c\u5f80\u5f80\u9700\u8981\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"gurl.Encode"})," \u7f16\u7801\u4e00\u4e0b\u3002"]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["\u53d1\u9001 ",(0,s.jsx)(n.code,{children:"POST"})," \u8bf7\u6c42\uff0c\u53c2\u6570\u4e3a ",(0,s.jsx)(n.code,{children:"map"})," \u7c7b\u578b\uff0c\u5e76\u6253\u5370\u51fa\u8fd4\u56de\u503c"]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'if r, err := g.Client().Post(\n       ctx,\n       "http://127.0.0.1:8199/form",\n       g.Map{\n           "submit"   : "1",\n           "callback" : "http://127.0.0.1/callback?url=http://baidu.com",\n       }\n)); err != nil {\n       panic(err)\n}\ndefer r.Close()\nfmt.Println(r.ReadAllString())\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f20\u9012\u591a\u53c2\u6570\u7684\u65f6\u5019\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"&"})," \u7b26\u53f7\u8fdb\u884c\u8fde\u63a5\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"map"}),"\uff08\u5176\u5b9e\u4e4b\u524d\u4e5f\u63d0\u5230\uff0c\u4efb\u610f\u6570\u636e\u7c7b\u578b\u90fd\u652f\u6301\uff0c\u5305\u62ec ",(0,s.jsx)(n.code,{children:"struct"}),"\uff09\u3002"]}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["\u53d1\u9001 ",(0,s.jsx)(n.code,{children:"POST"})," \u8bf7\u6c42\uff0c\u53c2\u6570\u4e3a ",(0,s.jsx)(n.code,{children:"JSON"})," \u6570\u636e\uff0c\u5e76\u6253\u5370\u51fa\u8fd4\u56de\u503c"]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'if r, err := g.Client().Post(\n       ctx,\n       "http://user.svc/v1/user/create",\n       `{"passport":"john","password":"123456","password-confirm":"123456"}`,\n); err != nil {\n       panic(err)\n}\ndefer r.Close()\nfmt.Println(r.ReadAllString())\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"ghttp"})," \u5ba2\u6237\u7aef\u53d1\u9001 ",(0,s.jsx)(n.code,{children:"JSON"})," \u6570\u636e\u8bf7\u6c42\u975e\u5e38\u65b9\u4fbf\uff0c\u76f4\u63a5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"Post"})," \u65b9\u6cd5\u63d0\u4ea4\u5373\u53ef\uff0c\u5ba2\u6237\u7aef\u4f1a\u81ea\u52a8\u5c06\u8bf7\u6c42\u7684 ",(0,s.jsx)(n.code,{children:"Content-Type"})," \u8bbe\u7f6e\u4e3a ",(0,s.jsx)(n.code,{children:"application/json"}),"\u3002"]}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["\u53d1\u9001 ",(0,s.jsx)(n.code,{children:"DELETE"})," \u8bf7\u6c42\uff0c\u5e76\u6253\u5370\u51fa\u8fd4\u56de\u503c"]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'if r, err := g.Client().Delete(ctx, "http://user.svc/v1/user/delete/1", "10000"); err != nil {\n       panic(err)\n}\ndefer r.Close()\nfmt.Println(r.ReadAllString())\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"bytes-\u53ca-content-\u65b9\u6cd5",children:[(0,s.jsx)(n.code,{children:"*Bytes"})," \u53ca ",(0,s.jsx)(n.code,{children:"*Content"})," \u65b9\u6cd5"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5 ",(0,s.jsx)(n.code,{children:"Bytes"})," \u53ca ",(0,s.jsx)(n.code,{children:"Content"})," \u540e\u7f00\u7ed3\u5c3e\u7684\u8bf7\u6c42\u65b9\u6cd5\u4e3a\u76f4\u63a5\u83b7\u53d6\u8fd4\u56de\u5185\u5bb9\u7684\u5feb\u6377\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u5c06\u4f1a\u81ea\u52a8\u8bfb\u53d6\u670d\u52a1\u7aef\u8fd4\u56de\u5185\u5bb9\u5e76\u81ea\u52a8\u5173\u95ed\u8bf7\u6c42\u8fde\u63a5\u3002 ",(0,s.jsx)(n.code,{children:"*Bytes"})," \u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6 ",(0,s.jsx)(n.code,{children:"[]byte"})," \u7c7b\u578b\u7ed3\u679c\uff0c ",(0,s.jsx)(n.code,{children:"*Content"})," \u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6 ",(0,s.jsx)(n.code,{children:"string"})," \u7c7b\u578b\u7ed3\u679c\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u8bf7\u6c42\u6267\u884c\u5931\u8d25\uff0c\u8fd4\u56de\u5185\u5bb9\u5c06\u4f1a\u4e3a\u7a7a\u3002"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["\u53d1\u9001 ",(0,s.jsx)(n.code,{children:"GET"})," \u8bf7\u6c42\uff0c\u8fd4\u56de\u670d\u52a1\u7aef\u8fd4\u56de\u5185\u5bb9"]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'    // \u8fd4\u56decontent\u4e3a[]bytes\u7c7b\u578b\n    content := g.Client().GetBytes(ctx, "https://goframe.org")\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'    // \u8fd4\u56decontent\u4e3astring\u7c7b\u578b\n    content := g.Client().GetContent(ctx, "https://goframe.org")\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["\u53d1\u9001 ",(0,s.jsx)(n.code,{children:"POST"})," \u8bf7\u6c42\uff0c\u8fd4\u56de\u670d\u52a1\u7aef\u8fd4\u56de\u5185\u5bb9"]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// \u8fd4\u56decontent\u4e3a[]bytes\u7c7b\u578b\ncontent := g.Client().PostBytes(ctx,\n       "http://user.svc/v1/user/create",\n       `{"passport":"john","password":"123456","password-confirm":"123456"}`,\n)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// \u8fd4\u56decontent\u4e3astring\u7c7b\u578b\ncontent := g.Client().PostContent(ctx,\n       "http://user.svc/v1/user/create",\n       `{"passport":"john","password":"123456","password-confirm":"123456"}`,\n)\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"var-\u65b9\u6cd5",children:[(0,s.jsx)(n.code,{children:"*Var"})," \u65b9\u6cd5"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5 ",(0,s.jsx)(n.code,{children:"Var"})," \u540e\u7f00\u7ed3\u5c3e\u7684\u8bf7\u6c42\u65b9\u6cd5\u76f4\u63a5\u8bf7\u6c42\u5e76\u83b7\u53d6HTTP\u63a5\u53e3\u7ed3\u679c\u4e3a ",(0,s.jsx)(n.code,{children:"g.Var"})," \u6cdb\u578b\u7c7b\u578b\u4fbf\u4e8e\u8f6c\u6362\u3002\u5f80\u5f80\u7528\u4e8e\u670d\u52a1\u7aef\u8fd4\u56de\u683c\u5f0f\u4e3a ",(0,s.jsx)(n.code,{children:"JSON/XML"})," \u7684\u60c5\u51b5\uff0c\u901a\u8fc7\u8fd4\u56de\u7684 ",(0,s.jsx)(n.code,{children:"g.Var"})," \u6cdb\u578b\u5bf9\u8c61\u53ef\u6839\u636e\u9700\u8981\u81ea\u52a8\u89e3\u6790\u3002\u6b64\u5916\uff0c\u5982\u679c\u8bf7\u6c42\u5931\u8d25\u6216\u8005\u8bf7\u6c42\u7ed3\u679c\u4e3a\u7a7a\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a\u7a7a\u7684 ",(0,s.jsx)(n.code,{children:"g.Var"})," \u6cdb\u578b\u5bf9\u8c61\uff0c\u4e0d\u5f71\u54cd\u8f6c\u6362\u65b9\u6cd5\u8c03\u7528\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"type User struct {\n    Id   int\n    Name string\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// Struct\nvar user *User\ng.Client().GetVar(ctx, url).Scan(&user)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// Struct\u6570\u7ec4\nvar users []*User\ng.Client().GetVar(ctx, url).Scan(&users)\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"new-\u65b9\u6cd5\u7684\u4f7f\u7528",children:[(0,s.jsx)(n.code,{children:"New"})," \u65b9\u6cd5\u7684\u4f7f\u7528"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6b63\u5e38 ",(0,s.jsx)(n.code,{children:"New"})," \u65b9\u6cd5\u7684\u4f7f\u7528\u65b9\u5f0f"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'func ExampleNew() {\n    var (\n        ctx    = gctx.New()\n        client = gclient.New()\n    )\n\n    if r, err := client.Get(ctx, "http://127.0.0.1:8999/var/json"); err != nil {\n        panic(err)\n    } else {\n        defer r.Close()\n        fmt.Println(r.ReadAllString())\n    }\n\n    // Output:\n    // {"id":1,"name":"john"}\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u539f\u751f ",(0,s.jsx)(n.code,{children:"http.Client"})," \u5c31\u652f\u6301\u4e86\u8fde\u63a5\u6c60\u7684\u4f7f\u7528, \u53ea\u9700\u8981\u8bbe\u7f6e ",(0,s.jsx)(n.code,{children:"http.Tranport"})," \u7684\u5c5e\u6027\u5373\u53ef\u652f\u6301."]}),"\n",(0,s.jsxs)(n.p,{children:["\u540c\u65f6\u6ce8\u610f\u5728\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"Get"})," \u65b9\u6cd5\u62ff\u5230 ",(0,s.jsx)(n.code,{children:"Response"})," \u5bf9\u8c61\u540e, \u9700\u8981\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"ReadAllString()"})," \u83b7\u53d6 ",(0,s.jsx)(n.code,{children:"Body"}),", \u5426\u5219\u7a0b\u5e8f\u4f1a\u963b\u585e."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'func ExampleNew_MultiConn_Recommend() {\n    var (\n        ctx    = gctx.New()\n        client = g.Client()\n    )\n\n    // controls the maximum idle(keep-alive) connections to keep per-host\n    client.Transport.(*http.Transport).MaxIdleConnsPerHost = 5\n\n    for i := 0; i < 5; i++ {\n        go func() {\n            if r, err := client.Get(ctx, "http://127.0.0.1:8999/var/json"); err != nil {\n                panic(err)\n            } else {\n                fmt.Println(r.ReadAllString())\n                r.Close()\n            }\n        }()\n    }\n\n    time.Sleep(time.Second * 1)\n\n    // Output:\n    //{"id":1,"name":"john"}\n    //{"id":1,"name":"john"}\n    //{"id":1,"name":"john"}\n    //{"id":1,"name":"john"}\n    //{"id":1,"name":"john"}\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var s=r(296540);const t={},c=s.createContext(t);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);
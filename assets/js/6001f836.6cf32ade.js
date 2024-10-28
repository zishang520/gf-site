"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[84121],{82249:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=c(474848),i=c(28453);const o={title:"gqueue (\u961f\u5217)",sidebar_position:6},t=void 0,r={id:"\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/gqueue -\u961f\u5217",title:"gqueue (\u961f\u5217)",description:"\u52a8\u6001\u5927\u5c0f\u7684\u5e76\u53d1\u5b89\u5168\u961f\u5217\u3002\u540c\u65f6\uff0c gqueue \u4e5f\u652f\u6301\u56fa\u5b9a\u961f\u5217\u5927\u5c0f\uff0c\u56fa\u5b9a\u961f\u5217\u5927\u5c0f\u65f6\u961f\u5217\u6548\u7387\u548c\u6807\u51c6\u5e93\u7684 channel \u65e0\u5f02\u3002",source:"@site/versioned_docs/version-1.15.x/2-\u6a21\u5757\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/6-gqueue -\u961f\u5217.md",sourceDirName:"2-\u6a21\u5757\u5217\u8868/0-\u6570\u636e\u7ed3\u6784",slug:"/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/gqueue -\u961f\u5217",permalink:"/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/gqueue -\u961f\u5217",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.15.x/2-\u6a21\u5757\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/6-gqueue -\u961f\u5217.md",tags:[],version:"1.15.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:6,frontMatter:{title:"gqueue (\u961f\u5217)",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"gtype (\u5e76\u53d1\u5b89\u5168\u7c7b\u578b)",permalink:"/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/gtype -\u5e76\u53d1\u5b89\u5168\u7c7b\u578b"},next:{title:"gtree (\u6811\u5f62)",permalink:"/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/gtree -\u6811\u5f62"}},d={},l=[{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528",id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u793a\u4f8b2\uff0c\u7ed3\u5408 <code>select</code> \u8bed\u6cd5\u4f7f\u7528",id:"\u793a\u4f8b2\u7ed3\u5408-select-\u8bed\u6cd5\u4f7f\u7528",level:3},{value:"<code>gqueue</code> \u4e0e <code>glist</code>",id:"gqueue-\u4e0e-glist",level:2},{value:"<code>gqueue</code> \u4e0e <code>channel</code>",id:"gqueue-\u4e0e-channel",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u52a8\u6001\u5927\u5c0f\u7684\u5e76\u53d1\u5b89\u5168\u961f\u5217\u3002\u540c\u65f6\uff0c ",(0,s.jsx)(n.code,{children:"gqueue"})," \u4e5f\u652f\u6301\u56fa\u5b9a\u961f\u5217\u5927\u5c0f\uff0c\u56fa\u5b9a\u961f\u5217\u5927\u5c0f\u65f6\u961f\u5217\u6548\u7387\u548c\u6807\u51c6\u5e93\u7684 ",(0,s.jsx)(n.code,{children:"channel"})," \u65e0\u5f02\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u961f\u5217\u662f\u5e76\u53d1\u5b89\u5168\u7684\uff0c\u5e38\u7528\u4e8e\u591a ",(0,s.jsx)(n.code,{children:"goroutine"})," \u6570\u636e\u901a\u4fe1\u4e14\u652f\u6301\u52a8\u6001\u961f\u5217\u5927\u5c0f\u7684\u573a\u666f\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/container/gqueue"\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://godoc.org/github.com/gogf/gf/container/gqueue",children:"https://godoc.org/github.com/gogf/gf/container/gqueue"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",children:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/os/gtimer"\n    "github.com/gogf/gf/container/gqueue"\n)\n\nfunc main() {\n    q := gqueue.New()\n    // \u6570\u636e\u751f\u4ea7\u8005\uff0c\u6bcf\u96941\u79d2\u5f80\u961f\u5217\u5199\u6570\u636e\n    gtimer.SetInterval(time.Second, func() {\n        v := gtime.Now().String()\n        q.Push(v)\n        fmt.Println("Push:", v)\n    })\n\n    // 3\u79d2\u540e\u5173\u95ed\u961f\u5217\n    gtimer.SetTimeout(3*time.Second, func() {\n        q.Close()\n    })\n\n    // \u6d88\u8d39\u8005\uff0c\u4e0d\u505c\u8bfb\u53d6\u961f\u5217\u6570\u636e\u5e76\u8f93\u51fa\u5230\u7ec8\u7aef\n    for {\n        if v := q.Pop(); v != nil {\n            fmt.Println(" Pop:", v)\n        } else {\n            break\n        }\n    }\n}\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u7b2c3\u79d2\u65f6\u5173\u95ed\u961f\u5217\uff0c\u8fd9\u65f6\u7a0b\u5e8f\u7acb\u5373\u9000\u51fa\uff0c\u56e0\u6b64\u7ed3\u679c\u4e2d\u53ea\u4f1a\u6253\u53702\u79d2\u7684\u6570\u636e\u3002 \u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"Push: 2018-09-07 14:03:00\n Pop: 2018-09-07 14:03:00\nPush: 2018-09-07 14:03:01\n Pop: 2018-09-07 14:03:01\n\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u793a\u4f8b2\u7ed3\u5408-select-\u8bed\u6cd5\u4f7f\u7528",children:["\u793a\u4f8b2\uff0c\u7ed3\u5408 ",(0,s.jsx)(n.code,{children:"select"})," \u8bed\u6cd5\u4f7f\u7528"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u961f\u5217\u5bf9\u8c61\u516c\u5f00\u7684 ",(0,s.jsx)(n.code,{children:"Queue.C"})," \u5c5e\u6027\uff0c\u7ed3\u5408 ",(0,s.jsx)(n.code,{children:"select"})," IO\u590d\u7528\u8bed\u6cd5\u5b9e\u73b0\u5bf9\u961f\u5217\u7684\u8bfb\u53d6\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/container/gqueue"\n    "github.com/gogf/gf/os/gtime"\n    "github.com/gogf/gf/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    queue := gqueue.New()\n    // \u6570\u636e\u751f\u4ea7\u8005\uff0c\u6bcf\u96941\u79d2\u5f80\u961f\u5217\u5199\u6570\u636e\n    gtimer.SetInterval(time.Second, func() {\n        queue.Push(gtime.Now().String())\n    })\n\n    // \u6d88\u8d39\u8005\uff0c\u4e0d\u505c\u8bfb\u53d6\u961f\u5217\u6570\u636e\u5e76\u8f93\u51fa\u5230\u7ec8\u7aef\n    for {\n        select {\n            case v := <-queue.C:\n                if v != nil {\n                    fmt.Println(v)\n                } else {\n                    return\n                }\n        }\n    }\n}\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-undefined",children:"2019-01-23 20:42:01\n2019-01-23 20:42:02\n2019-01-23 20:42:03\n2019-01-23 20:42:04\n2019-01-23 20:42:05\n2019-01-23 20:42:06\n...\n\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"gqueue-\u4e0e-glist",children:[(0,s.jsx)(n.code,{children:"gqueue"})," \u4e0e ",(0,s.jsx)(n.code,{children:"glist"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gqueue"})," \u7684\u5e95\u5c42\u57fa\u4e8e ",(0,s.jsx)(n.code,{children:"glist"})," \u94fe\u8868\u5b9e\u73b0\u52a8\u6001\u5927\u5c0f\u7279\u6027\uff0c\u5728\u961f\u5217\u6ee1\u6216\u8005\u5728\u961f\u5217\u7a7a\u65f6\u8bfb\u53d6\u6570\u636e\u4f1a\u4ea7\u751f\u963b\u585e\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"glist"})," \u662f\u4e00\u4e2a\u5e76\u53d1\u5b89\u5168\u7684\u94fe\u8868\uff0c\u5e76\u53ef\u4ee5\u5141\u8bb8\u5728\u5173\u95ed\u5e76\u53d1\u5b89\u5168\u7279\u6027\u7684\u65f6\u548c\u4e00\u4e2a\u666e\u901a\u7684 ",(0,s.jsx)(n.code,{children:"list"})," \u94fe\u8868\u65e0\u5f02\uff0c\u5728\u5b58\u50a8\u548c\u8bfb\u53d6\u6570\u636e\u65f6\u4e0d\u4f1a\u53d1\u751f\u963b\u585e\u3002"]}),"\n",(0,s.jsxs)(n.h2,{id:"gqueue-\u4e0e-channel",children:[(0,s.jsx)(n.code,{children:"gqueue"})," \u4e0e ",(0,s.jsx)(n.code,{children:"channel"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gqueue"})," \u4e0e\u6807\u51c6\u5e93 ",(0,s.jsx)(n.code,{children:"channel"})," \u7684\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\uff0c\u5176\u4e2d\u6bcf\u4e00\u6b21\u57fa\u51c6\u6d4b\u8bd5\u7684 ",(0,s.jsx)(n.code,{children:"b.N"})," \u503c\u5747\u4e3a ",(0,s.jsx)(n.code,{children:"20000000"}),"\uff0c\u4ee5\u4fdd\u8bc1\u52a8\u6001\u961f\u5217\u5b58\u53d6\u4e00\u81f4\u9632\u6b62 ",(0,s.jsx)(n.code,{children:"deadlock"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"goos: linux\ngoarch: amd64\npkg: github.com/gogf/gf/container/gqueue\nBenchmark_Gqueue_StaticPushAndPop-4       20000000            84.2 ns/op\nBenchmark_Gqueue_DynamicPush-4            20000000             164 ns/op\nBenchmark_Gqueue_DynamicPop-4             20000000             121 ns/op\nBenchmark_Channel_PushAndPop-4            20000000            70.0 ns/op\nPASS\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u6807\u51c6\u5e93\u7684 ",(0,s.jsx)(n.code,{children:"channel"})," \u7684\u8bfb\u5199\u6027\u80fd\u662f\u975e\u5e38\u9ad8\u7684\uff0c\u4f46\u662f\u521b\u5efa\u7684\u65f6\u5019\u7531\u4e8e\u9700\u8981\u521d\u59cb\u5316\u5185\u5b58\uff0c\u56e0\u6b64\u521b\u5efa ",(0,s.jsx)(n.code,{children:"channel"})," \u7684\u65f6\u5019\u6548\u7387\u975e\u5e38\u975e\u5e38\u4f4e\uff08\u521d\u59cb\u5316\u5373\u5206\u914d\u5185\u5b58\uff09\uff0c\u5e76\u4e14\u53d7\u5230\u961f\u5217\u5927\u5c0f\u7684\u9650\u5236\uff0c\u5199\u5165\u7684\u6570\u636e\u4e0d\u80fd\u8d85\u8fc7\u6307\u5b9a\u7684\u961f\u5217\u5927\u5c0f\u3002 ",(0,s.jsx)(n.code,{children:"gqueue"})," \u4f7f\u7528\u8d77\u6765\u6bd4 ",(0,s.jsx)(n.code,{children:"channel"})," \u66f4\u52a0\u7075\u6d3b\uff0c\u4e0d\u4ec5\u521b\u5efa\u6548\u7387\u9ad8\uff08\u52a8\u6001\u5206\u914d\u5185\u5b58\uff09\uff0c\u4e0d\u53d7\u961f\u5217\u5927\u5c0f\u9650\u5236(\u4e5f\u53ef\u9650\u5b9a\u5927\u5c0f)\u3002"]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>t,x:()=>r});var s=c(296540);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[26469],{761736:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>t});var i=c(474848),r=c(28453);const s={title:"gproc (\u8fdb\u7a0b\u7ba1\u7406\u901a\u4fe1)",sidebar_position:14},l=void 0,o={id:"\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gproc -\u8fdb\u7a0b\u7ba1\u7406\u901a\u4fe1",title:"gproc (\u8fdb\u7a0b\u7ba1\u7406\u901a\u4fe1)",description:"\u8fdb\u7a0b\u7ba1\u7406\u4ee5\u53ca\u8fdb\u7a0b\u95f4\u7684\u901a\u4fe1\u662f\u901a\u8fc7 gproc \u6a21\u5757\u5b9e\u73b0\u7684\uff0c\u5176\u4e2d\u8fdb\u7a0b\u95f4\u901a\u4fe1\u91c7\u7528\u7684\u662f\u672c\u5730socket\u901a\u4fe1\u673a\u5236\u3002",source:"@site/versioned_docs/version-1.15.x/2-\u6a21\u5757\u5217\u8868/3-\u7cfb\u7edf\u76f8\u5173/14-gproc -\u8fdb\u7a0b\u7ba1\u7406\u901a\u4fe1.md",sourceDirName:"2-\u6a21\u5757\u5217\u8868/3-\u7cfb\u7edf\u76f8\u5173",slug:"/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gproc -\u8fdb\u7a0b\u7ba1\u7406\u901a\u4fe1",permalink:"/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gproc -\u8fdb\u7a0b\u7ba1\u7406\u901a\u4fe1",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.15.x/2-\u6a21\u5757\u5217\u8868/3-\u7cfb\u7edf\u76f8\u5173/14-gproc -\u8fdb\u7a0b\u7ba1\u7406\u901a\u4fe1.md",tags:[],version:"1.15.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:14,frontMatter:{title:"gproc (\u8fdb\u7a0b\u7ba1\u7406\u901a\u4fe1)",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"gfsnotify (\u6587\u4ef6\u76d1\u63a7\u6a21\u5757)",permalink:"/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gfsnotify -\u6587\u4ef6\u76d1\u63a7\u6a21\u5757"},next:{title:"gview (\u6a21\u677f\u5f15\u64ce\u6a21\u5757)",permalink:"/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gview -\u6a21\u677f\u5f15\u64ce\u6a21\u5757"}},d={},t=[{value:"\u8fdb\u7a0b\u7ba1\u7406",id:"\u8fdb\u7a0b\u7ba1\u7406",level:2},{value:"\u6267\u884cShell\u547d\u4ee4",id:"\u6267\u884cshell\u547d\u4ee4",level:3},{value:"\u4e3b\u8fdb\u7a0b\u4e0e\u5b50\u8fdb\u7a0b",id:"\u4e3b\u8fdb\u7a0b\u4e0e\u5b50\u8fdb\u7a0b",level:3},{value:"\u591a\u8fdb\u7a0b\u7ba1\u7406",id:"\u591a\u8fdb\u7a0b\u7ba1\u7406",level:3},{value:"\u8fdb\u7a0b\u901a\u4fe1 - Experimental feature!",id:"\u8fdb\u7a0b\u901a\u4fe1---experimental-feature",level:2}];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u8fdb\u7a0b\u7ba1\u7406\u4ee5\u53ca\u8fdb\u7a0b\u95f4\u7684\u901a\u4fe1\u662f\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"gproc"})," \u6a21\u5757\u5b9e\u73b0\u7684\uff0c\u5176\u4e2d\u8fdb\u7a0b\u95f4\u901a\u4fe1\u91c7\u7528\u7684\u662f\u672c\u5730socket\u901a\u4fe1\u673a\u5236\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/os/gproc"\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://godoc.org/github.com/gogf/gf/os/gproc",children:"https://godoc.org/github.com/gogf/gf/os/gproc"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Manager"})," \u5bf9\u8c61\u4e3a\u8fdb\u7a0b\u7ba1\u7406\u5bf9\u8c61\uff0c\u53ef\u4ee5\u540c\u65f6\u7ba1\u7406\u591a\u4e2a\u5b50\u8fdb\u7a0b(\u5f53\u524d\u6267\u884c\u8fdb\u7a0b\u4e3a\u7236\u8fdb\u7a0b)\uff1b"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Process"})," \u4e3a\u8fdb\u7a0b\u5bf9\u8c61\uff0c\u8868\u793a\u7279\u5b9a\u6267\u884c\u6216\u8005\u83b7\u53d6\u7684\u4e00\u4e2a\u8fdb\u7a0b\u8d44\u6e90\uff1b"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"Shell"}),"\u3001 ",(0,i.jsx)(n.code,{children:"ShellExec"}),"\u3001 ",(0,i.jsx)(n.code,{children:"ShellRun"})," \u6765\u6267\u884cShell\u6307\u4ee4\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Shell"})," \u8868\u793a\u4e00\u4e2a\u539f\u751f\u7684Shell\u6307\u4ee4\u6267\u884c\u65b9\u5f0f\uff0c\u5e26\u81ea\u5b9a\u4e49\u7684\u8f93\u5165\u548c\u8f93\u51fa\u63a7\u5236\uff1b"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ShellExec"})," \u6267\u884c\u547d\u4ee4\u540e\u5c06\u4f1a\u8fd4\u56de\u8f93\u51fa\u7684\u7ed3\u679c\u5185\u5bb9\uff1b"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ShellRun"})," \u6267\u884c\u547d\u4ee4\u540e\u5c06\u4f1a\u76f4\u63a5\u5c06\u8fd4\u56de\u5185\u5bb9\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\uff1b"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528goroutine\u6765\u5b9e\u73b0\u5f02\u6b65\u7684\u6267\u884c\uff0c\u5982\uff1a ",(0,i.jsx)(n.code,{children:"go ShellRun(...)"})," \u7b49\u7b49\uff1b"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4e8e\u8fdb\u7a0b\u7ba1\u7406\u53ca\u901a\u4fe1\u7684\u5185\u5bb9\u6bd4\u8f83\u591a\uff0c\u4ee5\u4e0b\u5bf9\u5e38\u7528\u7684\u51e0\u79cd\u4f7f\u7528\u505a\u7b80\u5355\u4ecb\u7ecd\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8fdb\u7a0b\u7ba1\u7406",children:"\u8fdb\u7a0b\u7ba1\u7406"}),"\n",(0,i.jsx)(n.h3,{id:"\u6267\u884cshell\u547d\u4ee4",children:"\u6267\u884cShell\u547d\u4ee4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/os/gproc"\n    "fmt"\n)\n\nfunc main () {\n    r, err := gproc.ShellExec(`sleep 3s; echo "hello gf!";`)\n    fmt.Println("result:", r)\n    fmt.Println(err)\n}\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u7a0b\u5e8f\u7b49\u5f85\u4e863\u79d2\u4e4b\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"result: hello gf!\n\n<nil>\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4e3b\u8fdb\u7a0b\u4e0e\u5b50\u8fdb\u7a0b",children:"\u4e3b\u8fdb\u7a0b\u4e0e\u5b50\u8fdb\u7a0b"}),"\n",(0,i.jsxs)(n.p,{children:["\u7531 ",(0,i.jsx)(n.code,{children:"gproc.Manager"})," \u5bf9\u8c61\u521b\u5efa\u7684\u8fdb\u7a0b\u90fd\u9ed8\u8ba4\u5e26\u5b50\u8fdb\u7a0b\u6807\u8bc6\uff0c\u5728\u5b50\u8fdb\u7a0b\u7a0b\u5e8f\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"gproc.IsChild()"})," \u65b9\u6cd5\u6765\u5224\u65ad\u81ea\u8eab\u662f\u5426\u4e3a\u5b50\u8fdb\u7a0b\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "os"\n    "time"\n    "github.com/gogf/gf/os/glog"\n    "github.com/gogf/gf/os/gproc"\n)\n\nfunc main () {\n    if gproc.IsChild() {\n        glog.Printf("%d: Hi, I am child, waiting 3 seconds to die", gproc.Pid())\n        time.Sleep(time.Second)\n        glog.Printf("%d: 1", gproc.Pid())\n        time.Sleep(time.Second)\n        glog.Printf("%d: 2", gproc.Pid())\n        time.Sleep(time.Second)\n        glog.Printf("%d: 3", gproc.Pid())\n    } else {\n        m := gproc.NewManager()\n        p := m.NewProcess(os.Args[0], os.Args, os.Environ())\n        p.Start()\n        p.Wait()\n        glog.Printf("%d: child died", gproc.Pid())\n    }\n}\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u6253\u5370\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"2018-05-18 14:35:41.360 28285: Hi, I am child, waiting 3 seconds to die\n2018-05-18 14:35:42.361 28285: 1\n2018-05-18 14:35:43.361 28285: 2\n2018-05-18 14:35:44.361 28285: 3\n2018-05-18 14:35:44.362 28278: child died\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u591a\u8fdb\u7a0b\u7ba1\u7406",children:"\u591a\u8fdb\u7a0b\u7ba1\u7406"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gproc"})," \u9664\u4e86\u80fd\u591f\u521b\u5efa\u5b50\u8fdb\u7a0b\uff0c\u7ba1\u7406\u5b50\u8fdb\u7a0b\u4e4b\u5916\uff0c\u4e5f\u80fd\u7ba1\u7406\u975e\u81ea\u8eab\u521b\u5efa\u7684\u5176\u4ed6\u8fdb\u7a0b\u3002 ",(0,i.jsx)(n.code,{children:"gproc"})," \u53ef\u4ee5\u540c\u65f6\u7ba1\u7406\u591a\u4e2a\u8fdb\u7a0b\uff0c\u8fd9\u91cc\u4ee5\u5355\u4e2a\u8fdb\u7a0b\u4e3a\u4f8b\u6765\u6f14\u793a\u5bf9\u8fdb\u7a0b\u7684\u7ba1\u7406\u529f\u80fd\u3002"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6211\u4eec\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"gedit"})," \u8f6f\u4ef6(Linux\u4e0b\u5e38\u7528\u7684\u6587\u672c\u7f16\u8f91\u5668)\u968f\u610f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\uff0c\u5728\u8fdb\u7a0b\u5f53\u4e2d\u6211\u4eec\u770b\u5230\u8be5gedit\u7684\u8fdb\u7a0bID\u4e3a ",(0,i.jsx)(n.code,{children:"28536"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"    $ ps aux | grep gedit\n    john  28536  3.6  0.6 946208 56412 ?  Sl  14:39  0:00 gedit /home/john/Documents/text\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\u6211\u4eec\u7684\u7a0b\u5e8f\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\n\nimport (\n       "fmt"\n       "github.com/gogf/gf/os/gproc"\n)\n\n\nfunc main () {\n       pid := 28536\n       m   := gproc.NewManager()\n       m.AddProcess(pid)\n       m.KillAll()\n       m.WaitAll()\n       fmt.Printf("%d was killed\\n", pid)\n}\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u6267\u884c\u540e\uff0c ",(0,i.jsx)(n.code,{children:"gedit"})," \u88ab\u5173\u95ed\uff0c\u7ec8\u7aef\u8f93\u51fa\u4fe1\u606f\u4e3a\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"28536 was killed\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u8fdb\u7a0b\u901a\u4fe1---experimental-feature",children:"\u8fdb\u7a0b\u901a\u4fe1 - Experimental feature!"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a\u662f\u5b9e\u9a8c\u6027\u7279\u6027\uff01"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u4e0d\u8981\u901a\u8fc7\u5171\u4eab\u5185\u5b58\u6765\u901a\u4fe1\uff0c\u800c\u5e94\u8be5\u901a\u8fc7\u901a\u4fe1\u6765\u5171\u4eab\u5185\u5b58\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5e38\u89c1\u7684\u8fdb\u7a0b\u901a\u4fe1\u65b9\u5f0f\u67095\u79cd\uff1a ",(0,i.jsx)(n.code,{children:"\u7ba1\u9053/\u4fe1\u53f7\u91cf/\u5171\u4eab\u5185\u5b58/\u5171\u4eab\u6587\u4ef6/Socket"}),"\u3002\u6309\u7167\u5e38\u89c1\u7684\u5e76\u53d1\u67b6\u6784\u7684\u8bbe\u8ba1\u6765\u8bb2\uff0c\u6211\u4eec\u5c3d\u53ef\u80fd\u5730\u5c11\u7528 ",(0,i.jsx)(n.code,{children:"\u9501\u673a\u5236"}),"\uff0c\u5305\u62ec\u5171\u4eab\u5185\u5b58/\u5171\u4eab\u6587\u4ef6\u5176\u5b9e\u90fd\u662f\u9700\u8981\u4f9d\u9760\u9501\u673a\u5236\u624d\u80fd\u4fdd\u8bc1\u6570\u636e\u6d41\u7684\u6b63\u786e\u6027\uff0c\u56e0\u4e3a\u9501\u673a\u5236\u5e26\u6765\u7684\u7ef4\u62a4\u590d\u6742\u5ea6\u5f80\u5f80\u4f1a\u6bd4\u5176\u5e26\u6765\u7684\u597d\u5904\u66f4\u591a\u3002\u4fe1\u53f7\u91cf\u5e38\u7528\u5728 ",(0,i.jsx)(n.code,{children:"*nix"})," \u7cfb\u7edf\u4e2d\uff0c\u8de8\u5e73\u53f0\u6027\u6bd4\u8f83\u5dee\u3002\u7ba1\u9053\u867d\u7136\u5b9e\u73b0\u8d77\u6765\u6bd4\u8f83\u7b80\u5355\uff0c\u4f46\u662f\u5728\u7a33\u5b9a\u6027\u4e0a\u5e76\u6ca1\u6709Socket\u673a\u5236\u597d\u3002\u56e0\u6b64\uff0c ",(0,i.jsx)(n.code,{children:"gproc"})," \u5b9e\u73b0\u7684\u8fdb\u7a0b\u901a\u4fe1\u91c7\u7528\u7684\u662fSocket\u673a\u5236\u3002 ",(0,i.jsxs)(n.strong,{children:["\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u901a\u4fe1\u7684\u4e24\u4e2a\u8fdb\u7a0b\u90fd\u9700\u8981\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"gproc"})," \u6a21\u5757\u6765\u5b9e\u73b0\u53d1\u9001&\u63a5\u6536\u6570\u636e"]}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gproc"})," \u7684\u8fdb\u7a0b\u901a\u4fe1API\u975e\u5e38\u7b80\u4fbf\uff0c\u53ea\u9700\u901a\u8fc7\u4ee5\u4e0b\u4e24\u4e2a\u65b9\u6cd5\u5b9e\u73b0\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func Send(pid int, data []byte) error\nfunc Receive() *Msg\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"Send"})," \u65b9\u6cd5\u5411\u6307\u5b9a\u7684\u8fdb\u7a0b\u53d1\u9001\u6570\u636e\uff08\u6bcf\u8c03\u7528\u4e00\u6b21\u76f8\u5f53\u4e8e\u53d1\u9001\u4e00\u6761\u6d88\u606f\uff09\uff0c\u5728\u6307\u5b9a\u7684\u8fdb\u7a0b\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"Receive"})," \u65b9\u6cd5\u83b7\u5f97\u6570\u636e\u3002\u5176\u4e2d\uff0c ",(0,i.jsx)(n.code,{children:"Receive"})," \u65b9\u6cd5\u63d0\u4f9b\u4e86\u7c7b\u4f3c\u6d88\u606f\u961f\u5217\u7684\u5f62\u5f0f\u6765\u6536\u53d6\u5176\u4ed6\u8fdb\u7a0b\u4f20\u9012\u7684\u6570\u636e\uff0c\u5f53\u961f\u5217\u4e3a\u7a7a\u65f6\uff0c\u8be5\u65b9\u6cd5\u5c06\u4f1a ",(0,i.jsx)(n.code,{children:"\u963b\u585e"})," \u7b49\u5f85\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u8fdb\u7a0b\u95f4\u901a\u4fe1\u7684\u57fa\u672c\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "os"\n    "fmt"\n    "time"\n    "github.com/gogf/gf/os/gproc"\n    "github.com/gogf/gf/os/gtime"\n)\n\nfunc main () {\n    fmt.Printf("%d: I am child? %v\\n", gproc.Pid(), gproc.IsChild())\n    if gproc.IsChild() {\n        gtime.SetInterval(time.Second, func() bool {\n            gproc.Send(gproc.PPid(), []byte(gtime.Datetime()))\n            return true\n        })\n        select { }\n    } else {\n        m := gproc.NewManager()\n        p := m.NewProcess(os.Args[0], os.Args, os.Environ())\n        p.Start()\n        for {\n            msg := gproc.Receive()\n            fmt.Printf("receive from %d, data: %s\\n", msg.Pid, string(msg.Data))\n        }\n    }\n}\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u7684\u4e3b\u8fdb\u7a0b\u542f\u52a8\u65f6\u521b\u5efa\u4e86\u4e00\u4e2a\u5b50\u8fdb\u7a0b\uff0c\u8be5\u5b50\u8fdb\u7a0b\u6bcf\u96941\u79d2\u949f\u5411\u4e3b\u8fdb\u7a0b\u53d1\u9001\u5f53\u524d\u7684\u65f6\u95f4\uff0c\u4e3b\u8fdb\u7a0b\u6536\u53d6\u5230\u5b50\u8fdb\u7a0b\u53d1\u9001\u7684\u53c2\u6570\u540e\u8f93\u51fa\u5230\u7ec8\u7aef\u4e0a\u3002\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7684\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"29978: I am child? false\n29984: I am child? true\nreceive from 29984, data: 2018-05-18 15:01:00\nreceive from 29984, data: 2018-05-18 15:01:01\nreceive from 29984, data: 2018-05-18 15:01:02\nreceive from 29984, data: 2018-05-18 15:01:03\nreceive from 29984, data: 2018-05-18 15:01:04\n...\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>l,x:()=>o});var i=c(296540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
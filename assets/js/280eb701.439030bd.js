"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[51496],{886309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(474848),o=n(28453);const i={title:"\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3",sidebar_position:11},c=void 0,d={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3",title:"\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3",description:"Writer \u63a5\u53e3\u662f\u6700\u5e95\u5c42\u7684 IO \u5199\u5165\u63a5\u53e3\uff0c\u5982\u679c\u4e1a\u52a1\u9700\u8981\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5185\u5bb9\u6253\u5370\uff0c\u5efa\u8bae\u4f7f\u7528 Handler \u7279\u6027\uff0c\u53c2\u8003\u7ae0\u8282\uff1a \u65e5\u5fd7\u7ec4\u4ef6-Handler",source:"@site/versioned_docs/version-2.3.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/4-\u65e5\u5fd7\u7ec4\u4ef6/11-\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/4-\u65e5\u5fd7\u7ec4\u4ef6",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3",permalink:"/docs/2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/4-\u65e5\u5fd7\u7ec4\u4ef6/11-\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3.md",tags:[],version:"2.3.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:11,frontMatter:{title:"\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f",permalink:"/docs/2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f"},next:{title:"\u65e5\u5fd7\u7ec4\u4ef6-Flags\u7279\u6027",permalink:"/docs/2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Flags\u7279\u6027"}},l={},s=[{value:"\u81ea\u5b9a\u4e49 <code>Writer</code> \u63a5\u53e3",id:"\u81ea\u5b9a\u4e49-writer-\u63a5\u53e3",level:2},{value:"\u793a\u4f8b1\uff0c\u5b9e\u73b0\u65e5\u5fd7 <code>HOOK</code>",id:"\u793a\u4f8b1\u5b9e\u73b0\u65e5\u5fd7-hook",level:2},{value:"\u793a\u4f8b2\uff0c\u6574\u5408 <code>graylog</code>",id:"\u793a\u4f8b2\u6574\u5408-graylog",level:2}];function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Writer"})," \u63a5\u53e3\u662f\u6700\u5e95\u5c42\u7684 ",(0,r.jsx)(t.code,{children:"IO"})," \u5199\u5165\u63a5\u53e3\uff0c\u5982\u679c\u4e1a\u52a1\u9700\u8981\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5185\u5bb9\u6253\u5370\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"Handler"})," \u7279\u6027\uff0c\u53c2\u8003\u7ae0\u8282\uff1a ",(0,r.jsx)(t.a,{href:"output/goframe-v2.3-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%97%A5%E5%BF%97%E7%BB%84%E4%BB%B6/%E6%97%A5%E5%BF%97%E7%BB%84%E4%BB%B6-Handler",children:"\u65e5\u5fd7\u7ec4\u4ef6-Handler"})]}),"\n",(0,r.jsxs)(t.h2,{id:"\u81ea\u5b9a\u4e49-writer-\u63a5\u53e3",children:["\u81ea\u5b9a\u4e49 ",(0,r.jsx)(t.code,{children:"Writer"})," \u63a5\u53e3"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"glog"})," \u6a21\u5757\u5b9e\u73b0\u4e86\u6807\u51c6\u8f93\u51fa\u4ee5\u53ca\u6587\u4ef6\u8f93\u51fa\u7684\u65e5\u5fd7\u5185\u5bb9\u6253\u5370\u3002\u5f53\u7136\uff0c\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49 ",(0,r.jsx)(t.code,{children:"io.Writer"})," \u63a5\u53e3\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u65e5\u5fd7\u5185\u5bb9\u8f93\u51fa\u3002 ",(0,r.jsx)(t.code,{children:"io.Writer"})," \u662f\u6807\u51c6\u5e93\u63d0\u4f9b\u7684\u5185\u5bb9\u8f93\u51fa\u63a5\u53e3\uff0c\u5176\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"type Writer interface {\n\tWrite(p []byte) (n int, err error)\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"SetWriter"})," \u65b9\u6cd5\u6216\u8005\u94fe\u5f0f\u65b9\u6cd5 ",(0,r.jsx)(t.code,{children:"To"})," \u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49 ",(0,r.jsx)(t.code,{children:"Writer"})," \u8f93\u51fa\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u8be5 ",(0,r.jsx)(t.code,{children:"Writer"})," \u4e2d\u5b9e\u73b0\u5b9a\u4e49\u7684\u64cd\u4f5c\uff0c\u4e5f\u53ef\u4ee5\u5728\u5176\u4e2d\u6574\u5408\u5176\u4ed6\u7684\u6a21\u5757\u529f\u80fd\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u6b64\u5916\uff0c ",(0,r.jsx)(t.code,{children:"glog.Logger"})," \u5bf9\u8c61\u5df2\u7ecf\u5b9e\u73b0\u4e86 ",(0,r.jsx)(t.code,{children:"io.Writer"})," \u63a5\u53e3\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u5c06 ",(0,r.jsx)(t.code,{children:"glog"})," \u6574\u5408\u4f7f\u7528\u5230\u5176\u4ed6\u7684\u6a21\u5757\u4e2d\u3002"]}),"\n",(0,r.jsxs)(t.h2,{id:"\u793a\u4f8b1\u5b9e\u73b0\u65e5\u5fd7-hook",children:["\u793a\u4f8b1\uff0c\u5b9e\u73b0\u65e5\u5fd7 ",(0,r.jsx)(t.code,{children:"HOOK"})]}),"\n",(0,r.jsxs)(t.p,{children:["\u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 ",(0,r.jsx)(t.code,{children:"Writer"})," \u5bf9\u8c61 ",(0,r.jsx)(t.code,{children:"MyWriter"}),"\uff0c\u5728\u8be5\u5bf9\u8c61\u5b9e\u73b0\u7684 ",(0,r.jsx)(t.code,{children:"Writer"})," \u63a5\u53e3\u4e2d\u6211\u4eec\u5bf9\u65e5\u5fd7\u5185\u5bb9\u8fdb\u884c\u5224\u65ad\uff0c\u5982\u679c\u51fa\u73b0\u4e86 ",(0,r.jsx)(t.code,{children:"PANI"})," \u6216\u8005 ",(0,r.jsx)(t.code,{children:"FATA"})," \u9519\u8bef\uff0c\u90a3\u4e48\u8868\u793a\u662f\u975e\u5e38\u4e25\u91cd\u7684\u9519\u8bef\uff0c\u8be5\u63a5\u53e3\u5c06\u4f1a\u7b2c\u4e00\u65f6\u95f4\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"HTTP"})," \u63a5\u53e3\u544a\u77e5 ",(0,r.jsx)(t.code,{children:"Monitor"})," \u76d1\u63a7\u670d\u52a1\u3002\u968f\u540e\u518d\u5c06\u65e5\u5fd7\u5185\u5bb9\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"glog"})," \u6a21\u5757\u6309\u7167\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6\u548c\u6807\u51c6\u8f93\u51fa\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n\t"github.com/gogf/gf/v2/os/glog"\n\t"github.com/gogf/gf/v2/text/gregex"\n)\n\ntype MyWriter struct {\n\tlogger *glog.Logger\n}\n\nfunc (w *MyWriter) Write(p []byte) (n int, err error) {\n\tvar (\n\t\ts   = string(p)\n\t\tctx = context.Background()\n\t)\n\tif gregex.IsMatchString(`PANI|FATA`, s) {\n\t\tfmt.Println("SERIOUS ISSUE OCCURRED!! I\'d better tell monitor in first time!")\n\t\tg.Client().PostContent(ctx, "http://monitor.mydomain.com", s)\n\t}\n\treturn w.logger.Write(p)\n}\n\nfunc main() {\n\tvar ctx = context.Background()\n\tglog.SetWriter(&MyWriter{\n\t\tlogger: glog.New(),\n\t})\n\tglog.Fatal(ctx, "FATAL ERROR")\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"SERIOUS ISSUE OCCURRED!! I'd better tell monitor in first time!\n2019-05-23 20:14:49.374 [FATA] FATAL ERROR\nStack:\n1. /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_writer_hook.go:27\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"\u793a\u4f8b2\u6574\u5408-graylog",children:["\u793a\u4f8b2\uff0c\u6574\u5408 ",(0,r.jsx)(t.code,{children:"graylog"})]}),"\n",(0,r.jsxs)(t.p,{children:["\u5047\u5982\u6211\u4eec\u9700\u8981\u8f93\u51fa\u65e5\u5fd7\u5230\u6587\u4ef6\u53ca\u6807\u51c6\u8f93\u51fa\uff0c\u5e76\u4e14\u540c\u65f6\u4e5f\u9700\u8981\u8f93\u51fa\u65e5\u5fd7\u5230 ",(0,r.jsx)(t.code,{children:"Graylog"}),"\uff0c\u5f88\u660e\u663e\u8fd9\u4e2a\u4e5f\u662f\u9700\u8981\u81ea\u5b9a\u4e49 ",(0,r.jsx)(t.code,{children:"Writer"})," \u624d\u80fd\u5b9e\u73b0\u3002\u5f53\u7136\u540c\u7406\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8f93\u51fa\u5230\u5176\u4ed6\u7684\u65e5\u5fd7\u6536\u96c6\u7ec4\u4ef6\u6216\u8005\u6570\u636e\u5e93\u4e2d\u3002"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Graylog"})," \u662f\u4e0e ",(0,r.jsx)(t.code,{children:"ELK"})," \u53ef\u4ee5\u76f8\u63d0\u5e76\u8bba\u7684\u4e00\u6b3e\u96c6\u4e2d\u5f0f\u65e5\u5fd7\u7ba1\u7406\u65b9\u6848\uff0c\u652f\u6301\u6570\u636e\u6536\u96c6\u3001\u68c0\u7d22\u3001\u53ef\u89c6\u5316 ",(0,r.jsx)(t.code,{children:"Dashboard"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\u793a\u4f8b\u4ee3\u7801\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package main\n\nimport (\n\t"context"\n\n\t"github.com/gogf/gf/v2/os/glog"\n\t"github.com/robertkowalski/graylog-golang"\n)\n\ntype MyGrayLogWriter struct {\n\tgelf    *gelf.Gelf\n\tlogger  *glog.Logger\n}\n\nfunc (w *MyGrayLogWriter) Write(p []byte) (n int, err error) {\n\tw.gelf.Send(p)\n\treturn w.logger.Write(p)\n}\n\nfunc main() {\n\tvar ctx = context.Background()\n\tglog.SetWriter(&MyGrayLogWriter{\n\t\tlogger : glog.New(),\n\t\tgelf   : gelf.New(gelf.Config{\n\t\t\tGraylogPort     : 80,\n\t\t\tGraylogHostname : "graylog-host.com",\n\t\t\tConnection      : "wan",\n\t\t\tMaxChunkSizeWan : 42,\n\t\t\tMaxChunkSizeLan : 1337,\n\t\t}),\n\t})\n\tglog.Println(ctx, "test log")\n}\n'})})]})}function a(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var r=n(296540);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
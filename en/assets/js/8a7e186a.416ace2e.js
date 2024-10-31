"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[90906],{65963:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(74848),t=n(28453);const i={slug:"/micro-service/config",title:"\u670d\u52a1\u7aef\u914d\u7f6e",sidebar_position:3,hide_title:!0},s=void 0,c={id:"\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e",title:"\u670d\u52a1\u7aef\u914d\u7f6e",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/docs/6-\u5fae\u670d\u52a1\u5f00\u53d1/3-\u670d\u52a1\u7aef\u914d\u7f6e.md",sourceDirName:"6-\u5fae\u670d\u52a1\u5f00\u53d1",slug:"/micro-service/config",permalink:"/gf-site/en/docs/micro-service/config",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/6-\u5fae\u670d\u52a1\u5f00\u53d1/3-\u670d\u52a1\u7aef\u914d\u7f6e.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730354542e3,sidebarPosition:3,frontMatter:{slug:"/micro-service/config",title:"\u670d\u52a1\u7aef\u914d\u7f6e",sidebar_position:3,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u811a\u624b\u67b6\u6a21\u5757",permalink:"/gf-site/en/docs/micro-service/scaffold"},next:{title:"\u62e6\u622a\u5668\u7ec4\u4ef6",permalink:"/gf-site/en/docs/micro-service/interceptor"}},l={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u914d\u7f6e\u6a21\u677f",id:"\u914d\u7f6e\u6a21\u677f",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsx)(r.p,{children:"\u670d\u52a1\u7aef\u652f\u6301\u914d\u7f6e\u6587\u4ef6\uff0c\u6240\u6709\u7684\u914d\u7f6e\u5c06\u4f1a\u81ea\u52a8\u6620\u5c04\u5230\u914d\u7f6e\u5bf9\u8c61\u4e2d\u3002\u914d\u7f6e\u5bf9\u8c61\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-go",children:"// GrpcServerConfig is the configuration for server.\ntype GrpcServerConfig struct {\n    Address          string              // (optional) Address for server listening.\n    Name             string              // (optional) Name for current service.\n    Logger           *glog.Logger        // (optional) Logger for server.\n    LogPath          string              // (optional) LogPath specifies the directory for storing logging files.\n    LogStdout        bool                // (optional) LogStdout specifies whether printing logging content to stdout.\n    ErrorStack       bool                // (optional) ErrorStack specifies whether logging stack information when error.\n    ErrorLogEnabled  bool                // (optional) ErrorLogEnabled enables error logging content to files.\n    ErrorLogPattern  string              // (optional) ErrorLogPattern specifies the error log file pattern like: error-{Ymd}.log\n    AccessLogEnabled bool                // (optional) AccessLogEnabled enables access logging content to file.\n    AccessLogPattern string              // (optional) AccessLogPattern specifies the error log file pattern like: access-{Ymd}.log\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["\u914d\u7f6e\u6587\u4ef6\u7684\u81ea\u52a8\u8bfb\u53d6\u903b\u8f91\u4e0e\u6846\u67b6\u4e00\u81f4\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,o.jsx)(r.a,{href:"/gf-site/en/docs/core/gcfg",children:"\u914d\u7f6e\u7ba1\u7406"})]}),"\n",(0,o.jsx)(r.h2,{id:"\u914d\u7f6e\u6a21\u677f",children:"\u914d\u7f6e\u6a21\u677f"}),"\n",(0,o.jsx)(r.p,{children:"\u4e00\u4e2a\u5b8c\u6574\u7684\u914d\u7f6e\u6a21\u677f\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:'grpc:\n  name:             "demo"  # \u670d\u52a1\u540d\u79f0\n  address:          ":8000" # \u81ea\u5b9a\u4e49\u670d\u52a1\u76d1\u542c\u5730\u5740\n  logPath:          "./log" # \u65e5\u5fd7\u5b58\u50a8\u76ee\u5f55\u8def\u5f84\n  logStdout:        true    # \u65e5\u5fd7\u662f\u5426\u8f93\u51fa\u5230\u7ec8\u7aef\n  errorLogEnabled:  true    # \u662f\u5426\u5f00\u542f\u9519\u8bef\u65e5\u5fd7\u8bb0\u5f55\n  accessLogEnabled: true    # \u662f\u5426\u5f00\u542f\u8bbf\u95ee\u65e5\u5fd7\u8bb0\u5f55\n  errorStack:       true    # \u5f53\u4ea7\u751f\u9519\u8bef\u65f6\uff0c\u662f\u5426\u8bb0\u5f55\u9519\u8bef\u5806\u6808\n\n  # \u65e5\u5fd7\u6269\u5c55\u914d\u7f6e(\u53c2\u6570\u65e5\u5fd7\u7ec4\u4ef6\u914d\u7f6e)\n  logger:\n    path:                  "/var/log/"   # \u65e5\u5fd7\u6587\u4ef6\u8def\u5f84\u3002\u9ed8\u8ba4\u4e3a\u7a7a\uff0c\u8868\u793a\u5173\u95ed\uff0c\u4ec5\u8f93\u51fa\u5230\u7ec8\u7aef\n    file:                  "{Y-m-d}.log" # \u65e5\u5fd7\u6587\u4ef6\u683c\u5f0f\u3002\u9ed8\u8ba4\u4e3a"{Y-m-d}.log"\n    prefix:                ""            # \u65e5\u5fd7\u5185\u5bb9\u8f93\u51fa\u524d\u7f00\u3002\u9ed8\u8ba4\u4e3a\u7a7a\n    level:                 "all"         # \u65e5\u5fd7\u8f93\u51fa\u7ea7\u522b\n    stdout:                true          # \u65e5\u5fd7\u662f\u5426\u540c\u65f6\u8f93\u51fa\u5230\u7ec8\u7aef\u3002\u9ed8\u8ba4true\n    rotateSize:            0             # \u6309\u7167\u65e5\u5fd7\u6587\u4ef6\u5927\u5c0f\u5bf9\u6587\u4ef6\u8fdb\u884c\u6eda\u52a8\u5207\u5206\u3002\u9ed8\u8ba4\u4e3a0\uff0c\u8868\u793a\u5173\u95ed\u6eda\u52a8\u5207\u5206\u7279\u6027\n    rotateExpire:          0             # \u6309\u7167\u65e5\u5fd7\u6587\u4ef6\u65f6\u95f4\u95f4\u9694\u5bf9\u6587\u4ef6\u6eda\u52a8\u5207\u5206\u3002\u9ed8\u8ba4\u4e3a0\uff0c\u8868\u793a\u5173\u95ed\u6eda\u52a8\u5207\u5206\u7279\u6027\n    rotateBackupLimit:     0             # \u6309\u7167\u5207\u5206\u7684\u6587\u4ef6\u6570\u91cf\u6e05\u7406\u5207\u5206\u6587\u4ef6\uff0c\u5f53\u6eda\u52a8\u5207\u5206\u7279\u6027\u5f00\u542f\u65f6\u6709\u6548\u3002\u9ed8\u8ba4\u4e3a0\uff0c\u8868\u793a\u4e0d\u5907\u4efd\uff0c\u5207\u5206\u5219\u5220\u9664\n    rotateBackupExpire:    0             # \u6309\u7167\u5207\u5206\u7684\u6587\u4ef6\u6709\u6548\u671f\u6e05\u7406\u5207\u5206\u6587\u4ef6\uff0c\u5f53\u6eda\u52a8\u5207\u5206\u7279\u6027\u5f00\u542f\u65f6\u6709\u6548\u3002\u9ed8\u8ba4\u4e3a0\uff0c\u8868\u793a\u4e0d\u5907\u4efd\uff0c\u5207\u5206\u5219\u5220\u9664\n    rotateBackupCompress:  0             # \u6eda\u52a8\u5207\u5206\u6587\u4ef6\u7684\u538b\u7f29\u6bd4\uff080-9\uff09\u3002\u9ed8\u8ba4\u4e3a0\uff0c\u8868\u793a\u4e0d\u538b\u7f29\n    rotateCheckInterval:   "1h"          # \u6eda\u52a8\u5207\u5206\u7684\u65f6\u95f4\u68c0\u6d4b\u95f4\u9694\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u8bbe\u7f6e\u3002\u9ed8\u8ba4\u4e3a1\u5c0f\u65f6\n\n'})}),"\n",(0,o.jsxs)(r.p,{children:["\u5176\u4e2d\u7684\u65e5\u5fd7\u914d\u7f6e\u4e0e ",(0,o.jsx)(r.code,{children:"http server"})," \u4e00\u81f4\uff0c\u53ef\u4ee5\u72ec\u7acb\u4f7f\u7528\u65e5\u5fd7\u7ec4\u4ef6\u7684\u914d\u7f6e\u9879\u6765\u914d\u7f6e ",(0,o.jsx)(r.code,{children:"grpc server"})," \u7684\u65e5\u5fd7\u3002\u5173\u4e8e\u65e5\u5fd7\u7ec4\u4ef6\u7684\u914d\u7f6e\uff0c\u53ef\u53c2\u8003\u8be5\u6587\u6863\u8be6\u7ec6\u4e86\u89e3\uff1a ",(0,o.jsx)(r.a,{href:"/gf-site/en/docs/core/glog/config",children:"\u65e5\u5fd7\u7ec4\u4ef6-\u914d\u7f6e\u7ba1\u7406"})]}),"\n",(0,o.jsxs)(r.p,{children:["\u5728\u6ca1\u6709\u914d\u7f6e ",(0,o.jsx)(r.code,{children:"address"})," \u7684\u60c5\u51b5\u4e0b\uff0c ",(0,o.jsx)(r.code,{children:"grpc server"})," \u5c06\u4f1a\u4f7f\u7528\u672c\u5730\u7f51\u5361\u7684\u6240\u6709 ",(0,o.jsx)(r.code,{children:"ip"})," \u5730\u5740\u52a0\u4e0a ",(0,o.jsx)(r.strong,{children:"\u968f\u673a\u7a7a\u95f2\u7aef\u53e3"})," \u6765\u542f\u52a8\uff08\u9ed8\u8ba4\u914d\u7f6e ",(0,o.jsx)(r.code,{children:":0"}),"\uff09\u3002\u5982\u679c\u60f3\u8981\u6307\u5b9a ",(0,o.jsx)(r.code,{children:"ip"})," \u4f46\u662f\u4f7f\u7528\u968f\u673a\u7a7a\u95f2\u7aef\u53e3\u542f\u52a8 ",(0,o.jsx)(r.code,{children:"grpc server"}),"\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.jsx)(r.code,{children:"ip:0"})," \u7684\u683c\u5f0f\u6765\u914d\u7f6e ",(0,o.jsx)(r.code,{children:"address"}),"\uff0c\u4f8b\u5982\uff1a ",(0,o.jsx)(r.code,{children:"192.168.1.1:0, 10.0.1.1:0"}),"\u3002"]})]})}function g(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var o=n(96540);const t={},i=o.createContext(t);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);
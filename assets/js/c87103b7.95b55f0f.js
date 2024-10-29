"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[16108],{57129:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=o(74848),t=o(28453);const s={title:"\u670d\u52a1\u7aef\u914d\u7f6e",sidebar_position:3,hide_title:!0},i=void 0,c={id:"\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e",title:"\u670d\u52a1\u7aef\u914d\u7f6e",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.6.x/4-\u5fae\u670d\u52a1\u5f00\u53d1/3-\u670d\u52a1\u7aef\u914d\u7f6e.md",sourceDirName:"4-\u5fae\u670d\u52a1\u5f00\u53d1",slug:"/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e",permalink:"/gf-site/docs/2.6.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/4-\u5fae\u670d\u52a1\u5f00\u53d1/3-\u670d\u52a1\u7aef\u914d\u7f6e.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:1730215846e3,sidebarPosition:3,frontMatter:{title:"\u670d\u52a1\u7aef\u914d\u7f6e",sidebar_position:3,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u811a\u624b\u67b6\u6a21\u5757",permalink:"/gf-site/docs/2.6.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u811a\u624b\u67b6\u6a21\u5757"},next:{title:"\u62e6\u622a\u5668\u7ec4\u4ef6",permalink:"/gf-site/docs/2.6.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u62e6\u622a\u5668\u7ec4\u4ef6"}},d={},l=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u914d\u7f6e\u6a21\u677f",id:"\u914d\u7f6e\u6a21\u677f",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,n.jsx)(r.p,{children:"\u670d\u52a1\u7aef\u652f\u6301\u914d\u7f6e\u6587\u4ef6\uff0c\u6240\u6709\u7684\u914d\u7f6e\u5c06\u4f1a\u81ea\u52a8\u6620\u5c04\u5230\u914d\u7f6e\u5bf9\u8c61\u4e2d\u3002\u914d\u7f6e\u5bf9\u8c61\u5982\u4e0b\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:"// GrpcServerConfig is the configuration for server.\ntype GrpcServerConfig struct {\n    Address          string              // (optional) Address for server listening.\n    Name             string              // (optional) Name for current service.\n    Logger           *glog.Logger        // (optional) Logger for server.\n    LogPath          string              // (optional) LogPath specifies the directory for storing logging files.\n    LogStdout        bool                // (optional) LogStdout specifies whether printing logging content to stdout.\n    ErrorStack       bool                // (optional) ErrorStack specifies whether logging stack information when error.\n    ErrorLogEnabled  bool                // (optional) ErrorLogEnabled enables error logging content to files.\n    ErrorLogPattern  string              // (optional) ErrorLogPattern specifies the error log file pattern like: error-{Ymd}.log\n    AccessLogEnabled bool                // (optional) AccessLogEnabled enables access logging content to file.\n    AccessLogPattern string              // (optional) AccessLogPattern specifies the error log file pattern like: access-{Ymd}.log\n}\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u914d\u7f6e\u6587\u4ef6\u7684\u81ea\u52a8\u8bfb\u53d6\u903b\u8f91\u4e0e\u6846\u67b6\u4e00\u81f4\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,n.jsx)(r.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86",children:"\u914d\u7f6e\u7ba1\u7406"})]}),"\n",(0,n.jsx)(r.h2,{id:"\u914d\u7f6e\u6a21\u677f",children:"\u914d\u7f6e\u6a21\u677f"}),"\n",(0,n.jsx)(r.p,{children:"\u4e00\u4e2a\u5b8c\u6574\u7684\u914d\u7f6e\u6a21\u677f\u793a\u4f8b\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'grpc:\n  name:             "demo"  # \u670d\u52a1\u540d\u79f0\n  address:          ":8000" # \u81ea\u5b9a\u4e49\u670d\u52a1\u76d1\u542c\u5730\u5740\n  logPath:          "./log" # \u65e5\u5fd7\u5b58\u50a8\u76ee\u5f55\u8def\u5f84\n  logStdout:        true    # \u65e5\u5fd7\u662f\u5426\u8f93\u51fa\u5230\u7ec8\u7aef\n  errorLogEnabled:  true    # \u662f\u5426\u5f00\u542f\u9519\u8bef\u65e5\u5fd7\u8bb0\u5f55\n  accessLogEnabled: true    # \u662f\u5426\u5f00\u542f\u8bbf\u95ee\u65e5\u5fd7\u8bb0\u5f55\n  errorStack:       true    # \u5f53\u4ea7\u751f\u9519\u8bef\u65f6\uff0c\u662f\u5426\u8bb0\u5f55\u9519\u8bef\u5806\u6808\n'})}),"\n",(0,n.jsxs)(r.p,{children:["\u5728\u6ca1\u6709\u914d\u7f6e ",(0,n.jsx)(r.code,{children:"address"})," \u7684\u60c5\u51b5\u4e0b\uff0c ",(0,n.jsx)(r.code,{children:"grpc server"})," \u5c06\u4f1a\u4f7f\u7528\u672c\u5730\u7f51\u5361\u7684\u6240\u6709 ",(0,n.jsx)(r.code,{children:"ip"})," \u5730\u5740\u52a0\u4e0a ",(0,n.jsx)(r.strong,{children:"\u968f\u673a\u7a7a\u95f2\u7aef\u53e3"})," \u6765\u542f\u52a8\uff08\u9ed8\u8ba4\u914d\u7f6e ",(0,n.jsx)(r.code,{children:":0"}),"\uff09\u3002\u5982\u679c\u60f3\u8981\u6307\u5b9a ",(0,n.jsx)(r.code,{children:"ip"})," \u4f46\u662f\u4f7f\u7528\u968f\u673a\u7a7a\u95f2\u7aef\u53e3\u542f\u52a8 ",(0,n.jsx)(r.code,{children:"grpc server"}),"\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(r.code,{children:"ip:0"})," \u7684\u683c\u5f0f\u6765\u914d\u7f6e ",(0,n.jsx)(r.code,{children:"address"}),"\uff0c\u4f8b\u5982\uff1a ",(0,n.jsx)(r.code,{children:"192.168.1.1:0, 10.0.1.1:0"}),"\u3002"]})]})}function g(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>c});var n=o(96540);const t={},s=n.createContext(t);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
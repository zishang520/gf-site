"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[94289],{678904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var s=t(474848),r=t(28453);const c={title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5bf9\u8c61\u8f93\u5165",sidebar_position:5,hide_title:!0},i=void 0,o={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5bf9\u8c61\u8f93\u5165",title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5bf9\u8c61\u8f93\u5165",description:"Data/Where/WherePri/And/Or \u65b9\u6cd5\u652f\u6301\u4efb\u610f\u7684 string/map/slice/struct/struct \u6570\u636e\u7c7b\u578b\u53c2\u6570\uff0c\u8be5\u7279\u6027\u4e3a gdb \u63d0\u4f9b\u4e86\u5f88\u9ad8\u7684\u7075\u6d3b\u6027\u3002\u5f53\u4f7f\u7528 struct/ struct \u5bf9\u8c61\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\u65f6\uff0c\u5c06\u4f1a\u88ab\u81ea\u52a8\u89e3\u6790\u4e3a map \u7c7b\u578b\uff0c\u53ea\u6709 struct \u7684 \u516c\u5f00\u5c5e\u6027 \u80fd\u591f\u88ab\u8f6c\u6362\uff0c\u5e76\u4e14\u652f\u6301 orm/ gconv/ json \u6807\u7b7e\uff0c\u7528\u4e8e\u5b9a\u4e49\u8f6c\u6362\u540e\u7684\u952e\u540d\uff0c\u5373\u4e0e\u8868\u5b57\u6bb5\u7684\u6620\u5c04\u5173\u7cfb\u3002",source:"@site/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5bf9\u8c61\u8f93\u5165.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5bf9\u8c61\u8f93\u5165",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5bf9\u8c61\u8f93\u5165",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5bf9\u8c61\u8f93\u5165.md",tags:[],version:"1.16.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:5,frontMatter:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5bf9\u8c61\u8f93\u5165",sidebar_position:5,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u66f4\u65b0\u5220\u9664",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u66f4\u65b0\u5220\u9664"},next:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u8fc7\u6ee4",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u8fc7\u6ee4"}},d={},a=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Data/Where/WherePri/And/Or"})," \u65b9\u6cd5\u652f\u6301\u4efb\u610f\u7684 ",(0,s.jsx)(n.code,{children:"string/map/slice/struct/*struct"})," \u6570\u636e\u7c7b\u578b\u53c2\u6570\uff0c\u8be5\u7279\u6027\u4e3a ",(0,s.jsx)(n.code,{children:"gdb"})," \u63d0\u4f9b\u4e86\u5f88\u9ad8\u7684\u7075\u6d3b\u6027\u3002\u5f53\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"struct"}),"/ ",(0,s.jsx)(n.code,{children:"*struct"})," \u5bf9\u8c61\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\u65f6\uff0c\u5c06\u4f1a\u88ab\u81ea\u52a8\u89e3\u6790\u4e3a ",(0,s.jsx)(n.code,{children:"map"})," \u7c7b\u578b\uff0c\u53ea\u6709 ",(0,s.jsx)(n.code,{children:"struct"})," \u7684 ",(0,s.jsx)(n.strong,{children:"\u516c\u5f00\u5c5e\u6027"})," \u80fd\u591f\u88ab\u8f6c\u6362\uff0c\u5e76\u4e14\u652f\u6301 ",(0,s.jsx)(n.code,{children:"orm"}),"/ ",(0,s.jsx)(n.code,{children:"gconv"}),"/ ",(0,s.jsx)(n.code,{children:"json"})," \u6807\u7b7e\uff0c\u7528\u4e8e\u5b9a\u4e49\u8f6c\u6362\u540e\u7684\u952e\u540d\uff0c\u5373\u4e0e\u8868\u5b57\u6bb5\u7684\u6620\u5c04\u5173\u7cfb\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'type User struct {\n    Uid      int    `orm:"user_id"`\n    Name     string `orm:"user_name"`\n    NickName string `orm:"nick_name"`\n}\n// \u6216\u8005\ntype User struct {\n    Uid      int    `gconv:"user_id"`\n    Name     string `gconv:"user_name"`\n    NickName string `gconv:"nick_name"`\n}\n// \u6216\u8005\ntype User struct {\n    Uid      int    `json:"user_id"`\n    Name     string `json:"user_name"`\n    NickName string `json:"nick_name"`\n}\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c ",(0,s.jsx)(n.code,{children:"struct"})," \u7684\u5c5e\u6027\u5e94\u8be5\u662f\u516c\u5f00\u5c5e\u6027\uff08\u9996\u5b57\u6bcd\u5927\u5199\uff09\uff0c ",(0,s.jsx)(n.code,{children:"orm"})," \u6807\u7b7e\u5bf9\u5e94\u7684\u662f\u6570\u636e\u8868\u7684\u5b57\u6bb5\u540d\u79f0\u3002\u8868\u5b57\u6bb5\u7684\u5bf9\u5e94\u5173\u7cfb\u6807\u7b7e\u65e2\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"orm"}),"\uff0c\u4e5f\u53ef\u4ee5\u7528 ",(0,s.jsx)(n.code,{children:"gconv"}),"\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528\u4f20\u7edf\u7684 ",(0,s.jsx)(n.code,{children:"json"})," \u6807\u7b7e\uff0c\u4f46\u662f\u5f53\u4e09\u79cd\u6807\u7b7e\u90fd\u5b58\u5728\u65f6\uff0c ",(0,s.jsx)(n.code,{children:"orm"})," \u6807\u7b7e\u7684\u4f18\u5148\u7ea7\u66f4\u9ad8\u3002\u4e3a\u907f\u514d\u5c06 ",(0,s.jsx)(n.code,{children:"struct"})," \u5bf9\u8c61\u8f6c\u6362\u4e3a ",(0,s.jsx)(n.code,{children:"JSON"})," \u6570\u636e\u683c\u5f0f\u8fd4\u56de\u65f6\u4e0e ",(0,s.jsx)(n.code,{children:"JSON"})," \u7f16\u7801\u6807\u7b7e\u51b2\u7a81\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"orm"})," \u6807\u7b7e\u6765\u5b9e\u73b0\u6570\u636e\u5e93 ",(0,s.jsx)(n.code,{children:"ORM"})," \u7684\u6620\u5c04\u5173\u7cfb\u3002\u66f4\u8be6\u7ec6\u7684\u8f6c\u6362\u89c4\u5219\u8bf7\u67e5\u770b ",(0,s.jsx)(n.a,{href:"/gf-site/docs/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2-Map%E8%BD%AC%E6%8D%A2",children:"\u7c7b\u578b\u8f6c\u6362-Map\u8f6c\u6362"})," \u7ae0\u8282\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(296540);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);
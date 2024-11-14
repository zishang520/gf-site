"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[4469],{566069:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u6587\u4ef6\u76d1\u542c-gfsnotify/\u6587\u4ef6\u76d1\u63a7-\u7cfb\u7edf\u53c2\u6570","title":"\u6587\u4ef6\u76d1\u63a7-\u7cfb\u7edf\u53c2\u6570","description":"\u5728Linux\u7cfb\u7edf\u4e0bgfsnotify\u6a21\u5757\u901a\u8fc7inotify\u7279\u6027\u5b9e\u73b0\u6587\u4ef6\u548c\u76ee\u5f55\u76d1\u63a7\uff0c\u53d7\u9650\u4e8e\u7cfb\u7edf\u5185\u6838\u53c2\u6570\u5982fs.inotify.max_user_instances\u548cfs.inotify.max_user_watches\uff0c\u901a\u8fc7\u547d\u4ee4\u884c\u53ef\u4ee5\u67e5\u770b\u548c\u4fee\u6539\u8fd9\u4e9b\u53c2\u6570\u4ee5\u9002\u5e94\u4e0d\u540c\u7684\u76d1\u63a7\u9700\u6c42\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u6587\u4ef6\u76d1\u542c-gfsnotify/\u6587\u4ef6\u76d1\u63a7-\u7cfb\u7edf\u53c2\u6570.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u6587\u4ef6\u76d1\u542c-gfsnotify","slug":"/docs/components/os-gfsnotify-system-variables","permalink":"/en/docs/components/os-gfsnotify-system-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u6587\u4ef6\u76d1\u542c-gfsnotify/\u6587\u4ef6\u76d1\u63a7-\u7cfb\u7edf\u53c2\u6570.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"slug":"/docs/components/os-gfsnotify-system-variables","title":"\u6587\u4ef6\u76d1\u63a7-\u7cfb\u7edf\u53c2\u6570","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","gfsnotify","\u6587\u4ef6\u76d1\u63a7","inotify","\u7cfb\u7edf\u53c2\u6570","linux","\u76d1\u63a7\u5b9e\u4f8b","\u7528\u6237\u5b9e\u4f8b\u9650\u5236","\u6587\u4ef6\u961f\u5217\u5927\u5c0f"],"description":"\u5728Linux\u7cfb\u7edf\u4e0bgfsnotify\u6a21\u5757\u901a\u8fc7inotify\u7279\u6027\u5b9e\u73b0\u6587\u4ef6\u548c\u76ee\u5f55\u76d1\u63a7\uff0c\u53d7\u9650\u4e8e\u7cfb\u7edf\u5185\u6838\u53c2\u6570\u5982fs.inotify.max_user_instances\u548cfs.inotify.max_user_watches\uff0c\u901a\u8fc7\u547d\u4ee4\u884c\u53ef\u4ee5\u67e5\u770b\u548c\u4fee\u6539\u8fd9\u4e9b\u53c2\u6570\u4ee5\u9002\u5e94\u4e0d\u540c\u7684\u76d1\u63a7\u9700\u6c42\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6587\u4ef6\u76d1\u63a7-\u79fb\u9664\u76d1\u63a7","permalink":"/en/docs/components/os-gfsnotify-remove"},"next":{"title":"\u6587\u4ef6\u76d1\u63a7-gfsnotify","permalink":"/en/docs/components/os-gfsnotify"}}');var o=n(474848),t=n(28453);const c={slug:"/docs/components/os-gfsnotify-system-variables",title:"\u6587\u4ef6\u76d1\u63a7-\u7cfb\u7edf\u53c2\u6570",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","gfsnotify","\u6587\u4ef6\u76d1\u63a7","inotify","\u7cfb\u7edf\u53c2\u6570","linux","\u76d1\u63a7\u5b9e\u4f8b","\u7528\u6237\u5b9e\u4f8b\u9650\u5236","\u6587\u4ef6\u961f\u5217\u5927\u5c0f"],description:"\u5728Linux\u7cfb\u7edf\u4e0bgfsnotify\u6a21\u5757\u901a\u8fc7inotify\u7279\u6027\u5b9e\u73b0\u6587\u4ef6\u548c\u76ee\u5f55\u76d1\u63a7\uff0c\u53d7\u9650\u4e8e\u7cfb\u7edf\u5185\u6838\u53c2\u6570\u5982fs.inotify.max_user_instances\u548cfs.inotify.max_user_watches\uff0c\u901a\u8fc7\u547d\u4ee4\u884c\u53ef\u4ee5\u67e5\u770b\u548c\u4fee\u6539\u8fd9\u4e9b\u53c2\u6570\u4ee5\u9002\u5e94\u4e0d\u540c\u7684\u76d1\u63a7\u9700\u6c42\u3002"},r=void 0,d={},l=[{value:"\u7cfb\u7edf\u53c2\u6570\u5f71\u54cd",id:"\u7cfb\u7edf\u53c2\u6570\u5f71\u54cd",level:2},{value:"\u67e5\u770b\u4e0e\u4fee\u6539",id:"\u67e5\u770b\u4e0e\u4fee\u6539",level:2}];function a(s){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...s.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u7cfb\u7edf\u53c2\u6570\u5f71\u54cd",children:"\u7cfb\u7edf\u53c2\u6570\u5f71\u54cd"}),"\n",(0,o.jsxs)(e.p,{children:["\u5728 ",(0,o.jsx)(e.code,{children:"linux"})," \u7cfb\u7edf\u4e0b\uff0c ",(0,o.jsx)(e.code,{children:"gfsnotify"})," \u6a21\u5757\u4f7f\u7528\u7684\u662f\u7cfb\u7edf\u7684 ",(0,o.jsx)(e.code,{children:"inotify"})," \u7279\u6027\u6765\u5b9e\u73b0\u7684\u6587\u4ef6/\u76ee\u5f55\u76d1\u63a7\uff0c\u56e0\u6b64\u8be5\u529f\u80fd\u5728\u4f7f\u7528\u65f6\u4f1a\u53d7\u5230\u7cfb\u7edf\u7684\u4e24\u4e2a\u5185\u6838\u53c2\u6570\u9650\u5236\uff1a"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"fs.inotify.max_user_instances"}),"\uff1a\u8868\u793a\u5f53\u524d\u7528\u6237\u53ef\u521b\u5efa\u7684 ",(0,o.jsx)(e.code,{children:"inotify"})," \u76d1\u63a7\u5b9e\u4f8b\u6570\u91cf\uff0c\u5373 ",(0,o.jsx)(e.code,{children:"gfsnotify.New"})," \u65b9\u6cd5\u521b\u5efa\u7684 ",(0,o.jsx)(e.code,{children:"Watcher"})," \u5bf9\u8c61\u6570\u91cf\uff0c\u4e00\u4e2a ",(0,o.jsx)(e.code,{children:"Watcher"})," \u5bf9\u8c61\u5bf9\u5e94\u7cfb\u7edf\u7684\u4e00\u4e2a ",(0,o.jsx)(e.code,{children:"inotify"})," \u5b9e\u4f8b\uff0c\u7cfb\u7edf\u9ed8\u8ba4\u6570\u91cf\u4e3a\uff1a ",(0,o.jsx)(e.code,{children:"128"}),"\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"fs.inotify.max_user_watches"}),"\uff1a\u8868\u793a\u4e00\u4e2a ",(0,o.jsx)(e.code,{children:"inotify"})," \u5b9e\u4f8b\u53ef\u6dfb\u52a0\u7684\u76d1\u63a7\u6587\u4ef6\u961f\u5217\u5927\u5c0f\uff0c\u5f80\u540c\u4e00\u4e2a ",(0,o.jsx)(e.code,{children:"inotify"})," \u6dfb\u52a0\u7684\u76d1\u63a7\u6587\u4ef6\u8d85\u8fc7\u8be5\u6570\u91cf\u9650\u5236\u5219\u4f1a\u5931\u8d25\uff0c\u5e76\u4e14\u4f1a\u6709\u7cfb\u7edf\u9519\u8bef\u65e5\u5fd7\uff0c\u7cfb\u7edf\u9ed8\u8ba4\u6570\u91cf\u5f80\u5f80\u4e3a\uff1a ",(0,o.jsx)(e.code,{children:"8192"}),"(\u6709\u7684\u7cfb\u7edf\u8be5\u6570\u503c\u4f1a\u6bd4\u8f83\u5927\u4e00\u4e9b)\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u67e5\u770b\u4e0e\u4fee\u6539",children:"\u67e5\u770b\u4e0e\u4fee\u6539"}),"\n",(0,o.jsxs)(e.p,{children:["\u4ee5",(0,o.jsx)(e.code,{children:"fs.inotify.max_user_instances"}),"\u4e3a\u4f8b\uff0c\u5728",(0,o.jsx)(e.code,{children:"linux"}),"\u7cfb\u7edf\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b",(0,o.jsx)(e.code,{children:"fs.inotify.max_user_instances"}),"\u7684\u5f53\u524d\u503c\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"cat /proc/sys/fs/inotify/max_user_instances\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u5982\u679c\u9700\u8981\u4fee\u6539\u8be5\u503c\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff08\u4f8b\u5982\u5c06\u503c\u4fee\u6539\u4e3a ",(0,o.jsx)(e.code,{children:"1024"}),"\uff09\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"sudo sysctl -w fs.inotify.max_user_instances=1024\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u8981\u6c38\u4e45\u4fee\u6539\u8be5\u503c\uff0c\u53ef\u4ee5\u5c06\u4ee5\u4e0b\u5185\u5bb9\u6dfb\u52a0\u5230",(0,o.jsx)(e.code,{children:"/etc/sysctl.conf"}),"\u6587\u4ef6\u4e2d\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"fs.inotify.max_user_instances=1024\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u7136\u540e\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u4f7f\u66f4\u6539\u751f\u6548\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"sudo sysctl -p\n"})})]})}function f(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,o.jsx)(e,{...s,children:(0,o.jsx)(a,{...s})}):a(s)}},28453:(s,e,n)=>{n.d(e,{R:()=>c,x:()=>r});var i=n(296540);const o={},t=i.createContext(o);function c(s){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(o):s.components||o:c(s.components),i.createElement(t.Provider,{value:e},s.children)}}}]);
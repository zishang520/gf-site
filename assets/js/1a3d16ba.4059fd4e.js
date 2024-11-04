"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[90670],{61639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer","title":"\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer","description":"gcron \u4e0e gtimer \u533a\u522b","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron","slug":"/docs/components/os-gcron-differ-with-gtimer","permalink":"/docs/components/os-gcron-differ-with-gtimer","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/components/os-gcron-differ-with-gtimer","title":"\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer","sidebar_position":3,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u5b9a\u65f6\u4efb\u52a1-\u65e5\u5fd7\u7ba1\u7406","permalink":"/docs/components/os-gcron-logging"},"next":{"title":"\u7f13\u5b58\u7ba1\u7406-gcache","permalink":"/docs/components/os-gcache"}}');var c=t(74848),o=t(28453);const s={slug:"/docs/components/os-gcron-differ-with-gtimer",title:"\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer",sidebar_position:3,hide_title:!0},i=void 0,d={},l=[{value:"<code>gcron</code> \u4e0e <code>gtimer</code> \u533a\u522b",id:"gcron-\u4e0e-gtimer-\u533a\u522b",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h2,{id:"gcron-\u4e0e-gtimer-\u533a\u522b",children:[(0,c.jsx)(n.code,{children:"gcron"})," \u4e0e ",(0,c.jsx)(n.code,{children:"gtimer"})," \u533a\u522b"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/components/os-gcron",children:"\u5b9a\u65f6\u4efb\u52a1-gcron"})," \u4e0e ",(0,c.jsx)(n.a,{href:"/docs/components/os-gtimer",children:"\u5b9a\u65f6\u5668-gtimer"})," \u533a\u522b:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gtimer"})," \u5c5e\u4e8e\u9ad8\u6027\u80fd\u6a21\u5757\uff0c\u662f\u6846\u67b6\u6838\u5fc3\u6a21\u5757\uff0c\u6784\u5efa\u4efb\u4f55\u5b9a\u65f6\u4efb\u52a1\u7684\u57fa\u7840\uff0c\u4efb\u4f55\u65b9\u6cd5\u64cd\u4f5c\u8017\u65f6\u5747\u5728 ",(0,c.jsx)(n.code,{children:"\u7eb3\u79d2"})," \u7ea7\u522b\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gtimer"})," \u53ef\u9002\u7528\u4e8e\u4efb\u4f55\u7684\u5b9a\u65f6\u4efb\u52a1\u573a\u666f\u4e2d\uff0c\u4f8b\u5982: TCP\u901a\u4fe1\u3001\u6e38\u620f\u5f00\u53d1\u7b49\u573a\u666f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gcron"})," \u652f\u6301\u7ecf\u5178\u7684 ",(0,c.jsx)(n.code,{children:"crontab"})," \u5f62\u5f0f\u7684\u5b9a\u65f6\u4efb\u52a1\u8bed\u6cd5\uff0c\u6700\u5c0f\u65f6\u95f4\u8bbe\u5b9a\u95f4\u9694\u4e3a ",(0,c.jsx)(n.code,{children:"\u79d2"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gcron"})," \u5e95\u5c42\u5b9e\u73b0\u57fa\u4e8e ",(0,c.jsx)(n.code,{children:"gtimer"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u76f8\u4f3c\u6a21\u5757"}),(0,c.jsx)(n.th,{children:"\u8bf4\u660e"}),(0,c.jsx)(n.th,{children:"\u6027\u80fd"}),(0,c.jsx)(n.th,{children:"\u7c7bLinux Crontab\u6a21\u5f0f"}),(0,c.jsx)(n.th,{children:"\u5e95\u5c42\u5b9e\u73b0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/components/os-gcron",children:"\u5b9a\u65f6\u4efb\u52a1-gcron"})}),(0,c.jsxs)(n.td,{children:["\u5b9a\u65f6\u4efb\u52a1\u3002",(0,c.jsx)("br",{}),"\u8f83\u4e0a\u5c42\u5c01\u88c5\uff0c\u65f6\u95f4\u523b\u5ea6\u4ee5\u81ea\u7136\u79d2\u4e3a\u5355\u4f4d\u3002"]}),(0,c.jsx)(n.td,{children:"\u4e00\u822c"}),(0,c.jsx)(n.td,{children:"\u652f\u6301"}),(0,c.jsxs)(n.td,{children:["\u57fa\u4e8e ",(0,c.jsx)(n.code,{children:"gtimer"})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/components/os-gtimer",children:"\u5b9a\u65f6\u5668-gtimer"})}),(0,c.jsxs)(n.td,{children:["\u5b9a\u65f6\u5668\u3002",(0,c.jsx)("br",{}),"\u5e95\u5c42\u7ec4\u4ef6\uff0c\u65f6\u95f4\u523b\u5ea6\u4ee5\u65f6\u95f4\u69fd\u4e3a\u5355\u4f4d\uff08\u65f6\u95f4\u69fd\u53ef\u81ea\u5b9a\u4e49\uff09\u3002"]}),(0,c.jsx)(n.td,{children:"\u9ad8\u6548"}),(0,c.jsx)(n.td,{children:"\u4e0d\u652f\u6301"}),(0,c.jsxs)(n.td,{children:["\u57fa\u4e8e ",(0,c.jsx)(n.code,{children:"PriorityQueue"})," \u6570\u636e\u7ed3\u6784\u81ea\u5b9e\u73b0"]})]})]})]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const c={},o=r.createContext(c);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
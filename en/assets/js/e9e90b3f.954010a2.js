"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[74926],{82821:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(74848),r=t(28453);const i={title:"ORM\u7ed3\u679c\u5904\u7406-\u7a7a\u6570\u7ec4\u7ed3\u6784\u8fd4\u56de",sidebar_position:2},o=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u7a7a\u6570\u7ec4\u7ed3\u6784\u8fd4\u56de",title:"ORM\u7ed3\u679c\u5904\u7406-\u7a7a\u6570\u7ec4\u7ed3\u6784\u8fd4\u56de",description:"\u75db\u70b9\u63cf\u8ff0",source:"@site/versioned_docs/version-2.7.x/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/4-ORM\u7ed3\u679c\u5904\u7406/2-ORM\u7ed3\u679c\u5904\u7406-\u7a7a\u6570\u7ec4\u7ed3\u6784\u8fd4\u56de.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/4-ORM\u7ed3\u679c\u5904\u7406",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u7a7a\u6570\u7ec4\u7ed3\u6784\u8fd4\u56de",permalink:"/gf-site/en/docs/2.7.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u7a7a\u6570\u7ec4\u7ed3\u6784\u8fd4\u56de",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/4-ORM\u7ed3\u679c\u5904\u7406/2-ORM\u7ed3\u679c\u5904\u7406-\u7a7a\u6570\u7ec4\u7ed3\u6784\u8fd4\u56de.md",tags:[],version:"2.7.x",lastUpdatedBy:"John",lastUpdatedAt:172999724e4,sidebarPosition:2,frontMatter:{title:"ORM\u7ed3\u679c\u5904\u7406-\u7a7a\u6570\u7ec4\u7ed3\u6784\u8fd4\u56de",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad",permalink:"/gf-site/en/docs/2.7.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad"},next:{title:"ORM\u65f6\u533a\u5904\u7406",permalink:"/gf-site/en/docs/2.7.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u65f6\u533a\u5904\u7406"}},d={},l=[{value:"\u75db\u70b9\u63cf\u8ff0",id:"\u75db\u70b9\u63cf\u8ff0",level:2},{value:"\u6539\u8fdb\u65b9\u6848",id:"\u6539\u8fdb\u65b9\u6848",level:2}];function g(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u75db\u70b9\u63cf\u8ff0",children:"\u75db\u70b9\u63cf\u8ff0"}),"\n",(0,s.jsxs)(e.p,{children:["\u7ecf\u8fc7\u524d\u9762\u7684\u7ae0\u8282\u4ecb\u7ecd\uff0c\u5982\u679c\u7ed9\u5b9a\u4e00\u4e2a\u672a\u521d\u59cb\u5316\u7684\u6570\u7ec4\uff08\u503c\u4e3a ",(0,s.jsx)(e.code,{children:"nil"}),"\uff09\uff0c\u5728 ",(0,s.jsx)(e.code,{children:"ORM"})," \u6839\u636e\u7ed9\u5b9a\u6761\u4ef6\u672a\u67e5\u8be2\u5230\u6570\u636e\u65f6\uff0c\u5e76\u4e0d\u4f1a\u81ea\u52a8\u521d\u59cb\u5316\u8be5\u6570\u7ec4\u3002\u56e0\u6b64\u8be5\u672a\u521d\u59cb\u5316\u7684\u6570\u7ec4\u7ed3\u679c\u5982\u679c\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"JSON"})," \u8fdb\u884c\u7f16\u7801\u540e\uff0c\u4f1a\u88ab\u8f6c\u6362\u4e3a ",(0,s.jsx)(e.code,{children:"null"})," \u503c\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'package main\n\nimport (\n\t_ "github.com/gogf/gf/contrib/drivers/mysql/v2"\n\n\t"fmt"\n\n\t"github.com/gogf/gf/v2/encoding/gjson"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n\ttype User struct {\n\t\tId        uint64      // \u4e3b\u952e\n\t\tPassport  string      // \u8d26\u53f7\n\t\tPassword  string      // \u5bc6\u7801\n\t\tNickName  string      // \u6635\u79f0\n\t\tCreatedAt *gtime.Time // \u521b\u5efa\u65f6\u95f4\n\t\tUpdatedAt *gtime.Time // \u66f4\u65b0\u65f6\u95f4\n\t}\n\ttype Response struct {\n\t\tUsers []User\n\t}\n\tvar res = &Response{}\n\terr := g.Model("user").WhereGT("id", 10).Scan(&res.Users)\n\tfmt.Println(err)\n\tfmt.Println(gjson.MustEncodeString(res))\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u5c55\u793a\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'<nil>\n{"Users":null}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u5927\u90e8\u5206\u573a\u666f\u4e0b\uff0c ",(0,s.jsx)(e.code,{children:"ORM"})," \u67e5\u8be2\u7684\u6570\u636e\u9700\u8981\u6e32\u67d3\u5c55\u793a\u5728\u6d4f\u89c8\u5668\u9875\u9762\u4e0a\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u8fd4\u56de\u7684\u6570\u636e\u9700\u8981\u7ed9\u524d\u7aef ",(0,s.jsx)(e.code,{children:"JS"})," \u8fdb\u884c\u5904\u7406\u3002\u4e3a\u4e86\u5bf9\u524d\u7aef ",(0,s.jsx)(e.code,{children:"JS"})," \u5904\u7406\u540e\u7aef\u8fd4\u56de\u6570\u636e\u65f6\u66f4\u52a0\u53cb\u597d\uff0c\u5982\u679c\u5728\u540e\u7aef\u67e5\u8be2\u4e0d\u5230\u6570\u636e\u65f6\uff0c\u671f\u671b\u8fd4\u56de\u4e00\u4e2a\u7a7a\u7684\u6570\u7ec4\u7ed3\u6784\uff0c\u800c\u4e0d\u662f\u8fd4\u56de\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"null"})," \u5c5e\u6027\u503c\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6539\u8fdb\u65b9\u6848",children:"\u6539\u8fdb\u65b9\u6848"}),"\n",(0,s.jsxs)(e.p,{children:["\u9488\u5bf9\u8fd9\u79cd\u573a\u666f\uff0c\u53ef\u4ee5\u7ed9 ",(0,s.jsx)(e.code,{children:"ORM"})," \u7684 ",(0,s.jsx)(e.code,{children:"Scan"})," \u65b9\u6cd5\u4e00\u4e2a\u521d\u59cb\u5316\u7684\u7a7a\u6570\u7ec4\u5373\u53ef\u3002\u5f53 ",(0,s.jsx)(e.code,{children:"ORM"})," \u67e5\u8be2\u4e0d\u5230\u6570\u636e\u65f6\uff0c\u8be5\u6570\u7ec4\u5c5e\u6027\u4ecd\u7136\u662f\u4e00\u4e2a\u7a7a\u6570\u7ec4\uff0c\u800c\u4e0d\u662f ",(0,s.jsx)(e.code,{children:"nil"}),"\uff0c\u8fd4\u56de ",(0,s.jsx)(e.code,{children:"JSON"})," \u7f16\u7801\u540e\u4e5f\u4e0d\u4f1a\u662f ",(0,s.jsx)(e.code,{children:"null"})," \u503c\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'package main\n\nimport (\n\t_ "github.com/gogf/gf/contrib/drivers/mysql/v2"\n\n\t"fmt"\n\n\t"github.com/gogf/gf/v2/encoding/gjson"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n\ttype User struct {\n\t\tId        uint64      // \u4e3b\u952e\n\t\tPassport  string      // \u8d26\u53f7\n\t\tPassword  string      // \u5bc6\u7801\n\t\tNickName  string      // \u6635\u79f0\n\t\tCreatedAt *gtime.Time // \u521b\u5efa\u65f6\u95f4\n\t\tUpdatedAt *gtime.Time // \u66f4\u65b0\u65f6\u95f4\n\t}\n\ttype Response struct {\n\t\tUsers []User\n\t}\n\tvar res = &Response{\n\t\tUsers: make([]User, 0),\n\t}\n\terr := g.Model("user").WhereGT("id", 10).Scan(&res.Users)\n\tfmt.Println(err)\n\tfmt.Println(gjson.MustEncodeString(res))\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u5c55\u793a\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'<nil>\n{"Users":[]}\n'})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(g,{...n})}):g(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function o(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);
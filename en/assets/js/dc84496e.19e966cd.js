"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[20258],{316498:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=r(474848),t=r(28453);const s={title:"ORM\u6700\u4f73\u5b9e\u8df5",sidebar_position:10,hide_title:!0},i=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5",title:"ORM\u6700\u4f73\u5b9e\u8df5",description:"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53ca sql.ErrNoRows \u5224\u65ad",source:"@site/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5",permalink:"/gf-site/en/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5.md",tags:[],version:"2.1.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:10,frontMatter:{title:"ORM\u6700\u4f73\u5b9e\u8df5",sidebar_position:10,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ORM\u4e0a\u4e0b\u6587\u53d8\u91cf",permalink:"/gf-site/en/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e0a\u4e0b\u6587\u53d8\u91cf"},next:{title:"ORM\u7ed3\u679c\u5904\u7406-\u7ed3\u679c\u7c7b\u578b",permalink:"/gf-site/en/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u7ed3\u679c\u7c7b\u578b"}},d={},l=[{value:"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53ca <code>sql.ErrNoRows</code> \u5224\u65ad",id:"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53ca-sqlerrnorows-\u5224\u65ad",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h2,{id:"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53ca-sqlerrnorows-\u5224\u65ad",children:["\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53ca ",(0,o.jsx)(n.code,{children:"sql.ErrNoRows"})," \u5224\u65ad"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6267\u884cSQL\u67e5\u8be2\u65f6\uff0c\u8bf7\u907f\u514d\u63d0\u524d\u5c06\u67e5\u8be2\u7ed3\u679c\u521d\u59cb\u5316\uff0c\u4ee5\u907f\u514d\u7ed3\u6784\u5bf9\u8c61\u9ed8\u8ba4\u503c\u7684\u5f71\u54cd\uff0c\u907f\u514d\u521b\u5efa\u4e0d\u5fc5\u8981\u7684\u5bf9\u8c61\u5185\u5b58\u3002\u901a\u8fc7\u8fd4\u56de\u5bf9\u8c61\u6307\u9488 ",(0,o.jsx)(n.code,{children:"nil"})," \u5224\u65ad\u907f\u514d ",(0,o.jsx)(n.code,{children:"sql.ErrNoRows"})," \u4f7f\u7528\uff0c\u964d\u4f4e\u4ee3\u7801\u5bf9 ",(0,o.jsx)(n.code,{children:"error"})," \u5904\u7406\u7684\u590d\u6742\u5ea6\u3001\u7edf\u4e00\u9879\u76ee\u4e2d\u5bf9\u7a7a\u67e5\u8be2\u7ed3\u679c\u5904\u7406\u903b\u8f91\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u4e00\u4e2a\u53cd\u9762\u4f8b\u5b50\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'func (s *sTask) GetOne(ctx context.Context, id uint64) (out *entity.ResourceTask, err error) {\n    out = new(model.TaskDetail)\n    err = dao.ResourceTask.Ctx(ctx).WherePri(id).Scan(out)\n    if err != nil {\n        if err == sql.ErrNoRows {\n            err = gerror.Newf(`record not found for "%d"`, id)\n        }\n        return\n    }\n    return\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u8be5\u4f8b\u5b50\u4e2d\uff0c\u5b9e\u9645\u8fd4\u56de\u7684 ",(0,o.jsx)(n.code,{children:"out"})," \u5bf9\u8c61\u7531\u4e8e\u5bf9\u8c61\u521d\u59cb\u5316\u7684\u7f18\u6545\u6709\u4e86\u9ed8\u8ba4\u503c\uff08\u65e0\u8bbaSQL\u662f\u5426\u67e5\u8be2\u5230\u6570\u636e\uff09\uff0c\u5e76\u4e14 ",(0,o.jsx)(n.code,{children:"sql.ErrNoRows"})," \u7684\u5224\u65ad\u589e\u52a0\u4e86\u4ee3\u7801\u903b\u8f91\u4e2d\u5bf9 ",(0,o.jsx)(n.code,{children:"error"})," \u5904\u7406\u7684\u590d\u6742\u5ea6\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u5efa\u8bae\u6539\u8fdb\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'func (s *sTask) GetOne(ctx context.Context, id uint64) (out *entity.ResourceTask, err error) {\n    err = dao.ResourceTask.Ctx(ctx).WherePri(id).Scan(&out)\n    if err != nil {\n        return\n    }\n    if out == nil {\n        err = gerror.Newf(`record not found for "%d"`, id)\n    }\n    return\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u6ce8\u610f\u4ee3\u7801\u4e2d ",(0,o.jsx)(n.code,{children:"&out"})," \u7684\u4f7f\u7528\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u66f4\u591a\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\uff1a ",(0,o.jsx)(n.a,{href:"/gf-site/en/docs/2.1.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E7%BB%93%E6%9E%9C%E5%A4%84%E7%90%86/ORM%E7%BB%93%E6%9E%9C%E5%A4%84%E7%90%86-%E4%B8%BA%E7%A9%BA%E5%88%A4%E6%96%AD",children:"ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var o=r(296540);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
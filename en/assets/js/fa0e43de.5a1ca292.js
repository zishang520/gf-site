"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[68179],{16829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var r=t(74848),o=t(28453);const l={slug:"/core/gdb/chaining/query/all-and-count",title:"ORM\u67e5\u8be2-AllAndCount",sidebar_position:2,hide_title:!0},s=void 0,i={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllAndCount",title:"ORM\u67e5\u8be2-AllAndCount",description:"\u8be5\u65b9\u6cd5\u4ece v2.5.0 \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\uff0c\u7528\u4e8e\u540c\u65f6\u67e5\u8be2\u6570\u636e\u8bb0\u5f55\u5217\u8868\u53ca\u603b\u6570\u91cf\uff0c\u4e00\u822c\u7528\u4e8e\u5206\u9875\u67e5\u8be2\u573a\u666f\u4e2d\uff0c\u7b80\u5316\u5206\u9875\u67e5\u8be2\u903b\u8f91\u3002",source:"@site/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllAndCount.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2",slug:"/core/gdb/chaining/query/all-and-count",permalink:"/gf-site/en/docs/core/gdb/chaining/query/all-and-count",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllAndCount.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:2,frontMatter:{slug:"/core/gdb/chaining/query/all-and-count",title:"ORM\u67e5\u8be2-AllAndCount",sidebar_position:2,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"ORM\u67e5\u8be2-All/One/Array/Value/Count",permalink:"/gf-site/en/docs/core/gdb/chaining/query/all-one-array-value-count"},next:{title:"ORM\u67e5\u8be2-Scan",permalink:"/gf-site/en/docs/core/gdb/chaining/query/scan"}},d={},a=[];function u(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u8be5\u65b9\u6cd5\u4ece ",(0,r.jsx)(n.code,{children:"v2.5.0"})," \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\uff0c\u7528\u4e8e\u540c\u65f6\u67e5\u8be2\u6570\u636e\u8bb0\u5f55\u5217\u8868\u53ca\u603b\u6570\u91cf\uff0c\u4e00\u822c\u7528\u4e8e\u5206\u9875\u67e5\u8be2\u573a\u666f\u4e2d\uff0c\u7b80\u5316\u5206\u9875\u67e5\u8be2\u903b\u8f91\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u65b9\u6cd5\u5b9a\u4e49\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// AllAndCount retrieves all records and the total count of records from the model.\n// If useFieldForCount is true, it will use the fields specified in the model for counting;\n// otherwise, it will use a constant value of 1 for counting.\n// It returns the result as a slice of records, the total count of records, and an error if any.\n// The where parameter is an optional list of conditions to use when retrieving records.\n//\n// Example:\n//\n//    var model Model\n//    var result Result\n//    var count int\n//    where := []interface{}{"name = ?", "John"}\n//    result, count, err := model.AllAndCount(true)\n//    if err != nil {\n//        // Handle error.\n//    }\n//    fmt.Println(result, count)\nfunc (m *Model) AllAndCount(useFieldForCount bool) (result Result, totalCount int, err error)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u65b9\u6cd5\u5185\u90e8\u67e5\u8be2\u603b\u6570\u91cf\u65f6\uff0c\u5c06\u4f1a\u5ffd\u7565\u67e5\u8be2\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"Limit/Page"})," \u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// SELECT `uid`,`name` FROM `user` WHERE `status`=\'deleted\' LIMIT 0,10\n// SELECT COUNT(`uid`,`name`) FROM `user` WHERE `status`=\'deleted\'\nall, count, err := Model("user").Fields("uid", "name").Where("status", "deleted").Limit(0, 10).AllAndCount(true)\n\n// SELECT `uid`,`name` FROM `user` WHERE `status`=\'deleted\' LIMIT 0,10\n// SELECT COUNT(1) FROM `user` WHERE `status`=\'deleted\'\nall, count, err := Model("user").Fields("uid", "name").Where("status", "deleted").Limit(0, 10).AllAndCount(false)\n'})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const o={},l=r.createContext(o);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);
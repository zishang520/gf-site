"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[17547],{764720:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(474848),s=t(28453);const o={title:"gjson-Struct\u8f6c\u6362",sidebar_position:2},c=void 0,i={id:"\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801/gjson-Struct\u8f6c\u6362",title:"gjson-Struct\u8f6c\u6362",description:"Struct \u8f6c\u6362",source:"@site/versioned_docs/version-1.15.x/2-\u6a21\u5757\u5217\u8868/2-\u7f16\u7801\u89e3\u7801/0-gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801/2-gjson-Struct\u8f6c\u6362.md",sourceDirName:"2-\u6a21\u5757\u5217\u8868/2-\u7f16\u7801\u89e3\u7801/0-gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801",slug:"/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801/gjson-Struct\u8f6c\u6362",permalink:"/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801/gjson-Struct\u8f6c\u6362",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.15.x/2-\u6a21\u5757\u5217\u8868/2-\u7f16\u7801\u89e3\u7801/0-gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801/2-gjson-Struct\u8f6c\u6362.md",tags:[],version:"1.15.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:2,frontMatter:{title:"gjson-Struct\u8f6c\u6362",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"gjson-\u5c42\u7ea7\u8bbf\u95ee",permalink:"/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801/gjson-\u5c42\u7ea7\u8bbf\u95ee"},next:{title:"gjson-\u52a8\u6001\u521b\u5efa\u4fee\u6539",permalink:"/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801/gjson-\u52a8\u6001\u521b\u5efa\u4fee\u6539"}},d={},u=[{value:"<code>Struct</code> \u8f6c\u6362",id:"struct-\u8f6c\u6362",level:2},{value:"<code>GetStruct</code> \u8f6c\u6362",id:"getstruct-\u8f6c\u6362",level:2}];function a(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h2,{id:"struct-\u8f6c\u6362",children:[(0,r.jsx)(e.code,{children:"Struct"})," \u8f6c\u6362"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Struct"})," \u65b9\u6cd5\u7528\u4e8e\u5c06\u6574\u4e2a ",(0,r.jsx)(e.code,{children:"Json"})," \u5305\u542b\u7684\u6570\u636e\u5185\u5bb9\u8f6c\u6362\u4e3a\u6307\u5b9a\u7684\u6570\u636e\u683c\u5f0f\u6216\u8005\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'data :=\n    `\n{\n    "count" : 1,\n    "array" : ["John", "Ming"]\n}`\nif j, err := gjson.DecodeToJson(data); err != nil {\n    panic(err)\n} else {\n    type Users struct {\n        Count int\n        Array []string\n    }\n    users := new(Users)\n    if err := j.Struct(users); err != nil {\n        panic(err)\n    }\n    fmt.Printf(`%+v`, users)\n}\n\n// Output:\n// &{Count:1 Array:[John Ming]}\n\n'})}),"\n",(0,r.jsxs)(e.h2,{id:"getstruct-\u8f6c\u6362",children:[(0,r.jsx)(e.code,{children:"GetStruct"})," \u8f6c\u6362"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Get*"})," \u65b9\u6cd5\u7528\u4e8e\u83b7\u5f97\u6307\u5b9a\u5c42\u7ea7\u7684\u8282\u70b9\u6570\u636e\uff0c\u5e76\u5c06\u8be5\u6570\u636e\u8f6c\u6362\u4e3a\u6307\u5b9a\u7684\u7ed3\u6784\u4f53\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'data :=\n    `{\n    "users" : {\n        "count" : 1,\n        "array" : ["John", "Ming"]\n    }\n}`\nif j, err := gjson.DecodeToJson(data); err != nil {\n    panic(err)\n} else {\n    type Users struct {\n        Count int\n        Array []string\n    }\n    users := new(Users)\n    if err := j.GetStruct("users", users); err != nil {\n        panic(err)\n    }\n    fmt.Printf(`%+v`, users)\n}\n\n// Output:\n// &{Count:1 Array:[John Ming]}\n\n'})})]})}function l(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>i});var r=t(296540);const s={},o=r.createContext(s);function c(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);
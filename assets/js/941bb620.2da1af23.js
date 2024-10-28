"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[39167],{762675:(o,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>l});var s=e(474848),t=e(28453);const c={title:"\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5",sidebar_position:6},a=void 0,p={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5",title:"\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5",description:"\u57fa\u672c\u7c7b\u578b\u8f6c\u6362\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\uff1a",source:"@site/versioned_docs/version-2.3.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/7-\u7c7b\u578b\u8f6c\u6362/6-\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/7-\u7c7b\u578b\u8f6c\u6362",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5",permalink:"/docs/2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/7-\u7c7b\u578b\u8f6c\u6362/6-\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5.md",tags:[],version:"2.3.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:6,frontMatter:{title:"\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u7c7b\u578b\u8f6c\u6362-UnmarshalValue",permalink:"/docs/2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-UnmarshalValue"},next:{title:"\u7f13\u5b58\u7ba1\u7406",permalink:"/docs/2.3.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7f13\u5b58\u7ba1\u7406/"}},r={},l=[];function i(o){const n={code:"code",p:"p",pre:"pre",...(0,t.R)(),...o.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u57fa\u672c\u7c7b\u578b\u8f6c\u6362\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'john@john-B85M:~/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/util/gconv$ go test *.go -bench=".*" -benchmem\ngoos: linux\ngoarch: amd64\nBenchmarkString-4               20000000                71.8 ns/op            24 B/op          2 allocs/op\nBenchmarkInt-4                  100000000               22.2 ns/op             8 B/op          1 allocs/op\nBenchmarkInt8-4                 100000000               24.5 ns/op             8 B/op          1 allocs/op\nBenchmarkInt16-4                50000000                23.8 ns/op             8 B/op          1 allocs/op\nBenchmarkInt32-4                100000000               24.1 ns/op             8 B/op          1 allocs/op\nBenchmarkInt64-4                100000000               21.7 ns/op             8 B/op          1 allocs/op\nBenchmarkUint-4                 100000000               22.2 ns/op             8 B/op          1 allocs/op\nBenchmarkUint8-4                50000000                25.6 ns/op             8 B/op          1 allocs/op\nBenchmarkUint16-4               50000000                32.1 ns/op             8 B/op          1 allocs/op\nBenchmarkUint32-4               50000000                27.7 ns/op             8 B/op          1 allocs/op\nBenchmarkUint64-4               50000000                28.1 ns/op             8 B/op          1 allocs/op\nBenchmarkFloat32-4              10000000               155 ns/op              24 B/op          2 allocs/op\nBenchmarkFloat64-4              10000000               177 ns/op              24 B/op          2 allocs/op\nBenchmarkTime-4                  5000000               240 ns/op              72 B/op          4 allocs/op\nBenchmarkTimeDuration-4         50000000                26.2 ns/op             8 B/op          1 allocs/op\nBenchmarkBytes-4                10000000               149 ns/op             128 B/op          3 allocs/op\nBenchmarkStrings-4              10000000               223 ns/op              40 B/op          3 allocs/op\nBenchmarkInts-4                 20000000                55.0 ns/op            16 B/op          2 allocs/op\nBenchmarkFloats-4               10000000               186 ns/op              32 B/op          3 allocs/op\nBenchmarkInterfaces-4           20000000                66.6 ns/op            24 B/op          2 allocs/op\nPASS\nok      command-line-arguments  35.356s\n'})})]})}function m(o={}){const{wrapper:n}={...(0,t.R)(),...o.components};return n?(0,s.jsx)(n,{...o,children:(0,s.jsx)(i,{...o})}):i(o)}},28453:(o,n,e)=>{e.d(n,{R:()=>a,x:()=>p});var s=e(296540);const t={},c=s.createContext(t);function a(o){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof o?o(n):{...n,...o}}),[n,o])}function p(o){let n;return n=o.disableParentContext?"function"==typeof o.components?o.components(t):o.components||t:a(o.components),s.createElement(c.Provider,{value:n},o.children)}}}]);
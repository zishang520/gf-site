"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[72047],{299544:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u7279\u6027/\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u6269\u5c55","title":"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u6269\u5c55","description":"\u5728GoFrame\u6846\u67b6\u4e2d\u8fdb\u884c\u9519\u8bef\u5904\u7406\uff0c\u5c24\u5176\u662f\u9519\u8bef\u7801\u7684\u6269\u5c55\u3002\u901a\u8fc7\u4f7f\u7528\u9519\u8bef\u7801\u7684Detail\u53c2\u6570\uff0c\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\u3002\u5728\u5177\u4f53\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7WithCode\u65b9\u6cd5\u7075\u6d3b\u5730\u521b\u5efa\u65b0\u7684\u9519\u8bef\u7801\uff0c\u5e76\u5728\u4e2d\u95f4\u4ef6\u4e2d\u8fdb\u884c\u5e94\u7528\u548c\u5904\u7406\u3002\u8be5\u89e3\u51b3\u65b9\u6848\u4e0d\u4ec5\u589e\u5f3a\u4e86\u4e1a\u52a1\u903b\u8f91\u7684\u7075\u6d3b\u6027\uff0c\u8fd8\u4e3a\u4e0a\u5c42\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u7279\u6027/\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u6269\u5c55.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u7279\u6027","slug":"/docs/core/gerror-code-extension","permalink":"/en/2.7.x/docs/core/gerror-code-extension","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u7279\u6027/\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u6269\u5c55.md","tags":[],"version":"2.7.x","sidebarPosition":2,"frontMatter":{"slug":"/docs/core/gerror-code-extension","title":"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u6269\u5c55","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u9519\u8bef\u5904\u7406","\u9519\u8bef\u7801\u6269\u5c55","\u4e1a\u52a1\u903b\u8f91","\u4e2d\u95f4\u4ef6","\u81ea\u5b9a\u4e49\u6269\u5c55","\u9519\u8bef\u7801\u5b9a\u4e49","WithCode\u65b9\u6cd5","gcode"],"description":"\u5728GoFrame\u6846\u67b6\u4e2d\u8fdb\u884c\u9519\u8bef\u5904\u7406\uff0c\u5c24\u5176\u662f\u9519\u8bef\u7801\u7684\u6269\u5c55\u3002\u901a\u8fc7\u4f7f\u7528\u9519\u8bef\u7801\u7684Detail\u53c2\u6570\uff0c\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\u3002\u5728\u5177\u4f53\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7WithCode\u65b9\u6cd5\u7075\u6d3b\u5730\u521b\u5efa\u65b0\u7684\u9519\u8bef\u7801\uff0c\u5e76\u5728\u4e2d\u95f4\u4ef6\u4e2d\u8fdb\u884c\u5e94\u7528\u548c\u5904\u7406\u3002\u8be5\u89e3\u51b3\u65b9\u6848\u4e0d\u4ec5\u589e\u5f3a\u4e86\u4e1a\u52a1\u903b\u8f91\u7684\u7075\u6d3b\u6027\uff0c\u8fd8\u4e3a\u4e0a\u5c42\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u63a5\u53e3","permalink":"/en/2.7.x/docs/core/gerror-code-interface"},"next":{"title":"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u5b9e\u73b0","permalink":"/en/2.7.x/docs/core/gerror-code-custom"}}');var t=o(474848),d=o(28453);const s={slug:"/docs/core/gerror-code-extension",title:"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u6269\u5c55",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u9519\u8bef\u5904\u7406","\u9519\u8bef\u7801\u6269\u5c55","\u4e1a\u52a1\u903b\u8f91","\u4e2d\u95f4\u4ef6","\u81ea\u5b9a\u4e49\u6269\u5c55","\u9519\u8bef\u7801\u5b9a\u4e49","WithCode\u65b9\u6cd5","gcode"],description:"\u5728GoFrame\u6846\u67b6\u4e2d\u8fdb\u884c\u9519\u8bef\u5904\u7406\uff0c\u5c24\u5176\u662f\u9519\u8bef\u7801\u7684\u6269\u5c55\u3002\u901a\u8fc7\u4f7f\u7528\u9519\u8bef\u7801\u7684Detail\u53c2\u6570\uff0c\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\u3002\u5728\u5177\u4f53\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7WithCode\u65b9\u6cd5\u7075\u6d3b\u5730\u521b\u5efa\u65b0\u7684\u9519\u8bef\u7801\uff0c\u5e76\u5728\u4e2d\u95f4\u4ef6\u4e2d\u8fdb\u884c\u5e94\u7528\u548c\u5904\u7406\u3002\u8be5\u89e3\u51b3\u65b9\u6848\u4e0d\u4ec5\u589e\u5f3a\u4e86\u4e1a\u52a1\u903b\u8f91\u7684\u7075\u6d3b\u6027\uff0c\u8fd8\u4e3a\u4e0a\u5c42\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\u3002"},i=void 0,c={},a=[{value:"\u4e1a\u52a1\u9519\u8bef\u7801",id:"\u4e1a\u52a1\u9519\u8bef\u7801",level:2},{value:"\u9519\u8bef\u7801\u5b9a\u4e49",id:"\u9519\u8bef\u7801\u5b9a\u4e49",level:3},{value:"\u9519\u8bef\u7801\u4f7f\u7528",id:"\u9519\u8bef\u7801\u4f7f\u7528",level:3},{value:"\u6539\u5199\u4e2d\u95f4\u4ef6",id:"\u6539\u5199\u4e2d\u95f4\u4ef6",level:2}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u5f53\u4e1a\u52a1\u9700\u8981\u590d\u6742\u7684\u9519\u8bef\u7801\u5b9a\u4e49\u65f6\uff0c\u6211\u4eec\u63a8\u8350\u7075\u6d3b\u4f7f\u7528\u9519\u8bef\u7801\u7684 ",(0,t.jsx)(n.code,{children:"Detail"})," \u53c2\u6570\u6765\u6269\u5c55\u9519\u8bef\u7801\u529f\u80fd\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u4e2a\u4f8b\u5b50\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4e1a\u52a1\u9519\u8bef\u7801",children:"\u4e1a\u52a1\u9519\u8bef\u7801"}),"\n",(0,t.jsx)(n.h3,{id:"\u9519\u8bef\u7801\u5b9a\u4e49",children:"\u9519\u8bef\u7801\u5b9a\u4e49"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type BizCode struct {\n    User User\n    // ...\n}\n\ntype User struct {\n    Id   int\n    Name string\n    // ...\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u9519\u8bef\u7801\u4f7f\u7528",children:"\u9519\u8bef\u7801\u4f7f\u7528"}),"\n",(0,t.jsxs)(n.p,{children:["\u6269\u5c55\u9519\u8bef\u7801\u5927\u591a\u6570\u573a\u666f\u4e0b\u9700\u8981\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"WithCode"})," \u65b9\u6cd5\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// WithCode creates and returns a new error code based on given Code.\n// The code and message is from given `code`, but the detail if from given `detail`.\nfunc WithCode(code Code, detail interface{}) Code\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u56e0\u6b64\u4e0a\u9762\u6211\u4eec\u7684\u81ea\u5b9a\u4e49\u6269\u5c55\u53ef\u4ee5\u8fd9\u4e48\u4f7f\u7528\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'code := gcode.WithCode(gcode.CodeNotFound, BizCode{\n    User: User{\n        Id:   1,\n        Name: "John",\n    },\n})\nfmt.Println(code)\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5373\u5728\u9519\u8bef\u7801\u4e2d\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u573a\u666f\u6ce8\u5165\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u7801\u6269\u5c55\u6570\u636e\uff0c\u4ee5\u65b9\u4fbf\u4e0a\u5c42\u83b7\u53d6\u9519\u8bef\u7801\u540e\u505a\u8fdb\u4e00\u6b65\u5904\u7406\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u6539\u5199\u4e2d\u95f4\u4ef6",children:"\u6539\u5199\u4e2d\u95f4\u4ef6"}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u5c06\u4e0a\u9762\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u7801\u5e94\u7528\u5230\u8bf7\u6c42\u8fd4\u56de\u4e2d\u95f4\u4ef6\u4e2d\uff0c\u9876\u5c42\u4e1a\u52a1\u903b\u8f91\u4e5f\u53ef\u4ee5\u83b7\u53d6\u5230\u9519\u8bef\u7801\u5bf9\u5e94\u7684\u8be6\u60c5\u518d\u8fdb\u4e00\u6b65\u505a\u76f8\u5173\u7684\u4e1a\u52a1\u5904\u7406\u3002\u4e2d\u95f4\u4ef6\u8fd4\u56de\u7684\u6570\u636e\u7ed3\u6784\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u91cd\u5199\uff0c\u4f8b\u5982\u5176\u4e2d\u8fd4\u56de\u7684 ",(0,t.jsx)(n.code,{children:"code"})," \u5b57\u6bb5\u4e5f\u4e0d\u4e00\u5b9a\u662f\u6574\u5f62\u6570\u503c\uff0c\u53ef\u4ee5\u5b8c\u5168\u81ea\u5b9a\u4e49\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func ResponseHandler(r *ghttp.Request) {\n    r.Middleware.Next()\n    // There\'s custom buffer content, it then exits current handler.\n    if r.Response.BufferLength() > 0 {\n        return\n    }\n    var (\n        err  = r.GetError()\n        res  = r.GetHandlerResponse()\n        code = gerror.Code(err)\n    )\n    if code == gcode.CodeNil && err != nil {\n        code = gcode.CodeInternalError\n    }\n    if detail, ok := code.Detail().(BizCode); ok {\n        g.Log().Errorf(r.Context(), `error caused by user "%+v"`, detail.User)\n    }\n    r.Response.WriteJson(ghttp.DefaultHandlerResponse{\n        Code:    gcode.CodeOK.Code(),\n        Message: gcode.CodeOK.Message(),\n        Data:    res,\n    })\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u5728\u6846\u67b6 ",(0,t.jsx)(n.code,{children:"Server"})," \u9ed8\u8ba4\u7684\u65e5\u5fd7\u4e2d\u4f1a\u81ea\u52a8\u6253\u5370 ",(0,t.jsx)(n.code,{children:"Detail"})," \u6570\u636e\u3002"]})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var r=o(296540);const t={},d=r.createContext(t);function s(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);
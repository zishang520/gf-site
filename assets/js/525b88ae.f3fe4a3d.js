"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[32373],{705546:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>h});const d=JSON.parse('{"id":"\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gcron -\u5b9a\u65f6\u4efb\u52a1\u6a21\u5757","title":"gcron (\u5b9a\u65f6\u4efb\u52a1\u6a21\u5757)","description":"gcron \u6a21\u5757\u63d0\u4f9b\u4e86\u5bf9\u5b9a\u65f6\u4efb\u52a1\u7684\u5b9e\u73b0\uff0c\u652f\u6301\u7c7b\u4f3c crontab \u7684\u914d\u7f6e\u7ba1\u7406\u65b9\u5f0f\uff0c\u5e76\u652f\u6301\u6700\u5c0f\u7c92\u5ea6\u5230 \u79d2 \u7684\u5b9a\u65f6\u4efb\u52a1\u7ba1\u7406\u3002","source":"@site/versioned_docs/version-1.16.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gcron -\u5b9a\u65f6\u4efb\u52a1\u6a21\u5757.md","sourceDirName":"\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173","slug":"/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gcron -\u5b9a\u65f6\u4efb\u52a1\u6a21\u5757","permalink":"/1.16.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gcron -\u5b9a\u65f6\u4efb\u52a1\u6a21\u5757","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gcron -\u5b9a\u65f6\u4efb\u52a1\u6a21\u5757.md","tags":[],"version":"1.16.x","sidebarPosition":2,"frontMatter":{"title":"gcron (\u5b9a\u65f6\u4efb\u52a1\u6a21\u5757)","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u5de5\u5177\u65b9\u6cd5","permalink":"/1.16.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gtime -\u65f6\u95f4\u7ba1\u7406\u6a21\u5757/\u5de5\u5177\u65b9\u6cd5"},"next":{"title":"gtimer (\u4efb\u52a1\u5b9a\u65f6\u5668)","permalink":"/1.16.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gtimer -\u4efb\u52a1\u5b9a\u65f6\u5668"}}');var i=c(474848),r=c(28453);const s={title:"gcron (\u5b9a\u65f6\u4efb\u52a1\u6a21\u5757)",sidebar_position:2,hide_title:!0},l=void 0,o={},h=[{value:"CRON\u8868\u8fbe\u683c\u5f0f",id:"cron\u8868\u8fbe\u683c\u5f0f",level:2},{value:"\u7279\u6b8a\u5b57\u7b26",id:"\u7279\u6b8a\u5b57\u7b26",level:3},{value:"\u661f\u53f7\uff08 <code>*</code>\uff09",id:"\u661f\u53f7-",level:4},{value:"\u659c\u7ebf\uff08 <code>/</code>\uff09",id:"\u659c\u7ebf-",level:4},{value:"\u9017\u53f7\uff08 <code>,</code>\uff09",id:"\u9017\u53f7-",level:4},{value:"\u8fde\u5b57\u7b26\uff08 <code>-</code>\uff09",id:"\u8fde\u5b57\u7b26--",level:4},{value:"\u95ee\u53f7\uff08 <code>?</code>\uff09",id:"\u95ee\u53f7-",level:4},{value:"\u9884\u5b9a\u4e49\u7684\u65f6\u95f4\u8868",id:"\u9884\u5b9a\u4e49\u7684\u65f6\u95f4\u8868",level:4},{value:"\u95f4\u9694",id:"\u95f4\u9694",level:4},{value:"\u8868\u8fbe\u5f0f\u793a\u4f8b",id:"\u8868\u8fbe\u5f0f\u793a\u4f8b",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u793a\u4f8b1, \u57fa\u672c\u4f7f\u7528",id:"\u793a\u4f8b1-\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u793a\u4f8b2, \u5355\u4f8b\u5b9a\u65f6\u4efb\u52a1",id:"\u793a\u4f8b2-\u5355\u4f8b\u5b9a\u65f6\u4efb\u52a1",level:3},{value:"\u793a\u4f8b3, \u65e5\u5fd7\u8bb0\u5f55\u529f\u80fd",id:"\u793a\u4f8b3-\u65e5\u5fd7\u8bb0\u5f55\u529f\u80fd",level:3}];function t(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"gcron"})," \u6a21\u5757\u63d0\u4f9b\u4e86\u5bf9\u5b9a\u65f6\u4efb\u52a1\u7684\u5b9e\u73b0\uff0c\u652f\u6301\u7c7b\u4f3c ",(0,i.jsx)(e.code,{children:"crontab"})," \u7684\u914d\u7f6e\u7ba1\u7406\u65b9\u5f0f\uff0c\u5e76\u652f\u6301\u6700\u5c0f\u7c92\u5ea6\u5230 ",(0,i.jsx)(e.code,{children:"\u79d2"})," \u7684\u5b9a\u65f6\u4efb\u52a1\u7ba1\u7406\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/os/gcron"\n\n'})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://godoc.org/github.com/gogf/gf/os/gcron",children:"https://godoc.org/github.com/gogf/gf/os/gcron"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"New"})," \u65b9\u6cd5\u7528\u4e8e\u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u5b9a\u65f6\u4efb\u52a1\u7ba1\u7406\u5bf9\u8c61\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Add"})," \u65b9\u6cd5\u7528\u4e8e\u6dfb\u52a0\u5b9a\u65f6\u4efb\u52a1\uff0c\u5176\u4e2d\uff1a","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["- ",(0,i.jsx)(e.code,{children:"pattern"})," \u53c2\u6570\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"CRON\u8bed\u6cd5\u683c\u5f0f"}),"(\u5177\u4f53\u8bf4\u660e\u89c1\u672c\u7ae0\u540e\u7eed\u76f8\u5173\u8bf4\u660e)\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:["- ",(0,i.jsx)(e.code,{children:"job"})," \u53c2\u6570\u4e3a\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1\u65b9\u6cd5(\u65b9\u6cd5\u5730\u5740)\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:["- ",(0,i.jsx)(e.code,{children:"name"})," \u4e3a\u975e\u5fc5\u9700\u53c2\u6570\uff0c\u7528\u4e8e\u7ed9\u5b9a\u65f6\u4efb\u52a1\u6307\u5b9a\u4e00\u4e2a ",(0,i.jsx)(e.strong,{children:"\u552f\u4e00\u7684"})," \u540d\u79f0\uff0c\u6ce8\u610f\u5982\u679c\u5df2\u5b58\u5728\u76f8\u540c\u540d\u79f0\u7684\u4efb\u52a1\uff0c\u90a3\u4e48\u6dfb\u52a0\u5b9a\u65f6\u4efb\u52a1\u5c06\u4f1a\u5931\u8d25\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"AddSingleton"})," \u65b9\u6cd5\u7528\u4e8e\u6dfb\u52a0\u5355\u4f8b\u5b9a\u65f6\u4efb\u52a1\uff0c\u5373\u540c\u65f6\u53ea\u80fd\u6709\u4e00\u4e2a\u8be5\u4efb\u52a1\u6b63\u5728\u8fd0\u884c\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"AddOnce"})," \u65b9\u6cd5\u7528\u4e8e\u6dfb\u52a0\u53ea\u8fd0\u884c\u4e00\u6b21\u7684\u5b9a\u65f6\u4efb\u52a1\uff0c\u5f53\u8fd0\u884c\u4e00\u6b21\u6570\u540e\u8be5\u5b9a\u65f6\u4efb\u52a1\u81ea\u52a8\u9500\u6bc1\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"AddTimes"})," \u65b9\u6cd5\u7528\u4e8e\u6dfb\u52a0\u8fd0\u884c\u6307\u5b9a\u6b21\u6570\u7684\u5b9a\u65f6\u4efb\u52a1\uff0c\u5f53\u8fd0\u884c ",(0,i.jsx)(e.code,{children:"times"})," \u6b21\u6570\u540e\u8be5\u5b9a\u65f6\u4efb\u52a1\u81ea\u52a8\u9500\u6bc1\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Entries"})," \u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u6240\u6709\u5df2\u6ce8\u518c\u7684\u5b9a\u65f6\u4efb\u52a1\u4fe1\u606f\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Remove"})," \u65b9\u6cd5\u7528\u4e8e\u6839\u636e\u540d\u79f0\u5220\u9664\u5b9a\u65f6\u4efb\u52a1(\u505c\u6b62\u5e76\u5220\u9664)\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Search"})," \u65b9\u6cd5\u7528\u4e8e\u6839\u636e\u540d\u79f0\u8fdb\u884c\u5b9a\u65f6\u4efb\u52a1\u641c\u7d22(\u8fd4\u56de\u5b9a\u65f6\u4efb\u52a1 ",(0,i.jsx)(e.code,{children:"*Entry"})," \u5bf9\u8c61\u6307\u9488)\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Start"})," \u65b9\u6cd5\u7528\u4e8e\u542f\u52a8\u5b9a\u65f6\u4efb\u52a1( ",(0,i.jsx)(e.code,{children:"Add"})," \u540e\u81ea\u52a8\u542f\u52a8\u5b9a\u65f6\u4efb\u52a1), \u53ef\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"name"})," \u53c2\u6570\u6307\u5b9a\u9700\u8981\u542f\u52a8\u7684\u4efb\u52a1\u540d\u79f0\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Stop"})," \u65b9\u6cd5\u7528\u4e8e\u505c\u6b62\u5b9a\u65f6\u4efb\u52a1( ",(0,i.jsx)(e.code,{children:"Remove"})," \u4f1a\u505c\u6b62\u5e76\u5220\u9664), \u53ef\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"name"})," \u53c2\u6570\u6307\u5b9a\u9700\u8981\u505c\u6b62\u7684\u4efb\u52a1\u540d\u79f0\uff1b"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Close"})," \u65b9\u6cd5\u7528\u4e8e\u5173\u95ed\u81ea\u5b9a\u4e49\u7684\u5b9a\u65f6\u4efb\u52a1\u7ba1\u7406\u5bf9\u8c61\uff1b"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"cron\u8868\u8fbe\u683c\u5f0f",children:"CRON\u8868\u8fbe\u683c\u5f0f"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"cron\u8868\u8fbe\u5f0f"})," \u8868\u793a\u4e00\u7ec4\u65f6\u95f4\uff0c\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"6"})," \u4e2a\u7a7a\u683c\u5206\u9694\u7684\u5b57\u6bb5\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Seconds Minutes Hours Day Month Week\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5373 ",(0,i.jsx)(e.code,{children:"\u79d2 \u5206 \u65f6 \xa0\u65e5 \u6708 \u5468"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u6bcf\u4e2a\u5b57\u6bb5\u7684\u542b\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"Field name    | Allowed values  | Allowed special characters\n----------    | --------------  | --------------------------\nSeconds       | 0-59            | * / , -\nMinutes       | 0-59            | * / , -\nHours         | 0-23            | * / , -\nDay           | 1-31            | * / , - ?\nMonth         | 1-12 or JAN-DEC | * / , -\nWeek          | 0-6 or SUN-SAT  | * / , - ?\n\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u6ce8\u610f\uff1a\u6708\u4efd\u548c\u661f\u671f\u51e0\u5b57\u6bb5\u503c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002 ",(0,i.jsx)(e.code,{children:"SUN"}),"\u3001 ",(0,i.jsx)(e.code,{children:"Sun"}),"\xa0\u548c ",(0,i.jsx)(e.code,{children:"sun"})," \u540c\u6837\u88ab\u63a5\u53d7\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u7279\u6b8a\u5b57\u7b26",children:"\u7279\u6b8a\u5b57\u7b26"}),"\n",(0,i.jsxs)(e.h4,{id:"\u661f\u53f7-",children:["\u661f\u53f7\uff08 ",(0,i.jsx)(e.code,{children:"*"}),"\uff09"]}),"\n",(0,i.jsxs)(e.p,{children:["\u661f\u53f7\u8868\u793a ",(0,i.jsx)(e.code,{children:"cron"})," \u8868\u8fbe\u5f0f\u5c06\u5339\u914d\u6240\u6709\u7684\u503c\u3002\u4f8b\u5982\uff0c\u5728\u7b2c\u4e94\u4e2a\u5b57\u6bb5( ",(0,i.jsx)(e.code,{children:"Month"}),")\u4e2d\u4f7f\u7528\u661f\u53f7\u8868\u793a\u6bcf\u4e2a\u6708\u3002"]}),"\n",(0,i.jsxs)(e.h4,{id:"\u659c\u7ebf-",children:["\u659c\u7ebf\uff08 ",(0,i.jsx)(e.code,{children:"/"}),"\uff09"]}),"\n",(0,i.jsxs)(e.p,{children:["\u659c\u6760\u7528\u4e8e\u63cf\u8ff0\u8303\u56f4\u7684\u589e\u91cf\u3002\u4f8b\u5982\uff1a\u7b2c\u4e8c\u4e2a\u5b57\u6bb5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"3-59/15"})," \u8868\u793a\u6bcf\u5c0f\u65f6\u7684\u7b2c3\u5206\u949f\u5f00\u59cb\u5230\u7b2c59\u5206\u949f\uff0c\u6bcf\u969415\u5206\u949f\u6267\u884c\u3002"]}),"\n",(0,i.jsxs)(e.h4,{id:"\u9017\u53f7-",children:["\u9017\u53f7\uff08 ",(0,i.jsx)(e.code,{children:","}),"\uff09"]}),"\n",(0,i.jsxs)(e.p,{children:["\u9017\u53f7\u7528\u4e8e\u5206\u9694\u5217\u8868\u7684\u9879\u76ee\u3002\u4f8b\u5982\uff0c\u7b2c\u4e94\u4e2a\u5b57\u6bb5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"MON,WED,FRI"})," \u5c06\u6307\u6bcf\u5468\u4e00\uff0c\u5468\u4e09\u548c\u5468\u4e94\u6267\u884c\u3002"]}),"\n",(0,i.jsxs)(e.h4,{id:"\u8fde\u5b57\u7b26--",children:["\u8fde\u5b57\u7b26\uff08 ",(0,i.jsx)(e.code,{children:"-"}),"\uff09"]}),"\n",(0,i.jsxs)(e.p,{children:["\u8fde\u5b57\u7b26\u7528\u4e8e\u5b9a\u4e49\u8303\u56f4\u3002\u4f8b\u5982\uff0c\u7b2c\u4e09\u4e2a\u5b57\u6bb5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"9-17"})," \u8868\u793a\u6bcf\u5929\u4e0a\u5348 ",(0,i.jsx)(e.code,{children:"9"})," \u70b9\u81f3\u4e0b\u5348 ",(0,i.jsx)(e.code,{children:"5"})," \u70b9\uff08\u542b\uff09\u3002"]}),"\n",(0,i.jsxs)(e.h4,{id:"\u95ee\u53f7-",children:["\u95ee\u53f7\uff08 ",(0,i.jsx)(e.code,{children:"?"}),"\uff09"]}),"\n",(0,i.jsxs)(e.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"\u95ee\u53f7"})," \u800c\u4e0d\u662f ",(0,i.jsx)(e.code,{children:"*"})," \u6765\u8ba9 ",(0,i.jsx)(e.code,{children:"Day"})," \u6216 ",(0,i.jsx)(e.code,{children:"Week"})," \u5b57\u6bb5\u4e3a\u7a7a\u3002"]}),"\n",(0,i.jsx)(e.h4,{id:"\u9884\u5b9a\u4e49\u7684\u65f6\u95f4\u8868",children:"\u9884\u5b9a\u4e49\u7684\u65f6\u95f4\u8868"}),"\n",(0,i.jsx)(e.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528\u51e0\u4e2a\u9884\u5b9a\u4e49\u7684\u65f6\u95f4\u6765\u4ee3\u66ffcron\u8868\u8fbe\u5f0f\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"Entry                  | Description                                | Equivalent To\n-----                  | -----------                                | -------------\n@yearly (or @annually) | Run once a year, midnight, Jan. 1st        | 0 0 0 1 1 *\n@monthly               | Run once a month, midnight, first of month | 0 0 0 1 * *\n@weekly                | Run once a week, midnight between Sat/Sun  | 0 0 0 * * 0\n@daily (or @midnight)  | Run once a day, midnight                   | 0 0 0 * * *\n@hourly                | Run once an hour, beginning of hour        | 0 0 * * * *\n\n"})}),"\n",(0,i.jsx)(e.h4,{id:"\u95f4\u9694",children:"\u95f4\u9694"}),"\n",(0,i.jsxs)(e.p,{children:["\u60a8\u8fd8\u53ef\u4ee5\u5b9a\u4e49\u4efb\u52a1\u4ee5\u56fa\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u6267\u884c\uff0c\u4ece\u6dfb\u52a0\u65f6\u5f00\u59cb\u8fd0\u884c\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u683c\u5f0f\u5316 ",(0,i.jsx)(e.code,{children:"cron"})," \u89c4\u8303\u6765\u652f\u6301\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"@every <duration>\n\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5176\u4e2d ",(0,i.jsx)(e.code,{children:"duration"})," \u662f ",(0,i.jsx)(e.code,{children:"time.ParseDuration"})," \u63a5\u53d7\u7684\u5b57\u7b26\u4e32 \uff08 ",(0,i.jsx)(e.a,{href:"http://golang.org/pkg/time/#ParseDuration",children:"http://golang.org/pkg/time/#ParseDuration"}),"\uff09\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4f8b\u5982\uff0c ",(0,i.jsx)(e.code,{children:"@every 1h30m10s"})," \u5c06\u8868\u793a\u6dfb\u52a0\u4efb\u52a1\u4e4b\u540e\u6bcf\u9694 ",(0,i.jsx)(e.code,{children:"1\u5c0f\u65f630\u520610\u79d2"})," \u6267\u884c\u3002"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u95f4\u9694\u4e0d\u4f1a\u8003\u8651\u4efb\u52a1\u7684\u6267\u884c\u65f6\u95f4\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4e00\u9879\u5de5\u4f5c\u9700\u89813\u5206\u949f\u624d\u80fd\u6267\u884c\u5b8c\u6210\uff0c\u5e76\u4e14\u8ba1\u5212\u6bcf\u96945\u5206\u949f\u8fd0\u884c\u4e00\u6b21\uff0c\u90a3\u4e48\u6bcf\u6b21\u4efb\u52a1\u4e4b\u95f4\u53ea\u67092\u5206\u949f\u7684\u7a7a\u95f2\u65f6\u95f4\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u8868\u8fbe\u5f0f\u793a\u4f8b",children:"\u8868\u8fbe\u5f0f\u793a\u4f8b"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u8868\u8fbe\u5f0f\u793a\u4f8b"}),(0,i.jsx)(e.th,{children:"\u8868\u8fbe\u5f0f\u8bf4\u660e"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"* * * * * *"})}),(0,i.jsx)(e.td,{children:"\u6bcf\u79d2\u6267\u884c"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"2\xa0* * * * *"})}),(0,i.jsxs)(e.td,{children:["\u6bcf\u5206\u949f\u7684\u7b2c ",(0,i.jsx)(e.code,{children:"2"})," \u79d2\u6267\u884c"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"*/5 * * * * *"})}),(0,i.jsxs)(e.td,{children:["\u6bcf ",(0,i.jsx)(e.code,{children:"5"})," \u79d2\u6267\u884c\u4e00\u6b21"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"0 */30 * * * *"})}),(0,i.jsxs)(e.td,{children:["\u6bcf ",(0,i.jsx)(e.code,{children:"30"})," \u5206\u949f\u6267\u884c\u4e00\u6b21"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"0 0 2 * * *"})}),(0,i.jsxs)(e.td,{children:["\u6bcf\u5929\u51cc\u6668 ",(0,i.jsx)(e.code,{children:"2"})," \u70b9\u6267\u884c"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"0 */30 9-18 * * *"})}),(0,i.jsxs)(e.td,{children:["\u6bcf\u5929 ",(0,i.jsx)(e.code,{children:"9"})," \u70b9\u5230 ",(0,i.jsx)(e.code,{children:"18"})," \u70b9\uff0c\u6bcf\u9694 ",(0,i.jsx)(e.code,{children:"30"})," \u5206\u949f\u6267\u884c\u4e00\u6b21"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"0 0 9 * * MON,FRI"})}),(0,i.jsxs)(e.td,{children:["\u6bcf ",(0,i.jsx)(e.code,{children:"\u5468\u4e00"})," \u548c ",(0,i.jsx)(e.code,{children:"\u5468\u4e94"})," \u5728 ",(0,i.jsx)(e.code,{children:"9"})," \u70b9\u6267\u884c\u4e00\u6b21"]})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,i.jsx)(e.h3,{id:"\u793a\u4f8b1-\u57fa\u672c\u4f7f\u7528",children:"\u793a\u4f8b1, \u57fa\u672c\u4f7f\u7528"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/frame/g"\n    "github.com/gogf/gf/os/gcron"\n    "github.com/gogf/gf/os/glog"\n    "time"\n)\n\nfunc main() {\n    gcron.Add("0 30 * * * *", func() { glog.Println("Every hour on the half hour") })\n    gcron.Add("* * * * * *",  func() { glog.Println("Every second") }, "second-cron")\n    gcron.Add("@hourly",      func() { glog.Println("Every hour") })\n    gcron.Add("@every 1h30m", func() { glog.Println("Every hour thirty") })\n    g.Dump(gcron.Entries())\n\n    time.Sleep(3*time.Second)\n\n    gcron.Stop("second-cron")\n\n    time.Sleep(3*time.Second)\n\n    gcron.Start("second-cron")\n\n    time.Sleep(3*time.Second)\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:'[\n    {\n        "Spec": "0 30 * * * *",\n        "Cmd": "main.main.func1",\n        "Time": "2018-10-25T10:05:28.898768522+08:00",\n        "Name": "",\n        "Status": {}\n    },\n    {\n        "Spec": "* * * * * *",\n        "Cmd": "main.main.func2",\n        "Time": "2018-10-25T10:05:28.898773631+08:00",\n        "Name": "second-cron",\n        "Status": {}\n    },\n    {\n        "Spec": "@hourly",\n        "Cmd": "main.main.func3",\n        "Time": "2018-10-25T10:05:28.89885461+08:00",\n        "Name": "",\n        "Status": {}\n    },\n    {\n        "Spec": "@every 1h30m",\n        "Cmd": "main.main.func4",\n        "Time": "2018-10-25T10:05:28.89885883+08:00",\n        "Name": "",\n        "Status": {}\n    }\n]\n2018-10-25 10:05:29.000 Every second\n2018-10-25 10:05:30.000 Every second\n2018-10-25 10:05:31.000 Every second\n2018-10-25 10:05:35.000 Every second\n2018-10-25 10:05:36.000 Every second\n2018-10-25 10:05:37.000 Every second\n\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u793a\u4f8b2-\u5355\u4f8b\u5b9a\u65f6\u4efb\u52a1",children:"\u793a\u4f8b2, \u5355\u4f8b\u5b9a\u65f6\u4efb\u52a1"}),"\n",(0,i.jsxs)(e.p,{children:["\u5355\u4f8b\u5b9a\u65f6\u4efb\u52a1\uff0c\u5373\u540c\u65f6\u53ea\u80fd\u6709\u4e00\u4e2a\u8be5\u4efb\u52a1\u6b63\u5728\u8fd0\u884c\u3002\u5f53\u7b2c\u4e8c\u4e2a\u76f8\u540c\u7684\u5b9a\u65f6\u4efb\u52a1\u89e6\u53d1\u6267\u884c\u65f6\uff0c\u5982\u679c\u53d1\u73b0\u5df2\u6709\u8be5\u4efb\u52a1\u6b63\u5728\u6267\u884c\uff0c\u7b2c\u4e8c\u4e2a\u4efb\u52a1\u5c06\u4f1a\u9000\u51fa\u4e0d\u6267\u884c\uff0c\u5b9a\u65f6\u5668\u5c06\u4f1a\u7ee7\u7eed\u7b49\u5f85\u4e0b\u4e00\u6b21\u5b9a\u65f6\u4efb\u52a1\u7684\u89e6\u53d1\u68c0\u6d4b\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"AddSingleton"})," \u6dfb\u52a0\u5355\u4f8b\u5b9a\u65f6\u4efb\u52a1\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/os/gcron"\n    "github.com/gogf/gf/os/glog"\n    "time"\n)\n\nfunc main() {\n    gcron.AddSingleton("* * * * * *", func() {\n        glog.Println("doing")\n        time.Sleep(2*time.Second)\n    })\n    select { }\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"2019-01-16 22:49:27.699 doing\n2019-01-16 22:49:30.696 doing\n2019-01-16 22:49:33.699 doing\n...\n\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u793a\u4f8b3-\u65e5\u5fd7\u8bb0\u5f55\u529f\u80fd",children:"\u793a\u4f8b3, \u65e5\u5fd7\u8bb0\u5f55\u529f\u80fd"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"gcron"})," \u652f\u6301\u65e5\u5fd7\u8bb0\u5f55\u529f\u80fd\uff0c\u5e76\u53ef\u8bbe\u7f6e\u65e5\u5fd7\u8f93\u51fa\u7684\u6587\u4ef6\u4ee5\u53ca\u7ea7\u522b\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4ec5\u4f1a\u8f93\u51fa ",(0,i.jsx)(e.code,{children:"LEVEL_WARN | LEVEL_ERRO | LEVEL_CRIT"})," \u9519\u8bef\u7ea7\u522b\u7684\u65e5\u5fd7\uff08\u5305\u62ec\u5b9a\u65f6\u4efb\u52a1\u8fd0\u884c\u5f02\u5e38\u65e5\u5fd7\uff09\uff0c\u8fd0\u884c\u65e5\u5fd7\u4ee5 ",(0,i.jsx)(e.code,{children:"LEVEL_DEBUG"})," \u7684\u7ea7\u522b\u8fdb\u884c\u8bb0\u5f55\uff0c\u56e0\u6b64\u9ed8\u8ba4\u4e0d\u4f1a\u8bb0\u5f55\u3002 \u76f8\u5173\u65b9\u6cd5\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func SetLogPath(path string)\nfunc SetLogLevel(level int)\nfunc GetLogPath() string\nfunc GetLogLevel() int\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/os/gcron"\n    "github.com/gogf/gf/os/glog"\n    "time"\n)\n\nfunc main() {\n    gcron.SetLogLevel(glog.LEVEL_ALL)\n    gcron.Add("* * * * * ?", func() {\n        glog.Println("test")\n    })\n    time.Sleep(3 * time.Second)\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"2019-04-08 23:29:10.119 [DEBU] [gcron] gcron-1(* * * * * ?) main.main.func1 start\n2019-04-08 23:29:10.119 test\n2019-04-08 23:29:10.120 [DEBU] [gcron] gcron-1(* * * * * ?) main.main.func1 end\n2019-04-08 23:29:11.119 [DEBU] [gcron] gcron-1(* * * * * ?) main.main.func1 start\n2019-04-08 23:29:11.119 test\n2019-04-08 23:29:11.119 [DEBU] [gcron] gcron-1(* * * * * ?) main.main.func1 end\n\n"})})]})}function x(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(t,{...n})}):t(n)}},28453:(n,e,c)=>{c.d(e,{R:()=>s,x:()=>l});var d=c(296540);const i={},r=d.createContext(i);function s(n){const e=d.useContext(r);return d.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),d.createElement(r.Provider,{value:e},n.children)}}}]);
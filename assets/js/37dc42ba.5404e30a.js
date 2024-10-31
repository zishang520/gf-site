"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[64131],{591900:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>d,metadata:()=>a,toc:()=>s});var o=i(474848),t=i(28453);const d={title:"\u955c\u50cf\u7f16\u8bd1-docker",sidebar_position:8,hide_title:!0},r=void 0,a={id:"\u5f00\u53d1\u5de5\u5177/\u955c\u50cf\u7f16\u8bd1-docker",title:"\u955c\u50cf\u7f16\u8bd1-docker",description:"\u4f7f\u7528\u65b9\u5f0f",source:"@site/versioned_docs/version-2.3.x/\u5f00\u53d1\u5de5\u5177/\u955c\u50cf\u7f16\u8bd1-docker.md",sourceDirName:"\u5f00\u53d1\u5de5\u5177",slug:"/\u5f00\u53d1\u5de5\u5177/\u955c\u50cf\u7f16\u8bd1-docker",permalink:"/gf-site/docs/2.3.x/\u5f00\u53d1\u5de5\u5177/\u955c\u50cf\u7f16\u8bd1-docker",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u5f00\u53d1\u5de5\u5177/\u955c\u50cf\u7f16\u8bd1-docker.md",tags:[],version:"2.3.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:8,frontMatter:{title:"\u955c\u50cf\u7f16\u8bd1-docker",sidebar_position:8,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u8d44\u6e90\u6253\u5305-pack",permalink:"/gf-site/docs/2.3.x/\u5f00\u53d1\u5de5\u5177/\u8d44\u6e90\u6253\u5305-pack"},next:{title:"\u517c\u5bb9\u4fee\u590d-fix",permalink:"/gf-site/docs/2.3.x/\u5f00\u53d1\u5de5\u5177/\u517c\u5bb9\u4fee\u590d-fix"}},c={},s=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",id:"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ gf docker -h\nUSAGE\n    gf docker [MAIN] [OPTION]\n\nARGUMENT\n    MAIN    main file path for "gf build", it\'s "main.go" in default. empty string for no binary build\n\nOPTION\n    -f, --file           file path of the Dockerfile. it\'s "manifest/docker/Dockerfile" in default\n    -s, --shell          path of the shell file which is executed before docker build\n    -b, --build          binary build options before docker image build, it\'s "-a amd64 -s linux" in default\n    -tn, --tagName       tag name for this docker, pattern like "image:tag". this option is required with TagPrefixes\n    -tp, --tagPrefixes   tag prefixes for this docker, which are used for docker push. this option is required with\n                         TagName\n    -p, --push           auto push the docker image to docker registry if "-t" option passed\n    -e, --extra          extra build options passed to "docker image"\n    -h, --help           more information about this command\n\nEXAMPLE\n    gf docker\n    gf docker -t hub.docker.com/john/image:tag\n    gf docker -p -t hub.docker.com/john/image:tag\n    gf docker main.go\n    gf docker main.go -t hub.docker.com/john/image:tag\n    gf docker main.go -t hub.docker.com/john/image:tag\n    gf docker main.go -p -t hub.docker.com/john/image:tag\n\nDESCRIPTION\n    The "docker" command builds the GF project to a docker images.\n    It runs "gf build" firstly to compile the project to binary file.\n    It then runs "docker build" command automatically to generate the docker image.\n    You should have docker installed, and there must be a Dockerfile in the root of the project.\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u81ea\u52a8\u7f16\u8bd1\u5e76\u751f\u6210 ",(0,o.jsx)(n.code,{children:"docker"})," \u955c\u50cf\u3002\u975e\u5fc5\u9700 ",(0,o.jsx)(n.code,{children:"FILE"})," \u53c2\u6570\u4e3a\u7f16\u8bd1\u6587\u4ef6\u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a ",(0,o.jsx)(n.code,{children:"main.go"}),"\u3002\u975e\u5fc5\u9700\u53c2\u6570 ",(0,o.jsx)(n.code,{children:"OPTIONS"})," \u4e3a ",(0,o.jsx)(n.code,{children:"docker build"})," \u547d\u4ee4\u76f8\u540c\u53c2\u6570\u53ca\u9009\u9879\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ gf docker main.go -p -tn loads/gf-demos:test\n2020-12-31 00:47:28.207 start building...\n2020-12-31 00:47:28.207 go build -o ./bin/linux_amd64/main main.go\n2020-12-31 00:47:35.894 done!\nSending build context to Docker daemon  37.63MB\nStep 1/10 : FROM loads/alpine:3.8\n ---\x3e f9fb622e6db2\nStep 2/10 : LABEL maintainer="john@goframe.org"\n ---\x3e Using cache\n ---\x3e da238418d031\nStep 3/10 : ENV WORKDIR /var/www/gf-demos\n ---\x3e Using cache\n ---\x3e 3e7129c087c9\nStep 4/10 : ADD ./bin/linux_amd64/main   $WORKDIR/main\n ---\x3e 3661a9dea494\nStep 5/10 : RUN chmod +x $WORKDIR/main\n ---\x3e Running in 1d49d5d91080\nRemoving intermediate container 1d49d5d91080\n ---\x3e a03ee04e3380\nStep 6/10 : ADD public   $WORKDIR/public\n ---\x3e 63dd06d0e1a3\nStep 7/10 : ADD config   $WORKDIR/config\n ---\x3e fa7a57eba577\nStep 8/10 : ADD template $WORKDIR/template\n ---\x3e 7075609b0447\nStep 9/10 : WORKDIR $WORKDIR\n ---\x3e Running in a34ef38e1031\nRemoving intermediate container a34ef38e1031\n ---\x3e 580077998eaf\nStep 10/10 : CMD ./main\n ---\x3e Running in ed286b518ad9\nRemoving intermediate container ed286b518ad9\n ---\x3e fbbc05842901\nSuccessfully built fbbc05842901\nSuccessfully tagged loads/gf-demos:test\nThe push refers to repository [docker.io/loads/gf-demos]\nb4025b95a79f: Preparing\n9e0369a57507: Preparing\n46c68dcc8e12: Preparing\n59adbc083ee5: Preparing\n10e0b999ba57: Preparing\n8e850d7b086e: Waiting\nd5e057db20a2: Waiting\n92e898fd7f84: Waiting\nd9ff549177a9: Waiting\n...\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",children:"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"}),"\n",(0,o.jsxs)(n.p,{children:["\u5927\u90e8\u5206\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u6765\u7ba1\u7406\u5de5\u5177\u7684\u914d\u7f6e\uff0c\u5728 ",(0,o.jsx)(n.code,{children:"hack/config.yaml"})," \u6587\u4ef6\u4e2d\u7ef4\u62a4\uff0c\u4f8b\u5982 ",(0,o.jsx)(n.code,{children:"docker"})," \u547d\u4ee4\u7684\u914d\u7f6e\u793a\u4f8b\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'gfcli:\n  docker:\n    build: "-a amd64 -s linux -p temp -ew"\n    tagPrefixes:\n    - ccr.ccs.tencentyun.com/cdb.khaos.eros\n'})})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var o=i(296540);const t={},d=o.createContext(t);function r(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);
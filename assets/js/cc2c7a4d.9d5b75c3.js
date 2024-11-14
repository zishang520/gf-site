"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[75660],{920856:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u5b57\u6bb5\u6620\u5c04","title":"ORM\u9ad8\u7ea7\u7279\u6027-\u5b57\u6bb5\u6620\u5c04","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/versioned_docs/version-2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u5b57\u6bb5\u6620\u5c04.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027","slug":"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u5b57\u6bb5\u6620\u5c04","permalink":"/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u5b57\u6bb5\u6620\u5c04","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u5b57\u6bb5\u6620\u5c04.md","tags":[],"version":"2.5.x","sidebarPosition":3,"frontMatter":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u5b57\u6bb5\u6620\u5c04","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u65e5\u5fd7\u8f93\u51fa","permalink":"/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u65e5\u5fd7\u8f93\u51fa"},"next":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u7a7a\u8dd1\u7279\u6027","permalink":"/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7a7a\u8dd1\u7279\u6027"}}');var o=r(474848),s=r(28453);const i={title:"ORM\u9ad8\u7ea7\u7279\u6027-\u5b57\u6bb5\u6620\u5c04",sidebar_position:3,hide_title:!0},c=void 0,d={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u91cd\u8981\u8bf4\u660e",id:"\u91cd\u8981\u8bf4\u660e",level:2},{value:"\u63a5\u53e3\u8bbe\u8ba1",id:"\u63a5\u53e3\u8bbe\u8ba1",level:3},{value:"\u5b57\u6bb5\u7f13\u5b58",id:"\u5b57\u6bb5\u7f13\u5b58",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function l(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u5bf9\u6570\u636e\u8fdb\u884c\u5199\u5165\u3001\u66f4\u65b0\u4f7f\u7528\u8bf8\u5982 ",(0,o.jsx)(n.code,{children:"Fields/Data/Scan"})," \u65b9\u6cd5\u65f6\uff0c\u5982\u679c\u7ed9\u5b9a\u7684\u53c2\u6570\u4e3a ",(0,o.jsx)(n.code,{children:"map/struct"})," \u7c7b\u578b\uff0c\u7ed9\u5b9a\u53c2\u6570\u7684\u952e\u540d/\u5c5e\u6027\u540d\u79f0\u5c06\u4f1a\u81ea\u52a8\u6309\u7167\u5ffd\u7565\u5927\u5c0f\u5199\u53ca\u7279\u6b8a\u5b57\u7b26\u7684\u65b9\u5f0f\u4e0e\u6570\u636e\u8868\u7684\u5b57\u6bb5\u8fdb\u884c\u81ea\u52a8\u8bc6\u522b\u6620\u5c04\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6570\u636e\u5e93\u7ec4\u4ef6\u6267\u884c\u6570\u636e\u5e93\u64cd\u4f5c\u65f6\u4f1a\u51fa\u73b0 ",(0,o.jsx)(n.code,{children:"SHOW FULL COLUMNS FROM `xxx` "})," \u8bed\u53e5\u7684\u539f\u56e0\uff0c\u8be5\u8bed\u53e5\u6bcf\u5f20\u8868\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\uff0c\u968f\u540e\u7f13\u5b58\u7ed3\u679c\u5230\u5185\u5b58\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u5339\u914d\u89c4\u5219\u7684\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Map\u952e\u540d     \u5b57\u6bb5\u540d\u79f0     \u662f\u5426\u5339\u914d\nnickname   nickname      match\nNICKNAME   nickname      match\nNick-Name  nickname      match\nnick_name  nickname      match\nnick name  nickname      match\nNickName   nickname      match\nNick-name  nickname      match\nnick_name  nickname      match\nnick name  nickname      match\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u91cd\u8981\u8bf4\u660e",children:"\u91cd\u8981\u8bf4\u660e"}),"\n",(0,o.jsx)(n.h3,{id:"\u63a5\u53e3\u8bbe\u8ba1",children:"\u63a5\u53e3\u8bbe\u8ba1"}),"\n",(0,o.jsxs)(n.p,{children:["\u8be5\u7279\u6027\u9700\u8981\u4f9d\u9760 ",(0,o.jsx)(n.code,{children:"DB"})," \u4e2d\u5b9a\u4e49\u7684 ",(0,o.jsx)(n.code,{children:"TableFields"})," \u63a5\u53e3\u5b9e\u73b0\u6765\u652f\u6301\u7684\u3002\u5982\u679c\u4e0d\u5b9e\u73b0\u8be5\u63a5\u53e3\uff0c\u90a3\u4e48\u4e0a\u5c42\u4e1a\u52a1\u9700\u8981\u7ef4\u62a4\u5c5e\u6027/\u952e\u540d\u5230\u6570\u636e\u8868\u5b57\u6bb5\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u7ef4\u62a4\u8fd9\u79cd\u975e\u4e1a\u52a1\u903b\u8f91\u7684\u5de5\u4f5c\u6210\u672c\u662f\u6bd4\u8f83\u5927\u7684\u3002\u6846\u67b6\u7684\u76ee\u6807\u662f\u5c3d\u53ef\u80fd\u8ba9\u4e1a\u52a1\u5f00\u53d1\u540c\u5b66\u7684\u7cbe\u529b\u805a\u7126\u4e8e\u4e1a\u52a1\uff0c\u56e0\u6b64\u6846\u67b6\u7ec4\u4ef6\u4e2d\u80fd\u591f\u81ea\u52a8\u5316\u7684\u5730\u65b9\u5747\u91c7\u7528\u81ea\u52a8\u5316\u8bbe\u8ba1\u3002\u76ee\u524d\u5bf9\u63a5\u5230\u6846\u67b6\u7684 ",(0,o.jsx)(n.code,{children:"driver"})," \u5b9e\u73b0\u5747\u652f\u6301\u8be5\u63a5\u53e3\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// TableFields retrieves and returns the fields' information of specified table of current\n// schema.\n//\n// The parameter `link` is optional, if given nil it automatically retrieves a raw sql connection\n// as its link to proceed necessary sql query.\n//\n// Note that it returns a map containing the field name and its corresponding fields.\n// As a map is unsorted, the TableField struct has an \"Index\" field marks its sequence in\n// the fields.\n//\n// It's using cache feature to enhance the performance, which is never expired util the\n// process restarts.\nfunc (db DB) TableFields(ctx context.Context, table string, schema ...string) (fields map[string]*TableField, err error)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u5b57\u6bb5\u7f13\u5b58",children:"\u5b57\u6bb5\u7f13\u5b58"}),"\n",(0,o.jsx)(n.p,{children:"\u6bcf\u4e2a\u6570\u636e\u8868\u7684\u5b57\u6bb5\u4fe1\u606f\uff0c\u5c06\u5728\u6570\u636e\u8868\u7684\u7b2c\u4e00\u6b21\u64cd\u4f5c\u65f6\u6267\u884c\u67e5\u8be2\u5e76\u7f13\u5b58\u5230\u5185\u5b58\u4e2d\u3002\u5982\u679c\u9700\u8981\u624b\u52a8\u5237\u65b0\u5b57\u6bb5\u7f13\u5b58\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f9d\u9760\u4ee5\u4e0b\u65b9\u6cd5\u5b9e\u73b0\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// ClearTableFields removes certain cached table fields of current configuration group.\nfunc (c *Core) ClearTableFields(ctx context.Context, table string, schema ...string) (err error)\n\n// ClearTableFieldsAll removes all cached table fields of current configuration group.\nfunc (c *Core) ClearTableFieldsAll(ctx context.Context) (err error)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u65b9\u6cd5\u4ecb\u7ecd\u5982\u6ce8\u91ca\u3002\u53ef\u4ee5\u770b\u5230\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u662f\u6302\u8f7d ",(0,o.jsx)(n.code,{children:"Core"})," \u5bf9\u8c61\u4e0a\u7684\uff0c\u800c\u5e95\u5c42\u7684 ",(0,o.jsx)(n.code,{children:"Core"})," \u5bf9\u8c61\u5df2\u7ecf\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"DB"})," \u63a5\u53e3\u66b4\u9732\uff0c\u56e0\u6b64\u6211\u4eec\u8fd9\u4e48\u6765\u83b7\u53d6 ",(0,o.jsx)(n.code,{children:"Core"})," \u5bf9\u8c61\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"g.DB().GetCore()\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,o.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u5b9e\u73b0\u4e00\u4e2a\u67e5\u8be2\u7528\u6237\u57fa\u672c\u4fe1\u606f\u7684\u4e00\u4e2a\u63a5\u53e3\uff0c\u8fd9\u4e2a\u7528\u6237\u662f\u4e00\u4e2a\u533b\u751f\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["1\u3001\u6211\u4eec\u6709\u4e24\u5f20\u8868\uff0c\u4e00\u5f20 ",(0,o.jsx)(n.code,{children:"user"})," \u8868\uff0c\u5927\u6982\u6709 ",(0,o.jsx)(n.code,{children:"30"})," \u4e2a\u5b57\u6bb5\uff1b\u4e00\u5f20 ",(0,o.jsx)(n.code,{children:"doctor_user"})," \u8868\uff0c\u5927\u6982\u6709 ",(0,o.jsx)(n.code,{children:"80"})," \u591a\u4e2a\u5b57\u6bb5\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["2\u3001 ",(0,o.jsx)(n.code,{children:"user"})," \u662f\u7528\u6237\u57fa\u7840\u8868\uff0c\u5305\u542b\u7528\u6237\u7684\u6700\u57fa\u7840\u4fe1\u606f\uff1b ",(0,o.jsx)(n.code,{children:"doctor_user"})," \u662f\u57fa\u4e8e ",(0,o.jsx)(n.code,{children:"user"})," \u8868\u7684\u4e1a\u52a1\u6269\u5c55\u8868\uff0c\u7279\u5b9a\u7528\u6237\u89d2\u8272\u7684\u8868\uff0c\u4e0e ",(0,o.jsx)(n.code,{children:"user"})," \u8868\u662f\u4e00\u5bf9\u4e00\u5173\u7cfb\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["3\u3001\u6211\u4eec\u6709\u4e00\u4e2a ",(0,o.jsx)(n.code,{children:"GRPC"})," \u7684\u63a5\u53e3\uff0c\u63a5\u53e3\u5b9a\u4e49\u662f\u8fd9\u6837\u7684\uff08\u4e3a\u65b9\u4fbf\u6f14\u793a\uff0c\u8fd9\u91cc\u505a\u4e86\u4e00\u4e9b\u7b80\u5316\uff09\uff1a"]}),"\n",(0,o.jsxs)(n.p,{children:["1\uff09 ",(0,o.jsx)(n.code,{children:"GetDoctorInfoRes"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// \u67e5\u8be2\u63a5\u53e3\u8fd4\u56de\u6570\u636e\u7ed3\u6784\ntype GetDoctorInfoRes struct {\n    UserInfo             *UserInfo   `protobuf:"bytes,1,opt,name=UserInfo,proto3" json:"UserInfo,omitempty"`\n    DoctorInfo           *DoctorInfo `protobuf:"bytes,2,opt,name=DoctorInfo,proto3" json:"DoctorInfo,omitempty"`\n    XXX_NoUnkeyedLiteral struct{}    `json:"-"`\n    XXX_unrecognized     []byte      `json:"-"`\n    XXX_sizecache        int32       `json:"-"`\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["2\uff09 ",(0,o.jsx)(n.code,{children:"UserInfo"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// \u7528\u6237\u57fa\u7840\u4fe1\u606f\ntype UserInfo struct {\n    Id                   uint32   `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`\n    Avatar               string   `protobuf:"bytes,2,opt,name=avatar,proto3" json:"avatar,omitempty"`\n    Name                 string   `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`\n    Sex                  int32    `protobuf:"varint,4,opt,name=sex,proto3" json:"sex,omitempty"`\n    XXX_NoUnkeyedLiteral struct{} `json:"-"`\n    XXX_unrecognized     []byte   `json:"-"`\n    XXX_sizecache        int32    `json:"-"`\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["3\uff09 ",(0,o.jsx)(n.code,{children:"DoctorInfo"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// \u533b\u751f\u4fe1\u606f\ntype DoctorInfo struct {\n    Id                   uint32   `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`\n    Name                 string   `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`\n    Hospital             string   `protobuf:"bytes,4,opt,name=hospital,proto3" json:"hospital,omitempty"`\n    Section              string   `protobuf:"bytes,6,opt,name=section,proto3" json:"section,omitempty"`\n    Title                string   `protobuf:"bytes,8,opt,name=title,proto3" json:"title,omitempty"`\n    XXX_NoUnkeyedLiteral struct{} `json:"-"`\n    XXX_unrecognized     []byte   `json:"-"`\n    XXX_sizecache        int32    `json:"-"`\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"4\u3001\u67e5\u8be2\u63a5\u53e3\u5b9e\u73b0\u4ee3\u7801"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// \u67e5\u8be2\u533b\u751f\u4fe1\u606f\nfunc (s *Service) GetDoctorInfo(ctx context.Context, req *pb.GetDoctorInfoReq) (res *pb.GetDoctorInfoRes, err error) {\n    // Protobuf\u8fd4\u56de\u6570\u636e\u7ed3\u6784\n    res = &pb.GetDoctorInfoRes{}\n    // \u67e5\u8be2\u533b\u751f\u4fe1\u606f\n    // SELECT `id`,`avatar`,`name`,`sex` FROM `user` WHERE `user_id`=xxx\n    err = dao.PrimaryDoctorUser.\n        Ctx(ctx).\n        Fields(res.DoctorInfo).\n        Where(dao.PrimaryDoctorUser.Columns.UserId, req.Id).\n        Scan(&res.DoctorInfo)\n    if err != nil {\n        return\n    }\n    // \u67e5\u8be2\u57fa\u7840\u7528\u6237\u4fe1\u606f\n    // SELECT `id`,`name`,`hospital`,`section`,`title` FROM `doctor_user` WHERE `id`=xxx\n    err = dao.PrimaryUser.\n        Ctx(ctx).\n        Fields(res.DoctorInfo).\n        Where(dao.PrimaryUser.Columns.Id, req.Id).\n        Scan(&res.UserInfo)\n    return res, err\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5f53\u6211\u4eec\u8c03\u7528 ",(0,o.jsx)(n.code,{children:"GetDoctorInfo"})," \u6267\u884c\u67e5\u8be2\u65f6\uff0c\u5c06\u4f1a\u5411\u6570\u636e\u5e93\u53d1\u8d77\u4e24\u6761 ",(0,o.jsx)(n.code,{children:"SQL"})," \u67e5\u8be2\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"SELECT `id`,`avatar`,`name`,`sex` FROM `user` WHERE `user_id`=1\nSELECT `id`,`name`,`hospital`,`section`,`title` FROM `doctor_user` WHERE `id`=1\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"Fields"})," \u65b9\u6cd5\u65f6\uff0c\u53c2\u6570\u7c7b\u578b\u4e3a ",(0,o.jsx)(n.code,{children:"struct"})," \u6216\u8005 ",(0,o.jsx)(n.code,{children:"*struct"}),"\uff0c ",(0,o.jsx)(n.code,{children:"ORM"})," \u5c06\u4f1a\u81ea\u52a8\u5c06 ",(0,o.jsx)(n.code,{children:"struct"})," \u7684\u5c5e\u6027\u540d\u79f0\u4e0e\u6570\u636e\u8868\u7684\u5b57\u6bb5\u540d\u79f0\u505a\u81ea\u52a8\u6620\u5c04\u5339\u914d\uff0c\u5f53\u6620\u5c04\u5339\u914d\u6210\u529f\u65f6\u53ea\u4f1a\u67e5\u8be2\u7279\u5b9a\u5b57\u6bb5\u6570\u636e\uff0c\u800c\u4e0d\u5b58\u5728\u7684\u5c5e\u6027\u5b57\u6bb5\u5c06\u4f1a\u88ab\u81ea\u52a8\u8fc7\u6ee4\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"Scan"})," \u65b9\u6cd5\u65f6\uff08\u4e5f\u53ef\u4ee5\u7528 ",(0,o.jsx)(n.code,{children:"Struct"}),"/ ",(0,o.jsx)(n.code,{children:"Structs"}),"\uff09\uff0c\u53c2\u6570\u7c7b\u578b\u4e3a ",(0,o.jsx)(n.code,{children:"*struct"})," \u6216\u8005 ",(0,o.jsx)(n.code,{children:"**struct"}),"\uff0c\u67e5\u8be2\u7ed3\u679c\u5c06\u4f1a\u81ea\u52a8\u4e0e ",(0,o.jsx)(n.code,{children:"struct"})," \u7684\u5c5e\u6027\u505a\u81ea\u52a8\u6620\u5c04\u5339\u914d\uff0c\u5f53\u6620\u5c04\u5339\u914d\u6210\u529f\u65f6\u4f1a\u81ea\u52a8\u505a\u8f6c\u6362\u8d4b\u503c\uff0c\u5426\u5219\u4e0d\u4f1a\u5bf9\u53c2\u6570\u7684\u5c5e\u6027\u505a\u4efb\u4f55\u5904\u7406\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(296540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
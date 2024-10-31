"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[44400],{625356:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>M,frontMatter:()=>t,metadata:()=>c,toc:()=>u});var o=r(474848),l=r(28453);const t={title:"ORM\u94fe\u5f0f\u64cd\u4f5c(\u91cd\u70b9)",sidebar_position:1,hide_title:!0},d=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9",title:"ORM\u94fe\u5f0f\u64cd\u4f5c(\u91cd\u70b9)",description:"gdb \u94fe\u5f0f\u64cd\u4f5c\u4f7f\u7528\u65b9\u5f0f\u7b80\u5355\u7075\u6d3b\uff0c\u662f GoFrame \u6846\u67b6\u5b98\u65b9\u63a8\u8350\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u65b9\u5f0f\u3002\u94fe\u5f0f\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7\u6570\u636e\u5e93\u5bf9\u8c61\u7684 db.Table/ db.Model \u65b9\u6cd5\u6216\u8005\u4e8b\u52a1\u5bf9\u8c61\u7684 tx.Table/ tx.Model \u65b9\u6cd5\uff0c\u57fa\u4e8e\u6307\u5b9a\u7684\u6570\u636e\u8868\u8fd4\u56de\u4e00\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u5bf9\u8c61 *Model\uff0c\u8be5\u5bf9\u8c61\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u65b9\u6cd5\u3002\u5f53\u524d\u65b9\u6cd5\u5217\u8868\u53ef\u80fd\u6ede\u540e\u4e8e\u6e90\u4ee3\u7801\uff0c\u8be6\u7ec6\u7684\u65b9\u6cd5\u5217\u8868\u8bf7\u53c2\u8003\u63a5\u53e3\u6587\u6863\uff1a https://godoc.org/github.com/gogf/gf/database/gdb#Model",source:"@site/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/",permalink:"/gf-site/en/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9.md",tags:[],version:"1.16.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:1,frontMatter:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c(\u91cd\u70b9)",sidebar_position:1,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ORM\u4f7f\u7528\u914d\u7f6e",permalink:"/gf-site/en/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e"},next:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa",permalink:"/gf-site/en/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa"}},i={},u=[];function f(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"gdb"})," \u94fe\u5f0f\u64cd\u4f5c\u4f7f\u7528\u65b9\u5f0f\u7b80\u5355\u7075\u6d3b\uff0c\u662f ",(0,o.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u5b98\u65b9\u63a8\u8350\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u65b9\u5f0f\u3002\u94fe\u5f0f\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7\u6570\u636e\u5e93\u5bf9\u8c61\u7684 ",(0,o.jsx)(n.code,{children:"db.Table"}),"/ ",(0,o.jsx)(n.code,{children:"db.Model"})," \u65b9\u6cd5\u6216\u8005\u4e8b\u52a1\u5bf9\u8c61\u7684 ",(0,o.jsx)(n.code,{children:"tx.Table"}),"/ ",(0,o.jsx)(n.code,{children:"tx.Model"})," \u65b9\u6cd5\uff0c\u57fa\u4e8e\u6307\u5b9a\u7684\u6570\u636e\u8868\u8fd4\u56de\u4e00\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u5bf9\u8c61 ",(0,o.jsx)(n.code,{children:"*Model"}),"\uff0c\u8be5\u5bf9\u8c61\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u65b9\u6cd5\u3002\u5f53\u524d\u65b9\u6cd5\u5217\u8868\u53ef\u80fd\u6ede\u540e\u4e8e\u6e90\u4ee3\u7801\uff0c\u8be6\u7ec6\u7684\u65b9\u6cd5\u5217\u8868\u8bf7\u53c2\u8003\u63a5\u53e3\u6587\u6863\uff1a ",(0,o.jsx)(n.a,{href:"https://godoc.org/github.com/gogf/gf/database/gdb#Model",children:"https://godoc.org/github.com/gogf/gf/database/gdb#Model"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// \u5199\u5165/\u66f4\u65b0/\u5220\u9664\u57fa\u672c\u64cd\u4f5c\nfunc (m *Model) Insert(data ...interface{}) (result sql.Result, err error)\nfunc (m *Model) InsertAndGetId(data ...interface{}) (lastInsertId int64, err error)\nfunc (m *Model) InsertIgnore(data ...interface{}) (result sql.Result, err error)\nfunc (m *Model) Replace(data ...interface{}) (result sql.Result, err error)\nfunc (m *Model) Save(data ...interface{}) (result sql.Result, err error)\nfunc (m *Model) Update(dataAndWhere ...interface{}) (result sql.Result, err error)\nfunc (m *Model) Delete(where ...interface{}) (result sql.Result, err error)\n\n// \u57fa\u672c\u67e5\u8be2\u64cd\u4f5c\nfunc (m *Model) All(where ...interface{} (Result, error)\nfunc (m *Model) One(where ...interface{}) (Record, error)\nfunc (m *Model) Array(fieldsAndWhere ...interface{}) ([]Value, error)\nfunc (m *Model) Value(fieldsAndWhere ...interface{}) (Value, error)\nfunc (m *Model) Count(where ...interface{}) (int, error)\nfunc (m *Model) CountColumn(column string) (int, error)\n\n// \u5e38\u7528\u57fa\u672c\u7edf\u8ba1\nfunc (m *Model) Min(column string) (float64, error)\nfunc (m *Model) Max(column string) (float64, error)\nfunc (m *Model) Avg(column string) (float64, error)\nfunc (m *Model) Sum(column string) (float64, error)\n\n// \u5b57\u6bb5\u81ea\u589e/\u81ea\u51cf\nfunc (m *Model) Increment(column string, amount float64) (sql.Result, error)\nfunc (m *Model) Decrement(column string, amount float64) (sql.Result, error)\n\n// \u4e3b\u952e\u67e5\u8be2\u64cd\u4f5c\nfunc (m *Model) FindAll(where ...interface{}) (Result, error)\nfunc (m *Model) FindOne(where ...interface{}) (Record, error)\nfunc (m *Model) FindArray(fieldsAndWhere ...interface{}) (Value, error)\nfunc (m *Model) FindValue(fieldsAndWhere ...interface{}) (Value, error)\nfunc (m *Model) FindCount(where ...interface{}) (int, error)\nfunc (m *Model) FindScan(pointer interface{}, where ...interface{}) error\n\n// \u67e5\u8be2\u8f6c\u6362\u64cd\u4f5c\nfunc (m *Model) Struct(pointer interface{}) error\nfunc (m *Model) Structs(pointer interface{}) error\nfunc (m *Model) Scan(pointer interface{}) error\nfunc (m *Model) ScanList(listPointer interface{}, attributeName string, relation ...string) (err error)\n\n// \u8054\u8868\u67e5\u8be2\u65b9\u6cd5\nfunc (m *Model) LeftJoin(table ...string) *Model\nfunc (m *Model) RightJoin(table ...string) *Model\nfunc (m *Model) InnerJoin(table ...string) *Model\n\n// \u8054\u5408\u67e5\u8be2\nfunc (m *Model) Union(unions ...*Model) *Model\nfunc (m *Model) UnionAll(unions ...*Model) *Model\n\n// With\u5173\u8054\u67e5\u8be2\nfunc (m *Model) With(object interface{}) *Model\nfunc (m *Model) WithAll() *Model\n\n// \u6761\u4ef6\u67e5\u8be2\u65b9\u6cd5\nfunc (m *Model) Where(where interface{}, args...interface{}) *Model\nfunc (m *Model) WherePri(where interface{}, args ...interface{}) *Model\nfunc (m *Model) WhereBetween(column string, min, max interface{}) *Model\nfunc (m *Model) WhereLike(column string, like interface{}) *Model\nfunc (m *Model) WhereIn(column string, in interface{}) *Model\nfunc (m *Model) WhereNull(columns ...string) *Model\nfunc (m *Model) WhereLT(column string, value interface{}) *Model\nfunc (m *Model) WhereLTE(column string, value interface{}) *Model\nfunc (m *Model) WhereGT(column string, value interface{}) *Model\nfunc (m *Model) WhereGTE(column string, value interface{}) *Model\n\nfunc (m *Model) WhereNotBetween(column string, min, max interface{}) *Model\nfunc (m *Model) WhereNotLike(column string, like interface{}) *Model\nfunc (m *Model) WhereNotIn(column string, in interface{}) *Model\nfunc (m *Model) WhereNotNull(columns ...string) *Model\n\nfunc (m *Model) WhereOr(where interface{}, args ...interface{}) *Model\nfunc (m *Model) WhereOrBetween(column string, min, max interface{}) *Model\nfunc (m *Model) WhereOrLike(column string, like interface{}) *Model\nfunc (m *Model) WhereOrIn(column string, in interface{}) *Model\nfunc (m *Model) WhereOrNull(columns ...string) *Model\nfunc (m *Model) WhereOrLT(column string, value interface{}) *Model\nfunc (m *Model) WhereOrLTE(column string, value interface{}) *Model\nfunc (m *Model) WhereOrGT(column string, value interface{}) *Model\nfunc (m *Model) WhereOrGTE(column string, value interface{}) *Model\n\nfunc (m *Model) WhereOrNotBetween(column string, min, max interface{}) *Model\nfunc (m *Model) WhereOrNotLike(column string, like interface{}) *Model\nfunc (m *Model) WhereOrNotIn(column string, in interface{}) *Model\nfunc (m *Model) WhereOrNotNull(columns ...string) *Model\n\n// \u5206\u7ec4\u6392\u5e8f\u65b9\u6cd5\nfunc (m *Model) Group(group string) *Model\nfunc (m *Model) Order(order string) *Model\nfunc (m *Model) OrderAsc(column string) *Model\nfunc (m *Model) OrderDesc(column string) *Model\nfunc (m *Model) OrderRandom() *Model\n\n// \u6761\u4ef6\u8fc7\u6ee4\u65b9\u6cd5\nfunc (m *Model) Fields(fields string) *Model\nfunc (m *Model) FieldsEx(fields string) *Model\nfunc (m *Model) Data(data...interface{}) *Model\nfunc (m *Model) Batch(batch int) *Model\nfunc (m *Model) Filter() *Model\nfunc (m *Model) Safe(safe...bool) *Model\nfunc (m *Model) Having(having interface{}, args ...interface{}) *Model\nfunc (m *Model) Offset(offset int) *Model\nfunc (m *Model) Limit(start int, limit int) *Model\nfunc (m *Model) OmitEmpty() *Model\nfunc (m *Model) Page(page, limit int) (*Model)\nfunc (m *Model) Distinct() *Model\n\n// \u6570\u636e\u5e93/\u4e8b\u52a1\u5207\u6362\nfunc (m *Model) DB(db DB) *Model\nfunc (m *Model) TX(tx *TX) *Model\n\n// \u4e3b\u4ece\u81ea\u5b9a\u4e49\u5207\u6362\nfunc (m *Model) Master() *Model\nfunc (m *Model) Slave() *Model\n\n// \u6570\u636e\u4e92\u65a5\u9501\u64cd\u4f5c\nfunc (m *Model) LockUpdate() *Model\nfunc (m *Model) LockShared() *Model\n\n// \u5e38\u7528\u5de5\u5177\u65b9\u6cd5\nfunc (m *Model) Ctx(ctx context.Context) *Model\nfunc (m *Model) Clone() *Model\nfunc (m *Model) Cache(duration time.Duration, name ...string) *Model\nfunc (m *Model) As(as string) *Model\nfunc (m *Model) Chunk(limit int, callback func(result Result, err error) bool)\nfunc (m *Model) Schema(schema string) *Model\nfunc (m *Model) Option(option int) *Model\nfunc (m *Model) Args(args ...interface{}) *Model\nfunc (m *Model) Unscoped() *Model\nfunc (m *Model) HasField(field string) (bool, error)\nfunc (m *Model) GetFieldsStr(prefix ...string) string\nfunc (m *Model) GetFieldsExStr(fields string, prefix ...string) string\n"})})]})}function M(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var o=r(296540);const l={},t=o.createContext(l);function d(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);
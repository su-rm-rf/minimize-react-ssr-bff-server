> 目标：打造最小化的Web前端全系列脚手架

```
编辑器：VSCode
源码管理：Git
包管理器：Pnpm
语言：TypeScript
前端1：
  框架：React
  路由：React-Router
  数据流管理：Redux
  编译构建：Babel、Webpack
  CSS预处理器：Sass
  UI框架：AntDesign
  单元测试：Jest
前端2：
  框架：Vue
  路由：Vue-Router
  数据流管理：Pinia
  编译构建：Babel、Vite
  CSS预处理器：Less
  UI框架：Element
SSR：
  框架：Fastify
BFF：
  框架：Koa
服务端：
  框架：Nest
  对象关系映射：TypeORM
```

# 项目结构
```
.husky											--- husky配置
.vscode											--- vscode配置
bff													--- 前端的后端
build												--- 构建脚本
client											--- 前端
	react											--- React项目
	vue												--- Vue项目
server											--- web后端
ssr													--- 服务端渲染
	react											--- React项目
	vue												--- Vue项目
.cz-config.js								--- commitizen配置
.editorconfig								--- editorconfig配置
.eslintrc.js								--- eslint配置
.gitignore									--- git提交忽略的文件
.prettierrc.js							--- prettier配置
.stylelintrc.js							--- stylelint配置
commitlint.config.js				--- commitlint配置
package.json								--- 项目管理
tsconfig.json								--- TypeScript配置
```
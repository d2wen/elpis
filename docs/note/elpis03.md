# 项目初始化



## 01. 创建项目git环境搭建{#three-one}

**思路分析：**

1. 管理仓库、管理代码主要是用到 git 
2. 方便使用 git 可以用到可视化管理工具 Sourcetree
3. 利用代码托管平台（github/gitlab/gitee/cnb）等等，在上面进行 流水线 部署 git 仓库管理
4. gitflow 协同流程



**实现步骤：**

1. 在代码托管平台注册登录账号
2. 创建一个项目名称 Elpis
3. 创建一个代码仓库 elpis
4. 从代码仓库克隆到本地



**落地代码：**

```
git clone https://github.com/d2wen/elpis
```





## 02. gitflow协同流程操作演示 {#three-two}

![](/images/3.jpg)

> [!warning]
>
> 只有两条分支 main 和 develop
>
> 在学习阶段 其他分支可以不删

有两条固定分支 main 和 develop

main 为线上分支

develop 为研发分支

线上修复分支从 main 拉出分支 修改完毕 和 main 、develop 合并请求

功能分支从 develop 分支 拉出新分支 feature-a,功能开发完毕测试通过合并到 develop 分支



## 03. 项目初始化 {#three-three}

### 3.1 项目依赖 {#three-three-one}

**实现步骤：**

1. 先下载nvm，利用 nvm 管理 node 版本，此项目用到 nodejs 18.19.0 版本
2. 创建 .gitignore 文件 忽略不需要跟踪的文件
3. 创建 package.json 文件
4. 安装项目依赖，如遇到网络问题 可以使用 cnpm



下载好nvm后，利用 nvm list 查看版本，选择 nodejs 18.19.0 版本

```bash
nvm list
```



**落地代码：**

`➡️ elpis/.gitignore`

```
// 忽略不需要跟踪的文件或文件夹

node_modules
config.local.js
app/public/dist
```



`➡️ elpis/package.json`

```json
{
  "name": "elpis",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "eslint --quiet --ext js,vue .", // 用到eslint依赖
    "test": "cross-env _ENV=local mocha 'test/**/*.test.js'",
    "dev": "cross-env _ENV=local nodemon ./index.js", //用到cross-env依赖 用到nodemon依赖
    "beta": "cross-env _ENV=beta node ./index.js",// 用到cross-env依赖
    "prod": "cross-env _ENV=production node ./index.js", // 用到cross-env依赖
    "build:dev": "node --max_old_space_size=4096 ./app/webpack/dev.js",//开发环境构建并开辟 4096MB(4G) 空间用来放 devServer 进行热更新
    "build:prod":"node ./app/webpack/prod.js" // 生产环境构建
  },
   // 仓库
  "repository": {
    "type": "git",
    // 自己仓库地址   如：仓库地址腾讯coding
    "url": "https://e.coding.net/g-pshr3436/elpis/elpis.git"
  },
  "author": "dufuhao",
  "license": "ISC",
  "dependencies": {
    "@babel/core": "^7.24.0",// Babel的核心编译工具，用于将js代码转换为向后兼容的版本（如 ES5）
    "@babel/runtime": "^7.28.3", // babel 热更新包
    "@element-plus/icons-vue": "^2.3.2", // element 图标库
    "ajv": "^6.10.2",// 是一个流行的 JSON Schema 校验库，支持多种校验规则。
    "axios": "^0.19.2", // 封装了XMLHttpRequest的网络请求
    "echarts": "^5.5.0"// 百度开源的强大数据可视化库，用于生成图表
    "element-plus": "^2.3.7",// 前端ui库
    "generate-password": "^1.7.1",
    "glob": "^7.1.4", // 用来获取想要的所有文件 并返回数组
    "jsonwebtoken": "^9.0.2",// 用于生成、签名和验证 JWT 令牌
    "knex": "^0.19.0",//SQL 查询构建器 允许用 JavaScript 编写数据库查询
    "koa": "2.7.0",// node web 框架
    "koa-bodyparser": "^4.2.1",// Koa框架中用于解析HTTP请求体（Request Body）的中间件配置
    "koa-nunjucks-2": "^3.0.2",// koa框架的模板渲染引擎
    "koa-router": "^7.4.0",// koa的路由器
    "koa-static": "^5.0.0",// Koa的静态文件服务中间件用于托管静态资源
    "koa-useragent": "2.0.0",//Koa 中间件，解析用户请求的 User-Agent
    "koa2-cors": "^2.0.6",//Koa 跨域资源共享（CORS）中间件
    "less": "^3.8.1",// CSS 预处理器 变量、嵌套、混合宏等高级 CSS 特性
    "lodash": "^4.17.21",// 实用工具库 300+ 工具函数（数组/对象/字符串操作等）
    "log4js": "^6.9.1",// 日志记录工具，常用于服务端应用的日志管理
    "md5": "^2.2.1",// MD5 哈希算法模块，此项目用来进行 API 签名合法性校验
    "moment": "^2.29.4",// 解析、验证、操作和格式化日期时间
    "mysql": "^2.18.1",// mysql数据库
    "node-schedule": "^2.1.1",//Node.js 定时任务调度库
    "nodemon": "^1.19.2",// 启动服务后更改文件自动更新
    "path": "^0.12.7", // 用来获取文件路径
    "pinia": "^2.1.6",// vue3的仓库管理工具
    "superagent": "^8.1.2",// 轻量化Node.js库，用于在浏览器或Node.js环境中发起HTTP/HTTPS请求
    "vue": "^3.3.4",// 前端框架VUE
    "vue-json-viewer": "^3.0.4",//Vue 的 JSON 数据可视化组件
    "vue-router": "^4.2.4",// vue的路由
    "vuex": "^4.1.0"// vue2的仓库管理工具
  },
  "devDependencies": {
    "@babel/plugin-transform-runtime": "^7.1.0",//复用Babel的辅助代码,减少代码体积,避免全局污染
    "@babel/preset-env": "^7.4.5",//根据目标浏览器自动确定需要的 ES6+ 语法转换和 polyfill
    "assert": "^2.0.0",//Node 原生断言库（测试时常用）
    "babel-eslint": "^10.0.2",//允许 ESLint 解析 Babel 转译的代码
    "babel-loader": "^8.0.4",//Webpack 中调用 Babel 转译 JS 文件的 loader
    "clean-webpack-plugin": "^0.1.19",//在构建前清理输出目录（如 dist/）
    "consoler": "^0.2.0",//增强 console.log 输出样式（如颜色标记）
    "cross-env": "^7.0.3", // 跨平台设置环境变量 用来在不同操作系统启动服务
    "css-loader": "^0.23.1", //	解析 CSS 文件中的 @import 和 url()
    "css-minimizer-webpack-plugin": "^5.0.1",//	压缩 CSS 代码
    "directory-named-webpack-plugin": "^4.0.1",//支持 import File from './dir' 自动解析 dir/index.js
    "eslint": "^7.32.0",// JS/Vue 代码静态检查
    "eslint-plugin-import": "^2.28.1",//校验 ES6 import/export 语法规范
    "eslint-plugin-vue": "^9.17.0",//Vue 专属 ESLint 规则
    "express": "^4.18.2",// node web框架
    "file-loader": "^6.2.0",//	处理图片、字体等静态资源
    "ghooks": "~1.0.3",// 在提交代码的时候 触发检查代码 和检查提交信息
    "happypack": "^5.0.1",//多线程加速 Webpack 构建
    "html-webpack-inject-attributes-plugin": "^1.0.1",//为注入的 JS/CSS 添加自定义属性（如 defer）
    "html-webpack-plugin": "^5.5.3",//自动生成 HTML 文件并注入打包后的资源
    "less-loader": "^11.1.3",//编译 Less 为 CSS
    "mini-css-extract-plugin": "^2.7.6",//将 CSS 提取为独立文件
    "mocha": "^6.1.4",//JS 测试框架
    "style-loader": "^0.14.1",//将 CSS 通过 <style> 标签注入到 HTML
    "supertest": "^4.0.2",//测试 HTTP 接口（配合 Express 使用）
    "terser-webpack-plugin": "^2.3.5",//压缩 JS 代码
    "url-loader": "^4.1.1",//处理图片、字体等静态资源 支持转 Base64
    "validate-commit-msg": "~2.14.0",// 校验 Git 提交信息格式（需配合约定式提交）
    "vue-loader": "^17.2.2",//解析 .vue 单文件组件
    "vue-style-loader": "^4.1.2",//Vue 专用 CSS 注入（支持 SSR）
    "webpack": "^5.88.1",//模块化打包工具的核心库
    "webpack-dev-middleware": "^6.1.1",//集成 Webpack 到 Node 服务器（如 Express）实现实时重载
    "webpack-hot-middleware": "^2.25.4",//支持 HMR（热模块替换）
    "webpack-merge": "^4.2.1"//	合并多个 Webpack 配置（如区分开发/生产环境）
  },
  "config": { // 提交代码的时候 会做 git 提交信息的校验也会做代码规范的校验
    "ghooks": { //配置 Git 钩子（如提交前运行 ESLint）
      "commit-msg": "validate-commit-msg",// 检测git提交信息是否规范
      "pre-commit": "npm run lint" // 检测代码是否规范
    }
  }
}
```



### 3.2 scripts 字段解释 {#three-three-two}

1. **`"lint": "eslint --quiet --ext js,vue ."`**
   - **`eslint`**：运行 [ESLint](https://eslint.org/)（一个流行的 JavaScript/Vue 代码检查工具）。
   - **`--quiet`**：仅报告错误（`error`），忽略警告（`warning`），使输出更简洁。
   - **`--ext js,vue`**：指定检查的文件扩展名（`.js` 和 `.vue` 文件）。
   - **`.`**：检查当前目录及其子目录下的所有匹配文件。

ESLint 会扫描项目中所有的 `.js` 和 `.vue` 文件，并输出发现的错误（如语法问题、未使用的变量等）。

2. **`"test": "cross-env _ENV=local mocha 'test/**/*.test.js' "`**
   - **`cross-env`**：利用 corss-env 依赖，使得 ios 和 win 和 linux 环境下都可以创建环境变量。
   - **`_ENV=local`**：创建环境变量为本地。
   - **`mocha`**：JS 测试框架。
   - **`'test/**/*.test.js'`**：测试 test 文件夹下所有 .test.js 文件





**落地代码：**

`➡️ elpis/.eslintignore`

```
node_modules/
public/
```



`➡️ elpis/.eslintrc`

```json
{
  "extends": [
    "plugin:vue/base",
    "plugin:vue/recommended"
  ],
  "plugins": ["vue"],
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": [2, {"args": "none"}],
    "strict": "off",
    "valid-jsdoc": "off",
    "jsdoc/require-param-description": "off",
    "jsdoc/require-param-type": "off",
    "jsdoc/check-param-names": "off",
    "jsdoc/require-param": "off",
    "jsdoc/check-tag-names": "off",
    "linebreak-style": "off",
    "array-bracket-spacing": "off",
    "prefer-promise-reject-errors": "off",
    "comma-dangle": "off",
    "newline-per-chained-call": "off",
    "no-loop-func": "off",
    "no-empty": "off",
    "no-else-return": "off",
    "no-unneeded-ternary": "off",
    "no-eval": "off",
    "prefer-destructuring": "off",
    "no-param-reassign": "off",
    "max-len": "off",
    "no-restricted-syntax": "off",
    "no-plusplus": "off",
    "no-useless-escape": "off",
    "no-nested-ternary": "off",
    "radix": "off",
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "vue/multi-word-component-names": "off",
    "vue/valid-v-for": "off",
    "vue/no-multiple-template-root": "off"
  },
  "globals": {
    "$": true,
    "axios": true,
    "Vue": true
  }
}
```



### 3.3 npm下载源设置 {#three-three-three}

```shell
# 设置 npm 下载包地址
npm config set registry {源地址}

# 清空地址
npm config set registry

# 查看 npm 配置
npm config lsit
```



## 04. 分支命名和提交信息规范 {#three-four}

在团队协作开发中，**分支命名规范** 是保持代码库清晰、可维护的关键。以下是行业通用的分支命名规则和最佳实践，适用于 Git（GitHub/GitLab/Coding 等平台）：



### 4.1 基本命名原则 {#three-four-one}

- **清晰易懂**：通过名称能直观看出分支用途。
- **简短一致**：避免过长，团队统一风格。
- **分隔符**：通常使用 `/` 或 `-` 分隔单词（如 `feature/user-login`）。



### 4.2 常用分支类型及命名格式 {#three-four-two}

| **分支类型**   | **命名示例**                | **用途**                               |
| :------------- | :-------------------------- | :------------------------------------- |
| **功能分支**   | `feature/user-auth`         | 开发新功能（如用户认证模块）。         |
| **修复分支**   | `fix/header-scroll-bug`     | 修复线上或测试环境的 Bug。             |
| **热修复分支** | `hotfix/payment-404`        | 紧急修复生产环境问题（绕过常规流程）。 |
| **发布分支**   | `release/v1.2.0`            | 预发布版本测试和最终调整。             |
| **文档分支**   | `docs/api-reference-update` | 更新文档（不涉及代码逻辑修改）。       |
| **重构分支**   | `refactor/auth-service`     | 代码重构，不改变外部行为。             |
| **实验性分支** | `experiment/redis-cache`    | 技术调研或实验性代码（可能不会合并）。 |



### 4.3 命名规范细节 {#three-four-three}

##### 4.3.1 前缀 + 描述

- **前缀**：表明分支目的（如 `feature/`、`fix/`）。

- **描述**：使用 `kebab-case`（短横线连接，如 `user-profile`）。

  ```bash
  # 好：清晰且符合规范
  git switch -c feature/checkout-flow
  git switch -c fix/login-button-color
  
  # 差：模糊或不符合规范
  git switch -c update-code      # 缺少前缀
  git switch -c fixLoginBug      # 驼峰命名（不易读）
  ```

##### 4.3.2 关联问题追踪

- 在分支名中包含问题 ID（如 Jira Issue 或 GitHub Issue）：

  ```bash
  git switch -c feature/PROJ-123-add-dark-mode
  git switch -c fix/GH-45-typo-in-readme
  ```

##### 4.3.3 避免的命名

- 使用含糊的词汇（如 `update`、`test`）。
- 特殊字符（如 `*`、`?`、空格）。
- 保留名称（如 `main`、`develop`、`HEAD`）。



### 4.4 提交信息规范 {#three-four-four}

| **类型**   | **说明**                                    |
| :--------- | :------------------------------------------ |
| `feat`     | 新增功能（Feature）                         |
| `fix`      | 修复 Bug                                    |
| `docs`     | 文档更新（如 README、注释）                 |
| `style`    | 代码格式调整（空格、分号等，不改变逻辑）    |
| `refactor` | 代码重构（既非新功能也非修复 Bug）          |
| `perf`     | 性能优化                                    |
| `test`     | 测试相关（新增或修改测试用例）              |
| `chore`    | 构建/工具链变动（如更新依赖、调整 CI 配置） |
| `revert`   | 回滚某次提交                                |



例如:

```
feat: 增加新功能
fix: 修复bug
```

> [!warning]
>
> 中间的 冒号 为英文冒号 加一个空格
























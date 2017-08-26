# 介绍

webpack脚手架项目，支持es6，代码风格使用eslint，开发模式运行node服务，支持静态或者动态数据mock。

## 快速开始

基于vue-cli的脚手架项目

``` bash
    $ npm install -g vue-cli
    $ vue init lilJay-lin/webpack my-project
    $ cd my-project
    $ npm install
    $ npm run dev
```

### 开发规范

1. 每一个页面在`src/pages/`下新建一个文件夹开发，页面资源单独维护;页面取名`index.html`，编译之后会用改成`文件夹名.html`;页面逻辑入口需要为`index.js`
2. less文件可以在`public/less`里面新增，或者直接修改`rsc.less`,新增的在`rsc.less`中导入
3. 业务公共资源可以在`src/pages/`下新建以*_*开头的文件夹
4. api定义在`src/public/common/api`文件，文件内部`dev`变量定义的是开发时的json数据，json文件存放在`/static`目录下，`prod`变量定义的则是线上使用的api地址
5. 非`npm install`的第三方模块，可以放在`static/vendor`目录下，页面引用路径为`./static/vendor/*.js`，打包的时候会把static下所有的文件复制到`dist/static`目录下

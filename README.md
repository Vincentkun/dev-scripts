# dev-scripts

## 环境准备

> nodejs >= 8.0.0

## 功能

- 支持 twig 模版引擎 ( 与 php twig [兼容情况](https://github.com/twigjs/twig.js/wiki/Implementation-Notes) )
  - 集成 cdn 与 ver 2个 filter ( 如果用到 php 端也要对应实现 )
- 支持 sass
  - 开发环境生成 sourceMap
- 支持 webpack
  - 集成 babel 支持 es6 语法
  - 集成 jQuery 1.12.4 与 js-cookie 为 common.js 并且全局 ( window ) 可访问
- 支持 css sprites
  - 开发环境需要单独引用图片
  - 在构建的时候可以自动合并图片
  - 支持移动端 rem 单位转换 ( dpr 转换 )
  - 自动给图片添加版本号 ( 通过图片的 md5 值计算 )

- 服务器端代理请求
  - app.config.js 里 porxy 选项配置
  - 可直接配置线上请求地址来联调

- 自定义 router
  - router.js 里配置 一般用在模拟 ajax 请求接口

- 基于 gulp 构建
  - 构建出的 css js img 默认在  build 目录下

## 安装
```sh
$ npm install -g dev-scripts
# or
$ npm install dev-scripts -D
```

## 使用

```sh
$ dev-scripts server # http://127.0.0.1:1337
$ dev-scripts build
```

## 支持的目录结构

```html
.
├── app.config.js // 配置文件
├── data
│   └── index.js
├── router.js // 自定义 router
├── static // 静态文件
│   ├── img
│   │   └── src // src 目录下的图片 build 后会被合并
│   ├── js
│   │   └── index.js // js入口文件
│   └── sass
│       ├── index.scss // css 入口文件
│       └── lib
│           ├── public.scss
│           └── reset.scss
├── views // 模版引擎目录 ( twig )
│   ├── common
│   │   └── layout.html
│   └── index.html
└── yarn.lock
```

## 快速创建项目
  - [creates](https://github.com/cjg125/creates)


## 更新记录

- v1.0.2 (2017-06-20)
  - 修复局部安装找不到 babel-preset-env 的问题
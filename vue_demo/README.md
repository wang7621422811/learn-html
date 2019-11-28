```shell script
npm install -g vue-cli
vue init webpack vue_demo  //初始化指定模板和项目名称
cd vue_demo     //进入项目路径
npm install     //安装
npm run dev     运行
访问  http://localhost:8080
```

vue_demo1
---------static 静态资源路径



```shell script
1.打包
npm run build //打包
2.发布1
npm install-g serve
serve dist
访问
```
修改webpack.prod.conf.js
// publicPath: '/vue_demo1' 动态部署
重新打包:
npm run build
Vue single file loader for production
## 警告！实验阶段
该vue-loader设计用于兼容性要求较低的企业内部系统前端工程，在浏览器端实现vue单文件组件解析, 当前处于实验阶段

## Todo list
```
✅加载vue入口文件  
🔲vue单文件组件解析
    ✅分离template/script/style
    ✅处理script
        ✅import js
        ✅相对路径替换成绝对路径
    ✅import vue (子组件)
        ✅相对路径替换成绝对路径    
        ✅防止重复加载
        ✅遍历
        ✅递归解析
    🔲style解析
        🔲css嵌套 p0
        🔲scoped p0
        🔲变量（原生var测试）
        🔲资源引用路径替换
    ✅vue-router懒加载测试
    ✅npm三方库引用 （import cdn文件）
🔲部署优化（轻量打包）
    🔲静态资源前缀配置
    🔲vue切换生产版本
    🔲其它文件版本控制
...
```
## License
[MIT](http://opensource.org/licenses/MIT)
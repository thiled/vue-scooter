Vue single file loader for browser
## 警告！实验阶段
该vue-loader设计用于兼容性要求较低的企业内部系统前端工程，在浏览器端实现vue单文件组件解析, 当前处于实验阶段

## Todo list
```
[√] 加载vue入口文件  
[√] vue单文件组件解析
    [√] 分离template/script/style
    [√] 处理script
        [√] import js
        [√] 相对路径替换成绝对路径
    [√] import vue (子组件)
        [√] 相对路径替换成绝对路径    
        [√] 防止重复加载
        [√] 遍历
        [√] 递归解析
    [x] style解析
        [x] css嵌套 p0
        [x] scoped p0
        [x] 变量（原生var测试）
        [x] 资源引用路径替换
    [√] vue-router懒加载测试
    [√] npm三方库引用 (import cdn文件)
    [√] 支持静态资源前缀配置
[x] 配套轻量部署
    [x] 静态资源前缀配置
    [x] vue切换生产版本
    [x] 其它文件版本控制
...
```
## License
[MIT](http://opensource.org/licenses/MIT)

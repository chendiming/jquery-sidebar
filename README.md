# jQuery-Sidebar
**这是一个基于jQuery的侧边栏插件,兼容PC和移动端**
目前的版本是 **`0.1.0`** 只有左侧边栏的大小切换功能 类似于阿里云后台的菜单管理中的图标与具体菜单项切换的功能,但是会有更好的动画效果.之后会添加不同的侧边栏功能.文档会定期更新.
因为没有在Github找到我上面说到的类似插件,所以才决定动手写了这个.**目前的版本有很多的BUG,如果不是急于使用此功能,建议大家先不要使用,如果使用,请严格遵守文档给出的使用方法,不然会有意想不到的问题.**大家可以提问题,帮我改进这个插件.
## 实例
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <!-- css -->
    <link href="jQuery-Sidebar.min.css" rel="stylesheet">
</head>
<body>
    <!-- 必须的写法 -->
    <div class="jqsb-container">这里是你的正文,外面必须包裹class为jqsb-container的div</div>
    <!-- 必须的写法 这里是左侧边栏-->
    <div class="jqsb-sidebar jqsb-left">
        <!-- 用于互相切换的两个div块 jqsb-left-sm和jqsb-left-bg 必须的写法且bg的内容宽度必须大于sm -->
        <div class="jqsb-left-sm">
            小Width
        </div>
        <div class="jqsb-left-bg">
            这里必须大Width
        </div>
    </div>

    <!-- 加入必要js -->
    <script src="http://cdn.bootcss.com/jquery/2.1.4/jquery.min.js"></script>
    <script src="jQuery-Sidebar.min.js"></script>
</body>
</html>
```
## 最后
还是要啰嗦下,这个版本肯定很多bug,我本身也不是搞前端的,所以希望大家如果有兴趣可以帮我改善这个插件.谢谢大家.
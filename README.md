# jQuery-Sidebar
**这是一个基于jQuery的侧边栏插件,兼容PC和移动端**
目前的版本是 **`1.0.0`** 相比上一个版本 **`0.1.0`** 添加了几个插件可选参数,接口和侧边栏的展现切换方式.消除了大部分bug,如有发现bug,请提给我,帮我改进.谢谢!

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
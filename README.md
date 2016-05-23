#JavaScript Dom编程笔记

###切换图片
-this，指这个对象，即代码中的<a>标签这个元素。
-return false使链接不响应点击


###切换文本
-element.childNodes 这是包含element元素的所有子元素的数组
-getElementsByClassName,getElementsByTagName方法返回的都是数组
-让函数在页面加载时执行，使用onload事件处理函数
-nodeType属性，元素节点为1，属性节点为2，文本节点为3.
-nodeValue可以得到节点的属性值，对于<p>节点来说，其第一个子节点的属性值才是<p>元素中包含的文本值
－node.firstChild 等价于 node.childNodes[0]  node.lastChild 等价于 node.childNodes[node.childNodes.length - 1]

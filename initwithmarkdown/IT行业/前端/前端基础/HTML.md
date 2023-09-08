# HTML


<!DOCTYPE> 声明位于文档中的最前面的位置，处于 <html> 标签之前。

<!DOCTYPE> 声明不是一个 HTML 标签；它是用来告知 Web 浏览器页面使用了哪种 HTML 版本。

在 HTML 4.01 中，<!DOCTYPE> 声明需引用 DTD （文档类型声明），因为 HTML 4.01 是基于 SGML （Standard Generalized Markup Language 标准通用标记语言）。DTD 指定了标记语言的规则，确保了浏览器能够正确的渲染内容。

HTML5 不是基于 SGML，因此不要求引用 DTD。

提示：总是给您的 HTML 文档添加 <!DOCTYPE> 声明，确保浏览器能够预先知道文档类型。



常见的 DOCTYPE 声明
HTML 5
<!DOCTYPE html>
1
HTML 4.1
（HTML4.01中有3种DTD（文档类型定义）声明可以选择：过渡的（Transitional）、严格的（Strict）和框架的（Frameset)）

HTML4.01 Transitional

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
# 写给浏览器，避免浏览器进入转换显示模式。（过渡）
1
2
HTML4.01 Strict

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
# 严格模式。
1
2
HTML4.01 Frameset

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
# 框架模式



由于历史的原因，各个浏览器在对页面的渲染上存在差异，甚至同一浏览器在不同版本中，对页面的渲染也不同。在W3C标准出台以前，浏览器在对页面的渲染上没有统一规范，产生了差异(Quirks mode或者称为Compatibility Mode)；由于W3C标准的推出，浏览器渲染页面有了统一的标准(CSS1compat或称为Strict mode也有叫做Standards mode)，这就是二者最简单的区别。

W3C标准推出以后，浏览器都开始采纳新标准，但存在一个问题就是如何保证旧的网页还能继续浏览，在标准出来以前，很多页面都是根据旧的渲染方法编写的，如果用的标准来渲染，将导致页面显示异常。为保持浏览器渲染的兼容性，使以前的页面能够正常浏览，浏览器都保留了旧的渲染方法（如：微软的IE）。这样浏览器渲染上就产生了Quirks mode和Standards mode，两种渲染方法共存在一个浏览器上。

BackCompat 对应quirks mode

CSS1Compat 对应strict mode

BackCompat：标准兼容模式关闭。

CSS1Compat：标准兼容模式开启。
　
在Standards mode中：
元素真正的宽度 = margin-left + border-left-width + padding-left + width + padding-right + border-right-width + margin-right;

在Quirks mode中：
width则是元素的实际宽度，内容宽度 = width - (margin-left + margin-right + padding-left + padding-right + border-left-width + border-right-width);

在js中如何判断当前浏览器正在以何种方式解析？

window.top.document.compatMode
1
如何设置为怪异模式：

将<!DOCTYPE html>注释掉

<!-- <!DOCTYPE html> -->




https://www.runoob.com/tags/tag-meta.html






1.min-width 缩小浏览器背景颜色不出问题

2.几个方块相同，class相同

3.transition on

4.script html文件是自上而下的执行方式，但引入的css和javascript的顺序有所不同，css引入执行加载时，
  程序仍然往下执行，而执行到<script>脚本是则中断线程，待该script脚本执行结束之后程序才继续往下执行。
  所以，大部分网上讨论是将script脚本放在<body>之后，那样dom的生成就不会因为长时间执行script脚本而延迟阻塞，
  加快了页面的加载速度。但又不能将所有的script放在body之后，因为有一些页面的效果的实现，是需要预先动态的加载一些js脚本。
  所以这些脚本应该放在<body>之前。所以，我认为script放置位置的原则“页面效果实现类的js应该放在body之前，
  动作，交互，事件驱动的js都可以放在body之后”。

5.
  父div透明子div不透明：原来方法 独立出来，absolute定位
  rgba opacity   他们相同之处就是背景色完全是一样的，但区别就是一直让大家觉得头痛的问题，
  那就是opacity后代元素会随着一起具有透明性，而RGBA不具有这样的问题

7.  插件
    jQuery中需要用到$符号，如果其他js库也定义了$符号，那么就会造成冲突，会影响到js代码的正常执行
    1.引入noConflict(),将$替换为其他符号 
      缺点：引入了这段代码后，不仅是当前的js文件，该html引用的所有js中，如果有用到jquery中的$，
      都得用$j来代替之前的$ 
    2.将$(document).ready(function(){}
      替换成
      jQuery( document ).ready(function( $){}
      缺点：只对ready嵌套内的代码有效，对嵌套外的代码是无效的。
      如果你所有的逻辑，都在写ready函数中，那没问题。但我们一般都会在ready函数之外写一些子函数，
      然后ready函数再去调用这些函数。这个方案对这些函数是无效的，因此这套方案有局限性。 

    3.jQuery(function($){ }
      或者
      (function($) {
      //你的js代码
      })(jQuery);
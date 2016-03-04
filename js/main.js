/**
 * [paths description]
 * @type {Object}
 * 1、有效防止命名冲突
 * 2、声明不同js文件之间的依赖
 * 3、可以让我们的代码以模块化的方式组织
 *
 * requirejs.config - 为模块指定别名
 * requirejs - 将写好的模块引入
 * define - 编写定义模块
 */
requirejs.config({
	paths: {
		jquery: 'jquery-1.7.1'
	}
});

requirejs(['jquery', 'validate'], function($, validate) {
	console.log(validate.isEqual(2,2));
});
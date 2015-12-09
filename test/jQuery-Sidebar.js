/**
 *  jQuery-Sidebar.js
 *  Version: 0.1.0
 *  https://github.com/gavin66/jQuery-Sidebar
 */

;
(function($) {
	"use strict";

	$.jqSidebar = function(options) {
		var setting = $.extend({
			leftActive: false,//左侧是否为默认激活状态
			rightActive: false,//右侧是否为默认激活状态
			autoClose: true, //点击container 是否自动关闭两侧导航栏
			leftShow: 'jqsb-left-bg', // 左侧导航栏为左右交替变换时默认显示的元素
			rightShow: 'jqsb-right-bg'
		}, options);
		
		// 初始化的窗口大小
		var windowWidth = $(window).width();

		// 左右两侧侧边栏是否是激活状态 初始化为false 不是激活状态
		var leftActive = false;
		var rightActive = false;
		var leftBgActive = false;
		var leftSmActive = false;
		var rightBgActive = false;
		var rightSmActive = false;

		// 获取左侧边栏
		if ($('.jqsb-left').length) {
			var $left = $('.jqsb-left');
		}
		// 如果左侧边栏是大小切换方式的 获取小的块
		if ($('.jqsb-left-sm').length) {
			var $left_sm = $('.jqsb-left-sm');
			var left_sm_width = $left_sm.width();
		}
		// 如果左侧边栏是大小切换方式的 获取大的块
		if ($('.jqsb-left-bg').length) {
			var $left_bg = $('.jqsb-left-bg');
			var left_bg_width = $left_bg.width();
		}
		// 获取右侧边栏
		if ($('.jqsb-right').length) {
			var $right = $('.jqsb-right');
		}
		// 如果右侧边栏是大小切换方式的 获取小的块
		if ($('.jqsb-right-sm').length) {
			var $right_sm = $('.jqsb-right-sm');
			var right_sm_width = $right_sm.width();
		}
		// 如果右侧边栏是大小切换方式的 获取大的块
		if ($('.jqsb-right-bg').length) {
			var $right_bg = $('.jqsb-right-bg');
			var right_bg_width = $right_bg.width();
		}
		// 获取中间内容的容器
		if ($('.jqsb-container').length) {
			var $container = $('.jqsb-container');
		}
		

		// 初始化插件
		function init() {
			if ($left_sm && $left_bg) {
				leftActive = true; // 如果左侧导航栏是大小栏交替隐藏模式的话,那么它就是激活状态
				if (setting.leftShow === 'jqsb-left-bg') { // 默认显示大的话,隐藏小的  反之,亦然
					$left_sm.hide();
					leftBgActive = true;
				} else {
					$left_bg.hide();
					leftSmActive = true;
				}
			}
			// 初始 $container 内容容器的左外补 margin-left
			if ($left && $container) {
				$container.css('margin-left', $left.width());
				$left.width($left.width());
			}

			css();

		}

		init();

		// 样式变化
		function css() {
			
		}

		// 窗口大小改变时
		$(window).on('resize', function() {
			var resizedWindowWidth = $(window).width();

		});

		// 动画
		function animate(type,object,amount) {
			// 动画类型是大小切换的
			if(type === 'switchMode'){
				object[0].fadeOut(200, function() {
					$container.animate({
						marginLeft: amount
					}, 300, function() {});
	
					$left.animate({
						width: amount
					}, 300, function() {
						object[1].fadeIn(200, function() {});
					});
				});
			}
		}

		// ---------
		// 绑定事件

		// 事件处理 防止冒泡和默认事件
		function eventHandler(event, selector) {
			event.stopPropagation();
			event.preventDefault();
		}

		// 左侧导航栏开关
		$('.jqsb-toggle-left').on('click', function(event) {
			eventHandler(event, $(this));
			toggle('left');
		});

		// 右侧导航栏开关
		$('.jqsb-toggle-right').on('click', function(event) {
			eventHandler(event, $(this));
			toggle('right');
		});

		// 点击jqsb-container的内容 关闭两侧侧边栏
		$container.on('click',function(event){
		    if(setting.autoClose && ($left || $right)){
				eventHandler(event, $(this));
				close();
		    }
		});

		// 打开
		function open(side) {
			if(side === 'left' && leftSmActive){
				animate('switchMode',[$left_sm,$left_bg],left_bg_width);
				leftBgActive = true;
				leftSmActive = false;
			}
		}

		// 关闭
		function close(side) {
			if(side === 'left' && leftBgActive){
				animate('switchMode',[$left_bg,$left_sm],left_sm_width);
				leftBgActive = false;
				leftSmActive = true;
			}
		}

		// 开关
		function toggle(side) {
			if (side === 'left' && $left) {
				if (leftActive && $left_bg && $left_sm) {
					if(leftBgActive){
						close('left');
					}else if(leftSmActive){
						open('left');
					}
				} else {
					if( !leftActive ){
						open('left');
					}else{
						close('left');	
					}
				}
			}
			if (side === 'right' && $right) {
				if (rightActive && $right_bg && right_sm) {
					if(leftBgActive){
						close('right');
					}else if(leftSmActive){
						open('right');
					}
				} else {
					if( !rightActive ){
						open('right');
					}else{
						close('right');	
					}
				}
			}
			
		}

		this.toggle = toggle;
		this.close = close;
		this.open = open;
	};
})(jQuery);
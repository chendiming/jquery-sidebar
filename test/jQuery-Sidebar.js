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
			leftActive: false,
			rightActive: false,
			autoClose: true,
			leftShow: 'jqsb-left-bg' // 默认显示的元素
		}, options);

		// 初始化的窗口大小
		var windowWidth = $(window).width();

		// 左右两侧侧边栏是否是激活状态 初始化为false 不是激活状态
		var leftActive = false;
		var rightActive = false;
		var leftBgActive = false;
		var leftSmActive = false;

		// 获取左右两侧的侧边栏
		if ($('.jqsb-left').length) {
			var $left = $('.jqsb-left');
		}
		if ($('.jqsb-right').length) {
			var $right = $('.jqsb-right');
		}
		if ($('.jqsb-container').length) {
			var $container = $('.jqsb-container');
		}
		if ($('.jqsb-left-sm').length) {
			var $left_sm = $('.jqsb-left-sm');
			var left_sm_width = $left_sm.width();
		}
		if ($('.jqsb-left-bg').length) {
			var $left_bg = $('.jqsb-left-bg');
			var left_bg_width = $left_bg.width();
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
			//$left
		}

		// 窗口大小改变时
		$(window).on('resize', function() {
			var resizedWindowWidth = $(window).width();

		});

		// 动画
		function animate() {

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
		//$container.on('click',function(event){
		//    if(setting.autoClose && ($left || $right)){
		//
		//    }
		//});

		// 打开
		function open(side) {
			$left_sm.fadeOut(200, function() {
				$container.animate({
					marginLeft: left_bg_width
				}, 300, function() {});

				$left.animate({
					width: left_bg_width
				}, 300, function() {
					$left_bg.fadeIn(200, function() {});
				});

			});

			leftBgActive = true;
			leftSmActive = false;
		}

		// 关闭
		function close(side) {
			$left_bg.fadeOut(200, function() {
				$container.animate({
					marginLeft: left_sm_width
				}, 300, function() {});

				$left.animate({
					width: left_sm_width
				}, 300, function() {
					$left_sm.fadeIn(200, function() {});
				});
			});

			leftBgActive = false;
			leftSmActive = true;
		}

		// 开关
		function toggle(side) {
			if (side === 'left' && $left) {
				if (leftActive && leftSmActive) {
					open('left');
				} else if (leftActive && leftBgActive) {
					close('left');
				}
			}
			if (side === 'right' && $right) {
				if (!rightActive) {
					open('right');
				} else {
					close('left');
				}
			}
		}

	};
})(jQuery);
/**
 * Created by Gavin on 2015/11/27.
 */

;
(function ($) {
    $.jqSidebar = function (options) {
        var setting = $.extend({
            leftActive: false,
            rightActive: false,
            autoClose: true
        }, options);

        // 初始化的窗口大小
        var windowWidth = $(window).width();

        // 左右两侧侧边栏是否是激活状态 初始化为false 不是激活状态
        var leftActive = false;
        var rightActive = false;

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
        }
        if ($('.jqsb-left-bg').length) {
            var $left_bg = $('.jqsb-left-bg');
        }

        // 初始化插件
        function init() {
            if ($left && $container) $container.css('margin-left', $left.css('width'));
            css();
        }

        init();

        // 样式变化
        function css() {
            //$left
        }

        // 窗口大小改变时
        $(window).on('resize', function () {
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
        $('.jqsb-toggle-left').on('click', function (event) {
            eventHandler(event, $(this));
            toggle('left');
        });

        // 右侧导航栏开关
        $('.jqsb-toggle-right').on('click', function (event) {
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
            //$left_sm.css({'opacity': 0}).hide();
            //$left_bg.css({'opacity': 1}).show();
            $left_sm.css({'opacity': 0});
            $left_bg.css({'opacity': 1});


            $container.css(
                {'margin-left': $left.css('width')}
            );

            //$left_sm


            //$left_bg


            leftActive = true;
        }

        // 关闭
        function close() {
            $left_bg.css({'opacity': 0});
            $left_sm.css({'opacity': 1});
            //$left_bg.css({'opacity': 0}).hide();
            //$left_sm.css({'opacity': 1}).show();

            $container.css('margin-left', $left.css('width'));


            leftActive = false;
        }

        // 开关
        function toggle(side) {
            if (side === 'left' && $left) {
                if (!leftActive) {
                    open('left');
                } else {
                    close();
                }
            }
            if (side === 'right' && $right) {
                if (!rightActive) {
                    open('right');
                } else {
                    close();
                }
            }
        }

    };

    $.jqSidebar();
})(jQuery);
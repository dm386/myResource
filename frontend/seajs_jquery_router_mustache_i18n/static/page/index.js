define(function (require, exports, module) {
    var $ = require('jquery');
    var sdk = require('sdk');
    var lang = require('lang');
    var mustache = require('mustache');
    var network = require('network');

    //设置
    exports.load = function (transition) {
        //设置标题
        document.title = lang.title.index;

        /****************内容和事件*****************/
        //主布局框架
        var mainview = '<div class="container index"></div>';
        $('body').append(mainview);

        //事件处理



    };


});
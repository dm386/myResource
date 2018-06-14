/**
 * Created by Administrator on 2016/12/16.
 */
define(function(require,exports,module){
    var $ = require('jquery');
    var router = require('router');
    var sdk = require('sdk');
    var network = require('network');


    exports.load = function () {
        network.initGlobal();

        console.log(router);
        router.map('/index', switchPage);
        router.map('/about', switchPage);
        router.map('/help', switchPage);
        router.beforeEach(beforeFun);
        router.init();

    };


    function switchPage(transition) {
        console.log(transition);
        require('./router').load(transition);
    }


    function beforeFun(transition) {
        console.log(transition);
        if (transition.from) {
            sdk.removeCSS(transition.from.path)
        }
        transition.next();
        window.scrollTo(0,0);
        //页面切换时清楚所有定时器timer
    }



});
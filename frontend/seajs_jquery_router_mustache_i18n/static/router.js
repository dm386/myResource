define(function(require,exports,module){
    var $ = require('jquery');
    var sdk = require('sdk');
    var network = require('network');
    var configs = require('config');
    var page = sdk.get['page']||'index';

    //console.log('xxx');
    exports.load = function (transition) {

        var page = transition.path.replace('/','');
        console.log('>>> show page='+page);


        var pageModule = null;
        switch (page){
            case 'demo':
                pageModule = require('./page/demo');
                break;
            case 'index':
                pageModule = require('./page/index');
                break;
            
            default:
                console.log('>>> unknown page='+page);
                return;
        }
        window.transition = transition;


        //加载和显示页面
        pageModule.load(transition);



    };

});
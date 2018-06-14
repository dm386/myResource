/**
 * Created by Administrator on 2018/2/7.
 */
define(function (require,exports, module) {

    //检测cookie中设置的语言,后期可读取navigator对象中的值作为初始值
    var sdk = require('sdk');
    var userLanguage = sdk.getCookie('sys', 'lang');
    switch(userLanguage){
        case 'zh-cn':
            return require('../static/common/lang/zh-cn.js');
            break;
        case 'en':
            return require('../static/common/lang/en.js');
            break;
        default :
            return require('../static/common/lang/zh-cn.js');
            break;
    }
});
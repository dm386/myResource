/**
 * Created by Administrator on 2018/2/7.
 */
define(function (require,exports,module) {

    //计算时间差，返回对象
    exports.getRemainingTime = function (start, end) {

        var date3=(end-start)*1000;  //时间差的毫秒数

        //计算出相差天数
        var days=Math.floor(date3/(24*3600*1000));
        //计算出小时数

        var leave1=date3%(24*3600*1000) ;   //计算天数后剩余的毫秒数
        var hours=Math.floor(leave1/(3600*1000));
        //计算相差分钟数
        var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
        var minutes=Math.floor(leave2/(60*1000));

        //计算相差秒数
        var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
        var seconds=Math.round(leave3/1000);

        return {
            days:days,
            hours:hours,
            minutes:minutes,
            seconds:seconds
        };
    };

    //保留小数点后四位向上取整
    exports.ceil4 = function (param) {
        return Math.ceil(parseInt(param*100000)/10)/10000;
    };


    exports.getRandom = function (min, max) {
        return min+ Math.floor(Math.random()*(max-min));
    };


    exports.arraySortBy = function(attr,rev){
        //第二个参数没有传递 默认升序排列
        if(rev ==  undefined){
            rev = 1;
        }else{
            rev = (rev) ? 1 : -1;
        }
        return function(a,b){
            a = a[attr];
            b = b[attr];
            if(a < b){
                return rev * -1;
            }
            if(a > b){
                return rev * 1;
            }
            return 0;
        }
    }



    //时间格式化函数
    Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
});
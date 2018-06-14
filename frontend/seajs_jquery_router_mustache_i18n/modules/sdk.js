define(function(require, exports, module){
	var $ = require('jquery');
    var lang;
	module.exports={
		get:(function() {
			var paramStr = window.location.search.substr(1);
			var paramArr = new  Array();
			var _paramArr = paramStr.split("&");
			for(var i in _paramArr){
				var n  =  _paramArr[i].split("=")[0];
				if(n){
					paramArr[n]=_paramArr[i].split("=")[1];
				}
			}
			return paramArr;
		})(),

		cookies:(function(){
			var cookies = {};			
			var getCookies=function(){		
				var cookieArr	=	new  Array();
				var cookieStr 	= 	document.cookie;
				var _cookieArr 	= 	cookieStr.split(";");			
				for(var i in _cookieArr){		 
					var name  =  _cookieArr[i].split("=")[0];
					name  = name.replace(/(^\s*)|(\s*$)/g,'');		 
					if(name){
						cookieArr[name] = (_cookieArr[i]).split("=")[1];		 
					}
				}		
				return cookieArr; 
			}; 
			var setCookie = function(name,value,Days){
				var exp = new Date();
				exp.setTime(exp.getTime() + Days*24*60*60*1000);
				document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+';path=/';
			};

			cookies.get=getCookies();
			cookies.set=setCookie;
			return cookies;
		})(),
		
	};
})
;
	
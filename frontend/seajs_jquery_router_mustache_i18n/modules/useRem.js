/*
* ！给html动态设定fontSize 为浏览器宽度的1/20；以便使用rem作为度量单位；
*/
define(function(require, exports, module){
	exports.start=function(){
		var html = document.documentElement;
		function onWindowResize() {
			var width;
			if(html.getBoundingClientRect().width>720){
				width=720;
			}else{
				width=html.getBoundingClientRect().width;
			}
			html.style.fontSize = width / 18 + 'px';
		}
		onWindowResize();
		window.addEventListener('resize', onWindowResize);
	};
});
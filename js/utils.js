/*事件监听函数*/
;(function(){
	function addEvent(el,type,fn){
		if(addEventListener){
			el.addEventListener(type,fn,false);
		}
		else if(el.attachEvent){
			el.attachEvent('on' + type,function(){
				handle.call(el);/*attachEvent默认是指向window，需要改*/
			});
		}
		else{
			el['on'+type] = fn;
		}
	}
	window.addEvent = addEvent;
})();

/*窗口滚动距离*/
;(function(){
	function pageOffset(){
		if('number' === typeof(window.pageXOffset)){
			return {
				Left:window.pageXOffset,
				Top:window.pageYOffset
			}
		}
		else{
			return{
				left:document.body.scrollLeft + document.documentElement.scrollLeft,
				Top :document.body.sceollTop + document.documentElement.scrollTop
			}
		}
	}
	window.pageOffset = pageOffset;
})();	
/*窗口可视宽度高度*/
;(function(){
	function window_visible_range(){
		if('number' === typeof(window.innerWidth)){
			return{
				Left : window.innerWidth,
				Top : window.innerHeight
			}
		}
		else{
			if('BackCompat' === document.compatMode){
				/*怪异模式  compat :兼容*/
				return{
					left : document.body.clientWidth,
					Top  : document.body.clientHeight
				}
				
			}
			else{
				return{
					Left : document.documentElement.clientWidth,
					Top  : document.documentElement.clientHeight
				}
			}
		}
	}
	window.window_visible_range = window_visible_range;
})();
/*页面总高度宽度*/
;(function(){
	function pageRange(){
		if('number' === typeof(document.documentElement.scrollHeight)){
			return{
				Left : document.documentElement.scrollWidth,
				Top	 : document.documentElement.scrollHeight
			}
		}
		else{
			return{
				Left : document.body.scrollWidth,
				Top  : document.body.scrollHeight
			}
		}
	}
	window.pageRange = pageRange;
})();
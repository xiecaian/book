;(function(node){
	var player =function(){
		this.timer = null;
		this.node = node;
		this.dConfig = {
			"stopBtn" : "",
			"playBtn" : ""
		}
		this.config = this.getConfig();
		for(var key in this.dConfig){
			if(!this.config.hasOwnProperty(key)){
				return;
			}
		}
		this.SetConfig();
		this.scrollEvent();
		this.autoplay();
		this.stopPlay();
	}
	player.prototype = {
		getConfig: function(){
			var config = JSON.parse(this.node.getAttribute('data-config'));
			console.log(config);
			return config;
			
		},
		SetConfig: function(){
			var config = this.config,
				node = this.node;
				console.log(config.playBtn);
				console.log(node);
			this.playBtn = document.getElementsByClassName(config.playBtn)[0];
			this.stopBtn = node.getElementsByClassName(config.stopBtn)[0];
			console.log(this.playBtn);
		},
		scrollEvent : function(){
			var _self = this;
			console.log(_self);
			addEvent(window,'scroll',function(){
				console.log(pageOffset().Top)
				if(pageOffset().Top){
					console.log(this);
					console.log(_self);
					/*_self.playBtn.style.display = 'block';
					_self.stopBtn.style.display = 'block';*/
					showImg.call(_self.playBtn,'yes');
					showImg.call(_self.stopBtn,'yes');
					
				}
				else{
					_self.playBtn.style.display = 'none';
					_self.stopBtn.style.display = 'none';
				}
			})
		},
		autoplay : function(){
			console.log(123);
			var _self = this;
			addEvent(_self.playBtn,'click',function(){
				console.log(1235);
				_self.timer = setInterval(function(){
					/*不要直接用timer，因为直接用timer相当于window.timer*/
				scrollBy(0,10);/*最后会做判断，当最后高度（）小于10px时，会自动偏移最后的高度，而不是偏移10px*/
				console.log('a'+window_visible_range().Top);
				console.log('b'+pageOffset().Top);
				console.log('c'+document.documentElement.scrollHeight);
				if(pageRange().Top === window_visible_range().Top + pageOffset().Top)
				{
					console.log(1);
					clearInterval(_self.timer);
				}
				console.log(1236);
			},100);
			});
		},
		stopPlay : function(){
			var _self = this;
			addEvent(_self.stopBtn,'click',function(){
				console.log(5256);
				if( null === _self.timer){
					return;
				}
				else{
					clearInterval(_self.timer);
				}
				
			});
			
		}
	}
	new player();
	function showImg(judge){
		if('yes' === judge){
			this.style.display ='block';
		}
		else{
			this.style.display = 'none';
		}
		
	}
	function errorInfo(key){
		return new Error(
		'您没有配置参数' + key +'\n'+
		'必须配置的参数列表如下: \n'+
		'播放按钮类名 playbtn\n'+
		'暂停按钮类名 stopBtn'
		);
	}
})(document.getElementsByClassName('wrap')[0]);
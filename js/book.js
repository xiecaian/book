var Obut = document.getElementsByClassName('return-bh')[0],
	Oheader = document.getElementsByClassName('list-hd')[0];
	
addEvent(Obut,'click',function(){
	window.scroll(0,0); /*不要用scrollBy 其是一步一步累积的，是每次都偏移（代表偏移）而其他的是一步到达的（代表目的）*/
	console.log(window.pageOffset().Left);
	console.log(window.pageOffset().Top);
});
addEvent(Oheader,'click',function(){
	window.scrollTo(0,0);
});

addEvent(window,'scroll',function(){
	var Style = Obut.style.display,/*不行*/
		scrollTop = window.pageOffset().Top;
		console.log(scrollTop);
	scrollTop ? Obut.style.display = 'block'
			  : Obut.style.display = 'none';
});	
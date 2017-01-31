window.onload=function(){
	var header=document.querySelector(".dragheader");
	header.onmousedown=function(){
		drag(header.parentNode,event);
	};
}
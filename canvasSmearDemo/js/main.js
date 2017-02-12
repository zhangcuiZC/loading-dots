window.onload=function(){
	sparkline();
	var img=document.querySelector("#img");
	var canvas=document.querySelector("canvas");
	var c=canvas.getContext("2d");
	c.fillStyle=c.createPattern(img,"no-repeat");
	c.fillRect(0,0,800,400);
	smear(c,3,0,0,800,400);
};
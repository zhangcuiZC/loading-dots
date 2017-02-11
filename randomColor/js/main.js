function changeColor(element,colortext){
	if(element&&(element instanceof HTMLElement)){
		var color="#"+("000000"+(~~(Math.random()*(1<<24))).toString(16)).slice(-6);
		element.style.backgroundColor=color;
		if(colortext){
			$(colortext).text(color.toUpperCase());
		}
	}
}
$(function(){
	var current=document.querySelector(".current"),
		color=document.querySelector(".current-color"),
		change=document.querySelector(".change");
	changeColor(current,color);
	$(change).click(function(event) {
		changeColor(current,color);
	});
});
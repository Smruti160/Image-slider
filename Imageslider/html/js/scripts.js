var indexValue = 1;
showImg(indexValue);

function btn_slide(e) {
	showImg(indexValue = e);
}
function side_slide(e) {
	showImg(indexValue += e);
}

function showImg(e) {
	const img = document.querySelectorAll("img");
	const sliders = document.querySelectorAll(".btn-sliders span");
	if(e>img.length){indexValue =1}
	if(e<1){indexValue=img.length}
	for(var i = 0; i<img.length; i++ ){
		img[i].style.display ="none";
	}
	for(var i = 0; i<sliders.length; i++ ){
		sliders[i].style.background ="white";
	}
	img[indexValue-1].style.display ="block";
	sliders[indexValue-1].style.background ="lightblue";
}
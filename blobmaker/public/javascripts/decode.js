//http://stackoverflow.com/questions/21227078/convert-base64-to-image-in-javascript-jquery
//https://developer.mozilla.org/en-US/docs/Web/API/NodeList
var pics = document.querySelectorAll(".encodedImage");
Array.prototype.forEach.call(pics, function(pic){
	var imgData = pic.innerHTML;
	var cleanData = imgData.replace(/ /g, "+");
	//console.log(cleanData);
	pic.innerHTML = "";
	var im = new Image();
	im.src = cleanData;
	pic.appendChild(im);
});
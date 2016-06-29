function ajaxsave(){ 
	var picdata = canvas.toDataURL();
	//console.log(picdata);
	var creator = escape(document.querySelector("#creator").value);
	var name = escape(document.querySelector("#name").value);
	var data = "creator="+creator+"&name="+name+"&pic="+picdata;
	var addReq = new XMLHttpRequest();
	var addUrl = "http://localhost:8000/api/blobs/create";
	addReq.open('POST', addUrl, true);
	addReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	addReq.send(data);
	var savebutton = document.querySelector("#saveButton");
	saveButton.addEventListener("click", function(){
		var galReq = new XMLHttpRequest();
		var galUrl = "http://localhost:8000/gallery";
		galReq.open('GET', galUrl, true);
		galReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		galReq.addEventListener('load', function() {
			if (galReq.status >= 200 && galReq.status < 400) {
				//window.location.href = "http://localhost:8000/gallery";
				console.log(galReq.responseText);
			}
		});
		galReq.send();
	}); 
}
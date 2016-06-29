function validate() {
	console.log("validating!");
    var name = document.forms["blobForm"]["name"].value;
	var height = document.forms["blobForm"]["height"].value;
    if (name == null || name == "") {
        alert("Name this lil cutie!");
        return false;
    }
	else if (height <= 0){
		alert("Like HELL yr that tiny. Height must be positive.");
        return false;
	}
}
//console.log("lol");
//var addbutton = document.querySelector("#addButton");
//.addEventListener('DOMContentLoaded', validate);
function validate() {
    var name = document.querySelector("#name").value;
	var height = document.querySelector("#height").value;
	//console.log(name, height);
	var savebutton = document.querySelector("#saveButton");
	var errdiv = document.querySelector("#error");
    if (name == null || name == "" || name == " ") {
		console.log("no name!");
        errdiv.innerHTML = "Name this lil cutie!";
		savebutton.setAttribute("disabled", "disabled");
		return false;
    }
	else if (height < 50 || height > 250){
		console.log("wrong height!");
		errdiv.innerHTML = "What're you trying to do, pull the wool over mine eyes??? Height must be between 50 and 250 pixels.";
		savebutton.setAttribute("disabled", "disabled");
		return false;
	}
	else{
		errdiv.innerHTML = "";
		savebutton.removeAttribute('disabled');
		return true;
	}
	
}


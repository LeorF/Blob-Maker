//document.addEventListener('DOMContentLoaded', check)
function check(){
	//var btn = document.querySelector('#registerButton');
	//btn.addEventListener('click', valid8);
	//function valid8(){
		var usernameInput = document.querySelector('#user');
		var errdiv = document.querySelector("#error");
		if (usernameInput === null){
			errdiv.innerHTML = "<br/>Maybe fill in yr name there, ol' buddy ol' pal?";
			//btn.preventDefault();
			return false;
		}
		else{
			username = usernameInput.value;
			//console.log(username==="");
			if (username === null || username=== "" || username === " "){
				errdiv.innerHTML = "<br/>Maybe fill in yr name there, ol' buddy ol' pal?";
				//btn.preventDefault();
				return false;
			}
		}
		return true; 
	//}
}
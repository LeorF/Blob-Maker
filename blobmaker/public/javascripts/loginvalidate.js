//document.addEventListener('DOMContentLoaded', check)
function check(){
	//var login = document.querySelector('#login');
	//login.addEventListener('click', valid8);
	//function valid8(){
		//console.log(login);
		var surenessInput = document.querySelector('input[name="sureness"]:checked');
		var username = document.querySelector('#user').value;
		//console.log(sureness);
		var warning = document.querySelector('#warning');
		if (username === null || username === ""){
			warning.innerHTML = "<br/>Maybe fill in yr name there, ol' buddy ol' pal?";
			//btn.preventDefault();
			return false; 
		}
		else{
			if(surenessInput === null){
				warning.innerHTML = "<br/>Well, you better get sure!";
				//btn.preventDefault();
				return false;
			}
			else{
				var sureness = surenessInput.value;
				if (sureness === "no"){
					warning.innerHTML = "<br/>Well, you better get sure!";
					//btn.preventDefault();
					return false;
				}
				/*
				var logReq = new XMLHttpRequest();
				var logUrl = "http://localhost:8000/login";
				logReq.open('POST', logUrl, true);
				var data = "username="+username;
				logReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				logReq.addEventListener('load', function() {
					if (logReq.status >= 200 && logReq.status < 400) {
						console.log("RES:"+logReq.responseText);
					}
				});
				logReq.send(data);
				return true;*/
			}
		}
	//}
}
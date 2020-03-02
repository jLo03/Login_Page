//added windo.onload
window.onload=function(){

	const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('container');


	signUpButton.addEventListener('click', function() {
		container.classList.add("right-panel-active");
		document.getElementById("signUp").innerHTML = "Sign Up";
	});



	signInButton.addEventListener('click', function() {
		container.classList.remove("right-panel-active");
	});

}



(function(){

	var config = {
	    apiKey: "AIzaSyAEdWtgjh5zH3h4IY0FvPbGHYm_2ttBqtM",
	    authDomain: "partnerhero-qa-tool.firebaseapp.com",
	    databaseURL: "https://partnerhero-qa-tool.firebaseio.com",
	    storageBucket: "partnerhero-qa-tool.appspot.com",
  	};

	firebase.initializeApp(config);

	const emailTxt = document.getElementById('emailTxt');
	const passwordTxt = document.getElementById('passwordTxt');
	const loginBtn = document.getElementById('loginBtn');
	const signupBtn = document.getElementById('signupBtn');
	const logoutBtn = document.getElementById('logoutBtn');

	loginBtn.addEventListener('click', e => {
		const email = emailTxt.value;
		const pass = passwordTxt.value;
		const fireBAuth = firebase.auth();
		const fireBPromise = fireBAuth.signInWithEmailAndPassword(email, pass);

		fireBPromise.catch(e => console.log(e.message));

	});


}());
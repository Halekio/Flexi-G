var JSLOADED = "No";
function INITFB(){
	function load(callback){
		var script1= document.createElement('script');
		var script2= document.createElement('script');
		var script3= document.createElement('script');
		var script4= document.createElement('script');
		
		script1.src= "https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js";
		script2.src= "https://www.gstatic.com/firebasejs/8.0.2/firebase-auth.js";
		script3.src= "https://www.gstatic.com/firebasejs/8.0.2/firebase-database.js";
		script4.src= "https://www.gstatic.com/firebasejs/8.0.2/firebase-analytics.js";
		
		document.getElementsByTagName('head')[0].appendChild(script1);
		document.getElementsByTagName('head')[0].appendChild(script2);
		document.getElementsByTagName('head')[0].appendChild(script3);
		document.getElementsByTagName('head')[0].appendChild(script4);
		script4.onload=function(){callback()};
	}
	
	function Init()
	{
		//the script has been loaded, do anything here
		var script= document.createElement('script');
		script.innerHTML = 'var firebaseConfig = {apiKey: "AIzaSyCwoWYMVzy0mW4S-ygr-ujIOWqUA3fRZlA", authDomain: "flexi-g.firebaseapp.com", databaseURL: "https://flexi-g.firebaseio.com", projectId: "flexi-g", storageBucket: "flexi-g.appspot.com", messagingSenderId: "512914554075", appId: "1:512914554075:web:4711a8898c7b420bb6e0fe"}; firebase.initializeApp(firebaseConfig); firebase.analytics();';
		document.getElementsByTagName('head')[0].appendChild(script);
		
		JSLOADED = "Yes";
	}
	
	load(Init);
}





setTimeout(username, 0);
var x= location.search;
function username() {
	for(var i=10; i<x.length; i++){
		if(x[i]==="+"||x[i]==="&"){
			var y=i;
			break;
		}
	}
	document.getElementById("user").innerHTML = "Hey there " + x.substring(10,y) + "!";
	
}

function abc(){
	window.scrollBy(0,1000)
};
document.body.style.scrollBehavior = "smooth";	



function dropdown(){
		var x = document.getElementsByClassName("drop");
		for(var i=0; i<x.length; i++){
			x[i].style.display="block";
		}
	document.getElementById("more").style.display="none";
};

function dropup(){
		var x = document.getElementsByClassName("drop");
		for(var i=0; i<x.length; i++){
			x[i].style.display="none";
		}
	document.getElementById("more").style.display="block";			
};

function sidemenu(){
	document.getElementById("sidemenu").style.display = "block";
	document.getElementById("sidemenu").style.WebkitAnimation = "sidemenu 1s ease-out forwards";
};
function sidemenudrop(){
	document.getElementById("sidemenu").style.display="none";
};
function abc(){
	window.scrollBy(0,600)
};
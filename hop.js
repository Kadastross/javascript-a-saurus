var p=0;
setInterval(topshow, 3000);
function topshow(){
	var i;
	var y = document.getElementsByClassName("top");
	for(i=0; i<y.length; i++){
		y[i].style.display = "none";
	}
	p++;
	if(p > y.length){
		p=1;
	}
	y[p-1].style.display="block";
};

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


var myFrame= document.getElementById("ifr");
var flag=0;
function randomlinks(){
	var links= ["Sites/Spain.htm#target", "Sites/Switzerland.htm#target", "Sites/Paris.htm#target", "Sites/Singapore.htm#target", "Sites/Sydney.htm#target", "Sites/Kerala.htm#target"];
	var index = Math.floor(Math.random()*links.length);
	document.getElementById("frame").src = links[index];
	document.getElementById("btn").style.display="none";
	document.getElementById("cover").style.display="block";
	flag=index;
};
function randomlink(){
	window.location.assign(document.getElementById("frame").src);
};	
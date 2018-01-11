let section=document.getElementById('tohide');
let button = document.querySelector('button');
section.style.display="none";

button.onclick=function() {
	section.style.display="block";
	button.style.display="none";

}



function redirection(){
	var search = document.getElementById("recherche1").value;
	document.location.href="https://www.google.fr/#q="+search;
}

setTimeout(function() { alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }, 3000);

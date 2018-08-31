let count=0;
let whatToDo = function(){
	let div	= document.querySelector("div");
	count+=1;
	div.innerHTML=count;
}
setInterval (whatToDo,1000);

function repo() {
	window.location.href = "https://github.com/"+un+"/"+repo;
	let un = document.querySelector(".un").value;
	let repo = document.querySelector(".repo").value;
}
function master() {
	let un = document.querySelector(".un").value;
	let repo = document.querySelector(".repo").value;
	window.location.href = "https://"+un+".github.io/"+repo;
}
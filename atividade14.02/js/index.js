var foto = document.getElementById("imagem");
	
 foto.addEventListener('click',()=>{

let pic

 pic = Math.round(Math.random() * 10) + 1;

foto.setAttribute("src","imagem/" + pic + ".jpeg");

 });
 
 
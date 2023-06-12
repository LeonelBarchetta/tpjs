const img = document.querySelectorAll(".hijo")
const contenedor = document.querySelector(".muestra")
const contenidoImagen =document.querySelector(".imgGrande")
const contenidotexto = document.querySelector(".jpg")
const closeimg = document.querySelector(".close")
const PasarImagen = document.querySelector(".despues")
const VolverImagen = document.querySelector(".antes")


img.forEach(image =>{
    image.addEventListener('click', ()=>{
        addimage(image.getAttribute("src"),image.getAttribute("alt"))
    })
})

const addimage = (srcImagen, altImagen)=>{
    contenedor.classList.toggle("acceso")
    contenidoImagen.src= srcImagen
    contenidotexto.innerHTML= altImagen
}

closeimg.addEventListener("click" , ()=>{
    contenedor.classList.toggle("acceso")

})

PasarImagen.onclick = function () {
    switch (contenidoImagen.src){
        case "https://slrncl.com/moments/assets/img/202305-berkeley.jpg":
            contenidoImagen.src="https://slrncl.com/moments/assets/img/202304-slo.jpg"
            break;
        case "https://slrncl.com/moments/assets/img/202304-slo.jpg":
            contenidoImagen.src="https://slrncl.com/moments/assets/img/202304-slo-3.jpg"
            break;
        case "https://slrncl.com/moments/assets/img/202304-slo-3.jpg":
            contenidoImagen.src="https://slrncl.com/moments/assets/img/202304-slo-2.jpg"
            break;
        case "https://slrncl.com/moments/assets/img/202304-slo-2.jpg":
            contenidoImagen.src="https://slrncl.com/moments/assets/img/202301-tilden.jpg"
            break;
        case "https://slrncl.com/moments/assets/img/202301-tilden.jpg":
            contenidoImagen.src="https://slrncl.com/moments/assets/img/202305-berkeley.jpg"
            break;
        
    }
}

VolverImagen.onclick = function () {
    switch (contenidoImagen.src){
        case "https://slrncl.com/moments/assets/img/202305-berkeley.jpg":
            contenidoImagen.src="https://slrncl.com/moments/assets/img/202301-tilden.jpg"
            break;
        case "https://slrncl.com/moments/assets/img/202304-slo.jpg":
            contenidoImagen.src="https://slrncl.com/moments/assets/img/202305-berkeley.jpg"
            break;
        case "https://slrncl.com/moments/assets/img/202304-slo-3.jpg":
            contenidoImagen.src="https://slrncl.com/moments/assets/img/202304-slo.jpg"
            break;
        case "https://slrncl.com/moments/assets/img/202304-slo-2.jpg":
            contenidoImagen.src="https://slrncl.com/moments/assets/img/202304-slo-3.jpg"
            break;
        case "https://slrncl.com/moments/assets/img/202301-tilden.jpg":
            contenidoImagen.src="https://slrncl.com/moments/assets/img/202304-slo-2.jpg"
            break;
        
    }
}
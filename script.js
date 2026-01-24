let menuVisible = false;

// FUNCION QUE OCULTA O MUESTRA EL MENU
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// FUNCION ANIMACION HABILIDADES
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("canva");
        habilidades[4].classList.add("lightroom");
        habilidades[5].classList.add("office");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("lider");
        habilidades[8].classList.add("atencion");
        habilidades[9].classList.add("trabajoteam");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("dedicacion");
    }
}

// EVENTO SCROLL
window.onscroll = function(){
    efectoHabilidades();
}

// ================= CERTIFICATIONS =================

// Scroll preciso: 1 card por click
function scrollCert(direction){
    const track = document.getElementById("certTrack");
    const cardWidth = 280 + 30; // ancho card + gap
    track.scrollLeft += direction * cardWidth;
}

// Abrir PDF
function openCert(pdf){
    const modal = document.getElementById("certModal");
    const iframe = document.getElementById("certPDF");
    iframe.src = pdf;
    modal.style.display = "flex";
}

// Cerrar PDF
function closeCert(){
    const modal = document.getElementById("certModal");
    const iframe = document.getElementById("certPDF");
    iframe.src = "";
    modal.style.display = "none";
}

// FUNCION PARA STACK TABS
function openStack(evt, stackName) {
    var i, tabContent, tabBtns;
    
    // Ocultar todos los paneles
    tabContent = document.getElementsByClassName("tab-panel");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        tabContent[i].classList.remove("active");
    }

    // Quitar clase active de los botones
    tabBtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    // Mostrar panel actual y añadir clase active al botón
    document.getElementById(stackName).style.display = "block";
    document.getElementById(stackName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

let menuVisible = false;

// FUNCION QUE OCULTA O MUESTRA EL MENU // 
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // Oculto  el menu una vez que se selecciono la Opcion 
    document.getElementById("nav").classList ="";
    menuVisible = False;
}

// Funcion que aplica las animaciones de las habilidades 
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades [0].classList.add("javascript");
        habilidades [1].classList.add("htmlcss");
        habilidades [2].classList.add("photoshop");
        habilidades [3].classList.add("canva");
        habilidades [4].classList.add("lightroom");
        habilidades [5].classList.add("office");
        habilidades [6].classList.add("comunicacion");
        habilidades [7].classList.add("lider");
        habilidades [8].classList.add("atencion");
        habilidades [9].classList.add("trabajoteam");
        habilidades [10].classList.add("creatividad");
        habilidades [11].classList.add("dedicacion");
        
    } 
}


// detecto el scrolling para aplicar la animacion de la barra de habilidades 
window.onscroll = function(){
    efectoHabilidades();
} 
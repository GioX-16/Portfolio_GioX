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
    const card = track.querySelector(".cert-card");
    const cardWidth = card.offsetWidth + 20; // ancho card + gap aproximado
    track.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth'
    });
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

// ================= CAMBIO DE TEMA =================

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("themeIcon");
    
    if (body.getAttribute("data-theme") === "light") {
        body.setAttribute("data-theme", "dark");
        themeIcon.className = "fa-solid fa-moon";
        localStorage.setItem("theme", "dark");
    } else {
        body.setAttribute("data-theme", "light");
        themeIcon.className = "fa-solid fa-sun";
        localStorage.setItem("theme", "light");
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    const themeIcon = document.getElementById("themeIcon");
    
    if (savedTheme) {
        document.body.setAttribute("data-theme", savedTheme);
        if (savedTheme === "light") {
            themeIcon.className = "fa-solid fa-sun";
        }
    } else {
        document.body.setAttribute("data-theme", "dark");
    }
}

document.addEventListener("DOMContentLoaded", initTheme);

// ================= CAMBIO DE IDIOMA =================

const translations = {
    es: {
        nav_inicio: "INICIO",
        nav_redes: "REDES",
        nav_proyectos: "PROYECTOS",
        nav_sobremi: "SOBRE MI",
        nav_skills: "SKILLS",
        nav_stack: "STACK",
        nav_certificados: "CERTIFICADOS",
        nav_cv: "CV",
        hero_title: "Descargar CV",
        redes_title: "GIOVANNY SANDINO",
        redes_subtitle: "Ingeniero De Sistemas - Desarrollador Web - Diseñador UX/UI",
        sobremi_title: "Sobre Mi",
        sobremi_intro: "Hola - Hello - Привет. Geovanny Daniel Sandino Gomez de 23 años, Joven estudiante de ingenieria cuyo objetivo es encontrar una empresa/Trabajo que permita aplicar y adquirir conocimientos en el area laboral y crecer de manera personal e intelectual.",
        sobremi_datos: "Datos Personales",
        sobremi_intereses: "Intereses:",
        skills_title: "Habilidades",
        skills_dev: "Habilidades de Desarrollador",
        skills_prof: "Habilidades Profesionales",
        stack_title: "STACK TECNOLÓGICO",
        cert_title: "CERTIFICACIONES",
        cv_title: "Curriculum",
        cv_educacion: "꧁ EDUCACION ꧂",
        cv_aprendizaje: "꧁ EN APRENDIZAJE ꧂",
        whatsapp_tooltip: "¡Contáctame!",
        lang_label: "ES"
    },
    en: {
        nav_inicio: "HOME",
        nav_redes: "SOCIAL",
        nav_proyectos: "PROJECTS",
        nav_sobremi: "ABOUT ME",
        nav_skills: "SKILLS",
        nav_stack: "STACK",
        nav_certificados: "CERTIFICATIONS",
        nav_cv: "CV",
        hero_title: "Download CV",
        redes_title: "GIOVANNY SANDINO",
        redes_subtitle: "Systems Engineer - Web Developer - UX/UI Designer",
        sobremi_title: "About Me",
        sobremi_intro: "Hi - Hello - Привет. Geovanny Daniel Sandino Gomez, 23 years old, a young engineering student whose goal is to find a company/Job that allows applying and acquiring knowledge in the work area and grow personally and intellectually.",
        sobremi_datos: "Personal Data",
        sobremi_intereses: "Interests:",
        skills_title: "Skills",
        skills_dev: "Developer Skills",
        skills_prof: "Professional Skills",
        stack_title: "TECHNOLOGICAL STACK",
        cert_title: "CERTIFICATIONS",
        cv_title: "Curriculum",
        cv_educacion: "꧁ EDUCATION ꧂",
        cv_aprendizaje: "꧁ LEARNING ꧂",
        whatsapp_tooltip: "Contact me!",
        lang_label: "EN"
    }
};

let currentLang = 'es';

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyTranslations(currentLang);
    localStorage.setItem('language', currentLang);
    updateLangButtons();
}

function updateLangButtons() {
    const langText = document.getElementById("langText");
    const mobileLangText = document.getElementById("mobileLangText");
    const whatsappTooltip = document.querySelector(".tooltip-whatsapp");
    
    if (langText) langText.textContent = currentLang.toUpperCase();
    if (mobileLangText) mobileLangText.textContent = currentLang.toUpperCase();
    if (whatsappTooltip) whatsappTooltip.textContent = translations[currentLang].whatsapp_tooltip;
}

function applyTranslations(lang) {
    const t = translations[lang];
    
    document.querySelectorAll('nav ul li a').forEach((link, index) => {
        const navKeys = ['nav_inicio', 'nav_redes', 'nav_proyectos', 'nav_sobremi', 'nav_skills', 'nav_stack', 'nav_certificados', 'nav_cv'];
        if (navKeys[index] && t[navKeys[index]]) {
            link.textContent = t[navKeys[index]];
        }
    });
    
    const heroBtn = document.querySelector('#hero1 .cv-button-container button');
    if (heroBtn) heroBtn.innerHTML = `${t.hero_title} <i class="fa-solid fa-download"></i><span class="overlay"></span>`;
    
    const mobileHeroBtn = document.querySelector('#inicio .cv-button-container button');
    if (mobileHeroBtn) mobileHeroBtn.innerHTML = `${t.hero_title} <i class="fa-solid fa-download"></i><span class="overlay"></span>`;
    
    const sobremiBtn = document.querySelector('#sobremi .cv-button-container button');
    if (sobremiBtn) sobremiBtn.innerHTML = `${t.hero_title} <i class="fa-solid fa-download"></i><span class="overlay"></span>`;
    
    const bannerH1 = document.querySelector('#inicio .contenido-banner h1');
    if (bannerH1) bannerH1.textContent = t.redes_title;
    
    const bannerH2 = document.querySelector('#inicio .contenido-banner h2');
    if (bannerH2) bannerH2.textContent = t.redes_subtitle;
    
    const sobremiH2 = document.querySelector('#sobremi h2');
    if (sobremiH2) sobremiH2.textContent = t.sobremi_title;
    
    const sobremiP = document.querySelector('#sobremi .contenido-seccion p');
    if (sobremiP) sobremiP.innerHTML = `<span>${t.sobremi_intro.split(' - ')[0]}</span> ${t.sobremi_intro}`;
    
    const sobremiColH3s = document.querySelectorAll('#sobremi .fila .col h3');
    if (sobremiColH3s[0]) sobremiColH3s[0].textContent = t.sobremi_datos;
    if (sobremiColH3s[1]) sobremiColH3s[1].textContent = t.sobremi_intereses;
    
    const skillsH2 = document.querySelector('#skills h2');
    if (skillsH2) skillsH2.textContent = t.skills_title;
    
    const skillsH3s = document.querySelectorAll('#skills .fila .col h3');
    if (skillsH3s[0]) skillsH3s[0].textContent = t.skills_dev;
    if (skillsH3s[1]) skillsH3s[1].textContent = t.skills_prof;
    
    const stackH2 = document.querySelector('#stack h2');
    if (stackH2) stackH2.textContent = t.stack_title;
    
    const certH2 = document.querySelector('#certifications h2');
    if (certH2) certH2.textContent = t.cert_title;
    
    const cvH2 = document.querySelector('#curriculum h2');
    if (cvH2) cvH2.textContent = t.cv_title;
    
    const cvH3s = document.querySelectorAll('#curriculum .fila .col h3');
    if (cvH3s[0]) cvH3s[0].textContent = t.cv_educacion;
    if (cvH3s[1]) cvH3s[1].textContent = t.cv_aprendizaje;
}

function initLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        applyTranslations(currentLang);
    }
    updateLangButtons();
}

document.addEventListener("DOMContentLoaded", function() {
    initTheme();
    initLanguage();
});

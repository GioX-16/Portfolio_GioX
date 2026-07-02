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
        hero_welcome: "Bienvenido",
        hero_hi: "Hola, soy",
        hero_name: "GIO",
        hero_description: "Ingeniero de Sistemas y Desarrollador Web creando experiencias digitales con código limpio y diseño reflexivo.",
        hero_cv_btn: "Descargar C.V.",
        hero_title: "Descargar CV",
        redes_title: "GIOVANNY SANDINO",
        redes_subtitle: "Ingeniero De Sistemas - Desarrollador Web - Diseñador UX/UI",
        sobremi_title: "Sobre Mi",
        sobremi_intro: "Hola Mi nombre es Geovanny Daniel Sandino Gomez, Joven estudiante de ingenieria cuyo objetivo es encontrar una empresa/Trabajo que permita aplicar y adquirir conocimientos en el area laboral y crecer de manera personal e intelectual.",
        sobremi_datos: "Datos Personales",
        sobremi_intereses: "Intereses:",
        sobremi_cumple: "Cumpleaños:",
        sobremi_telefono: "Telefono:",
        sobremi_email: "Email:",
        sobremi_linkedin: "Link-In:",
        sobremi_direccion: "Direccion:",
        sobremi_estudio: "Estudio:",
        skills_title: "Habilidades",
        skills_dev: "Habilidades de Desarrollador",
        skills_prof: "Habilidades Profesionales",
        skills_javascript: "JAVASCRIPT",
        skills_frontend: "FRONTEND",
        skills_react: "REACT",
        skills_backend: "BACKEND",
        skills_git: "GIT",
        skills_ui: "DISEÑO DE INTERFACES DE USUARIOS",
        skills_comunicacion: "Comunicacion",
        skills_liderazgo: "Liderazgo",
        skills_atencion: "Atencion",
        skills_trabajo: "Trabajo en equipo",
        skills_creatividad: "Creatividad",
        skills_dedicacion: "Dedicacion",
        intereses_juegos: "JUEGOS",
        intereses_musica: "MUSICA",
        intereses_viajes: "VIAJES",
        intereses_mac: "MAC OS",
        intereses_deporte: "DEPORTE",
        intereses_libros: "LIBROS",
        intereses_moto: "MOTOCICLETA",
        intereses_foto: "FOTOGRAFIA",
        stack_title: "STACK TECNOLÓGICO",
        stack_design: "Diseño & Herramientas",
        stack_frontend: "Front-end",
        stack_backend: "Back-end",
        cert_title: "CERTIFICACIONES",
        portafolio_title: "PORTAFOLIO",
        portafolio_proy1_title: "Diseño App Movil",
        portafolio_proy1_link: "Ver Proyecto →",
        portafolio_proy2_title: "Diseño de Web IDV",
        portafolio_proy2_link: "Ver Proyecto →",
        portafolio_proy3_title: "Desarrollo de Web IDV",
        portafolio_proy3_link: "Ver Proyecto →",
        portafolio_proy4_title: "App Movil Agromaps",
        portafolio_proy4_link: "Ver Proyecto →",
        portafolio_proy5_title: "Ecommerce",
        portafolio_proy5_link: "Ver Proyecto →",
        portafolio_proy6_title: "AgroMaps",
        portafolio_proy6_link: "Ver Proyecto →",
        portafolio_proy7_title: "Diseño de Prueba AppBank",
        portafolio_proy7_link: "Ver Proyecto →",
        portafolio_proy8_title: "Desarrollo Web",
        portafolio_proy8_link: "Ver Proyecto →",
        portafolio_proy9_title: "Desarrollo Web",
        portafolio_proy9_link: "Ver Proyecto →",
        portafolio_proy10_title: "Diseño de Web",
        portafolio_proy10_link: "Ver Diseño →",
        portafolio_proy11_title: "SOFIA TEAM",
        portafolio_proy11_link: "Ver Proyecto →",
        portafolio_proy12_title: "SOON",
        portafolio_proy12_link: "Nuevo proyecto en Desarrollo",
        portafolio_proy13_title: "DISEÑO",
        portafolio_proy13_link: "",
        portafolio_proy14_title: "ECOMMERCE",
        portafolio_proy14_link: "",
        portfovideo_title: "Nuestro Trabajo",
        portfovideo_btn: "Ir a Proyectos",
        portfovideo_btn_mobile: "Ver video",
        cv_title: "Curriculum",
        cv_educacion: "꧁ EDUCACION ꧂",
        cv_aprendizaje: "꧁ EN APRENDIZAJE ꧂",
        cv_ingenieria: "Ingeneria de Sistemas",
        cv_uni: "Universidad Nacional de Ingenieria",
        cv_uni_desc: "La Universidad Nacional de Ingeniería (UNI) es una casa de estudios universitarios radicada en la ciudad de Managua, Nicaragua, estatal y autónoma, es reconocida por su minucioso y 'selectivo' sistema de ingreso, a través de su examen de admisión con un alto componente en las materias de matemáticas y física.",
        cv_bachiller: "Bachiller en Ciencias y Letras",
        cv_colegio: "Colegio Republica de Venezuela",
        cv_edu_desc: "La Educación pública es la accesibilidad de toda la población a la educación y generar niveles de instrucción deseables para la obtención de una ventaja competitiva.",
        cv_primaria: "Educacion Primeraria",
        cv_republica: "Republica de Venezuela",
        cv_cursando: "2018 - CURSANDO",
        cv_apps: "Desarrollo de Apps Multiplataforma",
        cv_curso: "Curso Online",
        cv_apps_desc: "Uno de los campos de tecnologia que me gustaria especializarme es 'Desarrollo de Apps Multiplataforma'",
        cv_ingles: "Ingles",
        cv_autodidacta: "Autodidacta",
        cv_ingles_desc: "En aprendizaje actualmente el idioma ingles, ya que en muchas empresas de Programacion y desarrollo es un requisito nesesario.",
        cv_uxui: "Diseñador UX/UI",
        cv_uxui_desc: "Actualmente constamos con una certificacion de la academia online Udemy.",
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
        hero_welcome: "Welcome",
        hero_hi: "Hi, I'm",
        hero_name: "GIO",
        hero_description: "System Engineer & Web Developer crafting digital experiences with clean code and thoughtful design.",
        hero_cv_btn: "Download C.V.",
        hero_title: "Download CV",
        redes_title: "GIOVANNY SANDINO",
        redes_subtitle: "Systems Engineer - Web Developer - UX/UI Designer",
        sobremi_title: "About Me",
        sobremi_intro: "Hi - Hello - Привет. Geovanny Daniel Sandino Gomez, 23 years old, a young engineering student whose goal is to find a company/Job that allows applying and acquiring knowledge in the work area and grow personally and intellectually.",
        sobremi_datos: "Personal Data",
        sobremi_intereses: "Interests:",
        sobremi_cumple: "Birthday:",
        sobremi_telefono: "Phone:",
        sobremi_email: "Email:",
        sobremi_linkedin: "LinkedIn:",
        sobremi_direccion: "Address:",
        sobremi_estudio: "Education:",
        skills_title: "Skills",
        skills_dev: "Developer Skills",
        skills_prof: "Professional Skills",
        skills_javascript: "JAVASCRIPT",
        skills_frontend: "FRONTEND",
        skills_react: "REACT",
        skills_backend: "BACKEND",
        skills_git: "GIT",
        skills_ui: "UI/UX DESIGN",
        skills_comunicacion: "Communication",
        skills_liderazgo: "Leadership",
        skills_atencion: "Attention to Detail",
        skills_trabajo: "Teamwork",
        skills_creatividad: "Creativity",
        skills_dedicacion: "Dedication",
        intereses_juegos: "GAMES",
        intereses_musica: "MUSIC",
        intereses_viajes: "TRAVEL",
        intereses_mac: "MAC OS",
        intereses_deporte: "SPORTS",
        intereses_libros: "BOOKS",
        intereses_moto: "MOTORCYCLE",
        intereses_foto: "PHOTOGRAPHY",
        stack_title: "TECHNOLOGICAL STACK",
        stack_design: "Design & Tools",
        stack_frontend: "Front-end",
        stack_backend: "Back-end",
        cert_title: "CERTIFICATIONS",
        portafolio_title: "PORTFOLIO",
        portafolio_proy1_title: "Mobile App Design",
        portafolio_proy1_link: "View Project →",
        portafolio_proy2_title: "IDV Web Design",
        portafolio_proy2_link: "View Project →",
        portafolio_proy3_title: "IDV Web Development",
        portafolio_proy3_link: "View Project →",
        portafolio_proy4_title: "Agromaps Mobile App",
        portafolio_proy4_link: "View Project →",
        portafolio_proy5_title: "Ecommerce",
        portafolio_proy5_link: "View Project →",
        portafolio_proy6_title: "AgroMaps",
        portafolio_proy6_link: "View Project →",
        portafolio_proy7_title: "AppBank Test Design",
        portafolio_proy7_link: "View Project →",
        portafolio_proy8_title: "Web Development",
        portafolio_proy8_link: "View Project →",
        portafolio_proy9_title: "Web Development",
        portafolio_proy9_link: "View Project →",
        portafolio_proy10_title: "Web Design",
        portafolio_proy10_link: "View Design →",
        portafolio_proy11_title: "SOFIA TEAM",
        portafolio_proy11_link: "View Project →",
        portafolio_proy12_title: "SOON",
        portafolio_proy12_link: "New Project in Development",
        portafolio_proy13_title: "DESIGN",
        portafolio_proy13_link: "",
        portafolio_proy14_title: "ECOMMERCE",
        portafolio_proy14_link: "",
        portfovideo_title: "Our Work",
        portfovideo_btn: "Go to Projects",
        portfovideo_btn_mobile: "Watch video",
        cv_title: "Curriculum",
        cv_educacion: "꧁ EDUCATION ꧂",
        cv_aprendizaje: "꧁ LEARNING ꧂",
        cv_ingenieria: "Systems Engineering",
        cv_uni: "National University of Engineering",
        cv_uni_desc: "The National University of Engineering (UNI) is a university located in Managua, Nicaragua, state-owned and autonomous. It is recognized for its thorough and selective admission system, through its entrance exam with a high component in mathematics and physics.",
        cv_bachiller: "High School Diploma in Sciences and Letters",
        cv_colegio: "Republic of Venezuela School",
        cv_edu_desc: "Public education is the accessibility of the entire population to education and generating desirable instruction levels for obtaining a competitive advantage.",
        cv_primaria: "Primary Education",
        cv_republica: "Republic of Venezuela",
        cv_cursando: "2018 - IN PROGRESS",
        cv_apps: "Cross-Platform App Development",
        cv_curso: "Online Course",
        cv_apps_desc: "One of the technology fields I would like to specialize in is 'Cross-Platform App Development'",
        cv_ingles: "English",
        cv_autodidacta: "Self-taught",
        cv_ingles_desc: "Currently learning English, as in many Programming and development companies it is a necessary requirement.",
        cv_uxui: "UX/UI Designer",
        cv_uxui_desc: "We currently have a certification from the online academy Udemy.",
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
    
    const editorialWelcome = document.querySelector('.hero-editorial .welcome-tag');
    if (editorialWelcome) editorialWelcome.textContent = t.hero_welcome;
    
    const editorialHi = document.querySelector('.hero-editorial .hi-text');
    if (editorialHi) editorialHi.textContent = t.hero_hi;
    
    const editorialName = document.querySelector('.hero-editorial .main-name');
    if (editorialName) editorialName.textContent = t.hero_name;
    
    const editorialDesc = document.querySelector('.hero-editorial .hero-description');
    if (editorialDesc) editorialDesc.textContent = t.hero_description;
    
    const editorialBtn = document.querySelector('.hero-editorial .cv-button-container button');
    if (editorialBtn) editorialBtn.innerHTML = `<i class="fa-solid fa-arrow-down"></i>${t.hero_cv_btn}<span class="overlay"></span>`;

    const portfovideoPhrase = document.querySelector('.portfovideo-phrase');
    if (portfovideoPhrase) portfovideoPhrase.textContent = t.portfovideo_title;

    const portfovideoBtn = document.querySelector('.portfovideo-btn');
    if (portfovideoBtn) {
        if (window.innerWidth <= 768) {
            portfovideoBtn.textContent = `▶ ${t.portfovideo_btn_mobile}`;
            portfovideoBtn.removeAttribute('href');
        } else {
            portfovideoBtn.textContent = `${t.portfovideo_btn} →`;
            portfovideoBtn.href = '#portafolio';
        }
    }

    const modalLabel = document.getElementById('modalLabel');
    if (modalLabel) modalLabel.textContent = t.portfovideo_title;

    const mobileHeroBtn = document.querySelector('#inicio .cv-button-container button');
    if (mobileHeroBtn) mobileHeroBtn.innerHTML = `${t.hero_title} <i class="fa-solid fa-download"></i><span class="overlay"></span>`;
    
    const sobremiBtn = document.querySelector('#sobremi .cv-button-container button');
    if (sobremiBtn) sobremiBtn.innerHTML = `${t.hero_title} <i class="fa-solid fa-download"></i><span class="overlay"></span>`;
    
    const bannerH1 = document.querySelector('#inicio .contenido-banner h1');
    if (bannerH1) bannerH1.textContent = t.redes_title;
    
    const bannerH2 = document.querySelector('#inicio .contenido-banner h2');
    if (bannerH2) bannerH2.textContent = t.redes_subtitle;
    
    const portafolioH2 = document.querySelector('#portafolio h2');
    if (portafolioH2) portafolioH2.textContent = t.portafolio_title;
    
    const portafolioProyectos = document.querySelectorAll('#portafolio .proyecto .overlay');
    const proyectos = [
        { title: t.portafolio_proy1_title, link: t.portafolio_proy1_link },
        { title: t.portafolio_proy2_title, link: t.portafolio_proy2_link },
        { title: t.portafolio_proy3_title, link: t.portafolio_proy3_link },
        { title: t.portafolio_proy4_title, link: t.portafolio_proy4_link },
        { title: t.portafolio_proy5_title, link: t.portafolio_proy5_link },
        { title: t.portafolio_proy6_title, link: t.portafolio_proy6_link },
        { title: t.portafolio_proy7_title, link: t.portafolio_proy7_link },
        { title: t.portafolio_proy8_title, link: t.portafolio_proy8_link },
        { title: t.portafolio_proy9_title, link: t.portafolio_proy9_link },
        { title: t.portafolio_proy10_title, link: t.portafolio_proy10_link },
        { title: t.portafolio_proy11_title, link: t.portafolio_proy11_link },
        { title: t.portafolio_proy12_title, link: t.portafolio_proy12_link },
        { title: t.portafolio_proy13_title, link: t.portafolio_proy13_link },
        { title: t.portafolio_proy14_title, link: t.portafolio_proy14_link }
    ];
    portafolioProyectos.forEach((proy, i) => {
        const h3 = proy.querySelector('h3');
        const link = proy.querySelector('a');
        const span = proy.querySelector('span');
        if (h3) h3.textContent = proyectos[i].title;
        if (link && proyectos[i].link) {
            link.textContent = proyectos[i].link;
            link.style.display = 'inline';
        } else if (span && proyectos[i].link) {
            span.textContent = proyectos[i].link;
        } else if (link) {
            link.style.display = 'none';
        }
    });
    
    const sobremiH2 = document.querySelector('#sobremi h2');
    if (sobremiH2) sobremiH2.textContent = t.sobremi_title;
    
    const sobremiP = document.querySelector('#sobremi .contenido-seccion p');
    if (sobremiP) sobremiP.innerHTML = `<span>${t.sobremi_intro.split(' - ')[0]}</span> - ${t.sobremi_intro.split(' - ').slice(1).join(' - ')}`;
    
    const sobremiColH3s = document.querySelectorAll('#sobremi .fila .col h3');
    if (sobremiColH3s[0]) sobremiColH3s[0].textContent = t.sobremi_datos;
    if (sobremiColH3s[1]) sobremiColH3s[1].textContent = t.sobremi_intereses;
    
    const sobremiDatos = document.querySelectorAll('#sobremi .fila .col ul li strong');
    if (sobremiDatos[0]) sobremiDatos[0].textContent = t.sobremi_cumple;
    if (sobremiDatos[1]) sobremiDatos[1].textContent = t.sobremi_telefono;
    if (sobremiDatos[2]) sobremiDatos[2].textContent = t.sobremi_email;
    if (sobremiDatos[3]) sobremiDatos[3].textContent = t.sobremi_linkedin;
    if (sobremiDatos[4]) sobremiDatos[4].textContent = t.sobremi_direccion;
    if (sobremiDatos[5]) sobremiDatos[5].textContent = t.sobremi_estudio;
    
    const intereses = document.querySelectorAll('#sobremi .contenedor-intereses .intereses span');
    const interesesKeys = ['intereses_juegos', 'intereses_musica', 'intereses_viajes', 'intereses_mac', 'intereses_deporte', 'intereses_libros', 'intereses_moto', 'intereses_foto'];
    intereses.forEach((int, i) => {
        if (t[interesesKeys[i]]) int.textContent = t[interesesKeys[i]];
    });
    
    const skillsH2 = document.querySelector('#skills h2');
    if (skillsH2) skillsH2.textContent = t.skills_title;
    
    const skillsH3s = document.querySelectorAll('#skills .fila .col h3');
    if (skillsH3s[0]) skillsH3s[0].textContent = t.skills_dev;
    if (skillsH3s[1]) skillsH3s[1].textContent = t.skills_prof;
    
    const skillSpans = document.querySelectorAll('#skills .skill > span');
    const skillKeys = ['skills_javascript', 'skills_frontend', 'skills_react', 'skills_backend', 'skills_git', 'skills_ui', 'skills_comunicacion', 'skills_liderazgo', 'skills_atencion', 'skills_trabajo', 'skills_creatividad', 'skills_dedicacion'];
    skillSpans.forEach((skill, i) => {
        if (t[skillKeys[i]]) skill.textContent = t[skillKeys[i]];
    });
    
    const stackH2 = document.querySelector('#stack h2');
    if (stackH2) stackH2.textContent = t.stack_title;
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns[0]) tabBtns[0].textContent = t.stack_design;
    if (tabBtns[1]) tabBtns[1].textContent = t.stack_frontend;
    if (tabBtns[2]) tabBtns[2].textContent = t.stack_backend;
    
    const certH2 = document.querySelector('#certifications h2');
    if (certH2) certH2.textContent = t.cert_title;
    
    const cvH2 = document.querySelector('#curriculum h2');
    if (cvH2) cvH2.textContent = t.cv_title;
    
    const cvH3s = document.querySelectorAll('#curriculum .fila .col h3');
    if (cvH3s[0]) cvH3s[0].textContent = t.cv_educacion;
    if (cvH3s[1]) cvH3s[1].textContent = t.cv_aprendizaje;
    
    const cvItems = document.querySelectorAll('#curriculum .item');
    if (cvItems[0]) {
        cvItems[0].querySelector('h4').textContent = t.cv_ingenieria;
        cvItems[0].querySelector('.casa').textContent = t.cv_uni;
        cvItems[0].querySelector('.fecha').textContent = t.cv_cursando;
        cvItems[0].querySelector('p').textContent = t.cv_uni_desc;
    }
    if (cvItems[1]) {
        cvItems[1].querySelector('h4').textContent = t.cv_bachiller;
        cvItems[1].querySelector('.casa').textContent = t.cv_colegio;
        cvItems[1].querySelector('p').textContent = t.cv_edu_desc;
    }
    if (cvItems[2]) {
        cvItems[2].querySelector('h4').textContent = t.cv_primaria;
        cvItems[2].querySelector('.casa').textContent = t.cv_republica;
    }
    if (cvItems[3]) {
        cvItems[3].querySelector('h4').textContent = t.cv_apps;
        cvItems[3].querySelector('.casa').textContent = t.cv_curso;
        cvItems[3].querySelector('p').textContent = t.cv_apps_desc;
    }
    if (cvItems[4]) {
        cvItems[4].querySelector('h4').textContent = t.cv_ingles;
        cvItems[4].querySelector('.casa').textContent = t.cv_autodidacta;
        cvItems[4].querySelector('p').textContent = t.cv_ingles_desc;
    }
    if (cvItems[5]) {
        cvItems[5].querySelector('h4').textContent = t.cv_uxui;
        cvItems[5].querySelector('.casa').textContent = t.cv_autodidacta;
        cvItems[5].querySelector('p').textContent = t.cv_uxui_desc;
    }
}

function initLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        applyTranslations(currentLang);
    }
    updateLangButtons();
}

// ================= HERO SLIDER =================

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    const slideInterval = 10000; // Alternar cada 6 segundos

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, slideInterval);
}

document.addEventListener("DOMContentLoaded", function() {
    initTheme();
    initLanguage();
    initHeroSlider();

    // Video Modal
    const videoModal = document.getElementById('videoModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const orientationToggle = document.getElementById('orientationToggle');
    const fullscreenToggle = document.getElementById('fullscreenToggle');
    const videoWrapper = document.getElementById('videoWrapper');
    const modalVideo = document.getElementById('modalVideo');
    const orientationLabel = document.getElementById('orientationLabel');

    document.querySelector('.portfovideo-btn')?.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            videoModal.classList.add('active');
            if (modalVideo) {
                modalVideo.currentTime = 0;
                modalVideo.play().catch(() => {});
            }
        }
    });

    modalCloseBtn?.addEventListener('click', function() {
        videoModal.classList.remove('active');
        if (modalVideo) modalVideo.pause();
    });

    document.querySelector('.video-modal-backdrop')?.addEventListener('click', function() {
        videoModal.classList.remove('active');
        if (modalVideo) modalVideo.pause();
    });

    orientationToggle?.addEventListener('click', function() {
        const isLandscape = videoWrapper.classList.contains('landscape');
        if (isLandscape) {
            videoWrapper.classList.remove('landscape');
            videoWrapper.classList.add('portrait');
            orientationLabel.textContent = currentLang === 'es' ? 'Vertical' : 'Portrait';
        } else {
            videoWrapper.classList.remove('portrait');
            videoWrapper.classList.add('landscape');
            orientationLabel.textContent = currentLang === 'es' ? 'Horizontal' : 'Landscape';
        }
    });

    fullscreenToggle?.addEventListener('click', function() {
        const container = document.querySelector('.video-modal-container');
        if (!document.fullscreenElement) {
            container?.requestFullscreen().catch(() => {});
        } else {
            document.exitFullscreen().catch(() => {});
        }
    });

    window.addEventListener('resize', function() {
        applyTranslations(currentLang);
    });
});

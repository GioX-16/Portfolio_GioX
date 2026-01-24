// Función para verificar si un elemento está en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Función para manejar las animaciones
function handleScrollAnimations() {
    // Animaciones del portafolio
    const proyectos = document.querySelectorAll('.portafolio .galeria .proyecto');
    proyectos.forEach(proyecto => {
        if (isElementInViewport(proyecto)) {
            proyecto.classList.add('animate');
        } else {
            proyecto.classList.remove('animate');
        }
    });

    // Animaciones de Skills
    const skillColumns = document.querySelectorAll('.skills .fila .col');
    skillColumns.forEach(col => {
        if (isElementInViewport(col)) {
            col.classList.add('animate');
            // Animar las barras de skills dentro de la columna
            const skills = col.querySelectorAll('.skill');
            skills.forEach(skill => {
                skill.classList.add('animate');
            });
        } else {
            col.classList.remove('animate');
            const skills = col.querySelectorAll('.skill');
            skills.forEach(skill => {
                skill.classList.remove('animate');
            });
        }
    });

    // Animaciones del Curriculum
    const curriculumColumns = document.querySelectorAll('.curriculum .fila .col');
    curriculumColumns.forEach(col => {
        if (isElementInViewport(col)) {
            col.classList.add('animate');
            const items = col.querySelectorAll('.item');
            items.forEach(item => {
                item.classList.add('animate');
            });
        } else {
            col.classList.remove('animate');
            const items = col.querySelectorAll('.item');
            items.forEach(item => {
                item.classList.remove('animate');
            });
        }
    });

    // Animaciones del Stack
    const stackColumns = document.querySelectorAll('.stack .fila .col');
    stackColumns.forEach(col => {
        if (isElementInViewport(col)) {
            col.classList.add('animate');
        } else {
            col.classList.remove('animate');
        }
    });
}

// Agregar el evento de scroll
window.addEventListener('scroll', handleScrollAnimations);

// Ejecutar una vez al cargar la página
document.addEventListener('DOMContentLoaded', handleScrollAnimations); 
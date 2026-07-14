function createObserver(selector, className) {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);

                if (selector === '.skills .fila .col') {
                    entry.target.querySelectorAll('.skill').forEach(skill => {
                        skill.classList.add('animate');
                    });
                }

                if (selector === '.curriculum .fila .col') {
                    entry.target.querySelectorAll('.item').forEach(item => {
                        item.classList.add('animate');
                    });
                }
            } else {
                entry.target.classList.remove(className);

                if (selector === '.skills .fila .col') {
                    entry.target.querySelectorAll('.skill').forEach(skill => {
                        skill.classList.remove('animate');
                    });
                }

                if (selector === '.curriculum .fila .col') {
                    entry.target.querySelectorAll('.item').forEach(item => {
                        item.classList.remove('animate');
                    });
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -20% 0px'
    });

    elements.forEach(el => observer.observe(el));
}

function initScrollAnimations() {
    createObserver('.portafolio .galeria .proyecto', 'animate');
    createObserver('.skills .fila .col', 'animate');
    createObserver('.curriculum .fila .col', 'animate');
    createObserver('.stack .fila .col', 'animate');
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);

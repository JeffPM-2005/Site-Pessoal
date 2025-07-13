// --- ANIMAÇÃO DE FADE-IN AO ROLAR A PÁGINA ---
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);
sections.forEach(section => {
    observer.observe(section);
});


// --- LÓGICA DO MENU HAMBÚRGUER ---
const botaoMenu = document.getElementById('menu-botao');
const menuNavegacao = document.getElementById('menu-navegacao');

botaoMenu.addEventListener('click', () => {
    menuNavegacao.classList.toggle('menu-aberto');
});

// Fecha o menu ao clicar em um link
const linksDoMenu = menuNavegacao.querySelectorAll('a');
linksDoMenu.forEach(link => {
    link.addEventListener('click', () => {
        if (menuNavegacao.classList.contains('menu-aberto')) {
            menuNavegacao.classList.remove('menu-aberto');
        }
    });
});
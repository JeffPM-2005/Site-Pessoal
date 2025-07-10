// Animação de Fade-in ao Rolar a Página

// 1. Seleciona todos os elementos que queremos animar (neste caso, todas as seções)
const sections = document.querySelectorAll('section');

// 2. Cria as opções para o Intersection Observer
// O threshold: 0.1 significa que a animação começará quando 10% do elemento estiver visível.
const options = {
    root: null, // observa a viewport
    threshold: 0.1,
    rootMargin: '0px'
};

// 3. Cria o Intersection Observer
// Ele recebe uma função de callback que será executada quando a visibilidade de um elemento mudar
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        // Se o elemento está visível (isIntersecting)
        if (entry.isIntersecting) {
            // Adiciona a classe 'visible' ao elemento
            entry.target.classList.add('visible');
            // Para de observar o elemento para que a animação não se repita
            observer.unobserve(entry.target);
        }
    });
}, options);

// 4. Faz o observer "observar" cada uma das seções
sections.forEach(section => {
    observer.observe(section);
});
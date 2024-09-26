// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('.menu a');

// Adiciona um evento de clique para cada link
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Impede o comportamento padrão do link
        event.preventDefault();

        // Obtém o ID da seção correspondente
        const sectionId = this.getAttribute('href');

        // Seleciona a seção e rola até ela
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

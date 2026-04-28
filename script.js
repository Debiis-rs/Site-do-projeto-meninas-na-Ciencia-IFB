const linksInternos = document.querySelectorAll('a[href^="#"]');

function scrollSmooth(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollSmooth);
    });

const questions = document.querySelectorAll('.pergunta-faq');
    questions.forEach((question) => {
        question.addEventListener('click', () => {
            question.classList.toggle('aberta');
            const resposta = question.nextElementSibling;
            if (resposta) {
                resposta.classList.toggle('visivel');
            }
        });
    });

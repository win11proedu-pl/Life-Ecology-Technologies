// Płynne przewijanie
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efekt pojawiania się sekcji przy przewijaniu
const sections = document.querySelectorAll('#activities, #contact, #founders, #mission');

function handleScrollAnimation() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight * 0.75) {
            section.classList.add('section-visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation();

// Скрипт для будущих интерактивных элементов
console.log("Life Ecology Technologies: Wszystko działa!");

// Анимации при прокрутке с помощью библиотеки AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1200, // время анимации
        easing: 'ease-in-out', // эффект анимации
        once: true, // анимация будет выполняться только один раз при прокрутке
    });
});

// Активируем кнопку "Навигация" при прокрутке страницы
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Плавная прокрутка к разделам при клике на навигационные ссылки
const navLinks = document.querySelectorAll('a.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Убираем "#" из href
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70, // отступ от верхней части для фиксации меню
            behavior: 'smooth', // плавная прокрутка
        });
    });
});

// Добавляем плавную анимацию кнопке при наведении
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.3s ease-in-out';
    });

    button.addEventListener('mouseleave', function() {
        button.style.transform = 'scale(1)';
    });
});

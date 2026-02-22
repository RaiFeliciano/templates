const bar = document.querySelector('.hidden');
const nav = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

bar.addEventListener('click', () => {

    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        navLinks.forEach(link => {
            link.style.animation = 'slideIn 1s ease-out forwards';
        });
    } else {
        navLinks.forEach(link => {
            link.style.animation = 'slideOut 1s ease-out forwards';
        });
    }
    
});
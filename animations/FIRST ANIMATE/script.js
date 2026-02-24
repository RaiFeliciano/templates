const container = document.querySelector('.container');
const modal = document.querySelector('.modal');

const open = document.getElementById('show');
const close = document.getElementById('close');

/* OPEN MODAL */
open.addEventListener('click', () => {
    container.classList.add('active');
    modal.style.animation = "open 0.8s forwards";
        currentIndex = 0;
        text.innerText = originalText;
        animateText();
});

/* CLOSE MODAL */
close.addEventListener('click', () => {

    const h1 = document.querySelector('.modal h1');
    const p = document.querySelector('.modal p');
    const button = document.querySelector('.modal button');

    /* Fade text out */
    h1.style.animation = "fadeOut 0.3s ";
    p.style.animation = "fadeOut 0.3s ";
    button.style.animation = "fadeOut 0.3s ";

    /* Close width first */
    modal.style.animation = "closeWidth 0.5s forwards";

    /* Then close height */
    setTimeout(() => {
        modal.style.animation = "closeHeight 0.5s forwards";
    }, 500);

    /* Remove modal after animation */
    setTimeout(() => {

        container.classList.remove('active');

        h1.style.animation = "showText 1s linear 2s forwards";
        p.style.animation = "showText 1s linear 2s forwards";
        button.style.animation = "showText 1s linear 2s forwards";

<<<<<<< HEAD
    }, 1000);
=======
    }, 2000);
>>>>>>> 81e0aa9016e347857add8d46cd0b29b3e3d812fd
});


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links__link');

    burger.addEventListener('click', () => {
        nav.classList.toggle('links--appear');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.25s ease forwards ${index * 0.25 + 0.25}s`;
            }
        })
    });
}

const app = () => {
    navSlide();
}

app();
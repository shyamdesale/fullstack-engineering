const track = document.querySelector('.track');
const slides = document.querySelectorAll('.slide');

let index = 1;

const gap = 60;

function update() {
    const slideWidth = slides[0].offsetWidth + gap;
    track.style.transform = `translateX(calc(50% - ${slideWidth * index}px - ${slides[0].offsetWidth / 2}px))`;

    slides.forEach((s, i) => {
        if (i === index) {
            s.style.opacity = '1';
            s.style.transform = 'scale(1)';
        } else {
            s.style.opacity = '0.45';
            s.style.transform = 'scale(0.88)';
        }
    });
}

function autoSlide() {
    index++;
    if (index >= slides.length) index = 0;
    update();
}

window.addEventListener('load', update);
window.addEventListener('resize', update);

setInterval(autoSlide, 3500);

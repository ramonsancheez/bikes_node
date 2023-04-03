var body_el = document.querySelector('body');
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        body_el.classList.add('scrolling-active');
    } else {
        body_el.classList.remove('scrolling-active');
    }
});
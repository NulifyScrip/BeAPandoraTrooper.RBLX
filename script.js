// Smooth scrolling

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener('click', e => {

        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

});

// Simple navbar shadow on scroll

window.addEventListener('scroll', () => {

    const nav = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,.25)';
    } else {
        nav.style.boxShadow = 'none';
    }

});
document.addEventListener("DOMContentLoaded", () => {
    loadPart("header", "header.html");
    loadPart("footer", "footer.html");
});

function loadPart(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        });
}
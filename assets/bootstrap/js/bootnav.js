$(document).ready(function () {
    $('.dropdown').hover(function () {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
    }, function () {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
    });
});
function change(element) {
    element.addEventListener("mouseenter", function() {
        element.classList.add("sizeimg");
    });

    element.addEventListener("mouseleave", function() {
        element.classList.remove("sizeimg");

    });
};
const image = document.querySelector('.image-container img');
const container = document.querySelector('.image-container');

function handleMouseMove(e) {
    const boundingRect = container.getBoundingClientRect();
    const offsetX = e.clientX - boundingRect.left;
    const offsetY = e.clientY - boundingRect.top;

    const centerX = boundingRect.width / 2;
    const centerY = boundingRect.height / 2;

    image.style.transform = `scale(2)`;
}

function handleMouseLeave() {
    image.style.transform = 'scale(1) translate(0, 0)';
}

function isMobileOrTablet() {
    return window.innerWidth <= 768;
}

if (!isMobileOrTablet()) {
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
}

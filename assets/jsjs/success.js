document.addEventListener('DOMContentLoaded', () => {
    const galleryContainers = document.querySelectorAll('.gallery-container');
    const buttons = document.querySelectorAll('.circle-button');

    function toggleGallery(galleryContainer, showButton) {
        showButton.addEventListener('click', () => {
            galleryContainers.forEach(container => {
                if (container !== galleryContainer) {
                    container.style.display = 'none';
                }
            });

            galleryContainer.style.display = galleryContainer.style.display === 'flex' ? 'none' : 'flex';
            buttons.forEach(button => {
                button.textContent = `Show ${button.dataset.galleryName}`;
            });

            if (galleryContainer.style.display === 'flex') {
                showButton.textContent = `Hide ${showButton.dataset.galleryName}`;
            }
        });
    }

    buttons.forEach((button, index) => {
        const galleryContainer = document.getElementById(`galleryContainer${index + 1}`);
        button.dataset.galleryName = `Gallery ${index + 1}`;
        galleryContainer.dataset.galleryName = `Gallery ${index + 1}`;
        toggleGallery(galleryContainer, button);

        if (index === 0) {
            galleryContainer.style.display = 'flex';
            button.textContent = `Hide ${button.dataset.galleryName}`;
        }
    });

    const rectangles = document.querySelectorAll('.rectangle');
    rectangles.forEach(rectangle => {
        rectangle.addEventListener('click', (event) => {
            rectangle.classList.toggle('enlarged');
            event.stopPropagation();
        });

        const closeButton = document.createElement('span');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';
        rectangle.appendChild(closeButton);

        closeButton.addEventListener('click', (event) => {
            rectangle.classList.remove('enlarged');
            event.stopPropagation();
        });
    });

    document.addEventListener('click', () => {
        rectangles.forEach(rectangle => {
            rectangle.classList.remove('enlarged');
        });
    });
});

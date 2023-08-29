function toggleGallery(galleryContainer, showButton) {
    const rectangles = galleryContainer.querySelectorAll('.rectangle');

    showButton.addEventListener('click', () => {
        const allGalleryContainers = document.querySelectorAll('.gallery-container');
        
        allGalleryContainers.forEach(container => {
            if (container !== galleryContainer && container.style.display === 'flex') {
                container.style.display = 'none';
                const correspondingButton = document.querySelector(`[data-gallery-name="${container.dataset.galleryName}"]`);
                correspondingButton.textContent = `Show ${container.dataset.galleryName}`;
            }
        });
        
        galleryContainer.style.display = galleryContainer.style.display === 'flex' ? 'none' : 'flex';
        showButton.textContent = galleryContainer.style.display === 'flex' ? `Hide ${showButton.dataset.galleryName}` : `Show ${showButton.dataset.galleryName}`;
    });

    rectangles.forEach(rectangle => {
        rectangle.addEventListener('click', (event) => {
            const isEnlarged = rectangle.classList.contains('enlarged');
            rectangles.forEach(r => r.classList.remove('enlarged'));
            if (!isEnlarged) {
                rectangle.classList.add('enlarged');
                event.stopPropagation();
            }
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

    document.addEventListener('click', (event) => {
        if (!event.target.classList.contains('rectangle') && event.target !== showButton) {
            rectangles.forEach(rectangle => {
                rectangle.classList.remove('enlarged');
            });
        }
    });
}

for (let i = 1; i <= 9; i++) {
      const showButton = document.getElementById(`showGallery${i}`);
      const galleryContainer = document.getElementById(`galleryContainer${i}`);
      showButton.dataset.galleryName = `Gallery ${i}`;
      galleryContainer.dataset.galleryName = `Gallery ${i}`;
      toggleGallery(galleryContainer, showButton);

      if (i === 1) {
        galleryContainer.style.display = 'flex';
        showButton.textContent = `Hide ${showButton.dataset.galleryName}`;
      }
    }

    // Prevent video playback issues on mobile
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.addEventListener('play', () => {
        videos.forEach(otherVideo => {
          if (otherVideo !== video) {
            otherVideo.pause();
          }
        });
      });
    });

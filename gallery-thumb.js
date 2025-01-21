// Adding images to thumbnails
function setThumbImages(data) {
  const thumbnails = document.querySelectorAll('.thumb-image .tn-atom');
  thumbnails.forEach((thumbnail, index) => {
    if (data[index] && data[index].image) {
      thumbnail.style.backgroundImage = `url(${data[index].image})`;
      thumbnail.style.backgroundSize = 'cover';
      thumbnail.style.backgroundPosition = 'center';
    }
  });
}
setThumbImages(data);

// Setting the main image
function setMainImage(data, index) {
  const mainImage = document.querySelector('.main-image .tn-atom');
  if (mainImage && data[index] && data[index].image) {
    mainImage.style.backgroundImage = `url(${data[index].image})`;
    mainImage.style.backgroundSize = 'cover';
    mainImage.style.backgroundPosition = 'center';
  }
}
setMainImage(data, activeThumb);

// Adding data attributes to thumbnails
function setDataThumbnails(data) {
  const thumbnails = document.querySelectorAll('.thumb-image .tn-atom');
  thumbnails.forEach((thumbnail, index) => {
    if (data[index] && data[index].name) {
      thumbnail.dataset.title = data[index].name;
    }
  });
}
setDataThumbnails(data);

// Setting the main title
function setMainTitle(data, index) {
  const mainTitle = document.querySelector('.main-title .tn-atom');
  if (mainTitle && data[index] && data[index].name) {
    mainTitle.textContent = data[index].name;
  }
}
setMainTitle(data, activeThumb);

// Setting the main text
function setMainText(data, index) {
  const mainText = document.querySelector('.main-text .tn-atom');
  if (mainText && data[index] && data[index].text) {
    mainText.textContent = data[index].text;
  }
}
setMainText(data, activeThumb);

// Updating the title
function updateTitle(thumbnail) {
  const mainTitle = document.querySelector('.main-title .tn-atom');
  if (mainTitle && thumbnail.dataset.title) {
    mainTitle.textContent = thumbnail.dataset.title;
  }
}

// Updating the text
function updateText(thumbnail, data, index) {
  const mainText = document.querySelector('.main-text .tn-atom');
  if (mainText && data[index] && data[index].text) {
    mainText.textContent = data[index].text;
  }
}

// Main function
function changeImage() {
  let isAnimating = false;

  const thumbnails = document.querySelectorAll('.thumb-image .tn-atom');
  const mainImage = document.querySelector('.main-image .tn-atom');
  const mainTitle = document.querySelector('.main-title .tn-atom');
  const mainText = document.querySelector('.main-text .tn-atom');

  // Ensure active thumbnail exists before using
  if (thumbnails[activeThumb]) {
    thumbnails[activeThumb].classList.add('active');
    updateTitle(thumbnails[activeThumb]);
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      if (isAnimating || thumbnail.classList.contains('active')) {
        return;
      }

      isAnimating = true;

      // Update active thumbnail
      thumbnails.forEach((el) => el.classList.remove('active'));
      thumbnail.classList.add('active');

      // Update the main image
      if (mainImage) {
        mainImage.style.backgroundImage = thumbnail.style.backgroundImage;
        mainImage.classList.add('animate');
      }

      // Animate title and text if they exist
      if (mainTitle) {
        mainTitle.classList.add('animate');
      }
      if (mainText) {
        mainText.classList.add('animate');
      }

      setTimeout(() => {
        if (mainImage) {
          mainImage.classList.remove('animate');
        }
        if (mainTitle) {
          mainTitle.classList.remove('animate');
        }
        if (mainText) {
          mainText.classList.remove('animate');
        }

        updateTitle(thumbnail);
        updateText(thumbnail, data, index);

        setTimeout(() => {
          isAnimating = false;
        }, blockTime);
      }, transitionTime);
    });
  });
}

changeImage();

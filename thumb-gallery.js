
function setThumbImages(data) {
  const thumbnails = document.querySelectorAll('.thumb-image ')
  thumbnails.forEach((thumbnail, index) => {
      thumbnail.style.backgroundImage = `url(${data[index].image})`
      thumbnail.style.backgroundSize = 'cover'
      thumbnail.style.backgroundPosition = 'center'
    
  })
}
setThumbImages(data)

function setMainImage(data, index) {
  const mainImage = document.querySelector('.main-image')
  mainImage.style.backgroundImage = `url(${data[index].image})`
  mainImage.style.backgroundSize = 'cover'
  mainImage.style.backgroundPosition = 'center'
}

setMainImage(data, activeMain)

function setDataThumnails(data) {
  const thumbnails = document.querySelectorAll('.thumb-image ')
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.dataset.title = data[index].name
  })
}

setDataThumnails(data)

function setMainTitle(data, index) {
  const mainTitle = document.querySelector('.main__title')
  mainTitle.textContent = data[index].name
}

setMainTitle(data, 0)

function setmainText(data, index) {
  const mainText = document.querySelector('.main__text')
  mainText.textContent = data[index].text
}

setmainText(data, 0)

function updateTitle(thumbnail) {
  const mainTitle = document.querySelector('.main__title')
  mainTitle.textContent = thumbnail.dataset.title
}

function updateText(thumbnail, data, index) {
  const mainText = document.querySelector('.main__text')
  mainText.textContent = data[index].text
}

function changeImage() {
  let isAnimating = false

  const thumbnails = document.querySelectorAll('.thumb-image')
  const mainImage = document.querySelector('.main-image')
  const mainContent = document.querySelector('.main__content')

  activeThumb.classList.add('active')
  updateTitle(activeThumb)

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      if (isAnimating || thumbnail.classList.contains('active')) {
        return
      }

      isAnimating = true

      thumbnails.forEach((el) => el.classList.remove('active'))
      mainImage.style.backgroundImage = thumbnail.style.backgroundImage
      thumbnail.classList.add('active')
      mainContent.classList.add('animate')
      mainImage.classList.add('animate')

      setTimeout(() => {
        mainContent.classList.remove('animate')
        mainImage.classList.remove('animate')
        updateTitle(thumbnail)
        updateText(thumbnail, data, index)
       setTimeout(() => {
        isAnimating = false
       }, blockTime);
      }, transitionTime)
    })
  })
}

changeImage()

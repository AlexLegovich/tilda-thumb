    //добавляем изображения в тамбнэйлы
    
    function setThumbImages(data) {
  const thumbnails = document.querySelectorAll('.thumb-image .tn-atom ')
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.style.backgroundImage = `url(${data[index].image})`
    thumbnail.style.backgroundSize = 'cover'
    thumbnail.style.backgroundPosition = 'center'
  })
}
setThumbImages(data)


//главное фото

function setMainImage(data,index) {
  const mainImage = document.querySelector('.main-image .tn-atom');
  mainImage.style.backgroundImage = `url(${data[index].image})`
  mainImage.style.backgroundSize = 'cover'
  mainImage.style.backgroundPosition = 'center'
}

setMainImage(data,activeThumb)
    
    
 //формируем дата аттрибут
 
    function setDataThumbnails(data){
  const thumbnails = document.querySelectorAll('.thumb-image .tn-atom')
  thumbnails.forEach((thumbnail, index)=>{
    thumbnail.dataset.title = data[index].name
  })
}

setDataThumbnails(data)


//формируем заголовок

function setMainTitle(data,index){
  const mainTitle = document.querySelector('.main-title .tn-atom')
  mainTitle.textContent = data[index].name
 }
 
 setMainTitle(data,activeThumb)
 
 //формируем текст
 function setmainText(data, index){
  const mainText = document.querySelector('.main-text .tn-atom')
  mainText.textContent = data[index].text
}

setmainText(data,activeThumb)
 
 
 //обновление заголовка
 function updateTitle(thumbnail) {
  const mainTitle = document.querySelector('.main-title .tn-atom');
  mainTitle.textContent = thumbnail.dataset.title;
}

//обновление текста
function updateText(thumbnail,data,index){
  const mainText = document.querySelector('.main-text .tn-atom')
  mainText.textContent = data[index].text
}


//главная функция



function changeImage(){
    let isAnimating = false

  const thumbnails = document.querySelectorAll('.thumb-image .tn-atom')
  const mainImage = document.querySelector('.main-image .tn-atom');
  const mainTitle = document.querySelector('.main-title .tn-atom');
  const mainText = document.querySelector('.main-text .tn-atom')

  thumbnails[activeThumb].classList.add('active');
  updateTitle(thumbnails[activeThumb]);

  thumbnails.forEach((thumbnail,index)=>{
    thumbnail.addEventListener('click',()=>{
      if (isAnimating || thumbnail.classList.contains('active')) {
        return
      }
      
            isAnimating = true;
      thumbnails.forEach((el)=> el.classList.remove('active'))
      mainImage.style.backgroundImage = thumbnail.style.backgroundImage;
      thumbnail.classList.add('active')
      mainImage.classList.add('animate')
      mainTitle.classList.add('animate')
      mainText.classList.add('animate')

      setTimeout(() => {
        mainImage.classList.remove('animate')
        mainTitle.classList.remove('animate')
        mainText.classList.remove('animate')
        updateTitle(thumbnail)
        updateText(thumbnail, data, index);
               setTimeout(() => {
        isAnimating = false
       }, blockTime);
      }, transitionTime);
      
    })
  })

}

changeImage()


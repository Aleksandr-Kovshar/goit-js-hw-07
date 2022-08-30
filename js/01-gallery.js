import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



function creatGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}

const itemsMarkup = creatGalleryItemsMarkup(galleryItems);

const galleryList = document.querySelector('.gallery');
// galleryList.innerHTML = creatGalleryItemsMarkup(galleryItems); 
galleryList.insertAdjacentHTML('beforeend', itemsMarkup)


function creatModslWindow (event){

    const ImgUrlOriginal = event.target.dataset.source;
  
    const instance = basicLightbox.create(`
    <img src="${ImgUrlOriginal}" width="800" height="600">
`)

instance.show(
  document.addEventListener('keydown', (event) => {
    if (event.key && event.code === 'Escape'){
      instance.close()
    }
  })
  )
}

function openModslWindow (event){


  if (!event.target.classList.contains('gallery__image')){
    return
  } 
  
  creatModslWindow(event)
  event.preventDefault();
};

galleryList.addEventListener ('click', openModslWindow);
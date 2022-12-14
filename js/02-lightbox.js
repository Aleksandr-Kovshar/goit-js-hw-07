import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


function creatGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join('');
}

const itemsMarkup = creatGalleryItemsMarkup(galleryItems);

const galleryList = document.querySelector('.gallery');
// galleryList.innerHTML = creatGalleryItemsMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', itemsMarkup);


  
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});


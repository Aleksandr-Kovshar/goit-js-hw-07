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





galleryList.addEventListener ('click', openModslWindow);

function openModslWindow (event){

    const ImgUrlOriginal = event.target.dataset.source;
    if (!event.target.classList.contains('.gallery__link')){
        return
    } 

    const instance = basicLightbox.create(`
    <img src="${ImgUrlOriginal}" width="800" height="600">
`)

instance.show()
event.preventDefault();
}



// const makeGalleryItemMarkup = (arr) => {
//     return arr
//         .map(({ description: descr, preview, original: orig }) => {
//             return `<div class="gallery__item">
//                         <a class="gallery__link" href="large-image.jpg">
//                             <img
//                                 class="gallery__image"
//                                 src="${preview}"
//                                 data-source="${orig}"
//                                 alt="${descr}"
//                                 />
//                         </a>
//                     </div>`;
//         })
//         .join('');
// };

// const galleryContainerRef = document.querySelector('.gallery');
// galleryContainerRef.innerHTML = makeGalleryItemMarkup(galleryItems);

// const createLightboxInstance = (e) => {
//     const targetedImgUrl = e.target.dataset.source;
//     const instance = basicLightbox.create(`
//     <img src="${targetedImgUrl}" width="800" height="600">
//     `);

//     instance.show(
//         document.addEventListener('keydown', (e) => {
//             if (e.key && e.code === 'Escape') {
//                 instance.close();
//             }
//         })
//     );
// };

// const onGalleryImgClick = (e) => {
//     if (e.target.nodeName !== 'IMG') return;

//     createLightboxInstance(e);
//     e.preventDefault();
// };

// galleryContainerRef.addEventListener('click', onGalleryImgClick);
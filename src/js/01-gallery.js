import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const container = document.querySelector(".gallery");
const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
);
container.insertAdjacentHTML("beforeend", markup.join(""));
container.addEventListener("click", onClick);

function onClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const imgSrc =
    evt.target.dataset.source ??
    evt.target.closest(".gallery__image").dataset.source;
  const instance = basicLightbox.create(
    `
<img src="${imgSrc}" class="modal-img" width="800" height="600">`);

  instance.show();
  evt.preventDefault();
}

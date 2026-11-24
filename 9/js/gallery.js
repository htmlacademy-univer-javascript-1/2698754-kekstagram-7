import { openBigPhoto } from './big-photo.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const listFragment = document.createDocumentFragment();

const renderPhotos = (photos) => {
  photos.forEach((photo) => {
    const { url, description, likes, comments } = photo;
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPhoto(photo);
    });
    listFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(listFragment);
};

export {renderPhotos};

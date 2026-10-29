import { isEscapeKey } from './util.js';

const bigPhotoElement = document.querySelector('.big-picture');
const bigPhotoImgElement = bigPhotoElement.querySelector('.big-picture__img img');
const bigPhotoCloseElement = bigPhotoElement.querySelector('.big-picture__cancel');
const socialCaptionElement = bigPhotoElement.querySelector('.social__caption');
const socialCommentsElement = bigPhotoElement.querySelector('.social__comments');
const socialCommentCountElement = bigPhotoElement.querySelector('.social__comment-count');
const likesCountElement = bigPhotoElement.querySelector('.likes-count');
const commentsLoaderElement = bigPhotoElement.querySelector('.comments-loader');
const commentsCountElement = bigPhotoElement.querySelector('.comments-count');

const createComment = ({ avatar, name, message }) => {
  const avatarElement = document.createElement('img');
  avatarElement.classList.add('social__picture');
  avatarElement.src = avatar;
  avatarElement.alt = name;
  avatarElement.width = 35;
  avatarElement.height = 35;

  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const textElement = document.createElement('p');
  textElement.classList.add('social__text');
  textElement.textContent = message;

  commentElement.append(avatarElement, textElement);
  return commentElement;
};

const renderComments = (comments) => {
  socialCommentsElement.innerHTML = '';
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    fragment.append(createComment(comment));
  });
  socialCommentsElement.append(fragment);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

function closeBigPhoto () {
  bigPhotoElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

bigPhotoCloseElement.addEventListener('click', closeBigPhoto);

const openBigPhoto = (data) => {
  bigPhotoElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  socialCommentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  commentsCountElement.textContent = data.comments.length;
  socialCaptionElement.textContent = data.description;
  bigPhotoImgElement.src = data.url;
  bigPhotoImgElement.alt = data.description;
  likesCountElement.textContent = data.likes;
  renderComments(data.comments);
};

export {openBigPhoto};

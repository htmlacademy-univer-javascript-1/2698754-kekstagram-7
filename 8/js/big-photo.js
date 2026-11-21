import { isEscapeKey } from './util.js';

const COMMENTS_STEP = 5;

const bigPhotoElement = document.querySelector('.big-picture');
const bigPhotoImgElement = bigPhotoElement.querySelector('.big-picture__img img');
const bigPhotoCloseElement = bigPhotoElement.querySelector('.big-picture__cancel');
const socialCaptionElement = bigPhotoElement.querySelector('.social__caption');
const socialCommentsElement = bigPhotoElement.querySelector('.social__comments');
const socialCommentCountElement = bigPhotoElement.querySelector('.social__comment-count');
const likesCountElement = bigPhotoElement.querySelector('.likes-count');
const commentsLoaderElement = bigPhotoElement.querySelector('.comments-loader');

let currentComments = [];
let commentsShown = 0;

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

const renderComments = () => {
  commentsShown += COMMENTS_STEP;

  if (commentsShown >= currentComments.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsShown = currentComments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    fragment.append(createComment(currentComments[i]));
  }

  socialCommentsElement.innerHTML = '';
  socialCommentsElement.append(fragment);
  socialCommentCountElement.innerHTML = `${commentsShown} из <span class="comments-count">${currentComments.length}</span> комментариев`;
};

const onCommentsLoaderClick = () => {
  renderComments();
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
commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

const openBigPhoto = (data) => {
  bigPhotoElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  socialCommentCountElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  socialCaptionElement.textContent = data.description;
  bigPhotoImgElement.src = data.url;
  bigPhotoImgElement.alt = data.description;
  likesCountElement.textContent = data.likes;

  currentComments = data.comments;
  commentsShown = 0;
  renderComments();
};

export { openBigPhoto };

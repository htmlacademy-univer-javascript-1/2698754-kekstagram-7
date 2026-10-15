import { getRandomInteger, getRandomArrayElement } from './util.js';

const NAMES = [
  'Александр',
  'Мария',
  'Дмитрий',
  'Елена',
  'Иван',
  'Ольга',
  'Сергей',
  'Анна',
  'Андрей',
  'Татьяна'
];

const DESCRIPTIONS = [
  'Красивый закат',
  'Прекрасный пейзаж',
  'Весёлый день',
  'Незабываемое путешествие',
  'Счастливые моменты',
  'Вдохновляющий вид',
  'Романтическая прогулка',
  'Захватывающий спорт',
  'Творческая фотография',
  'Милые животные'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;
const MAX_PHOTO_ID = 25;

let commentIdCounter = 1;

const createComment = () => {
  const sentenceCount = getRandomInteger(1,2);
  let message = getRandomArrayElement(MESSAGES);
  if (sentenceCount === 2) {
    message += `${getRandomArrayElement(MESSAGES)}`;
  }
  return {
    id: commentIdCounter++,
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER)}.svg`,
    message: message,
    name: getRandomArrayElement(NAMES)
  };
};

const createPhoto = (id) => {
  const commentCount = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
  const comments = Array.from({ length: commentCount }, createComment);
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: comments
  };
};

const createPhotos = () => Array.from({ length: MAX_PHOTO_ID }, (_, index) => createPhoto(index + 1));

export {createPhotos};

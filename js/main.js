import { createPhotos } from './data.js';
import { renderPhotos } from './gallery.js';
import './form.js';

const photos = createPhotos();
renderPhotos(photos);

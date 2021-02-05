import {
  deleteImage,
  getImageById,
  getImages,
  postImage,
  updateImage
} from '../services/amphead-api';

export const SET_IMAGES = 'SET_IMAGES';
export const setImages = images => ({
  type: SET_IMAGES,
  payload: images
});

export const SET_IMAGE = 'SET_IMAGE';
export const setImage = image => ({
  type: SET_IMAGE,
  payload: image
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

export const APPEND_IMAGE = 'APPEND_IMAGE';
export const appendImage = image => ({
  type: APPEND_IMAGE,
  payload: image
});

export const DELETE_IMAGE = 'DELETE_IMAGE';

export const fetchImages = () => dispatch => {
  getImages()
    .then(images => {
      dispatch(setImages(images));
    })
    .finally(() => dispatch(setLoading(false)));
};

export const fetchImage = id => dispatch => {
  getImageById(id)
    .then(image => {
      dispatch(setImage(image));
    })
    .finally(() => dispatch(setLoading(false)));
};

export const removeImage = id => dispatch => {
  deleteImage(id)
    .then(image => {
      dispatch({
        type: DELETE_IMAGE,
        payload: image.id
      });
    });
};

export const createImage = image => dispatch => {
  postImage(image)
    .then(createdImage => {
      dispatch(appendImage(createdImage));
    });
};

export const changeImage = (id, image) => dispatch => {
  updateImage(id, image)
    .then(updatedImage => {
      dispatch(appendImage(updatedImage));
    });
};

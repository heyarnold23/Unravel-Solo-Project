import { csrfFetch } from "./csrf";

const SET_ANNOTATIONS = 'annotations/setAnnotations';
const ADD_ANNOTATION = 'annotations/addAnnotation'
const UPDATE_ANNOTATION = "annotations/update";
const REMOVE_ANNOTATION = 'annotations/delete';

const setAnnotations = (annotations) => ({
    type: SET_ANNOTATIONS,
    annotations
});

const addAnnotation = (newAnno) => ({
    type: ADD_ANNOTATION,
    newAnno
});

const update = (annotation) => ({
    type: UPDATE_ANNOTATION,
    annotation,
});

const removeAnnotation = (annotationId) => ({
    type: REMOVE_ANNOTATION,
    annotationId,
});


export const getAnnotations = (id) => async (dispatch) => {
    const response = await fetch(`/api/songs/${id}/annotations`);
    if (response.ok) {
    const annotations = await response.json();
    dispatch(setAnnotations(annotations));
    }
};

export const createAnnotation = (annotation) => async (dispatch) => {
    const response = await csrfFetch (`/api/songs/${annotation.songId}/annotations`, {
    //   credentials:'include',
      method: 'POST',
      body: JSON.stringify(annotation)
    });
    if(response.ok) {
      const newAnno = await response.json();
      dispatch(addAnnotation(newAnno));
      return (newAnno);
    }
};

export const editAnnotation = (annotationData) => async (dispatch) => {
    const response = await csrfFetch (`/api/annotations/${annotationData.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(annotationData),
    });
    if(response.ok) {
      const editAnno = await response.json();
      dispatch(update(editAnno));
      return editAnno;
    }
};

export const deleteAnnotation = (annotationData) => async (dispatch) => {
    const response = await csrfFetch (`/api/annotations/${annotationData.id}`, {
        method: 'DELETE',
    });
    if(response.ok) {
        const deleteAnnotation = await response.json();
        dispatch(removeAnnotation(deleteAnnotation));
        return (deleteAnnotation);
    }
};

const initialState = {};

export const annotationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ANNOTATIONS:
            const newState = {};
            action.annotations.forEach(annotation => newState[annotation.id] = annotation);
            return newState;
        case ADD_ANNOTATION:
            return {
                ...state,
                  [action.newAnno.id]: action.newAnno,
                };
        case UPDATE_ANNOTATION: {
            return {
                ...state,
                [action.annotation.id]: action.annotation,
            };
        }
        case REMOVE_ANNOTATION: {
            const newState = { ...state };
            delete newState[action.annotationId];
            return newState;
        }
        default:
            return state;
    };
};

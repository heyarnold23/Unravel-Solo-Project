import { csrfFetch } from "./csrf";

const SET_ANNOTATIONS = 'comments/setAnnotations';
const ADD_ANNOTATION = 'comments/addAnnotation'
// const UPDATE_COMMENT = "comments/update";
// const REMOVE_COMMENT = 'comments/delete';

const setAnnotations = (annotations) => ({
    type: SET_ANNOTATIONS,
    annotations
});

const addAnnotation = (newAnno) => ({
    type: ADD_ANNOTATION,
    newAnno
});

// const update = (comment) => ({
//     type: UPDATE_COMMENT,
//     comment,
// });

// const removeComment = (commentId) => ({
//     type: REMOVE_COMMENT,
//     commentId,
// });


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
      // console.log('--------- user',newComment);
      return (newAnno);
    }
};

// export const editComment = (commentData) => async (dispatch) => {
//     const response = await csrfFetch (`/api/comments/${commentData.id}`, {
//       method: 'PUT',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(commentData),
//     });
//     if(response.ok) {
//       const editComment = await response.json();
//       dispatch(update(editComment));
//       return editComment;
//     }
// };

// export const deleteComment = (commentData) => async (dispatch) => {
//     const response = await csrfFetch (`/api/comments/${commentData.id}`, {
//         method: 'DELETE',
//     });
//     if(response.ok) {
//         const deleteComment = await response.json();
//         dispatch(removeComment(deleteComment));
//         console.log(deleteComment);
//         return (deleteComment);
//     }
// };

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
        // case UPDATE_COMMENT: {
        //     return {
        //         ...state,
        //         [action.comment.id]: action.comment,
        //     };
        // }
        // case REMOVE_COMMENT: {
        //     const newState = { ...state };
        //     delete newState[action.commentId];
        //     return newState;
        // }
        default:
            return state;

    };
};

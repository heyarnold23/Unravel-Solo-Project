import { csrfFetch } from "./csrf";

//window.store.dispatch(window.commentActions.getComments(id));

const SET_COMMENTS = 'comments/setComments';
const ADD_COMMENT = 'comments/addComment'
const UPDATE_COMMENT = "items/UPDATE_COMMENT";


const setComments = (comments) => ({
    type: SET_COMMENTS,
    comments
});

const addComment = (newComment) => ({
    type: ADD_COMMENT,
    newComment
})

const update = (comment) => ({
    type: UPDATE_COMMENT,
    comment,
});


export const getComments = (id) => async (dispatch) => {
    const response = await fetch(`/api/songs/${id}/comments`);
    if (response.ok) {
    const comments = await response.json();
    dispatch(setComments(comments));
    }
};

export const createComment = (comment) => async (dispatch) => {
    const response = await csrfFetch (`/api/songs/${comment.songId}/comments`, {
    //   credentials:'include',
      method: 'POST',
      body: JSON.stringify(comment)
    });
    if(response.ok) {
      const newComment = await response.json();
      dispatch(addComment(newComment));
      // console.log('--------- user',newComment);
      return (newComment);
    }
};

export const editComment = (commentData) => async (dispatch) => {
    const response = await csrfFetch (`/api/comments/${commentData.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(commentData),
    });
    if(response.ok) {
      const editComment = await response.json();
      dispatch(update(editComment));
      return editComment;
    }
};

const initialState = {};
// const initialState = { entries: {}, isLoading: true };


export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS:
            const newState = {};
            action.comments.forEach(comment => newState[comment.id] = comment);
            return newState;
        case ADD_COMMENT:
            return {
                ...state,
                  [action.newComment.id]: action.newComment,
                };
        case UPDATE_COMMENT: {
            return {
                ...state,
                [action.comment.id]: action.comment,
            };
        }
        default:
            return state;

    };
};

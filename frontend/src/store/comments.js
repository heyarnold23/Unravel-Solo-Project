//window.store.dispatch(window.commentActions.getComments(id));

const SET_COMMENTS = 'comments/setComments';

const setComments = (comments) => ({
    type: SET_COMMENTS,
    comments
});


export const getComments = (id) => async (dispatch) => {
    const response = await fetch(`/api/songs/${id}/comments`);
    if (response.ok) {
    const comments = await response.json();
    dispatch(setComments(comments));
    }
};

const initialState = {};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS:
            const newState = {};
            action.comments.forEach(comment => newState[comment.id] = comment);
            return newState;
        default:
            return state;
    };
};

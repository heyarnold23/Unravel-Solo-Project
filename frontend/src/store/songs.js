const SET_SONGS = 'songs/setSongs';

const setSongs = (songs) => ({
    type: SET_SONGS,
    songs: songs,
});

export const getSongs = () => async (dispatch) => {
    const res = await fetch('/api/songs');
    const songs = await res.json();
    dispatch(setSongs(songs));
};

const initialState = {};

export const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SONGS:
            const newState = {};
            action.songs.forEach(song => newState[song.id] = song);
            return newState;
        default:
            return state;
    };
};

//window.store.dispatch(window.songActions.getSongPage(id));

const SET_SONGS = 'songs/setSongs';
// const ADD_SONG = 'songs/addSong';
const ONE_SONG = 'songs/oneSong';

const setSongs = (songs) => ({
    type: SET_SONGS,
    songs: songs,
});

// const addSong = song => ({
//     type: ADD_SONG,
//     song,
// });

export const oneSong = (song) => ({
    type: ONE_SONG,
    song: song
})

export const getSongs = () => async (dispatch) => {
    const response = await fetch('/api/songs');
    if (response.ok) {
    const songs = await response.json();
    dispatch(setSongs(songs));
    }
};

export const getSongPage = (id) => async dispatch => {
    const response = await fetch(`/api/songs/${id}`);
    if (response.ok) {
      const page = await response.json();
      dispatch(oneSong(page))
    }
};

const initialState = {};

export const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SONGS:
            const newState = {};
            action.songs.forEach(song => newState[song.id] = song);
            return newState;
        case ONE_SONG:
            const oneSong = {...action.song};
            // action.song.forEach(song => oneSong[song.id] = song);
            return oneSong;
        // case ADD_SONG: {
        //     if (!state[action.song.id]) {
        //         const newState = {
        //         ...state,
        //         [action.song.id]: action.song
        //         };
        //         const songList = newState.list.map(id => newState[id]);
        //         songList.push(action.song);
        //         newState.list = sortList(songList);
        //         return newState;
        //     }
        //     return {
        //         ...state,
        //         [action.song.id]: {
        //         ...state[action.song.id],
        //         ...action.song,
        //         }
        //     };
        //     }
        default:
            return state;
    };
};

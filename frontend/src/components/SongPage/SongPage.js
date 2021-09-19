import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getSongs} from '../../store/songs';
import CommentForm from '../CommentForm';
import Comments from '../Comments';
import SongLyrics from '../SongLyrics';

import styles from './SongPage.module.css';

export default function SongPage(){
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getSongs())
    },[dispatch, id])

    const songsObject = useSelector(state => state.songs);
    const song = songsObject[id]

    const body = song?.body


    return(
        <>
            <div className={styles.headContainer}
                style={{ backgroundImage: `url(${song?.backgroundArtUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            >
                <div className={styles.inContainer}>
                    <div className={styles.songInfoContainer}>
                        <div id={styles.albumImgDiv}>
                            <img src={`${song?.albumUrl}`} alt="" />
                        </div>
                        <div id={styles.songDetails}>
                            {song?.name}
                            <div id={styles.artistInfo}>
                                {song?.artistName}
                            </div>
                            <div id={styles.songInfo}>
                                <span style={{color: `#9A9A9A`}}>Album</span> {song?.albumName}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={styles.bodyDiv}>
                <div id={styles.lyricAnnoContainer}>
                    <div id={styles.lyricBodyDiv}>
                        {/* <p>{song?.body}</p> */}
                        <SongLyrics body={body}/>
                        {/* Put below div back on 57 if doesnt work */}
                        {/* <div id={styles.commentDiv}>
                            <p>hello</p>
                        </div> */}
                        <CommentForm id={id}/>
                    </div>
                    <div id={styles.annotateDiv}>
                        {song?.body}
                    </div>
                </div>
            </div>
        </>
    )
}

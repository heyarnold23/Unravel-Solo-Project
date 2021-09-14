import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getSongs} from '../../store/songs';

import styles from './SongPage.module.css';

export default function SongPage(){
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getSongs())
    },[dispatch, id])

    const songsObject = useSelector(state => state.songs);
    const song = songsObject[id]

    // console.log(id)
    // console.log('songPage',song);

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
                        {song?.body}
                    </div>
                    <div id={styles.annotateDiv}>
                        {song?.body}
                    </div>
                </div>





            </div>
        </>
    )
}

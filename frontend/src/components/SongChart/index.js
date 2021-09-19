import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom'

import {getSongs} from '../../store/songs';

import styles from './SongChart.module.css';

const SongChart = () => {
    const dispatch = useDispatch();
    const songs = useSelector((state) => state.songs);
    const songsArr = Object.values(songs);

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch])


    return (
        <>
            <div className={styles.songChart}>
                    CHARTS
            </div>
            <h3 id={styles.chartsSub}>TRENDING ON UNRAVEL</h3>
            <div className={styles.chartContent}>
                {/* <ol> */}
                <div className={styles.chartList}>
                    {songsArr.map((song) =>
                    // albumUrl, name, artistName
                    <a href={`/songs/${song.id}`}>
                        <div key={song.id} className={styles.listedSong}>
                            {/* link will eventually be the song page */}
                            {/* <a href={`/songs/${song.id}`}> */}
                                <div className={styles.insideSong}>
                                    {song.id}
                                </div>
                            {/* </a> */}
                            {/* <a href={`/songs/${song.id}`}> */}
                                    <div className={styles.imgHolder} style={{ backgroundImage: `url(${song.albumUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                        {/* <img src={song.albumUrl} alt={song.albumName} /> */}
                                    </div>
                            {/* </a> */}
                            {/* <a href={`/songs/${song.id}`}> */}
                                    <div className={styles.name}>
                                        {song.name}
                                    </div>
                            {/* </a> */}
                            {/* <a href={`/songs/${song.id}`}> */}
                                    <div className={styles.artist}>
                                        {song.artistName}
                                    </div>
                            {/* </a> */}
                        </div>
                    </a>
                    )}
                {/* </ol> */}
                </div>
            </div>
        </>
    )


}

export default SongChart;

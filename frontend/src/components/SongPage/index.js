import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

import {getSongPage} from '../../store/songs';

import styles from './SongPage.module.css';

export default function SongPage(){
    const dispatch = useDispatch();
    const {id} = useParams();
    const song = useSelector(state => state.songs);

    useEffect(() => {
        dispatch(getSongPage(id))
    },[dispatch, id])

    // console.log('songggggg', song);
    

    return(
        <h2>{song.artistName}</h2>
    )
}

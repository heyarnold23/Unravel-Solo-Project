import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getSongs} from '../../store/songs';


export default function SongLyrics({body}){




    return (
    <>
    <p>{body}</p>

    </>
    )
}

import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getComments} from '../../store/comments';

import styles from './Comments.module.css'

export default function Comments(){
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getComments(id))
    },[dispatch, id])

    const commentsObject = useSelector(state => state.comments)
    const comments = commentsObject[id]
    console.log('commeeennttsssss',comments);
    //comments is an object id, userId, songId, body

    return (
        <>
            <div>{comments.body}</div>
        </>
    )


}

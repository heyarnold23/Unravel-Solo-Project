import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getComments} from '../../store/comments';
import CommentForm from '../CommentForm';

import styles from './Comments.module.css'

export default function Comments(){
    const sessionUser = useSelector(state => state.session.user);
    const {id} = useParams();
    const dispatch = useDispatch();
    const commentsObject = useSelector(state => state.comments)
    const commentsArr = Object.values(commentsObject)

    useEffect(() => {
        
        dispatch(getComments(id))
    },[dispatch, id])

    // const comments = commentsObject[id]
    console.log('commeeennttsssss',commentsArr);
    //comments is an object id, userId, songId, body

    //IMPLEMENT A .FIND TO FIND THE USER NAME

    return (
        <>
            <div>
            <CommentForm id={id}/>
            </div>
            <div className={styles.commentBox}>
                <div className={styles.commentList}>
                    <ul className={styles.commentUl}>
                        {commentsArr.map((comment) =>
                        <li key={comment.id} className={styles.commentLi}>
                            <p className={styles.userName}>{comment?.User.username}</p>
                            <p className={styles.body}>{comment?.body}</p>
                            {/* placeholder for edit and delete buttons */}
                        </li>
                        )}
                    </ul>
                </div>
            </div>

        </>
    )


}

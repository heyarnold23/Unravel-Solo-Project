import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams} from 'react-router-dom';
import {getComments} from '../../store/comments';
import { restoreUser } from '../../store/session';
import CommentForm from '../CommentForm';
import EditCommentForm from '../EditCommentForm';


import styles from './Comments.module.css'

export default function Comments(){
    const sessionUser = useSelector(state => state.session.user);
    const {id} = useParams();
    const dispatch = useDispatch();



    useEffect(() => {
    dispatch(getComments(id))
    },[dispatch, id])

    const commentsObject = useSelector(state => state.comments)
    const commentsArr = Object.values(commentsObject)

    if(!sessionUser){
        return (
            <>
                <div className={styles.commentBox}>
                    <div className={styles.commentList}>
                        <ul className={styles.commentUl}>
                            {commentsArr.map((comment) =>
                            <li key={comment.id} className={styles.commentLi}>
                                <p className={styles.userName}>{comment?.User.username}</p>
                                <p className={styles.body}>{comment?.body}</p>
                            </li>
                            )}
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {/* <div>
            <CommentForm id={id}/>
            </div> */}
            <div className={styles.commentBox}>
                <div className={styles.commentList}>
                    <ul className={styles.commentUl}>
                        {commentsArr.map((comment) =>
                        <li key={comment.id} className={styles.commentLi}>
                            <p className={styles.userName}>{comment?.User.username}</p>
                            {/* <p className={styles.userName}>{comment.username}</p> */}
                            <p className={styles.body}>{comment?.body}</p>
                            {/* placeholder for edit and delete buttons */}
                            {/* {sessionUser.id === comment.userId ? <button>Edit</button> : 'hello'} */}
                            {sessionUser.id === comment.userId ? <EditCommentForm comment={comment}/> : null}
                        </li>
                        )}
                    </ul>
                </div>
            </div>

        </>
    )


}

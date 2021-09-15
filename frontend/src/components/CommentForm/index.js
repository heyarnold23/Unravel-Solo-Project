import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../store/comments';



import styles from './CommentForm.module.css'



export default function CommentForm ({id}){
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const [body, setBody] = useState('');

    const reset = () => {
        setBody('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComment = {
        userId: sessionUser.id,
        songId: id,
        body,
        };

        dispatch(createComment(newComment));
        reset();
    };

    return (
        <div id={styles.commentForm}>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    name="body"
                    placeholder="Add a comment"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )



}

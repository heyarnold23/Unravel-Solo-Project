import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { createComment } from '../../store/comments';
import Comments from '../Comments';




import styles from './CommentForm.module.css'



export default function CommentForm ({id}){
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

    const dispatch = useDispatch();

    const [body, setBody] = useState('');
    const [errors, setErrors] = useState([]);


    const reset = () => {
        setBody('');
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newComment = {
        userId: sessionUser.id,
        songId: id,
        body,
        };

        if(body.length > 0 || body.length === 0){
        setErrors([]);
         let created = await dispatch(createComment(newComment));
         console.log('createduser ---------- ',created.User.username);


        //  if (created) {
        //     history.push(`/songs/${id}`)
        //  }

        //  .catch(async (res) => {
        //         const data = await res.json;
        //         if (data && data.errors) setErrors(data.errors);
        //     });
        }

        reset();
    };


    return (
        <>
            <div id={styles.commentForm}>
                <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        name="body"
                        placeholder="Add a comment"
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Comments />
        </>
    )



}

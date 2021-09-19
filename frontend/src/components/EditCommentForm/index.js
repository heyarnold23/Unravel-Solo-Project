import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { editComment } from '../../store/comments';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../store/comments';

import styles from './EditCommentForm.module.css'

export default function EditCommentForm ({comment}) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const {id} = comment;
    const sessionUser = useSelector(state => state.session.user);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    const closeMenu = (e) => {
        e.preventDefault()
        setShowMenu(false)
        setBody(comment.body)
    }

    // useEffect(() => {
    //     if (!showMenu) return;

    //     const closeMenu = () => {
    //       setShowMenu(false);
    //     };

    //     document.addEventListener('click', closeMenu);

    //     return () => document.removeEventListener("click", closeMenu);
    // }, [showMenu]);

    const [body, setBody] = useState(comment.body);

    const updateBody = (e) => setBody(e.target.value);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId: sessionUser.id,
            id,
          body
        };

        let updatedItem = dispatch(editComment(payload));
        if (updatedItem) {
          setShowMenu(false);
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();

        const commentData = {
            userId: sessionUser.id,
            id
        };

        dispatch(deleteComment(commentData))
    }

    // const handleCancelClick = (e) => {
    //     e.preventDefault();
    //     hideForm();
    // };

    return (
        <>
            <button className={styles.editDelete} onClick={openMenu}>edit</button>
            <button className={styles.editDelete} onClick={handleDelete}>delete</button>
            {showMenu && (
            <>
                <div id={styles.commentForm}>
                    <form onSubmit={handleSubmit}>
                    {/* <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul> */}
                        <textarea
                            className={styles.editInput}
                            value={body}
                            onChange={updateBody}
                            name="body"
                            placeholder="Add a comment"
                        ></textarea>
                        <button className={styles.submitCancel} onClick={!openMenu}type="submit">Submit</button>
                        <button className={styles.submitCancel} onClick={closeMenu}>Cancel</button>
                    </form>
                </div>
            </>
            )}
        </>
    )




}

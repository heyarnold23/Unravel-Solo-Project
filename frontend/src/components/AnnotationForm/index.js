import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createAnnotation} from '../../store/annotations'
import { useParams } from 'react-router-dom';
import styles from './AnnotationForm.module.css'


export default function AnnotationForm({start, end}){
    const sessionUser = useSelector(state => state.session.user);
    const {id} = useParams()
    const dispatch = useDispatch();


    const [body, setBody] = useState('');
    const [errors, setErrors] = useState([]);

    // const reset = () => {
    //     setBody('');
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newAnno = {
        userId: sessionUser.id,
        songId: id,
        body,
        startPos: start,
        endPos: end,
        };

        if(body.length > 0 || body.length === 0){
        setErrors([]);
        dispatch(createAnnotation(newAnno));
        setBody('');


        //  if (created) {
        //     history.push(`/songs/${id}`)
        //  }

        //  .catch(async (res) => {
        //         const data = await res.json;
        //         if (data && data.errors) setErrors(data.errors);
        //     });
        }

        // reset();
    };


    if (!sessionUser) {
        return (
            <>
                <div>
                    <span>Sign in to annotate</span>
                </div>
            </>
        )
    }


    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
                {/* <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul> */}
                    <textarea
                        className={styles.input}
                        rows='4'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        name="body"
                        placeholder="Don't just put the lyrics in your own words-drop some knowledge!"
                    ></textarea>
                    <button className={styles.submitCancel} type="submit">Submit</button>
                </form>
            </div>
        </>
    )



}

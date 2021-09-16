import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAnnotations } from '../../store/annotations';



export default function SongLyrics({body}){
    const sessionUser = useSelector(state => state.session.user);
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAnnotations(id))
    },[dispatch, id])

    const annotationsObject = useSelector(state => state.annotations)
    const annoArr = Object.values(annotationsObject)

    console.log('annoarr -------->>>>>>>',annoArr);

    const work = {body}
    const arr = Object.values(work)
    const string = arr.toString();
    // console.log('this is string',string.length);
    const split = string.split('')
    console.log('this is split', split );
    console.log('this is index', split[12]);



    /** */

    const highlight = () => {

        // const sel = window.getSelection()
        // const selStr = window.getSelection.toString()
        // const range = sel.getRangeAt(0).getBoundingClientRect()
        // console.log(sel);
        // console.log(selStr);
        // console.log(range);

        const selection = window.getSelection();
        const start = selection.anchorOffset;
        const end = selection.focusOffset;
        if (start >= 0 && end >= 0){
    	    console.log("start: " + start);
    	    console.log("end: " + end);
        }

    }

    /** */


    return (
    <>
    {/* {split.map((s) => <span>{s}</span> )} */}






    {/* {split.map((s) => <span onMouseUp={highlight}>{s}</span> )} */}
    {/* <span onMouseUp={highlight}>{split}</span> */}
    <span onMouseUp={highlight}>{body}</span>

        {/* maybe on each span, have an onclick or other event handler
        that will equal to a function above that has window.getSelection()
        underneath it
        */}
    </>
    )
}

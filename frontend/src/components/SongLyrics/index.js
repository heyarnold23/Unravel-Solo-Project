import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAnnotations } from '../../store/annotations';

import styles from './SongLyrics.module.css'


export default function SongLyrics({body}){
    const sessionUser = useSelector(state => state.session.user);
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAnnotations(id));
    },[dispatch, id])

    const annotationsObject = useSelector(state => state.annotations)
    const annoArr = Object.values(annotationsObject)
    // [0: {id: 1, userId: 1, songId: 1, body: 'Well said

    /*******/
    // console.log('annoarr -------->>>>>>>',annoArr);
    // console.log('this is how to get start and end pos --->>>>>', annoArr[0]?.startPos, annoArr[0]?.endPos);
    /*******/


    // const work = {body}
    // const arr = Object.values(work)
    // const string = arr.toString();
    // // console.log('this is string',string.length);
    // const split = string.split('')
    // console.log('this is split', split );
    // console.log('this is index', split[20]);


    /** */

    const highlight = () => {

        // const sel = window.getSelection()
        // const selStr = window.getSelection.toString()
        // const range = sel.getRangeAt(0).getBoundingClientRect()
        // console.log(sel);
        // console.log(selStr);
        // console.log(range);
        const selection = document.getSelection();
        // const selRange = selection.getRangeAt()
        const start = selection.anchorOffset;
        const end = selection.focusOffset;
        if (start >= 0 && end >= 0){
    	    console.log("start: " + start);
    	    console.log("end: " + end);
            // console.log('selRange: ' + selRange);
        }
        //also maybe can do something with useState and controlledInput and onChange or mouseUp
        //maybe can run highlighted function from below

    }

    /****************/
    /* !!!!! highlighted can index into body and do something !!!!!!! */
    const highlighted = (start, end) => {
        //maybe make this an async somehow?

        // const experiment = document.getElementsByTagName('span')[start]

        // if (start >= 0 && end >= 0){
        for (let i = start; i <= end; i++) {
            const element = i;
            const change = body?.[element];
            console.log(change);
            // change.style.backgroundColor = "red";
        }
    }
    //maybe for loop to do effect of adding grey start to end?
    //maybe apply className to give it highlight and click
    // console.log(highlighted(18, 47));
    // console.log('this is the map we want',annoArr.forEach((anno) => ))
    annoArr.forEach(anno => {
        console.log('annoArr and highlighted at work --->>>>');
        console.log(anno.startPos, anno.endPos);
        highlighted(anno.startPos, anno.endPos)
    });
    /****************/


    /** */
    // proof that we can index into body if we async it
    // const indexing = async (i) => (
    //     console.log('indexing ----->>', body[i])
    // );
    // console.log(indexing(2));
    /** */


    // const experiment = document.getElementsByTagName('span')[4]
    // console.log('experiment ------> ',experiment);





    return (
    <>
        {/* {split.map((s) => <span onMouseUp={highlight}>{s}</span> )} */}

        {/* {split.map((s) => <span onMouseUp={highlight}>{s}</span> )} */}
        {/* <span onMouseUp={highlight}>{split}</span> */}

        {/* best one, line below */}
        <span onMouseUp={highlight}>{body}</span>


        {/* <body>
            <span>
                {body}
            </span>

        </body> */}


            {/* maybe on each span, have an onclick or other event handler
            that will equal to a function above that has window.getSelection()
            underneath it
            */}
    </>
    )
}

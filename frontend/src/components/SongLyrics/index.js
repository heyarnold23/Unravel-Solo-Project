import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAnnotations } from '../../store/annotations';
import {getSongs} from '../../store/songs';


import styles from './SongLyrics.module.css'


export default function SongLyrics({body}){
    const sessionUser = useSelector(state => state.session.user);
    const {id} = useParams();
    const dispatch = useDispatch();
    const [annoMenu, setAnnoMenu] = useState(false);

    const openMenu = () => {
        if (annoMenu) return;
        setAnnoMenu(true);
    };


    useEffect(() => {
        dispatch(getAnnotations(id));
        dispatch(getSongs())
    },[dispatch, id])

    const annotationsObject = useSelector(state => state.annotations)
    const annoArr = Object.values(annotationsObject)
    // [0: {id: 1, userId: 1, songId: 1, body: 'Well said

    /*******/
    // console.log('annoarr -------->>>>>>>',annoArr);
    // console.log('this is how to get start and end pos --->>>>>', annoArr[0]?.startPos, annoArr[0]?.endPos);
    /*******/


    const work = {body}
    const arr = Object.values(work)
    const string = arr.toString();
    // console.log('arr --------- ', arr);
    // console.log('this is string',string.length);
    const split = string.split('')
    // console.log('this is split', split );
    // console.log('this is index', split[20]);
    /** */

    //maybe can do document.createElement span
    //then put in the innerText or inner html all of the words gathered
    //then place it at the index of the text start pos
    //OOORRR can maybe just make a span tag only and insert opening tag
    // before the startpos and a closing tag at the endPos
    // const changeElement = (letter) => {

    //const old = document.getElementsByTagName('small'[start])

        // const new = document.createElement('span');
        // new.innerHTML = e.innerHTML;
        // e.parentNode.insertBefore(d, e);
        // e.parentNode.removeChild(e)

    //     // create a new div element
    //     const newSpan = document.createElement("span");

    //     // and give it some content
    //     const newContent = document.createTextNode("letter");

    //     // add the text node to the newly created div
    //     newDiv.appendChild(newContent);

    //     // add the newly created element and its content into the DOM
    //     const currentDiv = document.getElementById("div1");
    //     document.body.insertBefore(newDiv, currentDiv);
    // }

    const highlight = () => {

        // const sel = window.getSelection()
        // const selStr = window.getSelection.toString()
        // const range = sel.getRangeAt(0).getBoundingClientRect()
        // console.log(sel);
        // console.log(selStr);
        // console.log(range);
        const selection = document.getSelection();
        console.log('selection ---->',selection);
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

    const test = (evt) => {
        const annoId = evt.currentTarget.myParam
        alert(`hi, ${annoId}`)
    }

    const color = 'grey';

    const highlighted = async (start, end, annoId) => {
        //maybe make this an async somehow?

        // const experiment = document.getElementsByTagName('span')[start]

        if (start >= 0 && end >= 0){
        for (let i = start; i <= end; i++) {
            const indexedElement = body?.[i];
            console.log(indexedElement);
            const old = document.getElementById(`${i}`);
            const newest = document.createElement('span');
            newest.style.backgroundColor = color;
            newest?.setAttribute('id', `${annoId}`)
            newest.myParam = annoId
            newest.addEventListener('click', openMenu)
            newest.innerHTML = old?.innerHTML;
            old?.replaceWith(newest)
        }
    }}

    //maybe for loop to do effect of adding grey start to end?
    //maybe apply className to give it highlight and click
    // console.log(highlighted(18, 47));
    // console.log('this is the map we want',annoArr.forEach((anno) => ))
    annoArr.forEach(anno => {
        console.log('annoArr and highlighted at work --->>>>');
        console.log(anno.startPos, anno.endPos);
        highlighted(anno.startPos, anno.endPos, anno.id)
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

console.log('proooooffff',document.getElementById('18'));
// splice start at startpos, splice to end index, then insert the new element


    return (
    <>

        {/* {annoArr.forEach(anno => {
        console.log('annoArr and highlighted at work --->>>>');
        console.log(anno.startPos, anno.endPos);
        highlighted(anno.startPos, anno.endPos)
        })} */}


        {/* {split.map((s) => <span onMouseUp={highlight}>{s}</span> )} */}
        {/* <span onMouseUp={highlight}>{split}</span> */}

        {/* best one, line below */}
        {/* <div id={styles.mainTextBody} onMouseUp={highlight}>{body}</div> */}
        {split.map((s, i=0) => <small id={i++}onMouseUp={highlight}>{s}</small> )}

        <div>
        {annoMenu && (
            <>
                <div id={styles.commentForm}>
                    <p>annomenu</p>
                </div>
            </>
            )}
        </div>

    </>
    )
}

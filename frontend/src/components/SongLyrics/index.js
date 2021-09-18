import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAnnotations } from '../../store/annotations';
import {getSongs} from '../../store/songs';
import AnnotationPopUp from '../AnnotationPopUp'


import styles from './SongLyrics.module.css'


export default function SongLyrics({body}){
    const {id} = useParams();
    const dispatch = useDispatch();
    const [annoMenu, setAnnoMenu] = useState(false);
    const [annoIdent, setAnnoIdent] = useState(null);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null)


    const openMenu = (evt) => {
        const annoId = evt.currentTarget.myParam
        setAnnoMenu(true)
        setAnnoIdent(annoId)
        console.log('openMenu annoId --->>>', annoId);
    };

    console.log('annoIDENNNNNTNNTNT', annoIdent);

    const closeMenu = () => {
        setAnnoMenu(false)
    };


    useEffect(() => {
        dispatch(getAnnotations(id));
        dispatch(getSongs())
    },[dispatch, id, annoMenu])

    const annotationsObject = useSelector(state => state.annotations)
    const annoArr = Object.values(annotationsObject)
    const work = {body}
    const arr = Object.values(work)
    const string = arr.toString();
    const split = string.split('')


    const highlight = () => {

        if (window.getSelection) {
            setAnnoIdent(null);

            let chosen = window.getSelection();
            console.log('CHOSEN ---->>', chosen);
            let start = chosen.anchorNode.parentElement.id;
            let end = chosen.focusNode.parentElement.id
            setStart(start)
            setEnd(end)
            setAnnoMenu(true)
        }
    }

    const color = `#E9E9E9`;

    const highlighted = async (start, end, annoId) => {
        if (start > end) {
            for (let i = start; i >= end; i--) {
                const old = document.getElementById(`${i}`);
                const newest = document.createElement('span');
                newest.style.backgroundColor = color;
                newest?.setAttribute('id', `annoId: ${annoId}`)
                newest.myParam = annoId
                newest.addEventListener('click', openMenu)
                newest.innerHTML = old?.innerHTML;
                old?.replaceWith(newest)
            }
        }

        if (start >= 0 && end >= 0){
            for (let i = start; i <= end; i++) {
                const old = document.getElementById(`${i}`);
                const newest = document.createElement('span');
                newest.style.backgroundColor = color;
                newest?.setAttribute('id', `annoId: ${annoId}`)
                newest.myParam = annoId
                newest.addEventListener('click', openMenu)
                newest.innerHTML = old?.innerHTML;
                old?.replaceWith(newest)
            }
        }
    }

    annoArr.forEach(anno => {
        highlighted(anno.startPos, anno.endPos, anno.id)
    });

    return (
    <>
        {split.map((s, i=0) => <small id={i++}onMouseUp={highlight}>{s}</small> )}

        {annoMenu && (
            <>
                <div>
                    <AnnotationPopUp anno={annoIdent} arr={annoArr} start={start} end={end}/>
                    <button onClick={closeMenu}>close</button>
                </div>
            </>
        )}
    </>
    )
}

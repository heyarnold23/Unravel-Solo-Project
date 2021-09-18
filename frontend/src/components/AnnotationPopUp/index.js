// import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getAnnotations } from '../../store/annotations';
// import {getSongs} from '../../store/songs';
import AnnotationForm from '../AnnotationForm'
import EditAnnotationForm from '../EditAnnotationForm';


export default function AnnotationPopUp({anno, arr, start, end}){
    const sessionUser = useSelector(state => state.session.user);
    // const {id} = useParams();
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getAnnotations(id));
    //     dispatch(getSongs())
    // },[dispatch, id])

    const foundObj = arr.find(object => object.id === anno)
    console.log(foundObj);


    if(!anno){
        return (
            <AnnotationForm start={start} end={end}/>
        )
    }
        /*
        saving above for when working on highlighting
        the return will either be a form to submit an annotation or
        just render the component holding the form if wanna make it separate
        */

    if(!sessionUser){
        return(
            <>
        <div>Annotation from</div>
        <div>{foundObj?.User.username}</div>
        <div>{foundObj?.body}</div>
            </>
        )
    }







    return (
    <>
        <div>Annotation from</div>
        <div>{foundObj?.User.username}</div>
        <div>{foundObj?.body}</div>
        {sessionUser.id === foundObj?.userId ? <EditAnnotationForm annotation={foundObj}/> : null}
    </>
    )
}

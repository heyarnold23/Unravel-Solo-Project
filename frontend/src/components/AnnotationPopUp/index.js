// import {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getAnnotations } from '../../store/annotations';
// import {getSongs} from '../../store/songs';


export default function AnnotationPopUp({anno, arr}){
    // const sessionUser = useSelector(state => state.session.user);
    // const {id} = useParams();
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getAnnotations(id));
    //     dispatch(getSongs())
    // },[dispatch, id])

    console.log('inside annotationPopUp', arr);
    console.log('annonoooooo', anno);
    const foundObj = arr.find(object => object.id === anno)
    console.log('found!!!!!!!', foundObj);

    /*
        if(!anno){
        return
    }
        saving above for when working on highlighting
        the return will either be a form to submit an annotation or
        just render the component holding the form if wanna make it separate
    */

    return (
    <>
        <div>Annotation from</div>
        <div>{foundObj?.User.username}</div>
        <div>{foundObj?.body}</div>
    </>
    )
}

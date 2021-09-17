// import {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getAnnotations } from '../../store/annotations';
// import {getSongs} from '../../store/songs';


export default function AnnotationPopUp({anno, arr, start, end}){
    // const sessionUser = useSelector(state => state.session.user);
    // const {id} = useParams();
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getAnnotations(id));
    //     dispatch(getSongs())
    // },[dispatch, id])

    console.log('arr inside annotationPopUp', arr);
    console.log('anno inside annotationPopUp', anno);
    const foundObj = arr.find(object => object.id === anno)
    console.log('found!!!!!!! inside annotationPopUp', foundObj);
    console.log('pop up start!!!!!! inside annotationPopUp', start);


        if(!anno){
         console.log('hello inside annotationPopUp')
        }
        /*
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

import React, {useEffect} from 'react'
import {Redirect , useHistory} from 'react-router-dom'

export const ProtectedPage = () => {
    // const isAuthed = false;
    // return isAuthed ? (
    //     <>
    //         <h1>Only Authed Users should be able to see this!</h1>
    //     </>
    // ) : (
    //     <Redirect to="/"/>
    // );

    const history = useHistory();

    const isAuthed = false ;

    useEffect(() => {
        if (isAuthed) {
            history.push('/')
        }
    })

    return (
        <h1>Only Authed Users should be able to see this!</h1>
    );

}
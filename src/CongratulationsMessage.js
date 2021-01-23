import React, {useEffect} from "react";
import {BlueButton} from "./Button";

export const CongratulationsMessage = ({threshold, onHide}) => {
    useEffect(() => {
        return () => console.log('CongratulationsMessage unmounting!');
    }, [])

    // return numberOfClicks >= threshold
    //     ? <>
    //         <h1>Congratulations You've reached {threshold} number of click</h1>
    //         <button onClick={onHide}>hide</button>
    //       </>
    //     : null

    return (
        <>
            <h1>Congratulations You've reached {threshold} number of click</h1>
            <BlueButton onClick={onHide}>hide</BlueButton>
        </>
    )

}
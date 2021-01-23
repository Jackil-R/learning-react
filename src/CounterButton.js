import React, {useEffect} from "react";
import { DangerButton} from "./Button";

export const CounterButton = ({onIncrement, numberOfClicks}) => {
    useEffect(() => {
        console.log('useEffect CounterButton called')
    },[])

    return (
        <>
        <p>You've clicked the button {numberOfClicks} times</p>
        <DangerButton onClick={onIncrement}><h1>Click Me!</h1></DangerButton>
        </>
    )
}
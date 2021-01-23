import React, {useState, useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {parse} from 'query-string';
import {CounterButton} from "../CounterButton";
import {CongratulationsMessage} from "../CongratulationsMessage";
import {DisplayIf} from "../DisplayIf";
import {usePersistentState} from "../usePersistentState";

export const CounterButtonPage = () => {
    // const location = useLocation()
    // let startingValue = Number(parse(location.search).startingValue) || 0;
    // const {name} = useParams();
    // const [numberOfClicks, setNumberOfClicks] = useState(Number(localStorage.getItem('numberOfClicks')) || 0);
    const [hideMessage, setHideMessage] = useState(localStorage.getItem('hideMessage')==='true' || false);

    const [numberOfClicks, setNumberOfClicks] = usePersistentState('numberOfClicks',0, Number)
    //const [hideMessage, setHideMessage] = usePersistentState('hideMessage',false, String)
    const increment = () => setNumberOfClicks(numberOfClicks + 1);

    useEffect(()=> {
        localStorage.setItem('numberOfClicks',numberOfClicks.toString());
        localStorage.setItem('hideMessage', hideMessage.toString())
    }, [numberOfClicks, hideMessage])

    return (
        <>
            <h1>Counter Button Page</h1>
            {/*{hideMessage ? null : <CongratulationsMessage*/}
            {/*    numberOfClicks={numberOfClicks}*/}
            {/*    threshold={10}*/}
            {/*    onHide={() =>  setHideMessage(true)}/>}*/}

            <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
                <CongratulationsMessage
                    threshold={10}
                    onHide={() => setHideMessage(true)}/>
            </DisplayIf>
            <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/>
        </>
    )
}
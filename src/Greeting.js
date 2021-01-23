import React, {useState} from "react";
import {GreyButton} from "./Button";

export const Greeting = ({person}) => {

    const [name, setName] = useState(person.name)
    const [numberOfMessage, setNumberOfMessage] = useState(person.numberOfMessage)

    const decrementMessage = () => setNumberOfMessage(numberOfMessage-1)
    const incrementMessage = () => setNumberOfMessage(numberOfMessage+1)

    if (!person.name) return null

    let isMorning = (new Date()).getHours() < 12;
    let greetingHeader = isMorning
        ? <h3>Good Morning {name}!</h3>
        : <h3>Good Evening {name}!</h3>

    return (<>
            {greetingHeader}
            { numberOfMessage === 0 ? null : <p>You have {numberOfMessage} new messages</p>}
            <GreyButton onClick={decrementMessage}>Read emails</GreyButton>
            <GreyButton onClick={incrementMessage}>Unread emails</GreyButton>
        </>
    )
}
import React from 'react'
import {Button} from "../Button";

export class CounterButtonCB extends React.Component {

    render() {
        const {numberOfClicks , onIncrement} = this.props;

        return (
            <>
                <p>You've clicked the button {numberOfClicks} times</p>
                <Button onClick={onIncrement}>Click Me!</Button>
            </>
        );
    }

}
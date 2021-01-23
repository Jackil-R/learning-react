import React from 'react'
import {Button} from "../Button";

export class CongratulationMessageCB extends React.Component{

    render() {
        const {threshold, onHide} = this.props;
        return (
            <>
                <h1>Congratulations You've reached {threshold} number of click</h1>
                <Button buttonColor="yellow" onClick={onHide}>hide</Button>
            </>
        )
    }
}
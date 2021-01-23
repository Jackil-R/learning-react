import React from 'react'
import {CounterButtonCB} from "./CounterButtonCB";
import {CongratulationsMessageCB} from "../CongratulationsMessageCB";
import {DisplayIf} from "../DisplayIf";



export class CounterButtonPageCB extends React.Component {

    state = {
        hideMessage: false,
        numberOfClicks: 0,
    }

    // constructor(props) {
    //     super(props);
    //     this.increment = this.increment.bind(this);
    // }
    //
    // increment(){
    //     this.setState({numberOfClicks: this.state.numberOfClicks+1})
    // }


    increment = () => {
        this.setState({numberOfClicks: this.state.numberOfClicks + 1})
    }

    

    render() {

        const {hideMessage, numberOfClicks} = this.state

        return (
            <>
                <h1>Counter Button Page CB</h1>
                <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
                    <CongratulationsMessageCB
                        threshold={10}
                        onHide={() => this.setState({hideMessage: true})}/>
                </DisplayIf>
                <CounterButtonCB onIncrement={increment} numberOfClicks={numberOfClicks}/>
            </>
        )
    }
}
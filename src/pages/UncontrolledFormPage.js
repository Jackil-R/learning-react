import React from 'react'
import {GreenButton} from "../Button";

export const UncontrolledFormPage = () => {
    const nameInput = React.createRef()
    const emailInput = React.createRef()
    const favouriteColorInput = React.createRef()

    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input ref={nameInput} type="text" placeholder="Name"/>
            </div>
            <div>
                <input ref={emailInput} type="text" placeholder="Email" />
            </div>
            <div>
                <input ref={favouriteColorInput} type="text" placeholder="Favourite Color" />
            </div>

            <GreenButton onClick={e=>{
                alert(`
                Your name is ${nameInput.current.value},
                Your email is ${emailInput.current.value},
                Your favourite color is ${favouriteColorInput.current.value}!
            `); e.preventDefault()}}>Submit</GreenButton>
        </form>
    )
}
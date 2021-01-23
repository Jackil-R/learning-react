import React, {useState} from 'react'
import { GreenButton} from "../Button";

export const ControlledFormPage = () =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [favouriteColor, setFavouriteColor] = useState("")

    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input type="text" placeholder="Name" value={name}
                       onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <input type="text" placeholder="Email" value={email}
                       onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                <input type="text" placeholder="Favourite Color" value={favouriteColor}
                       onChange={e => setFavouriteColor(e.target.value)}/>
            </div>

            <GreenButton onClick={e => {alert(`
                Your name is ${name},
                Your email is ${email},
                Your favourite color is ${favouriteColor}!
            `); e.preventDefault()}}>Submit</GreenButton>
        </form>
    )
}
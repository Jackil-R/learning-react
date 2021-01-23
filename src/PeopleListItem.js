import React, {useContext} from "react";
import {ThemeContext} from "./ThemeContext";
import './PeopleListItem.css'



export const PeopleListItem = ({person}) => {
    const theme = useContext(ThemeContext)
    return (
        <div
            style={{
                backgroundColor: theme === 'dark' ? 'black' : 'white',
                color: theme === 'dark' ? 'white' : 'black',
            }}
            className="list-item-container">
            <h3>{person.name}</h3>
            <p>Age: {person.age}</p>
            <p>Hair Color: {person.hairColor}</p>
        </div>
    );

}

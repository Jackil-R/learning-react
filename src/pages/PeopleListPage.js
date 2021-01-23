import React from 'react'
import {PeopleList} from "../PeopleList";


const people = [{
    name: 'John',
    age: 40,
    hairColor: "Brown"
}, {
    name: 'Smith',
    age: 32,
    hairColor: "Red"
}, {
    name: 'Kelly',
    age: 43,
    hairColor: "Black"
}]

export const PeopleListPage = () => {
    return (
        <>
            <h1>The People List Page</h1>
            <PeopleList people={people}/>
        </>
    )

}
import React from 'react'
import {Link} from 'react-router-dom'

export const FormsNavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/forms/controlled">Controlled Form</Link>
            </li>
            <li>
                <Link to="/forms/uncontrolled">Uncontrolled Form</Link>
            </li>
        </ul>
    )
}
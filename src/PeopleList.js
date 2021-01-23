import React , {useContext}from "react";
import {PeopleListItem} from "./PeopleListItem";
import styled from 'styled-components';
import {Button} from "./Button";
import {ThemeContext} from "./ThemeContext";

const Wrapper = styled.div`
  border: 2px solid white;
  padding: 32px;
  border-radius: 8px;
  horiz-align: center;
`;

export const PeopleList = ({people}) => {

    const theme = useContext(ThemeContext)


    return (
        <Wrapper>
            {people.map(person =>
                <PeopleListItem person={person} key={person.name}/>
            )}
        </Wrapper>
    );
}




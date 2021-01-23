import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${props => props.buttonColor || 'transparent'};
  border-radius: 4px;
  border: 4px solid white;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 8px;
  outline: none;
  padding: 16px;
`

export const Button = ({ children, buttonColor, ...props }) => {
    return (
        <StyledButton buttonColor={buttonColor} {...props} >{children}</StyledButton>
    )
}

export const DangerButton = ({children, ...props}) => {
    return <Button buttonColor="red" {...props}>{children}</Button>
}

export const GreenButton = ({children, ...props}) => {
    return <Button buttonColor="green" {...props}>{children}</Button>
}

export const GreyButton = ({children, ...props}) => {
    return <Button buttonColor="grey" {...props}>{children}</Button>
}

export const BlueButton = ({children, ...props}) => {
    return <Button buttonColor="blue" {...props}>{children}</Button>
}


// export class Button extends React.Component {
//     constructor(props) {
//         super(props);
//         this.buttonColor = props.buttonColor;
//     }
//
//     render() {
//         return (
//             <StyledButton buttonColor={this.buttonColor} {...this.props}>
//                 {this.props.children}
//             </StyledButton>
//         )
//     }
// }
//
//
// export class DangerButton extends Button {
//     constructor(props) {
//         super(props);
//         this.buttonColor = 'red';
//     }
// }
//
// export class GreenButton extends Button {
//     constructor(props) {
//         super(props);
//         this.buttonColor = 'green';
//     }
// }
//
// export class YellowButton extends Button {
//     constructor(props) {
//         super(props);
//         this.buttonColor = 'Grey';
//     }
// }
//
// export class BlueButton extends Button {
//     constructor(props) {
//         super(props);
//         this.buttonColor = 'blue';
//     }
// }
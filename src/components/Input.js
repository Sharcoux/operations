import React from 'react';
import { View, TextInput } from 'react-native-fix';
import styled from 'styled-components';
import theme from 'theme';

const Wrapper = styled(View)`
    flex: 1;
`;
const Input = styled(TextInput)`
    background-color: ${theme.textBackground};
    margin: 0.2em;
    border-radius: 5px;
    border: 2px solid ${theme.inputBorderColor};
    flex: 1;
    text-align:right;
    &:focus {
        outline: ${theme.focus};
        border: none;
        box-shadow: inset 0px 0px 2px 2px ${theme.focus};
        color: red;
    }
`;

const ResponsiveInput = props => (<Wrapper><Input {...props}/></Wrapper>);
export default ResponsiveInput;
import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native-fix';
import styled from 'styled-components';
import theme from 'theme';
import PropTypes from 'prop-types';

const Icon = styled(Image)`
    resizeMode: contain;
    width: 80%;
    height: 80%;
    margin: auto;
`;

const Button = props => <TouchableOpacity {...props}>
  {props.text ? <Text>{props.text}</Text> : null}
  {props.img ? <Icon source={props.img} /> : null}
</TouchableOpacity>;

const Box = styled(Button)`
    border: ${props => props.selected ? '2px solid #000' : 'none'}
    filter: drop-shadow(2px 2px 3px #444);
    color: ${theme.titleColor};
    cursor: pointer;
    border-radius: 0.3em;
    text-align: center;
    width: 1em;
    height: 1em;
    line-height: 100%;
    margin: 0.1em;
    box-sizing: border-box;
`;

export default Box;

Button.propTypes = {
  text: PropTypes.string,
  img : PropTypes.string,
};
import React from 'react';
import { Text } from 'react-native-fix';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DigitLabel = styled(Text)`
    color: ${props => props.color || 'black'};
    width: 1.5em;
    height: 1.5em;
    margin: auto;
`;
DigitLabel.propTypes = {
  color: PropTypes.string,
};

class Digit extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value : '',
      color : '#000',
    };
  }
  render() {
    return (<DigitLabel onClick={} color={this.state.color} >{this.state.value}</DigitLabel>);
  }
}

const Digit = ({color, value}) => (<DigitLabel color={color} >{value}</DigitLabel>);
Digit.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string,
};

export default Digit;
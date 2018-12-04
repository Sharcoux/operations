import React from 'react';
import { Text, TouchableOpacity } from 'react-native-fix';
import Row from 'components/Row';
import Digit from 'components/Digit';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PeriodContainer = styled(Text)`
    font-size: 2em;
    position: relative;
    left: -1em;
`;
const Period = () => (<PeriodContainer>,</PeriodContainer>);

class DigitLine extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  getData() {
    return; 
  }
}

const TouchableDigit = props => (<TouchableOpacity key={props.key} onPress={() => edit(props)}>
  
</TouchableOpacity>);

const DigitLine = props => {
  const value = props.value;
  const [integer, decimal] = value.split(',');
  return <Row align='flex-end'>
    {integer.split('').map((int,index) => (<Digit key={`integer${index}`}>{int}</Digit>))}
    {decimal && <Period/>}
    {decimal && decimal.split('').map((dec,index) => (<Digit key={`decimal${index}`}>{dec}</Digit>))}
  </Row>;
};
DigitLine.propTypes = {
  value: PropTypes.string,
};

export default DigitLine;
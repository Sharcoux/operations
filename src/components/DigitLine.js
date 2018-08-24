import React from 'react';
import { View, Text } from 'react-native-fix';
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

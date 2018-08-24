import React from 'react';
import { Text, View } from 'react-native-fix';
import Row from 'components/Row';
import Tool from 'components/Tool';
import Input from 'components/Input';
import PropTypes from 'prop-types';


const InputLine = props => (
  <Row align='flex-end'>
    {props.sign ? <Text>props.sign</Text> : null}
    <Input onSubmitEditing={props.validation} />
    <Tool text='✓' onPress={props.validation} />
  </Row>
);
InputLine.propTypes = {
  sign: PropTypes.string,
  validation: PropTypes.func.isRequired,
};
export default InputLine;
import React from 'react';
import { View, Text } from 'react-native-fix';
import Row from 'components/Row';
import Tool from 'components/Tool';
import InputLine from 'containers/InputLine';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ValidatedLayout = props => (

);

const InputLayout = props => (
    <View style={{alignItems: 'bottom', justifyContent: 'flex-end', flexDirection: 'row'}}>
        <Row>
            <Tool text='+' onPress={props.addInput} />
            <Tool text='-' onPress={props.removeInput} />
        </Row>
        <View style={{borderBottom: '2px solid black'}}>
            {props.inputs.map((value, index) => <InputLine value={value} />)}
        </View>
    </View>
);

class Addition extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputs: ['',''],
    };
  }
  addInput() {
    this.state.inputs.push('');
  }
  removeInput() {
    this.state.inputs.pop();
}
  render() {
    return (
      <View>
        <InputLine/>
        <InputLine/>
      </View>
    );
  }
}
  
export default Operation;
  
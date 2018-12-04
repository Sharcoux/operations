import React from 'react';
import { View, Text } from 'react-native-fix';
import Row from 'components/Row';
import Tool from 'components/Tool';
import InputLine from 'containers/InputLine';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DigitPicker from 'components/DigitPicker';
import Appearing from 'components/Appearing';

const Column = styled(View)`
  line-height: 1.3em;
  display: flex;
  flex-direction: column;
`;

class Operation extends React.PureComponent {
  render() {
    return (
      <View style={{flex: 1}}>
        <InputLine onUpdate={data => }/>
        <InputLine/>
        <View style={{position:'absolute'}}>
          <Appearing mount={this.state.digitEditing} delay={0.5}>
            <DigitPicker selected={this.state.digitPicking} close={() => this.setState({digitPicking: false})} onUpdate={value => this.setState({value})}/>
          </Appearing>
        </View>
      </View>
    );
  }
}
  
export default Operation;
  
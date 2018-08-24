import React from 'react';
import { View, Text } from 'react-native-fix';
import Row from 'components/Row';
import Tool from 'components/Tool';
import InputLine from 'containers/InputLine';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Column = styled(View)`
  line-height: 1.3em;
  display: flex;
  flex-direction: column;
`;

class Operation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      inputs : {}
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <InputLine/>
        <InputLine/>
      </View>
    );
  }
}
  
export default Operation;
  
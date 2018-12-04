import React from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native-fix';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled(TouchableOpacity)`
    position: absolute;
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height}px;
`;

const Frame = styled(View)`
    margin: auto;
    max-width: 5em;
    border-radius: 0.5em;
    border: 2px outset #aaa;
    box-shadow: 3px 3px 20px 2px #888888;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;

class Picker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onPress = color => {
      this.setState({color});
      props.onUpdate(color);
      props.close();
    };
    this.state = {
      selected : props.selected || null,
    };
  }
  render() {
    return <Container onPress={this.props.close}>
      <Frame>
        {this.props.values.map(value => <this.props.renderer key={value} value={value} selected={this.state.selected===value} onPress={this.onPress}/>)}
      </Frame>
    </Container>;
  }
}

export default Picker;

Picker.propTypes = {
  values: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
  close : PropTypes.func.isRequired,
  selected: PropTypes.string,
  renderer: PropTypes.object.isRequired,
};
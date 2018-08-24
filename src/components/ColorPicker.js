import React from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native-fix';
import ColorDisplayer from 'components/ColorDisplayer';
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

const Color = styled(ColorDisplayer)`
    border: 2px raised '#888';
`;

const SelectedColor = styled(Color)`
    filter: none;
    border: 2px solid red;
    position: relative;
    left: 2px;
    top: 2px
`;

const Item = props => (props.selected ? <SelectedColor {...props} /> : <Color {...props} />);
Item.propTypes = {
  selected: PropTypes.bool,
};

const colors = ['black', 'blue', 'red', 'green', 'orange', 'lightgray', 'darkgray', 'purple', 'turquoise'];

class ColorPicker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onPress = color => {
      this.setState({color});
      props.onUpdate && props.onUpdate(color);
      props.close();
    };
  }
  render() {
    return <Container onPress={this.props.close}>
      <Frame>
        {colors.map(color => <Item key={color} color={color} selected={color===this.props.selected} onPress={() => this.onPress(color)}/>)}
      </Frame>
    </Container>;
  }
}

export default ColorPicker;

ColorPicker.propTypes = {
  onUpdate: PropTypes.func,
  close : PropTypes.func,
  selected: PropTypes.string,
};
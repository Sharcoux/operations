import React from 'react';
import { View } from 'react-native-fix';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled(View)`
    display:flex;
    flex-direction:row;
    align-items:stretch;
    justify-content: ${props => props.align ? props.align : 'flex-start'};
`;

class ButtonGroup extends React.PureComponent {
  constructor(props) {
    super(props);
    this.selectItem = id => {
      this.setState({selectedItem : id});
      props.onUpdate && props.onUpdate(id);
    };
    this.state = {
      selectedItem: -1,
    };
  }
  setSelected(id) {
    this.setState({selectedItem : id});
  }
  render() {
    const self = this;
    // console.log(this.state);
    return <Container>
      {
        //Extends children in the React way
        React.Children.map(self.props.children, (child, id) =>
          React.cloneElement(child, { 
            selected: this.props.selectedItem === id,
            onPress: () => self.selectItem(id,child.value)
          })
        )
      }
    </Container>;
  }
}

export default ButtonGroup;

ButtonGroup.propTypes = {
  onUpdate: PropTypes.func,
  initialItem : PropTypes.number,
  children: PropTypes.node,
};
import React from 'react';
import { View } from 'react-native-fix';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled(View)`
  position: relative;
  left: -0.1em;
  opacity: ${props => props.mount ? 1 : 0};
  transition: all ${props => props.delay}s ease;
  transform: scale(${props => props.mount ? 1 : 0});
  width: ${props => props.mount ? props.width+'px' : 0};
`;

class Appearing extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      render: false,
      width: 0,
    };
  }
  
  componentDidMount() {
    this.setState({mounted: true,render: true});
  }

  componentDidUpdate() {
    if(this.state.mounted && !this.props.mount) {
      this.setState({mounted: false});
      setTimeout(() => this.setState({render: false}), this.props.delay*1000);
    } else if(!this.state.mounted && this.props.mount) {
      this.setState({mounted: true, render: true});
    }
    this.setState({width: this.getWidth ? this.getWidth() : 0});
  }

  render() {
    const self = this;
    return (
      <Wrapper {...this.props} width={this.state.width}>
        {React.cloneElement(self.props.children, { 
          onLayout: event =>
            self.getWidth = () => event.nativeEvent.layout.width,
          ref: 'child',
        })}
      </Wrapper>
    );
  }
}

export default Appearing;

Appearing.propTypes = {
  mount: PropTypes.bool.isRequired,
  delay : PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};
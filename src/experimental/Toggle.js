import React from 'react';
import PropTypes from 'prop-types';
import Tool from 'components/Tool';

class Toggle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {selected: false};
    this.onPress = () => {
      props.onUpdate && props.onUpdate(!this.state.selected);
      this.setState({selected: !this.state.selected});
    };
  }
  render() {
    return <Tool {...this.props} />;
  }
}

Toggle.propTypes = {
  onUpdate: PropTypes.func,
};

export default Toggle;


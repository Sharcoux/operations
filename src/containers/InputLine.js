import React from 'react';
import { Text } from 'react-native-fix';
import Row from 'components/Row';
import DigitLine from 'components/DigitLine';
import Tool from 'components/Tool';
import Input from 'components/Input';
import PropTypes from 'prop-types';

class InputLine extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      value: '',
    };
  }
  getValue() {
    return this.state.value;
  }
  validate() {
    const value = this.input && this.input.value.replace(/,/.g);
    const digitValue = value && Number.parseFloat(value);
    if(value && value===digitValue) {
      this.setState({
        validated: true,
        value: digitValue,
      });
    }
  }
  unvalidate() {
    
  }
  render() {
    return (<Row align='flex-end'>
      {this.props.sign ? <Text>{this.props.sign}</Text> : null}
      {this.state.validated ? <Input ref={c => (this.input = c)} onSubmitEditing={this.validate} /> : <DigitLine value={this.state.value}/>}
      {this.state.validated ? <Tool text='✓' onPress={this.validate} /> : <Tool text='X' onPress={this.unvalidate} />}
    </Row>);
  }
}
InputLine.propTypes = {
  sign: PropTypes.string,
  validation: PropTypes.func.isRequired,
};
export default InputLine;
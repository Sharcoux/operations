import React from 'react';
import Tool from 'components/Tool';
import Row from 'components/Row';
import Toolbar from 'containers/Toolbar';
import Operation from 'containers/Operation';
import { View } from 'react-native-fix';
import ColorDisplayer from 'components/ColorDisplayer';
import ColorPicker from 'components/ColorPicker';
import DigitPicker from 'components/DigitPicker';
import paintIcon from 'images/paint.png';
import Appearing from 'components/Appearing';
import theme from 'theme';
import styled from 'styled-components';

const operations = ['+','-','×','÷'];

const Container = styled(View)`
  background-color: ${theme.mainLight};
`;

class Operations extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setMode = mode => this.setState({mode});
    this.setColor = color => this.setState({color});
    this.setOperation = operation => this.setState({operation});
    this.switchMode = mode => {
      if(!['default', 'painting'].includes(mode)) console.error(`mode ${mode} is not supported in Operations`);
      this.setState({
        mode : this.state.mode===mode ? this.state.previousMode : mode,
        previousMode : this.state.mode,
      });
    };
    this.editDigit = digit => {
      this.setState({digitPicking : true, focusedDigit : digit});
    };
    this.getDigit = () => {
      return this.state.focusedDigit && this.state.focusedDigit.current && this.state.focusedDigit.current.state;
    };
    this.state = {
      mode: 'default',
      color: 'black',
      operation: '+',
      colorPicking: false,
      digitPicking: false,
    };
    this.operations = operations.reduce(
      (acc, op) => {acc[op] = <Operation type={op} digitPress={this.mode==='default' ? this.editDigit : undefined} />; return acc;}
      , {});
  }
  render() {
    return (
      <Container>
        <View>
          <Toolbar align='flex-end'>
            <Row>
              <Tool onPress={() => this.switchMode('painting')} selected={this.state.mode==='painting'} img={paintIcon} />
              <Appearing mount={this.state.mode==='painting'} delay={1} >
                <ColorDisplayer color={this.state.color} onPress={() => this.setState({colorPicking:true})}/>
              </Appearing>
            </Row>
            <Row>
              {operations.map((op,i) => <Tool key={'tool'+i} text={op} onPress={() => this.setOperation(op)} selected={op===this.state.operation}/>)}
            </Row>
          </Toolbar>
          <View>
            {this.operations[this.state.operation]}
          </View>
        </View>
        <View style={{position:'absolute'}}>
          <Appearing mount={this.state.colorPicking} delay={0.5}>
            <ColorPicker selected={this.state.color} close={() => this.setState({colorPicking: false})} onUpdate={color => this.setState({color})}/>
          </Appearing>
          <Appearing mount={this.state.digitPicking} delay={0.5}>
            <DigitPicker selected={this.getDigit().value} close={() => this.setState({digitPicking: false})} onUpdate={value => this.getDigit().value = value}/>
          </Appearing>
        </View>
      </Container>
    );
  }
}
  
export default Operations;
  
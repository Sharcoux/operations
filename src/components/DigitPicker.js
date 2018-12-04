import React from 'react';
import Digit from 'components/Digit';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Picker from 'components/Picker';

const DigitRenderer = styled(Digit)`
    border: 2px raised '#888';
`;

const SelectedDigit = styled(DigitRenderer)`
    filter: none;
    border: 2px solid red;
    position: relative;
    left: 2px;
    top: 2px
`;

const Renderer = props => (props.selected ? <SelectedDigit {...props} /> : <DigitRenderer {...props} />);
Renderer.propTypes = {
  selected: PropTypes.bool,
};

const digits = '0123456789_. '.split('');

const DigitPicker = props => (<Picker values={digits} renderer={Renderer} {...props} />);
DigitPicker.propTypes = {
  onUpdate: PropTypes.func,
  close : PropTypes.func,
  selected: PropTypes.string,
};

export default DigitPicker;

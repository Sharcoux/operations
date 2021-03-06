import React from 'react';
import ColorDisplayer from 'components/ColorDisplayer';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Picker from 'components/Picker';
import theme from 'theme';

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

const Renderer = props => (props.selected ? <SelectedColor {...props} /> : <Color {...props} />);
Renderer.propTypes = {
  selected: PropTypes.bool,
};

const ColorPicker = props => (<Picker values={theme.colors} renderer={Renderer} {...props} />);
ColorPicker.propTypes = {
  onUpdate: PropTypes.func,
  close : PropTypes.func,
  selected: PropTypes.string,
};

export default ColorPicker;

import { TextInput } from 'react-native-fix';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DigitEditor = styled(TextInput)`
    color: ${props => props.color || 'black'};
    width: 1.5em;
    height: 1.5em;
    margin: auto;
`;
DigitEditor.propTypes = {
  color: PropTypes.string,
};
export default DigitEditor;
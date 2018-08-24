import { Text } from 'react-native-fix';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Digit = styled(Text)`
    color: ${props => props.color || 'black'};
    width: 1.5em;
    height: 1.5em;
    margin: auto;
`;
Digit.propTypes = {
  color: PropTypes.string,
};
export default Digit;
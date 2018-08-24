import styled from 'styled-components';
import Tool from 'components/Tool';

const ColorDisplayer = styled(Tool)`
    width: 1.4em;
    background-color: ${props => props.color};
    border: 1px solid #888;
`;
export default ColorDisplayer;
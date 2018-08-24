import styled from 'styled-components';
import { View } from 'react-native-fix';

const Row = styled(View)`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: ${props => props.align ? props.align : 'space-between'};
`;
export default Row;
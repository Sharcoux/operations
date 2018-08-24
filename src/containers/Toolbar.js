import React from 'react';
import styled from 'styled-components';
import Row from 'components/Row';
import PropTypes from 'prop-types';

const Container = styled(Row)`
    font-family: Comic Sans MS;
    font-size:1em;
    align-items:stretch;
    border-bottom: 1px solid black;
`;

const Toolbar = props => (<Container align='space-between' {...props}>
  {props.children}
</Container>);

export default Toolbar;

Toolbar.propTypes = {
  children: PropTypes.node,
};
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ExampleComponent({ color }) {
  return (
    <Container color={color}>
      <h1>Hello world</h1>
    </Container>
  );
}

ExampleComponent.defaultProps = {
  color: '#55F',
};

ExampleComponent.propTypes = {
  color: PropTypes.string,
};

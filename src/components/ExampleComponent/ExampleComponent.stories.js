import React from 'react';

import ExampleComponent from './index';

export default {
  title: 'ExampleComponent',
};

export const normal = () => <ExampleComponent />;

export const anotherColor = () => <ExampleComponent color="#f55" />;

import React from 'react';

import { render, screen } from '../test-utils';
import Heading from '../../components/Heading';

describe('Heading', () => {
  it('should render a testing h1', () => {
    render(<Heading />);

    const heading = screen.getByText(
      /TEST THIS/i
    );

    expect(heading).toBeInTheDocument();
  })
})
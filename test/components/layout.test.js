import React from 'react';

import { render, screen } from '../test-utils';
import Layout from '../../components/Layout/Layout';

jest.mock('../../components/AnchoredLogo/AnchoredLogo', () =>
  () => <div data-testid="anchored-logo" />)

describe('Layout', () => {
  it('should have an linked logo component', () => {
    const { getByTestId } = render(<Layout />);

    expect(getByTestId(/anchored-logo/)).toBeInTheDocument();
  })

  it('should render a theme switcher button', () => {
    render(<Layout />);

    const switcher = screen.getByRole('button');

    expect(switcher).toBeInTheDocument();
  })
})
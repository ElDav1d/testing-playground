import React from 'react';

import { render, screen, within } from '../test-utils';
import AnchoredLogo from '../../components/AnchoredLogo/AnchoredLogo';


describe('AnchoredLogo', () => {
  beforeEach(() => {
    render(<AnchoredLogo />);
  })

  it('should be a link', () => {
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  })

  it('link should have an svg logo', () => {
    const link = screen.getByRole('link');

    const svgTitle = within(link).getByText(/logo/);

    expect(svgTitle);
  })
})
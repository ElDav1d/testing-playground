import React from 'react';

import { render, screen, within } from '../test-utils';
import CountriesTable from '../../components/CountriesTable/CountriesTable.tsx';

const countriesMock = [
  {
    alpha3Code: "ESP",
    name: "Españistán"
  },
  {
    alpha3Code: "CHQ",
    name: "Chiquitistán"
  },
]

describe('CountriesTable', () => {
  beforeEach(() => {
    render(<CountriesTable countries={countriesMock} />);
  });

  it('should render a list', () => {
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should render list items', () => {
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('a list item should link to a country page with an alpha3Code', () => {
    const listItem = screen.getAllByRole('listitem');

    const targetedLink = within(listItem[0]).getByRole('link', { name: /españistán españistán 0 0/i });

    expect(targetedLink).toHaveAttribute('href', '/country/ESP');
  });
})
import React from 'react';

import { render, screen, cleanup } from '../test-utils';
import Home from '../../pages/index.tsx';
import CountriesTable from '../../components/CountriesTable/CountriesTable.tsx';
import SearchInput from '../../components/SearchInput/SearchInput.tsx';
import userEvent from '@testing-library/user-event';

const countriesMock = [
  {
    name: "Españistán",
    region: "Europe",
    subregion: "Southern Europe",

  },
  {
    name: "Chiquitistán",
    region: "Asia",
    subregion: "Southern Asia"
  },
]

describe('Home filtered list', () => {
  beforeEach(() => {
    render(
      <Home countries={countriesMock}>
        <SearchInput />
        <CountriesTable countries={() => { }} />
      </Home>
    );
  })

  afterEach(() => {
    cleanup();
  })

  it('should render filtered list when matching name, region or subregion', () => {

    userEvent.type(screen.getByRole('textbox'), 'esp');

    expect(screen.getAllByRole('listitem')).toHaveLength(1);

  })

  it('should not render filtered list when not matching name, region or subregion', () => {
    userEvent.type(screen.getByRole('textbox'), 'jarl');

    expect(screen.queryByRole('list')).toBeNull();
  })
})

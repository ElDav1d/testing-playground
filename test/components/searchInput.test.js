import React from 'react';

import { render, screen } from '../test-utils';
import SearchInput from '../../components/SearchInput/SearchInput.tsx';
import userEvent from '@testing-library/user-event';

describe('SearchInput', () => {
  it('calls the handler', () => {
    const onChange = jest.fn();

    render(<SearchInput
      value=""
      placeholder=""
      onChange={onChange} />
    );

    userEvent.type(screen.getByRole('textbox'), '123');

    expect(onChange).toHaveBeenCalledTimes(3);
  })
})
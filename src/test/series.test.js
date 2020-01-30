import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Series from '../components/series';

test('It should not allow alphabets as input', () => {
    const inputCaller = () => {
        const comp = render(<Series />)
        const input = comp.getByLabelText('number-input')
        return {
          input,
          ...comp,
        }
      }
  const { input } = inputCaller();
  expect(input.value).toBe('')
  act(() => {
    fireEvent.change(input, { target: { value: 'day' } })
  });
  expect(input.value).toBe('')
});


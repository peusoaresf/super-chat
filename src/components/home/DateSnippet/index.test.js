import React from 'react';
import renderer from 'react-test-renderer';
import DateSnippet from './';

describe('DateSnippet renders the date correctly', () => {
  it('renders today correctly', () => {
    const today = new Date();
    today.setHours(5);
    today.setMinutes(8);

    testWith(today, '05:08');
  });

  it('renders yesterday correctly', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    testWith(yesterday, 'yesterday');
  });

  it('renders old dates correctly', () => {
    const date = new Date();
    date.setDate(1);
    date.setMonth(5);
    date.setFullYear(2015);

    testWith(date, date.toLocaleDateString());
  });

  const testWith = (date, expected) => {
    const component = renderer.create(<DateSnippet date={date} />);

    expect(component.toJSON().children).toEqual([expected]);
  };
});
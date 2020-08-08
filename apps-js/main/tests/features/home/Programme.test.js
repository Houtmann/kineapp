import React from 'react';
import { shallow } from 'enzyme';
import { Programme } from '../../../src/features/home/Programme';

describe('home/Programme', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Programme {...props} />
    );

    expect(
      renderedComponent.find('.home-programme').length
    ).toBe(1);
  });
});

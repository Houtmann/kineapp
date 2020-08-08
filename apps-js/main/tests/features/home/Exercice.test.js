import React from 'react';
import { shallow } from 'enzyme';
import { Exercice } from '../../../src/features/home/Exercice';

describe('home/Exercice', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Exercice {...props} />
    );

    expect(
      renderedComponent.find('.home-exercice').length
    ).toBe(1);
  });
});

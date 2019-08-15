import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

describe('App', () => {
  it('should update state with a new idea when addIdea is called', () => {
    //Setup
    const wrapper = shallow(<App />);
    const mockIdea = {
      id: Date.now(),
      title: 'Blah',
      description: 'Blah blah blah',
    };
    const expected = [mockIdea];

    //Execution
    wrapper.instance().addIdea(mockIdea);

    //Expectation
    expect(wrapper.state('ideas')).toEqual(expected);
  })
})

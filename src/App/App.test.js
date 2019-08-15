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

  it('should update state with one less idea when removeIdea is called', () => {
    //Setup
    const wrapper = shallow(<App />);
    const mockIdeas = [{
      id: 1,
      title: 'Blah',
      description: 'Blah blah blah'
    },
    {
      id: 2,
      title: 'Blah',
      description: 'Blah blah blah'
    }]
    const filteredIdeas = [{
      id: 2,
      title: 'Blah',
      description: 'Blah blah blah'
    }]

    wrapper.setState({ideas: mockIdeas})

    wrapper.instance().removeIdea(1);
    expect(wrapper.state('ideas')).toEqual(filteredIdeas)
  })
})

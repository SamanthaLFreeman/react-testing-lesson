import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('Card', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Card
      title="Blah"
      description="Blah blah blah"
      id={1}
      removeIdea={jest.fn()}
      />);

      expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot if the card is favorited', () => {
    const wrapper = shallow(<Card
      title="Blah"
      description="Blah blah blah"
      id={1}
      removeIdea={jest.fn()}
      isFavorite={true}
    />);

    expect(wrapper).toMatchSnapshot()
  })

  it('should call the removeIdea prop with the card\'s id when clicked', () => {
    //Setup
    const removeIdeaMock = jest.fn()
    const wrapper = shallow(<Card
      title="Blah"
      description="Blah blah blah"
      id={1}
      removeIdea={removeIdeaMock}
      isFavorite={true}
    />);
    
    //Execution
    wrapper.find('button').simulate('click');

    //Expectation
    expect(removeIdeaMock).toHaveBeenCalledWith(1);
  })
})

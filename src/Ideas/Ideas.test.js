import React from 'react'
import { shallow } from 'enzyme'
import Ideas from './Ideas'


describe('Ideas', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Ideas
      ideas={[{id:1, title: "Blah", description: "Blah blah blah"}]}
      removeIdea={jest.fn()}
    />)

    expect(wrapper).toMatchSnapshot()
  })
})
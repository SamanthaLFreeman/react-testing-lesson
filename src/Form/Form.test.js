import React from 'react'
import { shallow } from 'enzyme'
import Form from './Form'

describe('Form', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Form
      addIdea={jest.fn()}
      />)
    
    expect(wrapper).toMatchSnapshot()
  })
})
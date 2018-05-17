import React from 'react'
import { mount } from 'enzyme'
import { Radio } from '../src'

describe('<Radio>', () => {
  it('has default type radio', () => {
    const wrapper = mount(<Radio id="Radio_main" labelText="Basic radio" />)
    const component = wrapper.find('input')
    expect(component.prop('type')).toEqual('radio')
  })
})

import React from 'react'
import { mount } from 'enzyme'
import { Checkbox } from '../src'

describe('<Checkbox>', () => {
  const wrapper = mount(
    <Checkbox id="Checkbox_main" labelText="Basic checkbox" />
  )
  const component = wrapper.find('input')

  it('has default type checkbox', () => {
    expect(component.is('[type="checkbox"]')).toBe(true)
  })
})

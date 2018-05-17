import React from 'react'
import { mount } from 'enzyme'
import { Label } from '../src'

describe('<Label>', () => {
  const wrapper = mount(<Label htmlFor="label_id">Default Label</Label>)
  const component = wrapper.find('label')

  // console.log(wrapper.debug())
  // console.log(component.debug())

  it('props', () => {
    expect(wrapper.prop('isRequired')).toBe(false)
  })

  it('accepts & renders children', () => {
    expect(component.text()).toEqual('Default Label')
  })

  it('has default styles', () => {
    expect(component.hasClass('pl-label')).toBe(true)
  })

  describe('<Label htmlFor="Label_main">', () => {
    it('has property unique for', () => {
      const component = mount(
        <Label htmlFor="Label_main">Simple Label main</Label>
      )
      expect(component.prop('htmlFor')).toEqual('Label_main')
    })
  })

  describe('<Label isDisabled>', () => {
    const component = mount(
      <Label isDisabled htmlFor="label_id">
        Disabled Label
      </Label>
    )

    it('has isDisabled styles', () => {
      expect(component.find('label').hasClass('pl-label--disabled')).toBe(true)
    })
  })

  describe('<Label isRequired>', () => {
    it('has isDisabled property', () => {
      const component = mount(
        <Label isRequired htmlFor="label_id">
          Simple Label main
        </Label>
      )
      expect(component.find('label').hasClass('pl-label--required')).toBe(true)
    })
  })
})

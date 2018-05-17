import React from 'react'
import { mount } from 'enzyme'
import { InputCheck } from '../src/inputCheck'

describe('<InputCheck>', () => {
  const wrapper = mount(
    <InputCheck id="id_main" type="checkbox" labelText="Basic check" />
  )
  const component = wrapper.find('input')

  it('has default styles', () => {
    expect(component.hasClass('pl-checkbox')).toBe(true)
  })

  it('has id prop', () => {
    expect(component.find('input').is('[id="id_main"]')).toBe(true)
  })

  describe('<InputCheck isDisabled isChecked/>', () => {
    const component = mount(
      <InputCheck
        id="check_id"
        type="checkbox"
        labelText="Basic check"
        isDisabled
        isChecked
      />
    )

    it('has been checked', () => {
      expect(component.find('input').is('[checked]')).toBe(true)
    })

    it('has isDisabled styles', () => {
      expect(component.find('input').hasClass('pl-checkbox--disabled')).toBe(
        true
      )
    })

    it('accepts & triggers a custom click handler', () => {
      const onClickHandler = jest.fn()
      const component = mount(
        <InputCheck
          type="checkbox"
          id="check_id"
          labelText="Basic check"
          onClick={onClickHandler}
        />
      )
      component.find('input').simulate('click')
      expect(onClickHandler).toHaveBeenCalled()
    })
  })

  describe('<InputCheck isDisabled isChecked />', () => {
    const component = mount(
      <InputCheck
        id="radio_id"
        type="radio"
        labelText="Basic check"
        isDisabled
        isChecked
      />
    )

    it('has default styles', () => {
      expect(component.find('input').hasClass('pl-radio')).toBe(true)
    })

    it('has id prop', () => {
      expect(component.find('input').is('[id="radio_id"]')).toBe(true)
    })

    it('has been checked', () => {
      expect(component.find('input').is('[checked]')).toBe(true)
    })

    it('has isDisabled styles', () => {
      expect(component.find('input').hasClass('pl-radio--disabled')).toBe(true)
    })

    it('accepts & triggers a custom click handler', () => {
      const onClickHandler = jest.fn()
      const component = mount(
        <InputCheck
          type="radio"
          id="radio_id"
          labelText="Basic check"
          onClick={onClickHandler}
        />
      )
      component.find('input').simulate('click')
      expect(onClickHandler).toHaveBeenCalled()
    })
  })
})

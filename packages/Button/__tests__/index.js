import React from 'react'
import { mount } from 'enzyme'
import { Button } from '../src'

describe('<Button>', () => {
  const wrapper = mount(<Button>Default button</Button>)
  const component = wrapper.find('button')

  it('accepts & renders children', () => {
    expect(component.text()).toEqual('Default button')
  })

  it('has type button property by default', () => {
    expect(component.prop('type')).toEqual('button')
  })

  it('has default primary appearance', () => {
    expect(component.hasClass('pl-btn--primary')).toBe(true)
  })

  it('accepts & triggers a custom click handler', () => {
    const onClickHandler = jest.fn()
    const component = mount(
      <Button onClick={onClickHandler}>with onClick</Button>
    )
    component.simulate('click')
    expect(onClickHandler).toHaveBeenCalled()
  })

  describe('<Button type="submit">', () => {
    it('has type submit property', () => {
      const component = mount(<Button type="submit">Submit button</Button>)
      expect(component.prop('type')).toEqual('submit')
    })
  })

  describe('<Button isDisabled>', () => {
    const component = mount(<Button isDisabled>Disabled button</Button>)

    it('has disabled attribute', () => {
      expect(component.find('button').is('[disabled]')).toBe(true)
    })

    it('has disabled styles', () => {
      expect(component.find('button').hasClass('pl-btn--disabled')).toBe(true)
    })
  })

  describe('<Button isActive>', () => {
    it('has active styles', () => {
      const component = mount(<Button isActive>Active button</Button>)
      expect(component.find('button').hasClass('pl-btn--active')).toBe(true)
    })
  })

  describe('<Button appearance="primary">', () => {
    it('has primary appearance', () => {
      const component = mount(
        <Button appearance="primary">Primary button</Button>
      )
      expect(component.find('button').hasClass('pl-btn--primary')).toBe(true)
    })
  })

  describe('<Button appearance="secondary">', () => {
    it('has secondary appearance', () => {
      const component = mount(
        <Button appearance="secondary">Secondary button</Button>
      )
      expect(component.find('button').hasClass('pl-btn--secondary')).toBe(true)
    })
  })

  describe('<Button size="small">', () => {
    it('has small styles', () => {
      const component = mount(<Button size="small">Small button</Button>)
      expect(component.find('button').hasClass('pl-btn--small')).toBe(true)
    })
  })

  describe('<Button size="large">', () => {
    it('has large styles', () => {
      const component = mount(<Button size="large">Large button</Button>)
      expect(component.find('button').hasClass('pl-btn--large')).toBe(true)
    })
  })

  describe('<Button isLight>', () => {
    it('has light styles', () => {
      const component = mount(<Button isLight>Primary light button</Button>)
      expect(component.find('button').hasClass('pl-btn--light')).toBe(true)
    })
  })

  describe('<Button intent="transactional">', () => {
    it('has intent styles', () => {
      const component = mount(
        <Button intent="transactional">Transactional button</Button>
      )
      expect(component.find('button').hasClass('pl-btn--transactional')).toBe(
        true
      )
    })
  })

  describe('<Button shouldFillContainer>', () => {
    it('has fill styles', () => {
      const component = mount(<Button shouldFillContainer>Fill button</Button>)
      expect(component.find('button').hasClass('pl-btn--fill')).toBe(true)
    })
  })
})

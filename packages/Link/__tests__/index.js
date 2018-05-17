import React from 'react'
import { mount } from 'enzyme'
import { Link } from '../src'

describe('<Link>', () => {
  const wrapper = mount(<Link>Default Link</Link>)
  const component = wrapper.find('a')

  it('accepts & renders children', () => {
    expect(component.text()).toEqual('Default Link')
  })

  it('has default styles', () => {
    expect(component.hasClass('pl-link')).toBe(true)
  })

  it('has default primary appearance', () => {
    expect(component.hasClass('pl-link--primary')).toBe(true)
  })

  it('has external target set', () => {
    const component = mount(<Link external>Link</Link>)
    expect(component.find('a').is('[target="_blank"]')).toBe(true)
  })

  it('has url prop set', () => {
    const component = mount(<Link url="https://cl.studio">Link</Link>)
    expect(component.find('a').is('[href="https://cl.studio"]')).toBe(true)
  })

  it('has unstyled prop set', () => {
    const component = mount(
      <Link url="https://cl.studio" unstyled>
        Link
      </Link>
    )
    expect(component.find('a').hasClass('pl-link')).toBe(false)
  })

  it('accepts & triggers a custom click handler', () => {
    const onClickHandler = jest.fn()
    const component = mount(<Link onClick={onClickHandler}>with onClick</Link>)
    component.simulate('click')
    expect(onClickHandler).toHaveBeenCalled()
  })

  describe('<Link appearance="primary">', () => {
    it('has primary appearance', () => {
      const component = mount(<Link appearance="primary">Primary Link</Link>)
      expect(component.find('a').hasClass('pl-link--primary')).toBe(true)
    })
  })

  describe('<Link appearance="secondary">', () => {
    it('has secondary appearance', () => {
      const component = mount(
        <Link appearance="secondary">Secondary Link</Link>
      )
      expect(component.find('a').hasClass('pl-link--secondary')).toBe(true)
    })
  })
})

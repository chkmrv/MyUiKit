import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from '../src';

describe('<Dropdown>', () => {
  const options = ['One','Two', 'Three'];
  const component = shallow(<Dropdown options={options} placeholder='Select...'/>);

  it('has default styles', () => {
    expect(component.hasClass('pl-dropdown')).toBe(true);
  });

  it('accepts click handler and open list options', () => {
    const component = shallow(<Dropdown options={options}  />);

    component.find('.pl-dropdown').simulate('click',
      { stopPropagation: ()=> undefined, preventDefault: ()=> undefined }
    );
    expect(component.state().isOpen).toBe(true);
    expect(component.find('.pl-dropdown').hasClass('is-open')).toBe(true);
  });

  describe('<Dropdown isDisabled />', () => {
      const component = shallow(<Dropdown isDisabled placeholder='Select...'/>);

      it('has isDisabled styles', () => {
          expect(component.find('.pl-dropdown--control').hasClass('pl-dropdown--disabled')).toBe(true);
      });
  });
});

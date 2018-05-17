import React from 'react';
import { Checkbox } from '../src';
import '../dist/styles.css';

import { storiesOf } from '@storybook/react';
import { withReadme }  from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';
import CheckboxReadme from '../README.md';

const stories = storiesOf('Checkbox', module);
stories.addDecorator(withReadme(CheckboxReadme));

stories.add('basic', withInfo('basic Checkbox')(() => (
  <div>
    <Checkbox
      id='basic_checkbox_1'
      name='test_name'
      isChecked={true}
      onChange={() => {}}/>

    <br/>
    <br/>

    <Checkbox
      id='basic_checkbox_2'
      name='test_name'
      labelText='Basic checkbox'
      labelClass='custom-Label-Checkbox'
      className='custom-Checkbox'
      isChecked={true}
      isDisabled={false}
      onChange={() => {}} />

    <br/>
    <br/>

    <Checkbox
      id='basic_checkbox_3'
      name='test_name'
      labelText='not checked checkbox'
      isChecked={false}
      onChange={() => {}}/>
  </div>
) ));

stories.add('disabled', withInfo()(() => (
  <Checkbox
    id='disabled_checkbox'
    name='test_name_disabled'
    labelText='disabled checkbox here'
    isChecked={true}
    isDisabled={true}
    onChange={()=>{}} />
)));
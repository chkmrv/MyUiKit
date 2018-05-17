import React from 'react'
import { Radio } from '../src'
import '../dist/styles.css'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withInfo } from '@storybook/addon-info'
import RadioReadme from '../README.md'

const stories = storiesOf('Radio', module)
  .addDecorator(withReadme(RadioReadme))
  .add(
    'basic',
    withInfo('basic Radio')(() => (
      <div>
        <Radio
          id="basic_radio_1"
          name="test_name"
          isChecked={true}
          onChange={() => {}}
        />

        <br />
        <br />

        <Radio
          id="basic_radio_2"
          name="test_name"
          labelText="Basic radio"
          labelClass="custom-label-radio"
          className="custom-radio"
          isChecked={true}
          isDisabled={false}
          onChange={() => {}}
        />

        <br />
        <br />

        <Radio
          id="basic_radio_3"
          name="test_name"
          labelText="not checked radio"
          isChecked={false}
          onChange={() => {}}
        />
      </div>
    ))
  )
  .add(
    'disabled',
    withInfo()(() => (
      <Radio
        id="disabled_radio"
        name="test_name_disabled"
        labelText="disabled radio here"
        isChecked={true}
        isDisabled={true}
        onChange={() => {}}
      />
    ))
  )

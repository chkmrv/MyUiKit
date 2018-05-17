import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import '../dist/styles.css';
import { Label } from '../src';

const stories = storiesOf('Label', module);

stories.add(
  `default`,
  withInfo()(() => (
    <div>
      <Label
        htmlFor='test_id'
        children='label_text'
        className='custom class name'
        isDisabled={false}
        isRequired={false}/>
    </div>
  ))
);

stories.addDecorator(withSmartKnobs);
stories.addDecorator(withKnobs);


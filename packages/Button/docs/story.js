import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme }  from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import '../dist/styles.css';
import { Button } from '../src';
import ButtonReadme from '../README.md';

const buttonEvents = {
  onClick: action(console.log('click')),
};

const stories = storiesOf('Button', module);

stories.addDecorator(withReadme(ButtonReadme));

stories.add(
  'types',
  withInfo()(() => (
    <div>
      <Button {...buttonEvents}>Default button</Button>&nbsp;
      <Button type="submit" {...buttonEvents}>Submit button</Button>&nbsp;
      <a className="pl-btn" tabIndex={0} {...buttonEvents}>Link</a>
    </div>
  ))
);

const appearances = ['primary', 'secondary'];
stories.add(
  `appearances`,
  withInfo()(() => (
    <div>
    {
      appearances.map(appearance => {
        const name = `${appearance.charAt(0).toUpperCase()}${appearance.substr(1)} button`;
        return (
          <Fragment key={appearance}>
            <Button appearance={appearance} {...buttonEvents}>
              {name}
            </Button>&nbsp;
          </Fragment>
        )
      })
    }
    </div>
  ))
);

const sizes = ['small', 'normal', 'large'];
stories.add(
  `sizes`,
  withInfo()(() => (
    <div>
    {
      sizes.map(size => {
        const name = `${size.charAt(0).toUpperCase()}${size.substr(1)} button`;
        return (
          <Fragment key={size}>
            <Button size={size} {...buttonEvents}>
              {name}
            </Button>&nbsp;
          </Fragment>
        )
      })
    }
    <Button shouldFillContainer {...buttonEvents}>Full container width button</Button>
    </div>
  ))
);

stories.add('state', withInfo()(() => (
  <div>
    <Button isDisabled {...buttonEvents}>Disabled button</Button>&nbsp;
    <Button isActive {...buttonEvents}>Active button</Button>
  </div>
)));

stories.add('isLight', withInfo()(() => (
  <div>
    <Button appearance="primary" {...buttonEvents}>Primary Button</Button>&nbsp;
    <Button appearance="primary" isLight {...buttonEvents}>Primary Light Button</Button>
  </div>
)));

stories.add('intent', withInfo()(() => (
  <div>
    <Button appearance="primary" {...buttonEvents}>Button</Button>&nbsp;
    <Button appearance="primary" intent="transactional" {...buttonEvents}>Transactional Button</Button>
  </div>
)));

stories.addDecorator(withSmartKnobs)
stories.addDecorator(withKnobs)
stories.add(
  'playground',
  () => (
    <Button {...buttonEvents}>Default button</Button>
  )
);

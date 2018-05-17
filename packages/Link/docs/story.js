import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme }  from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import '../dist/styles.css';
import { Link } from '../src';
import LinkReadme from '../README.md';

const LinkEvents = {
  onClick: action(console.log('click')),
};

const stories = storiesOf('Link', module);

stories.addDecorator(withReadme(LinkReadme));

const appearances = ['primary', 'secondary'];
stories.add(
  `appearances`,
  withInfo()(() => (
    <div>
    {
      appearances.map(appearance => {
        const name = `${appearance.charAt(0).toUpperCase()}${appearance.substr(1)} Link`;
        return (
          <Fragment key={appearance}>
            <Link appearance={appearance} {...LinkEvents}>
              {name}
            </Link>&nbsp;
          </Fragment>
        )
      })
    }
    </div>
  ))
);

stories.add('external', withInfo()(() => (
  <div>
    <Link url="https://cl.studio" {...LinkEvents}>Internal Link</Link>&nbsp;
    <Link url="https://cl.studio" external {...LinkEvents}>External Link</Link>
  </div>
)));

stories.add('unstyled', withInfo()(() => (
  <div>
    <Link url="https://cl.studio" {...LinkEvents}>Styled Link</Link>&nbsp;
    <Link url="https://cl.studio" unstyled {...LinkEvents}>Unstyled Link</Link>
  </div>
)));

stories.addDecorator(withSmartKnobs)
stories.addDecorator(withKnobs)
stories.add(
  'playground',
  () => (
    <Link url="https://cl.studio" {...LinkEvents}>Default Link</Link>
  )
);

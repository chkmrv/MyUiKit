import React from 'react';
import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import JSXAddon from 'storybook-addon-jsx';
import infoAddon, { setDefaults } from '@storybook/addon-info';

setOptions({
  name: 'Pattern Library',
  url: '#',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: false,
  hierarchySeparator: null,
  hierarchyRootSeparator: null,
  sidebarAnimations: true,
  selectedAddonPanel: undefined,
});

setAddon(JSXAddon);

setDefaults({
  header: true,
  inline: true,
  source: true,
  styles: {
      header: {
        body: {
          paddingTop: 0,
        },
      },
      infoBody: {
        border: 'none',
        padding: 0,
        boxShadow: 'none',
      }
  },
  TableComponent: ({ propDefinitions }) => {
    const children = propDefinitions.map(
      ({ property, propType, required, description, defaultValue }) => {
        return (
          <tr className='prop' key={property}>
            <td style={{verticalAlign: 'top', padding: '1rem 1rem 1rem 0'}}>
              <code><strong>{property}</strong></code>
            </td>
            <td style={{ padding: '1rem 0 1rem 1rem'}}>
              <code>{propType.name} {defaultValue && `= ${defaultValue}`}</code>
              <p>{propType.value && propType.value.map(prop => prop.value).join(' ')}</p>
              <p>{description}</p>
              <span>{required && 'required'}</span>
            </td>
          </tr>
        );
      }
    );

    return (
      <table className='props'>
        <tbody>
          { children }
        </tbody>
      </table>
    );
  }
})
setAddon(infoAddon);

const req = require.context('../../packages', true, /docs\/story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

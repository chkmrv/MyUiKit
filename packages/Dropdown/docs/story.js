import React from 'react';
import { Dropdown } from '../src/index';
import { storiesOf } from '@storybook/react';
import { withReadme }  from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import DropdownReadme from '../README.md';
import '../dist/styles.css';
import './styles.css';

const stories = storiesOf('Dropdown', module);
const defaultDisabledOption =  { value: 'Berlin', label: 'berlin'};
const options1 = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three'}
];
const options2 = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two'},
  {
    type: 'group', name: 'group1', items: [
      { value: 'three', label: 'Three'},
      { value: 'four', label: 'Four' }
    ]
  },
  {
    type: 'group', name: 'group2', items: [
      { value: 'three', label: 'Three' },
      { value: 'four', label: 'Four' }
    ]
  }
];

stories.addDecorator(withReadme(DropdownReadme));

stories.add('basic', withInfo('basic Dropdown')(() => (
  <div>
    <Dropdown/>
    <br/>
    <br/>
    <Dropdown
      className=""
      onChange={this._onSelect}
      placeholder="Select an option..."
      options={options1}
    />
    <br/>
    <br/>
    <DropdownExample />
  </div>
)));

stories.add('styles', withInfo('different styles of Dropdown')(() => (
  <div>
    <h3>Standart Dropdown</h3>
    <Dropdown
      options={options1}
      onChange={this._onSelect}
      placeholder="Select an option"
      className=''
      listClassName=''
    />
  </div>
)));

stories.add('disabled', withInfo()(() => (
  <div>
    <Dropdown isDisabled />
    <br/>
    <Dropdown isDisabled value={defaultDisabledOption}/>
  </div>
)));

class DropdownExample extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: { value: 'two', label: 'Two'}
    };
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    this.setState({selected: option})
  }

  render () {
    const { toggleGroupOption, toggleClassName, toggleListClassName, toggleOptionsClassName } = this.state;

    const defaultOption = this.state.selected;
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label;
    let options3 = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two', className:  `${toggleOptionsClassName ? "my-custom-class" : ''}`},
      { value: 'three', label: 'Three'}
    ];
    return (
      <section>
        <h3>Object Array and Custom ClassNames Example </h3>
        <div className="buttons">
          <button onClick={() => this.setState({ toggleGroupOption: !toggleGroupOption })}>
            Add group options
          </button>&emsp;
          <button onClick={() => this.setState({ toggleClassName: !toggleClassName })}>
            Toggle dropdown custom class
          </button>&emsp;
          <button onClick={() => this.setState({ toggleListClassName: !toggleListClassName })}>
            Toggle list custom class
          </button>&emsp;
          <button onClick={() => this.setState({ toggleOptionsClassName: !toggleOptionsClassName })}>
            Toggle options custom class
          </button>
        </div>

        <br/>
        <Dropdown
          options={toggleGroupOption ? options2 : options3}
          onChange={this._onSelect}
          value={defaultOption}
          placeholder="Select an option"
          className={ toggleClassName ? 'my-custom-class' : '' }
          listClassName={ toggleListClassName ? 'my-custom-class' : '' }
        />
        <br/>
        <div className='result'>
          You selected:
          <strong> {placeHolderValue} </strong>
        </div>
        <section>
          <h4>Options: </h4>
          <div className='code'>
            <pre>
              {`
                const options = [
                  { value: 'one', label: 'One' },
                  { value: 'two', label: 'Two'${toggleOptionsClassName ? ', className \'my-custom-class\'' : ''} },
                  ${toggleGroupOption ? (`{
                    type: 'group', name: 'group1', items: [
                      { value: 'three', label: 'Three' },
                      { value: 'four', label: 'Four'${toggleOptionsClassName ? ', className: \'my-custom-class\'' : ''} }
                    ]
                  },
                  {
                    type: 'group', name: 'group2', items: [
                      { value: 'three', label: 'Three'},
                      { value: 'four', label: 'Four' }
                    ]
                  }`) : '' }
                ]

                .my-custom-class {
                  fontSize: '16px',
                  fontWeight: 'bold',
                  background: 'black',
                  borderBottom: '1px solid green'
                }`}
            </pre>
          </div>
          <h4>Usage with custom classeName: </h4>
          <div className='code'>
            <pre>
              {`
                <Dropdown
                  options={options}
                  value={defaultOption}
                  placeholder="Select an option"
                  className=${ toggleClassName ? '"my-custom-class"' : '""' }
                  listClassName=${ toggleListClassName ? '"my-custom-class"' : '""' }
                />`
              }
            </pre>
          </div>
        </section>
      </section>
    )
  }
}

export {DropdownExample};


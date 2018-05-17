# Radio

## Installation

```bash
yarn add @chantelle/radio
```

## Usage

First, include the CSS in your HTML:

```html
<link rel="stylesheet" href="node_modules/@chantelle/radio/dist/styles.css">
```

> Note: you can import the CSS directly into your project if your bundler supports it:

```js
 import '@chantelle/radio/dist/styles.css';
```

### React Component

```jsx
import Button from '@chantelle/radio';

ReactDOM.render(
   <Radio
        id='basic_radio'
        name='test_name'
        labelText='Basic radio'
        labelClass='custom-Label-radio'
        className='custom-radio'
        isChecked={checked}
        isDisabled={false}
        onChange={this.handleChange.bind(this)} />,
  container
);
```

### CSS API

To use the Radio component, add the `.pl-radio` to the `<input type="radio" />` element to apply the styles.
Do not forget to add `label` for you radio button, its required (you can add one with empty string)

```html
    <div class="pl-radio">
        <input id="basic_radio_3" type="radio" class="pl-radio"/>
        <label for="basic_radio_3">
            <span>btn radio</span>
        </label>
    </div>
```

#### State

Radio with `disabled` attribute already apply the disabled styles. The `.pl-radio--disabled` class is reserved for links that have the `.pl-radio` class.


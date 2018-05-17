# Checkbox

## Installation

```bash
yarn add @chantelle/checkbox
```

## Usage

First, include the CSS in your HTML:

```html
<link rel="stylesheet" href="node_modules/@chantelle/checkbox/dist/styles.css">
```

> Note: you can import the CSS directly into your project if your bundler supports it:

```js
 import '@chantelle/checkbox/dist/styles.css';
```

### React Component

```jsx
import Button from '@chantelle/checkbox';

ReactDOM.render(
   <Checkbox
        id='basic_checkbox'
        name='test_name'
        labelText='Basic checkbox'
        labelClass='custom-Label-Checkbox'
        className='custom-Checkbox'
        isChecked={checked}
        isDisabled={false}
        onChange={this.handleChange.bind(this)} />,
  container
);
```

### CSS API

To use the Checkbox component, add the `.pl-checkbox` to the `<Checkbox>` element to apply the styles.

```html
    <input
      type='checkbox'
      class='pl-checkbox'
      checked='checked'>
        <label for='my_checkbox'>my_checkbox</label>
  </input>
```

#### State

Checkbox with `disabled` attribute already apply the disabled styles. The `.pl-checkbox--disabled` class is reserved for links that have the `.pl-checkbox` class.


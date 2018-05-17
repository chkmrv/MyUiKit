#Dropdown

## Installation

```bash
yarn add @chantelle/dropdown
```

## Usage

First, include the CSS in your HTML:

```html
<link rel="stylesheet" href="node_modules/@chantelle/dropdown/dist/styles.css">
```

> Note: you can import the CSS directly into your project if your bundler supports it:

```js
 import '@chantelle/dropdown/dist/styles.css';
```

### React Component

```jsx
import { Dropdown } from '@chantelle/dropdown';

ReactDOM.render(
   <Dropdown
     options={options}
     value={defaultOption}
     placeholder="Select an option"
     className=""
     listClassName=""
   />,
  container
);
```

#### State

Dropdown with `disabled` attribute already apply the disabled styles. The `.pl-dropdown--disabled` class is reserved for links that have the `.pl-dropdown` class.


# Link

## Installation

```bash
yarn add @chantelle/link
```

## Usage

First, include the CSS in your HTML:

```html
<link rel="stylesheet" href="node_modules/@chantelle/link/dist/styles.css">
```

> Note: you can import the CSS directly into your project if your bundler supports it:

```js
 import '@chantelle/link/dist/styles.css';
```

### React Component

```jsx
import Link from '@chantelle/link';

ReactDOM.render(
  <Link url='https://cl.studio'>Example Link</Link>,
  container
);
```

### CSS API

To use the Link component, add the `.pl-link` to the `<a>` element to apply the styles.

#### Appearances

```html
<a class="pl-link pl-link--primary">Primary (default) link</a>
<a class="pl-link pl-link--secondary">Secondary link</a>
```

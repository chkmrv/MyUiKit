# Button

## Installation

```bash
yarn add @chantelle/button
```

## Usage

First, include the CSS in your HTML:

```html
<link rel="stylesheet" href="node_modules/@chantelle/button/dist/styles.css">
```

> Note: you can import the CSS directly into your project if your bundler supports it:

```js
 import '@chantelle/button/dist/styles.css';
```

### React Component

```jsx
import Button from '@chantelle/button';

ReactDOM.render(
  <Button appearance='primary'>Primary button</Button>,
  container
);
```

### CSS API

To use the Button component, add the `.pl-btn` to the `<button>` element to apply the styles.

#### Appearances

```html
<button type="button" class="pl-btn pl-btn--primary">Primary (default) button</button>
<button type="button" class="pl-btn pl-btn--secondary">Secondary button</button>
```

#### Theme

In case of use on a dark background, use the light version of each appearance.

```html
<button type="button" class="pl-btn pl-btn--primary">Primary button</button>
<button type="button" class="pl-btn pl-btn--primary pl-btn--light">Primary light button</button>
```

#### Sizes

```html
<button type="button" class="pl-btn pl-btn--small">Small button</button>
<button type="button" class="pl-btn">Normal (default) size button</button>
<button type="button" class="pl-btn pl-btn--large">Large button</button>
<!-- Fill container -->
<button type="button" class="pl-btn pl-btn--fill">Fill container button</button>
```

#### State

```html
<button type="button" class="pl-btn pl-btn--active">Active button</button>
```

Buttons with `disabled` attribute already apply the disabled styles. The `.pl-btn--disabled` class is reserved for links that have the `.pl-btn` class.

```html
<button type="button" class="pl-btn" disabled>Disabled button</button>
<a role="button" class="pl-btn pl-btn--disabled">Disabled anchor button</a>
```

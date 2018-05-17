# Chantelle Pattern Library

Before developing, read more info on [Confluence](https://editionlingerie.atlassian.net/wiki/spaces/DLD/pages/574160964/Pattern+Library+Development).

## Setup

- Install dependencies: `yarn`
- Build the components: `yarn build:all`
- Start Storybook: `yarn start:docs`

## Development

Once Storybook is started, you can work on your components and Storybook will watch changes and update the page accordingly.

Still, if you're writting PostCSS in a package, you should run locally `yarn build:css` with or without the `--watch` flag.

Same can be done with `yarn test`, it is runnable from root, or from package.

Package semantic versionning is handled by `lerna`.

# Orlando Interface Drupal theme

## Installing

We recommend using composer. Under repositories in the main project `composer.json` add:

```json
{
  "type": "git",
  "url": "git@github.com:cwrc/orlando_interface.git"
}
```

Then run 

```
composer require drupal/orlando_interface
```

Make sure that the tailwind CSS file is compiled by running

```bash
yarn build:css
```

And navigate at the site admin appearance to install it.

## Developing

Clone this repository and place it under `<web-root>/themes/custom`.

### Pre-requisites

Before starting, ensure that you are using at least the latest LTS release of
Node.js, once Node.js has been installed, we recommend to install yarn.

```bash
npm i -g yarn
```

To install the required packages.

```bash
yarn install
```

### Working on CSS

The project uses [Tailwind](https://tailwindcss.com/) and [PostCSS](https://postcss.org/). CSS scaffolding tasks use
the following logic:

  * `yarn build:css`
    Process sources without writing source maps.
  * `yarn build:css-dev`
    Process sources with (external) source maps.
  * `yarn watch:css`
    Watches source assets and applies distributive task if any of them changes.
  * `yarn watch:css-dev`
    Watches source assets and applies development task if any of them changes.

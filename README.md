# bud-favicon

**Use with Bud `^6.16.1`**

Leverage favicons-webpack-plugin to generate favicons via Bud.js

## Install

`npm install bud-favicon --save-dev` or `yarn add bud-favicon -D`

## How to use

1. Install it.
2. Add a `logo.png` to your `@src` directory
3. Your favicons will be emitted to `@build/assets` on build

## Configuration

You can pass any [configuration parameter that `favicons-webpack-plugin` expects](https://github.com/jantimon/favicons-webpack-plugin/tree/main) via `bud.favicon.setup()`:

```js
bud.favicon.setup(`logo.svg`);
```

```js
bud.favicon.setup({
    logo: 'logo.svg', // svg works too!
    mode: 'webapp', // optional can be 'webapp', 'light' or 'auto' - 'auto' by default
    devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default 
    favicons: {
      appName: 'my-app',
      appDescription: 'My awesome App',
      developerName: 'Me',
      developerURL: null, // prevent retrieving from the nearest package.json
      background: '#ddd',
      theme_color: '#333',
      icons: {
        coast: false,
        yandex: false
      }
    }
});
```

Thank you to [@strarsis](https://github.com/strarsis) for suggesting wrapping `favicons-webpack-plugin` into a Bud.js extension.

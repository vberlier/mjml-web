# mjml-web

[![npm](https://img.shields.io/npm/v/mjml-web.svg)](https://www.npmjs.com/package/mjml-web)
[![bundlephobia](https://img.shields.io/bundlephobia/minzip/mjml-web.svg)](https://www.npmjs.com/package/mjml-web)

> Browser-compatible [mjml](https://github.com/mjmlio/mjml) bundle.

## Installation

You can install `mjml-web` with your `npm` client of choice.

```bash
$ npm install mjml-web
```

## Usage

The default export is the `mjml2html` function. The package also re-exports the content of `mjml-core`.

- **Webpack** (recommended)

  ```js
  const mjml = await import(/* webpackChunkName: "mjml-web" */ 'mjml-web')
  const { default: mjml2html, registerComponent } = mjml

  registerComponent(MyComponent)
  mjml2html('<mjml>...</mjml>')
  ```

  ```js
  // webpack.config.js

  const TerserPlugin = require('terser-webpack-plugin')

  module.exports = {
    optimization: {
      minimizer: [
        new TerserPlugin({
          exclude: /mjml-web/,
        }),
      ],
    },
  }
  ```

- **Browser** ([codepen](https://codepen.io/vberlier/pen/xxVqMdP))

  ```html
  <script src="https://unpkg.com/mjml-web"></script>
  ```

  ```js
  const { default: mjml2html, registerComponent } = window.mjml

  registerComponent(MyComponent)
  mjml2html('<mjml>...</mjml>')
  ```

## Troubleshooting

- `Element doesn't exist or is not registered`

  You're probably using a bundler that's trying to minify `mjml-web` alongside your application. The original [mjml](https://github.com/mjmlio/mjml) package isn't meant to be used client-side and the component registration code can break depending on the way it gets minified.

  The solution is to separate `mjml-web` from the other chunks and exclude it from the minification process (see [above](#usage)).

---

License - [MIT](https://github.com/vberlier/mjml-web/blob/master/LICENSE)

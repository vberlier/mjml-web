# mjml-web

[![npm](https://img.shields.io/npm/v/mjml-web.svg)](https://www.npmjs.com/package/mjml-web)
[![bundlephobia](https://img.shields.io/bundlephobia/minzip/mjml-web.svg)](https://www.npmjs.com/package/mjml-web)

> Browser-compatible [mjml](https://github.com/mjmlio/mjml) bundle.

## Installation

You can install `mjml-web` with your `npm` client of choice.

```bash
$ npm install mjml-web
```

The bundle works in script tags too.

```html
<script src="https://unpkg.com/mjml-web"></script>
```

## Usage

The default export is the `mjml2html` function. The package also re-exports the content of `mjml-core`.

- **Bundler**

  ```js
  import mjml2html, { registerComponent } from 'mjml-web'

  registerComponent(MyComponent)
  mjml2html('<mjml>...</mjml>', { ... })
  ```

- **Browser**

  ```js
  mjml.registerComponent(MyComponent)
  mjml.mjml2html('<mjml>...</mjml>', { ... })
  ```

---

License - [MIT](https://github.com/vberlier/mjml-web/blob/master/LICENSE)

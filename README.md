# Puding

> [**Create React App**](https://github.com/facebook/create-react-app) fork by Cofab

[![NPM](https://img.shields.io/npm/v/puding.svg)](https://www.npmjs.com/package/puding)

> Intended for prototyping experiments, delivered as PWAs

Changes:

- Hot reloading in development
- Perfect score on Google Lighthouse (100 100 100 100)
- Markdown (& front-matter) support with [Mdx.js](https://github.com/mdx-js/mdx)
- Static snapshotting for production with [react-snapshot](https://github.com/geelen/react-snapshot)
- Native SVG with [svgr](https://github.com/smooth-code/svgr)
- Routing with [react-router](https://github.com/ReactTraining/react-router)
- [SASS](https://github.com/sass/node-sass) & [Foundation 6](https://github.com/zurb/foundation-sites)
- [Multicat](https://github.com/cofablab/multicat) analytics (GA, Fb pixel, Mixpanel, ...)
- [Netlify CMS](https://www.netlifycms.org/) integration & config
- Utilities and helpers ([classnames](https://github.com/JedWatson/classnames), [typography.js](https://github.com/KyleAMathews/typography.js), ...)
- OpenGraph tags read from `package.json`
- Absolute import paths

Upcoming:

- OpenGraph content strategy with React Helmet
- Webfontloader
- Improved manifest with PWA Manifest
- Scroll lock across devices with BrowserSync
- Responsive images

## Usage

`npm init react-app my-app --scripts-version puding`

or

`yarn create react-app my-app --scripts-version puding`

Refer to [Create React App](https://github.com/facebook/create-react-app) documentation on how to non-destructively upgrade the project, or how to `eject` to fully customize the underlying configuration.

## Dependencies

These additional dependencies were added to [those specified by Create React App](https://github.com/facebook/create-react-app/blob/next/packges/react-scripts/package.json):

- `@mdx-js/mdx`, `@mdx-js/loader`
- `@svgr/webpack`
- `babel-plugin-macros`
- `classnames`
- `copy-webpack-plugin`
- `filewatcher-webpack-plugin` // TODO: Upgrade deps (`npm audit`)
- `foundation-sites`
- `front-matter`
- `importAll.macro`
- `multicat`
- `node_sass`
- `react-hot-loader`
- `react-router-dom`
- `react-snapshot`

## License & Contributors

MIT © [Cofab](https://github.com/cofablab)

- [Contributors](https://github.com/cofablab/puding/graphs/contributors)

---

You can find more tools like this on the [Cofab](https://cofablab.com/) website.

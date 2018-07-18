# Puding

> [**Create React App**](https://github.com/facebook/create-react-app) fork by Cofab

[![NPM](https://img.shields.io/npm/v/puding.svg)](https://www.npmjs.com/package/puding)

> Intended for prototyping experiments, delivered as PWAs

Features:

- Hot reloading in development
- Static snapshotting for production
- SASS & Foundation 6
- Inline SVG loader & component
- [Multicat](https://github.com/cofablab/multicat) analytics (GA, Fb pixel, Mixpanel, ...)
- Markdown (& front-matter) support
- Netlify CMS
- Utilities and helpers (classnames, ...)

Upcoming:

- OpenGraph content strategy (& React Helmet)
- PWA Manifest
- Redux & Router
- Webfontloader
- Responsive images

## Usage

`npm init react-app my-app --scripts-version puding`

or

`yarn create react-app my-app --scripts-version puding`

Refer to [Create React App](https://github.com/facebook/create-react-app) documentation on how to non-destructively upgrade the project, or how to `eject` to fully customize the underlying configuration.

## Dependencies

These additional dependencies were added to [those specified by Create React App](https://github.com/facebook/create-react-app/blob/next/packges/react-scripts/package.json):

- `classnames`
- `copy-webpack-plugin`
- `filewatcher-webpack-plugin` // TODO: Upgrade deps (`npm audit`)
- `foundation-sites`
- `marked`
- `multicat`
- `node_sass`
- `react-hot-loader`
- `react-snapshot`
- `svg-inline-loader`
- `svg-inline-react`
- `yaml-front-matter`

## License

MIT © [Cofab](https://github.com/cofablab)
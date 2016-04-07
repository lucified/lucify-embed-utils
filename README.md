
# Utilities for embedding (with) React components

## About 

This is a pre-release of a package belonging to the Lucify platform. It has been published merely to satisfy dependencies of other packages. Any APIs may change without notice.

This package contains some utilities for:
- Making React components embeddable in iframes, with support for iframe resizing
- Embedding external web sites in React applications with iFrames, with support for automatic iframe resizing

IFrame resizing is based on the [`iframe-resizer`](https://github.com/davidjbradshaw/iframe-resizer) project by David Bradshaw.

## IFrameEmbed

```
import { IFrameEmbed } from 'lucify-embed-utils'
// Use IFrameEmbed as regular React Component
```

React component for embedding a web page in an `iframe`. The web page to be embedded should include the [`iframeResizer.contentWindow.min.js`](https://github.com/lucified/lucify-embed-utils/tree/master/src/iframeResizer.contentWindow.min.js) for resizing to work.

The only React prop is `url`, which is the URL for the page to be embedded. The component will initialize `iframe-resizer` to support automatic resizing of the page.

## Notes

The original `iframe-resizer` implementation unfortunately does not work properly when the module is loaded twice. This can happen if `iframe-resizer` is a dependency for multiple submodules of a project. The forked resize
[implementation](https://github.com/davidjbradshaw/iframe-resizer) in this project makes sure it is loaded only once.

## TODO

Add code for generating embed codes.

## License

MIT

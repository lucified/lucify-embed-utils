
# Utilities for embedding (with) React components

## About 

This is a pre-release of a package belonging to the Lucify platform. It has been published merely to satisfy dependencies of other packages. Any APIs may change without notice.

This package contains some utilities for:
- Making React components embeddable in iframes, with support for iframe resizing
- Embedding external web sites in React applications with iFrames, with support for automatic iframe resizing

IFrame resizing is based on the [iframe-resizer](https://github.com/davidjbradshaw/iframe-resizer) project by David Bradshaw.

## IFrameEmbed

```
import { IFrameEmbed } from 'lucify-embed-utils'
// Use IFrameEmbed as regular React Component
```

React component for embedding a web page in an `iframe`. The web page should include the `iframeResizer.contentWindow.min.js` code from https://github.com/davidjbradshaw/iframe-resizer.

The only prop is the URL for the page to be embedded. The component will take care of resizing the page.

## TODO

Add code for generating embed codes.

## License

MIT

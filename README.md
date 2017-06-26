# huy
> useful h function ui elements

This module exports a collection of common ui elements you can import straight into your [hyperapp](https://github.com/hyperapp/hyperapp) projects. Each custom element is described in [h](https://github.com/https://github.com/hyperhype/hyperscript) function calls and returns a virtual node.

## Elements

Signature is generally (`props{}`,`children[]`). Self closing elements like `input` don't accept children. Huy elements extend any props passed to them.

- img - no custom supports
- svg - supports xlink:href
- link - supports href internal routing
- input - supports debounce action on change

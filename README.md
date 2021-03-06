Reproduction for [React Issue #17804](https://github.com/facebook/react/issues/17804).

## Bug Report

Probably related to https://github.com/facebook/create-react-app/issues/5276 &mdash; *Dynamic import doesn't work with SVG imported as ReactComponents*.

~~https://github.com/facebook/react/issues/17804~~ &mdash; belongs in `create-react-app` instead.

## Two projects

* `replicate-indirect-svg` &mdash; defines an NPM package [replicate-indirect-svg](https://www.npmjs.com/package/replicate-indirect-svg) that includes an SVG that has been imported using the pattern `import {ReactComponent as Foo} from "./foo.svg"`

* `import-indirect-svg` &mdash; uses that NPM package and fails in the browser (from `npm run start`) with this error:

> Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
> 
> Check the render method of `Logo`.

## Code

Here are code excerpts, slightly simplified.

### 1. Package

The package project defines a Component `Logo` in `src/App.tsx`:

    import React from 'react'
    import {ReactComponent as LogoSvg} from './logo.svg'
    
    export const Logo = () => <LogoSvg className="App-logo"/>

To build a publishable version of it, `npm run prepare`.

### 2. Import

The importing project uses it in its own `src/App.tsx`:

    import { Logo } from 'replicate-indirect-svg/lib/App'

    const App = () => <Logo/>

To run it, `npm install && npm run start`

### 3. Compiled

The compiled JS inside the package looks like this:

    import { ReactComponent as LogoSvg } from './logo.svg';

    export const Logo = () => React.createElement(LogoSvg);

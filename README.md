Two projects:

* `replicate-indirect-svg` &mdash; defines an NPM package [replicate-indirect-svg](https://www.npmjs.com/package/replicate-indirect-svg) that includes an SVG that has been imported using the pattern `import {ReactComponent as Foo} from "./foo.svg"`

* `import-indirect-svg` &mdash; uses that NPM package and fails in the browser (from `npm run start`) with this error:

> Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
> 
> Check the render method of `Logo`.

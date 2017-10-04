## Jest Overriding Require function with [@std/esm](https://www.npmjs.com/package/@std/esm)

This is a solution for below stackover flow question

https://stackoverflow.com/questions/46433678/specify-code-to-run-before-any-jest-setup-happens

The question was if we can override the default require function to something like below

```javascript
require = require("@std/esm")(module, { esm: "js", cjs: true });
```

This repo demonstrates how to do the same by creating a custom `jestload.js`.

To run the code simple do below

```shell
npm install
npm test
```
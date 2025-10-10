# TypeScript

After decades of programming with strongly typed languages (C, C++, Java), the change to TypeScript is a significant shift in terms of what is and isn't possible and why. This [TypeScript for Java Developers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html) page from the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) is a great reference for me whenever jumping back into coding with TypeScript.

The content that follows in this section will be abbreviated notes and code snippets specific to me. Anyone other than me reading this for the purposes of learning about Typescript would be well advised to read the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) instead. 

## Basics

:::tip

TypeScript transpiles to JavaScript so at runtime all of the extra type checking etc has been removed. Stop looking for the TypeScript equivalent of casting! :D Use something like ZOD or Valibot if you need/want runtime type validation.

:::

## Managing packages and patching

[depcheck](https://www.npmjs.com/package/depcheck) or [npm-check](https://www.npmjs.com/package/npm-check) could be useful (I've not tried either yet) for removing packages which are not used. This isn't the same as npm prune which only removes modules from the `node_modules/` folder but not from package.json. 


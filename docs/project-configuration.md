# ⚙️ Project Configuration

The application has been bootstrapped using `Create Next App` for simplicity reasons. It allows us to create applications quickly without dealing with a complex tooling setup such as bundling, transpiling etc. Next also allows us to create multi-page applications easily, without worrying about complex routing libraries.

## ESLint

ESLint is a linting tool for JavaScript. By providing specific configuration defined in the`.eslintrc.js` file it prevents developers from making silly mistakes in their code and enforces consistency in the codebase.

[ESLint Configuration File](../.eslintrc.json)

## TypeScript

ESLint is great for catching some of the bugs related to the language, but since JavaScript is a dynamic language ESLint cannot check data that run through the applications, which can lead to bugs, especially on larger projects. That is why TypeScript should be used. It is very useful during large refactors because it reports any issues you might miss otherwise. When refactoring, change the type declaration first, then fix all the TypeScript errors throughout the project and you are done. One thing you should keep in mind is that TypeScript does not protect your application from failing during runtime, it only does type checking during build time, but it increases development confidence drastically anyways. Here is a [great resource on using TypeScript with React](https://react-typescript-cheatsheet.netlify.app/).

## Material UI

Material UI has been used as a design system library. It allows you to quickly bootstrap projects without concerning yourself with styling. As this repository is mostly aimed at demonstrating solid architecture principles custom styling is not a concern at the moment.

## Zustand

Within a checkout it is likely we will have state that will want to be shared across multiple levels, and modified frequently. Whilst Context was a consideration, it is my opinion that Zustand will do a better job at updating state frequently than using Context.

As well as this I think the developmet experience would be better, and will make future modifications more seamless.

This is currently up for discussion so please raise an issue if you think there could be a better solution.

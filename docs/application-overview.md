# 💻 Application Overview

This is where important information about the project goes.

## Commit Messaging

This repository makes use of semantic commit messaging format. More information can be found at [https://www.conventionalcommits.org/](https://www.conventionalcommits.org/)

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

### Example

```
feat (scope): add hat wobble
^--^ ^-----^  ^------------^
|    |        |
|    |        +---> Summary: write in present tense.
|    +------------> Scope: is optional, normally this will be a ticket number.
+-----------------> Type: chore, docs, feat, fix, refactor, style, or test.
```

List of semantic types:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Absolute imports

Absolute imports should always be configured and used because it makes it easier to move files around and avoid messy import paths such as `../../../Component`. Wherever you move the file, all the imports will remain intact.

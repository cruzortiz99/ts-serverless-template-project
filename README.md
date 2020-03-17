# Serverless Typescript Template

## Introduction

This is a basic template, holding only the basic setup of a project that integrates serverless and typescript. Some of the fixtures of this template is:

- Typescript
- Eslint
- Prettier
- Test (mocha, chai and sinon)
- Serverless

## Install dependencies

```shell
npm i
# or
yarn install
```

## Run the api

```shell
npm run star
# or
yarn start
```

## Run a function

```shell
npm run dev [function]
# or
yarn dev [function]
```

## Run tests

```shell
npm run test
# or
yarn test
```

## Run eslint to fix style

```shell
npm run lint
# or
yarn lint
```

By default it will lint the paths `src/**/*` and `tests/**/*` searching for tests to run ( **\*.spec.ts** files), you can add paths to the command above.

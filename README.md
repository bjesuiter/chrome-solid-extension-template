<div align="center">
<img width="128" src="/public/icons/128x128.png" alt="logo"/>
<h1> Chrome Extension Boilerplate with<br/>SolidJS 1.x + Vite v6 + TypeScript 5.x + Manifest V3 + Hot Relaod</h1>

![](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![](https://badges.aleen42.com/src/vitejs.svg)

<!-- ![GitHub action badge](https://github.com/fuyutarow/solid-chrome-extension-template/actions/workflows/build.yml/badge.svg) -->

<!-- > This project is listed in the [Awesome Vite](https://github.com/vitejs/awesome-vite) -->

</div>

## Update: Dependencies are current (as of 2025-04-18)

## Intro <a name="intro"></a>

This boilerplate is made for creating chrome extensions using SolidJS and Typescript.

> The focus was on improving the build speed and development experience with Vite.

## Features <a name="features"></a>

- [SolidJS](https://www.solidjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Chrome Extension Manifest Version 3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Tailwind-Motion Plugin (for slick animations!)](https://docs.rombo.co/tailwind)
- Hot Reload (Live reload)

## Installation <a name="installation"></a>

### Procedures <a name="procedures"></a>

1. Clone this repository.
2. Change `name` and `description` in package.json => **Auto synchronizes with manifest**
3. Run `bun i` or `npm i` (check your node version >= 16)
4. Run `bun dev` or `npm run dev`
5. Load Extension on Chrome
   1. Open - Chrome browser
   2. Access - chrome://extensions
   3. Check - Developer mode
   4. Find - Load unpacked extension
   5. Select - `dist` folder in this project (after dev or build)
6. If you want to build in production, Just run `bun run build` or `npm run build`.

## Screenshots <a name="screenshots"></a>

<img width="957" alt="image" src="https://user-images.githubusercontent.com/14998939/182227580-31e390cd-386b-426a-adba-e8a31a2f303d.png">

## Documents <a name="documents"></a>

- [Vite Plugin](https://vitejs.dev/guide/api-plugin.html)
- [ChromeExtension](https://developer.chrome.com/docs/extensions/mv3/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Rollup-plugin-chrome-extension](https://www.extend-chrome.dev/rollup-plugin)

## Dev Notes

### Using Images

- two ways:

  1. Use a folder under `./public`
  2. Use a folder under `./src/assets`

- Images under `./public` are copied to `./dist` by vite automatically.
  For example: `./public/icons/128x128.png` will be copied to `./dist/icons/128x128.png` and will be available at `chrome-extension://<extension-id>/icons/128x128.png`

- Images under `./src/assets` will be processed by the bundler and will basically be "compiled" into the output. This is better because it may optimize the images.

- Images linked in the manifest need to be available from the `./public folder`

### Using Icons

- Use the `unplugin-icons` plugin to use icons in your project.
- Find icons here: https://icon-sets.iconify.design/
- Use the following syntax to use an icon:

```ts
// Syntax: ~icons/icon-set-name/icon-name
// The name for the import can be anything you want
import DeviconLinux from "~icons/devicon/linux";
```

- How to setup unplugin-icons: https://github.com/unplugin/unplugin-icons

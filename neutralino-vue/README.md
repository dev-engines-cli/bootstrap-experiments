# Neutralino.js Template With Vite.js and Vue.js


## Neutralino.js

* [Neutralino.js](https://github.com/neutralinojs/neutralinojs)
* [Vite.js](https://vitejs.dev) bundler
* [Vue.js](https://vuejs.org)


## Installation

* Clone this repository
* `cd` into the directory
* `npm i`
* `npx neu update`
* change these things according to your app
  * `name` and `description` in `package.json`
  * `applicationId`, `modes.window.title` and `cli.binaryName` in `neutralino.config.js`
  * `title` tag in `index.html`
  * `public/favicon.ico`
  * `public/icons/appIcon.png`


## Usage

* `npm run serve` starts the dev server of vite in `8080` port. (you can change it in the `vite.config.js`)
* Develop your application in `src`
* `npm run serve:neu` builds your app and opens it in the `neu` window.
* After you are done, `npm run build` build the js app and packages it with `neu`.
* Your app binaries are at `dist`.


## Upcoming

* Run dev server directly in Neutralino.js window (Vite.js must some how build on every change and then `neu listen`)

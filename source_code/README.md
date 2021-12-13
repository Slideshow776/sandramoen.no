# Frontend in Vue

> My webpage written as a single page application in Vue.js

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

This project uses [Vue Material](https://vuematerial.io)

## Updating the webpage
To add new games add information in file 'source_code/src/assets/games.json'
## Updating:
1. run `npm run build` in `source_code/src`.
2. Copy everything from `source_code/dist` and paste it in the top directory `/`.
3. push to `git`.


## Google Tag Manager events:
* 'Github-link'
* 'Facebook-link'
* 'Youtube-link'
* Games, as found in 'source_code/src/assets/games.json': '{{title}}'

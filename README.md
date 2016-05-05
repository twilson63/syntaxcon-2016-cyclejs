# SyntaxCon May 6 2016 - CycleJS

## Getting started with CycleJS

### Setup Babel

``` sh
npm i json -g
export project=project_name
mkdir $project
cd $project
npm init -y
npm i babel-cli babel-preset-es2015 browserify babelify wzrd -D
json -I -f package.json -e 'this.browserify = { "transform": [["babelify", { "presets": ["es2015"] }]]}'
json -I -f package.json -e 'this.scripts.start = "wzrd src/app.js"'

mkdir src
touch src/app.js
```

### Install Rx and CycleJS

``` sh
npm i rx @cycle/core @cycle/dom @cycle/http -S
```

### Create index.html

``` html
<!doctype html>
<html>
  <head>
    <title>Syntax Con 2016 - CycleJS Talk - @twilson63</title>
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
    <link href='//fonts.googleapis.com/css?family=Raleway:400,300,600' rel='stylesheet' type='text/css'>		
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
		<link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css">
  </head>
  <body>
    <div id="app"></div>
    <script src="src/app.js"></script>
  </body>
</html>
```

### Create src/app.js

``` js
const { Observable } = require('rx')
const { run } = require('@cycle/core')
const { makeDOMDriver, h1 } = require('@cycle/dom')

const main = _ => ({
  DOM: Observable.of({ title: 'Hello World '})
    .map(state => h1(state.title))
})

run(main, {
  DOM: makeDOMDriver('#app')
})
```

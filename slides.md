title: CycleJS
author:
  name: Tom Wilson
  twitter: twilson63
  url: http://github.com/twilson63
output: index.html
controls: true
theme: jdan/cleaver-retro

--

<h1>
<center>
  <img src="/cyclejs_logo.svg" height="100px" />
  CycleJS
</center>
</h1>

A functional and reactive JavaScript framework for cleaner code

--

### Whoami

Tom Wilson

VP of Software Development
Tabula Rasa Healthcare
Jack Russell Software

* <3 JavaScript
* <3 NodeJS
* <3 CouchDB

--

# What is CycleJS?

--

### CycleJS is

* Another JavaScript framework
* functional
* reactive
* clean code

--

### What is functional programming?

* programming paradigm
* higher order functions
* declarative
* pure functions
* referential transparency

--

### What is reactive programming?

* programming paradigm
* data is automatically updated
* declarative
* example: spreadsheet

--

![Spreadsheet](/spreadsheet.png)

--

### Understanding Higher order functions

```
function map (fn) {
  return function (container) {
    container.value = fn(container.value)
  }
}
```

--

### Understanding Pure functions

functions with no side effects

* What is an impure function
* What are side effects

--

### Impure functions

```
var a = 1

function add (b) {
  return a + b
}
```

--

### Side Effects

```
document.getElementById('#button')
  .addEventListener('click', function (e) {
    document
      .getElementById('.text')
      .innerText = 'Hello World'
    })
```

--

### Pure functions

* Always return the same output with the same input
* Have no side effects

--

### Why do I want to learn CycleJS?

* Implement solutions quickly
* Create testable and maintainable code

--

### Component Check

> Cycle.js is conceptionally maybe the best framework currently. "Best" in the sense of bug free, testability and logical structure. But for me it is really hard to write and understand. Too hard actually. I hope this changes in the future, too.

https://github.com/Mercateo/component-check

--

### Concepts

<center>
<svg style="width: 500px;" viewBox="0 0 181 156" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    <!-- Generator: Sketch 3.3.2 (12043) - http://www.bohemiancoding.com/sketch -->
    <title>Group</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="actuators-senses-input-output" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Group" sketch:type="MSLayerGroup" transform="translate(-8.000000, -3.000000)">
            <path d="M55,95.5 C53.3431458,95.5 52,96.8431458 52,98.5 C52,100.156854 53.3431458,101.5 55,101.5 C56.6568542,101.5 58,100.156854 58,98.5 C58,96.8431458 56.6568542,95.5 55,95.5 L55,95.5 Z M55,103.5 C52.2385763,103.5 50,101.261424 50,98.5 C50,95.7385763 52.2385763,93.5 55,93.5 C57.7614237,93.5 60,95.7385763 60,98.5 C60,101.261424 57.7614237,103.5 55,103.5 L55,103.5 Z M55,91 C50,91 45.73,94.11 44,98.5 C45.73,102.89 50,106 55,106 C60,106 64.27,102.89 66,98.5 C64.27,94.11 60,91 55,91 L55,91 Z" id="Shape" fill="#67AB83" sketch:type="MSShapeGroup"></path>
            <path d="M91,17 L99,17 C100.104569,17 101,17.8954305 101,19 L101,35 C101,36.1045695 100.104569,37 99,37 L91,37 C89.8954305,37 89,36.1045695 89,35 L89,19 C89,17.8954305 89.8954305,17 91,17 L91,17 Z M91,19 L91,21 L99,21 L99,19 L91,19 L91,19 Z M99,23 L91,23 L91,25 L99,25 L99,23 L99,23 Z M99,33 L97,33 L97,35 L99,35 L99,33 L99,33 Z" id="Shape" fill="#8B8B8B" sketch:type="MSShapeGroup"></path>
            <path d="M134.6875,58 C131.478125,58.4021888 129,61.1600547 129,64.5088919 L134.6875,64.5088919 L134.6875,58 Z M129,69.4336525 C129,73.0601461 131.910149,76 135.5,76 C139.089851,76 142,73.0601461 142,69.4336525 L142,66.1504788 L129,66.1504788 L129,69.4336525 Z M136.3125,58 L136.3125,64.5088919 L142,64.5088919 C142,61.1600547 139.51375,58.4021888 136.3125,58 L136.3125,58 Z" id="Shape" fill="#67AB83" sketch:type="MSShapeGroup"></path>
            <path d="M64,71 L46,71 L46,59 L64,59 L64,71 Z M64,57 L46,57 C44.89,57 44,57.89 44,59 L44,71 C44,72.1045695 44.8954305,73 46,73 L53,73 L53,75 L51,75 L51,77 L59,77 L59,75 L57,75 L57,73 L64,73 C65.1045695,73 66,72.1045695 66,71 L66,59 C66,57.89 65.1,57 64,57 L64,57 Z" id="Shape" fill="#67AB83" sketch:type="MSShapeGroup"></path>
            <path d="M103,137 C103,132.581722 99.418278,129 95,129 C90.581722,129 87,132.581722 87,137 C87,141.418278 90.581722,145 95,145 C97.1217319,145 99.1565632,144.157145 100.656854,142.656854 C102.157145,141.156563 103,139.121732 103,137 L103,137 Z M105,137 C105,142.522847 100.522847,147 95,147 C92.3478351,147 89.804296,145.946432 87.9289322,144.071068 C86.0535684,142.195704 85,139.652165 85,137 C85,134.347835 86.0535684,131.804296 87.9289322,129.928932 C89.804296,128.053568 92.3478351,127 95,127 C97.6521649,127 100.195704,128.053568 102.071068,129.928932 C103.946432,131.804296 105,134.347835 105,137 L105,137 Z M93,134.5 C93,135.3 92.3,136 91.5,136 C90.7,136 90,135.3 90,134.5 C90,133.7 90.7,133 91.5,133 C92.3,133 93,133.7 93,134.5 L93,134.5 Z M100,134.5 C100,135.3 99.3,136 98.5,136 C97.7,136 97,135.3 97,134.5 C97,133.7 97.7,133 98.5,133 C99.3,133 100,133.7 100,134.5 L100,134.5 Z M95,142.23 C93.25,142.23 91.71,141.5 90.81,140.42 L92.23,139 C92.68,139.72 93.75,140.23 95,140.23 C96.25,140.23 97.32,139.72 97.77,139 L99.19,140.42 C98.29,141.5 96.75,142.23 95,142.23 L95,142.23 Z" id="Shape" fill="#9AC572" sketch:type="MSShapeGroup"></path>
            <path d="M55.2629475,50.7749319 L56.5666773,53.6127884 L58.9921343,51.7741645" id="Path-15" stroke="#979797" sketch:type="MSShapeGroup"></path>
            <path d="M78.5144763,136.45468 L81.3746538,135.200677 L79.57864,132.743501" id="Path-16" stroke="#979797" sketch:type="MSShapeGroup"></path>
            <path d="M134.02919,115.721056 L132.72546,112.883199 L130.300003,114.721823" id="Path-17" stroke="#979797" sketch:type="MSShapeGroup"></path>
            <path d="M111.161872,24.8221315 L108.324015,26.1258613 L110.162639,28.5513184" id="Path-18" stroke="#979797" sketch:type="MSShapeGroup"></path>
            <path d="M81.0177633,26.688289 C81.0177633,26.688289 61.7791502,33.3178065 56.9502303,52.9876383" id="Path-19" stroke="#979797" sketch:type="MSShapeGroup"></path>
            <path d="M57.6912179,111.66689 C57.6912179,111.66689 62.4372811,128.146248 80.7586655,135.100516" id="Path-20" stroke="#979797" sketch:type="MSShapeGroup"></path>
            <path d="M109.188709,135.648001 C109.188709,135.648001 125.816854,130.317924 132.750631,113.283064" id="Path-21" stroke="#979797" sketch:type="MSShapeGroup"></path>
            <path d="M134.446822,53.0691597 C134.446822,53.0691597 129.720806,33.5138161 109.124839,26.3305747" id="Path-22" stroke="#979797" sketch:type="MSShapeGroup"></path>
            <path d="M133.081633,87 C134.186202,87 135.081633,87.8954305 135.081633,89 L135.081633,93.5 C135.081633,93.5 137.081633,93.25 137.081633,94.25 C137.081633,94.25 139.081633,94 139.081633,95 C139.081633,95 141.081633,94.75 141.081633,95.75 C141.081633,95.75 143.081633,95.5 143.081633,96.5 L143.081633,100 C143.081633,101 140.081633,106 140.081633,107 L132.081633,107 C132.081633,107 130.081633,100 127.081633,98 C127.081633,98 126.081633,92 131.081633,97 L131.081633,89 C131.081633,87.8954305 131.977063,87 133.081633,87 L133.081633,87 Z" id="Shape" fill="#67AB83" sketch:type="MSShapeGroup"></path>
            <text id="Human" sketch:type="MSTextLayer" font-family="Source Sans Pro" font-size="10" font-weight="normal" sketch:alignment="middle" fill="#7DA25A">
                <tspan x="80.0595918" y="158">Human</tspan>
            </text>
            <text id="Senses" sketch:type="MSTextLayer" font-family="Source Sans Pro" font-size="10" font-weight="normal" sketch:alignment="right" fill="#67AB83">
                <tspan x="9.43081633" y="101">Senses</tspan>
            </text>
            <text id="Actuators" sketch:type="MSTextLayer" font-family="Source Sans Pro" font-size="10" font-weight="normal" fill="#67AB83">
                <tspan x="149" y="100.980936">Actuators</tspan>
            </text>
            <text id="Input" sketch:type="MSTextLayer" font-family="Source Sans Pro" font-size="10" font-weight="normal" fill="#67AB83">
                <tspan x="149" y="70">Input</tspan>
            </text>
            <text id="Output" sketch:type="MSTextLayer" font-family="Source Sans Pro" font-size="10" font-weight="normal" sketch:alignment="right" fill="#67AB83">
                <tspan x="8.17" y="70">Output</tspan>
            </text>
            <text id="Computer" sketch:type="MSTextLayer" font-family="Source Sans Pro" font-size="10" font-weight="normal" sketch:alignment="middle" fill="#747474">
                <tspan x="74.4195918" y="10">Computer</tspan>
            </text>
        </g>
    </g>
</svg>
</center>

--

### Observables

```
Observable.fromEvent(document.getElementById('.btn'), 'click')
  .subscribe(function (ev) {
    console.log('clicked')  
  })
```

* RxJS http://reactivex.io/
* xStream http://staltz.com/xstream/
* MostJS https://github.com/cujojs/most#monadic-streams-for-reactive-programming

--

![cyclejs](/cyclejs-flow.png)

--

### cyclejs

```
function main (sources) {
  return {
    DOM: Observable.of({ title: 'Hello World'})
      .map(state => h1(state.title))
  }
}

run(main, {
  DOM: makeDOMDriver('#app')
})
```

--

### <a href="https://glebbahmutov.com/draw-cycle/" target="_blank">Draw Cycle</a>

<iframe width="100%" height="600px" src="https://glebbahmutov.com/draw-cycle/"></iframe>

--

## Setup

```
npm init
npm install rx @cycle/core @cycle/dom -S
```

```
<html>
  ...
  <body>
    <div id="app"></div>
    ...
  </body>
</html>
```

--

### App.js

```
import { Observable } from 'rx'
import { run } from '@cycle/core'
import { makeDOMDriver, div, h1, button, p } from '@cycle/dom'

run(main, {
  DOM: makeDOMDriver('#app')
})
```

--

### App.js Cont.

```
function main (sources) {
  const counter = 0
  const counter$ = DOM.select('.btn').events('click')
    .map(e => counter + 1).startWith(0)

  const state$ = Observable.of({ title: 'Hello World'})

  return {
    DOM: Observable.combineLatest(state$, counter$)
      .map([state, counter] => div[
        h1(state.title),
        button('.btn', 'Add')
        p('counter: ' + counter.toString())  
      ])
  }
}
```

--

### http

```
npm install @cycle/http -S
```

```
import { makeHTTPDriver } from '@cycle/http'
```

```
function main (sources) {
  const request$ = Observable.of({
    url: DOC_URL,
    method: 'GET'
  })

  const response$ = sources.HTTP
    .filter(res$ => res$.request.url === DOC_URL).mergeAll()
    .map(res => JSON.parse(res.text))

  return {
    DOM: response$
      .map(data => div(JSON.stringify(data))),
    HTTP: request$
  }
}
```

--

### Components

--

### Model View Intent

--

### References

* http://cycle.js.org/
* https://medium.com/@whitecolory/demystifying-cycle-js-core-source-7bcae39fb64c#.3zngkrknu
* https://glebbahmutov.com/draw-cycle/

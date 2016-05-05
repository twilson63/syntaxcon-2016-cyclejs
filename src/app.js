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

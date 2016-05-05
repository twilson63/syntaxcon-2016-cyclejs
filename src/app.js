const { Observable } = require('rx')
const { run } = require('@cycle/core')
const { makeDOMDriver, h1 } = require('@cycle/dom')
const { makeHTTPDriver } = require('@cycle/http')

//const main = require('./components/main')
const ArrowKeyDriver = _ => _ =>
  Observable
    .fromEvent(document.body, 'keydown')
    .map(ev => {
      if (ev.keyCode === 39) return 'right'
      if (ev.keyCode === 37) return 'left'
      return 'none'
    })
    .filter(v => v !== 'none')

const main = ({DOM, NAV}) => {
  var slide = 0
  const key$ =
    NAV
    .map(dir => dir === 'left' ? slide-- : slide++ )
    .startWith(0)

  return {
    DOM: key$
      .map(v => h1(v.toString()))
  }
}

run(main, {
  DOM: makeDOMDriver('#app'),
  HTTP: makeHTTPDriver(),
  NAV: ArrowKeyDriver()
})

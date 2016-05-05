const { makeDOMDriver, h3 } = require('@cycle/dom')
const { split, head } = require('ramda')
const css = require('./styles')

const lines = split('\n')

const render = (slide, transition) => {
  const result = p('No Slide')
  const first = lines(slide)
    .head()

  result = test(/^###/, line) ? h3({ style: css.h3 }, line.replace('###')) : null

  return result
}

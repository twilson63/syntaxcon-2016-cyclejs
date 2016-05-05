const { Observable } = require('rx')
const { h1 } = require('@cycle/dom')

const model = require('./model')
const intent = require('./intent')
const view = require('./view')


const component = sources => {

  const actions$ = intent(sources)
  const model$ = model(sources, actions$)
  const view$ = view(model$)

  return {
    DOM: view$,
    HTTP: model$.HTTP
  }
}

module.exports = component

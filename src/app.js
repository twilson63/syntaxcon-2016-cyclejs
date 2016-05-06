const { Observable } = require('rx')
const { run } = require('@cycle/core')
const { makeDOMDriver, h1, div, p, form,
  label, input, textarea, button, a } = require('@cycle/dom')
const { makeHTTPDriver } = require('@cycle/http')
const serialize = require('form-serialize')

const main = sources => {
  const DOC_URL = 'https://pouchdb.herokuapp.com/foo/test'
  const request$ = Observable.of({ url: DOC_URL})
  //const request$ = actions(sources)

  const response$ = sources.HTTP
    .filter(res$ => res$.request.url === DOC_URL)
    .mergeAll()
    .map(res => JSON.parse(res.text))

  return {
    DOM: response$
      .map(state => div('.container', [
        state.title ? div([
          div('.jumbotron', [
            h1(state.title)
          ]),
          //formView(state)
        ]) : null,
        //state.ok ? congratsView(state) : null
      ])),
    HTTP: request$
  }
}

run(main, {
  DOM: makeDOMDriver('#app'),
  HTTP: makeHTTPDriver()
})


function formView (state) {
  return form([
    input({type: 'hidden', name: '_id', value: state._id}),
    input({type: 'hidden', name: '_rev', value: state._rev}),
    div('.form-group', [
      label('Title'),
      input('.form-control', { type: 'text', name: 'title', value: state.title })
    ]),
    div('.form-group', [
      label('Body'),
      textarea('.form-control', { name: 'body'}, state.body)
    ]),
    div('.form-group', [
      button('.btn.btn-primary', 'Update')
    ])
  ])
}

function actions (sources) {
  const DOC_URL = 'https://pouchdb.herokuapp.com/foo/test'
  const get$ = Observable.of({ url: DOC_URL})
  const update$ = sources.DOM.select('form').events('submit')
    .map(ev => {
      ev.preventDefault()
      return serialize(ev.srcElement, { hash: true })
    })
    .map(data => ({
      method: 'PUT',
      url: DOC_URL,
      send: data,
      type: 'application/json'
    }))

  return get$.merge(update$)
}

function congratsView (state) {
  return div([
    h1('Updated doc successfully!'),
    p('rev: ' + state.rev),
    a({ href: '/'}, 'Back')
  ])
}

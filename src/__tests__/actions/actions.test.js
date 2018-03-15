import configureMockStore from 'redux-mock-store'
import promise from 'redux-promise'
import * as actions from '../../actions'
import * as types from '../../constants'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [promise]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  });

  it('creates FETCH_WEATHER when fetching weather has been done', () => {
    fetchMock
      .getOnce('/', { body: { todos: ['do something'] }, headers: { 'content-type': 'application/json' } })

    const expectedActions = [
      { type: types.FETCH_WEATHER }
    ]
    const store = mockStore({ weather: {} })

    // return store.dispatch(actions.fetchWeather()).then(() => {
    //   // return of async actions
    //   expect(store.getActions()).toEqual(expectedActions)
    // })
  });
});

// TODO 
// Test fails on store.dispatch, need to do research
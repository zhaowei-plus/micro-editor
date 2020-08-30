import { createStore, combineReducers } from 'redux'

import page from './page'
import active from './active'

export default createStore(combineReducers({
  page,
  active,
}))

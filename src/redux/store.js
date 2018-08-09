import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import pokeReducer from './reducers/pokeReducer.js';
import rootSaga from './saga/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = createStore(
  combineReducers({
    pokeReducer
  }),
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default rootReducer;
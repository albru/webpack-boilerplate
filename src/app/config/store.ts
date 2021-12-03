import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import listSaga from '@/entities/list/model/saga';
import listReducer from '@/entities/list/model/slice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  list: listReducer,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(listSaga);

export default store;

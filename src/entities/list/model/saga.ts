import { call, put, StrictEffect, takeLatest } from 'redux-saga/effects';

import listApi from '@/shared/api/list/list';

import { setList, getList } from './slice';

type Test = { data: { [key: string]: string } };

function* getListSaga(): Generator<StrictEffect, void, Test> {
  try {
    const response: Test = yield call(listApi.get);
    const { data } = response;
    yield put(setList({ ...data }));
  } catch (error) {
    //
  }
}

function* listSaga(): Generator<unknown> {
  yield takeLatest(getList.type, getListSaga);
}

export default listSaga;
